import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Dialog from '@material-ui/core/Dialog';
import {Box} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import { Link } from 'react-router-dom';
import Register from '../../features/Auth/components/Register';
import { AccountCircle, Close } from '@material-ui/icons';
import Login from '../../features/Auth/components/Login';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { logout } from '../../features/Auth/userSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const MODE = {
  LOGIN: 'login', 
  REGISTER: 'register'
};

export default function Header() {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.user.current);
  const isLoggedIn = !!loggedInUser.id;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState(MODE.LOGIN)
  const [anchorEl, setAnchorEl] = useState(null)


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleUserClick = (e) => {
    setAnchorEl(e.currentTarget)
  }
  const handleCloseMenu = () => {
    setAnchorEl(null)
  }
  const handleLogoutClick = () => {
    // const action = logout
    const action = logout()
    dispatch(action)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
         
          </Typography>
          <Link to="/todos"><Button color="inherit">Todos</Button></Link>
          <Link to="/albums"><Button color="inherit">Albums</Button></Link>
          <Link to="/counter"><Button color="inherit">Counter</Button></Link>
          {!isLoggedIn && (
             <Button onClick={handleClickOpen} color="inherit">Login</Button>
          )}
         {isLoggedIn && (
           <IconButton color="inherit" onClick={handleUserClick}>
             <AccountCircle />
           </IconButton>
         )}
        </Toolbar>
      </AppBar>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <IconButton className="closeButton" onClick={handleClose}>
          <Close />
        </IconButton>
        <DialogContent>
          {mode === MODE.REGISTER && (
            <>
          <Register closeDialog={handleClose} />
          <Box textAlign='center'>
            <Button color="primary" onClick={() => setMode(MODE.LOGIN)}>Already have an account. Login herre</Button>
          </Box>  
          </>
          )}
           {mode === MODE.LOGIN && (
            <>
          <Login closeDialog={handleClose} />
          <Box textAlign='center'>
            <Button color="primary" onClick={() => setMode(MODE.REGISTER)}>Dont have an account. Register herre</Button>
          </Box>  
          </>
          )}
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose} color="primary">
            Cancel
          </Button> */}
         
        </DialogActions>
      </Dialog>
      <Menu
  anchorEl={anchorEl}
  keepMounted
  open={Boolean(anchorEl)}
  onClose={handleCloseMenu}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'right',
  }}
  transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
  }}
  getContentAnchorEl={null}
>

  <MenuItem onClick={handleCloseMenu}>My account</MenuItem>
  <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
</Menu>
    </div>
  );
}

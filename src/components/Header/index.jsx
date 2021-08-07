import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';
import Register from 'features/Auth/components/Register';

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

export default function Header() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
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
          
          <Button onClick={handleClickOpen} color="inherit">Regiter</Button>
        </Toolbar>
      </AppBar>
      <Dialog disableBackdropClick disableEscapeKeyDown open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
  
        <DialogContent>
          <Register />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
         
        </DialogActions>
      </Dialog>
    </div>
  );
}

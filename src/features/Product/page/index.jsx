import { Grid, Box, Container, Paper } from "@material-ui/core";
import React from "react";

function ListPage(props) {
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className="left">
            <Paper elevation={0}> Left column </Paper>
          </Grid>
          <Grid item className="right">
          <Paper elevation={0}>  Right column </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;

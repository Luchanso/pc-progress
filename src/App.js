import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { LinearProgress } from "material-ui/Progress";
import Typography from "material-ui/Typography";
import CssBaseline from 'material-ui/CssBaseline';

const styles = {
  root: {
    flexGrow: 1
  }
};

const START_DATE = new Date(2018, 2, 1);
const END_DATE = new Date(2018, 7, 1);
const ONE_SECOND = 100;

class App extends Component {
  state = {
    progress: 0
  };

  componentDidMount() {
    this.handleUpdateProgress();
    this.timer = setInterval(this.handleUpdateProgress, ONE_SECOND);
  }

  render() {
    const { classes } = this.props;
    const { progress } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <Typography variant="display3">
          До нового компа
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
        <Typography variant="display3">
         { progress.toFixed(7) } %
        </Typography>
      </div>
    );
  }

  handleUpdateProgress = () => {
    this.setState({
      progress: 100 - (END_DATE - Date.now()) / (END_DATE - START_DATE) * 100
    });
  };
}

export default withStyles(styles)(App);

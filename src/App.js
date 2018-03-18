import React, { Component } from "react";
import { withStyles } from "material-ui/styles";
import { LinearProgress } from "material-ui/Progress";
import Typography from "material-ui/Typography";

const styles = {
  root: {
    flexGrow: 1,
    margin: 50
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
        <h1></h1>
        <Typography variant="display3">
          До нового компа: { progress } %
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
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

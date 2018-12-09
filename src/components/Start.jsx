import React from 'react' ;
import '../css/App.css';


export default class Start extends React.Component {
  constructor(props) {
    super(props)
    this.startTimerStart = this.startTimerStart.bind(this);
  }
  startTimerStart() {
    this.props.startTimer();
    this.props.appStartClick();
  }
  render() {
    return (
      <div className="Start">
        <button id="count" onClick={this.startTimerStart}>START QUIZ</button>
        <p id="mins"> min: {this.props.m} sec: {this.props.s} </p>
      </div>
    );
  }
}

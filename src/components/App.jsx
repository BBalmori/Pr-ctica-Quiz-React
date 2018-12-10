import React, { Component } from 'react';
import { connect } from 'react-redux';
import {questionAnswer, nextQuestion, prevQuestion, submit, restart, initQuestions, setImg, setStart, setReset} from '../redux/actions.js';
import Header from './Header.jsx';
import Botones from './Botones.jsx'
import Body from './Body.jsx'
import Input from './Input.jsx'
import GameOver from './GameOver.jsx'
import Start from './Start.jsx'
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.img = true;
    this.start = false;
    this.appPrevClick = this.appPrevClick.bind(this);
    this.appNextClick = this.appNextClick.bind(this);
    this.appSubmitClick = this.appSubmitClick.bind(this);
    this.appRestartClick = this.appRestartClick.bind(this);
    this.appResetClick = this.appResetClick.bind(this);
    this.appTips = this.appTips.bind(this);
    this.appImg = this.appImg.bind(this);
    this.appStartClick = this.appStartClick.bind(this);
    this.state = { time: {}, seconds: 30 };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  //botones
  appPrevClick() {
    this.props.dispatch(prevQuestion(this.props.currentQuestion, this.props.questions.length));
  }
  appNextClick() {
    this.props.dispatch(nextQuestion(this.props.currentQuestion, this.props.questions.length, this.props.questions));
  }
  appSubmitClick() {
    this.props.dispatch(submit(this.props.questions));
  }
  appRestartClick() {
    this.props.dispatch(restart());
    this.setState({time: {}, seconds: 30,});
    this.timer = 0;
  }
  appResetClick() {
    this.props.dispatch(setReset());
    this.componentDidMount();
  }
  appTips() {
    this.img = false;
    this.props.dispatch(setImg(this.img));
  }
  appImg() {
    this.img = true;
    this.props.dispatch(setImg(this.img));
  }
  appStartClick() {
    this.props.dispatch(setStart(this.start));
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
    let url = "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=5effb23b240e1ed4485d";
    let xhr = new XMLHttpRequest(); // the request
    xhr.open("GET", url, true); // true makes the request asynchronous
    xhr.onreadystatechange = function() {
    // es la funcion de retrollamada que sera ejecutada (invocada) cuando cambie
    // el valor de la propiedad readyState
        let status;
        let data;
        if(xhr.readyState === 4) {// readyState == XMLHttpResquest.DONE
            status = xhr.status;
            if (xhr.status === 200) {
                data = JSON.parse(xhr.responseText);
                this.props.dispatch(initQuestions(data));
            } else{
                console.error(xhr.statusText);
            }
        }
    }.bind(this);
    xhr.send();
  }

//countdown
  secondsToTime(secs){
    let hours = Math.floor(secs/(60 * 60));
    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes/60);
    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);
    let obj = {
     "h": hours,
     "m": minutes,
     "s": seconds
    };
    return obj;
  }
  startTimer() {
    if (this.timer === 0) {
     this.timer = setInterval(this.countDown, 1000);
    }
  }
  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
     time: this.secondsToTime(seconds),
     seconds: seconds,
    });
    // Check if we're at zero.
    if (seconds === 0) {
     //clearInterval(this.timer);
     this.props.dispatch(submit(this.props.questions));
    }
  }

  render() {
    console.log(this.props);
    if (this.props.finished === false) {
      if (this.props.start === false) {
        return (
          <div>
              <Start startTimer={this.startTimer} appStartClick={this.appStartClick} m={this.state.time.m} s={this.state.time.s}/>
          </div>
        );
      } else {
        return (
          <div>
            <Header q = {this.props.questions[this.props.currentQuestion]}  m={this.state.time.m} s={this.state.time.s}/>
            <Body attach = {this.props.questions[this.props.currentQuestion]} aux={this.props.img}/>
            <Input question = {this.props.questions[this.props.currentQuestion]}
              onQuestionAnswer={(answer) => {
                this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))}} appTips={this.appTips} appImg={this.appImg}/>
            <Botones appPrevClick={this.appPrevClick} appSubmitClick={this.appSubmitClick} appNextClick={this.appNextClick} />
            <p id="textoscore">LLevas {this.props.score} preguntas acertadas</p>
          </div>
        );
      }
    } else {
      return (
      <div>
        <GameOver score={this.props.score} appRestartClick={this.appRestartClick} appResetClick={this.appResetClick}/>
      </div>
      );
    }
  }
}



function mapStateToProps(state) {
  return {
    start: state.start,
    score: state.score,
    finished: state.finished,
    currentQuestion: state.currentQuestion,
    questions: state.questions,
    img: state.img
  };
}

export default connect(mapStateToProps)(App)

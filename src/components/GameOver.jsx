import React from 'react' ;
import '../css/App.css';


export default class GameOver extends React.Component {
  constructor(props) {
    super(props)
    this.restartClick = this.restartClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
  }
  restartClick() {
    this.props.appRestartClick();
  }
  resetClick() {
    this.props.appResetClick();
  }
  render () {
    return (
      <div className="Game-Over">
        <h2 id="go">GAME OVER!</h2>
        <p id="punt"> Tu puntuacion es: {this.props.score}</p>
        <div className="Botones">
          <button id="restart" onClick={this.restartClick}>RESTART</button>
          <button id="reset" onClick={this.resetClick}>RESET</button>
        </div>
      </div>

    )
  }
}

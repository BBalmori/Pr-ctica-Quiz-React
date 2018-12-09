import React from 'react' ;
import '../css/App.css';


export default class GameOver extends React.Component {
  constructor(props) {
    super(props)
    this.restartClick = this.restartClick.bind(this);
  }
  restartClick() {
    this.props.appRestartClick();
  }
  render () {
    return (
      <div className="Game-Over">
        <h2 id="go">GAME OVER!</h2>
        <p id="punt"> Tu puntuacion es: {this.props.score}</p>
        <div className="Boton">
          <button id="restart" onClick={this.restartClick}>RESTART</button>
          <button id="reset">RESET</button>
        </div>
      </div>

    )
  }
}

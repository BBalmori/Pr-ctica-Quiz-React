import React from 'react' ;
import '../css/App.css';


export default class Header extends React.Component {
  render () {
    return (
      <div className="Header">
        <h1 id="question">{this.props.q.question}</h1>
        <p id="mins"> min: {this.props.m} sec: {this.props.s} </p>
      </div>
    )
  }
}

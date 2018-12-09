import React from 'react' ;
import '../css/App.css';


export default class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    console.log(this.props.s);
    console.log(this.props.m);
    return (
      <div className="Header">
        <h1 id="question">{this.props.q.question}</h1>
        <p id="mins"> min: {this.props.m} sec: {this.props.s} </p>
      </div>
    )
  }
}

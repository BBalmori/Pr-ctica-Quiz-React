import React from 'react' ;
import '../css/App.css';


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.prevClick = this.prevClick.bind(this);
    this.nextClick = this.nextClick.bind(this);
    this.submitClick = this.submitClick.bind(this);

  }
  prevClick() {
    this.props.appPrevClick();
  }
  nextClick() {
    this.props.appNextClick();
  }
  submitClick() {
    this.props.appSubmitClick();
  }

  render () {
    return (
      <div className="Buttons">
        <button id="prev" onClick={this.prevClick}>PREV</button>
        <button id="next" onClick={this.nextClick}>NEXT</button>
        <button id="submit" onClick={this.submitClick}>SUBMIT</button>
      </div>
    )
  }
}

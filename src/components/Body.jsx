import React from 'react' ;
import '../css/App.css';


export default class Body extends React.Component {
  render () {
    console.log(this.props.aux);
    console.log(this.props.attach.tips);
    if (this.props.aux) {
      return (
        <div className="BodyImg">
          <img id="img" src={this.props.attach.attachment.url}  width="500" height="300" alt=""/>
        </div>
      );
    } else {
      if (this.props.attach.tips.length === 0) {
        return (
          <div className="Pistas">
            <p id="nopistas">No hay pistas para esta pregunta!</p>
          </div>
        ); 
      } else {
        return (
          <div className="BodyTips">
            <li id="listatips">{this.props.attach.tips}></li>
          </div>
        );
      }
    }
  }
}


import { Provider } from 'react-redux';
import GlobalState from './reducers';
import { createStore } from 'redux';
import { questions } from "../assets/random10wa.js";
import React from 'react';
import App from '../components/App.jsx';

export default class ReduxProvider extends React.Component {
  constructor(props) {
    super(props)
    this.initialState = {
      start: false,
      score: 0,
      finished: false,
      currentQuestion: 0,
      questions: [...questions],
      img: true,};
    this.store = this.configureStore();
  }


  render() {
    return(
      <Provider store={ this.store }>
        <div style={{ height: '100%' }}>
          <App store={ this.store} />
        </div>
      </Provider>
    );
  }

  configureStore() {
    return createStore(GlobalState, this.initialState);
  }
}

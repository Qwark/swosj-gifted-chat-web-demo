import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TEST_ID} from "react-native-gifted-chat";

it('renders without crashing', () => {
  TEST_ID.LOADING_WRAPPER
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

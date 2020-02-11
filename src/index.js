import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './configure-store';
import {ContactContainer} from "./contacts/contacts.container";

const App = () => (
  <Provider store={store}>
    <ContactContainer/>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));

import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/header/index';
import Content from './common/content/index';
import store from './store/index';
import './common/header/style';


function App() {

  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <Content></Content>
      </div>
    </Provider>
  );
}

export default App;

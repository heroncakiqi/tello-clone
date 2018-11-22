import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';


import store from './store';
import './App.css';
import Main from './components/Main';
import BoardContent from './components/BoardContent';

import { loadBoards } from './actions/newBoardActions';

class App extends Component {

  componentDidMount() {
  store.dispatch(loadBoards());
  }

  render() {
    return (
     <Provider store={store}>
      <BrowserRouter>
        <div className='app'>
          <div className='name'>
            <h1>tello</h1>
          </div>
         <Switch>
          <Route path='/' exact component={Main}/>
          <Route path='/board/:id' exact component={BoardContent}/>
         </Switch>
        </div>
      </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
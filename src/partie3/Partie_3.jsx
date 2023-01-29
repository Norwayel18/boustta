import React from 'react'
import { legacy_createStore as createStore } from 'redux';
import {Reducer}from './config/Reducer'
import { Provider } from 'react-redux';
import ToDoListRedux from './ToDoListRedux';

const Partie_3 = () => {
  const store = createStore(Reducer)
  return (
    <Provider store={store}>
      <ToDoListRedux />
    </Provider>
  )
}

export default Partie_3
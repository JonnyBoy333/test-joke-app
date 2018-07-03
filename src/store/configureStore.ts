import { createStore } from 'redux';
import { ActionTypes } from '../actions/ActionTypes';
import rootReducer from '../reducers/rootReducer';
import IStoreState from './IStoreState';

export default function configureStore() {
  return createStore<IStoreState, ActionTypes, {}, {}>(
    rootReducer
  )
}
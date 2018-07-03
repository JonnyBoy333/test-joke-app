import { combineReducers } from 'redux';
import IStoreState from '../store/IStoreState';
import joke from './fetchJokeReducer';

const rootReducer = combineReducers<IStoreState>({
  joke
})

export default rootReducer;
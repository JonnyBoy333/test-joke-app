import { ActionTypeKeys, ActionTypes } from '../actions/ActionTypes';
import IStoreState from '../store/IStoreState';

const initialState: IStoreState = {
  joke: ''
};

export default function fetchJokeReducer(state = initialState.joke, action: ActionTypes) {
  switch (action.type) {
    case ActionTypeKeys.FETCH_JOKE_SUCCESS:
      return fetchJokeSuccess();
    case ActionTypeKeys.FETCH_JOKE_FAIL:
      return fetchJokeFail();
    default:
      return state;
  }
}

function fetchJokeSuccess() {
  return 'Really funny joke';
}

function fetchJokeFail() {
  return 'Failed to get a good joke.'
}
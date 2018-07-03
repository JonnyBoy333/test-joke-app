import { ActionTypeKeys as keys} from './ActionTypes';

export function fetchJoke() {
  if (Math.round(Math.random()) === 1) {
    return {
      type: keys.FETCH_JOKE_SUCCESS
    }
  } else {
    return {
      type: keys.FETCH_JOKE_FAIL
    }
  }
}

export function fetchJokeInProgress() {
  return {
    type: keys.FETCH_JOKE_INPROGRESS
  }
}

export function fetchJokeFail() {
  return {
    type: keys.FETCH_JOKE_FAIL
  }
}

export function clearJoke() {
  return {
    type: keys.CLEAR_JOKE
  }
}
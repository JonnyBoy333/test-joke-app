enum ActionTypeKeys {
  FETCH_JOKE_INPROGRESS = 'SIGNIN_INPROGRESS',
  FETCH_JOKE_SUCCESS = 'SIGNIN_SUCCESS',
  FETCH_JOKE_FAIL = 'SIGNIN_FAIL',
  CLEAR_JOKE = 'CLEAR_JOKE'
}

export interface IFetchJokeSuccessAction {
  readonly type: ActionTypeKeys.FETCH_JOKE_SUCCESS
}

export interface IFetchJokeInProgressAction {
  readonly type: ActionTypeKeys.FETCH_JOKE_INPROGRESS
}

export interface IFetchJokeFailAction {
  readonly type: ActionTypeKeys.FETCH_JOKE_FAIL
}

export interface IClearJoke {
  readonly type: ActionTypeKeys.CLEAR_JOKE
}

type ActionTypes = IFetchJokeSuccessAction | IFetchJokeInProgressAction | IFetchJokeFailAction | IClearJoke;

export { ActionTypeKeys, ActionTypes };
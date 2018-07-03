import * as React from 'react';
import { connect } from 'react-redux';
import { clearJoke, fetchJoke } from '../../actions/fetchJokeActions';
import ClearButton from './ClearButton';
import JokeButton from './JokeButton';
import JokeResponse from './JokeResponse';

export interface IState {
  joke: string;
}

class Joke extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.getJoke = this.getJoke.bind(this)
    this.state = { joke: '' };
  }

  // public getJoke = (e: React.FormEvent<EventTarget>) => {
  //   e.preventDefault()
  //   fetch('http://api.icndb.com/jokes/random/')
  //     .then(res => res.json())
  //     .then((res) => {
  //       this.setState({ joke: res.value.joke.replace(/&quot;/g, '"') });
  //     });
  // }

  // public clearJoke = (e: React.FormEvent<EventTarget>) => {
  //   e.preventDefault()
  //   this.setState({
  //     joke: ''
  //   })
  // }

  public render() {
    return (
      <div>
        <div>
          <JokeButton name={'Press For Joke'} getJoke={fetchJoke} />{' '}
          <ClearButton name={'Clear Joke'} clearJoke={clearJoke} />
        </div>
        <JokeResponse response={this.state.joke}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    joke: state.prop
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  dispatch1: () => {
    dispatch(fetchJoke)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Joke)

import * as React from 'react';
import { Button } from 'reactstrap';

export interface IJokeButtonProps {
  name: string,
  getJoke: (e: React.FormEvent<EventTarget>) => void;
}

export default function IJokeButton (props: IJokeButtonProps) {
    return (
      <Button color='primary' onClick={props.getJoke}>{props.name}</Button>
    );
}
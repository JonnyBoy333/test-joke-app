import * as React from 'react';
import { Button } from 'reactstrap';

export interface IClearJokeProps {
  name: string,
  clearJoke: (e: React.FormEvent<EventTarget>) => void;
}

export default function ClearButton (props: IClearJokeProps) {
    return (
        <Button color='secondary' onClick={props.clearJoke}>{props.name}</Button>
    );
}
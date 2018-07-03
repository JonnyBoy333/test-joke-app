import * as React from 'react';

interface IJokeResponseProps {
  response: string;
}

const JokeResponse: React.SFC<IJokeResponseProps> = (props) => {
  return (
    <div>
      {props.response}
    </div>
  );
};

export default JokeResponse;
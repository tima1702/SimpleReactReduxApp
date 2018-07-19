import * as React from 'react';

const Button = (props) => {
  const {title, click} = props;
  return (<button onClick={click}>{title}</button>);
};

export default Button;

import React from 'react';

import './styles.scss';

function Header(props) {
  const {text} = props
  
  
  return (
    <header>
      <h1>{text}</h1>
    </header>
  );
}

export default Header;
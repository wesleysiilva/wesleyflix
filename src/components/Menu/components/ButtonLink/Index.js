import React from 'react';

function ButtonLink (props) {
  return (    
    <a className={props.className} href={props.href} alt={props.alt}>
      {props.children}
    </a>
  );
}

export default ButtonLink;
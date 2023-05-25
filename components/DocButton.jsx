import React from 'react';
import classes from './style.module.css';

const DocButton = ({ children, size = 'medium', isSelected = false, icon }) => {
  let btnClass = classes.btn;
  
  switch (size) {
    case 'small':
      btnClass += ` ${classes.btnSmall}`;
      break;
    case 'large':
      btnClass += ` ${classes.btnLarge}`;
      break;
    default:
      btnClass += ` ${classes.btnMedium}`;
  }

  if (isSelected) {
    btnClass += ` ${classes.btnSelected}`;
  }

  return (
    <button className={btnClass}>
      {icon && <span className={classes.icon}>{icon}</span>}
      <span>{children}</span>
    </button>
  );
}

export default DocButton;

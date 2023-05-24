// import React from 'react';
// import classes from './style.module.css';

// function SideBySideBlock({ imagePath, title, description, children }) {
//   return (
//     <div className={classes.container}>
//       <div className={classes.textBlock}>
//         <div className={classes.titleBlock}>
//           <img src={imagePath} alt="logo" className={classes.logo} />
//           <h1 className={classes.h1header}>{title}<span className={classes.titleGradient}>.dev</span></h1>
//         </div>
//         <p>{description}</p>
//       </div>
//       <div className={classes.codeBlock}>
//         {children}
//       </div>
//     </div>
//   );
// }

// export default SideBySideBlock;

import React from 'react';
import classes from './style.module.css';

function SideBySideBlock({ imagePath, title, description, gradientStrings, children }) {

  // Create an array from the comma separated gradientStrings prop
  const gradientArray = gradientStrings.split(',');

  // Method to replace strings in the title and description with the gradient styled strings
  const formatTextWithGradient = (text) => {
    let formattedText = text;
    gradientArray.forEach(string => {
      const gradientString = `<span class="${classes.titleGradient}">${string}</span>`;
      formattedText = formattedText.replace(new RegExp(string, 'g'), gradientString);
    });
    return formattedText;
  }

  return (
    <div className={classes.container}>
      <div className={classes.textBlock}>
        <div className={classes.titleBlock}>
          <img src={imagePath} alt="logo" className={classes.logo} />
          <h1 className={classes.h1header} dangerouslySetInnerHTML={{ __html: formatTextWithGradient(title) }} />
        </div>
        <p dangerouslySetInnerHTML={{ __html: formatTextWithGradient(description) }}></p>
      </div>
      <div className={classes.codeBlock}>
        {children}
      </div>
    </div>
  );
}

export default SideBySideBlock;

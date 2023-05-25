
import React from 'react';
import classes from './style.module.css';

/**
 * SideBySideBlock component
 * 
 * Props:
 *   - imagePath: (optional) URL of the image
 *   - title: Title text
 *   - description: Description text
 *   - children: (optional) JSX to be rendered in the content block
 *   - contentPosition: (optional) Position of the content block, either 'left' or 'right'
 *   - gradientStrings: (optional) Comma separated words in title and description that should have gradient effect
 *   - labelText: (optional) Text for the status label
 *   - statusColor: (optional) Color of the status label, one of ['success', 'pending', 'inProgress', 'warning']
 *
 * Usage example:
 *   <SideBySideBlock
 *     title="Xeto.dev"
 *     description="Xeto.dev is the website, and is the way to go, it should be the next generation in buildings."
 *     gradientStrings=".dev,website"
 *     contentPosition="right"
 *     labelText="COMPLETED"
 *     statusColor="success"
 *   >
 *     ```javascript filename="My JavaScript content"
 *     var foo = 12;
 *     // rest of the content
 *     ```
 *   </SideBySideBlock>
 */


function SideBySideBlock({ imagePath, title, description, children, codePosition, gradientStrings, labelText, statusColor }) {
  const orderStyle = codePosition === 'left' ? { order: -1 } : {};

  // Create gradient text
  const gradientWords = gradientStrings.split(',');
  let gradientTitle = title;
  let gradientDescription = description;
  
  gradientWords.forEach(word => {
    const gradientHTML = `<span class=${classes.titleGradient}>${word}</span>`;
    gradientTitle = gradientTitle.replace(word, gradientHTML);
    gradientDescription = gradientDescription.replace(word, gradientHTML);
  });

  // Check if children is an Image element
  const isImage = React.Children.toArray(children).some(child => child.type === 'img' || (child.props && child.props.src));

  // CSS classes for contentBlock
  let contentBlockClasses = `${classes.contentBlock}`;
  if (isImage) {
    contentBlockClasses += ` ${classes.imageContent}`;
  }

  return (
    <div className={classes.container}>
      <div className={classes.textBlock}>
        <div className={classes.titleBlock}>
          {imagePath && <img src={imagePath} alt="logo" className={classes.logo} />}
          <h1 className={classes.h1header} dangerouslySetInnerHTML={{ __html: gradientTitle }} />
          {labelText && <span className={`${classes.label} ${classes[statusColor]}`}>{labelText}</span>}
        </div>
        <p dangerouslySetInnerHTML={{ __html: gradientDescription }}></p>
      </div>
      <div className={contentBlockClasses} style={orderStyle}>
        {children}
      </div>
    </div>
  );
}

export default SideBySideBlock;

import React from 'react';
import classes from './style.module.css';

const HeaderGradient = ({ tag, gradientStrings, title, description, align }) => {
  // Map the tag to appropriate classes
  const headerClassMap = {
    h1: classes.h1header,
    h2: classes.h2header,
    h3: classes.h3header,
    h4: classes.h3header,
    h5: classes.h3header,
    h6: classes.h3header,
  };

  const Tag = tag;
  const headerClass = headerClassMap[tag];

  // Create gradient text
  const gradientWords = gradientStrings.split(',');
  let gradientTitle = title;
  let gradientDescription = description;
  gradientWords.forEach(word => {
    const gradientHTML = `<span class=${classes.titleGradient}>${word}</span>`;
    gradientTitle = gradientTitle.replace(word, gradientHTML);
    gradientDescription = gradientDescription.replace(word, gradientHTML);
  });

  return (
    <div className={classes[align]}>
      <Tag className={headerClass} dangerouslySetInnerHTML={{ __html: gradientTitle }} />
      <p className={classes.description} dangerouslySetInnerHTML={{ __html: gradientDescription }} />
    </div>
  );
}

export default HeaderGradient;

import React from 'react';
import './Heading.css';

const Heading = ({ level = 1, className, children }) => {
  const Tag = `h${level}`;  // Выбор тега в зависимости от уровня заголовка

  return (
    <Tag className={`heading ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;

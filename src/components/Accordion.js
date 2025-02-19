import React, { useState } from 'react';
import './Accordion.css';

const Accordion = ({ title, defaultOpen = false, children }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>
          {isOpen ? '-' : '+'}
        </span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default Accordion;

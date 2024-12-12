import React, { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';  // Импортируем компонент Input
import Typography from './components/Typography';  // Импортируем компонент Typography
import Heading from './components/Heading';  // Импортируем компонент Heading
import Tooltip from './components/Tooltip';  // Импортируем компонент Tooltip
import Accordion from './components/Accordion';  // Импортируем компонент Accordion



function App() {
  const [inputValue, setInputValue] = useState('');  // Состояние для значения поля ввода

  const handleInputChange = (event) => {
    setInputValue(event.target.value);  // Обработка изменения значения в поле ввода
  };

  return (
    <div className="App">
      <h1>My UI Library</h1>
      
      {/* Кнопки */}
      <Button variant="primary" size="lg" onClick={() => alert('Primary Button clicked!')}>
        Primary Button
      </Button>
      <Button variant="bordered" size="md" onClick={() => alert('Bordered Button clicked!')}>
        Bordered Button
      </Button>
      
      {/* Поле ввода */}
      <Input 
        label="Enter your name" 
        value={inputValue} 
        onChange={handleInputChange} 
        placeholder="Your name"
      />
      
      {/* Пример поля ввода с ошибкой */}
      <Typography textSize="sm">
        SM. Our mission is to redefine the model of learning and re-engineer
        its process by providing innovative administrative and instructional
        technologies. Click here for our beliefs. If you are a school
        administrator and would like to use ecourse.org for your classes,
        please create school profiles. Instructors and students may signup
        independent user account. For questions, contact us.
      </Typography>

      <Typography textSize="md">
        MD. Our mission is to redefine the model of learning and re-engineer
        its process by providing innovative administrative and instructional
        technologies. Click here for our beliefs. If you are a school
        administrator and would like to use ecourse.org for your classes,
        please create school profiles. Instructors and students may signup
        independent user account. For questions, contact us.
      </Typography>

      <Typography textSize="lg">
        LG. Our mission is to redefine the model of learning and re-engineer
        its process by providing innovative administrative and instructional
        technologies. Click here for our beliefs. If you are a school
        administrator and would like to use ecourse.org for your classes,
        please create school profiles. Instructors and students may signup
        independent user account. For questions, contact us.
      </Typography>

      <Heading level={1}>Heading 1</Heading>
      <Heading level={2}>Heading 2</Heading>
      <Heading level={3}>Heading 3</Heading>
      <Heading level={4}>Heading 4</Heading>
      <Heading level={5}>Heading 5</Heading>
      <Heading level={6}>Heading 6</Heading>

      <Tooltip text="Click to perform an action" position="top">
        <Button variant="primary" size="lg" onClick={() => alert('Primary Button clicked!')}>
          Primary Button
        </Button>
      </Tooltip>


      <Accordion title="Accordion 1" defaultOpen>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat.
      </Accordion>

      <Accordion title="Accordion 2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Accordion>
    </div>
  );
}

export default App;

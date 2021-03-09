import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
  {
    title: 'What is React?',
    content: 'React is front-end JS framework',
  },
  {
    title: 'Why we use React?',
    content: 'React is most favorite libary in JS world',
  },
  {
    title: 'How to use React?',
    content: 'React we use by create components',
  },
];

const App = () => {
  // return <Accordion items={items} />;
  return <Search />;
};
export default App;

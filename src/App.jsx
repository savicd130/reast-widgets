import React from 'react';
import Accordion from './components/Accordion';

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

export default () => {
  return <Accordion items={items} />;
};

import React from 'react';
import Card from './Card'; 
import bugsmash from '../images/bugsmash.jpeg';

const cardData = [
  {
    id: 1,
    imageSrc: bugsmash,
    title: 'Bug Bash',
    description: 'ljlkjs lslkjsl skj soisjslkjksl sjslkslslksjlksks'
  },
  {
    id: 2,
    imageSrc: bugsmash,
    title: 'Another Example Title',
    description: 'This is another example description for the card.'
  },
  {
    id: 3,
    imageSrc: bugsmash,
    title: 'Another Example Titlmnjkjne',
    description: 'This is another example description for the card.'
  },
  {
    id: 4,
    imageSrc: bugsmash,
    title: 'Another Example Title',
    description: 'This is another example description for the card.'
  },
];

const CardList = () => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 place-self-center">
        {cardData.map((card) => (
          <div key={card.id}>
            <Card
              imageSrc={card.imageSrc}
              title={card.title}
              description={card.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;

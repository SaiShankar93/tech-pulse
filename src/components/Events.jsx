import React from 'react';
import Card from './Card'; // Assuming you have the Card component in a separate file

const cardData = [
  {
    id: 1,
    imageSrc: '/docs/images/blog/image-1.jpg',
    title: 'Noteworthy technology acquisitions 2021',
    description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.'
  },
  {
    id: 2,
    imageSrc: '/docs/images/blog/image-2.jpg',
    title: 'Another Example Title',
    description: 'This is another example description for the card.'
  },
  {
    id: 2,
    imageSrc: '/docs/images/blog/image-2.jpg',
    title: 'Another Example Title',
    description: 'This is another example description for the card.'
  },
  {
    id: 2,
    imageSrc: '/docs/images/blog/image-2.jpg',
    title: 'Another Example Title',
    description: 'This is another example description for the card.'
  },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {cardData.map(card => (
        <Card
          key={card.id}
          imageSrc={card.imageSrc}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;

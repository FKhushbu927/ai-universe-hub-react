import React from 'react';
import Header from './component/Header/Header';
import Button from './component/Button/Button';
import Card from './component/Card/Card';

const App = () => {
  return (
    <div>
      <Header></Header>
     
      <Button>Sort By Date</Button>
      <Card></Card>
      <Button>See More</Button>
    </div>
  );
};

export default App;

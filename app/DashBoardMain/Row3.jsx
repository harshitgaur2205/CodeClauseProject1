import React from 'react';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';
import Card3 from './Components/Card3';

const Row3 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 my-4 mx-4 max-md:items-center lg:w-[96%]">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
};

export default Row3;
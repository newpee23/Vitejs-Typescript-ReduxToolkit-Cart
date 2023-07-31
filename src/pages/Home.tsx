import { FC } from 'react';
import { Products } from '../data/product';
import Item from '../components/Item';

const Home: FC = () => {
  return (
    <>
      <div className='products'>
        {Products.map((prod, index) => <Item key={index} product={prod} />)}
      </div>
    </>
  );
};

export default Home;
 
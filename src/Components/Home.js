import React, {  useState } from 'react';
import { faker } from '@faker-js/faker';
import SingleItem from './SingleItem';
import './style.css'


faker.seed(100);

const Home = () => {

  const productsArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image : faker.image.fashion(),
   
  }));
 

  const [products] = useState(productsArray);
  
  return (
    <div className='productContainer'>
      {products.map((prod)=>(
        <SingleItem prod={prod} key={prod.id}/>
      ))}
      
            
    </div>
  )
}

export default Home

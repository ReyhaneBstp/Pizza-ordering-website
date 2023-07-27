import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { useEffect, useState } from 'react';

const Pizza = () => {
  const [pizzas, setPizzas] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [pizzaCounts, setPizzaCounts] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:8000/pizzas')
      .then(res => res.json())
      .then(data => {
        setPizzas(data);
        setPizzaCounts(data.map(pizza => ({ bigCount: 0, littleCount: 0 })));
        setIsPending(false);
      })
      .catch(err => console.log(err.message));
  },[]);

  const handleAdd = (pizzaName, bigCount, littleCount, bigPrice, littlePrice, pizzaImage) => {
    if (bigCount > 0 || littleCount > 0) { // check if either bigCount or littleCount is greater than zero
      const order =  { pizzaName, bigCount, littleCount, bigPrice, littlePrice, pizzaImage };
      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
      };
  
      return fetch('http://localhost:8000/cards', requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(json => {
          console.log('Added to cart');
        })
        .catch(error => console.error('Error:', error));
    }
  };
  const plusBig = (index) => {
    const newPizzaCounts = [...pizzaCounts];
    if (newPizzaCounts[index].bigCount < 9) {
      newPizzaCounts[index].bigCount++;
      setPizzaCounts(newPizzaCounts);
    }
  };

  const minusBig = (index) => {
    const newPizzaCounts = [...pizzaCounts];
    if (newPizzaCounts[index].bigCount > 0) {
      newPizzaCounts[index].bigCount--;
      setPizzaCounts(newPizzaCounts);
    }
  };

  const plusLittle = (index) => {
    const newPizzaCounts = [...pizzaCounts];
    if (newPizzaCounts[index].littleCount < 9) {
      newPizzaCounts[index].littleCount++;
      setPizzaCounts(newPizzaCounts);
    }
  };

  const minusLittle = (index) => {
    const newPizzaCounts = [...pizzaCounts];
    if (newPizzaCounts[index].littleCount > 0) {
      newPizzaCounts[index].littleCount--;
      setPizzaCounts(newPizzaCounts);
    }
  };

  return (
    <div className='row menu'>
      <h2 className='title'> Pizza Menu </h2>
      {isPending && <div> is loading ...</div>}
      {pizzas && pizzas.map((pizza, index) => (
        <div className="col-md-4 col-sm-6 items" key={index}>
            <h4>{pizza.name}</h4>
          <div className='flex-box'>
            <img className='pic' src={require(`../images/${pizza.image}`)} alt="" />
            <div className='details'>
              {pizza.ingredients.map((ingredient, index) => (
                <h6 className='details' key={index}>-{ingredient}</h6>
              ))}
            </div>
          </div>

          <div className='price-box'>
  
            <div className='price'>
              <span>
                
                36cm : {pizza.big} $
             
                <button onClick={() => plusBig(index)} className='plus'>+</button>
                <h6 className="counter">{pizzaCounts[index].bigCount}</h6> 
                <button onClick={() => minusBig(index)} className='minus'>-</button>

              </span>
              <span>
                26cm : {pizza.little} $
    
                <button onClick={() => plusLittle(index)} className='plus'>+</button>
                <h6 className="counter">{pizzaCounts[index].littleCount}</h6> 
                <button onClick={() => minusLittle(index)} className='minus'>-</button>
    
              </span>
            
            </div>
            <button className='addBtn' onClick={() => handleAdd(pizza.name, pizzaCounts[index].bigCount, pizzaCounts[index].littleCount , pizza.big , pizza.little , pizza.image)}>add to cart</button>

          </div>
        </div>
      ))}
    </div>
  );
};

export default Pizza;
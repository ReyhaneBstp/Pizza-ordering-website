import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { useEffect, useState } from 'react';

const Appetizer = () => {
  const [appetizers, setAppetizers] = useState(null);
  const [counts, setCounts] = useState([]);

  useEffect(()=>{

    fetch('http://localhost:8000/appetizers')
    .then(res => {
      return res.json();
    })
    .then(data => {
      setAppetizers(data);
      setCounts(data.map(appt => ({ count : 0 })));
    })

  },[]);
  

  const plus = (index) => {
    const newCounts = [...counts];
    if (newCounts[index].count < 9) {
      newCounts[index].count++;
      setCounts(newCounts);
    }
  };
  
  const minus = (index) => {
    const newCounts = [...counts];
    if (newCounts[index].count > 0) {
      newCounts[index].count--;
      setCounts(newCounts);
    }
  };
  
  return (
    <div className='row menu'>
      <h2 className='title'> Appetizer Menu </h2>
      {appetizers && appetizers.map((appt, index) => (
        <div className="col-md-4 col-sm-6 items" key={index}>
            <h4>{appt.name}</h4>
          <div className='flex-box'>
            <img className='pic-appt' src={require(`../images/${appt.image}`)} alt="" />

          </div>

          <div className='price-box'>
  
            <div className='price'>
              <span>

                price : {appt.price} $ 
                <button onClick={() => plus(index)} className='plus'>+</button>
                <h6 className="counter">{counts[index].count}</h6> 
                <button onClick={() => minus(index)} className='minus'>-</button>

              </span>
    
            
            </div>
          <button className='addBtn'>add to cart</button>

            

          </div>
        </div>
      ))}
    </div>
  );
};

export default Appetizer;


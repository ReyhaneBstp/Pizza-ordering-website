import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { useEffect, useState } from 'react';

const ShoppingCart = () => {
  const [carts, setCarts] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/cards')
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (let i = 0; i < carts.length; i++) {
      const bigTotal = carts[i].bigCount * carts[i].bigPrice;
      const littleTotal = carts[i].littleCount * carts[i].littlePrice;
      totalPrice += bigTotal + littleTotal;
    }
    return totalPrice;
  };

  const calculateMultiplication = (x, y) => {
    const multi = x * y;
    return multi;
  };

  return (
    <div className="row cart">
    <h1 className="title">Shopping cart</h1>
  
    <div className="col-lg-4 col-md-6 col-sm-12 chosen">
      {carts &&
        carts.map((cart, index) => (
          <div className="items" key={index}>
            <div className="box">
              <h4 className="title">{cart.pizzaName}</h4>
              <div className="flex">
                <img
                  className="pic-card"
                  src={require(`../images/${cart.pizzaImage}`)}
                  alt=""
                />
                {cart.bigCount > 0 && (
                  <div>
                    <h4>36 cm : {cart.bigCount}</h4>
                    <h4>price : {calculateMultiplication(cart.bigCount, cart.bigPrice)} $</h4>
                  </div>
                )}
                {cart.littleCount > 0 && (
                  <div>
                    <h4>26 cm : {cart.littleCount}</h4>
                    <h4>price : {calculateMultiplication(cart.littleCount, cart.littlePrice)} $</h4>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
    </div>
  
    {carts && carts.length > 0 && (
      <div class="col-lg-5 col-md-6 col-sm-12 pay">
        <h4 className="title">payment</h4>
        <div className="paybox">
  
          <div className="tot">
            <h4>total price : {calculateTotalPrice()} $</h4>
          </div>
  
          <div className="row inputBox">
            <span className='col-sm-6 col-md-4'>cards accepted :</span>
            <img className='col-sm-6 col-md-8' src={require("../images/card_img.png")} alt="" />
          </div>
          <div className="inputBox">
            <span>name on card :</span>
            <input type="text" placeholder="mr. john deo" />
          </div>
          <div className="inputBox">
            <span>card number :</span>
            <input type="number" placeholder="1111-2222-3333-4444" />
          </div>
          <div className="inputBox">
            <span>exp month :</span>
            <input type="text" placeholder="january" />
          </div>
          <div className="inputBox">
            <span>exp year :</span>
            <input type="number" placeholder="2022" />
          </div>
          <div className="inputBox">
            <span>CVV :</span>
            <input type="text" placeholder="1234" />
          </div>
  
          <button className="payBtn">Payment confirmation</button>
        </div>
      </div>
    )}
  </div>
  );
};

export default ShoppingCart;
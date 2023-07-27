import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import React from 'react';
import { useEffect, useState } from 'react';

const Make = () => {
  const [column1, setColumn1] = useState(null);
  const [column2, setColumn2] = useState(null);
  const [column3, setColumn3] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8000/column1')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setColumn1(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/column2')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setColumn2(data);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/column3')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setColumn3(data);
      });
  }, []);

  const handleSelectChange = (event) => {
    const { value } = event.target;
  
    if (/^.*:.*:.*$/.test(value)) { // check if value is in format name:x:y
      console.log(value);
      const selectedOption = event.target.options[event.target.selectedIndex];
      const selectedItem = {
        name: event.target.parentNode.querySelector("h5").textContent,
        amount: selectedOption.text.split(":")[0],
        price: selectedOption.value.split(":")[2],
      };
      const updatedSelectedItems = selectedItems.filter(
        (item) => item.name !== selectedItem.name
      );
      updatedSelectedItems.push(selectedItem);
      setSelectedItems(updatedSelectedItems);
      const newTotalPrice = updatedSelectedItems.reduce(
        (total, item) => total + parseFloat(item.price),
        0
      );
      setTotalPrice(newTotalPrice);
    } else {
      console.log(value);
      const selectedItem = {
        name: event.currentTarget.parentNode.querySelector("h5").textContent,
        amount: "",
        price: 0,
      };
      const updatedSelectedItems = selectedItems.filter(
        (item) => item.name !== selectedItem.name
      );
      updatedSelectedItems.push(selectedItem);
      setSelectedItems(updatedSelectedItems);
      const newTotalPrice = updatedSelectedItems.reduce(
        (total, item) => total + parseFloat(item.price),
        0
      );
      setTotalPrice(newTotalPrice);
    }
  };
  return (
    <div className="make">
      <h1 className="title">Build Your Own Meal</h1>
      <div className="header">
        <h4 className="total">Total cost: {totalPrice.toFixed(2)}$</h4>
      </div>

      <div className="row list">
        <div className="col-md-4 col-sm-6 column">
          <h2 className="title">Vegetables</h2>
          {column1 &&
            column1.map((item) => (
              <div className="item" key={item.name}>
                <h5>{item.name}</h5>
                <select onChange={handleSelectChange}>
                  <option value="0:0">Select an option</option>
                  {item.amount.map((amt, index) => (
                    <option key={index} value={`${item.name}:${amt}:${item.price[index]}`}>
                      {amt} : {item.price[index]} $
                    </option>
                  ))}
                </select>
              </div>
            ))}
        </div>
        <div className="col-md-4 col-sm-6 column">
          <h2 className="title">Bakery</h2>
          {column2 &&
            column2.map((item) => (
              <div className="item" key={item.name}>
                <h5>{item.name}</h5>
                <select onChange={handleSelectChange}>
                  <option value="0:0">Select an option</option>
                  {item.amount.map((amt, index) => (
                    <option key={index} value={`${item.name}:${amt}:${item.price[index]}`}>
                      {amt} : {item.price[index]} $
                    </option>
                  ))}
                </select>
              </div>
            ))}
        </div>
        <div className="col-md-4 col-sm-6 column">
          <h2 className="title">Meat</h2>
          {column3 &&
            column3.map((item) => (
              <div className="item" key={item.name}>
                <h5>{item.name}</h5>
                <select onChange={handleSelectChange}>
                  <option value="0:0">Select an option</option>
                  {item.amount.map((amt, index) => (
                    <option key={index} value={`${item.name}:${amt}:${item.price[index]}`}>
                      {amt} : {item.price[index]} $
                    </option>
                  ))}
                </select>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Make;
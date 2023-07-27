import 'bootstrap/dist/css/bootstrap.min.css';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap';
import { useState } from "react";
import Pizza from './Pizza';
import Appetizer from './Appetizer';
import Drinks from './Drinks';

const Menu = () => {

    const [activePanel, setActivePanel] = useState(0);
    const [selectedButton, setSelectedButton] = useState(0);

    const showPanel = (index) => {
        setActivePanel(index);
        setSelectedButton(index);
    };
  
    return ( 
        <div className='menu-list'>
            <div className="buttonContainer">
                <button className={`btn ${selectedButton === 0 ? 'selected' : ''}`} onClick={() => showPanel(0)}> Pizza</button>
                <button className={`btn ${selectedButton === 1 ? 'selected' : ''}`} onClick={() => showPanel(1)}> Appetizer</button>
                <button className={`btn ${selectedButton === 2 ? 'selected' : ''}`} onClick={() => showPanel(2)}> Condiments</button>
            </div>
            
            {activePanel === 0 && <Pizza />}
            {activePanel === 1 && <Appetizer />}
            {activePanel === 2 && <Drinks />}
        </div>
    );
}
 
export default Menu;
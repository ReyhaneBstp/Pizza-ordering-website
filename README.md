Pizza Pizza
______________

Description:
Pizza Pizza is a React-based web application that allows users to order pizza online and customize their toppings.

Installation:
To run the website, you will need to have Node.js installed on your computer. If you don't have Node.js installed, you can download it from the official website: https://nodejs.org/ 

Once you have Node.js installed, you can clone the repository and install the dependencies by running the following commands in your terminal:


git clone https://github.com/ReyhaneBstp/Pizza-ordering-website.git
cd Pizza-ordering-website
npm install
Usage
To start the website, run the following command in your terminal:

npm start
This will launch the website in your default browser at http://localhost:3000/. 

To receive information about the menu of pizzas and appetizers, you can use the following command in your terminal:

npx json-server --watch data/db.json --port 8000
This will start a local JSON server that serves the data stored in the data/db.json file at http://localhost:8000/. 

Credits:
The website uses the following open-source libraries and frameworks:

React (https://reactjs.org/)
Bootstrap (https://getbootstrap.com/)
JSON Server (https://github.com/typicode/json-server)

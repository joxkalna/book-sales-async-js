# Book Sales - Asynchronous JavaScript Practice

This project is a gear sales application that demonstrates asynchronous JavaScript programming concepts including Promises, API calls, and data transformation.

## About This Project

This project was adapted from the Pluralsight course "Asynchronous Programming in JavaScript" as a learning exercise

## Key Concepts Demonstrated

- Promise creation and chaining
- Handling asynchronous API calls
- Data transformation with array methods
- Combining data from multiple API endpoints
- Error handling with Promises
- Using the `.then()`, `.catch()`, and `.finally()` methods

## Technologies Used

- JavaScript (ES6+)
- Node.js
- JSON Server for mock API
- Axios for HTTP requests
- Handlebars for templating

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
4. Navigate to http://localhost:3000/myOrders in your browser

## Project Structure

- `data/db.json` - Mock database with gear, orders, and users
- `public/orders.js` - Main JavaScript file demonstrating Promise chaining
- `public/orders.html` - HTML page displaying orders
- `public/src/display.helpers.js` - Helper functions for displaying data
- `index.js` - Server setup with JSON Server

## Credits

This project is based on knowledge gained from the Pluralsight course "Asynchronous Programming in JavaScript". All credit for the original concepts and teaching goes to Pluralsight and the course author.

## License

This project is for educational purposes only.

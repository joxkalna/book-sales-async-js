/*
Problem statement
We have orderStatusId inside book orders
We also have order statuses with id that matches orderStatusId
We need to replace orderStatusId with the actual status description
*/

// axios.get returns a Promise
let statuses = []
showWaiting()
//Get statuses data
axios.get("http://localhost:3000/api/orderStatuses").then(({data}) => {
  statuses = data;
  console.log('Order statuses loaded:', statuses)
  // get order data
  return axios.get("http://localhost:3000/api/orders")
}).then(({data}) => {
  // for each order find the matching status
  let orders = data.map((o) => {
    return {
      ...o, //spreads all properties from an object to keep original value
      // add new property called orderStatus to contain description
      orderStatus: statuses.find((s) => s.id === o.orderStatusId).description
    }
  })
  showOrderList("#order-list", orders);
 
}).finally(() => {
  setTimeout(() => {
    hideWaiting()
  }, 1000)
})


// The Promise chain above demonstrates:
// 1. Creating a Promise with axios.get()
// 2. Handling success with .then()
// 3. Handling errors with .catch() - promise function when rejected the promise
// catch just take one parameter (error)



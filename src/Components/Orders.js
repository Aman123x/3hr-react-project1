import React, { useState } from "react";
import "./order.css"

const Orders = () => {
  const [id, setId] = useState("");
  const [price, setPrice] = useState(0);
  const [dish, setDish] = useState("Chicken Biryani");
  const [table, setTable] = useState("Table 1");
  
  
  const [orders, setOrders] = useState([]);

  function handleTable(e) {
    e.preventDefault();

    const newOrder = { id, price, dish, table };
    setOrders([...orders, newOrder]);
  }

  function Remove(orderId){
    console.log(orderId);
    const updateOrder=orders.filter(order=>order.id!==orderId);
    setOrders(updateOrder);
  }

  return (
    <div className="order">
      <h1 className="mang">Order Management</h1>
      <form onSubmit={handleTable}>
      
        <label>Unique Order ID: </label>
        <input type="text" onChange={(e) => setId(e.target.value)} value={id} />
        <label>Choose Price: </label>
        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
        <label>Choose Dish: </label>
        <select onChange={(e) => setDish(e.target.value)}>
          <option value="Chicken Biryani">Chicken Biryani</option>
          <option value="Paneer Masala">Paneer Masala</option>
          <option value="Tandoori Chicken">Tandoori Chicken</option>
          <option value="Chicken Momo">Chicken Momo</option>
          <option value="Veg Momo">Veg Momo</option>
        </select>
        <label>Choose a Table: </label>
        <select onChange={(e) => setTable(e.target.value)}>
          <option value="Table 1">Tabel 1</option>
          <option value="Table 2">Tabel 2</option>
          <option value="Table 3">Tabel 3</option>
        </select>{" "}
        <button type="submit">Add to bill</button>
      </form>
      <div className="orderDetail">
        <h1>Orders</h1>
        <h3>Table 1</h3>
        {
          orders.filter(order => order.table === "Table 1").map((order, index) => (
            <ul key={index}>
              <li>{order.id}{" - "} {order.price}{" - "} {order.dish}{" "}<button onClick={()=>Remove(order.id)}>Delete order</button></li>
            </ul>
          ))
        }
        <h3>Table 2</h3>
        {
          orders.filter(order => order.table === "Table 2").map((order, index) => (
            <ul key={index}>
              <li>{order.id}{" - "} {order.price}{" - "} {order.dish}{" "}<button onClick={()=>Remove(order.id)}>Delete order</button></li>
            </ul>
          ))
        }
        <h3>Table 3</h3>
        {
          orders.filter(order => order.table === "Table 3").map((order, index) => (
            <ul key={index}>
              <li>{order.id}{" - "} {order.price}{" - "} {order.dish}{" "}<button onClick={()=>Remove(order.id)}>Delete order</button></li>
            </ul>
          ))
        }
      </div>
    </div>
  );
};

export default Orders;



import React,{useState} from "react";
import './../styles/App.css';


const App = () => {
  const [items, setItems] = React.useState([])
  const [name, setName] = React.useState('')
  const [price, setPrice] = React.useState('')

  const handleNameChange = (event) => { 
    setName(event.target.value)
  }
  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }
  const handleAddItem = () => {
    if(name && price){
    setItems([...items, {name: name, price: price}]);
    setName('')
    setPrice('')
    }
  }
  const handleRemoveItem = (index) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
  }

  return (
    <div className="parent">
      <h1>Parent Component</h1>
        <label htmlFor="name">Item Name: </label>
        <input type="text" id="itemName" onChange={handleNameChange}/>
        <label htmlFor="price">Item Price: </label>
        <input type="number" id="itemPrice" onChange={handlePriceChange}/>
        <button onClick={handleAddItem}>Add Item</button>
        <div className='child'>
          <h2>Child Component</h2>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.name} - ${item.price} <button onClick={() => handleRemoveItem(index)}>Remove</button></li> 
            ))}
          </ul>
        </div>
    </div>
  )
}

export default App

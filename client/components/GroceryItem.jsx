import React, { Component } from 'react';

const groceryItem = (props) => {

  // destructure the props object

  return (
    <div className = 'GroceryItemCard' key={`G${index}`}  >
      <span> {/* item name */}   </span>
      <button id='MoveToFridgeBtn'
          onClick={() => {/* 
            * put a fridge image
            * event handler -> to invoke the dispatcher to create 
          */}}> 
      </button>
      <button id='EditItemBtn' onClick={() => /* event handler to invoke dispatcher to edit */ }>
      </button>
      <button id='DeleteItemBtn' onClick={() => /* event handler to invoke dispatcher to delete */ }>
      </button>
    </div>
  )
};

export default groceryItem;
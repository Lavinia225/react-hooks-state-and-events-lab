import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState('All')

  function setCategory(e){
    setSelectedCategory(e.target.value)
    debugger
  }

  function categoryChecker(item){
    if (selectedCategory === 'All'){
      return <Item key={item.id} name={item.name} category={item.category}/>
    }
    else if(item.category === selectedCategory){
      return <Item key={item.id} name={item.name} category={item.category}/>
    }
  }
  
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={setCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {items.map(item => categoryChecker(item))}
      </ul>
    </div>
  );
  }

export default ShoppingList;

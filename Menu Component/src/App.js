import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';


// new Set(.....) to get unique category instead of repeating them
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function App() {

  //set state values
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    // if 'item' catergory property matches the string passed,return that item to the new items array
    const newItems = items.filter((item) => item.category === category)

    // set menuItems = newItems
    setMenuItems(newItems)
  };



  return <main>
    <section className='menu section'>
      <div className='title'>
        <h2>our menu</h2>
        <div className='underline'></div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </section>
  </main>;

}

export default App;

import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};
function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      showAlert(true, 'danger', 'please enter value');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName('');
      setEditID(null);
      setIsEditing(false);
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added to the list');
      const newItem = { id: new Date().getTime().toString(), title: name };

      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };
  const clearList = () => {
    showAlert(true, 'danger', 'empty list');
    setList([]);
  };
  const removeItem = (id) => {
    showAlert(true, 'danger', 'item removed');
    setList(list.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);
  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}

        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className='clear-btn' onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
}
































// function App() {
//   // state value for form name
//   const [name, setName] = useState('');
//   // state value list for local storage
//   const [list, setList] = useState('');
//   // state value for whether editing or not
//   const [isEditing, setIsEditing] = useState('false');
//   // reflect wich item we are actually ediiting
//   const [editID, setEditID] = useState(null);
//   // 
//   const [alert, setAlert] = useState({ show: false, msg: '', type: '' })


//   // functions
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // checking if the value is empty,if yes,display alert
//     if (!name) {
//       //display alert
//     }
//     // checking if there is something in the value and if isEditing is true
//     else if (name && isEditing) {
//       // deal with edit

//     }
//     else {
//       // show alert
//       const newItem = { id: new Date().getTime().toString(), title: name };
//       setList([...list, newItem]);
//       setName('');
//     }
//   }
//   return (

//     <section className='section-center'>

//       <form className='grocery-form' onSubmit={handleSubmit}>
//         {alert.show && <Alert />}
//         <h3>grocery bud </h3>
//         <div className='form-control'>
//           <input
//             type='text'
//             className='grocery'
//             placeholder='e.g eggs'
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <button type='submit' className='submit-btn'>
//             {isEditing ? 'edit' : 'submit'}
//           </button>
//         </div>
//       </form>
//       <div className='grocery-container'>
//         <List items={list} />
//         <button className='clear-btn'>clear items</button>
//       </div>
//     </section>

//   )
// }

export default App

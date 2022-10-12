import React, { useState, useEffect  } from 'react';
import { v4 as uuidv4 } from 'uuid';
 


function Selects() {

    const [Task, setTask] = useState('')
    const [Items, setItems] = useState([])

    const handleChange = e => {
        setTask({Task: e.target.value})
    }
    
    const handleOnSubmit = e =>{
        e.preventDefault()        
            const newTask = {
                tas: Task,
                id : uuidv4(),
                mark: false
}
        setItems([...Items, newTask])
        
        console.log(Items)
    }

    const handleRemoveTask = id =>{
    const newUser = Items.filter((item) => item.id !== id);
    setItems(newUser);
    }

    
    
  return (
    <div className='container'>
        <form onSubmit={handleOnSubmit}>
            <h3>Nueva Tarea:</h3>
            <div className="input-container">
                <input onChange={handleChange} className="input"/>
                <button type='onSubmit' className="btn">ADD</button>
            </div>
        </form>
        {Items.map((item, key) => 
        <div>                 
            <input type="checkbox" value={item.tas.Task}/>
            <label>{item.tas.Task}</label>
            <button onClick={() => handleRemoveTask(item.id)}>Eliminar</button>
        </div>
)}  
    </div>
)
}

export default Selects
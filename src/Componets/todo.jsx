import React, { useState } from "react";
import "../App.css";


const Todo = () => {
    const [inputvalue, setInputvale] = useState(" ");
    const [todos, setTodos] = useState([])  //store all the todos....
    const addTodo = () => {
        if (inputvalue.trim() !== '') {
            const newTodo = {
                id: new Date().getTime(),
                text: inputvalue,
            }
            setTodos([...todos, newTodo]);
            setInputvale('')
        }
    }
    return <>

        <div className="contaner">
            <h2>Todos - list </h2>
            <input type="text" placeholder="Enter todo" value={inputvalue} onChange={(e) => {
                setInputvale(e.target.value);

            }} ></input>
            <button onClick={addTodo}>Add todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo}>
                        {todo.text}

                    </li>
                ))}
            </ul>
        </div>


    </>
}

export default Todo;
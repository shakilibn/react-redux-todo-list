import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, clearTodo } from '../actions';
import './todo.css';

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducer.list);
    const dispatch = useDispatch();
    return (
        <>
           <div className="main-div">
                <div className="child-div">
                    <figure>
                        {/* <img src={todo} alt="todologo" /> */}
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..."
                           value={inputData} 
                           onChange={(e) => setInputData(e.target.value) }
                        />
                        <i className="fa fa-plus add-btn" title="Add Item"
                         onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>                     
                    </div>

                    <div className="showItems">
                        
                        {
                            list.map((item) => {
                                return (
                                    <div className="eachItem" key={item.id}>
                                        <h3>{item.data}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(removeTodo(item.id))}></i>
                                        </div>
                                  </div>
                                )
                            })

                        }
                       
                    </div>
                
                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => dispatch(clearTodo())}><span> CHECK LIST </span> </button>
                    </div>
                </div>
          </div>  
        </>
    );
};

export default Todo;
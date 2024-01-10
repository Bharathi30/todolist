import React, { useState, useEffect } from 'react';

import './App.css'

export default function TodoList() {

  /* To Bind Textbox inputValue and id */

  let [todoValue, updateInput] = useState({ id: 0, inputValue: "" })

  /* To Bind the list of element in array todoList is array and addList is function */

  let [todoList, addList] = useState([])

  /*It is used to diable button*/

  let btnFlag = false

  /*This effect will run after each state update*/

  useEffect(

    () => {

      console.log('', todoList);

    }, [todoList]

  );

  return (

    <div className='container-fluid'>
      
      <div className='row pt-5'>

        <div className='col-8 offset-2'>

          <h3>Todo List Using React</h3>

          <div className="input-group " style={{ height: '7vh' }}>

            <input type="text"
              style={{ outline: 'none' }}
              className="form-control"
              placeholder=""
              onChange={
                ((e) => {
                  let task = e.target.value;
                  updateInput({ id: todoValue.id, inputValue: task })
                })
              }
              onBlur={addNewList}
              id="item"
              defaultValue={todoValue.inputValue}
            />

            <button
              disabled={btnFlag === true}
              className="btn btn-primary"
              onClick={addNewList}>
              Add List
            </button>

          </div>

          <ul className="list-group scrollStyle" >

            {

              todoList.map(
                (u, index) => {

                  return (

                    <li key={index}
                      className="list-group-item mt-4"
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                    >

                      <p>{u.Items}</p>

                      <button
                        className="btn"
                        onClick={() => { deleteItem(u.id) }}
                      >❌
                      </button>

                    </li>
                  )
                })
            }
          </ul>

        </div>

      </div>

    </div>

  );
/* Deleted Item in array to select Cross mark*/

function deleteItem(ele) {

  addList(todoList.filter(

    (e) => {

      return e.id !== ele;

    }

  ))

}

/* add Button clicked to display the list items*/

function addNewList() {

  let focus = document.getElementById('item');

  focus.value = null;

  if (todoValue.inputValue === "") {
    btnFlag = true;

  } else {

    let todoId2 = [...todoList, { id: todoValue.id++, Items: todoValue.inputValue }];

    addList(todoId2);

    updateInput({id: todoValue.id,inputValue:""})

  }

}

}

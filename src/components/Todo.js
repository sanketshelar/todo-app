import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { todoActions } from '../store/todoReducer';
import { useSelector } from 'react-redux';
import ListItem from './ListItem';

const Todo = () => {
  const [task, setTask] = useState();
  const [disable, setDisable] = useState(false);
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.list);

  const inputHandler = (e) => {
    setDisable(true);
    setTask(e.target.value);
  };

  const formHandler = (e) => {
    e.preventDefault();
    dispatch(
      todoActions.ADD_DATA({
        id: new Date().getTime().toString(),
        data: task,
      })
    );

    setTask('');
    setDisable(false);
  };
  return (
    <TodoContainer>
      <h2>TODO App</h2>

      <form onSubmit={formHandler}>
        <input
          type='text'
          placeholder='Task'
          value={task}
          onChange={inputHandler}
        />

        <button disabled={!disable}>Add Task</button>
      </form>

      <div>
        {list.map((item) => (
          <ListItem key={item.id} id={item.id} data={item.data} />
        ))}
      </div>
    </TodoContainer>
  );
};

export default Todo;

const TodoContainer = styled.div`
  height: 100%;
  padding: 50px 50px;
  > h2 {
    margin-bottom: 30px;
  }

  > form > input {
    padding: 10px;
    border-radius: 5px;
    border: none;
  }

  > form > button {
    padding: 10px;
    margin-left: 8px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    background-color: #fa8072;
    color: white;
  }

  > div {
    margin-top: 25px;
  }
`;

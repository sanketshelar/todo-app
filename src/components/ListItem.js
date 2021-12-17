import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { todoActions } from '../store/todoReducer';

const ListItem = ({ id, data }) => {
  const [isEditing, isSetEditing] = useState(false);
  const [isEditTask, isSetEditTask] = useState(data);
  const dispatch = useDispatch();

  const deleteHandler = () => {
    dispatch(todoActions.REMOVE_DATA(id));
  };

  const updateHandler = () => {
    isSetEditing(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      todoActions.UPDATE_DATA({
        id,
        isEditTask,
      })
    );
    isSetEditing(false);
  };

  return (
    <ListContainer>
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={isEditTask}
            onChange={(e) => isSetEditTask(e.target.value)}
          />
          <button>Save</button>
          <button onClick={() => isSetEditing(false)}>Cancel</button>
        </form>
      ) : (
        <p>{data}</p>
      )}

      {!isEditing && (
        <div>
          <span onClick={deleteHandler}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-4 w-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </span>
          <span onClick={updateHandler}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              class='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z'
              />
            </svg>
          </span>
        </div>
      )}
    </ListContainer>
  );
};

export default ListItem;

const ListContainer = styled.div`
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  background-color: #ffe4e1;
  width: 30%;

  display: flex;
  justify-content: space-between;

  > p {
    width: 70%;
    word-wrap: break-word;
  }

  > div > span {
    margin: 0px 10px;
    cursor: pointer;
  }
  > div > span > svg {
    height: 25px;
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
`;

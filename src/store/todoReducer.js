import { createSlice } from '@reduxjs/toolkit';

const todoReducer = createSlice({
  name: 'todo',
  initialState: { list: [] },
  reducers: {
    ADD_DATA: (state, action) => {
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };
    },

    REMOVE_DATA: (state, action) => {
      const newlist = state.list.filter((item) => item.id !== action.payload);
      return {
        ...state,
        list: newlist,
      };
    },

    UPDATE_DATA: (state, action) => {
      const { id, isEditTask } = action.payload;

      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              data: isEditTask,
            };
          } else {
            return item;
          }
        }),
      };
    },
  },
});

export const todoActions = todoReducer.actions;

export default todoReducer.reducer;

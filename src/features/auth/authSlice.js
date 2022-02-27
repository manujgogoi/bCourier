import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    isLoggedIn: false,
    status: 'idle',
    error: null,
  },
  reducers: {
    //   setAuth: (state, action) => {
    //       state.userId = action
    //   }
  },
});

export const {setAuth, removeAuth} = authSlice.actions;

export default authSlice.reducer;

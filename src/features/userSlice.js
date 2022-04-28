import { createSlice } from '@reduxjs/toolkit'
const initialState = {
 data: {}
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state) => {
      let users = localStorage.getItem('users');
      const user_id = localStorage.getItem('logged');
      if(users) {
        users = JSON.parse(users);
        state.data = users[user_id];
      }
    },
    setCardsLoaded: (state) => {
      state.data.posts_loaded+=2;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setUser, setCardsLoaded } = userSlice.actions

export default userSlice.reducer 
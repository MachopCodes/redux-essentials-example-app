import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!'},
    { id: '2', title: 'Second Post', content: 'More Text'}
]

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload)
        }
    }
})

export const { postAdded } = postSlice.actions

export default postSlice.reducer
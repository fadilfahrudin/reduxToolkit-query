import { createSlice } from '@reduxjs/toolkit'

// Initial value
const initialState = {
    value: 0,
}

// Action Creators
const increment = (state, action) => {
    state.value += 1
}
// Action Creators
const decrement = (state, action) => {
    state.value -= 1
}

// Slice Reducer
export const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        incremented: (state, action) => increment(state, action),
        decremented: (state, action) => decrement(state, action)
    }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { incremented, decremented } = CounterSlice.actions
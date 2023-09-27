import { configureStore } from '@reduxjs/toolkit';
import { CounterSlice } from './features/CounterReducer'
import { setupListeners } from '@reduxjs/toolkit/query'
import { articlesApi } from './services/userApi'

const store = configureStore({
    reducer: {
        counter: CounterSlice.reducer,
        [articlesApi.reducerPath]: articlesApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(articlesApi.middleware)
})

setupListeners(store.dispatch)

export default store;
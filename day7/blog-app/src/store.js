import { configureStore } from '@reduxjs/toolkit'
import BlogsReducer from './features/blogs/BlogSlice';

export const store = configureStore({
    reducer: {
        Blogs: BlogsReducer
    },
})
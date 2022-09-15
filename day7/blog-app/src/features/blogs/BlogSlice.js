import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";
const initialState = [
    {
        id: "1",
        title: "First Post!",
        content:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        date: sub(new Date(), { minutes: 17 }).toISOString(),
    },
    {
        id: "2",
        title: "Second Post",
        content:
            "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ",
        date: sub(new Date(), { minutes: 18 }).toISOString(),
    },
    {
        id: "3",
        title: "Third Post",
        content:
            "From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.",
        date: sub(new Date(), { minutes: 20 }).toISOString(),
    },
    {
        id: "4",
        title: "Fourth Post",
        content:
            "Software development engineers in India, were excited to be at your campus in -person👋.Speak to us to learn how you can build your career a ",
        date: sub(new Date(), { minutes: 41 }).toISOString(),
    },
    {
        id: "5",
        title: "Fifth Post",
        content:
            "From its medieval origins to the digital era, learn everything there is to know about the ubiquitous lorem ipsum passage.",
        date: sub(new Date(), { minutes: 44 }).toISOString(),
    },
];

const BlogSlice = createSlice({
    name: "Blogs",
    initialState,
    reducers: {
        addBlog: (state, action) => {
            state.push(action.payload);
        },
        editBlog: (state, action) => {
            const { id, title, content } = action.payload;
            const existingBlog = state.find((Blog) => Blog.id === id);
            if (existingBlog) {
                existingBlog.title = title;
                existingBlog.content = content;
            }
        },
        deleteBlog: (state, action) => {
            const { id } = action.payload;
            const existingBlog = state.find((Blog) => Blog.id === id);
            if (existingBlog) {
                return state.filter((Blog) => Blog.id !== id);
            }
        },
    },
});

export const { addBlog, editBlog, deleteBlog } = BlogSlice.actions;
export default BlogSlice.reducer;

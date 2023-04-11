import { configureStore } from '@reduxjs/toolkit'
import expenseSlice from './features/expenseSlice'
import modalSlice from './features/modalSlice'

export const store = configureStore({
  reducer: {
    expense: expenseSlice,
    modal: modalSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
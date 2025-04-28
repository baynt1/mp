import { configureStore } from '@reduxjs/toolkit'
import { api } from '@services/api.ts'
import { favoriteSlice } from '@utils/favorite-slice.ts'

export const store = configureStore({
  reducer: {
    favoriteSlice: favoriteSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items: number[]
}

const initialState: CounterState = {
  items: [],
}

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.indexOf(action.payload)

      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1)
      } else {
        state.items.push(action.payload)
      }
    },
  },
})

export const { addFavorite } = favoriteSlice.actions

export default favoriteSlice.reducer

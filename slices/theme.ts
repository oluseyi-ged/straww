import { createSlice } from "@reduxjs/toolkit"
const initialState = {
  theme: "light",
}
const loaderSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      return { ...state, theme: action.payload }
    },
    clearTheme: () => {
      return { theme: "" }
    },
  },
})

const { reducer, actions } = loaderSlice
export const { setTheme, clearTheme } = actions
export default reducer

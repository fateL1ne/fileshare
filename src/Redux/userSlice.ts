import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    token: string | null
}

const TOKEN_NAME = "token"

export const initialState = { 
    token: sessionStorage.getItem(TOKEN_NAME)
} as UserState


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser : (state, action : PayloadAction<string>) => {
            sessionStorage.setItem(TOKEN_NAME, action.payload)
            state.token = action.payload 
        },
        logout : (state) => { 
            sessionStorage.removeItem(TOKEN_NAME);
            state.token = null
        }
    }
})

export const { setUser, logout } = userSlice.actions
export default userSlice.reducer

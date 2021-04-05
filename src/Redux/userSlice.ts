import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    jwt: string | null
}

const initialState = { 
    jwt: sessionStorage.getItem("jwt_token")
} as UserState


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser : (state, action : PayloadAction<string>) => { 
            state.jwt = action.payload 
            console.log(state)
        },
        logout : (state) => { 
            state.jwt = null 
        }
    }
})

export const selectToken = (state : any) => state.user.jwt


export const { setUser, logout } = userSlice.actions
export default userSlice.reducer

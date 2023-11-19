import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILoggedInUser, IUserState } from './user';

export const initialState: IUserState = {
    loggedInUser: {} as ILoggedInUser
};

export const userSlice = createSlice({
    name: 'userState',
    initialState: initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<any>) => {
            console.log('[action] - ', action);
            state.loggedInUser = action.payload;
        }
    }
});

export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;

import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { InfoUser } from '@/types';

export type UserStoreState = {
    dataUser: InfoUser;
};

export const userSlice = createSlice({
    name: 'userStore',
    initialState: {
        dataUser: {},
    } as UserStoreState,
    reducers: {
        setDataUser: (state:any, action: PayloadAction<InfoUser>) => {
            state.dataUser = { ...action.payload };
        },
    },
});

export const { setDataUser } = userSlice.actions;

export default userSlice.reducer;
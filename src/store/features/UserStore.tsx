import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { SummaryDataUser } from '@/types';

export type UserStoreState = {
    dataUser: SummaryDataUser;
};

export const userSlice = createSlice({
    name: 'userStore',
    initialState: {
        dataUser: {},
    } as UserStoreState,
    reducers: {
        setDataUser: (state:any, action: PayloadAction<SummaryDataUser>) => {
            state.dataUser = { ...action.payload };
        },
    },
});

export const { setDataUser } = userSlice.actions;

export default userSlice.reducer;
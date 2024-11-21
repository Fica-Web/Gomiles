import { createSlice } from "@reduxjs/toolkit";

const packagesSlice = createSlice({
    name: 'packages',
    initialState: {
        packages: [],
        selectedPackage: null,
    },
    reducers: {
        setPackages: (state, action) => {
            state.packages = action.payload;
        },
        selectPackage: (state, action) => {
            state.selectedPackage = action.payload;
        },
        clearSelectedPackage: (state) => {
            state.selectedPackage = null;
        },
    },
});

export const { setPackages, selectPackage, clearSelectedPackage} = packagesSlice.actions
export default packagesSlice.reducer;
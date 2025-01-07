import { createSlice } from "@reduxjs/toolkit";

const packagesSlice = createSlice({
    name: 'packages',
    initialState: {
        packages: JSON.parse(localStorage.getItem('packages')) || [], // Load from localStorage or set to an empty array
        selectedPackage: null,
    },
    reducers: {
        setPackages: (state, action) => {
            state.packages = action.payload;
            localStorage.setItem('packages', JSON.stringify(action.payload)); // Save packages to localStorage
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
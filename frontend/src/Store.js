import { configureStore } from "@reduxjs/toolkit";
import packagesReducer from './Reducer/packageSlice';

const store = configureStore({
    reducer: {
        packages: packagesReducer,
    },
});

export default store;

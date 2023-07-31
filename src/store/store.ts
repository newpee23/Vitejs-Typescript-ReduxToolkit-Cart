import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlices";
import authReducer from "./slices/authSlices";
import { useSelector , useDispatch , TypedUseSelectorHook } from "react-redux";


const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

type RootState = ReturnType<typeof store.getState>
type AppDispath = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispath>();

export default store;

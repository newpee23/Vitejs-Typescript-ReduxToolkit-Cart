import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, ProductDataEdit } from "../../type";

const initialState: Product[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      // เช็คว่ามีข้อมูลสินค้านั้นหรือยัง
      const chk_item = state.find((item) => item.id === action.payload.id);

      if (!chk_item) {
        // หากไม่พบสินค้าในตะกร้าจะเพิ่มสินค้าเข้าไป
        state.push(action.payload);
      } else {
        // หากมีแล้วให้อัพเดท qty เข้าไป 1
        return state.map((i) => ({
          ...i,
          qty: i.id === chk_item.id ? i.qty + 1 : i.qty,
        }));
      }
    },

    deleteToCart: (state, action: PayloadAction<string>) => {
      return state.filter((itemDel) => itemDel.id !== action.payload);
    },

    editToCart: (state, action: PayloadAction<ProductDataEdit>) => {
      // เช็คว่ามีข้อมูลสินค้านั้นว่ามีใน state หรือไม่
      const chk_item_QP = state.find(
        (itemqp) => itemqp.id === action.payload.id
      );

      if (!chk_item_QP) {
        return state;
      } else {
        // update Cart จาก state.id === action.payload.id
        return state.map((item) =>
          item.id === action.payload.id
            ? { ...item, 
              qty: action.payload.qty, price: action.payload.price }
            : item
        );
      }
    },

    clearToCart: () => {
      return []; // ไม่ต้องแก้ค่า state โดยตรง แต่ควร return array ใหม่เพื่อลบทั้งหมดใน cart
    }
  },
});

// Action creators
export const { addToCart, deleteToCart, editToCart , clearToCart } = cartSlice.actions;
// Reducer
export default cartSlice.reducer;

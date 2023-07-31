import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserLogin } from "../../type";
import { signin } from '../../data/users'
type AuthState = {
    user: UserLogin | null
    loading: boolean
    error: string
}

const initialState: AuthState = {
    user: null,
    loading: false,
    error: '',
}

// สร้างฟังก์ชัน siginAsync แบบ asynchronous ด้วย createAsyncThunk
export const siginAsync = createAsyncThunk('signin', async ({ email, password }: { email: string; password: string; }, store) => {
    // ใส่โค้ดที่ทำการส่งคำขอเข้าสู่ระบบและคืนค่าผลลัพธ์ที่ได้ในรูปแบบของ async/await
    try {
        const user = await signin(email, password);
 
        return user;
     } catch (error) {
         throw error;
     }
  });

  // siginAsync.pending ตัวบอกว่าเริ่มทำงาน , siginAsync.fulfilled ตัวบอกว่าทำงานสำเร็จ , siginAsync.rejected ตัวบอกว่าทำงานไม่สำเร็จ

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        signout: (state) => {
            state.user = null;
            state.loading = false;
            state.error = '';
        }
    },
    extraReducers: (builder) => {
        builder.addCase(siginAsync.pending, (state) => {
            state.loading = true;
            state.error = '';
        })
        builder.addCase(siginAsync.fulfilled, (state, action) => { // นี่คือตัวอย่างการใช้งานเมื่อ siginAsync สำเร็จ
            state.user = action.payload; // ใช้ action.payload เพื่อเข้าถึงค่าที่ return จาก siginAsync
            state.loading = false;
            state.error = '';
        })
        builder.addCase(siginAsync.rejected, (state, action) => {
            state.user = null;
            state.loading = false;
            state.error = action.error.message || '';
        })
    }
  });

export const {signout} = authSlice.actions;
export default authSlice.reducer
import { loginFailure, loginStart, loginSuccess } from "./userRedux.js";
import { deleteProductFailure, deleteProductStart, deleteProductSuccess, getProductFailure,getProductStart,getProductSuccess } from "./productsRedux.js";
import{publicRequest, userRequest} from "../requestMethods.js";

export const login= async (dispatch,user)=>{
    dispatch(loginStart());
    try {
        const res= await publicRequest.post("/auth/login",user);
        dispatch(loginSuccess(res.data));
    } catch (error) {
        dispatch(loginFailure());
    }
}
export const getProducts= async (dispatch)=>{
    dispatch(getProductStart());
    try {
        const res= await publicRequest.get("/product");
        dispatch(getProductSuccess(res.data));
    } catch (error) {
        dispatch(getProductFailure());
    }
}
export const deleteProduct= async (id,dispatch)=>{
    dispatch(deleteProductStart());
    try {
        await userRequest.delete(`/product/${id}`);
        dispatch(deleteProductSuccess(id));
    } catch (error) {
        dispatch(deleteProductFailure());
        console.log(error);
    }
}

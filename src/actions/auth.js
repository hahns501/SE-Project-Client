import * as api from "../api";

export const loginUser = (user) => async (dispatch) => {
    console.log("loginUser Action");
    try{
        const { data } = await api.loginUser(user);

        dispatch({ type: 'AUTH', data});
    }catch(error){
        console.log(error.message);
    }
}

export const logoutUser = () => async (dispatch) =>{
    console.log("AUTH logoutUser Action");

    try{
        await api.logoutUser(JSON.parse(localStorage.getItem('user')));

        dispatch({type: 'LOGOUT'});
    }catch(error){
        console.log(error.message);
    }
}

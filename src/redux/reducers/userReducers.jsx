import { GET_USERS_REQUEST, GET_USERS_SUCCESS, GET_USERS_FAIL } from "../constants/userConstants";

 export const userReducers = (state = {users:[]}, action) => {
    switch(action.type){
        case GET_USERS_REQUEST:
            return {    loading:true, users:[] };//response are stored in users[]
            
        case GET_USERS_SUCCESS:
            return {    loading:false, users: action.payload    };
           

        case GET_USERS_FAIL:
            return {    loading:false, error: action.payload    };
           

        default:
            return state;
    }
};


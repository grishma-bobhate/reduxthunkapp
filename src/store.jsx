import { createStore, combineReducers, applyMiddleware} from "redux";
// import rootReducer from "./rootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userReducers}   from "./redux/reducers/userReducers";

const rootReducer = combineReducers({
    userList: userReducers,          //userList will add all reducers list
})

const initialState = {loading:false,
    users:[],
    error:''};

const middleware = [thunk];

const store =  createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
    )

    export default store;
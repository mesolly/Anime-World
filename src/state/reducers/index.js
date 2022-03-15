import { combineReducers } from "redux";
import loadingReducer from "./loadingReducer"
import quoteReducer from "./quoteReducer"
import progressReducer from "./progressReducer"
const reducers = combineReducers({
    loading: loadingReducer ,
    quote: quoteReducer,
    progress : progressReducer
}) ;

export default reducers ;
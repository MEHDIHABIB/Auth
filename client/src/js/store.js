import{createStore, compose, applyMiddleware} from "redux" ;
import thunk from "redux-thunk" ;
import reducer from "./reducer/reducer" ;


const middleware = [thunk]

const devtools = window.__REDUX_DEVTOOLS_EXTENSIONS__ ? window.__REDUC_DEVTOOLS_EXTENSION__() : (a) => a

const store = createStore(reducer, compose(applyMiddleware(...middleware), devtools))

export default store 



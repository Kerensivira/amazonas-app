import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "../Reducers/loginReducer";
import { registerReducer } from "../Reducers/registerReducer";

// Local Storage

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducersEnviar = combineReducers({
    login: loginReducer,
    register: registerReducer,

})

export const store = createStore(
    reducersEnviar,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)



import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { productsReducer } from "./products/products.reducer";
import { heroReducer } from "./hero/hero.reducer";

const rootReducer = combineReducers({
    // products: productsReducer,
    hero: heroReducer,
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import recipeReducer from "./ducks/recipe";

const reducer = combineReducers({ recipe: recipeReducer });

const store = createStore(reducer, applyMiddleware(thunk));

export default store;

import { createStore, combineReducers } from "redux";
import CategoryReducer from "./reducers/category.reducer";
import BookReducer from "./reducers/books.reducer";

const RootReducer = combineReducers({
    categories: CategoryReducer,
    Books: BookReducer
})

export default createStore(RootReducer)
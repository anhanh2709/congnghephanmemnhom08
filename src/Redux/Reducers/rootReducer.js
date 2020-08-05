import { combineReducers } from "redux";
import MovieReducer from "./MovieReducer";
import UserReducer from "./UserReducer";
import TheaterReducer from "./TheaterReducer";

const RootReducer = combineReducers({
    MovieReducer: MovieReducer,
    UserReducer: UserReducer,
    TheaterReducer: TheaterReducer,
});

export default RootReducer;
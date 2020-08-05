import { FETCH_THEATERS } from "../Types/TheaterType";

let initialState = {
    theaters: [],
};

const TheaterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_THEATERS:
            {
                state.theaters = action.payLoad;
                return {...state };
            }
        default:
            return state;
    }
};

export default TheaterReducer;
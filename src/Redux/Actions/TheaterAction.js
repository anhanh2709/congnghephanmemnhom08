import { theaterService } from "../../Services/Theater/TheaterService";
import { createAction } from "./createAction";
import { FETCH_THEATERS } from "../Types/TheaterType";

export const fetchTheaters = () => {
    return (dispatch) => {
        theaterService
            .fetchTheaterList()
            .then((res) => {
                // console.log(res.data);
                dispatch(createAction(FETCH_THEATERS, res.data));
            })
            .catch((err) => {
                console.log(err);
            });
    };
};
import {
    GET_FAVORITES,
    LOADING_TRUE
} from "./type";

import axios from 'axios';

export function getFavorites() {
    return async (dispatch) => {

        dispatch({
            type: LOADING_TRUE
        })
    
        const { data } =  await axios.get(
			"http://unittest.test/api/favorite"
		);

        let payload = data

        dispatch({
            type: GET_FAVORITES,
            payload,
        })
    }
}
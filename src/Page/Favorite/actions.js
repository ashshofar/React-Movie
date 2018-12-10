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

export function deleteFavorite(id) {
    return async (dispatch) => {

        await axios.get(
			"http://unittest.test/api/favorite/detele/"+id
        );


        dispatch(getFavorites())
    }
}
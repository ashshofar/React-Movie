import {
	GET_MOVIES
} from "./type";

import axios from 'axios';

export function syncMovies() {
    return async (dispatch) => {
    
        const { data } =  await axios.get(
			"http://unittest.test/api/movie"
		);

        let payload = data

        dispatch({
            type: GET_MOVIES,
            payload,
        })
    }
}
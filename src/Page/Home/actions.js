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

export function addMovie(item, history) {
    return async (dispatch) => {
    
        await axios.post('http://unittest.test/api/movie/store', item)
        .then(function () {
            dispatch(syncMovies())
            
            alert('berhasil ditambahkan ke favorite');

            history.push('/')
        })
        .catch(function (error) {
            console.log(error);
        });

    }
}
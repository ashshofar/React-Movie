import {
    DETAIL_MOVIE,
    LOADING_TRUE
} from "./type";

import axios from 'axios';

export function getDetailMovie(id) {
    return async (dispatch) => {

        dispatch({
            type: LOADING_TRUE
        })
    
        const { data } =  await axios.get(
			"http://unittest.test/api/movie/show/"+id
		);

        let payload = data

        dispatch({
            type: DETAIL_MOVIE,
            payload,
        })
    }
}

export function addToFavorite(id) {
    return async () => {
        await axios.post('http://unittest.test/api/favorite/store', {
            movie_id: id
        })
        .then(function () {
            alert('berhasil ditambahkan ke favorite');
        })
        .catch(function (error) {
            console.log(error);
        });
    } 
}
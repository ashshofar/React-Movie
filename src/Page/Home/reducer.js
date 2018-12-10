import {
	GET_MOVIES,
	DETAIL_MOVIE
} from "./type";

const initialState = {
	movies: false,
	detailMovie: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_MOVIES:
			return { ...state, movies: payload };
		case DETAIL_MOVIE:
			return { ...state, detailMovie: payload };
		default:
			return state;
	}
};

import {
	DETAIL_MOVIE,
	LOADING_TRUE
} from "./type";

const initialState = {
	loading: false,
	detailMovie: {}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case DETAIL_MOVIE:
			return { ...state, detailMovie: payload, loading: false };
		case LOADING_TRUE:
			return { ...state, loading: true};
		default:
			return state;
	}
};

import {
	GET_FAVORITES,
	DELETE_FAVORITE,
    LOADING_TRUE
} from "./type";

const initialState = {
	loading: false,
	favorites: []
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case GET_FAVORITES:
            return { ...state, favorites: payload, loading: false };
		case LOADING_TRUE:
			return { ...state, loading: true };
		default:
			return state;
	}
};

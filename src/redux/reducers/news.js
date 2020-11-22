import { FETCH_NEWS_SUCCESS, FETCH_NEWS_ERROR } from '../actions/news';

const initialState = {
    loading: true,
    news: [],
    error: null,
};

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                loading: false,
                news: action.payload.results,
            };
        case FETCH_NEWS_ERROR:
            return {
                ...state,
                news: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default newsReducer;
import {
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_ERROR,
    FETCH_POPULAR_SUCCESS,
    FETCH_TECH_SUCCESS,
} from '../actions/news';

const initialState = {
    loading: true,
    news: [],
    popular: [],
    tech: [],
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
        case FETCH_POPULAR_SUCCESS:
            return {
                ...state,
                popular: action.payload.results,
            };
        case FETCH_TECH_SUCCESS:
            return {
                ...state,
                tech: action.payload.results,
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
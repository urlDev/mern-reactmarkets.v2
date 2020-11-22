import { FETCH_CHART_SUCCESS, FETCH_CHART_ERROR } from '../actions/chart';

const initialState = {
    loading: true,
    chart: [],
    error: null,
};

const chartReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHART_SUCCESS:
            return {
                ...state,
                chart: action.payload,
                loading: false,
            };
        case FETCH_CHART_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default chartReducer;
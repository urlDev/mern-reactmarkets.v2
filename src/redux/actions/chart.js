import axios from 'axios';

export const FETCH_CHART_SUCCESS = 'FETCH_CHART_SUCCESS';
export const FETCH_CHART_ERROR = 'FETCH_CHART_ERROR';

export const fetchChartSuccess = (chart) => ({
    type: FETCH_CHART_SUCCESS,
    payload: chart,
});

export const fetchChartError = (error) => ({
    type: FETCH_CHART_ERROR,
    payload: error,
});

export const fetchChart = () => async(dispatch) => {
    try {
        const response = await axios.get(
            `https://financialmodelingprep.com/api/v3/quotes/index?apikey=${process.env.REACT_APP_CHART_KEY}`,
        );
        const data = await response.data;
        return dispatch(fetchChartSuccess(data));
    } catch (error) {
        return dispatch(fetchChartError(error));
    }
};
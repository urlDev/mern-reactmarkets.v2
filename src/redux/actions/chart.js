import axios from 'axios';

export const FETCH_FOREX_SUCCESS = 'FETCH_CHART_SUCCESS';
export const FETCH_CHART_ERROR = 'FETCH_CHART_ERROR';

export const fetchForexSuccess = (chart) => ({
    type: FETCH_FOREX_SUCCESS,
    payload: chart,
});

export const fetchChartError = (error) => ({
    type: FETCH_CHART_ERROR,
    payload: error,
});

export const fetchForex = () => async(dispatch) => {
    try {
        const response = await axios.get(
            `https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/v3/quotes/forex?apikey=${process.env.REACT_APP_CHART_KEY}`,
        );
        const data = await response.data;
        return dispatch(fetchForexSuccess(data));
    } catch (error) {
        return dispatch(fetchChartError(error));
    }
};
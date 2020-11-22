import axios from 'axios';

export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_ERROR = 'FETCH_NEWS_ERROR';

export const fetchNewsSuccess = (news) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: news,
});

export const fetchNewsError = (error) => ({
    type: FETCH_NEWS_ERROR,
    payload: error,
});

export const fetchTopStories = (topStories) => async(dispatch) => {
    try {
        const response = await axios.get(
            `https://api.nytimes.com/svc/topstories/v2/${topStories}.json?api-key=${process.env.REACT_APP_NEWS_API_KEY}`,
        );
        const data = await response.data;
        return dispatch(fetchNewsSuccess(data));
    } catch (error) {
        return dispatch(fetchNewsError(error));
    }
};

export const fetchMostPopular = () => async(dispatch) => {
    try {
        const response = await axios.get(
            `https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=${process.env.REACT_APP_NEWS_API_KEY}`,
        );
        const data = await response.data;
        return dispatch(fetchNewsSuccess(data));
    } catch (error) {
        return dispatch(fetchNewsError(error));
    }
};
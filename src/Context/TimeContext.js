import createDataContext from './createDataContext';

const TimeReducer = (state, action) => {
    switch (action.type) {
        case 'changeCurrentDate':
            return { ...state, currentDate: action.payload }
        case 'changeYear':
            return { ...state, year: action.payload }
        case 'changeChristmas':
            return { ...state, nextChristmas: action.payload }
        default:
            return state
    }
}

const changeCurrentDate = (dispatch) => {
    return (value) => {
        dispatch({ type: 'changeCurrentDate', payload: value })
    }
}

const changeYear = (dispatch) => {
    return (value) => {
        dispatch({ type: 'changeYear', payload: value })
    }
}

const changeNextChristmas = (dispatch) => {
    return (value) => {
        dispatch({ type: 'changeChristmas', payload: value })
    }
}

export const { Provider, Context } = createDataContext(
    TimeReducer,
    { changeCurrentDate, changeYear, changeNextChristmas },
    { nextChristmas: 'December 25 2021 00:00', currentDate: 0, year: 2021 }
)
const fetchApi = (state = 'loading', action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return 'SUCCESS'
        case 'FETCH_FAILED':
            return 'failed'
        default:
            return state
    }
}

export default fetchApi;
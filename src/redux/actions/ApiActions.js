export const fetchWeather = (obj) =>{
    return{
        type: 'FETCH_WEATHER',
        payload: obj
    }
}

export const fetchApiSuccess = ()=>{
    return{
        type:'FETCH_SUCCESS',
        payload:null
    }
}

export const fetchApiFailed =()=>{
    return{
        type:'FETCH_FAILED',
        payload:null
    }
}
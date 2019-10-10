export const addToFavorite =(obj)=>{  
return {
    type:'ADD_FAVORITE',
    payload:obj
}
}

export const removeFromFavorites =(obj)=>{  
    return {
        type:'REMOVE_FAVORITE',
        payload:obj
    }
}

export const getFavorites =()=>{  
    return {
        type:'FETCH_FAVORITES',
        payload:null
    }
}

export const setLoading = (loading) =>{
    return (dispatch)=>{
        dispatch({
            type: 'setLoad',
            payload: loading
        })
    }
}
export const setQuote = (quotes) =>{
    return (dispatch)=>{
        dispatch({
            type: 'setQuote',
            payload: quotes
        })
    }
}

export const setProgress = (prog) => {
    return (dispatch)=>{
        dispatch({
            type: 'progress' ,
            payload: prog
        })
    }
}
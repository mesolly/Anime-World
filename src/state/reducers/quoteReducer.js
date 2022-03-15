const reducer = (state={},action) =>{
    if(action.type==='setQuote'){
        return action.payload ;
    }else{
        return state ;
    }
}
export default reducer ;
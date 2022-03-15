const reducer = (state=true,action)=>{
    if(action.type==='setLoad'){
        return action.payload ;
    }else{
        return state ;
    }
    
}

export default reducer ;
var redux = require('redux')
var reducer = (state={temp:null}, action)=>{
    switch(action.type){
        case "CHANGE":
            return {...state,temp:action.item}
        default:
            return state
    }
}
var Store=()=>{
    var store = redux.createStore(reducer)
    return store
}
export default Store
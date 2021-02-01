export default(state = false, action) =>{
    switch (action.type){
        case 'getState':
            return state
        case 'setTrue':{
            return state = true;
        }
        case 'setFalse':{
            return state = false;
        }
        case 'switch':{
            return !state
        }
        default:
            return state
    }
}
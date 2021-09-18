const AppReducer =  (state, action) =>{
    console.log(action,'----',state.events)
    switch(action.type){
    
        case 'REMOVE_EVENT':
            return {
                events: state.events.filter( c =>{
                    return c.EventName !== action.payload
                })
            }

        case 'ADD_EVENT':
            return {
                events:[action.payload, ...state.events]
            }

        default:
            return state
    }
}

export default AppReducer
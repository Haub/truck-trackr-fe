export const userReducer = (state = false, action) => {
    switch(action.type) {
        case 'TOGGLE_SIGNED_IN':
            return action.userStatus
        default: 
            return state
    }
}
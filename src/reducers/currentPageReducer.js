export const currentPageReducer = (state = {}, action) => {
    switch(action.type) {
        case 'LOAD_PROFILE':
            return action.profile
        case 'CHANGE_CURRENT_PAGE':
            return action.currentPage
        default: 
            return state
    }
}
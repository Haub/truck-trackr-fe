export const currentPageReducer = (state = {}, action) => {
    switch(action.type) {
        case 'LOAD_PROFILE':
            return action.profile
    }
}
export const store = (state, action) => {
    switch (action.type) {
        case 'landing/shiftFeaturedForward':
            alert ('diapatched.')
            return {
                ...state,
                translateX: (parseInt(state.translateX)+20).toString()
            }
        default:
            throw new Error('Undefined action')
    }
}

export const initState = {
    translateX: '0'
}
const INITIAL_STATE = {
    ex1Data: []
}
export default (state = INITIAL_STATE, action) => {
    const { type = '', payload = {} } = action;
    switch (type) {
        case 'SET_EX1_DATA': {
            return {
                ...state,
                ex1Data: [
                    ...payload.data
                ]
            }
        }
        default:
            return state;
    }
};
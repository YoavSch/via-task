export const contactReducer = function (state = 0, action) {
    switch (action.type) {
        case "FETCH_CONTACTS": {
            return {
                query: state.query,
                contacts: action.contacts
            }
        }
        case "UPDATE_QUERY" : {
            return {
                query: action.query,
                contacts: state.contacts
            }
        }
        default:
            return state;
    }
};

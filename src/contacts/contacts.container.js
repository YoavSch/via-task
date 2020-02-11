import {connect} from 'react-redux';
import {ContactView} from "./list/contact-list";

const mapStateToProps = (state) => {
    return {
        contacts: state.contacts ? state.contacts : [],
        query: state.query ? state.query : null
    };

};

const mapDispatchToProps = dispatch => {
    return {
        fetchContacts: (contacts) => dispatch({type: 'FETCH_CONTACTS', contacts}),
        updateQuery: (query) => dispatch({type: 'UPDATE_QUERY', query})
    }
};

export const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(ContactView);

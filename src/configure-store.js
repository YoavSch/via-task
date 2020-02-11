import { createStore } from 'redux';
import {contactReducer} from "./contacts/contacts.reducer";


export const store = createStore(contactReducer);


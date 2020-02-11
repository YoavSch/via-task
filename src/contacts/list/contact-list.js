import React, {useEffect} from 'react';
import axios from "axios";
import {Contact} from "../contact/contact";
import styled from 'styled-components'
import {Header} from "../header/header";


const Container = styled.div`
    background: #8080807a;
`;

const FlexGrid = styled.div`
    display: flex;
	flex-wrap: wrap;
	width: 45%;
    margin-left: auto;
    margin-right: auto;
  `;
const Col = styled.div`
    box-sizing: border-box;
    color: #171e42;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
`;
export const ContactView = ({contacts, query, fetchContacts, updateQuery}) => {

    /*******************************************************************
        fetch contacts details on page loading , and update redux store
     *******************************************************************/
    useEffect(() => {
        const fetchContactsUrl = 'http://private-05627-frontendnewhire.apiary-mock.com/contact_list';
        axios.get(fetchContactsUrl, {crossdomain: true})
            .then(response => {
                console.log(response.data)
                fetchContacts(response.data);
            })
    }, []);


    /******************************************************************************************
        filter contacts by user search input only filter when input is more than 3 characters
     *****************************************************************************************/
    const filteredContacts = () => {
        if (contacts && query !== null) {
            return contacts.filter((item) => {
                return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
            })
        }
        return contacts;
    };

    return (
        <div>
            <Header updateQuery={updateQuery}/>
            <Container>
                {contacts && contacts.length ? (
                    <FlexGrid>
                        {
                            filteredContacts().map((contact, index) => {
                                return <Col><Contact data={contact} key={index}/></Col>
                            })
                        }
                    </FlexGrid>
                ) : null}
            </Container>
        </div>
    );
}

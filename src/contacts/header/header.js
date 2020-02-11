import React from 'react';
import {DebounceInput} from 'react-debounce-input';
import styled from "styled-components";


const HeaderRow = styled.div`
    background : #2196F3;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: right;
    height: 45px;
  `;


const Search = styled.div` `;

export const Header = (props) => {

    /*********************************************************************************************
        handle user search input keypress  using debounce of 300ms and min length of 3 characters
     ********************************************************************************************/
    const handleOnSearchKeyPress = (event) => {
        props.updateQuery(event.target.value)
    };


    return (
        (
            <HeaderRow>
                <Search>
                    <DebounceInput
                        style={{
                            marginRight: '50px',
                            flex: '0.15',
                            alignSelf: 'center',
                            borderRadius: '10px',
                            border: 'none',
                            paddingLeft: '20px',
                            outline: 0,
                            height: '30px',
                            marginTop: '7px'
                        }}
                        placeholder="Search ..."
                        minLength={3}
                        debounceTimeout={300}
                        onChange={event => {
                            handleOnSearchKeyPress(event)
                        }}/>
                </Search>
            </HeaderRow>
        )

    );
}

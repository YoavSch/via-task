import React, {useState} from 'react';
import styled from "styled-components";

const ContractContainer = styled.div`
    background: white;
    padding: 15px;
    border-radius: 10px;
    display: -webkit-box; 
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    width: 165px;
    height: 270px;
  `;

const ContractInfo = styled.div`
    text-align : left;
    color: gray
  `;

const ImgContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: calc(35vh);
    width: 100%;
    max-height: 200px;
     
    &:hover {
        height: calc(15vh);
    } 
`;

const ContractInformationContainer = styled.div`
    margin-top: 20px;
`;

const TypeIcon = styled.img`
    position: absolute;
    margin-left: 20px; 
`;

const TypeIconContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    height: calc(35vh);
    width: 100%;
    max-height: 200px;
     margin-top: -20px;
    &:hover {
        height: calc(15vh);
    } 
`;

const ExtraContactInfo = styled.div`
    font-size: 13px;
    color: gray;
    text-align: left;
    margin-top: 5px;
`

export const Contact = ({data}) => {
    const [isShowExtraContractInfo, setIsShowExtraContractInfo] = useState(false);

    /*********************************************
     get contact icon according to driven type
     ********************************************/
    const getContactIcon = (driverType) => {
        const type = driverType.toLowerCase().trim();
        return type == 'professional' ? `../../../src/professional.svg` : `../../../src/citizen.svg`;
    };


    return (
        data ? (
            <ContractContainer>
                <ImgContainer>
                    <img
                        onMouseEnter={() => setIsShowExtraContractInfo(true)}
                        onMouseLeave={() => setIsShowExtraContractInfo(false)}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '100%'
                        }}
                        src={data.profile_image}
                    />
                    <TypeIconContainer>
                        <TypeIcon src={getContactIcon(data.driverType)}
                                  isShowExtraContractInfo={isShowExtraContractInfo}/>
                    </TypeIconContainer>
                </ImgContainer>

                <ContractInformationContainer>
                    <ContractInfo><span
                        style={{fontSize: '18px', fontFamily: 'cursive'}}> Full name</span></ContractInfo>
                    {data.name && <ContractInfo>{data.name}</ContractInfo>}
                    {isShowExtraContractInfo ?
                        <ExtraContactInfo>
                            <div>Phone Number: {data.phone}</div>
                            <div>Email: {data.email}</div>
                        </ExtraContactInfo> : null

                    }
                </ContractInformationContainer>

            </ContractContainer>
        ) : null

    );
};

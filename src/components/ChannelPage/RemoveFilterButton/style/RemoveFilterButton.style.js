import styled from "styled-components";

const Container = styled.button`
    min-width: 120px;
    height: 32px;
    margin-top : 8px;
    margin-right : 10px;
    padding : 9px 8px;
    background: #F6F5F3;
    border: 1px solid rgba(62, 63, 68, 0.4);
    border-radius: 8px;
    display : flex;
    align-items : center;
    justify-content : space-around;
    cursor : pointer;

    justify-self : flex-end;

    & > p{
        font-weight: 300;
        font-size: 10px;
    }

    & > img{
        
    }
`

export {Container}
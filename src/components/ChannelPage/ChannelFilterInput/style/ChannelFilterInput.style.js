import styled from "styled-components";

const Container = styled.div`
    width: 33%;
    height: 48px;
    position : relative;

    & > input{
        width : 100%;
        height: 48px;
        padding : 12px;
        border: 1px solid rgba(62, 63, 68, 0.4);
        border-radius: 8px;
    }

    & > img{
        position : absolute;
        top : 27%;
        left : 12px;
        display : inline;
        cursor : pointer;
    }
`

export {Container}
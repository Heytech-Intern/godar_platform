import styled from "styled-components";

const Container = styled.div`
    height : 48px;
    padding : 12px 16px;
    border: 1px solid rgba(62, 63, 68, 0.4);
    border-radius: 8px;
    display : flex;
    align-items : center;
    justify-content : center;
    margin-right : 24px;
    min-width : 260px;

    & > p{
        font-weight: 500;
        font-size: 12px;
        line-height: 20px;
        padding : 8px 12px;
        color: rgba(62, 63, 68, 0.87);
        text-align : center;
        cursor: pointer;
    }

    & > p:nth-of-type(1){
        margin-right : 0;
    }

    & > .active{
        background: #5DCCBF;
        border-radius: 8px;
        padding : 8px 12px;
        cursor: default;
        color : #fff;
    }
`

export {Container}
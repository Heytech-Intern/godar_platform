import styled from "styled-components";

const Container = styled.div`
    width : 693px;
    height : 48px;

    border: 1px solid rgba(62, 63, 68, 0.4);
    border-radius: 8px;

    display : flex;
    align-items : center;
    justify-content : space-between;

    & > .drop-down{
        width : 12px;
        height : 12px;
        margin-left : 18px;
        cursor: pointer;
    }

    & > .tag{
        margin-right : 16px;
        display : flex;
    }
`

const Tag = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    height: 32px;
    background: #F6F5F3;
    border-radius: 8px;
    margin-right : 12px;
    padding : 9px 12px;

    & > p{
        font-weight: 300;
        font-size: 12px;
        line-height: 14px;
        color: rgba(62, 63, 68, 0.87);
    }
 
    & > img{
        width : 11px;
        height : 11px;
        margin-right : 7px;
        cursor: pointer;
    }
`

export {Container, Tag}
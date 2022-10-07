import styled from "styled-components";

const Container = styled.div`
    display : flex;
    align-items : center;
    justify-content : flex-start;
`

const Skip = styled.div`
    height: 24px;
    width: 24px;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius: 8px;
    background : rgba(238, 234, 235, 0.4);
    border-radius: 8px;
    margin-right: 14px;
    cursor: pointer;
`
const Active = styled.p`
    background: linear-gradient(180deg, #EEEAEB 0%, #F8F7F7 0%, #5DCCBF 0%);
    box-shadow: 0px 4px 16px 0px #EAEAEE80;
    display : flex;
    justify-content : center;
    align-items : center;
    border-radius: 8px;
    width: 24px;
    height: 24px;
    margin-right: 14px;
    color : #fff;
    cursor: pointer;
    
`

const Box = styled.div`
    display : flex;
    align-items : center;
    cursor: pointer;
    & > .text{
        color: #3E3F44DE;
        font-weight: 700;
        font-size: 11px;
        line-height: 19px;
        cursor : default;
    }

    & > .box{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 14px;
    }
`

const Select = styled.div`
    background: 
        linear-gradient(0deg, #FFFFFF, #FFFFFF),
        linear-gradient(0deg, rgba(62, 63, 68, 0.87), rgba(62, 63, 68, 0.87));
    border: 1px solid rgba(62, 63, 68, 0.87);
    border-radius: 8px;
    width : 53px;
    height : 24px;
    display : flex;
    justify-content: space-around;
    align-items : center;
    margin-right : 8px;

    & > p{
        color: #3E3F44DE;

        font-weight: 700;
        font-size: 11px;
        line-height: 19px;
    }
`

export {Skip, Active, Container, Select, Box}
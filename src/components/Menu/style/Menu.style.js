import styled from "styled-components";

const Container = styled.section`
    position : fixed;
    left : 0;
    top : 50%;
    display : flex;
    flex-flow : column;
    align-items : center;
    justify-content : center;
    width : 58px;
    padding : 8px;
    height: 154px;
    background : #fff;

    & > div:forst-of-type{
        margin-top : 0;
    }
`
const Box = styled.div`
    Width : 42px;
    height: 42px;
    display : flex;
    flex-flow : column;
    align-items : center;
    justify-content : center;
    background: #F6F5F3;
    border-radius: 8px;
    margin-top : 6px;
`


export {Container,Box}
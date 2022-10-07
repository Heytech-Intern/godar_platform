import styled from "styled-components";

const Container = styled.button`
    width: 175px;
    height: 44px;
    right: 80px;
    bottom: 630px;
    display : flex;
    align-items : center;
    justify-content : space-around;
    background:  ${ ({active}) => active ? '#fff' : 'linear-gradient(265.29deg, #00AA8E 61.27%, #019C86 82.68%, #038175 100%)'};
    
    border : ${ ({active}) => active ? '1px solid #009d86'  : 'none'};
    border-radius: 8px;
    cursor : pointer;

    & > p{
        font-weight: 700;
        font-size: 14px;
        line-height: 24px;
        color : ${ ({active}) => active ? '#009d86'  : '#fff'};
    }

    & > img{
        Width : 16px;
        Height : 8px;
    }
`

export {Container}
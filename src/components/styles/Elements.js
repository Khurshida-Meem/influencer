import styled from 'styled-components';
// import './variables.scss'



export const H1 = styled.h2`
    font-weight: 700;
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.height};
    color: #3A3A3A;
`;

export const P = styled.p`
    font-weight: 700;
font-size: 14px;
line-height: 143%;
letter-spacing: 0.018em;
color: #787885;
`

export const A = styled.a`
    text-decoration: none;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #3A3A3A;
    margin: 10px;
    cursor: pointer;
`;

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.justify};
`

export const Button = styled.button`
padding: 10px 24px;
gap: 8px;
background: #E02C6D;
border-radius: 50px;
color: #fff;
font-weight: 700;
border: none;
outline: none;
`
import styled from 'styled-components';
// import './variables.scss'


export const H1 = styled.h1`
    font-weight: 700;
    font-size: 52px;
    line-height: 70px;
    color: #3A3A3A;
`;

export const H2 = styled.h2`
    font-weight: 700;
    font-size: ${(props) => props.fontSize};
    line-height: ${(props) => props.height};
    color: #3A3A3A;
`;

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
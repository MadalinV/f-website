import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';

export const Button = styled(LinkScroll)`
    border-radius: 50px;
    background: ${({ primary }) => (primary ? '#8A2BE2' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({light}) => (light ? '#fff' : '#010606')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2 ease-in-out;
        background: ${({ primary}) => (primary ? '#fff' : '#8A2BE2')};
        color: ${({light}) => (light ? '#010606' : '#010606')};
    }
`
import styled from "styled-components";
export const mainlogin = styled.div`
    width: 400px;
    background: #fff;
    border: 1px solid #dddfe2;
    box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
    border-radius: 8px;
    padding: 1rem;
    align-items: center;
    text-align: center;
`

export const logininput = styled.div`
    border-radius: 8px;
    border: 2px solid #dddfe2;
    outline: none;
    color: #1d2129;
    margin: 0.5rem 0;
    padding: 0.5rem 0.75rem;
    width: 92%;
    font-size: 1rem;
`

export const loginbutton =styled.button `
width: ${props => props. full ? '100%':null};
    min-width: 64px;
    border: 0;
    border-radius: 4px;
    padding: 8px 16px;
    background-color: #2f8bfd;
    color: #ffffff;
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.02857 rem;
    cursor: pointer;
    transition: all 0.8s;
    &:hover { background-color: #0072ff ;}
`

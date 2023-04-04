import styled from 'styled-components';


export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: green;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: white; 
`;

export const Loginbg = styled.img`
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 0;
`;

export const PopupLoginWrapper = styled.div`
    width: 15em;
    background-color: rgb(40, 252, 153);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 1em;
    padding-bottom: 1em;
    box-shadow: 2px 4px 10px black;
    z-index: 1;
`;

export const Text = styled.div`
    color: ${props => props.color};
    font-size: ${props => props.fontSize}px;
    font-family: ${props => props.fontfamily};
    font-weight: 700;
`;

export const Row = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`;

export const Input = styled.input`
    width: 100%;
    font-size: 16px;
    height: 1.9em;
    border-radius: 10px;
    outline: none;
    background: white;
`;

export const Button = styled.button`
    width: 10em;
    margin-top: 1em;
    font-size: 18px;
    font-weight: bold;
    height: 2.2em;
    cursor: pointer;
    background-color: rgb(252, 167, 40);
    border-radius: 10px;
    border-width: 3px;
    border-style: outset;
    border-color: white;
    box-shadow: 2px 3px 7px black;
`;

export const Blank = styled.div`
    width: ${props => props.width}em;
    height: ${props => props.height}em;
`;
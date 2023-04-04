import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 9em;;
    height: 100vh;
    color: black;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background-color: lightblue;
    border-style: solid;
    border-color: white;
    z-index: 1;
    
`;

export const Loginbg = styled.img`
    position: absolute;
    width: 9em;
    height: 100vh;
    z-index:0;
`;

export const Avata = styled.img`
    width: 5em;
    height: 5em;
    margin-top: 0.5em;
    border-radius: 10px;
    z-index: 1;
`;

export const TextField = styled.div`
    margin-top: 0.5em;
    width: 100%;
    padding-left: 1em;
    box-sizing: border-box;
    font-size: 0.7em;
    font-weight: 500;
    background-color: white;
    border-style: solid;
    border-color: rgb(75, 252, 153);
    border-width: 0.2em;
    border-radius: 16px;
    z-index: 1;
`;

export const ButtonLogout = styled.button`
    width: 75%;
    height: 2em;  
    margin-bottom: 0.5em;
    font-size: 0.7em;
    font-weight: bold;  
    border-radius: 12px;
    border-width: 0.2em;
    border-color: white;
    background-color: #FF6622;
    box-shadow: 2px 3px 7px black;
    z-index: 1;
`;

export const ButtonStatistic = styled.button`
    width: 95%;
    height: 4em;  
    margin-bottom: 16em;
    font-size: 0.9em;
    font-weight: bold;  
    border-radius: 12px;
    border-width: 0.2em;
    border-color: white;
    background-color: rgb(40, 252, 153);
    box-shadow: 2px 3px 7px black;
    z-index: 1;
`;


export const Blank = styled.div`
    flex: 1;
    z-index: 1;
`;


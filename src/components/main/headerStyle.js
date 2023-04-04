import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    background-color: rgba(2, 204, 255, 0.4);
    flex-wrap: wrap;
    padding-top: 1em;
    padding-bottom: 1em;
    border-radius: 10px;
    box-shadow: 2px 3px 7px black;
    z-index:0;
`;

export const ButtonSave = styled.button`
    font-size: 18px;
    margin-left: 2em;
    width: 7em;
    height: 2.5em;
    border-radius: 0.5em;
    border-color: white;
    border-width: 0.2em;
    box-sizing: border-box;
    background-color: rgb(40, 252, 153);
    align-items: center ;
`;

export const Blank = styled.div`
    flex: 1;
`;

export const Texthead = styled.text`
    font-size: 20px;
    font-weight: normal;
    color: black;
    margin-left: 1em;
`;

export const Input = styled.input`
    font-size: 18px;
    margin-left: 0.2em;
    width: auto;
    height: 2em;
    border-radius: 0.3em;
    border-color: white;
    box-sizing: border-box;
`;

export const DropBox = styled.select`
    font-size: 18px;
    margin-left: 0.2em;
    width: auto;
    height: 2.5em;
    border-radius: 0.3em;
    border-color: white;
    box-sizing: border-box;
`;
export const ButtonStatistic = styled.button`
    font-size: 18px;
    margin-left: 1em;
    width: 7em;
    height: 2.5em;
    border-radius: 0.5em;
    border-color: white;
    border-width: 0.2em;
    box-sizing: border-box;
    background-color: rgb(40, 252, 153);
`;
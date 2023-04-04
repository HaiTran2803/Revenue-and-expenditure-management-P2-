import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 15em;
    margin-right: 1em;
    margin-top: 1em;
    padding: 0.5em;
    background-color: rgba(2, 204, 255, 0.4);
    border-radius: 0.3em;
    border-color: white;
    display: flex;
    flex-direction: row;
    box-shadow: 2px 2px 5px black;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-weight: 400;
    font-size: 0.9em;
    color: black;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-weight: 400;
    font-size: 0.8em;
    width: ${props=> props.width};
`;

export const TitleField = styled.div`
    color: black;
    font-weight: bold;
    margin-right: 1em;
`;

export const StarIcon = styled.img`
    width: 1.25em;
    margin-left: 0.25em;
`;
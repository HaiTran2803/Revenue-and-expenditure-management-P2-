import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100vh;
  color: #f4f6f6;
  font-size: 23px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: #cccccc;
  z-index:0;
`;

export const Mainbg = styled.img`
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 0;
    opacity: 60%;
`;

export const Blank = styled.div`
  flex: 1;
  z-index:0;
`;

export const WrapperTests = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 1em;
  padding-right: 1em;
  box-sizing: border-box;
  margin-bottom: 1em;
  z-index:0;
`;

export const Wrapperpage = styled.div`
  position: absolute;
  margin-top: 27em;
`
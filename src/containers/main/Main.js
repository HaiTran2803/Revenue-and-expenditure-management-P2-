import React, { useState } from 'react'
import styled from 'styled-components'
import MainContent from '../../components/main/MainContent'
import LeftMenu from '../../components/main/LeftMenu'

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  color: #f4f6f6;
  font-size: 23px;
  font-weight: bold;
  display: flex;
  background: gray;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
const DIFFICULT = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
}

const Main = () => {
  const [state, setState] = useState({
    keyWord: '',
    testData: [
      {
        name: 'Mua TV',
        amount: 3000,
        type: "Outcome",
        diff: DIFFICULT.two,
        past: true,
      },
      {
        name: 'Nhận lương',
        amount: 30000,
        type: "Income",
        diff: DIFFICULT.four,
        past: true,
      },
      {
        name: 'Mua Tủ lạnh',
        amount: 7000,
        type: "Outcome",
        diff: DIFFICULT.three,
        past: true,
      },
      {
        name: 'Mua Xe máy',
        amount: 5000,
        type: "Outcome",
        diff: DIFFICULT.two,
        past: true,
      },
    ],
  })

  const searchOnChange = (event) => {
    console.log('nhan duoc: ', event.target.value)
    setState({ ...state, keyWord: event.target.value })
  }

  // const saveOnChange = (event) => {

  // }

  const filterKeyword = (data, key) => {
    const result = []
    for (let i = 0; i < data.length; i++) {
      if (data[i].name.includes(key) === true) {
        result.push(data[i])
      }
    }
    return result
  }

  return (
    <Wrapper>
      <LeftMenu />
      <MainContent
        data={filterKeyword(state.testData, state.keyWord)}
        keyWord={state.keyWord}
        searchOnChange={(e) => searchOnChange(e)}
      />
    </Wrapper>
  )
}

export default Main

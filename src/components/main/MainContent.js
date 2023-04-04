import React from 'react'
import Pagination from '@material-ui/lab/Pagination'
import { Wrapper, WrapperTests, Mainbg, Wrapperpage } from './mainContentStyle'
import Header from './Header'
import TestItem from './TestItem'
import Images from '../../asset/images'

const MainContent = (props) => {
  const renderTests = () => {
    const items = []
    for (let i = 0; i < props.data.length; i++) {
      const item = (
        <TestItem
          name={props.data[i].name}
          amount={props.data[i].amount}
          type={props.data[i].type}
          diff={props.data[i].diff}
          past={props.data[i].past}
        />
      )
      items.push(item)
    }
    return <WrapperTests>{items}</WrapperTests>
  }
  return (
    <Wrapper>
      <Mainbg src={Images.bg12}/>
      <Header keyWord={props.keyWord} searchOnChange={props.searchOnChange} />
      {renderTests()}
      <Wrapperpage>
        <Pagination
          count={4}
          variant="outlined"
          shape="rounded"
          style={{marginTop: '2em',}}/>
      </Wrapperpage>
    </Wrapper>
  )
}

export default MainContent

import React from 'react'
import { Wrapper, Input, ButtonSave, Blank, Texthead, DropBox, ButtonStatistic } from './headerStyle'
const statistic = () => {
  window.location.replace('/statistic')
}
const Header = (props) => {
  return (
    <Wrapper>
      <Texthead>Title</Texthead>
      <Input
        value={props.titleinput}
        type="text"
        onChange={(event) => props.inputOnChange(event)}/>
      <Blank/>
      <Texthead>Amount</Texthead>
      <Input
        value={props.amountinput}
        type="text"
        onChange={(event) => props.inputOnChange(event)}/>
      <Blank />
      <Texthead>Type</Texthead>
      <DropBox name="SelectType" id="select_Type">
          <option value="income">Income</option>
          <option value="outcome">Outcome</option>
      </DropBox>
      <Blank />
      <Texthead>Priority</Texthead>
      <DropBox name="SelectPriority" id="select_Priority">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
      </DropBox>
      <Blank />
      <ButtonSave>Save</ButtonSave>
      <ButtonStatistic onClick={statistic}>Statistic</ButtonStatistic>
      <Blank />
    </Wrapper>
  )
}

export default Header

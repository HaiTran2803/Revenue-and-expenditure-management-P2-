import React, { Component } from 'react'
import { Wrapper, Row, TitleField, StarIcon, Column } from './testItemStyle'
import images from '../../asset/images'

const TestItem = (props) => {
  const renderStars = (number) => {
    const stars = []
    for (let i = 0; i < number; i++) {
      const icon = <StarIcon src={images.star1} />
      stars.push(icon)
    }
    return <div>{stars}</div>
  }

  return (
    <Wrapper>
      <Column width="50%">
        <Row>
          <TitleField>Title: </TitleField>
        </Row>
        <Row>
          <TitleField>Amount($): </TitleField>
        </Row>
        <Row>
          <TitleField>Type: </TitleField>
        </Row>
        <Row>
          <TitleField>Priority: </TitleField>
        </Row>
      </Column>
      <Column width="50%">
        <Row> {props.name}</Row>
        <Row> {props.amount}</Row>
        <Row> {props.type}</Row>
        <Row> {renderStars(props.diff)}</Row>
      </Column >
      <Column width="auto"><TitleField>Done</TitleField>
          <input type="checkbox" past={props.past}></input></Column>
    </Wrapper>
  )
}

export default TestItem

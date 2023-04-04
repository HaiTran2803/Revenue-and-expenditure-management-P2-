import React from 'react'
import { Wrapper, Avata, TextField, ButtonLogout, Blank, Loginbg, ButtonStatistic } from './leftMenuStyle'
import Images from '../../asset/images'

const logout = () => {
  window.location.replace('/login')
}
const statistic = () => {
  window.location.replace('/statistic')
}
const LeftMenu = (props) => {
  return (
      <Wrapper id="LeftMenu">
        <Loginbg src={Images.leftheadbg}/>
        <Avata src={Images.avataDefault} alt="avata" />
        <TextField>Name: Trần Minh Hải</TextField>
        <TextField>Birthday: 28/03/2001</TextField>
        <TextField>Old: 21</TextField>
        <TextField>Address: HN</TextField>
        <Blank />
        <ButtonLogout onClick={logout}>Log out</ButtonLogout>
    </Wrapper>
  )
}

export default LeftMenu

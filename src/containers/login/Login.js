import React, { useState } from 'react'
import {Wrapper,PopupLoginWrapper,Text,Row,Input,Button,Blank,Loginbg,}from './loginStyle'
import api from '../../services/api'
import StorageUtils from '../../helpers/StorageUtils'
import { Checkbox } from '@material-ui/core'
import Images from '../../asset/images'

const Login = () => {
  const [state, setState] = useState({
    userName: '',
    password: '',

  })

  const login = () => {
    const params = {
      userName: state.userName,
      password: state.password,
    }

    api
      .create()
      .login(params)
      .then((response) => {
        const { data } = response
        const { token } = data
        console.log('token ', token)
        StorageUtils.setItem('token', token)
        window.location.replace('/')
      })
      .catch((error) => {
        const { message } = error
        console.log('error: ', message)
      })
  }


  const handleUserName = (event) => {
    setState({ ...state, userName: event.target.value })
    localStorage.setItem("username",state.userName)
  }

  const handlePassword = (event) => {
    setState({ ...state, password: event.target.value })
    localStorage.setItem("password",state.password)
  }

  return (
    <Wrapper>
      <Loginbg src={Images.loginbg} />
      <PopupLoginWrapper>
        <Text color="black" fontSize={40} fontfamily="Arial"> 
          LOGIN
        </Text>
        <Row>
          <Text color="black" fontSize={20} > 
            User name
          </Text>
          <Input value={state.userName} onChange={handleUserName} />
        </Row>
        <Blank height={0.2} />
        <Row>
          <Text color="black" fontSize={20}>
            Password
          </Text>
          <Input
            value={state.password}
            onChange={handlePassword}
            type="password"
          />
        </Row>
        <Button onClick={login}>SignIn</Button>
        <Button >SignUp</Button>
      </PopupLoginWrapper>
    </Wrapper>
  )
}

export default Login

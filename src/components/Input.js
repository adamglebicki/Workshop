import React, { Component } from 'react'
import styled from 'styled-components'

const Type = styled.input`
  padding: 10px 30px;
  border: black 2px solid;
  font-size: 30px;
  outline: none;
`

const Reset = styled.button`
  padding: 10px 30px;
  border: black 2px solid;
  font-size: 30px;
  outline: none;
`

const Text = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 30px;
  font-size: 50px;
`

export default class Input extends Component {
  state = {
    value: ''
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleClick = () => {
    this.setState({ value: '' })
  }

  render() {
    return (
      <>
        <Type value={this.state.value} placeholder='type something' onChange={this.handleChange} type="text"/>
        <Reset onClick={this.handleClick}>Reset</Reset>
        <Text>{this.state.value.toLocaleUpperCase()}</Text>
      </>
    )
  }
}

import React, { Component } from 'react'
import styled from 'styled-components'

// const Type = styled.input`
//   padding: 10px 30px;
//   border: black 2px solid;
//   font-size: 30px;
//   outline: none;
// `

const Show = styled.button`
  padding: 10px 30px;
  border: black 2px solid;
  font-size: 30px;
  outline: none;
`

const Text = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  padding: 30px;
  font-size: 30px;
`

export default class Message extends Component {

  constructor(props) {
    super(props)

    this.state = {
      textIsActive: false
    }
  }
  handleClick = () => {
    this.setState({ textIsActive: !this.state.textIsActive })
  }

  render() {
    console.log(this.state.textIsActive)
    const text = 'Humblebrag try-hard celiac forage, banjo tumeric ethical cardigan bespoke master cleanse four dollar toast chia sartorial etsy selfies. Kale chips locavore poutine sriracha mustache readymade paleo helvetica seitan schlitz. Photo booth street art poutine, you probably.'

    return (
      <>
        <Show onClick={this.handleClick}>{this.state.textIsActive ? 'Hide' : 'Show'}</Show>
        {this.state.textIsActive && <Text>{text}</Text>}
        {/* {this.state.textIsActive ? <Text>{text}</Text> : null} */}
        {/* <Text>{this.state.textIsActive && text}</Text> */}
      </>
    )
  }
}


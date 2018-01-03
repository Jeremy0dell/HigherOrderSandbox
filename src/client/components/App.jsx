import React, { Component } from 'react'
import concat from 'lodash/concat'

import ToDupe from './ToDupe'
import withRandomPosition from '../containers/withRandomPosition'
import withSpinning from '../containers/WithSpinning'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      components: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    const NewDupe = withSpinning(withRandomPosition(ToDupe))

    this.setState({
      components: concat(this.state.components, <NewDupe key={this.state.components.length} />)
    })
  }

  render() {
    console.log('log 0')
    const { components } = this.state

    return (
      <div>
        <h1>Hello React!</h1>
        <button onClick={this.handleClick}>Click for new dupes!!</button>
        {components}
      </div>
    )
  }
}

export default App

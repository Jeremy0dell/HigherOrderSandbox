import React, { Component } from 'react'
import omit from 'lodash/omit'

class ToDupe extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('log1', this.props)
    return (
      <div {...this.props} >
        Something will be Duped!
      </div>
    )
  }
}

export default ToDupe

import React, { Component } from 'react'
import omit from 'lodash/omit'

export default (WrappedComponent, extraStyle) => (
  class extends Component {
    constructor(props) {
      super(props)
      this.state = {
        lat: Math.random() * 100 + '%',
        lon: Math.random() * 100 + '%',
      }
    }

    render() {
      const { lat, lon } = this.state
      const { style } = this.props
      console.log('log2', omit(this.props, 'style'))

      return <WrappedComponent
        style={{ position: 'absolute', top: lat, left: lon, ...style }}
        {...omit(this.props, 'style')}
      />
    }
  }
)

import React, { Component } from 'react'

export default (WrappedComponent, extraStyle) => (
  class extends Component {
    constructor(props) {
      super(props)

      this.state = {
        isHovered: false
      }

      this.handleHover = this.handleHover.bind(this)
      this.handleUnhover = this.handleUnhover.bind(this)
    }

    handleHover() { this.setState({ isHovered: this.state.isHovered = true }) }

    handleUnhover() { this.setState({ isHovered: this.state.isHovered = false }) }

    render() {
      const { isHovered } = this.state
      console.log('log3', this.props)

      const hoverStyle = {
        color: "blue"
      }

      const unhoverStyle = {
        color: "black"
      }

      return <WrappedComponent
        onMouseEnter={this.handleHover}
        onMouseLeave={this.handleUnhover}
        style={ isHovered ? hoverStyle : unhoverStyle }
        {...this.props}
     />
    }
  }
)

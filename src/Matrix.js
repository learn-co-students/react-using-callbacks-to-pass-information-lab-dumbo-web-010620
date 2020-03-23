import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: "#FFF"
      // clickedCell: 
    }
  }

  setSelectedColor = (newColor) => {
    console.log(this.state.selectedColor)
    this.setState({
      selectedColor: newColor
    })
  }
  
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )
  
  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    // console.log(this.state.selectedColor)

    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}












  // console.log(`you clicked ${e} bro!`)
  // let clickedColor = "#F10" 
  // we need to get this from ColorSelector/DOM somehow.
  // this is a piece of logic I need to get better at.
  // I want to pull it out of the ColorSelector directly, DOM interaction alone
  // seems too superficial
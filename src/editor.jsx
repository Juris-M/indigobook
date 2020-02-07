// App.js

import React, { Component } from 'react';
import { init, exec } from 'pell';

import './pell.css'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = { html: null }
  }

  componentDidMount () {
    this.editor = init({
      element: document.getElementById('editor'),
      onChange: html => this.setState({ html }),
      actions: [
               'bold',
               'italic',
               {
                  name: 'smallCaps',
                  icon: '<div style="font-variant: small-caps;">Caps</div>',
                  title: 'Small Caps',
                  result: () => exec('underline')
               },
               {
                  name: 'superscript',
                  icon: '<div>A<sup>b</sup></div>',
                  title: 'Superscript',
                  result: () => exec('superscript')
               }
      ]
    })
    this.editor.content.innerHTML = this.props.citeContent;
  }

  render() {
    return (
      <div className="App">
        <div id="editor" className="pell" />
      </div>
    );
  }
}

export default App;

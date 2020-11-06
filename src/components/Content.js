import React, {Component} from 'react'

class Content extends Component {
    render() {
      return (
        <headers>
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </headers>
      );
    }
  }

export default Content;
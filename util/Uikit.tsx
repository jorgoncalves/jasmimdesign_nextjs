import { Component } from 'react';

class UIKit extends Component {
  state = { ready: false };
  componentDidMount = () => {
    if (typeof window !== 'undefined') {
      const uikit = require('uikit');
      const icons = require('uikit/dist/js/uikit-icons.min');
      uikit.use(icons);
      this.setState({ ready: true });
    }
  };

  render() {
    return <>{this.props.children}</>;
  }
}

export default UIKit;

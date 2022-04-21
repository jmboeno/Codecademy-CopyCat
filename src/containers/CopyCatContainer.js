import React from 'react';
import CopyCat from '../components/CopyCat';

class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      copying: true,
      value: '',
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }

  handleChange({ target }) {
    this.setState({ value: target.value });
  }

  render() {
    return (
      // <h1>hi</h1>
      <CopyCat
        copying={this.state.copying}
        toggleTape={this.toggleTape}
        value={this.state.value}
        handleChange={this.handleChange}
        name="Tom"
      />
    );
  }
}

export default CopyCatContainer;

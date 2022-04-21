import React from 'react';
import { styles } from '../style';
import PropTypes from 'prop-types';

const images = {
  copycat:
    'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat:
    'https://content.codecademy.com/courses/React/react_photo_quietcat.png',
};

export default class CopyCat extends React.Component {
  render() {
    const copying = this.props.copying;
    const toggleTape = this.props.toggleTape;

    return (
      <div style={styles.divStyles}>
        <h1 style={{ marginBottom: 80 }}>
          Copy Cat {this.props.name ? this.props.name : 'Tom'}
        </h1>

        <input
          type="text"
          value={this.props.value}
          onChange={this.props.handleChange}
        />

        <img
          style={styles.imgStyles}
          alt="cat"
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
        />

        <p>{copying && this.props.value}</p>
      </div>
    );
  }
}

CopyCat.propTyles = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

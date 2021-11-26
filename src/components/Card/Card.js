import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';


class Card extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        {this.props.title}
      </section>
    );
  }
}
Card.propTypes = {
  title: PropTypes.node.isRequired,
};

export default Card;
import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator.js';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {
    state = {
        cards: this.props.cards || [],
    };
    static propTypes = {
        title: PropTypes.string.isRequired,
        cards: PropTypes.array,
        addCard: PropTypes.node,
    }
    addCard(title){
        this.setState(state => (
          {
            cards: [
              ...state.cards,
              {
                key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
                title,
                icon: 'list-alt',
                cards: []
              }
            ]
          }
        ));
      }
    render() {
      return (
        <div>
            <section className={styles.component}>
                <h3 className={styles.title}>
                {this.props.title}
                <span className={styles.icon}>
                    <Icon name={Icon} />
                </span>
                </h3>

            </section>
            <div className={styles.cards}>
                {this.state.cards.map(({key, ...cardProps}) => (
                <Card key={key} {...cardProps} />
            ))}
            </div>
            <div className={styles.creator}>
                <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
            </div>
        </div>
      );
    };
};
Column.propTypes = {
    title: PropTypes.node.isRequired,
};

export default Column;
  
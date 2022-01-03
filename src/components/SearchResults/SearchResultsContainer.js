import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsForSearchResults } from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  return{
    cards: getCardsForSearchResults(state, props.match.params.id),
  };
};

export default connect(mapStateToProps)(SearchResults);
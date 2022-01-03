import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList, createActionAddColumn, getListById } from '../../redux/columnsRedux';


const mapStateToProps = (state, props) => {
  const list = getListById(state, props.match.params.id);
  return{
    columns: getColumnsForList(state, props.match.params.id),
    id: list.id,
    title: list.title,
    image: list.image,
  };
};
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.match.params.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
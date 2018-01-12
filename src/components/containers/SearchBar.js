import { connect } from 'react-redux';
import { queryOMDB } from '../../actions';
import SearchBar from '../ui/SearchBar';

const mapStateToProps = state => ({
  query: state.query
});

const mapDispatchToProps = dispatch => ({
  queryOMDB(query) {
    dispatch(queryOMDB(query));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
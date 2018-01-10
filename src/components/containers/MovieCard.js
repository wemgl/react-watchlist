import MovieCard from '../ui/MovieCard'
import {connect} from 'react-redux'
import {setFetching, clearFetching} from "../../actions";

const mapStateToProps = (state, props) => ({
    fetching: state.fetching,
    movie: props.movie
})

const mapDispatchToProps = dispatch => ({
    setFetching() {
        dispatch(setFetching())
    },
    clearFetching() {
        dispatch(clearFetching())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard)
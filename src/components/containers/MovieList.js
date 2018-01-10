import MovieList from '../ui/MovieList'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
    movies: state.movies
})

export default connect(mapStateToProps)(MovieList)
import {connect} from 'react-redux'
import MovieDetails from '../ui/MovieDetails'

const mapStateToProps = (state, props) => ({
    match: props.match
})

export default connect(mapStateToProps)(MovieDetails)
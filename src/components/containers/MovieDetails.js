import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import MovieDetails from '../ui/MovieDetails'

const mapStateToProps = (state, props) => ({
    match: props.match
})

export default withRouter(connect(mapStateToProps)(MovieDetails))
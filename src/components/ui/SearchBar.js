import React from 'react';
import '../../stylesheets/searchbar.scss';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  submit(event) {
    event.preventDefault();
    this.props.queryOMDB(this.refs.query.value);
  }

  render() {
    return (
      <form onSubmit={this.submit} className="search">
        <input className="search__bar"
               type="text"
               ref="query"
               defaultValue={this.props.query}
               name="searchbar"
               placeholder="e.g. Kill Bill vol.2"
        />
        <button className="search__btn">Search</button>
      </form>
    );
  }
}

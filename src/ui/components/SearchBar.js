import React from "react"
import "../stylesheets/search-bar.scss"

let _searchbar

const SearchBar = () =>
    <input className="searchbar"
           type="text"
           ref={ (value) => _searchbar = value }
           name="searchbar"
           placeholder="e.g. Kill Bill vol.2"
    />

export default SearchBar
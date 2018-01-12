import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this._key = 0
    }

    get key() {
        return this._key++
    }

}
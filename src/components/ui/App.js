import React from 'react'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.getKey = this.getKey.bind(this)
        this.keyCount = 0
    }

    getKey() {
        return this.keyCount++
    }

}
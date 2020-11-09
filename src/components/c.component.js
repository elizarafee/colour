import React, { Component } from 'react'

export default class CComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //    colour: 'red'
            name: 'Eliza'
        };
    }


    componentDidMount() {
        setInterval(() => {
            this.setState({
                // colour: 'blue'
                name: 'Tareque'
            })
        }, 1000)
    }

    render() {
        console.log('rendering')
        return (
            <>
                <div>
                    <h1>{this.state.name}</h1>
                </div>
            </>
        )

    }
}

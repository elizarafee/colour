import React, { Component } from 'react'

export default class AComponent extends Component {



    constructor(props) {
        super(props);
        this.state = {
            item1: this.props.item1,
            item2: this.props.item2
        };
    }

    change1() {
        this.setState({
            item1: this.props.item2
        });
    }
    change2() {
        this.setState({
            item2: this.props.item1
        });
    }

    render() {
        return (
            <>
                <div className={this.props.main}>
                    <div className={`${this.state.item1}`} onClick={() => this.change1()}
                    // onMouseEnter={() => setState(this.state.item1, this.state.item2)}
                    // onMounseOut={() => setState(this.state.item1, this.state.item2)}
                    ></div>
                    <br></br>
                    <div className={`${this.state.item2}`} onClick={() => this.change2()}></div>
                </div>
            </>
        )
    }
}
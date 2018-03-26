import React from 'react';
import api from 'services/api';
import Canvas from "./canvas";

class Shell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false
        }
        api.layers.then(() => {
            this.setState({
                ready: true
            })
        })
    }

    render() {
        if (this.state.ready) {
            return (
                <div id="shell" >
                    <Canvas />
                </div>
            )
        } else {
            return (
                <div id="shell" className='shell-pending'>
                    <div className='pending'>Please wait</div>
                </div>
            )
        }
    }
}

export default Shell;
import React from 'react';
import { classList } from 'modules';

class Sprite extends React.Component {
    constructor(props) {
        super(props);
        this.onTap = this.onTap.bind(this);
        this.state = {
            highlight: false,
        }
    }

    onTap() {
        this.setState({
            highlight: true
        })
        setTimeout(() => {
            this.setState({
                highlight: false
            })
        }, 1000)
    }

    render() {

        var style = {
            transform: 'translate(-50%, -50%) matrix(' + this.props.transform.join(',') + ')'
        }

        return <div className={classList('ui-sprite', {
            'background': this.props.type === 'bg',
            'sprite': this.props.type === 'img',
            'highlight': this.state.highlight
        })}>

            <img
                style={style}
                ref={(domImg) => { this.domImg = domImg }}
                src={this.props.filename}
                onClick={this.onTap} />
        </div>
    }
}

export default Sprite;

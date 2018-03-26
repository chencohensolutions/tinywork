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
        },1000)
    }
    
    render() {

        var style = {
            transform: 'matrix(' + this.props.transform.join(',') + ')'
        }

        return <div className={classList('ui-sprite', {
            'background': this.props.type === 'bg',
            'sprite': this.props.type === 'img',
            'highlight': this.state.highlight
        })}>
            <img
                ref={(domImg) => { this.domImg = domImg }}
                src={this.props.filename}
                style={style}
                onClick={this.onTap}
            />
        </div>
    }
}

export default Sprite;

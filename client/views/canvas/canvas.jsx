import React from 'react';
import Sprite from './sprite';
import api from 'services/api';

class Canvas extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            layers: [],
            activeLayer: null,
        }
        api.layers.then((layers) => {
            console.log(layers);
            this.setState({ layers })
        })
    }

    render() {
        var layers = this.state.layers.map(({ filename, transform, type }, index) => (
            <Sprite
                key={filename}
                filename={filename}
                active={this.state.activeLayer === index}
                index={index}
                transform={transform}
                type={type} />))
        return (
            <div id="canvas">
                {layers}
            </div>
        )
    }
}

export default Canvas;
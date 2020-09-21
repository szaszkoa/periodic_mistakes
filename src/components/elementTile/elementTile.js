import React from 'react';
import './elementTile.css';

class ElementTile extends React.Component {
    render() {
        return (
            <div className="single-element">
                <p className="atomic-number">{this.props.number}</p>
                <p className="element-symbol">{this.props.symbol}</p>
                <p className="element-name">{this.props.name}</p>
                <p className="element-weight">{this.props.wight}</p>
            </div>
        )
    }
}

export default ElementTile;

import React from 'react';
import ElementTile from '../elementTile/elementTile'
import './periodicTable.css'

class PeriodicTable extends React.Component {
    render() {
        return (
            <div id="periodic-table-container">
                <ElementTile number="1" symbol="H"/>
                <ElementTile number='2' symbol="He"/>
            </div>
        )
    }
};

export default PeriodicTable;
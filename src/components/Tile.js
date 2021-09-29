import React, {useState} from "react";
import './tile.css'

function Tile (props) {
    const [value, setValue] = useState('');
    function nextTurn () {
        if (value === '') {
            props.addKey(props.symbol, props.id)
            props.onClick();
            setValue(props.symbol)
        }
    }
    return (
        <div onClick={nextTurn} className={'tile'}>{value}</div>
    )
}

export default Tile
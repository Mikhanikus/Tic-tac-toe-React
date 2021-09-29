import React from "react";
import './infoPanel.css';

function InfoPanel (props) {

    return(
        <div className={'counter'}>
            <h1>Score</h1>
            <div className={props.currentPlayer === 'X' ? 'player active' : 'player'}>Player X = {props.score['playerX']}</div>
            <div className={props.currentPlayer === 'O' ? 'player active' : 'player'}>Player O = {props.score['playerO']}</div>
        </div>
    )
}

export default InfoPanel;
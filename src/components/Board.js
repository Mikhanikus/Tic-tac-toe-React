import React, { useState, useEffect } from "react";
import Tile from "./Tile";
import InfoPanel from "./infoPanel";

import './board.css'

function Board () {

    const [currentPlayer, setPlayer] = useState('X');
    const [score, setScore] = useState({'playerX': 0, 'playerO': 0})
    const [playersTurns, setPlayersTurns] = useState({'playerX': [], 'playerO': []})
    const [gameState, setGameState] = useState({winner: '', comb: []});

    const winningCombs = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [2,4,6], [0,4,8]]

    function checkWinner (player, turnsState) {
            const winningComb = winningCombs.filter(item => item.every(val =>
                turnsState[`player${player}`].includes(val)));
            if(winningComb.length > 0) {
                setGameState({winner: player, comb: winningComb})
            }
    }

    useEffect(() => checkWinner(currentPlayer, playersTurns), [playersTurns]);

    function rememberTurn (player, tileID) {
        setPlayersTurns(prevState => ({...prevState, [`player${player}`]:
                [...prevState[`player${player}`], tileID]}))
    }

    function changeScore (player) {
        setScore(prevState => ({...prevState, [player]: prevState[player] + 1}))
    }

    function nextTurn () {
        setPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    return(
        <>
            <div>{gameState.winner}</div>
            <InfoPanel score={score} currentPlayer={currentPlayer} />
            <div className={'board'}>
                {new Array(9).fill(null).map((el, i) =>
                    <Tile key={i} id={i} symbol={currentPlayer} onClick={nextTurn} addKey={rememberTurn}/>
                )}
            </div>
        </>

    )
}

export default Board;
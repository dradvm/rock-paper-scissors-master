import styles from './Game.module.scss';
import clsx from "clsx";
import CircleChoice from '../CircleChoice/CircleChoice';
import { useContext, useEffect, useState } from 'react';
import { RulesContext, ScoreContext, StepGameContext } from '@/App';


function Step234({ userChoice }) {
  const [gameState, setGameState] = useState(null)
  const [houseChoiceState, setHouseChoice] = useState(null)
  const rules = useContext(RulesContext)
  const handleChoosing = useContext(StepGameContext)
  const { dispatchScore } = useContext(ScoreContext)
  const arrayChoice = rules === "ruleBonus" ? ["paper", "rock", "scissors", "lizard", "spock"] : ["paper", "rock", "scissors"]
  const handleGame = function (userChoice, houseChoice) {
    if (userChoice === houseChoice) {
      return "draw"
    }
    if (rules === "ruleBonus") {
      switch (userChoice) {
        case "rock":
          switch (houseChoice) {
            case "lizard":
            case "scissors":
              return "win"
            default:
              return "lose"
          }
        case "lizard":
          switch (houseChoice) {
            case "spock":
            case "paper":
              return "win"
            default:
              return "lose"
          }
        case "spock":
          switch (houseChoice) {
            case "rock":
            case "scissors":
              return "win"
            default:
              return "lose"
          }
        case "scissors":
          switch (houseChoice) {
            case "paper":
            case "lizard":
              return "win"
            default:
              return "lose"
          }
        case "paper":
          switch (houseChoice) {
            case "rock":
            case "spock":
              return "win"
            default:
              return "lose"
          }
        default:
          return null
      }
    }
    else {
      if ((userChoice === "paper" && houseChoice === "rock") || (userChoice === "rock" && houseChoice === "scissors") || (userChoice === "scissors" && houseChoice === "paper")) {
        return "win"
      }
      else {
        return "lose"
      }
    }

  }

  useEffect(() => {
    setTimeout(() => {
      setHouseChoice(arrayChoice[Math.floor(Math.random() * arrayChoice.length)])
    }, 1000)
  }, [])
  useEffect(() => {
    if (houseChoiceState != null) {
      setGameState(handleGame(userChoice, houseChoiceState))
    }
  }, [houseChoiceState])
  useEffect(() => {
    if (gameState != null) {
      if (gameState === "win") {
        dispatchScore({ type: "INCREASE" })
      }
      else if (gameState === "lose") {
        dispatchScore({ type: "DECREASE" })
      }
    }
  }, [gameState])
  return (
    <div className={clsx(styles["game"], styles["step234"])}>
      <div className={clsx(styles["container"])}>
        <div>
          <div className={clsx(styles["choice"])}>
            <div className={clsx(styles["choice__name"])}>You Picked</div>
            <div className={clsx(styles["choice__box"])}>
              <CircleChoice isWin={gameState === "win" ? "win" : null} step="step234" shape={userChoice} isUserInteract={false}></CircleChoice>
            </div>
          </div>
          {(gameState && houseChoiceState) ?
            <div className={clsx(styles["playAgain"])}>
              <div className={clsx(styles["text"])}>You {gameState}</div>
              <button onClick={handleChoosing}>Play Again</button>
            </div> : null
          }
          <div className={clsx(styles["choice"])}>
            <div className={clsx(styles["choice__name"])}>The House Picked</div>
            <div className={clsx(styles["choice__box"])}>
              {houseChoiceState ?
                <CircleChoice isWin={gameState === "lose" ? "win" : null} step="step234" shape={houseChoiceState} isUserInteract={false}></CircleChoice> :
                <div className={clsx(styles["choice__waiting"])}></div>}
            </div>
          </div>
        </div>
        {(gameState && houseChoiceState) ?
            <div className={clsx(styles["playAgain"], styles["playAgain--mobile"])}>
              <div className={clsx(styles["text"])}>You {gameState}</div>
              <button onClick={handleChoosing}>Play Again</button>
            </div> : null
          }
      </div>
    </div>
  );
}

export default Step234;

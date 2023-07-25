import styles from './CircleChoice.module.scss';
import clsx from "clsx";
import rock from "@images/icon-rock.svg";
import paper from "@images/icon-paper.svg";
import scissors from "@images/icon-scissors.svg";
import spock from "@images/icon-spock.svg"
import lizard from "@images/icon-lizard.svg"
import { useContext } from 'react';
import { StepGameContext, RulesContext } from '@/App';
import { UserChoiceContext } from "@components/Game/Game"

function CircleChoice({ shape, isUserInteract, step, isWin }) {
  const rules = useContext(RulesContext)
  const handleChoosing = useContext(StepGameContext)
  const setUserChoice = useContext(UserChoiceContext)
  const handleChoosingChoice = function () {
    handleChoosing()
    setUserChoice(shape)
  }
  const getShape = function () {
    switch (shape) {
      case "rock":
        return rock
      case "paper":
        return paper
      case "scissors":
        return scissors
      case "spock":
        return spock
      case "lizard":
        return lizard
      default:
        return null
    }
  }
  return (
    <div className={clsx(
      styles["circleChoice"], 
      styles[shape], 
      styles[rules], 
      styles[step], 
      { [styles["circleChoice__hover"]]: isUserInteract })
    }
      onClick={isUserInteract ? handleChoosingChoice : null}
    >
      <div className={clsx(styles["border"], styles[shape])}>
        <div className={clsx(styles["circle"])}>
          <img src={getShape(shape)} alt='shape' />
        </div>
      </div>
      {isWin === "win" ? <div className={clsx(styles["winner"], styles["active"])}></div> : null}
    </div>
  );
}

export default CircleChoice;

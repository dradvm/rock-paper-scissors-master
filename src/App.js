import styles from'./App.module.scss';
import clsx from "clsx";
import ScoreBar from '@components/ScoreBar/ScoreBar';
import RulesButton from './components/RulesButton/RulesButton';
import RulesModal from './components/RulesModal/RulesModal';
import { createContext, useReducer, useState } from 'react';
import Game from './components/Game/Game';
import ChangeRulesButton from './components/ChangeRulesButton/ChangeRulesButton';

const RulesContext = createContext();
const ScoreContext = createContext();
const StepGameContext = createContext();

const scoreReducer = function(state, action) {
  switch (action.type) {
    case "INCREASE":
      return {score: state.score + 1}
    case "DECREASE":
      if (state.score > 0) {
        return {score: state.score - 1}
      }
    default:
      return state
  }
}


function App() {

  const [stepGame, setStepGame] = useState(true)
  const [isModal, setModal] = useState(false)
  const [rules, setRules] = useState("ruleOriginal")
  const [state, dispatchScore] = useReducer(scoreReducer, {score: 0} )

  const hanldeOpenModal = function () {
    setModal(true)
  }
  const hanldeCloseModal = function () {
    setModal(false)
  }
  const handleChangeRules = function () {
    rules === "ruleOriginal" ? setRules("ruleBonus") : setRules("ruleOriginal") 
  }
  
  const handleChoosing = function () {
    stepGame ? setStepGame(false) : setStepGame(true)
  }
  return (
    <RulesContext.Provider value = {rules}>
      <ScoreContext.Provider value = {{state, dispatchScore}}>
        <StepGameContext.Provider value={handleChoosing}>
          <div className = {clsx(styles.app)}>
            <ScoreBar></ScoreBar>
            <Game stepGame = {stepGame}></Game>
            <RulesModal onCloseModal={hanldeCloseModal} isModal = {isModal}></RulesModal>
            <div className={clsx(styles["two-btn"])}>
              <ChangeRulesButton onClick = {handleChangeRules}></ChangeRulesButton>
              <RulesButton onOpenModal={hanldeOpenModal}></RulesButton>
            </div>
          </div>
        </StepGameContext.Provider>
      </ScoreContext.Provider>
    </RulesContext.Provider>
  );
}

export default App;
export { StepGameContext, RulesContext , ScoreContext};
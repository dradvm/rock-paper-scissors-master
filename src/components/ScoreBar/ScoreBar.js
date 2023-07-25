import { RulesContext, ScoreContext } from '@/App';
import styles from './ScoreBar.module.scss';
import ruleOriginal from "@images/logo.svg"
import ruleBonus from "@images/logo-bonus.svg"
import clsx from "clsx";
import { useContext } from 'react';
function ScoreBar() {
  const rules = useContext(RulesContext)
  const {state} = useContext(ScoreContext)
  return (
    <div className = {clsx(styles["scoreBar"])}>
      <div className = {clsx(styles["container"])}>
        <div><img src={rules === "ruleOriginal" ? ruleOriginal : ruleBonus} alt="logo"></img></div>
        <div className={clsx(styles["scoreBox"])}>
          <div className={clsx(styles["text"])}>Score</div>
          <h3 className={clsx(styles["score"])}>{state.score}</h3>
        </div>
      </div>
    </div>
  );
}

export default ScoreBar;

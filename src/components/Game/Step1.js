import styles from './Game.module.scss';
import clsx from "clsx";
import ruleOriginal from "@images/bg-triangle.svg"
import ruleBonus from "@images/bg-pentagon.svg"
import CircleChoice from '../CircleChoice/CircleChoice';
import { useContext } from 'react';
import { RulesContext } from '@/App';


function Step1() {
  const rules = useContext(RulesContext)

  return (
    <div className={clsx(styles["game"], styles["step1"])}>
      <div className={clsx(styles["container"])}>
          <div className={clsx(styles["background"], styles[rules])}><img src={rules === "ruleOriginal" ? ruleOriginal : ruleBonus} alt='RuleShape'/></div>
          {rules === "ruleOriginal" && 
            <>
              <CircleChoice isUserInteract= {true} shape = "rock"></CircleChoice>
              <CircleChoice isUserInteract= {true} shape = "scissors"></CircleChoice>
              <CircleChoice isUserInteract= {true} shape = "paper"></CircleChoice>
            </>
          }
          {rules === "ruleBonus" && 
            <>
              <CircleChoice isUserInteract= {true} shape = "rock"></CircleChoice>
              <CircleChoice isUserInteract= {true} shape = "scissors"></CircleChoice>
              <CircleChoice isUserInteract= {true} shape = "paper"></CircleChoice>
              <CircleChoice isUserInteract= {true} shape = "lizard"></CircleChoice>
              <CircleChoice isUserInteract= {true} shape = "spock"></CircleChoice>
            </>
          }
      </div>
    </div>
  );
}

export default Step1;

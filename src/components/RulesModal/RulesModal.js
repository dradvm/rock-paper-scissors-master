import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './RulesModal.module.scss';
import ruleOriginal from "@images/image-rules.svg";
import ruleBonus from "@images/image-rules-bonus.svg";
// import ruleBonus from "@images/image-rules-bonus.svg";
import clsx from "clsx";
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { RulesContext } from '@/App';

function RulesModal({onCloseModal, isModal}) {

  const rules = useContext(RulesContext)
  return (
    <div className = {clsx(styles["rulesModal"], isModal && styles["active"], "bg-red")}>
      <div className= {clsx(styles["modal"])}>
        <div>
          <span>RULES</span>
          <span><FontAwesomeIcon onClick={onCloseModal}  icon={faXmark} size="xl" style={{color: "#bababa", cursor: "pointer"}} /></span>
        </div>
        <div className= {clsx(styles[rules])}>
          <img src={rules === "ruleOriginal" ? ruleOriginal : ruleBonus} alt='rule'/>
        </div>
        <span><FontAwesomeIcon onClick={onCloseModal}  icon={faXmark} size="xl" style={{color: "#bababa", cursor: "pointer"}} /></span>
      </div>
    </div>
  );
}

export default RulesModal;

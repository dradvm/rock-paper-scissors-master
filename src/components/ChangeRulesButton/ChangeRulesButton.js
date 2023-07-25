import styles from './ChangeRulesButton.module.scss';
import clsx from "clsx";


function ChangeRulesButton({onClick}) {
  return (
    <div className = {clsx(styles["changeRulesButton"])}>
      <button onClick = {onClick}>Change Rules</button>
    </div>
  );
}

export default ChangeRulesButton;

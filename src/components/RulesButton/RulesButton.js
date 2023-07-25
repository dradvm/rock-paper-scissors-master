import styles from './RulesButton.module.scss';
import clsx from "clsx";
function RulesButton({onOpenModal}) {
  return (
    <div className = {clsx(styles["rulesButton"])}>
      <button onClick = {onOpenModal}>Rules</button>
    </div>
  );
}

export default RulesButton;

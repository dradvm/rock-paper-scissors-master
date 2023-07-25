

import { createContext,  useState } from 'react';
import Step1 from "@components/Game/Step1"
import Step234 from './Step234';

const UserChoiceContext = createContext();

function Game({stepGame}) {
  const [userChoice, setUserChoice] = useState(null)

  return (
    <UserChoiceContext.Provider value={setUserChoice}>
      {stepGame ? <Step1></Step1> : <Step234 userChoice={userChoice}></Step234>}
    </UserChoiceContext.Provider>
  );
}

export default Game;
export {UserChoiceContext};
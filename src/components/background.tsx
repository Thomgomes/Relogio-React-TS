import './background.css'
import { Clock } from './clock';

export const Background = () => {

  return (
    <div className="background flex justify-center items-center w-full h-full bg-gradient-to-b from-custon-purple to-custon-black
    z-0">
      <Clock/>
    </div>
  );
}
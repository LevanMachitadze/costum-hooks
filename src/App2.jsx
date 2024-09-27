import React from 'react';
import { useToggle } from './useToggle';

const App2 = () => {
  const [isToggled, toggle] = useToggle();

  return (
    <div>
      <p>{isToggled ? 'on' : 'off'}</p>
      <button onClick={toggle}>button</button>
    </div>
  );
};

export default App2;

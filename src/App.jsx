import { useState } from 'react';
import { useWindowSize } from './useWindowSize';

function App() {
  const { width, height } = useWindowSize();

  return (
    <>
      <div>
        <p>Width : {width}px</p>
        <p>Height : {height}px</p>
      </div>
    </>
  );
}

export default App;

import { useState } from 'react';

const useSideBarClose = () => {
  const [windowState, setWindowState] = useState(false);

  let openClose = () => {
    setWindowState(!windowState);
  };

  return { windowState, openClose };
};

export default useSideBarClose;

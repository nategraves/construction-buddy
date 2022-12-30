import React, { useContext } from "react";

import { ValueContext } from "../../contexts";
import { modeSymbolMap } from "../../data";

export const Preview = () => {
  const { toProcess, mode } = useContext(ValueContext);

  return <span>{toProcess.join(` ${modeSymbolMap[mode]} `)}</span>;
};

import React, { useContext } from "react";

import { ValueContext } from "../../../contexts";
import { Button } from "../Button";

export function Add() {
  const { input } = useContext(ValueContext);

  return <span>+</span>;
}

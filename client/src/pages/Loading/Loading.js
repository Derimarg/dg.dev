import React, { useState } from "react";
import Pages from "./Conditional";
import AnimatedLoad from "./AnimatedLoad";

export default function Loading(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 900);

  return redirect ? <Pages {...props} /> : <AnimatedLoad {...props} />;
}

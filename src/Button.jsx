import React from "react";
import shallow from "zustand/shallow";
import { useTodos } from "./store";

const Button = ({ children }) => {

    const {getT0d0s} = useTodos(state => ({
        getT0d0s: state.getT0d0s
    }),
    shallow)
    console.log("render");


  return <button onClick={getT0d0s}>{children}</button>;
};

export default React.memo(Button);

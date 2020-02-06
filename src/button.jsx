import React, { useState, useCallback } from "react";
import Spinner from "react-spinner";
import { Login } from "login.js";

export const Button = () => {
       
      const [done, setDone] = useState(false);
       
      const getDone = useCallback(() => setDone((done) => done = true));

      if (done) {
         return <button>Login</button>
      } else {
         return <button onClick={getDone}><Spinner /></button>
      }
};

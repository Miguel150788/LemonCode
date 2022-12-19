import React from "react";
import logo from './content/logo_1.png';
import * as classes from './mystyles.scss';



export const HelloComponent: React.FC = () => {
  const [user, setUser] = React.useState("React");

  return (
    <div className={classes.hello}>
      <h2>Hello from {user}</h2>  
      <input value={user} onChange= {(e)=>
      setUser(e.target.value)} />
          <img src={logo} className={classes.logo}/>
    </div>
  );
};
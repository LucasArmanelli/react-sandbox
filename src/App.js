import React from "react";
import UseRefExemple1 from "./components/UseRefExemple1";
import UseRefExemple2 from "./components/UseRefExemple2";
import UseRefExemple3 from "./components/UseRefExemple3";
import UseMemoExemple from "./components/UseMemoExemple";

function App() {
  return (
    <div className='container mt-5'>
      <UseRefExemple1 />
      <UseRefExemple2 />
      <UseRefExemple3 />
      <UseMemoExemple />
    </div>
  );
}

export default App;

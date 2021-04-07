import "./App.css";
import UIWithBadAPI from "./UIWithBadAPI";
import UIWithEventMap from "./UIWithEventMap";
import UIWithOverloads from "./UIWithOverloads";
import UIWithOverloadsAndEnums from "./UIWithOverloadsAndEnums";
import UIWithFuncs from './UIWithFunc'
function App() {
  return (
    <div className="App">
      <UIWithBadAPI />
      <UIWithOverloads />
      <UIWithOverloadsAndEnums /> 
      <UIWithEventMap /> 
      <UIWithFuncs /> 
    </div>
  );
}

export default App;

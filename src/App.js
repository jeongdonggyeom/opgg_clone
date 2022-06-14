import Nav from "./component/Nav"
import Main from "./component/Main";
import Community from "./component/Community";
import './styleComponent/app.css'

function App() {
  return (
    <div className={"root-div"}>
      <Nav/>
        <Main/>
        <Community />
    </div>
  );
}

export default App;

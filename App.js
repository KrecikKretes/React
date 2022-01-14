import logo from './logo.svg';
import './App.css';
import {CFooter} from './components/CFooter'
import CHeader from './components/CHeader'
import CContents from './components/CContents'
import COuter from './components/COuter'
import CNav from './components/CNav'

function App() {
  return (
    <div className="App">
      <CHeader hHobby="Memy"/>
      {/*<CHeader aName="Tomasz" aFamily="Nowak"/> */}
      <CNav/>
      
     

     <COuter/>

      <CFooter name="Damian" surname="Zawisza">
      </CFooter>
           
    </div>
  );
}

export default App;

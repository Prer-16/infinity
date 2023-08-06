import{useEffect } from "react";
import{messaging} from "./firebase";
import{getToken} from "firebase/messaging";
import logo from './logo.svg';
import './App.css';

function App() {

async function requestPermission(){
  const permission = await Notification.requestPermission();
  if(permission==="granted"){
    //generate token
    const token=await getToken(messaging,{vapidKey:"BMqLguNr1BX9I0CA5a3YlYrbSW08c7RAsGvaFcIjei0v5ZpyQH-ddC3UXFIbUh5OuvUgY54n8wao7e0U_EV-u9w"})
  console.log("Token generated",token);
  
  }else if(permission==="denied"){
    alert("You denied for the notification");
  }
  }




  useEffect(()=> {
    // request user for notification permission
    requestPermission();
  }, []);

 return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
 }

export default App;

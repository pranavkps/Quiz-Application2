import React,{useState} from "react";
import './components/login.css'
import './components/quizscreen.css'
import LoginPage from "./components/login.js";
import Quizscreen from "./components/quizscreen.js"; 

function App(){
    const [quizstart,setquiz] = useState(false);
    return(
      <div className="quiz-container">
          <div className="cover">
            {
                quizstart ? 
                (<Quizscreen retry={()=>setquiz(false)}/>)
                :(<LoginPage start={()=>setquiz(true)}/>)  
            }
        </div>
      </div>
    )
}

export default App;
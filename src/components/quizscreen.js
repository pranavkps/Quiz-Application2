import React,{useState,useEffect} from "react";
import './quizscreen.css'

const Quizscreen =  () =>{

    const question = [
        {
            q: "1. Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
            a: "getClass()",
            b: "intern()",
            c: "getName()",
            d: "toString()",
            correct: "c",
        },
        {
            q: "2. If three threads trying to share a single object at the same time, which condition will arise in this scenario?",
            a: "Time-lapse",
            b: "Critical situation",
            c: "Race condition",
            d: "Recursion",
            correct: "c",
        },
        {
            q: "3. Which of the following modifiers can be used for a variable so that it can be accessed by any thread or a part of a program?",
            a: "global",
            b: "transient",
            c: "volatile",
            d: "default",
            correct: "c",
        },
        {
            q: "4. Which of the following statements is correct regarding the object-oriented programming concept in Python?",
            a: "Classes are real-world entities while objects are not real",
            b: "Objects are real-world entities while classes are not real",
            c: "Both objects and classes are real-world entities",
            d: "All of the above",
            correct: "b",
        },
        {
            q: "5. Which of the following functions is a built-in function in python language?",
            a: "val()",
            b: "print()",
            c: "printf()",
            d: "none of the above",
            correct: "b",
        },
        {
            q: "6. Which of the following variables takes precedence over the others if the names are the same?",
            a: "Global variable",
            b: "The Local element",
            c: "The two of the above",
            d: "none of the above",
            correct: "b",
        },
        {
            q: "7. When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
            a: "Prints an exception error",
            b: "Prints an Overflow error",
            c: "Displays Infinity",
            d: "Prints the value as such",
            correct: "c",
        },
        {
            q: "8. Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
            a: "toExponential()",
            b: "toFixed()",
            c: "toPrecision()",
            d: "toLocaleString()",
            correct: "b",
        },
        {
            q: "9. Which of the following number object function returns the value of the number?",
            a: "valueOf()",
            b: "toString()",
            c: "toLocaleString()",
            d: "toPrecision()",
            correct: "b",
        },
        {
            q: "10. Which of the following function of the String object returns the character in the string starting at the specified position via the specified number of characters?",
            a: "slice()",
            b: "split()",
            c: "substr()",
            d: "search()",
            correct: "c",
        }
    ];
    var x=0,score=0,current=0;
    var visit = [];
    var ele = document.getElementsByName('answer');

    const [index,setIndex] = useState(0);

    useEffect(() => {
        if(index < 0)
            setIndex(question.length-1)
        else if(index>question.length)
            setIndex(0)
        else if(index==question.length-1){
            document.querySelector('.final').style.display = 'block';
            document.querySelector('#submit').style.display ='none';
        }else{
            document.querySelector('.final').style.display = 'none';
            document.querySelector('#submit').style.display ='block';
        }

        for(x = 0; x < ele.length; x++) {
            ele[x].checked = false;
        }

    }, [index])
    var found = question[index];

    const cl = ()=>{
        for(x = 0; x < ele.length; x++) {
            ele[x].checked = false;
        }
    }

    const [answer,setAns] = useState();

    const check = () =>{
        var c = 0;
        for(x=0;x<visit.length;x++){
            if(visit[x] === index){
                c++; break;
            }
        }
        if(c===0){
            visit[current++] = index;
            if(answer===found.correct)
                ++score;

            alert("YOUR ANSWER OF Q-"+(index+1)+" HAS BEEN LOCKED..!");
        }else{
            alert("YOU SAVED THIS ANSWER PREVIOUSLY");
        } 
    }

    const prev = () =>{
        if(index<=0)
            setIndex(0)
        else{
            setIndex(index-1)
        }
    }
    const next = () =>{
        if(index>=question.length-1)
            setIndex(question.length-1)
        else{
            setIndex(index+1)
        }
    }

    const FinalScore = () =>{
        check();
        alert("YOUR SCORE IS "+score);
    }

    return(
        <div className="quiz-content" id="quiz">
        <div className="question">
            <span className="ques">{found.q}</span>
            <ul>
                <li>
                    <input type="radio" name="answer" id="a" className="answer" value="a" onChange={e=>setAns(e.target.value)}/>
                    <label for="a" id="a_text">{found.a}</label>
                  </li>
                  <li>
                    <input type="radio" name="answer" id="b" className="answer" value="b" onChange={e=>setAns(e.target.value)}/>
                    <label for="b" id="b_text">{found.b}</label>
                  </li>
                  <li>
                    <input type="radio" name="answer" id="c" className="answer" value="c" onChange={e=>setAns(e.target.value)}/>
                    <label for="t" id="c_text">{found.c}</label>
                  </li>
                  <li>
                    <input type="radio" name="answer" id="d" className="answer" value="d" onChange={e=>setAns(e.target.value)}/>
                    <label for="d" id="d_text">{found.d}</label>
                  </li>
            </ul>
        </div>
        
            <div className="next-prev">
                <span><button id="btn" onClick={prev}>PREV</button></span>
                <span><button id="btn" onClick={cl}>CLEAR</button></span>
                <span><button id="btn" onClick={next}>NEXT</button></span>
            </div>
        <div className="submit-1">
            <div className="submit">
            <center><span><button id="submit" className="submits" onClick={check}>CONFIRM SELECTION</button></span></center>
            </div>
        </div>
        <div className="final">
            <center><button id="fi"  className="submits" onClick={FinalScore}>FINAL SUBMIT</button></center>
        </div>
    </div>
    )
}
export default Quizscreen



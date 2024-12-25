import Student from "./Components/Students/Student";
import StudentReview from "./Components/StudentReview";
import React from "react";
class MainBody extends React.Component{
  render(){
    const whatwewellLearn = 3;
    return(<div style={{minHeight:"70vh"}}>
      <p>
        In this courcse, We will Learn react js by building taskopedia {""}!
        <br/>
        tatal Lecture - {whatwewellLearn}.
        </p>
        <ul>
          <li>Basic Foundation</li>
          <li>Functional and class components. </li>
        </ul>
        <div className='container row'>
            Students Enrolled
            </div>
  <Student  experience={2} name="Kris Walley">
    <StudentReview/>
    </Student>
  <Student  experience={5} name="Angel Patrice">
  <StudentReview/>
  
  </Student>
  <Student  experience={7} name="Rene Parker"/>
  </div>
    );
  }
  }

  export default MainBody;
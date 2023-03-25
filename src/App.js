import React from 'react';
import './App.css';

function App() {
  return (
    <div className="form-container">
      <form>
        <h1>BASIC FORM</h1>
        <h2>WELCOME</h2>
        
        
        <div className="form-group">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstname" name="firstname" required />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastname" name="lastname" required />
        </div>
        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" id="dob" name="dob" required />
        </div>
        <div className="form-group">
          <label htmlFor="rollno">Roll No</label>
          <input type="text" id="rollno" name="rollno" required />
        </div>
        <div className="form-group">
          <label htmlFor="dept">Department</label>
          <select id="dept" name="dept" required>
            <option value=""></option>
            <option value="CSBS">CSBS</option>
            <option value="AERO">AERO</option>
            <option value="AGRI">AGRI</option>
            <option value="ECE">ECE</option>
            <option value="EEE">EEE</option>
            <option value="ISE">ISE</option>
            <option value="BIOTECH">BIOTECH</option>
            <option value="CSE">CSE</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="emailid">Email</label>
          <input type="email" id="emailid" name="emailid" required />
        </div>
        <div className="form-group">
          <label htmlFor="semester">Semester</label>
          <select id="semester" name="semester" required>
            <option value=""></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
          </select>
          </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="Confirmpassword">Confirm Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="course">Courses Learned</label>
          <input type="text" id="course" name="course" required />
        </div>
        <div className="form-group">
          <label htmlFor="Language">Languages known</label>
          <input type="text" id="Language" name="Language" required />
        </div>
        
        <div className="form-group">
          <button type="Register">Register</button>
        </div>
        
      </form>
      
    </div>
  );
}

export default App;
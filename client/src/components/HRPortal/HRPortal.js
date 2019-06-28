import React from 'react';
import './hrportal.css';
export default class HRPortal extends React.Component {
    render () {
        return (
          <div> <center>
     <h2>Hiring Manager Top 3 Applicants</h2>
     <p>Click a Manager to see the Manager's top applicants.</p>
     <div className="dropdown">
       <a href="http://localhost:3000/hrportal0"> <button className="dropbtn">Trisha Jacobson</button></a>
       <div className="dropdown-content">
         <a href="http://localhost:3000/hrportal0">Corrine Henson</a>
         <a href="http://localhost:3000/hrportal0">Josie Reed</a>
         <a href="http://localhost:3000/hrportal0">Roger Key</a>
       </div>
     </div>
     <div className="dropdown">
      <a href="http://localhost:3000/hrportal1"> <button className="dropbtn">Derek Robertson</button></a>
       <div className="dropdown-content">
         <a href="#">Alfred Kim</a>
         <a href="#">Roberta Mckee</a>
         <a href="#">Clifton Hudson</a>
       </div>
     </div>
     <div className="dropdown">
      <a href="http://localhost:3000/hrportal2"> <button className="dropbtn">Herman Floyd</button></a>
       <div className="dropdown-content">
         <a href="#">Sonia Gonzales</a>
         <a href="#">Sheri Dennis</a>
         <a href="#">Serena Serrano</a>
       </div>
     </div>
     <div className="dropdown">
       <a href="http://localhost:3000/hrportal3"><button className="dropbtn">Percy Watkins</button></a>
       <div className="dropdown-content">
         <a href="#">Judy Garner</a>
         <a href="#">Thaddeus Lester</a>
         <a href="#">Leandro Cervantes</a>
       </div>
     </div>
      <h2>Applicant Stats</h2>
  <iframe width="800" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiZWMxY2ZlNzQtOWY3Yi00YjFhLTg3MzEtYzI1Nzc5Njk2M2YxIiwidCI6IjY0MDc0NjM2LTFiZjQtNDAyNi05MmVmLTBkMjc5MWQ3ZjkzMSIsImMiOjJ9" frameborder="0" allowFullScreen="true"></iframe>
     </center>
   </div>
 );
}
};

import React from 'react';
import './hrportal.css';
export default class HRPortal extends React.Component {
    render () {
        return (
          <div> <center>
     <h2>Hiring Manager Top 3 Applicants</h2>
     <p>Move the mouse over a button to see the Manager's top applicants.</p>
     <div className="dropdown">
       <button className="dropbtn">Trisha Jacobson</button>
       <div className="dropdown-content">
         <a href="#">Corrine Henson</a>
         <a href="#">Josie Reed</a>
         <a href="#">Roger Key</a>
       </div>
     </div>
     <div className="dropdown">
       <button className="dropbtn">Derek Robertson</button>
       <div className="dropdown-content">
         <a href="#">Alfred Kim</a>
         <a href="#">Roberta Mckee</a>
         <a href="#">Clifton Hudson</a>
       </div>
     </div>
     <div className="dropdown">
       <button className="dropbtn">Herman Floyd</button>
       <div className="dropdown-content">
         <a href="#">Sonia Gonzales</a>
         <a href="#">Sheri Dennis</a>
         <a href="#">Serena Serrano</a>
       </div>
     </div>
     <div className="dropdown">
       <button className="dropbtn">Percy Watkins</button>
       <div className="dropdown-content">
         <a href="#">Judy Garner</a>
         <a href="#">Thaddeus Lester</a>
         <a href="#">Leandro Cervantes</a>
       </div>
     </div>
  <iframe width="800" height="600" src="https://app.powerbi.com/view?r=eyJrIjoiZWMxY2ZlNzQtOWY3Yi00YjFhLTg3MzEtYzI1Nzc5Njk2M2YxIiwidCI6IjY0MDc0NjM2LTFiZjQtNDAyNi05MmVmLTBkMjc5MWQ3ZjkzMSIsImMiOjJ9" frameborder="0" allowFullScreen="true"></iframe>
     </center>
   </div>
 );
}
};

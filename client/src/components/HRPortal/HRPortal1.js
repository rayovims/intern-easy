import React from 'react';
import './hrportal.css';
export default class HRPortal extends React.Component {
    render () {
        return (
          <div>
          <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">GPA</th>
      <th scope="col">Major</th>
      <th scope="col">Race</th>
      <th scope="col">Hispanic or Latino</th>
      <th scope="col">School</th>
      <th scope="col">Graduation Year</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Neil Johnston</td>
      <td>2.87</td>
      <td>Computer Science</td>
      <td>White American</td>
      <td>No</td>
      <td>Plaza College</td>
      <td>Fall 2021</td>
      <td>Applicant</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Quinton Jordan</td>
      <td>3.24</td>
      <td>Information Systems</td>
      <td>Asian American</td>
      <td>Yes</td>
      <td>Brown University</td>
      <td>Spring 2019</td>
      <td>Co-Op</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Brendan Haynes</td>
      <td>3.85</td>
      <td>Business Management</td>
      <td>Native American</td>
      <td>No</td>
      <td>Yale University</td>
      <td>Spring 2020</td>
      <td>Intern</td>
    </tr>
  </tbody>
</table>
</div>
 );
}
};

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
      <td>Corrine Henson</td>
      <td>2.93</td>
      <td>Business</td>
      <td>Native Hawaiian</td>
      <td>Yes</td>
      <td>Simmons College</td>
      <td>Fall 2020</td>
      <td>Applicant</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Josie Reed</td>
      <td>3.24</td>
      <td>Human Resources</td>
      <td>Asian American</td>
      <td>No</td>
      <td>Villanova University</td>
      <td>Spring 2020</td>
      <td>Applicant</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Roger Key</td>
      <td>3.85</td>
      <td>Business Management</td>
      <td>Native American</td>
      <td>No</td>
      <td>Trinity College</td>
      <td>Fall 2020</td>
      <td>Intern</td>
    </tr>
  </tbody>
</table>
</div>
 );
}
};

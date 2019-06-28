import React from 'react';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createIdealCandidate } from '../../actions';

class CreateCandidateModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        major: '',
        GPA: '',
        skill: '',
        skills: []
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
      this.setState({major: '', GPA: '', skills: []})
    }

    addSkills = (skill) => {
      this.setState({skills: [...this.state.skills, skill]});
    }

    renderSkills = () => {
      return this.state.skills.map(skill => {
        return (
          <span key={skill}>{skill} </span>
        )
      })
    }

    handleCreateCandidate = () => {

      const { major, GPA, skills} = this.state;

      if (major === '' && GPA === '' && skills.length === 0) {
        alert("Please enter at least one field");
      } else {
        const data = {
          major, GPA, skills
        }
        this.props.createIdealCandidate(data);
        this.handleClose();
      }
    }
  
    render() {
      return (
        <>
          <button 
          variant="primary" 
          onClick={this.handleShow}
          className="btn"
          >
            Create
          </button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{textAlign: 'center'}}>Create Candidate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Major</label>
              <input
              className="form-control"
              value={this.state.major}
              onChange={(e) => this.setState({major: e.target.value})}
              />
              <hr/>
              <label>GPA</label>
              <input
              className="form-control"
              value={this.state.GPA}
              onChange={(e) => this.setState({GPA: e.target.value})}
              />
              <hr/>
              <label>Skills</label>
              <div className="row">
                <div className="col-10" style={{padding: 0}}>
                <input 
                className="form-control"
                value={this.state.skill}
                onChange={e => this.setState({skill: e.target.value})}
                />
                </div>
                <div className="col-2">
                  <button
                  className="btn"
                  onClick={() => this.addSkills(this.state.skill)}
                  >+</button>
                </div>
              </div>
              <div className="row">
                <div className="col-10 text-center">
                {this.renderSkills()}
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
                <div className="col-12 text-left" style={{paddingLeft: 0}}>
                  <button 
                  onClick={this.handleCreateCandidate}
                  className="btn"
                  >
                  Create Candidate
                  </button>
                </div>
            </Modal.Footer>
          </Modal>
        </>
      );
    }
  }

  const mapStateToProps = (state) => {
    console.log(state);
    return {
      createIdealCandidate: state.createIdealCandidateReducer,
    }
  }

  export default connect(mapStateToProps, {createIdealCandidate})(CreateCandidateModal);

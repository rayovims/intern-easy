import React from 'react';
import { Modal } from 'react-bootstrap';

class CreateCandidateModal extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleShow = this.handleShow.bind(this);
      this.handleClose = this.handleClose.bind(this);
  
      this.state = {
        show: false,
        major: '',
        gpa: '',
        skill: '',
        skills: []
      };
    }
  
    handleClose() {
      this.setState({ show: false });
    }
  
    handleShow() {
      this.setState({ show: true });
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
  
    render() {
      return (
        <>
          <button 
          variant="primary" 
          onClick={this.handleShow}
          className="btn"
          >
            {this.props.btnName}
          </button>
  
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title style={{textAlign: 'center'}}>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <label>Major</label>
              <input
              className="form-control"
              value={this.state.major}
              onChange={(e) => this.setState({major: e.target.value.toIn})}
              />
              <hr/>
              <label>GPA</label>
              <input
              className="form-control"
              value={this.state.gpa}
              onChange={(e) => this.setState({gpa: e.target.value})}
              />
              <hr/>
              <label>Skills</label>
              <div className="row">
                <div className="col-10">
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
                  onClick={this.handleClose}
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

  export default CreateCandidateModal;
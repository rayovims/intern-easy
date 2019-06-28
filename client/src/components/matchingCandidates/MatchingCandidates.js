import React from "react";
import { connect } from "react-redux";
import { getMatchingCandidates, selectedCandidate } from "../../actions"; 

class MatchingCandidates extends React.Component {

  state = {
    selected: []
  }

  componentDidMount() {
    this.props.getMatchingCandidates();
  }

  addToSelected = (candidate) => {
    this.props.selectedCandidate(candidate);
  }

  renderMatchingCandidates = () => {
      return this.props.matches.map(matches => {
        console.log(matches._id)
          return (
            <div className="list-group" key={matches._id} onClick={() => this.addToSelected(matches)}>
              <div className="list-group-item">
                  <div>Name: {matches.Name}</div>
                  <div>Major: {matches.Major}</div>
                  <div>GPA: {matches.GPA}</div>
                  <div>Skills:{matches.skills.map(skill => {
                      return (<li>{skill}</li>)
                  })}</div>
              </div>
            </div>
          )
      })
  }

  render() {
    return <div>{this.renderMatchingCandidates()}</div>;
  }
}

const mapStateToProps = state => {
  return { matches: state.getMatchingCandidatesReducer };
};

export default connect(
  mapStateToProps,
  { getMatchingCandidates, selectedCandidate }
)(MatchingCandidates);

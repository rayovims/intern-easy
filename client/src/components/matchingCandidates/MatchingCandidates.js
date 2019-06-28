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

  componentDidUpdate() {
    // console.log(this.state.selected);
  }

  addToSelected = (candidate) => {
    // console.log(candidate);
    this.props.selectedCandidate(candidate);

  }

  renderMatchingCandidates = () => {
      return this.props.matches.map(matches => {
          return (
            <div className="list-group" key={matches._id} onClick={() => this.addToSelected(matches)}>
              <div className="list-group-item">
                  <div>Name: {matches.name}</div>
                  <div>Major: {matches.major}</div>
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

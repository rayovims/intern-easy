import React from "react";
import { connect } from "react-redux";
import { getMatchingCandidates } from "../../actions";

class MatchingCandidates extends React.Component {
  componentDidMount() {
    this.props.getMatchingCandidates();
  }

  renderMatchingCandidates = () => {
      return this.props.matches.map(matches => {
          return (
            <div className="list-group" key={matches._id}>
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
  { getMatchingCandidates }
)(MatchingCandidates);

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
              <div key={matches._id}>
                  <div>{matches.name}</div>
                  <div>{matches.major}</div>
                  <div>{matches.GPA}</div>
                  <div>{matches.skills.map(skill => {
                      return (<li>{skill}</li>)
                  })}</div>
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

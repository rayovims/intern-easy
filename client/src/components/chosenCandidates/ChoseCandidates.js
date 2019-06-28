import React from 'react';
import { connect } from 'react-redux';

class ChosenCandidates extends React.Component {

    renderChosenList = () => {
        console.log(this.props.selected);
        return this.props.selected.map(user => {
            return (
                <div className="list-group" key={user._id}>
                    <div className="list-group-item">
                        {user.name}
                    </div>
                </div>
            )
        })
    }

    render () {
        return (
            <div>{this.renderChosenList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        selected: state.selectedCandidateReducer
    }
}

export default connect(mapStateToProps)(ChosenCandidates);
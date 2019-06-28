import React from 'react';
import Modal from '../modals/CreateCandidateModal';
import { Redirect } from 'react-router-dom';
import MatchingCandidates from '../matchingCandidates/MatchingCandidates';
import './hmportal.css';
import ChosenCandidates from '../chosenCandidates/ChoseCandidates';

export default class HMPortal extends React.Component {

    handlePageRouter = () => {
        if(!localStorage.getItem("member")){
            return <Redirect to="/"/>
        }
    }

    render () {
        return (
            <div className="container">
                {this.handlePageRouter()}
                <div className="row">
                    <div className="col-10"></div>
                    <div className="col-2 text-center create">
                        <Modal/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <MatchingCandidates/>
                    </div>
                    <div className="col-6">
                        <ChosenCandidates/>
                    </div>
                </div>
            </div>
        )
    }
}
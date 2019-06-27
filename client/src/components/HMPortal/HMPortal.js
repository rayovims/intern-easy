import React from 'react';
import Modal from '../modals/CreateCandidateModal';
import './hmportal.css';

export default class HMPortal extends React.Component {

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10"></div>
                    <div className="col-2 text-center create">
                        <Modal 
                        btnName="Create"
                        title="Create Ideal Candidate"
                        />
                    </div>
                </div>
            </div>
        )
    }
}
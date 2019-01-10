import React from 'react';
import { Link } from 'react-router-dom';

const People = (props) => {
    return (
        <div>
            <div className="card mt-3 mx-1">
                <div className="card-body-mb-0">
                    <div className="d-flex justify-content-between align-items-center">
                        <h4 className="card-title lead font-weight-bold">{ props.data.name }</h4>
                        <h4 className="card-title lead">{ props.data.gender }</h4>
                    </div>
                    <p className="card-text">{ props.data.homeworld }</p>
                </div>
                <p className="btn btn-primary btn-block mb-4">Details</p>
            </div>
        </div>
    );
};

export default People;
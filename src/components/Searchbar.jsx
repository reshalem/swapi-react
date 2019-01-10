import React from 'react';

const Searchbar = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="form-inline d-flex justify-content-center-p-0">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fas fa-search"></i>
                        </span>
                    </div>
                    <input type="text" onChange={(e) => props.searchPeople(e)} className="form-control" placeholder="Type People Name"></input>
                </div>
            </div>
        </div>
    );
};

export default Searchbar;
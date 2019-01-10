import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPeopleList, setPeople, setPeopleToDefault } from '../store/actions/fetchPeopleList';

import People from '../components/People';
import Searchbar from '../components/Searchbar';

import '../styles/loadingSpinner.css';


class PeopleWrapper extends Component {
    componentDidMount() {
        this.props.fetchPeopleList();
    }

    searchPeople = (e) => {
        const filteredPeople = this.props.defaultPeople.filter(people => {
            const testCase = new RegExp(e.target.value, 'i');
            const regexTest = testCase.test(people.name);
            return regexTest;
        });

        if (e.target.value === '') {
            this.props.setPeopleToDefault();
        } else {
            this.props.setPeople(filteredPeople);
        }
    }

    render() {
        return (
            <div>
                {this.props.loading ? 
                    <div className="lds-hourglass d-flex mt-5 justify-content-center align-items-center mx-auto"></div> :
                    <div className="mt-5">
                        <div className="mt-3 d-flex justify-content-between align-items-center">
                            <h1 className="display-4">
                                People in Star Wars Universe
                            </h1>
                            <Searchbar searchPeople={e => this.searchPeople(e)} />
                        </div>
                        <div className="card-columns-mt-2">
                            {this.props.people.map((pep, index) => <People data={pep} key={index} />)}
                        </div>
                    </div>    
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.peopleList.loading,
        people: state.peopleList.people,
        error: state.peopleList.error,
        defaultPeople: state.peopleList.defaultPeople
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPeopleList: () => dispatch(fetchPeopleList()),
        setPeople: (filteredPeople) => dispatch(setPeople(filteredPeople)),
        setPeopleToDefault: () => dispatch(setPeopleToDefault())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PeopleWrapper);
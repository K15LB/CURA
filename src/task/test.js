# src / app / components / list_company.js
import _ from 'lodash';
import React, { Component } from 'react';
import { gql, graphql, compose } from 'react-apollo';
import { Link } from "react-router-dom";
class CompaniesList extends Component {
    componentWillReceiveProps(nextProps) {
        if (!this.subscription && !nextProps.data.loading) {
            let { subscribeToMore } = this.props.data
            this.subscription = [subscribeToMore(
                {
                    document: companyAddSub,
                    updateQuery: (previousResult, { subscriptionData }) => {
                        const newCo = subscriptionData.data.companyAdded;
                        if (!previousResult.Companies.find((c) => c.id === newCo.id)) {
                            let updatedList = Object.assign({}, previousResult, { Companies: [...previousResult.Companies, newCo] });
                            return updatedList;
                        } else {
                            return previousResult;
                        }
                    },
                }),
            subscribeToMore(
                {
                    document: companyEditSub,
                    updateQuery: (previousResult, { subscriptionData }) => {
                        const editCo = subscriptionData.data.companyEdited;
                        if (previousResult.Companies.find((c) => c.id === editCo.id)) {
                            let updatedList = Object.assign({}, previousResult, { Companies: [...previousResult.Companies] });
                            return updatedList;
                        } else {
                            return previousResult;
                        }
                    },
                }),
            subscribeToMore(
                {
                    document: companyDeleteSub,
                    updateQuery: (previousResult, { subscriptionData }) => {
                        const delCo = subscriptionData.data.companyDeleted;
                        const oldList = previousResult.Companies;
                        let newList = oldList.filter(function (elem) {
                            return elem.id !== delCo.id
                        });
                        let updatedList = Object.assign({}, previousResult, { Companies: newList });
                        return updatedList;
                    },
                })
            ]
        }
    }
    handleDelete(cId) {
        this.props.DeleteCo({ variables: { id: cId } })
            .then(console.log('deleted'));
    }
    render() {
        const { loading, error, Companies } = this.props.data;
        if (loading) {
            return <p> Loading... </p>;
        }
        if (error) {
            return <p> {error.message} </p>;
        }
        return (
            <div>
                <div className="text-right">
                    <Link className="btn btn-primary" to="/company/create">
                        Add a Company
</Link>
                </div>
                <ul className="list-group" > {
                    Companies.map(c => <li className="list-group-item" key={c.id}>
                        <div className="company-list">
                            <div className="company-name">
                                <Link to={`/company/${c.id}`}>
                                    {c.name}
                                </Link>
                            </div>
                            <div className="company-btn">
                                <Link className="btn btn-primary" to={`company/${c.id}/update`}>
                                    Update
</Link>
                                <button type="submit" className="btn"
                                    onClick={() => this.handleDelete(c.id)}>Delete</button>
                            </div>
                        </div>
                    </li>
                    )}
                </ul>
            </div>
        );
    };
}
static fragments = {
    pokemon: gql`
fragment PokemonCardPokemon on Pokemon {
url
name
}
`
}
const CompanyListQuery = gql`
query CompanyList{
Companies {
id
name
}
}
`;
const DeleteCo = gql`
mutation deleteCompany($id: ID!) {
deleteCompany(id: $id) {
id
name
}
}
`;
const companyAddSub = gql`
subscription companyAdded {
companyAdded {
id
name
}
}
`;
const companyEditSub = gql`
subscription companyEdited {
companyEdited {
id
name
}
}
`;
const companyDeleteSub = gql`
subscription companyDeleted {
companyDeleted {
id
name
}
}
`;
const CompanyListWithMutations = compose(
    graphql(CompanyListQuery),
    graphql(DeleteCo, {
        name: 'DeleteCo'
    })
)(CompaniesList)
export default CompanyListWithMutations;
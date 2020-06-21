import React from 'react';

import UserListContainer from "./components/UserListContainer.jsx";
import UserForm from "./components/UserForm.jsx";

import "./App.css";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            route: "list",
            currentUser: null,
            usersList: [],
        };
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    toggleRouteState() {
        this.setState({ route: (this.state.route === "list") ? "form" : "list" });
    }

    userAlreadyExists(user) {
        return this.state.usersList.find(({ id }) => id === user.id);
    }

    onClickHandler(user) {
        const { usersList } = this.state;
        this.toggleRouteState();
        this.setState({ currentUser: user })
        if (user) {
            if (this.userAlreadyExists(user)) {
                usersList.map(({ id }) => { id === user.id && (usersList[id-1] = user) });
            } else {
                usersList.push({
                    id: usersList.length + 1,
                    ...user,
                });
            }
        }
    }

    render() {
        const { route, currentUser, usersList } = this.state;

        return (
            <div className="App">
                {
                    route === "list"
                        ? (<UserListContainer
                            usuarios={usersList}
                            onClick={(user) => this.onClickHandler(user)} />)
                        : (<UserForm
                            user={currentUser}
                            onClick={(user) => this.onClickHandler(user)} />)
                }
            </div>
        );
    }
}

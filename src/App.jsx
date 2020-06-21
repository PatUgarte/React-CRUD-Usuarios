import React from 'react';

import UserListContainer from "./components/UserListContainer.jsx";
import UserForm from "./components/UserForm.jsx";

import "./App.css";

import usersList from "../usersList";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            route: "list",
            currentUser: null,
        };

        this.onClickHandler = this.onClickHandler.bind(this);
        this.listaUsuarios = usersList.get();
    }

    toggleRouteState() {
        this.setState(
            {
                route:
                    (this.state.route === "list")
                        ? "form"
                        : "list"
            }
        );
    }

    onClickHandler(user) {
        this.toggleRouteState();
        this.setState({ currentUser: user })
        if (user && !(this.listaUsuarios.find(({ username }) => username === user.username))) this.listaUsuarios = usersList.add(user);
    }

    render() {
        const { route, currentUser } = this.state;

        return (
            <div className="App">
                {
                    route === "list"
                        ? (<UserListContainer
                            usuarios={this.listaUsuarios}
                            onClick={(user) => this.onClickHandler(user)} />)
                        : (<UserForm
                            user={currentUser}
                            onClick={(user) => this.onClickHandler(user)} />)
                }
            </div>
        );
    }
}

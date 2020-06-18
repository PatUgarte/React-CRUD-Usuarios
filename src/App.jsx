import React from 'react';
import "./App.css";
import UserListContainer from "./components/UserListContainer.jsx";
import UserForm from "./components/UserForm.jsx";

export default class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            route: "list",
            selectedUser: null,
        };

        this.toggleRouteState = this.toggleRouteState.bind(this);
    }

    toggleRouteState(selectedUser) {

        const { route } = this.state;

        this.setState(
            {
                route: (route === "list") ? "form" : "list",
                selectedUser,
            }
        );
    }

    render() {
        const { route, selectedUser } = this.state;
        const listaUsuarios = [4, 2, 7];

        return (
            <div className="App">
                {
                    route === "list"
                        ? (<UserListContainer usuarios={listaUsuarios} onClick={(user) => this.toggleRouteState(user)} />)
                        : (<UserForm user={selectedUser} onClick={(user) => this.toggleRouteState(user)} />)
                }
            </div>
        );
    }
}

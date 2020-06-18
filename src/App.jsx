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
        const listaUsuarios = [
            {
                id: 1,
                name: "Mario Bros",
                mail: "mario@nintendo.com",
                username: "ItsMeMario",
                website: "",
            },
            {
                id: 2,
                name: "Luigi Bros",
                mail: "lbros@nintendo.com",
                username: "MariosTallerBrother",
                website: "http://www.luigi.com",
            },
            {
                id: 3,
                name: "Patricio Ugarte",
                mail: "pat@digitalhouse.com",
                username: "PatUgarte",
                website: "https://www.patugarte.dev",
            }
        ];

        return (
            <div className="App">
                {
                    route === "list"
                        ? (<UserListContainer
                            usuarios={listaUsuarios}
                            onClick={(user) => this.toggleRouteState(user)} />)
                        : (<UserForm
                            user={selectedUser}
                            onClick={(user) => this.toggleRouteState(user)} />)
                }
            </div>
        );
    }
}

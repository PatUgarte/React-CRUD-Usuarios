import React from 'react';
import "./App.css";
import UserListContainer from "./components/UserListContainer.jsx";
import UserForm from "./components/UserForm.jsx";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            route: "lista",
        };
    }

    render() {
        const { route } = this.state;

        return (
            <div className="App">
                {
                    route === "lista"
                        ? (<UserListContainer />)
                        : (<UserForm />)
                }
            </div>
        );
    }
}

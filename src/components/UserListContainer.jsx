import React, { Component } from "react";
import ListItem from "./ListItem.jsx";

import "../styles/UserListContainer.css"

export default class UserListContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listaUsuarios: [4, 2, 7],
        };
    }

    render() {
        const { listaUsuarios } = this.state;
        return (
            <>
                <h1>Lista de Usuarios</h1>
                <div className="listContainer">
                    <ListItem title="Usuarios" type="title" />
                    {
                        listaUsuarios.map((user) => <ListItem title={`Usuario${user}`} type="item" key={user} />)
                    }
                </div>
            </>
        );
    }

}
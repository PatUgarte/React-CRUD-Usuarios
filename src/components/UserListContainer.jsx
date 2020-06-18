import React, { Component } from "react";
import ListItem from "./ListItem.jsx";

import "../styles/UserListContainer.css"

export default class UserListContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const { usuarios, onClick } = this.props;
        return (
            <>
                <h1>Lista de Usuarios</h1>
                <div className="listContainer">
                    <ListItem
                        title="Usuarios"
                        type="title"
                        onClick={() => onClick()}
                    />
                    {usuarios.map((user) =>
                        <ListItem
                            title={`@${user.username}`}
                            type="item"
                            usuario={user}
                            onClick={(user) => onClick(user)}
                            key={user.id}
                        />
                    )}
                </div>
            </>
        );
    }

}
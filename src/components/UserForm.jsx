import React, { Component } from "react";
import "../styles/UserForm.css";

export default class UserForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: null,
        }
    }

    render() {
        const { user, onClick } = this.props;
        return (
            <>
                <h1>{user ? "Formulario de Edición" : "Dando de alta un nuevo usuario"}</h1>
                <div className="user-form">
                    <form>
                        <label htmlFor="name">Nombre:</label>
                        <input type="text" value={user ? user : ""} />
                        <button className="form-button" onClick={() => onClick(user)}>Enviar</button>
                    </form>
                </div>
            </>

        );
    }
}
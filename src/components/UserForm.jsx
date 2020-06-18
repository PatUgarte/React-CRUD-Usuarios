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
                <div className="user-form-container">
                    <form>
                        <label htmlFor="name">Nombre completo:</label>
                        <input type="text" value={user ? user.name : ""} />
                        <label htmlFor="mail">Email:</label>
                        <input type="mail" value={user ? user.mail : ""} />
                        <label htmlFor="username">Nombre de usuario:</label>
                        <input type="text" value={user ? user.username : ""} />
                        <hr></hr>
                        <label htmlFor="website">Sitio web:</label>
                        <input type="text" value={user && user.website ? user.website : ""} />

                        <button className="form-button" onClick={() => onClick(user)}>Enviar</button>
                    </form>
                </div>
            </>

        );
    }
}
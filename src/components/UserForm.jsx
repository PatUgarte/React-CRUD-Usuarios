import React, { Component } from "react";
import "../styles/UserForm.css";

export default class UserForm extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        
        this.state = {
            user:
                this.props.user
                    ? this.props.user
                    : {
                        name: "",
                        mail: "",
                        username: "",
                        website: "",
                    },
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange({ target }) {
        const { name, value } = target;
        this.setState({
            user: {
                ...this.state.user,
                [name]: value,
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        const { onClick } = this.props;
        const { user } = this.state;
        return (
            <>
                <h1>{user.name === "" ? "Formulario de Edición" : "Dando de alta un nuevo usuario"}</h1>
                <div className="user-form-container">
                    <form onSubmit={this.handleSubmit}>
                        <label htmlFor="name">Nombre completo:</label>
                        <input name="name" type="text" value={user.name} onChange={this.handleChange} />

                        <label htmlFor="mail">Email:</label>
                        <input name="mail" type="mail" value={user.mail} onChange={this.handleChange} />

                        <label htmlFor="username">Nombre de usuario:</label>
                        <input name="username" type="text" value={user.username} onChange={this.handleChange} />

                        <hr />

                        <label htmlFor="website">Sitio web:</label>
                        <input name="website" type="text" value={user.website} onChange={this.handleChange} />

                        <button className="form-button" type="submit" onClick={() => onClick(this.state.user)}>Enviar</button>
                    </form>
                </div>
            </>

        );
    }
}
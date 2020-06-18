import React from "react";

import "../styles/ListItem.css";

export default function ListItem(props) {

    const { title, type, usuario, onClick } = props;

    return (
        <div className={"listItem " + type}>
            <p>{title}</p>
            <div className="button-container">
                <button onClick={() => onClick(usuario)}>{type === "title" ? "Nuevo" : "Editar"}</button>
            </div>
        </div>
    )
}
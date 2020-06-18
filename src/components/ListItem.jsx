import React from "react";

import "../styles/ListItem.css";

export default function ListItem(props) {

    const { title, type } = props;
    return (
        <div className={"listItem " + type}>
            <p>{title}</p>
            <div className="button-container">
                <button>{type === "title" ? "Nuevo" : "Editar"}</button>
            </div>
        </div>
    )
}
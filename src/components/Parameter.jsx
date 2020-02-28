import React, { Component } from "react";

let types = [
    "string",
    "number",
    "boolean"
]


class Parameter extends Component {

    render = () => {
        

        let label = this.props.label !== undefined ? this.props.label : ""
        let value = this.props.value !== undefined ? this.props.value : ""
        let type  = this.props.type !== undefined ? this.props.type : "string"

        let typeSelect = []
        for (let i = 0; i < types.length; i++) {
            typeSelect.push(
                types[i] === type ?
                <option value={types[i]} selected>{types[i]}</option> :
                <option value={types[i]}>{types[i]}</option>
                )
        }

        return(
            <div className="row">
                <div className="col-sm-3">
                    <input
                        type="text"
                        className="form-text"
                        placeholder="parameter"
                        value={label || ""}
                    />
                </div>
                <div className="col-sm-3">
                    <input
                        type="text"
                        className="form-text"
                        placeholder="value"
                        value={value || ""}
                    />
                </div>
                <div className="col-sm-1">
                    <button className="btn btn-danger">del</button>
                </div>

            </div>
        )
    }
}

export default Parameter
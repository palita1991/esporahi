import React from "react";
import fechaActual from "../helpers/fechaActual";
import CATEGORIAS from "../helpers/categorias";

export default function Input(props) {
  if (props.origin === "register") {
    if (props.type === "date") {
      return (
        <>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <input
            className="form-control"
            placeholder={fechaActual()}
            type={props.type}
            name={props.name}
            min={props.min}
            max={fechaActual()}
            onChange={props.onChange}
          />
        </>
      );
    } else {
      return (
        <>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <input
            className="form-control"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
          />
        </>
      );
    }
  } else if (props.origin === "login") {
    return (
      <div className="form-group">
        <label htmlFor={props.htmlFor}>{props.label}</label>
        <input
          className="form-control"
          placeholder={props.placeholder}
          type={props.type}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    );
  } else {
    if (props.type === "file") {
      return (
        <>
          <label className={props.classLabel} htmlFor={props.htmlFor}>
            {props.label}
          </label>
          <input
            className="custom-file-input"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            aria-describedby="image"
            onChange={props.onChange}
            required
          />
        </>
      );
    } else if (props.type === "text") {
      return (
        <>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <input
            className="form-control"
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            required
          />
        </>
      );
    } else {
      return (
        <>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <select
            className="form-control"
            id={props.id}
            name={props.name}
            onChange={props.onChange}
          >
            {CATEGORIAS.map((cat) => (
              <option value={cat} key={cat}>
                {cat}
              </option>
            ))}
          </select>
        </>
      );
    }
  }
}

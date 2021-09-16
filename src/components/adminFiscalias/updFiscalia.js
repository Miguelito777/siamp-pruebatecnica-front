import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default class UpdateFiscalia extends Component {
  static propTypes = {
    id: PropTypes.object.isRequired,
  };
  cajaNumRef = React.createRef();
  cajaNomRef = React.createRef();
  cajaDirRef = React.createRef();
  cajaTelRef = React.createRef();
  state = { status: false };
  modificarFiscalia = (e) => {
    e.preventDefault();
    var num = parseInt(this.cajaNumRef.current.value);
    var nom = this.cajaNomRef.current.value;
    var dir = this.cajaDirRef.current.value;
    var cla = this.cajaTelRef.current.value;
    var fisc = {
      id: num,
      FISCALIA: nom,
      DIRECCION: dir,
      TELEFONO: cla,
      LATITUD: "32423234",
      LONGITUD: "-32423234",
    };
    var request = "fiscalia/" + num;
    var url = Global.urlfiscalias + request;
    axios.put(url, fisc).then((res) => {
      console.log(res);
      this.setState({ status: true });
    });
  };

  render() {
    const { id } = this.props;
    console.log(id);
    if (this.state.status === true) {
      return <Redirect to="/admin/fiscalias" />;
    }
    return (
      <div>
        <h1>Modificar Fiscalia {id}</h1>
        <NavLink to={"/admin/fiscalias"} className="btn btn-sm  btn-dark">
          Regresar
        </NavLink>
        <form
          onSubmit={this.modificarFiscalia}
          style={{ width: "50%", margin: "auto" }}
        >
          <label>Número: </label>
          <input
            type="number"
            name="cajanum"
            className="form-control"
            ref={this.cajaNumRef}
            value={id}
            readOnly
          />
          <label>Nombre: </label>
          <input
            type="text"
            name="cajanom"
            className="form-control"
            ref={this.cajaNomRef}
          />
          <label>Direccion: </label>
          <input
            type="text"
            name="cajadir"
            className="form-control"
            ref={this.cajaDirRef}
          />
          <label>Telefono: </label>
          <input
            type="text"
            name="cajatel"
            className="form-control"
            ref={this.cajaTelRef}
          />
          <br />
          <button className="btn btn-success">Modificar</button>
        </form>
      </div>
    );
  }
}

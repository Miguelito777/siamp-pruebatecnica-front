import React, { Component } from "react";
import axios from "axios";
import Global from "../../Global";
import { Redirect } from "react-router-dom";
export default class InsertarFiscalia extends Component {
  cajaNumRef = React.createRef();
  cajaNomRef = React.createRef();
  cajaDirRef = React.createRef();
  cajaTelRef = React.createRef();

  state = { status: false };

  nuevaFiscalia = (e) => {
    e.preventDefault();
    var nom = this.cajaNomRef.current.value;
    var dir = this.cajaDirRef.current.value;
    var cla = this.cajaTelRef.current.value;
    var fisc = {
      FISCALIA: nom,
      DIRECCION: dir,
      TELEFONO: cla,
      LATITUD: "34234234",
      LONGITUD: "-324234324",
    };
    var url = Global.urlfiscalias + "fiscalia";
    axios.post(url, fisc).then((res) => {
      console.log(res);
      this.setState({ status: true });
    });
  };

  render() {
    if (this.state.status === true) {
      return <Redirect to="/admin/fiscalias" />;
    }
    return (
      <div>
        <h1>Nueva Fiscalia</h1>
        <form
          onSubmit={this.nuevaFiscalia}
          style={{ width: "50%", margin: "auto" }}
        >
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
          <label>Teléfono: </label>
          <input
            type="text"
            name="cajatel"
            className="form-control"
            ref={this.cajaTelRef}
          />
          <br />
          <button className="btn btn-success">Añadir</button>
        </form>
      </div>
    );
  }
}

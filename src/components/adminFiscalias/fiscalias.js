import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { NavLink } from "react-router-dom";

export default class Peliculas extends Component {
  state = {
    fiscalias: [],
    status: false,
  };
  cargarFiscalias = () => {
    var url = Global.urlfiscalias;
    var request = "fiscalia";
    axios.get(url + request).then((res) => {
      this.setState({
        fiscalias: res.data,
        status: true,
      });
    });
  };

  componentDidMount = () => {
    this.cargarFiscalias();
  };
  render() {
    return (
      <div>
        <h1>Fiscalias</h1>
        <table className="table table-striped">
          <thead className="table thead-light">
            <tr>
              <th>Código Fiscalia</th>
              <th>Nombre</th>
              <th>Direccion</th>
              <th>Telefono</th>
              <th>Modificar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody className="table-striped">
            {this.state.status === true &&
              this.state.fiscalias.map((fisc, i) => {
                return (
                  <tr key={i}>
                    <td>{fisc.id}</td>
                    <td style={{ fontWeight: "bold" }}>{fisc.FISCALIA}</td>
                    <td>{fisc.DIRECCION}</td>
                    <td>{fisc.TELEFONO}</td>
                    <td>
                      <NavLink to={"/admin/update/" + fisc.id}>
                        Modificar
                      </NavLink>
                    </td>
                    <td>
                      <NavLink to={"/admin/delete/" + fisc.id}>
                        Eliminar
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

import React, { Component } from "react";
import axios from "axios";
import Global from "./../../Global";
import { Redirect, NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export default class DelFiscalia extends Component {
  static propTypes = {
    id: PropTypes.object.isRequired,
  };
  state = { status: false };

  eliminarFiscalia = () => {
    var request = "fiscalia/" + this.props.id;
    var url = Global.urlfiscalias + request;
    axios.delete(url).then((res) => {
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
        <br />
        <h1 style={{ color: "red" }}>¿Desea eliminar la Fiscalia {id}?</h1>
        <br />
        <NavLink to="/admin/fiscalias" className="btn btn-light">
          Cancelar
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.eliminarFiscalia} className="btn btn-danger">
          Eliminar
        </button>
      </div>
    );
  }
}

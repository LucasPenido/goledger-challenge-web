import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { cpfMask } from '../../mask/cpfMask';
import './AeronautInfoPage.css';

class AeronautInfoPage extends Component {
  state = {
    index: '',
    operadorAereo: [],
    operator: '',
    pilots: []
  }

  componentDidMount() {
    const headers = {
      Authorization: `Bearer ${this.props.token}`
    };
    let url = 'http://ec2-18-223-158-118.us-east-2.compute.amazonaws.com:3000/api/mainchannel/airlog-backend/Aeronauta?resolve=true';
    axios.get(url, {
      headers
    })
    .then(response => {
      let data = response.data.response;
      this.setState({pilots: data});
      let temp = [];

      data.forEach((aeronauta) => {
        temp.push(aeronauta.operadorAereoRef.nome)
      })

      // remove duplicated operators.
      temp = [...new Set(temp)];
      temp.sort();

      this.setState({operadorAereo: temp})
    })
    .catch(err => {
      console.log(err.data);
    });
  }

  render() {

    const tableLines = pilot => {
      if (pilot.operadorAereoRef.nome === this.state.operator) {
        return (
          <tr key={pilot.nome}>
            <td>{pilot.nome}</td>
            <td>{cpfMask(pilot.cpf)}</td>
            <td>{pilot.canac}</td>
          </tr>
        )
      } else {
        return null;
      }
    }

    const selectionHandler = event => {
      this.setState({operator: event.target.value})
    }

    if (this.state.operadorAereo.length === 0) {
      return (
        <div className="pilot-page">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }

    return (
      <div className="pilot-page">
        <form style={{marginBottom: '5vh'}}>
          <h3>Lista de pilotos</h3>
          <div className='select-bar'>
            <select className="form-control select2" onChange={selectionHandler}>
              <option hidden>Selecione uma copanhia aérea</option>
              {
                this.state.operadorAereo.map((op) => {
                  return <option key={op}>{op}</option>
                })
              }
            </select>
          </div>
        </form>
        {
          this.state.operator ? (
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Nome</th>
                  <th scope="col">CPF</th>
                  <th scope="col">CANAC</th>
                </tr>
              </thead>
              <tbody>
                {this.state.pilots.map(tableLines)}
              </tbody>
            </table>
          ) : (
            null
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.auth.token
  };
};

export default connect( mapStateToProps )( AeronautInfoPage ) ;

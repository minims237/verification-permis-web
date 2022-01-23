import { inject, observer } from "mobx-react";
import { Component } from "react";
import { Col, Form, Table } from "react-bootstrap";
import "./formulaire.css";
import { CreateUserStore } from "./stores/CreateUser.store";
import { UsersStore } from "./stores/user.store";
import tof from "../src/const/m.jpeg";
import axios from "axios";
import SearchB from "./component/SearchB";
import { Link } from "react-router-dom";
interface MyProps {
  userStore?: UsersStore;
  createUserStore?: CreateUserStore;
}
@inject("userStore", "createUserStore")
@observer
class Formulaire extends Component<MyProps> {
  async componentDidMount() {
    await this.props.userStore!.getUsers();
  }
  state = {
    nom: "",
    categorie: "",
    statut: "",
    date1: "a",
    date2: "",
    date3: "",
    photo: tof,
    numero: "",
    user: this.props.userStore!.users,
    fileSelected: null,
    search: "",
  };
  search = (e: any) => {
    console.log("a chercher:", this.state.user);
    const users = this.props.userStore!.users;
    const updateUsers = users.filter((us: { nom: string | any[] }) =>
      us.nom.includes(e)
    );
    this.setState({ search: e, user: updateUsers });
  };
  onFileChange = (event: any) => {
    this.setState({ photo: event.target.files[0] });
  };
  handUpload() {
    const data = new FormData();
    data.append("file", this.state.photo);
    axios.post("https://v2.convertapi.com/upload ", data, {}).then((res) => {
      console.log(res.statusText);
    });
  }
  async save() {
    console.log("envoie des donnees");
    this.handUpload();
    await this.props.createUserStore!.NewUser(
      this.state.nom,
      this.state.categorie,
      this.state.statut,
      this.state.date1,
      this.state.date2,
      this.state.date3,
      this.state.photo,
      this.state.numero
    );
    await this.props.userStore!.getUsers();
    console.log("fin");
  }
  render() {
    return (
      <div className="contener container">
        <Col lg={8} md={4}>
          {" "}
          <div className="lien">
            <Link to="liste">
              <p>verifier un numero</p>
            </Link>
          </div>
        </Col>

        <Col lg={8} md={4}>
          <Form>
            <Form.Group className="mb-3">
              <div className="groupInput">
                <Form.Label className="labelSpace">Nom complet</Form.Label>
                <Form.Control
                  type="text"
                  className="champInput"
                  onChange={(event) =>
                    this.setState({ nom: event.target.value })
                  }
                ></Form.Control>
              </div>
              <div className="groupInput">
                <Form.Label className="labelSpace">Numero</Form.Label>
                <Form.Control
                  type="text"
                  className="champInput"
                  onChange={(event) =>
                    this.setState({ numero: event.target.value })
                  }
                ></Form.Control>
              </div>
            </Form.Group>
            {console.log(this.state.nom)}
            <Form.Group className="mb-3">
              <div className="groupInput">
                <Form.Label className="labelSpace">Categorie</Form.Label>
                <Form.Control
                  type="text"
                  className="champInput"
                  onChange={(event) =>
                    this.setState({ categorie: event.target.value })
                  }
                ></Form.Control>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="groupInput">
                <Form.Label className="labelSpace">Statut</Form.Label>
                <Form.Control
                  type="text"
                  className="champInput"
                  onChange={(event) =>
                    this.setState({ statut: event.target.value })
                  }
                ></Form.Control>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="groupInput">
                <Form.Label className="labelSpace">Date 1</Form.Label>
                <Form.Control
                  type="date"
                  className="champInput"
                  onChange={(event) =>
                    this.setState({ date1: event.target.value })
                  }
                ></Form.Control>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="groupInput">
                <Form.Label className="labelSpace">Date 2</Form.Label>
                <Form.Control
                  type="date"
                  className="champInput"
                  onChange={(event) =>
                    this.setState({ date2: event.target.value })
                  }
                ></Form.Control>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="groupInput">
                <Form.Label className="labelSpace">Date 3</Form.Label>
                <Form.Control
                  type="date"
                  className="champInput"
                  onChange={(event) =>
                    this.setState({ date3: event.target.value })
                  }
                ></Form.Control>
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <div className="groupInput">
                <Form.Label className="labelSpace">
                  Ajouter une photo
                </Form.Label>
                <Form.Control
                  type="file"
                  className="champInput"
                  onChange={(e) => this.onFileChange(e)}
                ></Form.Control>
              </div>
            </Form.Group>
            {console.log(this.state.photo)}
            <Form.Group className="mb-3">
              <div className="groupInput">
                <Form.Control
                  type="submit"
                  className="champInput"
                  onClick={() => {
                    this.save();
                  }}
                ></Form.Control>
              </div>
              <div className="Space">
                
                </div>
            </Form.Group>
          </Form>
        </Col>
      </div>
    );
  }
}

export default Formulaire;

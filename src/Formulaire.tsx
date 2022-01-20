import { inject, observer } from "mobx-react";
import { ChangeEvent, Component } from "react";
import { Button, Form } from "react-bootstrap";
import "./formulaire.css";
import { CreateUserStore } from "./stores/CreateUser.store";
import { UsersStore } from "./stores/user.store";
import tof from "../src/const/m.jpeg";
import axios from "axios";
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
    user: this.props.userStore!.users,
    fileSelected: null,
  };

  onFileChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    this.setState({ photo: event.target.baseURI });
  }
  handUpload() {
    let file = this.state.photo;
    let formdata = new FormData();
    formdata.append("image", file);
    formdata.append("name", "photo de profil");

    axios({
      url: `/some/api`,
      method: "POST",
      headers: {
        authorization: `your token`,
      },
      data: formdata,
    }).then(
      (res) => {},
      (err) => {}
    );
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
      this.state.photo
    );
    console.log("fin");
  }
  render() {
    return (
      <div className="contener">
        <Form>
          <Form.Group className="mb-3">
            {this.props.userStore!.users.map((item: any) => (
              <div>
                <table className="table">
                  <tr className="tr">
                    <td>rien</td>
                    <td>{item.nom}</td>
                  </tr>
                </table>
                <p></p>
              </div>
            ))}
          </Form.Group>
          <Form.Group className="mb-3">
            <div className="groupInput">
              <Form.Label className="labelSpace">Nom complet</Form.Label>
              <Form.Control
                type="text"
                className="champInput"
                onChange={(event) => this.setState({ nom: event.target.value })}
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
              <Form.Label className="labelSpace">Ajouter une photo</Form.Label>
              <Form.Control
                type="file"
                className="champInput"
                onChange={(e) => this.onFileChange(e)}
              ></Form.Control>
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            {console.log(
              this.state.categorie,
              this.state.nom,
              this.state.photo,
              this.state.date1,
              "la valeur du npm",
              this.state.user.nom
            )}
            <div className="groupInput">
              <Button
                className="champInput bns"
                variant="primary"
                onClick={() => {
                  this.save();
                }}
              >
                enregistre{" "}
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Formulaire;

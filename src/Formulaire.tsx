import { inject, observer } from "mobx-react";
import { Component } from "react";
import { Button, Form } from "react-bootstrap";
import "./formulaire.css";
import { UsersStore } from "./stores/user.store";
interface MyProps {
userStore?:UsersStore
}
@inject('userStore')
@observer
class Formulaire extends Component<MyProps> {
  state = {
    nom: "",
    categorie: "",
    statut: "",
    date1: "a",
    date2: "",
    date3: "",
    photo: "",
    user:this.props.userStore!.users,
  };
  componentDidMount=async()=>{
  
    let promess = new Promise((resolve,reject)=>{
      resolve(  this.props.userStore!.getUsers())
    })
  } 

  handleChange(event: any) {
    this.setState({
      nom: event.target.value,
    });

    
  }
  async save(){
   await this.props.userStore!.NewUser(
     this.state.nom,
     this.state.categorie,
     this.state.statut,
     this.state.date1,
     this.state.date2,
     this.state.date3,
     this.state.photo
   )
  }
  render() {
    return (
      <div className="contener">
        <Form>
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
                onChange={(event) =>
                  this.setState({ photo: event.target.value })
                }
              ></Form.Control>
            </div>
          </Form.Group>
          <Form.Group className="mb-3">
            {
              console.log(this.state.categorie,this.state.nom,this.state.photo, this.state.date1,"la valeur du npm",this.state.user,)
            }
            <div className="groupInput">
              <Button className="champInput bns" variant="primary" onClick={()=>{
                return this.save();
              }}>
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

import { inject, observer } from "mobx-react";
import { Component } from "react";
import { Alert, Button, Col, Form, Table } from "react-bootstrap";
import "./formulaire.css";
import { CreateUserStore } from "./stores/CreateUser.store";
import { UsersStore } from "./stores/user.store";
import tof from "../src/const/m.jpeg";
import axios from "axios";
import SearchB from "./component/SearchB";
interface MyProps {
  userStore?: UsersStore;
  createUserStore?: CreateUserStore;
}
@inject("userStore", "createUserStore")
@observer
class Liste extends Component<MyProps> {
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
    user: [],
    fileSelected: null,
    search:"",
    alert:false
  };
  search = (e: any)=>{ console.log("a chercher:",this.state.user)
    const users= this.props.userStore!.users
    const updateUsers = users.filter((us: { numero: string | any[]; })=>us.numero==e)
    this.setState({search:e, user: updateUsers})
  }
  recherche=()=>{
    if(this.state.user=[]){
      alert("tableau vide")
    }else{
      this.search(this.state.search);
    }
  }
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
    const voir=this.props.userStore!.users;
    return (
      
      <div className="contener container">
        <div className="header">
          <div>
        <Form.Group className="mb-3 barC">
          <div className="groupInput">
            <Form.Control
              type="text"
              className="champInput"
              placeholder="Numero"
              onChange={(event) =>
                this.setState({search: event.target.value })
              }
            ></Form.Control>
          </div>
          {console.log(this.state.search)}
          <div className="groupInput">
            <Button
              type="submit"
              className="champInput"
            
              onClick={() => {
                this.search(this.state.search)
              }}
            >Recherche</Button>
          </div>
        </Form.Group>
      </div>
          
        </div>
     
          {this.state.user.map((item: any) => (
            <div className="card">
              <div className="tr">
                <img src={item.photo} />
              </div>
              <div className="List">
                <div className="ListItem">
                  <p>nom</p>
                  <h4> {item.nom}</h4>
                </div>
                <div className="ListItem blockI">
                  <div className="ListItem ">
                    <p>date 1</p>
                    <h4>{item.date1}</h4>
                  </div>
                  <div className="ListItem esp">
                    <p>statut</p>
                    <h4>{item.statut}</h4>
                  </div>
                </div>
                <div className="ListItem">
                  <p>numero</p>
                  <h4>{item.numero}</h4>
                </div>
                <div className="ListItem ">
                  <p>date 2</p>
                  <h4>{item.date2}</h4>
                </div>
                <div className="ListItem blockI">
                  <div className="ListItem ">
                    {" "}
                    <p>date 3</p>
                    <h4>{item.date3}</h4>
                  </div>
                  <div className="ListItem esp">
                    <p>categorie</p>
                    <h4>{item.categorie}</h4>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
    );
  }
}

export default Liste;

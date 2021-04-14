import React,{useState} from 'react'
import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;

export function refreshPage() {
  window.location.reload(false);
}
const cata = JSON.stringify(localStorage.getItem('data'));
class Display extends React.Component {
    constructor(props){

   super(props);
   this.deleteLead = this.deleteLead.bind(this)
    }
    state = {
        users: []
    }
    
   
    
    MarkUpdate=(id,message)=> {
      const result = window.prompt("Mark your Communication",message);
        let userObject = {
            communication: result
        
        };
     
           
      axios.put(`${API_URL}/api/mark_lead/${id}`, userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState ({
            communication : " "

        })
        setTimeout(refreshPage, 700)
    }  
  
    deleteLead(id) {
      axios.delete(`${API_URL}/api/leads/${id}`)
          .catch(err => console.warn(err));
         
        }
componentDidMount() {
        const url = `${API_URL}/api/leads/`;
        axios.get(url).then(response => response.data)
        .then((data) => {
          this.setState({ users: cata })
          console.log(this.state.users)
          
         })
      } 
    render() {
        return ( 
                      <div className="container">
              <div className="py-4">
                <h1></h1>
                <table class="table border shadow">
                  <thead class="thead-dark">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">City</th>
                      <th scope="col">Country</th>
                      <th scope="col">Developer Type</th>
                      <th scope="col">Balance</th>
                      <th>Rating</th>
                    </tr>
                  </thead>
                  <tbody>
               
                  {this.state.users.map((cata) => (
                      <tr>
                        {/* <th scope="row">{user + 1}</th> */}
                        <td>{cata.key.first_name}</td>
                  <td></td>
                        <td></td>
                  <td></td>
                  <td></td>
                        <td> </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          );}}
export default Display
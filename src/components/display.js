import React,{useState} from 'react'
import axios from 'axios';
// const API_URL =2.5;

export function refreshPage() {
  window.location.reload(false);
}
const cata = JSON.stringify(localStorage.getItem('data'));
class Display extends React.Component {
    constructor(props){

   super(props);

    }
    state = {
        users: []
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
                      <th scope="col">State</th>
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
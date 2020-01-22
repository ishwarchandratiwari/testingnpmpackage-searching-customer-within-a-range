import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

import filterCustomer from 'searching-customer-within-a-range';


export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       list:'',
       load:true
    }
  }
  
    componentDidMount(){
      filterCustomer.searchingCustomers().catch((err) => {
      console.log(`Error received: `, err.message);
    }).then((eligibleCustomers) => {
      // console.log(eligibleCustomers);
      if(eligibleCustomers){
        this.setState({
          list:eligibleCustomers,load:false
        })
      }
    });
    }
  render() {
    // console.log()
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
           {
            this.state.load?
            <h1>Loading...</h1>
            :
            <table className='well card panel'>
            <tr>
              <th>Name</th>
              <th>User Id</th>
            </tr>
                  {
                    (this.state.list.length) && this.state.list.map((d,i)=>{
                      return (
                        <tr key={i}>
                        <td>
                        <b></b>{d.name}
                        </td>
                        <td>
                        <b></b>{d.user_id}
                        </td>
                        </tr>
                      )
                    })
                    
                  }
            </table>

            }
        </header>
      </div>
    );
  }
}



export default App



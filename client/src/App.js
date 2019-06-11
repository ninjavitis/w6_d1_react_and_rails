import React from 'react';
import axios from 'axios'
import {Container, Header} from 'semantic-ui-react'
import MenuForm from './Components/MenuForm'
import MenuList from './Components/MenuList'


class App extends React.Component{

  state = {menus:[], edit:false}

  componentDidMount(){
    axios.get("/api/menus")
    .then( res => {
      this.setState({menus:res.data})
    })
  }

  addMenu=(name)=>{
    axios.post('/api/menus', {name})
    .then(res =>{
      const {menus,} = this.state;
      this.setState({ menus:[...menus, res.data],})
    })
  }

  UpdateMenu=(id)=>{}

  deleteMenu=(id)=>{
    axios.delete(`/api/menus/${id}`)
    .then( res => {
      const {menus} = this.state;
      this.setState({menus:menus.filter( t => t.id !== id),})
    })
  }

  render(){
    return(
      <Container style={{padding:"30px 0"}}>
        <Header as="h1">Ma Fratellis Restaurant</Header>
        <br/>
        <MenuForm addMenu={this.addMenu}></MenuForm>
        <br/>
        <br/>
        <MenuList 
          menus={this.state.menus}
          updateMenu={this.updateMenu}
          deleteMenu={this.deleteMenu}
          /> 
        </Container>
    )
  }
}

export default App;

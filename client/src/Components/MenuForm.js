import React from 'react'
import {Form, Button} from 'semantic-ui-react'


class MenuForm extends React.Component{

  state = {name:""}

  handleChange=(e)=>{
    this.setState({name:e.target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    this.props.addMenu(this.state.name)
    this.setState({name:""})
  }

  render(){
    return(
      <div>
      <Form >
        <Form.Input
        label="Menu"
        placeholder={this.state.name}
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
      <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
      </div>

    )
  }
}

export default MenuForm
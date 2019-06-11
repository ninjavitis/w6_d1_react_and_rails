import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Header, Button, Icon, Table} from "semantic-ui-react"
import ItemForm from './ItemForm'
import ItemList from './ItemList'


const Item =({id, name, updateItem, deleteItem})=>{
  const [edit, setEdit] = useState(false);
  const [items, setItems]= useState([]);

  useEffect(()=>{
    axios.get(`/api/menu/${this.id}/items`)
    .then( res => {
      setItems(res.data)
    })
  })

  // addItem=(name)=>{
  //   axios.post(`/api/menu/${this.id}`, {name})
  //   .then(res =>{
  //     setItems([...items,res.data])
  //   })
  // }

  // UpdateItem=(id)=>{}

  deleteItem=(id)=>{
    axios.delete(`/api/menu/${this.id}/item/${id}`)
    .then( res => {
      const {menus} = this.state;
      this.setState({menus:menus.filter( t => t.id !== id),})
    })
  }


  return(
    <>
      <Table.Row>
        <Table.Cell>
          <Button
            icon
            color="red"
            size="tiny"
            onClick={()=> deleteItem(id)}
            style = {{marginLeft:"15px"}}
            >
            <Icon name="trash"/>
          </Button>
          <Button
            icon
            color="blue"
            size="tiny"
            onClick={()=> setEdit(!edit)}
            style = {{marginLeft:"15px"}}
            >
            <Icon name="pencil"/>
          </Button>
        </Table.Cell>
        <Table.Cell>
          {edit? <ItemForm/> : name}
        </Table.Cell>
      </Table.Row>
      
      {items.map( item => 
        <Item
          key={item.id}
          {...item}
          updateItem={updateItem}
          deleteItem={deleteItem}
        />
      )}
    </>
  )
}

export default Item
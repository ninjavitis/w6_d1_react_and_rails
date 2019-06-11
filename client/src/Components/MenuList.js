import React from 'react'
import Menu from './Menu'
import {Header, Button, Icon, Table} from "semantic-ui-react"



const MenuList = ({editFlag,menus, updateMenu, deleteMenu}) => (
  <Table>
    <Table.Body>
    {menus.map( menu => 
      <Menu
        key={menu.id}
        {...menu}
        updateMenu={updateMenu}
        deleteMenu={deleteMenu}
        editFlag={editFlag}
      />
    )}
    </Table.Body>
  </Table>
)

export default MenuList
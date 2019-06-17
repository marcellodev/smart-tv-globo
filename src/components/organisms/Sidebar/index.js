import React from 'react'
import ReactSVG from 'react-svg'

import {
  Wrapper,
  List,
  Item,
  Text,
} from './styled';

class Sidebar extends React.Component  {
  
  render () {
    return(
      <Wrapper>
        <List>
          {this.props.data.menu.map((item, key)=> {
            return(
              <Item className={`item-menu item-menu-${key}`} key={key} data-key={key}>
                <ReactSVG src={item.icon} />
                <Text>{item.text}</Text>
              </Item>
            )
          })}
        </List>
      </Wrapper>
    )
  }    
}
export default Sidebar
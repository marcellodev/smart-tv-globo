import React from 'react'
import ReactSVG from 'react-svg'
import '../../../function.js'
import {
    Main,
    Button,
} from './styled';

const Details = (props) => {
    const infs  = props.infs;
    return(
    <Main className={`details`}>
        {
            infs.logo &&
            <img src={infs.logo} alt="Logo BBB19"/>
        }
        {
            infs.category &&
            <h1>Big Brother Brasil</h1>
        }
        <h2>{infs.title}</h2>
        <div>
        {
            infs.links &&
            infs.links.map((item, key)=> {
                return(
                    <Button key={key} className={`details-item-${key}`}>
                        {
                            item.icon &&
                            <ReactSVG src={item.icon} wrapper="span"/>
                        }
                        {item.name}
                    </Button>
                )
            })
        }
        </div>
    </Main>
    )
}

export default Details
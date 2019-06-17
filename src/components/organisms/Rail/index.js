import React from 'react'
import ReactSVG from 'react-svg'

import Details from '../../molecules/Details';
import { HeroNavigation } from '../../../function'

import {
	Button,
	Main,
	ItemButton,
	Lista,
	Item,
	Container
} from './styled';

class Rail extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
			infs: this.props.data.home[0],
			itemsRail: 0
		};
		this.onFocusHandler = this.onFocusHandler.bind(this);
		this.onKeyUpHandler = this.onKeyUpHandler.bind(this);
	}
	
	onFocusHandler(key) {
		const positionMap = key.target.getAttribute("data-key")
		const dataBack = key.target.getAttribute("data-img")
		this.setState({ infs: this.props.data.items[positionMap] })
		document.querySelector("main").style.background = "linear-gradient(to left, rgba(255,0,0,0), rgba(0,0,0,1)), url('"+dataBack+"')";
		document.querySelector("main").style.backgroundSize  = "cover";
		document.querySelector("main").style.backgroundPosition  = "center";
	}
	onKeyUpHandler(key){
		if(key.nativeEvent.key === "ArrowUp"){
			document.querySelector("main").style.background = "linear-gradient(to left, rgba(255,0,0,0), rgba(0,0,0,1)), url('"+this.props.data.home[0].hero+"')";
			document.querySelector("main").style.backgroundSize  = "cover";
			document.querySelector("main").style.backgroundPosition  = "center";
			this.setState({ infs: this.props.data.home[0] })
			setTimeout(
				function() {
					HeroNavigation()
				}.bind(this),30
		);
			
		}
	}

	render() {
		
		return(
			<Main className="rail">
				<Details infs={this.state.infs}/>
				<Container>
					<Lista>
					{this.props.data.items.map((item, key)=> {
						return(
							<Item key={key}>
								<Button 
									data-key={key} 
									data-img={`img/${item.thumb}`} 
									className={`rail-${key}`} 
									img={`img/${item.thumb}`} 
									onFocus={this.onFocusHandler} 
									onKeyUp={this.onKeyUpHandler}
								>
									<ItemButton transform="uppercase">{item.category}</ItemButton>
									<ItemButton font="20px">{item.title}</ItemButton>
									<div className="iconActive">
										<ReactSVG src="icons/play.svg"/>  
									</div>
								</Button>
							</Item>
						)
					})}
					</Lista>
				</Container>
			</Main>
		)
	}
}

export default Rail

import styled from 'styled-components'

export const Wrapper = styled.section`
	background-color: #000;
	position:fixed;
	left:0;
	right:0;
	height:100%;
	width: 69px;
	overflow:hidden;
	display: flex;
	-webkit-transition-duration: .5s;
	transition-duration: .5s;
	-webkit-transition-property: width;
	transition-property: width;
	z-index:9;
	span {
		opacity: 0;
		transition-duration: .5s;
		transition-property: opacity;
	}
	&:focus-within {
		width: 197px;
		transition-duration: .5s;
		z-index:9;
		span {
			opacity: 1;
			transition-duration: .5s;
			transition-property: opacity;
		}
  	}
`
export const List = styled.div`
	text-decoration: none;
	list-style:none;
	margin: auto 0;
`
export const Item = styled.button`
	display: flex;
	padding: 30px 24px;
	background:transparent;
	border:none;
	min-width:197px;
	outline: none;
	svg{
		fill: #fff;
		width:20px;
		height: 20px;
	}
	&.item-menu-2{
		svg{
			fill: #fff;
			width:23px;
			height: 20px;
		}
	}
	
	&:focus{
		background:#fff;
		color:#000000;
		span{
			color:#000000;
		}
		svg{
			fill: #000;
		}
	}
`
export const Text = styled.span`
	color:#fff;
	margin-left: 30px;
`
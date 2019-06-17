import styled from 'styled-components'

export const Main = styled.div`
    margin-left: 100px;
`
export const Container = styled.div`
    width:100%;
    height:160px;
    position:relative;
    overflow:hidden;
`
export const Lista = styled.ul`
    position: absolute;
    width: ${props => props.width ? props.width : '2000px'};
`
export const Item = styled.li`
    list-style:none;
    display: inline-flex;
`

export const Button = styled.button`
    background:  linear-gradient(transparent, rgb(60, 60, 60)), url(${props => props.img});
    background-size:cover;
    background-position:center;
    margin-right: 15px;
    min-width: 280px;
    height:160px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    position: relative;
    padding: 15px;
    .iconActive{
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
            opacity:0;
            width: 69px;
            color: rgba(255, 255, 255, 0.6);
            transition-duration: .5s;
        }
    }
    &:focus{
        span{
            opacity:0;
            transition-duration: .5s;
        }
        .iconActive{
            svg{
                opacity:1;
                transition-duration: .5s;
            }
        }
    }
`

export const ItemButton = styled.span`
    transition-duration: .5s;
    color: #fff;
    font-size: ${props => props.font ? props.font : '12px'};
    text-transform: ${props => props.transform ? props.transform : 'none'};
    display:block;
    text-align:left;
`

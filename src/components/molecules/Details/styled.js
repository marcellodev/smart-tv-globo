import styled from 'styled-components'

export const Main = styled.div`
    min-height:45vh;
    max-width: 538px;
    & > div{
        display: flex;
        margin: 40px 0 80px;
        z-index:1;
    }
    img{
        width:150px;
        margin:150px 0 40px;
    }
    h1{
        font-size: 24px;
        color: #fff;
        padding: 130px 0 40px 0;
    }
    &.Realities{
        h2{
            font-size: 45px;
        }
    }
    h2{
        font-size: 32px;
        color:#fff;
        font-weight:400;
    }
`
export const Button = styled.button`
    position:relative;
    background: transparent;
    color:#fff;
    outline: none;
    border-radius: 3px;
    border: 1px solid #fff;
    font-size: 20px;
    margin-right:12px;
    padding:8px 16px;
    transition-duration: .5s;
    display: inline-flex;
    align-items: center;
    span{
        width:20px;
        svg{
            width: 20px;
            display: flex;
        }
    }
    
    &:focus{
        transition-duration: .5s;
        transform: scale(1.1);
        background: #fff;
        div{
            svg{
                fill: #000;
                color: #000;
                margin-right: 5px;
            }
        }
        
        color: #000;
    }
`
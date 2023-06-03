import React from "react";
import './Styled.css'

class Card extends React.Component{
    render(){
        return(
            <div className="container">
                <img className="img" src={this.props.scr} alt="" />
                <h2 className="title">{this.props.title} </h2>
            </div>
        )
    }
}
export default Card 
import React, {Component} from 'react';

const imgStyle = {
        height: "30px",
}

const style = {
    width: "800px",
    margin: 'auto'
}

const containerStyle = {
    backgroundColor: "white",
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    marginBottom: "30px",
    marginTop: "30px",
    padding: "20px"
}

class UserDescription extends Component {
    render() {
        return (
            <div style={containerStyle}> 
                <div style={style}>
                    <h2>User description</h2>
                    <img style={imgStyle} src={this.props.img} alt="user image"/>
                    <p>Name:{this.props.name}</p>
                    <p>Description:{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default UserDescription;
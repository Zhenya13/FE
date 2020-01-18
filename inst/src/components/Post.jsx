import React, {Component} from 'react';

class Post extends Component {
    style = {
        margin: '30px',
        padding: '30px',
        backgroundColor: "white",
        boxShadow: '0 0 10px rgba(0,0,0,0.5)', /* Параметры тени */
    };
    render() {
        return (
            <div style={this.style} onClick={() => this.props.likeHandle(this.props.id)}>
                <img src={this.props.img} alt=""/>
                <p>Description: {this.props.description}</p>
                <p>Likes: {this.props.likes.length}</p>
            </div>
        );
    }
}

export default Post;
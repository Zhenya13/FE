import React, {Component} from 'react';
import Post from "./Post";

const style = {
    width: '900px',
    margin: 'auto'
};

class PostsContainer extends Component {
    render() {
        return (
            <div style={style}>
                <h2>Posts</h2>
                <div>
                    {this.props.posts.map(post => {
                        return (
                            <Post likeHandle={this.props.likeHandle} id={post.id} img={post.img} description={post.description} likes={post.likes}/>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default PostsContainer;
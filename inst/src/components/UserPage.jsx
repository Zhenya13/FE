import React, {Component} from 'react';
import UserDescription from "./UserDescription";
import PostsContainer from "./PostsContainer";

class UserPage extends Component {
    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div>
                {this.props.userInfo ?
                    <div>
                        <UserDescription img={this.props.userInfo.img} name={this.props.userInfo.name} description={this.props.userInfo.description}/>
                        <PostsContainer likeHandle={this.props.likeHandle} posts={this.props.userPosts}/>
                    </div>
                    :
                    <h2>Please login to see this page</h2>
                }

            </div>
        );
    }
}

export default UserPage;
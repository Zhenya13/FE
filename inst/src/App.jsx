import React, {Component} from 'react';
import './App.css';
import postsFromJson from './appData/posts.json'
import usersFromJson from './appData/users.json'
import {
    Switch,
    Route,
    withRouter,
} from "react-router-dom";
import UserPage from "./components/UserPage";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import AddPhoto from "./components/AddPhoto";

class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            userLogin: "admin",
            posts: postsFromJson.posts,
            users: usersFromJson.users,
        };
    }

    loginHandle = (login, password) => {
        const userInfo = this.state.users.find(el => el.login === login);
        if (userInfo && userInfo.password === password) {
            this.setState({ userLogin: userInfo.login });
            alert('Success login');
            this.props.history.push("/userPage")
        } else {
            alert('Wrong password or login');
        }
    };

    signUpHandle = (newUser) => {
        if (this.state.users.find(el => el.login === newUser.login)){
            alert('This login is not available');
        } else {
            this.setState((prevState, props) => ({
                users : [...prevState.users, newUser]
            }));
            alert('Success!');
            this.props.history.push("/login")
        }
    };

    addPhotoHandle = (img, description) => {
        this.setState((prevState, props) => ({
            posts : [...prevState.posts, {id: this.newId(), login:prevState.userLogin,img,description,likes:[]}]
        }));
    };

    newId = () => `f${(~~(Math.random()*1e8)).toString(16)}`;

    likeHandle = (postId) => {
        if (this.state.userLogin === '') {
            alert("Login to like this photo");
            return;
        }
        const likesList = this.state.posts.find(el => el.id === postId).likes;
        if (likesList.includes(this.state.userLogin)){
            this.setState((prevState, props) => ({
                posts: prevState.posts.map(el => {
                    if(el.id === postId) {
                        el.likes = el.likes.filter(login => login !== this.state.userLogin);
                        return el;
                    } else {
                        return el;
                    }
                }),
            }));
        } else {
            this.setState((prevState, props) => ({
                posts: prevState.posts.map(el => {
                    if(el.id === postId) {
                        el.likes = [...el.likes, this.state.userLogin];
                        return el;
                    } else {
                        return el;
                    }
                }),
            }));
        }
    };

    render() {
        const userPosts = this.state.posts.filter(el => el.login === this.state.userLogin);
        const userInfo = this.state.users.find(el => el.login === this.state.userLogin);

        return (
                <div className="App">
                    <Navbar userLogin={this.userLogin}/>
                    <Switch>
                        <Route path="/userPage">
                            <UserPage likeHandle={this.likeHandle} userPosts={userPosts} userInfo={userInfo}/>
                        </Route>
                        <Route path="/addPhoto">
                            <AddPhoto addPhotoHandle={this.addPhotoHandle}/>
                        </Route>
                        <Route path="/login">
                            <Login loginHandle={this.loginHandle}/>
                        </Route>
                        <Route path="/signUp">
                            <SignUp signUpHandle={this.signUpHandle}/>
                        </Route>
                        <Route path="/">
                            <Home likeHandle={this.likeHandle} posts={this.state.posts}/>
                        </Route>
                    </Switch>
                </div>
        );
    }
}

export default withRouter(App);

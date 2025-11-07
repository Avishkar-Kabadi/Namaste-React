import { Component } from 'react';

// can use React.Component or Component directly based on import style
class UserClass extends Component {
    constructor(props) {
        super(props)

        // Below is the way to create state variables in Class based components
        // In Class based components all state variables are store in single object
        this.state = {
            count: 0,
            count2: 10
        };
        console.log("Child Constructor");

    }

    componentDidMount() {
        console.log("Child ComponentDidMount");

    }

    render() {
        console.log("Child Render method");

        const { user } = this.props;
        const { count, count2 } = this.state;

        return (
            <div className="user-card">
                <h2>Name:{user.name} </h2>
                <h3>Location: {user.location}</h3>
                <h4><a href={user.html_url}>Contact: {user.html_url} </a></h4>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    });

                    //React recommends using the function form of setState
                    // when updating based on previous state (for safety and performance).
                    this.setState(prevState => ({
                        count2: prevState.count2 + 1
                    }));
                }}>

                    Count Increase
                </button>
                <h4>Count: {count}</h4>
                <h4>Count2: {count2}</h4>


            </div >
        )
    }
}


export default UserClass;


//React recommends using the function form of setState
// when updating based on previous state (for safety and performance).
//  this.setState(prevState => ({
//   count: prevState.count + 1
// }));
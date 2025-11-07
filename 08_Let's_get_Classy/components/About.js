import React from 'react';
import User from "./User";
import UserClass from "./UserClass";





// const About = () => {


//     const [userData, setUserData] = React.useState([]);


//  const fetchUserData = async () => {
//             try {
//                 const result = await fetch("https://api.github.com/users/Avishkar-Kabadi");
//                 const data = await result.json();

//                 this.setState({
//                     userData: data
//                 })
//             } catch (error) {
//                 console.log(error);

//             }
//         }

//         React.useEffect(() => {
//             fetchUserData();
//         }, [])



//     return (
//         <div>
//             <User user={userData} />
//             <UserClass user={userData} />
//         </div>
//     )
// }

class About extends React.Component {
    constructor() {
        super();

        this.state = {
            userData: {}
        }
        console.log("Parent Constructor");

    }

    async componentDidMount() {

        const result = await fetch("https://api.github.com/users/Avishkar-Kabadi");

        const data = await result.json();
        this.setState({
            userData: data
        });
        console.log("Parent DidMount");

        this.timer = setInterval(() => {
            // console.log("Namaste react");
        }, 1000)

    }

    componentDidUpdate(prevState, prevProps) {
        console.log("componentDidUpdate");

    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("ComponentWillUnmount");

    }
    render() {

        console.log("Parent Render");
        const { userData } = this.state;

        return (
            <div>
                <User user={userData} />
                <UserClass user={userData} />
                <UserClass user={userData} />
            </div>
        )
    }
}

export default About;





/*
========================================
🌱 MOUNTING PHASE (When component is created)
========================================

1️⃣ Parent Constructor
    - Called first when the parent component instance is created.
    - Used to initialize local state and bind class methods.

2️⃣ Parent Render
    - Returns the virtual DOM for the parent.
    - Does not yet touch the actual DOM.

    ⬇️ Now React renders all child components ⬇️

    3️⃣ First Child Constructor
        - Initializes child component's state and props.
    4️⃣ First Child Render
        - Returns virtual DOM for first child.

    5️⃣ Second Child Constructor
        - Initializes second child.
    6️⃣ Second Child Render
        - Returns virtual DOM for second child.

    ✅ React now commits all virtual DOM elements to the real DOM.

    7️⃣ First Child componentDidMount
        - Runs once after the first child is mounted.
        - Great place for API calls or setting up event listeners.

    8️⃣ Second Child componentDidMount
        - Same purpose for the second child.

9️⃣ Parent componentDidMount
    - Runs after the parent and all its children are mounted.
    - Commonly used for API calls or parent-level side effects.
*/

/*
========================================
♻️ UPDATING PHASE (When state or props change)
========================================

1️⃣ Parent Render
    - Runs again when parent state or props change.
    - Recalculates virtual DOM.

    ⬇️ Child components are re-rendered if props/state change ⬇️

    2️⃣ First Child Render
    3️⃣ Second Child Render

4️⃣ React compares new vs old virtual DOM (Reconciliation)
    - Updates only the parts that have changed in the real DOM.

5️⃣ Parent componentDidUpdate(prevProps, prevState)
    - Runs after DOM updates.
    - Good for performing side effects based on previous state or props.
*/

/*
========================================
🧹 UNMOUNTING PHASE (When component is removed)
========================================

1️⃣ componentWillUnmount
    - Called just before the component is destroyed and removed from the DOM.
    - Used for cleanup tasks like:
        • Removing event listeners
        • Clearing timers or intervals
        • Cancelling API requests
        • Cleaning up subscriptions

    Example:
    componentWillUnmount() {
        clearInterval(this.timer);
        console.log("Component will unmount");
    }
*/




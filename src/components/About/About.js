import React from "react";
import PageHeader from "../PageHeader/PageHeader";
// import User from "./User";
import UserClass from "./UserClass";
// import User2 from "./UserClass2";
import userContext from "../../utils/UserContext";

// Lets convert functional component to class based component

// Functional Component -

// const About = () => {
//   return (
//     <>
//       <PageHeader title={'About'} />

//       {/* <User username={"John Doe"} role={"Developer"} /> */}

//       <hr></hr>

//       <UserClass username={"Elon Musk"} role={"Businessman"} />
//     </>
//   )
// }


// Class based component -

class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent component Rendered");
    return (
      <>
        <PageHeader title={"About"} />

        <userContext.Consumer>
          { (data) => <h3>{ `From User context ` - data.loggedInUser}</h3>} {/* String interpolation is Javascript. */}
        </userContext.Consumer>

        <UserClass username={"Elon Musk"} role={"Businessman"} />

        {/* <User2 /> */}
      </>
    );
  }
}

export default About;

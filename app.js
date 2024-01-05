const heading = React.createElement("h1", {}, "Hello from React!");
        
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);

const parent = React.createElement("div", {id:'parent'}, React.createElement("div", {}, [
    React.createElement("h1", {}, "I am H1 tag"),
    React.createElement("h2", {}, "I am H2 tag"),
]))

root.render(parent);

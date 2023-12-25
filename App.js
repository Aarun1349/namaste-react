// const heading2 = React.createElement("h1", {id:"heading"}, "Hello world from React!");
// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(heading2);

const parent = React.createElement(
  "div",
  { id: "parent" },
 [ React.createElement("div", { id: "child" }, [
    React.createElement("h1", {id:"heading"}, "Hi I'm H1 Tag"),
    React.createElement("h2", {}, "Hi I'm H2 Tag"),
  ]), React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "Hi I'm H3 Tag"),
    React.createElement("h4", {}, "Hi I'm H4 Tag"),
  ])]
);

const root2 = ReactDOM.createRoot(document.getElementById("root"));
root2.render(parent)

//JSX
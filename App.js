const heading = React.createElement(
  "h1",
  { id: "heading", xyz: "abc" },
  "Hello World From React!!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "Child1" }, [
    React.createElement("h1", { id: "1-h1" }, "H1 tag of first child"),
    React.createElement("h2", { id: "1-h2" }, "H2 tag of first child"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "2-h1" }, "Hi tag of second child"),
    React.createElement("h2", { id: "2-h2" }, "H2 tag of second child"),
  ]),
]);
root.render(parent);

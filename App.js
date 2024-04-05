
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child1"},[
    React.createElement("h1",{},"this is an h1 tag") ,
    React.createElement("h2",{},"this is an h2 tag")
    ]
    ),
    React.createElement("div",{id:"child2"},[
    React.createElement("h1",{},"this is an h1 tag") ,
    React.createElement("h2",{},"this is an h2 tag")
    ]
    )]
);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("header"));
root.render(parent);
// Manipulate the HTML DOM using Javscript
// const heading = document.createElement("h1");
// heading.innerHTML = "Namaste Everyone";
// const root = document.getElementById("root");
// root.appendChild(heading);

// Manipulate the HTML DOM using React

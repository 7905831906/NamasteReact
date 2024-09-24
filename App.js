/**
 * <div id="parent">
 *    <div id="child">
 *      <h1>I am h1 tag </h1>--first children of child
 *      <h2>I am h2 tag </h2>--second one
 *    </div>
 * </div>
 * 
 *ReactElement(Object) => HTML(Browser Understands)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// import React from "react";
// import ReactDOM from "react-dom/client";

// const parent = React.createElement("div", {id:"parent"},
// [
//     React.createElement("div", {id:"chid"},
// [React.createElement("h1", {}, "I am h1 tag"),
// React.createElement("h2", {}, "I am h2 tag")]
// ),
// React.createElement("div", {id:"chid"},
// [React.createElement("h1", {}, "I am h1 tag"),
// React.createElement("h2", {}, "I am h2 tag")]
// )
// ]
// );

//JSX


// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World From React!");
//     // this API need three parameter, first-what element need to create, second-Object, third-what you should show in the element

//     console.log(heading);//returns an object
    //const root = ReactDOM.createRoot(document.getElementById("root"));//ReatDom Library to make root 

    //root.render(heading);//convert this object in heading and put it back in ReactDM.createRoot

    //root.render(parent);// put parent in root/replace what if smething present in root tag

    import React from "react";
    import ReactDOM from "react-dom/client";

    //React Element-
    //React.createElement => React Element-   JS Object => HTMLElement(when render)
    const heading = React.createElement("h1",{id:"heading"},"Namaste React");
    console.log(heading);
     
    //JSX-is not HTML in JavaScript-HTML-like or XML-like syntax
    //JSX is transpiled before it reaches the JS Engine which can be understand by browser & React
    //Tranpiling done by Parcel with the help of Babel
    //JSX => React.createElement => React Element-   JS Object => HTMLElement(when render)
    //Babel - convert JSX To React.createElement
    //const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>//it is not pure javascript
    //const jsxHeading = <h1 className="head">Namaste React using JSX</h1>//it is not pure javascript
    const jsxHeading = (<h1 className="head">
        Namaste React using JSX
        </h1>);
    console.log(jsxHeading);
    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(jsxHeading);
const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World From React!");
    // this API need three parameter, first-what element need to create, second-Object, third-what you should show in the element

    console.log(heading);//returns an object
    const root = ReactDOM.createRoot(document.getElementById("root"));//ReatDom Library to make root 

    root.render(heading);//convert this object in heading and put it back in ReactDM.createRoot
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
 */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "chid"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ]),
    React.createElement("div", {
        id: "chid"
    }, [
        React.createElement("h1", {}, "I am h1 tag"),
        React.createElement("h2", {}, "I am h2 tag")
    ])
]);
//JSX
// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World From React!");
//     // this API need three parameter, first-what element need to create, second-Object, third-what you should show in the element
//     console.log(heading);//returns an object
const root = ReactDOM.createRoot(document.getElementById("root")); //ReatDom Library to make root 
//root.render(heading);//convert this object in heading and put it back in ReactDM.createRoot
root.render(parent); // put parent in root/replace what if smething present in root tag

//# sourceMappingURL=index_2.6bd02f5a.js.map

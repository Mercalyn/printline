function println(printArgs){
    //the idea here is to only need to add one line to html, and adding the rest of the styles and functionality here
    //use println(arguments);
    
    //creation of the element
    var newElement = document.createElement("p");
    
    //adding class to each line so they can be counted to see number of lines using numLines.length
    newElement.className = "printClassLine";
    var numLines = document.getElementsByClassName("printClassLine");
    
    //if loop checks first if numLines has exceeded predetermined amount then shift up
    if(numLines.length > 2){
        numLines[0].outerHTML = "";
    };
    
    //creation and appending actual content
    var newContent = document.createTextNode(printArgs + numLines.length);
    newElement.appendChild(newContent);
    
    
    
    //adding styles to newly created element
    //newElement.style.float = "right";
    newElement.style.position = "absolute";
    newElement.style.right = "0px";
    newElement.style.margin = "5px 0px";
    newElement.style.fontFamily = "verdana, sans-serif";
    newElement.style.color = "gray";

    //because of semantics, need to add an id--and NOT a class!!-- to body before appending a child
    var addIdToBody = document.getElementsByTagName("BODY")[0];
    addIdToBody.setAttribute("id", "bodyId");

    //here we actually add the content inside .bodyClass
    var appendElement = document.getElementById("bodyId");
    appendElement.appendChild(newElement);
    
    
    //for loop so it loops from the first line to the last line and orders them downwards, because bottom aligned text
    for(i = numLines.length; i--; i==0){
        //reversed i is dynamically reversed version of i according to numLines.length
        var reversedi = numLines.length - i - 1;
        
        
        numLines[i].style.bottom = reversedi * 21 + "px";
    };
    // for(i = numLines.length; i--; i==0){
};
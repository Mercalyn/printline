# printline a.k.a. println()
A newer version of my old print() function which now only requires a single line of code to be pasted in the html file.

My current IDE updates in real time except for when the console debug tool is open, so to mitigate this, I've rewritten my old print() function that allows my IDE to show updates made to the html file in real time with a debug console open in the lower right hand corner of the page.

Include <script type="text/javascript" src="print.js"></script> tag in the header. 
Use println(arguments);

One current limitation is that the <p> element is created outside of both head and body tags(but still inside html tags), but it works for simple debug purposes.

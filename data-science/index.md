---
layout: page
title: Data Science | The F# Software Foundation
headline: Using F# for Data Science
---

Data science is the application of statistical analysis, machine learning, data visualization and programming to 
real-world data sources to bring understanding and insight to data-oriented problem domains.

F# is an excellent solution for programmatic data science as it combines efficient execution
with powerful libraries and scalable data integration. [Try F#](http://tryfsharp.org/learn) has sections specific to data science. 

### Base Technologies for F# Data Science

* [Maths and Statistics](/math) packages for F#
* [Data Access](/data-access) packages for F#
* [Data Charting and Visualization](/data-visualization) packages for F#
* [Machine Learning](/machine-learning) tutorials for F#
* [Cloud Programming](/cloud) for cloud-scalable data, compute and messaging frameworks and clients for F#.


### Exploratory Data and Time Series Programming

![logo](/images/thumbs/Deedle.png)&nbsp;[Deedle](http://bluemountaincapital.github.io/Deedle/) is an easy-to-use, high quality 
package for data and time series manipulation and for scientific programming. It supports working with 
structured data frames, ordered and unordered data, as well as time series. Deedle is designed to 
work well for exploratory programming using F# and C# interactive console, but can be also used in 
efficient compiled .NET code. 

* [Understanding the world with F# (article)](http://www.thedevelopermag.com/understanding-world-f/)
* [Understanding the world with F# (video)](http://channel9.msdn.com/posts/Understanding-the-World-with-F)

If you are familiar with the Pandas library from Python or the 'tseries' or 'zoo' packages in R, 
then this package is for you. 

### Interoperability with Excel, R, Python, MATLAB and Mathematica

F# can integrate and interoperate with data-science systems such as 
Microsoft Excel, R, MATLAB, Mathematica and Python. See the sections below:

* [F# with Excel](#excel-interop)
* [F# with R](#r-interop)
* [F# with MATLAB](#matlab-interop)
* [F# with Mathematica](#mathematica-interop)
* [F# with Python](#python-interop)

Many other resources are available for integrating F#, C# and .NET with these systems. If a resource specific
to F# can't be found, then search for C# instead and adjust the technique appropriately.

<a id="excel-interop" > </a>
### F# and Microsoft Excel 

F# can be used in conjunction with Microsoft Excel in a number of interesting ways.

##### Integrating F# and Excel through FCell

[FCell](http://fcell.io) lets you dynamically create Excel Ribbon, Custom Task Panes, and UDFs in F#, C# and VB. 
FCell enables you to type F# directly into the spreadsheet and see your changes at a push of button. 
Code and DLLs are embedded into the workbook and can be emailed to end users as a single spreadsheet. 
Use all of the advanced F# features from Excel. For example, Async and Observables for non-blocking UDFs, WSDL Type Provider for a SOA backed Front Office, R Type Provider for Machine Learning, and the Hive Type Provider for Big Data.

 * [FCell home pages](http://fcell.io/)
 * [FCell features](http://fcell.io/tour.html)

##### Integrating F# and Excel through Excel-DNA

[Excel-DNA](http://excel-dna.net/) is an independent project to integrate .NET into Excel. With Excel-DNA you can make native (.xll) add-ins for Excel using C#, Visual Basic.NET or F#, providing high-performance user-defined functions (UDFs), custom ribbon interfaces 
and more. Your entire add-in can be packed into a single .xll file requiring no installation or registration:

 * [Excel-DNA home pages](http://excel-dna.net/)
 * [Combining F# and Excel using Excel DNA](http://blogs.msdn.com/b/fsharpteam/archive/2013/07/16/combining-f-and-excel-using-excel-dna-some-links.aspx)
 * [Async and event-streaming Excel UDFs with F#](http://excel-dna.net/2013/03/26/async-and-event-streaming-excel-udfs-with-f/)
 * [Machine Learning with Excel: Combine the power of Excel, F# and R](http://luajalla.azurewebsites.net/excel-dna-three-stories/)

##### Interoperating with Excel 

F# can interoperate with Excel through existing Excel APIs. For example:

 * [Plot functions from F# to Excel](http://www.clear-lines.com/blog/post/Plot-functions-from-FSharp-to-Excel.aspx)
 * [Charting with Excel from F#](http://bit.ly/GGv8z4)

There are also some F# versions of Excel functions, useful when migrating code:

 * [Excel Financial Functions for .NET](http://archive.msdn.microsoft.com/FinancialFunctions)


<a id="r-interop" href="#"> </a>

### F# and R

Resources:

 * ![logo](/images/thumbs/FSharpRProvider.png)&nbsp;[R Type Provider for F#](http://bluemountaincapital.github.io/FSharpRProvider) - An F# type provider for higher-fidelity integration between F# and R
 * [R.NET](http://rdotnet.codeplex.com) - Core interoperability component used by the R Type Provider with some F# extensions.

<a id="matlab-interop" > </a>
### F# and MATLAB 

Resources:

 * [MATLAB Type Provider for F#](http://bayardrock.github.io/Matlab-Type-Provider/) - An F# type provider for higher-fidelity integration between F# and MATLAB
 * [Integrating MATLAB with F# and C#](http://www.mathworks.com/matlabcentral/fileexchange/12987) - techniques to call MATLAB from C#, F# and other .NET languages

<a id="python-interop" > </a>
### F# and Python 

Resources:

 * [Python for .NET](http://pythonnet.sourceforge.net/readme.html) - Allows Python to be integrated into F# and C# programs

<a id="mathematica-interop" > </a>
### F# and Mathematica

Resources:

 * [Calling Mathematica from F#](http://reference.wolfram.com/mathematica/NETLink/tutorial/CallingMathematicaFromNET.html) - techniques to call Mathematica from C#, F# and other .NET languages


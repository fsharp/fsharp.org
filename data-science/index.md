---
layout: page
title: Data Science | The F# Software Foundation
headline: Using F# for Data Science
---

Data science brings techinques such as statistical analysis, machine learning, data visualization and programming to 
real-world data sources to bring understanding and insight to data-oriented problem domains.

F# is an excellent solution for programmatic data science as it combines efficient execution
with powerful libraries and scalable data integration. [Try F#](http://tryfsharp.org/learn) has sections specific to data science. 

## Base Technologies

* [Maths and Statistics](/math) packages.
* [Data Access](/data-access) packages.
* [Data Charting and Visualization](/data-visualization) packages.
* [Machine Learning](/machine-learning) tutorials.
* [Cloud Programming](/cloud) for cloud-scalable data, compute and messaging frameworks and clients for F#. 
* [R, MATLAB, Mathematica and Python Integration](#r-matlab-mathematica-python)
* [Excel Integration](#excel)

<a id="r-matlab-mathematica-python" href="#">&nbsp;</a>
## R, MATLAB, Mathematica and Python Integration

F# can integrate with data-science systems such as R, MATLAB, Mathematica and Python. Some specific resources are:

 * [R Type Provider for F#](https://github.com/BlueMountainCapital/FSharpRProvider) - An F# type provider for higher-fidelity integration between F# and R
 * [MATLAB Type Provider for F#](http://bayardrock.github.io/Matlab-Type-Provider/) - An F# type provider for higher-fidelity integration between F# and MATLAB
 * [Python for .NET](http://pythonnet.sourceforge.net/readme.html) - Allows Python to be integrated into F# and C# programs
 * [Integrating MATLAB with F# and C#](http://www.mathworks.com/matlabcentral/fileexchange/12987) - techniques to call MATLAB from C#, F# and other .NET languages
 * [Calling Mathematica from F#](http://reference.wolfram.com/mathematica/NETLink/tutorial/CallingMathematicaFromNET.html) - techniques to call Mathematica from C#, F# and other .NET languages
 
Many other resources are available for integrating F#, C# and .NET with these systems. If a resource specific
to F# can't be found, then search for C# instead and adjust the technique appropriately.


<a id="excel" href="#">&nbsp;</a>
## Integrating F# and Excel 

F# can be used in conjunction with Microsoft Excel(TM) in a number of interesting ways.

#### Integrating F# and Excel through Tsunami-FCell

[Tsunami](http://tsunami.io/) with [FCell](http://www.statfactory.co.uk/fcell-add-in/) enables you to
dynamically extend Excel with new functions, behaviours, and data to create robust workflows and charts:

 * [Tsunami home pages](http://tsunami.io/)
 * [Tsunami videos](http://tsunami.io/media.html) - videos of using Tsunami for Excel charting, Excel UDFs, GPGPU programming in Excel and more

#### Integrating F# and Excel through Excel DNA

[Excel-DNA](http://excel-dna.net/) is an independent project to integrate .NET into Excel. With Excel-DNA you can make native (.xll) add-ins for Excel using C#, Visual Basic.NET or F#, providing high-performance user-defined functions (UDFs), custom ribbon interfaces 
and more. Your entire add-in can be packed into a single .xll file requiring no installation or registration:

 * [Excel-DNA home pages](http://excel-dna.net/)
 * [Combining F# and Excel using Excel DNA](http://blogs.msdn.com/b/fsharpteam/archive/2013/07/16/combining-f-and-excel-using-excel-dna-some-links.aspx)
 * [Async and event-streaming Excel UDFs with F#](http://excel-dna.net/2013/03/26/async-and-event-streaming-excel-udfs-with-f/)

#### Excel as a Charting Engine 

F# interoperate with Excel through standard APIs, e.g. to use Excel as a charting engine:

 * [Plot functions from F# to Excel](http://www.clear-lines.com/blog/post/Plot-functions-from-FSharp-to-Excel.aspx)
 * [Charting with Excel from F#](http://bit.ly/GGv8z4)

#### F# versions of Excel Functions

 * [Excel Financial Functions for .NET](http://archive.msdn.microsoft.com/FinancialFunctions)


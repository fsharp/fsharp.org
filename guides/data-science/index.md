---
layout: default
title: Guide - Data Science | The F# Software Foundation
headline: Guide - Data Science with F#
redirect_from: 
    - /data-science/index.html
    - /data-visualization/index.html
    - /guides/data-visualization/index.html
---

Data science is the application of statistical analysis, machine learning, data visualization and programming to 
real-world data sources to bring understanding and insight to data-oriented problem domains.
F# is an excellent solution for programmatic data science as it combines efficient execution,
REPL-scripting, powerful libraries and scalable data integration. 

As data science employs techniques from many problem domains, numerous base technologies are required. F# has very
strong support for integration with many systems and libraries, both via direct usage of .NET libraries and type providers, which provide interoperability support with Excel, R, Python, MATLAB and Mathematica, and more. For details on 
interoperability with these systems, see:

* [F# with Excel](#excel-interop)
* [F# with R](#r-interop)
* [F# with MATLAB](#matlab-interop)
* [F# with Mathematica](#mathematica-interop)
* [F# with Python](#python-interop)

Many other resources are available for integrating F#, C# and .NET with these systems. If a resource specific
to F# can't be found, then search for C# instead and adjust the technique appropriately.
Data science also requires strong support for many technologies covered in other Guides.  For detailed information, refer to the guides for [Math and Statistics](/guides/math-and-statistics/), [Data Access](/guides/data-access/), [Machine Learning](/guides/machine-learning/) and [Cloud Programming](/guides/cloud/).


<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>This guide includes resources related to data science programming and scripting with F#. To contribute to this guide, log on to GitHub, <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/data-science/index.md">edit this page</a> and send a pull request.</p>
    <hr />
    <p>Note that the resources listed below are provided only for educational purposes related to the F# programming language. The F# Software Foundation does not endorse or recommend any commercial products, processes, or services. Therefore, mention of commercial products, processes, or services should not be construed as an endorsement or recommendation.</p>
</div>              

<br /> <br />
### Integrated Data Science Packages
{:  .anchor }

[FsLab](http://fslab.org/) is an integrated, cross-platform collection of open source data science pacakges for F#, including FSharp.Data, Deedle, RProvider, Math.NET Numerics and more.

  * [Understanding the world with F# (article)](http://www.thedevelopermag.com/understanding-world-f/)

  * [Understanding the world with F# (video)](http://channel9.msdn.com/posts/Understanding-the-World-with-F)


<br /> <br />
### Interactive Charting on Windows 
{:  .anchor }

* [FSharp.Charting](http://fsharp.github.io/FSharp.Charting/) - an interactive charting library frequently used on Windows.

* [XPlot](http://tahahachana.github.io/XPlot/) - XPlot is a data visualization package for the F# programming language powered by popular JavaScript charting libraries. It uses Google and Plotly's powerful and free data visualization libraries based on HTML5/SVG technology.  You can access the HTML for the charts programatically and use the library from F# Interactive by displaying browser windows.

<br /> <br />
### Using R, MATLAB, Mathematica, Excel and Python for Data Visualization
{:  .anchor }

F# can integrate with systems such as R, MATLAB, Mathematica, Excel and Python and these can be used for data visualization.
See below for more details and the following tutorials specific to visualization:

* [Using F#, R and GGPlot2](http://stackoverflow.com/questions/16820211/r-type-provider-and-ggplot2)
* [Tutorial: Charting with Excel from F#](http://bit.ly/10WksjA)
* [Tutorial: Charting with Gnuplot from F#](http://bit.ly/14RwJeW)


<br /> <br />
### Time Series Programming
{:  .anchor }

[Deedle](http://bluemountaincapital.github.io/Deedle/) is an easy-to-use, high quality 
package for data and time series manipulation and for scientific programming. 
It uses a design similar to the Pandas library from Python and the 'tseries' or 'zoo' packages in R, though
with stronger typing. Deedle supports working with structured data frames, ordered and unordered data, as well as time series. Deedle is designed to 
work well for exploratory programming using F# and C# interactive console, but can be also used in 
efficient compiled .NET code. 



<br /> <br />
### F# and Excel 
{: #excel-interop .anchor }

<br /> <br />
#### Integrating F# and Excel through Excel-DNA
{:  .anchor }

[Excel-DNA](http://excel-dna.net/) is an independent project to integrate .NET into Excel. With Excel-DNA you can make native (.xll) add-ins for Excel using C#, Visual Basic.NET or F#, providing high-performance user-defined functions (UDFs), custom ribbon interfaces 
and more. Your entire add-in can be packed into a single .xll file requiring no installation or registration:

 * [Excel-DNA home pages](http://excel-dna.net/)
 * [Combining F# and Excel using Excel DNA](http://blogs.msdn.com/b/fsharpteam/archive/2013/07/16/combining-f-and-excel-using-excel-dna-some-links.aspx)
 * [Async and event-streaming Excel UDFs with F#](http://excel-dna.net/2013/03/26/async-and-event-streaming-excel-udfs-with-f/)
 * [Machine Learning with Excel: Combine the power of Excel, F# and R](http://luajalla.azurewebsites.net/excel-dna-three-stories/)

<br /> <br />
#### Integrating F# and Excel through Open Office XML file manipulation
{:  .anchor }

[NPOI](https://npoi.codeplex.com/) is .NET version of POI Java project at http://poi.apache.org/. POI is an open source project which can help you read/write xls, doc, ppt files.

 * [Example of how to work with Excel using NPOI in F#](https://github.com/Heather/FXL/blob/master/RNExceL/Model/NPOI.fs#L19)

[EPPlus](http://epplus.codeplex.com) is a .NET library that reads and writes Excel 2007/2010/2013 files using the Open Office XML format (xlsx)
 
[ExcelPackageF](https://github.com/igorkulman/ExcelPackageF) is a simple F# wrapper over the EPPlus library.
 
Both NPOI and EPPLus manipulate the Open Office XML format directly so they do not require having Excel installed and do not use Interop. You can read, create, and edit Excel documents using this approach.

<br /> <br />
#### Interoperating with Excel through type providers
{:  .anchor }

The [F# Excel Type Provider](http://fsprojects.github.io/ExcelProvider/) is a prototypical F# type providerfor Excel that allows you  to read Excel files using typed data provided by the type provider. 

<br /> <br />
#### Interoperating with Excel through API's
{:  .anchor }

F# can interoperate with Excel through existing Excel API's. For example:

 * [Plot functions from F# to Excel](http://www.clear-lines.com/blog/post/Plot-functions-from-FSharp-to-Excel.aspx)
 * [Charting with Excel from F#](http://bit.ly/GGv8z4)

There are also some F# versions of Excel functions, useful when migrating code:

 * [Excel Financial Functions for .NET](https://github.com/fsprojects/ExcelFinancialFunctions)


<br /> <br />
### F# and R
{: #r-interop  .anchor }

Resources:

 * [R Type Provider for F#](http://bluemountaincapital.github.io/FSharpRProvider) - An F# type provider for high fidelity integration between F# and R
 * [R.NET](http://rdotnet.codeplex.com) - Core interoperability component used by the R Type Provider with some F# extensions.

<br /> <br />
### F# and MATLAB 
{: #matlab-interop  .anchor }

Resources:

 * [MATLAB Type Provider for F#](http://bayardrock.github.io/Matlab-Type-Provider/) - An F# type provider for higher-fidelity integration between F# and MATLAB

<br /> <br />
### F# and Python 
{: #python-interop  .anchor }

Resources:

 * [Python for .NET](http://pythonnet.github.io/) - Allows Python to be integrated into F# and C# programs

<br /> <br />
### F# and Mathematica/Wolfram Language
{: #mathematica-interop  .anchor }

Resources:

 * [Calling Mathematica from F#](http://reference.wolfram.com/legacy/v8/NETLink/tutorial/CallingMathematicaFromNET.html) - techniques to call Mathematica from C#, F# and other .NET languages
 * [Calling Wolfram Language from F#](http://reference.wolfram.com/language/NETLink/tutorial/CallingTheWolframLanguageFromNET.html) - techniques to call Mathematica from .NET


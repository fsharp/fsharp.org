---
layout: default
title: Guide - Data Science | The F# Software Foundation
headline: Guide - Data Science with F#
redirect_from: 
    - /math/index.html
    - /math-and-statistics/index.html
    - /math-and-stats/index.html
    - /machine-learning/index.html
---

Data science is the application of statistical analysis, machine learning, data visualization and programming to 
real-world data sources to bring understanding and insight to data-oriented problem domains.
F# is an excellent solution for programmatic data science as it combines efficient execution,
REPL-scripting, powerful libraries and scalable data integration.  

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>To contribute to this guide <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/data-science/index.md">edit this page</a>. These resources are for educational purposes. </p>
</div>              

* auto-gen TOC:
{:toc}

<br />
## Jupyter Notebooks

* ![logo](../../images/thumbs/jupyter.png)&nbsp;[.NET Interactive](https://github.com/dotnet/interactive/)
provides data scientists and developers a way to explore data, experiment with code, and try new ideas
effortlessly using .NET Core. Use .NET Interactive to build .NET Jupyter notebooks or custom interactive coding experiences.

  * [Announcement](https://devblogs.microsoft.com/dotnet/net-interactive-is-here-net-notebooks-preview-2/)
  * [Try Online in Binder](https://github.com/dotnet/interactive/blob/main/docs/NotebooksOnBinder.md)
  * [Install Locally](https://github.com/dotnet/interactive/blob/main/docs/install-dotnet-interactive.md)

<br />
## Integrated Packages
{: #integrated-packages .anchor }

 * [FsLab](http://fslab.org/) is the F# Community Project Incubation Space For Data Science.

 * [SciSharp Stack](https://scisharp.github.io/SciSharp/) - A .NET based Open Source Ecosystem for Data Science, Machine Learning and AI.

   SciSharp provides ports and bindings to cutting edge Machine Learning frameworks like [TensorFlow](https://scisharp.github.io/TensorFlow.NET/), [Keras](https://scisharp.github.io/Keras.NET/), [PyTorch](https://github.com/SciSharp/Torch.NET), [Numpy](https://github.com/SciSharp/NumSharp) and many more in .NET Core. Since the APIs of the ported libraries are so similar to the originals you can easily re-use all existing resources, documentation and community solutions to common problems in C# or F# without much effort.

   License: Various, mostly Apache 2.0 or MIT

 * [Math.NET Numerics](http://numerics.mathdotnet.com/) - provides 
   a large collection of algorithms needed in science and engineering, including linear algebra, 
   special functions, statistics, probability models, interpolation and FFTs. 

   In addition to the core .NET package, Numerics specifically supports F# 4.0 with idiomatic extension modules and 
   maintains mathematical data structures like BigRational that originated in the F# PowerPack. 
   If a performance boost is needed, the managed-code provider backing its linear algebra routines 
   and decompositions can be exchanged with wrappers for optimized native implementations such as 
   Intel MKL. 

   License: MIT/X11

 * [ML.NET](https://www.microsoft.com/net/learn/apps/machine-learning-and-ai/ml-dotnet/) - ML.NET is an open source and cross-platform machine learning framework sponsored by Microsoft.

 * [Encog Machine Learning Framework](https://www.heatonresearch.com/encog/) - An advanced neural network and machine learning framework. Encog
   contains classes to create a wide variety of networks, as well as support classes to normalize and process data for these neural networks. Encog trains using multithreaded resilient propagation. Encog can also make use of a GPU to further speed processing time. A GUI based workbench is also provided to help model and train neural networks.
   See, for example, [ENCOG Neural Network XOR example in F#](http://relentlessdevelopment.wordpress.com/2013/11/14/hello-neurons-encog-neural-network-xor-example-in-f/)

<br />
## Interactive Charting 
{: #charting .anchor }

* [XPlot](http://fslab.org/XPlot/) - XPlot is a data visualization package for the F# programming language powered by popular JavaScript charting libraries. It uses Google and Plotly's powerful and free data visualization libraries based on HTML5/SVG technology.  You can access the HTML for the charts programatically and use the library from F# Interactive by displaying browser windows.

* [Plotly.NET](https://github.com/plotly/Plotly.NET/) - a powerful and free charting library. Plotly.NET provides Plotly's awesome graphing support with strongly typed style options for F#. 

* [FSharp.Charting](https://fslab.org/FSharp.Charting/) - an interactive charting library frequently used on Windows.


<br />
## Individual Packages
{:  .anchor }

If a resource specific to F# can't be found, then search for C# instead and adjust the technique appropriately.

 * [TensorFlow.NET](https://scisharp.github.io/TensorFlow.NET/) - .NET Standard bindings for Google's TensorFlow for developing, training and deploying Machine Learning models in C# and F#.

 * [NumSharp](https://github.com/SciSharp/NumSharp) - High Performance Computation for N-D Tensors in .NET, similar API to NumPy

 * [TorchSharp](https://github.com/xamarin/TorchSharp) - .NET bindings for PyTorch. Machine Learning with C# / F# with Multi-GPU/CPU support

 * [DiffSharp](http://diffsharp.github.io/DiffSharp/) - An automatic differentiation (AD) library for incorporating derivative calculations with minimal changes into existing code, providing exact and efficient gradients, Jacobians and Hessians for machine learning and optimization applications.

 * [SharpCV](https://github.com/SciSharp/SharpCV) - A Computer Vision library combines OpenCV and NDArray together in .NET Standard.

 * [MxNet.Sharp](https://github.com/SciSharp/MxNet.Sharp) - .NET Standard bindings for Apache MxNet with Imperative, Symbolic and Gluon Interface for developing, training and deploying Machine Learning models in C# and F#.

 * [FsAlg](http://gbaydin.github.io/FsAlg/) - A lightweight linear algebra library that supports generic types.

   The library provides generic Vector and Matrix types that support most of the commonly used linear algebra operations, including matrix–vector operations, matrix inverse, determinants, eigenvalues, LU and QR decompositions. Its intended use is to enable writing generic linear algebra code with custom numeric types. It can also be used as a lightweight library for prototyping and scripting with primitive floating point types.

 * [Ariadne](http://evelinag.com/Ariadne/) - Library for fitting Gaussian process regression models.

 * [Numl](http://nuget.org/packages/numl/) - A machine learning library intended to ease the use of using standard modeling techniques for both prediction and clustering

 * [Synapses](https://mrdimosthenis.github.io/Synapses) - A lightweight Neural Network library, for js, jvm and .net.

 * [R Packages](http://fslab.org/RProvider/) - R packages can be accessed through the [RProvider for F#](http://fslab.org/RProvider/). License: BSD

 * [Deedle](http://fslab.org/Deedle/) is an easy-to-use, high quality 
   package for data and time series manipulation and for scientific programming. 
   It uses a design similar to the Pandas library from Python and the 'tseries' or 'zoo' packages in R, though
   with stronger typing. Deedle supports working with structured data frames, ordered and unordered data, as well as time series. Deedle is designed to 
   work well for exploratory programming using F# and C# interactive console, but can be also used in 
   efficient compiled .NET code. 

<br />
## Commercial packages
{: #commercial-packages .anchor }

 * [ILNumerics](http://ilnumerics.net/) - an open- or closed-source library offering high-
   performance numerical algorithms as well as charting and plotting capabilities.

   The library is based on efficient, general-purpose array classes implementing vectors, matrices, and
   n-dimensional arrays. Provided algorithms include standard linear algebra transforms,
   a high-performance Fast Fourier Transform (FFT) library, and a collection of sorting 
   and machine learning algorithms. Plotting is based on OpenGL and supports both 2D and 3D
   plots.

   License: GPLv3 or commercial (paid) license.
   
 * [Extreme Optimization Numerical Libraries for .NET](http://www.extremeoptimization.com/) - 
   a set of three libraries focused on vector and matrix processing, 
   linear algebra methods, and statistics functions.

   The library includes a large selection of 
   standard algorithms from matrix factorization, function optimization, numerical integration, 
   K-means clustering, and PCA (principal component analysis). Options are provided to run  
   using pure managed code for portability or to utilize highly tuned native code for 
   additional performance. 

 * [NMath, NMath Stats](https://www.centerspace.net/nmath/) -
   a suite providing core math and statistics functions.

   NMath provides sparse- and 
   dense-matrix manipulations, FFT algorithms, and numeric algorithms such as curve-fitting, 
   integration, and differentiation. NMath Stats is built on NMath and provides statistics 
   functions such multiple linear regression, hypothesis testing, and nonnegative matrix 
   factorization. NMath and NMath Stats support .NET 4.5 and are available from 
   [CenterSpace Software](http://www.centerspace.net/).

 * [F# for Numerics](http://www.ffconsultancy.com/products/fsharp_for_numerics/) - 
   a collection of numeric algorithms including matrix operations, optimization and 
   interpolation functions, 1D and 2D FFTs, and pseudo-random number generation.

   The library uses 
   the standard F# PowerPack Matrix for compatibility. F# for Numerics supports .NET. 
   The library is available from [Flying Frog Consultancy](http://www.ffconsultancy.com/).

 * [F# for Visualization](http://www.ffconsultancy.com/products/fsharp_for_visualization/index.html) -
   a 2D and 3D vector graphics library with a native F# interface.

   The package provides interactive plotting from within Visual Studio and support for generating
   animations. F# for Visualization supports .NET. The library is
   available from [Flying Frog Consultancy](http://www.ffconsultancy.com/).


<br />

## Interoperability

### F# and Excel 
{: #excel-interop .anchor }

[Excel-DNA](http://excel-dna.net/) is an independent project to integrate .NET into Excel. With Excel-DNA you can make native (.xll) add-ins for Excel using C#, Visual Basic.NET or F#, providing high-performance user-defined functions (UDFs), custom ribbon interfaces 
and more. Your entire add-in can be packed into a single .xll file requiring no installation or registration:

 * [Excel-DNA home pages](http://excel-dna.net/)
 * [Async and event-streaming Excel UDFs with F#](http://excel-dna.net/2013/03/26/async-and-event-streaming-excel-udfs-with-f/)
 * [Machine Learning with Excel: Combine the power of Excel, F# and R](http://luajalla.azurewebsites.net/excel-dna-three-stories/)

[NPOI](https://github.com/nissl-lab/npoi/) is .NET version of POI Java project at http://poi.apache.org/. POI is an open source project which can help you read/write xls, doc, ppt files.

 * [Example of how to work with Excel using NPOI in F#](https://github.com/Heather/FXL/blob/master/RNExceL/Model/NPOI.fs#L19)

NPOI manipulates the Open Office XML format directly so does not require having Excel installed and do not use Interop. You can read, create, and edit Excel documents using this approach.

 * [Charting with Excel from F#](http://bit.ly/GGv8z4)

There are also some F# versions of Excel functions, useful when migrating code:

 * [Excel Financial Functions for .NET](https://github.com/fsprojects/ExcelFinancialFunctions)

<br />

### F# and R
{: #r-interop  .anchor }

Resources:

 * [R Type Provider for F#](http://fslab.org/RProvider) - An F# type provider for high fidelity integration between F# and R
 * [R.NET](https://github.com/jmp75/rdotnet) - Core interoperability component used by the R Type Provider with some F# extensions.
 * [Using F#, R and GGPlot2](http://stackoverflow.com/questions/16820211/r-type-provider-and-ggplot2)
 
<br />

### F# and MATLAB 
{: #matlab-interop  .anchor }

Resources:

 * [MATLAB Type Provider for F#](http://bayardrock.github.io/Matlab-Type-Provider/) - An F# type provider for higher-fidelity integration between F# and MATLAB

<br />

### F# and Python 
{: #python-interop  .anchor }

Resources:

 * [Python for .NET](http://pythonnet.github.io/) - Allows Python to be integrated into F# and C# programs
 * [Tutorial: Charting with Gnuplot from F#](http://bit.ly/14RwJeW)

<br />

### F# and Mathematica/Wolfram Language
{: #mathematica-interop  .anchor }

Resources:

 * [Calling Mathematica from F#](http://reference.wolfram.com/legacy/v8/NETLink/tutorial/CallingMathematicaFromNET.html) - techniques to call Mathematica from C#, F# and other .NET languages

 * [Calling Wolfram Language from F#](http://reference.wolfram.com/language/NETLink/tutorial/CallingTheWolframLanguageFromNET.html) - techniques to call Mathematica from .NET


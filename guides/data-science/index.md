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
REPL-scripting, powerful libraries and scalable data integration.  See also:

* [Data Access](/guides/data-access/)
* [Cloud Programming](/guides/cloud/)

* auto-gen TOC:
{:toc}

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>To contribute to this guide <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/data-science/index.md">edit this page</a> and send a pull request.</p>
    <hr />
    <p>These resources are for educational purposes. The F# Software Foundation does not endorse commercial products, processes, or services.</p>
</div>              

<br />
## Integrated Packages
{: #integrated-packages .anchor }

 * [SciSharp Stack](https://scisharp.github.io/SciSharp/) - A .NET based Open Source Ecosystem for Data Science, Machine Learning and AI.

   SciSharp provides ports and bindings to cutting edge Machine Learning frameworks like TensorFlow, Keras, PyTorch, Numpy and many more in .NET Core. Since the APIs of the ported libraries are so similar to the originals you can easily re-use all existing resources, documentation and community solutions to common problems in C# or F# without much effort.

   License: Various, mostly Apache 2.0 or MIT

 * [Math.NET Numerics](http://numerics.mathdotnet.com/) - provides 
   a large collection of algorithms needed in science and engineering, including linear algebra, 
   special functions, statistics, probability models, interpolation and FFTs. 

   In addition to the core .NET package, Numerics specifically supports F# 3.0 with idiomatic extension modules and 
   maintains mathematical data structures like BigRational that originated in the F# PowerPack. 
   If a performance boost is needed, the managed-code provider backing its linear algebra routines 
   and decompositions can be exchanged with wrappers for optimized native implementations such as 
   Intel MKL. Supports Mono and .NET 4.0 on Linux, Mac and Windows. The portable version also SL5 
   and .NET for Windows Store apps.

   License: MIT/X11

 * [ML.NET](https://www.microsoft.com/net/learn/apps/machine-learning-and-ai/ml-dotnet/) - ML.NET is an open source and cross-platform machine learning framework sponsored by Microsoft.

 * [Encog Machine Learning Framework](http://nuget.org/packages/encog-dotnet-core/) - An advanced neural network and machine learning framework. Encog
   contains classes to create a wide variety of networks, as well as support classes to normalize and process data for these neural networks. Encog trains using multithreaded resilient propagation. Encog can also make use of a GPU to further speed processing time. A GUI based workbench is also provided to help model and train neural networks.
   See, for example, [ENCOG Neural Network XOR example in F#](http://relentlessdevelopment.wordpress.com/2013/11/14/hello-neurons-encog-neural-network-xor-example-in-f/)

 * [FsLab](http://fslab.org/) is an integrated, cross-platform collection of open source data science packages for F#, including FSharp.Data, Deedle, RProvider, Math.NET Numerics and more.

 * [Accord.MachineLearning](http://nuget.org/packages/Accord.MachineLearning/) - Contains Support Vector Machines, Decision Trees, Naive Bayesian models, K-means, Gaussian Mixture models and general algorithms such as Ransac, Cross-validation and Grid-Search for machine-learning applications. This package is part of the Accord.NET Framework.
   See also [First steps with Accord.NET SVM in F#](http://www.clear-lines.com/blog/category/Machine-Learning.aspx)

### Interactive Charting 
{: #charting .anchor }

* [XPlot](http://fslab.org/XPlot/) - XPlot is a data visualization package for the F# programming language powered by popular JavaScript charting libraries. It uses Google and Plotly's powerful and free data visualization libraries based on HTML5/SVG technology.  You can access the HTML for the charts programatically and use the library from F# Interactive by displaying browser windows.

* [FSharp.Plotly](http://muehlhaus.github.io/FSharp.Plotly/index.html) - a powerful and free charting library. FSharp.Plotly provides Plotly's awesome graphing support with strongly typed style options for F#. 

* [FSharp.Charting](http://fsharp.github.io/FSharp.Charting/) - an interactive charting library frequently used on Windows.


### Individual Packages
{:  .anchor }

If a resource specific to F# can't be found, then search for C# instead and adjust the technique appropriately.

 * [TensorFlow.NET](https://scisharp.github.io/TensorFlow.NET/) - .NET Standard bindings for Google's TensorFlow for developing, training and deploying Machine Learning models in C# and F#.

 * [NumSharp](https://github.com/SciSharp/NumSharp) - High Performance Computation for N-D Tensors in .NET, similar API to NumPy

 * [Torch.NET](https://github.com/SciSharp/Torch.NET) - .NET bindings for PyTorch. Machine Learning with C# / F# with Multi-GPU/CPU support

 * [SharpCV](https://github.com/SciSharp/SharpCV) - A Computer Vision library combines OpenCV and NDArray together in .NET Standard.

 * [MxNet.Sharp](https://github.com/SciSharp/MxNet.Sharp) - .NET Standard bindings for Apache MxNet with Imperative, Symbolic and Gluon Interface for developing, training and deploying Machine Learning models in C# and F#.

 * [DiffSharp](http://diffsharp.github.io/DiffSharp/) - An automatic differentiation (AD) library for incorporating derivative calculations with minimal changes into existing code, providing exact and efficient gradients, Jacobians and Hessians for machine learning and optimization applications.

 * [FsAlg](http://gbaydin.github.io/FsAlg/) - A lightweight linear algebra library that supports generic types.

   The library provides generic Vector and Matrix types that support most of the commonly used linear algebra operations, including matrix–vector operations, matrix inverse, determinants, eigenvalues, LU and QR decompositions. Its intended use is to enable writing generic linear algebra code with custom numeric types. It can also be used as a lightweight library for prototyping and scripting with primitive floating point types.

 * [Ariadne](http://evelinag.com/Ariadne/) - Library for fitting Gaussian process regression models.

 * [Numl](http://nuget.org/packages/numl/) - A machine learning library intended to ease the use of using standard modeling techniques for both prediction and clustering

 * [Synapses](https://mrdimosthenis.github.io/Synapses) - A lightweight Neural Network library, for js, jvm and .net.

 * [R Packages](http://fslab.org/RProvider/) - All R packages can be accessed through the [RProvider for F#](http://fslab.org/RProvider/).
   See, for example, [F# Neural Networks with the RProvider and Deedle](http://sergeytihon.wordpress.com/2013/11/18/f-neural-networks-with-rprovider-deedle/)
 
   License: BSD

### Commercial packages
{: #commercial-packages .anchor }

 * [Alea GPU](https://developer.nvidia.com/alea-gpu) - a framework for 
   developing GPU-accelerated algorithms in F# on .NET and Mono.

   Utilizing F# quotations and the
   LLVM compiler it is able to compile GPU kernels on-the-fly and schedule them on one or 
   more nVidia GPU's. Advanced GPU features such as textures and shared memory are
   supported. Available from [Quantalea](http://www.quantalea.net/).

 * [ILNumerics](http://ilnumerics.net/) - an open- or closed-source library offering high-
   performance numerical algorithms as well as charting and plotting capabilities.

   The library is based on efficient, general-purpose array classes implementing vectors, matrices, and
   n-dimensional arrays. Provided algorithms include standard linear algebra transforms,
   a high-performance Fast Fourier Transform (FFT) library, and a collection of sorting 
   and machine learning algorithms. Plotting is based on OpenGL and supports both 2D and 3D
   plots. ILNumerics supports .NET 4.0 as well as Mono (recommend 2.10 or above).

   License: GPLv3 or commercial (paid) license.
   
 * [Extreme Optimization Numerical Libraries for .NET](http://www.extremeoptimization.com/) - 
   a set of three libraries focused on vector and matrix processing, 
   linear algebra methods, and statistics functions.

   The library includes a large selection of 
   standard algorithms from matrix factorization, function optimization, numerical integration, 
   K-means clustering, and PCA (principal component analysis). Options are provided to run  
   using pure managed code for portability or to utilize highly tuned native code for 
   additional performance. Extreme Optimization supports .NET 3.5 and 4.0 (2.0 version 
   available) and execution on Mono.

 * [NMath, NMath Stats](http://www.centerspace.net/products/c-sharp-vb-net-math-library-products/) -
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

 * [Deedle](http://fslab.org/Deedle/) is an easy-to-use, high quality 
   package for data and time series manipulation and for scientific programming. 
   It uses a design similar to the Pandas library from Python and the 'tseries' or 'zoo' packages in R, though
   with stronger typing. Deedle supports working with structured data frames, ordered and unordered data, as well as time series. Deedle is designed to 
   work well for exploratory programming using F# and C# interactive console, but can be also used in 
   efficient compiled .NET code. 

### Tutorials and Introductions
{: #tutorials .anchor }

Introductions to different machine learning algorithms with F#:

 * [Understanding the world with F# (article)](http://www.thedevelopermag.com/understanding-world-f/)
 * [Understanding the world with F# (video)](http://channel9.msdn.com/posts/Understanding-the-World-with-F)
 * [FSML - A machine learning project in F#](https://github.com/rnorm/FSML)
 * [Gaussian process regression in F#](http://evelinag.com/blog/2014/09-15-introducing-ariadne/index.html)
 * [K-Means clustering in F#](http://clear-lines.com/blog/post/K-Means-Clustering-in-FSharp.aspx)
 * [Simplify data with SVD and Math.NET in F#](http://clear-lines.com/blog/post/Simplify-data-with-SVD-and-MathNET-in-FSharp.aspx)
 * [Recommendation Engine using Math.NET, SVD and F#](http://www.clear-lines.com/blog/post/Recommendation-Engine-with-SVD-and-MathNET-in-FSharp.aspx)
 * [Setting up F# Interactive for Machine Learning with Large Datasets](http://richardminerich.com/2013/03/setting-up-fsharp-interactive-for-machine-learning-with-large-datasets/)
 * [Random Forests in F# - first cut](http://www.clear-lines.com/blog/post/Random-Forest-classification-in-F-first-cut.aspx)
 * [Nearest Neighbor Classification, Part 1](http://clear-lines.com/blog/post/Nearest-Neighbor-Classification-part-1.aspx)
 * [Nearest Neighbor Classification, Part 2](http://clear-lines.com/blog/post/Nearest-Neighbor-Classification-Part-2.aspx)
 * [Decision Tree Classification in F#](http://clear-lines.com/blog/post/Decision-Tree-classification.aspx)
 * [Naïve Bayes Classification](http://clear-lines.com/blog/post/Naive-Bayes-Classification.aspx)
 * [Logistic Regression in F#](http://clear-lines.com/blog/post/Logistic-Regression.aspx)
 * [Support Vector Machine in F#: getting there](http://clear-lines.com/blog/post/Support-Vector-Machine-in-FSharp.aspx)
 * [AdaBoost in F#](http://clear-lines.com/blog/post/AdaBoost-classifier-in-FSharp.aspx)
 * [Support Vector Machines in F#](http://fdatamining.blogspot.co.uk/2011/02/support-vector-machines-svms-in-f-using.html)
 * [Kaggle/StackOverflow contest field notes](http://clear-lines.com/blog/post/Kaggle-StackOverflow-field-notes-part-1.aspx)
 * [F# Data Mining](http://fdatamining.blogspot.com/2010/05/why-f-is-language-for-data-mining.html)
 * [Parallel Programming in F#: Aggregating Data:](http://tomasp.net/blog/fsharp-parallel-aggregate.aspx)
 * [Particle Swarm Optimization in F#](http://www.danielslater.net/2015/05/particle-swarm-optimization-in-f.html)
 * [Hype](http://hypelib.github.io/Hype/) - An experimental deep learning library, where you can perform optimization on compositional machine learning systems of many components, even when such components themselves internally perform optimization. Underlying computations are run by a BLAS/LAPACK backend (OpenBLAS by default).

 

<br />

### F# and Excel 
{: #excel-interop .anchor }

[Excel-DNA](http://excel-dna.net/) is an independent project to integrate .NET into Excel. With Excel-DNA you can make native (.xll) add-ins for Excel using C#, Visual Basic.NET or F#, providing high-performance user-defined functions (UDFs), custom ribbon interfaces 
and more. Your entire add-in can be packed into a single .xll file requiring no installation or registration:

 * [Excel-DNA home pages](http://excel-dna.net/)
 * [Combining F# and Excel using Excel DNA](http://blogs.msdn.com/b/fsharpteam/archive/2013/07/16/combining-f-and-excel-using-excel-dna-some-links.aspx)
 * [Async and event-streaming Excel UDFs with F#](http://excel-dna.net/2013/03/26/async-and-event-streaming-excel-udfs-with-f/)
 * [Machine Learning with Excel: Combine the power of Excel, F# and R](http://luajalla.azurewebsites.net/excel-dna-three-stories/)

[NPOI](https://npoi.codeplex.com/) is .NET version of POI Java project at http://poi.apache.org/. POI is an open source project which can help you read/write xls, doc, ppt files.

 * [Example of how to work with Excel using NPOI in F#](https://github.com/Heather/FXL/blob/master/RNExceL/Model/NPOI.fs#L19)

[EPPlus](http://epplus.codeplex.com) is a .NET library that reads and writes Excel 2007/2010/2013 files using the Open Office XML format (xlsx)
 
[ExcelPackageF](https://github.com/igorkulman/ExcelPackageF) is a simple F# wrapper over the EPPlus library.
 
Both NPOI and EPPLus manipulate the Open Office XML format directly so they do not require having Excel installed and do not use Interop. You can read, create, and edit Excel documents using this approach.

The [F# Excel Type Provider](http://fsprojects.github.io/ExcelProvider/) is a prototypical F# type providerfor Excel that allows you  to read Excel files using typed data provided by the type provider. 


 * [Plot functions from F# to Excel](http://www.clear-lines.com/blog/post/Plot-functions-from-FSharp-to-Excel.aspx)
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


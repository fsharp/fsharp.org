---
layout: default
title: Guide - Math and Statistics Programming with F# | The F# Software Foundation
headline: Guide - Math and Statistics Programming with F#
redirect_from: "/math/index.html"
---

F# is well-suited to numerical and statistical programming because
of its focus on data transformations and the use of functional programming to 
help give natural translation of the underlying mathematics into executable form.

Efficient execution of numeric code is essential, and F# executes as native code, normally through
[JIT compilation](http://en.wikipedia.org/wiki/Just-in-time_compilation). 
Vectoried execution of F#-authored code is available through [RyuJIT](http://blogs.msdn.com/b/clrcodegeneration/)
on Windows and [SIMD primitives](http://www.counity.at/blog/2011/hardware-acceleration-in-net-part-1-1-mono-simd-introduction/)
on Linux. F# can also utilize highly optimized, native code libraries such as the
Intel [Math Kernel Library (MKL)](http://software.intel.com/en-us/intel-mkl)
through packages like [Math.NET Numerics](http://numerics.mathdotnet.com/) and other
libraries, and can be used to [call directly into Fortran dynamic-link libraries](http://www.letsthinkabout.us/post/calling-fortran-assemblies-from-net).


<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>This guide includes resources related to math and statistics programming with F#. To contribute to this guide, log on to GitHub, <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/math-and-statistics/index.md">edit this page</a> and send a pull request.</p>
    <hr />
    <p>Note that the resources listed below are provided only for educational purposes related to the F# programming language. The F# Software Foundation does not endorse or recommend any commercial products, processes, or services. Therefore, mention of commercial products, processes, or services should not be construed as an endorsement or recommendation.</p>
</div>              


## Resources for Math and Statistics

* auto-gen TOC:
{:toc}


### Open-source libraries

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
   
 * [ILNumerics](http://ilnumerics.net/) - an open- or closed-source library offering high-
   performance numerical algorithms as well as charting and plotting capabilities.

   The library is based on efficient, general-purpose array classes implementing vectors, matrices, and
   n-dimensional arrays. Provided algorithms include standard linear algebra transforms,
   a high-performance Fast Fourier Transform (FFT) library, and a collection of sorting 
   and machine learning algorithms. Plotting is based on OpenGL and supports both 2D and 3D
   plots. ILNumerics supports .NET 4.0 as well as Mono (recommend 2.10 or above).

   License: GPLv3 or commercial (paid) license.

 * [Fmat](https://github.com/Statfactory/Fmat) - a 100% F# library for manipulating n-dimensional dense matrices.

   Concrete matrix implementations cover single- and double-precision
   floating point, 32-bit integer, bool, and string types. Fmat contains four matrix factorization 
   and linear solver algorithms, random number generators for 7 distributions, special functions and 
   basic statistical procedures. Fmat is available on GitHub and from NuGet.
   
   License: MIT/X11
   
 * [DiffSharp](http://gbaydin.github.io/DiffSharp/) - An automatic 
   differentiation (AD) library for exact and efficient calculation of derivatives. Also includes symbolic and numerical differentiation.

   AD allows exact and efficient calculation of derivatives, by systematically applying the chain rule of calculus at the elementary operator level. AD is different from numerical differentiation, which is prone to truncation and round-off errors, and symbolic differentiation, which is exact but not efficient for run-time calculations and can only handle closed-form mathematical expressions.

   Using the DiffSharp library, derivative calculations (gradients, Hessians, Jacobians, directional derivatives, and matrix-free Hessian- and Jacobian-vector products) can be incorporated with minimal change into existing algorithms.
   
   License: GPLv3

 * [FsAlg](http://gbaydin.github.io/FsAlg/) - A lightweight linear algebra library that supports generic types.

   The library provides generic Vector and Matrix types that support most of the commonly used linear algebra operations, including matrix–vector operations, matrix inverse, determinants, eigenvalues, LU and QR decompositions. Its intended use is to enable writing generic linear algebra code with custom numeric types. It can also be used as a lightweight library for prototyping and scripting with primitive floating point types.

   License: BSD

### Commercial libraries

 * [Alea.cuBase](http://www.quantalea.net/products/overview/) - a framework for 
   developing GPU-accelerated algorithms in F# on .NET and Mono.

   Utilizing F# quotations and the
   LLVM compiler it is able to compile GPU kernels on-the-fly and schedule them on one or 
   more nVidia GPU's. Advanced GPU features such as textures and shared memory are
   supported. Available from [Quantalea](http://www.quantalea.net/).

 * [Extreme Optimization Numerical Libraries for .NET](http://www.extremeoptimization.com/) - 
   a set of three libraries focused on vector and matrix processing, 
   linear algebra methods, and statistics functions.

   The library includes a large selection of 
   standard algorithms from matrix factorization, function optimization, numerical integration, 
   K-means clustering, and PCA (principal component analysis). Options are provided to run  
   using pure managed code for portability or to utilize highly tuned native code for 
   additional performance. Extreme Optimization supports .NET 3.5 and 4.0 (2.0 version 
   available) and execution on Mono.

 * [Microsoft Solver Foundation (MSF)](http://msdn.microsoft.com/en-us/devlabs/hh145003.aspx) -
   a .NET package for designing and optimizing mathematical models.

   MSF provides built-in
   solvers for linear- and quadratic-programming, as well as non-linear models based on Nelder-Mead
   or quasi-Newtonian algorithms. Models can be built using the Optimization Modeling Language
   (OML) or using C# or F# and other .NET languages. MSF version 3.1 is available in a free
   Express Edition or via an MSDN subscription.
   
 * [NMath, NMath Stats](http://www.centerspace.net/products/c-sharp-vb-net-math-library-products/) -
   a suite providing core math and statistics functions.

   NMath provides sparse- and 
   dense-matrix manipulations, FFT algorithms, and numeric algorithms such as curve-fitting, 
   integration, and differentiation. NMath Stats is built on NMath and provides statistics 
   functions such multiple linear regression, hypothesis testing, and nonnegative matrix 
   factorization. NMath and NMath Stats support .NET 4.5 and are available from 
   [CenterSpace Software](http://www.centerspace.net/).
   
 * [StatFactory FCore](http://www.statfactory.co.uk/) - a high-performance numerical
   library supporting both CPU and GPGPU computing.

   The library includes multi-dimensional
   dense matrix and 2D sparse matrix support, standard linear algebra routines, and summary
   statistics. The library provides options to run both 100% managed code or to use optimized 
   native libraries such as MKL.

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


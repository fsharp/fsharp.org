---
layout: page
title: Math Stacks | The F# Software Foundation
headline: Math Stacks for F#
---

This page provides information about using F# for numerical computing.

### Why F#?

F# is particularly well suited to numerical programming, compared with many
mainstream languages, because of its functional-first design. Functional programming
is rooted in the development of lambda calculus and focuses on the definition
of functions to transform data, as opposed to the manipulation of program state common
with other popular paradigms such as object-oriented programming. 
As such, the functional style is often a more natural translation of the underlying
mathematics.

Performance of the code and the developer are two big requirements for numerical computing. 
The computing tasks are often CPU-intensive so the language must be efficient in this 
regard. F# runs on the [Microsoft .NET Common Language Runtime (CLR)](http://msdn.microsoft.com/en-us/library/ddk909ch(v=vs.71).aspx)
on Windows and on [Mono](http://www.mono-project.com/Main_Page) on Windows, Linux, and Mac OS. 
Both of these environments include high-performance 
[Just-In-Time compilers](http://en.wikipedia.org/wiki/Just-in-time_compilation), which means the 
code is compiled to native code (high-performance) on-demand. The Mono environment additionally 
provides easy access to the [x86 SIMD](http://www.counity.at/blog/2011/hardware-acceleration-in-net-part-1-1-mono-simd-introduction/)
(Single Instruction, Multiple Data) commands which provide substantial speed-ups
for certain types of processing.

Being built on the .NET and Mono runtimes, integrating highly optimized, 
native code libraries (C/C++, FORTRAN, etc) such as the Intel [Math Kernel Library (MKL)]
(http://software.intel.com/en-us/intel-mkl) is straightforward. The [P/Invoke]
(http://en.wikipedia.org/wiki/Platform_Invocation_Services) system allows managed code
to call directly into native libraries and helps marshal data between environments.

Performance of the developer is at least as critical as the performance of the resulting
code. F# is a very expressive, concise language with ready access to libraries of common
algorithms and data structures. The rest of this page surveys some of the most common
numerical computing libraries available for F#.


### Open-source libraries

Here are some open source libraries:

 * [ILNumerics](http://ilnumerics.net/) - an open- or closed-source library offering high-
   performance numerical algorithms as well as charting and plotting capabilities. The library
   is based on efficient, general-purpose array classes implementing vectors, matrices, and
   n-dimensional arrays. Provided algorithms include standard linear algebra transforms,
   a high-performance Fast Fourier Transform (FFT) library, and a collection of sorting 
   and machine learning algorithms. Plotting is based on OpenGL and supports both 2d and 3d
   plots. ILNumerics supports .NET 4.0 as well as Mono (recommend 2.10 or above). Licensing 
   is GPLv3 or commercial (paid) license.
 
 * [Math.NET Numerics](https://github.com/mathnet/mathnet-numerics) provides 
   a large collection of algorithms needed in science and engineering, including linear algebra, 
   special functions, statistics, probability models, interpolation and FFTs. In addition to the 
   core .Net package, Numerics specifically supports F# 3.0 with idiomatic extension modules and 
   maintains mathematical data structures like BigRational that originated in the F# PowerPack. 
   If a performance boost is needed, the managed-code provider backing its linear algebra routines 
   and decompositions can be exchanged with wrappers for optimized native implementations such as 
   Intel MKL. Supports Mono and .Net 4.0 on Linux, Mac and Windows. The portable version also SL5 
   and .NET for Windows Store apps. License: MIT/X11
  
 * [Xaye.Math](https://github.com/cuda/Xaye.Math) is an F# math library using optimized native 
   routines of Intel MKL. [License](https://github.com/cuda/Xaye.Math/blob/master/LICENSE.txt).


### Commercial libraries

Here are some commercial libraries:

 * [Alea.CUDA](http://www.quantalea.net/products/overview/) - a framework for 
   developing GPU-accelerated algorithms in F# on .NET and Mono. Utilizing F# quotations and the 
   LLVM compiler it is able to compile GPU kernels on-the-fly and schedule them on one or 
   more nVidea GPU's. Advanced GPU features such as textures and shared memory are
   supported. Available from (Quantalea)[http://www.quantalea.net/].

 * [Extreme Optimization Numerical Libraries for .NET](http://www.extremeoptimization.com/) - 
   a set of three libraries focused on vector and matrix processing, 
   linear algebra methods, and statistics functions. The library includes a large selection of 
   standard algorithms from matrix factorization, function optimization, numerical integration, 
   K-means clustering, and PCA (principal component analysis). Options are provided to run  
   using pure managed code for portability or to utilize highly tuned native code for 
   additional performance. Extreme Optimization supports .NET 3.5 and 4.0 (2.0 version 
   available) and execution on Mono.

 * [Microsoft Solver Foundation (MSF)](http://msdn.microsoft.com/en-us/devlabs/hh145003.aspx) -
   a .NET package for designing and optimizing mathematical models. MSF provides built-in
   solvers for linear- and quadratic-programming, as well as non-linear models based on Nelder-Mead
   or quasi-Newtonian algorithms. Models can be built using the Optimization Modeling Language
   (OML) or using C# or F# and other .NET languages. MSF version 3.1 is available in a free
   Express Edition or via an MSDN subscription.
   
 * [NMath, NMath Stats](http://www.centerspace.net/products/c-sharp-vb-net-math-library-products/) -
   a suite providing core math and statistics functions. NMath provides sparse- and 
   dense-matrix manipulations, FFT algorithms, and numeric algorithms such as curve-fitting, 
   integration, and differentiation. NMath Stats is built on NMath and provides statistics 
   functions such multiple linear regression, hypothesis testing, and nonnegative matrix 
   factorization. NMath and NMath Stats support .NET 4.5 and are available from 
   [CenterSpace Software](http://www.centerspace.net/).
   
 * [StatFactory FCore](http://www.statfactory.co.uk/) - a high-performance numerical
   library supporting both CPU and GPGPU computing. The library includes multi-dimensional
   dense matrix and 2d sparse matrix support, standard linear algebra routines, and summary
   statistics. The library provides options to run both 100% managed code or to use optimized 
   native libraries such as MKL.

 * [F# for Numerics](http://www.ffconsultancy.com/products/fsharp_for_numerics/) - 
   a collection of numeric algorithms including matrix operations, optimization and 
   interpolation functions, 1d and 2d FFTs, and pseudo-random number generation. The library uses 
   the standard F# PowerPack Matrix for compatibility. F# for Numerics supports .NET. 
   The library is available from [Flying Frog Consultancy](http://www.ffconsultancy.com/).

 * [F# for Visualization](http://www.ffconsultancy.com/products/fsharp_for_visualization/index.html) -
   a 2d and 3d vector graphics library with a native F# interface.  The
   package provides interactive plotting from within Visual Studio and support for generating
   animations. F# for Visualization supports .NET. The library is
   available from [Flying Frog Consultancy](http://www.ffconsultancy.com/).



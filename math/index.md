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
native code libraries (C/C++, FORTRAN, etc) such as the Intel Math Kernel Library
is straightforward.

Performance of the developer is at least as critical as the performance of the resulting
code. A big part of developer performance is ready access to libraries of common
algorithms and data structures. The rest of this page surveys some of the most common
numberical computing libraries available for F#.


### Open-source libraries

Here are some open source libraries:

 * [Math.NET Numerics](https://github.com/mathnet/mathnet-numerics) Math.NET Mumerics provides
   a large collection of common algorithms needed in science and engineering, including
   linear algebra, probability models, random numbers, interpolation, and FFT's. This package
   also includes commonly useful data structure such as sparse and dense vector and matrix
   implementations. The libraries are managed code with wrappers available for optimized native 
   implementations such as [MKL](http://software.intel.com/en-us/intel-mkl) and 
   [ATLAS](http://math-atlas.sourceforge.net/). License: MIT/X11


### Commercial libraries

Here are some commercial libraries:

 * [StatFactory FCore](http://www.statfactory.co.uk/)
 * [QuantAlea] (http://www.quantalea.net/). GPU-accelerated financial analysis libraries.
 * Flying Frog
 * MKL?
 * etc..



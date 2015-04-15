---
layout: default
title: Use F# for GPU Programming | The F# Software Foundation
headline: Use F# for GPU Programming
---

GPU execution is a technique for high-performance financial, image processing and other 
data-parallel numerical programming. The following options are available for executing F# on the GPU. 

If you would to list an 
option here, please submit a pull request by [editing this page](https://github.com/fsharp/fsfoundation/edit/gh-pages/use/gpu/index.md).

### Option 1 - Use Alea GPU, for F#-enabled CUDA programming 

![logo](/images/thumbs/quantalea-small.png)&nbsp; [Alea GPU](http://www.quantalea.com/static/app/tutorial/index.html) is a GPU programming toolchain supporting 

* Debugging with Visual NSight
* Profiling with NVProf 
* GPU scripting for rapid prototyping
 
It is a complete solution to develop CUDA accelerated GPU applications on .NET. and relies on F# and LLVM to generate highly optimized CUDA code performing at the same level as CUDA C/C++ or Fortran code. 

<br />

### Option 2 - Use StatFactory's FCore library, a GPU-enabled F# maths/stats library

* See [the StatFactory FCore page](http://www.statfactory.co.uk).


<br />

### Option 3 - Use FSCL, an open-source F#-to-OpenCL compiler

* See [the FSCL project blog](https://github.com/FSCL/FSCL.Compiler). FSCL Compiler is a source-to-source compiler that translates quoted F# function calls and other contructs into valid C99 OpenCL kernel sources, enabling programming OpenCL-enabled parallel devices from within F#. Contributions welcome!

<br />

### Option 4 - Use GpuLINQ, an open source F#/C# LINQ-to-OpenCL compiler

* See [the GpuLINQ project](https://github.com/nessos/GpuLinq/)

<br />

### Option 5 - Use Brahma.FSharp, an open source F# tool for OpenCL programming

* See [the Brahma.FSharp project](https://sites.google.com/site/semathsrprojects/home/brahma-fsharp/)

<br />




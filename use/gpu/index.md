---
layout: default
title: Using F# for GPU Programming | The F# Software Foundation
headline: Using F# for GPU Programming
---

GPU execution is a technique for high-performance financial, image processing and other 
data-parallel numerical programming. The following options are available for executing F# on the GPU. 

If you would to list an 
option here, please submit a pull request by [editing this page](https://github.com/fsharp/fsfoundation/edit/gh-pages/use/gpu/index.md).

### Option 1 - Use Alea.cuBase, for F#-enabled CUDA programming 

Alea.cuBase is a professional F# to GPU compiler supporting 

* Debugging with Visual NSight
* Profiling with NVProf 
* GPU scripting for rapid prototyping
 
It is a complete solution to develop CUDA accelerated GPU applications on .NET. and relies on F# and LLVM to generate highly optimized CUDA code performing at the same level as CUDA C/C++ or Fortran code. 

To get started 

* Get [Alea.cuBase on the NuGet Gallery](https://www.nuget.org/packages/Alea.cuBase/)

* See the [release annoucement](http://blog.quantalea.net/alea-cubase-1-3-released/), which includes links to the getting started notes and a growing list of samples

* Real-world applications of Alea.cuBase include [GPU Applications for Modern Large Scale Asset Management](https://www.quantalea.net/media/pdf/2014-03-27_Gpus_large_scale_asset_management.pdf) and [Vulpes](https://github.com/fsprojects/Vulpes), an implementation of deep belief and deep learning for the GPU

[QuantAlea](http://www.quantalea.net/) are the primary contributors to Alea.cuBase and are a consulting company providing consulting services for F# and financial GPU programming.

<br />

### Option 2 - Use StatFactory's FCore library, a GPU-enabled F# maths/stats library

* See [the StatFactory FCore page](http://www.statfactory.co.uk).


<br />

### Option 3 - Use FSCL, an open-source F#-to-OpenCL compiler

* See [the FSCL project blog](http://fscl.github.io/FSCL.Compiler/). FSCL Compiler is a source-to-source compiler that translates quoted F# function calls and other contructs into valid C99 OpenCL kernel sources, enabling programming OpenCL-enabled parallel devices from within F#. Contributions welcome!

* Follow [@FSCLFramework](https://twitter.com/FSCLFramework) on Twitter.

<br />

### Option 4 - Use GpuLINQ, an open source F#/C# LINQ-to-OpenCL compiler

* See [the GpuLINQ project](https://github.com/nessos/GpuLinq/)

<br />

### Option 5 - Use Brahma.FSharp, an open source F# tool for OpenCL programming

* See [the Brahma.FSharp project](https://sites.google.com/site/semathsrprojects/home/brahma-fsharp/)

<br />

### Option 6 - Use SharpShaders, an MIT-licensed F# tool to write GPU shader code

* See [the SharpShaders project](http://github.com/rookboom/SharpShaders/wiki/)

<br />



---
layout: default
title: Use F# for GPU Programming | The F# Software Foundation
headline: Use F# for GPU Programming
---

GPU execution is a technique for high-performance machine learning, financial, image processing and other 
data-parallel numerical programming. The following options are available for executing F# on the GPU. 

If you would like to list an 
option here, please submit a pull request by [editing this page](https://github.com/fsharp/fsfoundation/edit/gh-pages/use/gpu/index.md).

### Option 1 - Use Alea GPU V3, for F#-enabled CUDA programming 

![logo](/images/thumbs/quantalea-small.png)&nbsp; [Alea GPU](http://www.aleagpu.com) is a GPU programming toolchain supporting 

* Free [community edition](http://www.aleagpu.com/license.html) for GeForce and Quadro GPUs with a [Creative Commons license](https://creativecommons.org/licenses/by/4.0/)
* Simplified GPU programming with GPU parallel-for and parallel aggregate
* Automatic memory management to move data to and from the GPU
* GPU scripting for rapid prototyping in the interactive console
* GPU JIT compilation 
* Seamless integration of NVIDIA GPU libraries such as cuRand, cuBlas, cuDNN etc.
* Debugging F# GPU code in Visual Studio with Visual NSight 
* Profiling F# GPU code in Visual Studio with NVProf 
* Large [gallery of samples](http://www.aleagpu.com/gallery.html) 
* Also supporting C#
 
Alea GPU is a complete solution to develop CUDA accelerated GPU applications on .NET. It is a full compiler based on F# and LLVM to generate highly optimized GPU code. [Alea GPU performs at the same level as CUDA C/C++ or Fortran code](http://blog.quantalea.com/?p=9871). 

[Alea TK](http://www.aleatk.com) is a new open source machine learning library for .NET based on Alea GPU, which shows how to use Alea GPU in larger projects. 

<br />

### Option 2 - Use FSCL, an open-source F#-to-OpenCL compiler

* See [the FSCL project blog](https://github.com/FSCL/FSCL.Compiler). FSCL Compiler is a source-to-source compiler that translates quoted F# function calls and other contructs into valid C99 OpenCL kernel sources, enabling programming OpenCL-enabled parallel devices from within F#. Contributions welcome!

<br />

### Option 3 - Use GpuLINQ, an open source F#/C# LINQ-to-OpenCL compiler

* See [the GpuLINQ project](https://github.com/nessos/GpuLinq/)

<br />

### Option 4 - Use Brahma.FSharp, an open source F# tool for OpenCL programming

[Brahma.FSharp](http://yaccconstructor.github.io/Brahma.FSharp/) is a library for F# quotations to OpenCL translation.

Features of [Brahma.FSharp](http://yaccconstructor.github.io/Brahma.FSharp/):

 * Basic aim is to translate native F# code to OpenCL with minimization of different wrappers and custom types.
 * Usage of OpenCL for communication with GPU allows you to work not only with NVIDIA hardware but with any device, which supports OpenCL (e.g. with AMD devices).
 * Support tuples and structures.
 * Ability to reuse existing OpenCl kernels by loading strongly typed signatures.

<br />




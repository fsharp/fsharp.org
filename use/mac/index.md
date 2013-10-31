---
layout: page
title: Use F# on Mac OSX | The F# Software Foundation
headline: Use F# on Mac OSX
---


### Option 1: Install F# 3.0 alone

To use F# 3.0 on Mac OSX, simply:

*  [Install Mono 3.2.3 or later](http://www.go-mono.com/mono-downloads/download.html). This includes F# 3.0.

See the [Mac, Linux and Cross-Platform Dev Guide](/guides/mac-linux-cross-platform) to
go further. For 64-bit support, see below.

<br />

### Option 2: Install F# 3.0 with Xamarin Studio:

* [Install Mono 3.2.3 or later](http://www.go-mono.com/mono-downloads/download.html). This includes F# 3.0.
* [Install Xamarin Studio](http://xamarin.com/studio) or [MonoDevelop](http://monodevelop.com). Run and check it is version 4.0.3, Build 13 or later under "About". Update using the Alpha channel of "Tools --> Addin Manager" if needed
* Go to the AddIn Manager and

  Add “Language Bindings –> F# Language Binding”. If it is missing, [build and install it from source](https://github.com/fsharp/fsharpbinding/blob/master/monodevelop/README.md). 
  
  Add “Mac Development –> F# Support for MonoMac and Xamarin.Mac Development”
  
  Optionally, add “Mobile Development –> F# Support for Android Development”

  Optionally, add “Mobile Development –> F# Support for iOS Development”

You can now create new projects in Xamarin Studio and MonoDevelop. Ignore any unresolved FSharp.Core.dll.

See the [Mac, Linux and Cross-Platform Dev Guide](/guides/mac-linux-cross-platform) to
go further. For 64-bit support, see below.

<br />


### Option 3: Install F# 3.0 (64-bit)

To use F# on Mac OSX in 64-bit mode, use the following:

* [Get and build a 64-bit installation of the runtime used by F# from source](http://www.mono-project.com/Compiling_Mono_on_OSX). 

  Be sure to set the "--prefix" flag, e.g. "--prefix=/mono64"

    git clone https://github.com/mono/mono
    cd mono
    ./autogen.sh --prefix=/mono64 --enable-nls=no
    make
    sudo make install

* [Compile F# 3.0 from source](https://github.com/fsharp/fsharp/blob/master/README.md)

  Be sure to set the "--prefix" flag, e.g. "--prefix=/mono64"

    git clone https://github.com/fsharp/fsharp
    cd fsharp
    ./autogen.sh --prefix=/mono64 
    make
    sudo make install

* When you run mono, use /mono64/bin/mono.  You will probably need to put /mono64/bin on your path.  

* You may need to adjust other applications that launch mono to look in this location.

* Xamarin Studio and MonoDevelop run applications in 32-bit mode by default. You will probably need to run programs from the command line to benefit from 64-bit execution.

<br />

### Option 4: Make JS/HTML5 web apps

* [Using F# for HTML5 Web Applications](/use/html5)

<br />


### Option 5: Learn F# in the Browser on the Mac

* [Learn F# online at Try F#](http://tryfsharp.org)

<br />



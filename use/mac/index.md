---
layout: default
title: Use F# on Mac OSX | The F# Software Foundation
headline: Use F# on Mac OSX
---


### Option 1: Install F# 3.1 with Xamarin Studio

![logo](/images/thumbs/xamarin-studio.png)&nbsp;[Xamarin Studio](http://xamarin.com/studio) is a free IDE for general purpose development with freemium add-ins for mobile development which supports F# out of the box.

* [Install Xamarin Studio](http://xamarin.com/studio) 

You can now create new projects in Xamarin Studio and/or MonoDevelop and cross-compile projects built in 
Visual Studio and other environments.
See the [Mac, Linux and Cross-Platform Dev Guide](/guides/mac-linux-cross-platform) to
go further. For 64-bit support, see below.

<br />

### Option 2: Install F# 3.1 alone

To use F# 3.1 on Mac OSX, simply:

*  [Install the F# Cross-Platform Runtime (called Mono)](http://www.go-mono.com/mono-downloads/download.html). This includes F# 3.1. Use version 3.4.0 or later.

See the [Mac, Linux and Cross-Platform Dev Guide](/guides/mac-linux-cross-platform) to
go further. For 64-bit support, see below.

<br />



### Option 3: Install F# 3.1 (64-bit) from source

To use F# on Mac OSX in 64-bit mode, use the following:

* [Get and build a 64-bit installation of the runtime used by F# from source](http://www.mono-project.com/Compiling_Mono_on_OSX). 

  Set the "--prefix" flag, e.g. "--prefix=/mono64"

    ```git clone https://github.com/mono/mono```
    
    ```cd mono```
    
    ```./autogen.sh --prefix=/mono64 --enable-nls=no```
    
    ```make```
    
    ```sudo make install```

* [Compile F# 3.1 from source](https://github.com/fsharp/fsharp/blob/master/README.md)

  Set the "--prefix" flag, e.g. "--prefix=/mono64"

    ```git clone https://github.com/fsharp/fsharp```
    
    ```cd fsharp```
    
    ```./autogen.sh --prefix=/mono64```
    
    ```make```
    
    ```sudo make install```

* When you run mono, use ```/mono64/bin/mono``` and put ```/mono64/bin``` on your path.  

* Adjust other applications that launch mono to use this location.

* Xamarin Studio and MonoDevelop run applications in 32-bit mode by default. You will need to run programs from the command line to benefit from 64-bit execution.

<br />


### Option 4: Learn F# in the Browser on the Mac

* ![logo](/images/thumbs/tryfsharp.jpg)&nbsp;[Learn F# online at Try F#](http://tryfsharp.org)

<br />



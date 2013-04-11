---
layout: page
title: Use F# on Linux | The F# Software Foundation
headline: Use F# on Linux
---


### Option 1: Build F# 3.0 

Packages are in preparation. If you can help, please email the [F# Open Source Group](http://fsharp.github.com)

1. Install Mono. try "apt-get install mono-runtime mono-gmcs". Check the version is at least 2.10.9.
  
   Ubuntu: [Build and install mono from source](http://github.com/mono/mono), e.g. Mono 3.0.0 or later. If installing Mono and F# 3.0 to a private prefix, [follow the instructions for setting up paths for a parallel build of mono](http://mono-project.com/Parallel_Mono_Environments) and ensure LD_LIBRARY_PATH includes the "lib" directory of that prefix location {{   export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/home/user/mono/lib/"  }}

   Others: See [Mono on Linux](http://mono-project.com)

2. [Build and install the F# Compiler (open edition) from source](http://github.com/fsharp/fsharp). Install it to the same prefix as mono if you are using one.
3. Choose your editing environment from the list below.

Once built, use "fsharpi" to start F# Interactive, and use "fsharpc" to compile. 

    > fsharpi     (starts F# interactive)
    > fsharpc     (F# compiler)
    > xbuild      (Builds .fsproj projects and .sln files, including ones authored in Visual Studio)


If running F# interactive in Emacs or another similar environment, use 

    > fsharpi --readline- 

to turn of console processing.

For visual tooling, use "apt-get monodevelop" or [build/install it from source](http://github.com/mono/monodevelop).
Use the same prefix if you are using one. Then [install the F# AddIn for MonoDevelop from the AddIn gallery](http://fsharp.github.com/fsharpbinding) 

<br> </br>
<br> </br>

### Option 2: Using F# 3.0 On Linux (via WebSharper) 
* [WebSharper](http://www.websharper.com) can make F# HTML5 web apps which can be used from Linux and any HTML5-enabled browser

<br> </br>
<br> </br>

### What should I use to edit my code?

Some editors have specific support for F#, either builtin or through addons provided by the F# community: 
* [MonoDevelop](http://monodevelop.com) with [the F# AddIn for MonoDevelop](http://fsharp.github.com/fsharpbinding)
* Emacs. There is an [F# mode for Emacs](http://fsharp.github.com/fsharpbinding/) that extends Emacs with syntax highlighting for F#, support for working with F# Interactive and much more.
* TextMate 
* GEdit 


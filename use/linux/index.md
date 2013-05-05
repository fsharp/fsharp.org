---
layout: page
title: Use F# on Linux | The F# Software Foundation
headline: Use F# on Linux
---

If you can help with Linux packages, please email the [F# Open Source Group](http://fsharp.github.com).

                                                                  
### Option 1: Build and install the F# 3.0 runtime, compiler and tools


1. Get the runtime used by F#. Either [follow these instructions](http://www.go-mono.com/mono-downloads/download.html) or use:

       sudo apt-get install mono-devel
   
   or build and install version 3.0 (needed for xbuild support)
   
       sudo apt-get install libtool autoconf g++ gettext make git
       git clone https://github.com/mono/mono
       cd mono
       ./autogen.sh   --prefix /usr
       make get-monolite-latest
       make
       sudo make install

   If installing to a private prefix, [follow these instructions](http://mono-project.com/Parallel_Mono_Environments) and ensure LD_LIBRARY_PATH includes the "lib" directory of that prefix location {{   export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/home/user/mono/lib/"  }}. 
   
2. Build and install the F# Compiler (open edition) from source.

       sudo apt-get install autoconf pkg-config make git
       git clone https://github.com/fsharp/fsharp
       cd fsharp
       ./autogen.sh --prefix /usr
       make
       sudo make install

   If installing to a different prefix, use the same prefix as for the F# runtime above.

### Option 2: Get the F# 3.0 Debian packages

You can get F# 3.0 from the Debian *unstable* repository (see also [the package home page](http://packages.qa.debian.org/f/fsharp.html)).

1. Add the following to /etc/apt/sources.list:

        deb http://http.us.debian.org/debian/ unstable main contrib non-free 
        deb-src http://http.us.debian.org/debian/ unstable main contrib non-free 
                       
2. Get the packages with the following commands:

        sudo apt-get update
        sudo apt-get install mono-devel
        sudo apt-get install fsharp
        sudo apt-get install fsharp-console
        sudo cp -p /usr/lib/cli/FSharp.*-4.3/* /usr/lib/mono/4.0/
       
   The last line is needed due to packaging bugs [706683](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=706683) and [705906](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=705906) 


### Using F# on Linux

Once installed, use "fsharpi" to start F# Interactive, and use "fsharpc" to compile. 

    fsharpi     (starts F# interactive)
    fsharpc     (F# compiler)
    xbuild      (requires Mono 3.0, Builds .fsproj projects and .sln files, including ones authored in Visual Studio)

If running F# interactive in Emacs or another similar environment, use 
              
    > fsharpi --readline- 

to turn of console processing.                    

### Editing tools

Some editors have specific support for F#, either builtin or through addons provided by the F# community: 

* For visual tooling:

       sudo apt-get install monodevelop
  
  or [build/install it from source](http://github.com/mono/monodevelop).
  
  Then [install the F# AddIn for MonoDevelop from the AddIn gallery](http://fsharp.github.com/fsharpbinding) 

* Emacs. There is an [F# mode for Emacs](http://fsharp.github.com/fsharpbinding/) that extends Emacs with syntax highlighting and much more.

<br> </br>
<br> </br>

### Option 2: Using F# 3.0 On Linux (via WebSharper) 

* [WebSharper](http://www.websharper.com) can make F# HTML5 web apps which can be used from Linux and any HTML5-enabled browser

<br> </br>
<br> </br>



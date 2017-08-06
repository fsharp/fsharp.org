---
layout: default
title: Use F# on Mac OSX | The F# Software Foundation
headline: Use F# on Mac OSX
---

### Option 1: Install F# with Xamarin Studio

![logo](/images/thumbs/xamarin-studio.png)&nbsp;[Xamarin Studio](http://xamarin.com/studio) is a free IDE for general purpose development, with freemium add-ins for mobile development. 

* [Install Xamarin Studio](http://xamarin.com/studio) 

You can create new projects and cross-compile projects built in 
Visual Studio and other environments.
See the [Mac, Linux and Cross-Platform Dev Guide](/guides/mac-linux-cross-platform) to
go further. For 64-bit support, see below.

<br />

### Option 2: Install Visual Studio Code

![logo](/images/thumbs/VSCode.png)&nbsp;[Visual Studio Code](https://code.visualstudio.com) is a free, [open source](https://github.com/microsoft/vscode), cross platform source code editor
supporting [a lot of languages](https://code.visualstudio.com/docs/languages/overview).
F# is supported by the [Ionide](http://ionide.io/) project and is a nice integration.

1. Install [Visual Studio Code](https://code.visualstudio.com/download) for Mac
1. Install the [latest version of Mono](http://www.mono-project.com/download/#download-mac) from the Mono project or via Homebrew (see option 5 below).
1. Add Mono `/bin` folder to your `PATH`: `export PATH=$PATH:/Library/Frameworks/Mono.framework/Versions/Current/bin/`. For more info see: [Mono installed on Mac, but not recognized in terminal](http://stackoverflow.com/questions/32542535/mono-installed-on-mac-but-not-recognized-in-terminal)
1. Go back to VS Code, press `Cmd+P` and enter the following to install the Ionide package.

        ext install Ionide-fsharp


<br />

### Option 3: Install JetBrains Rider

![logo](/images/thumbs/rider.png)&nbsp;[JetBrains Rider](https://www.jetbrains.com/rider) is a cross-platform .NET IDE built using IntelliJ and ReSharper technology. It offers support for .NET and .NET Core applications on all platforms.

1. Install [JetBrains Rider](https://www.jetbrains.com/rider/download/) for Mac.
2. Install the [latest version of Mono](http://www.mono-project.com/download/#download-mac).
3. Ensure Mono `/bin` folder is added to your `PATH`: `export PATH=$PATH:/Library/Frameworks/Mono.framework/Versions/Current/bin/`. For more info see: [Mono installed on Mac, but not recognized in terminal](http://stackoverflow.com/questions/32542535/mono-installed-on-mac-but-not-recognized-in-terminal)

<br />

### Option 4: Install F# alone

To use the F# command-line compiler and tools on Mac OSX:

*  [Install Mono](http://www.go-mono.com/mono-downloads/download.html). Use version 4.2.0 or later.
*  Add Mono `/bin` folder to your `PATH`: `export PATH=$PATH:/Library/Frameworks/Mono.framework/Versions/Current/bin/`. For more info see: [Mono installed on Mac, but not recognized in terminal](http://stackoverflow.com/questions/32542535/mono-installed-on-mac-but-not-recognized-in-terminal)

See the [Mac, Linux and Cross-Platform Dev Guide](/guides/mac-linux-cross-platform) to
go further. For 64-bit support, see below.

<br />

### Option 5: Install F# via Homebrew (64-bit)

F# is installed as part of the Mono homebrew formula:

    brew install mono

You can configure Xamarin Studio to use this 64-bit installation: Preferences > .NET Runtimes > Add > ```/usr/local```

<br />

### Option 6: Install F# (64-bit) from source

To use the F# command-line compiler and tools on Mac OSX in 64-bit mode:

* [Get and build a 64-bit installation of the runtime used by F# from source](http://www.mono-project.com/Compiling_Mono_on_OSX). 

  Set the "--prefix" flag, e.g. "--prefix=/mono64"

    ```git clone https://github.com/mono/mono```
    
    ```cd mono```
    
    ```./autogen.sh --prefix=/mono64 --enable-nls=no```
    
    ```make```
    
    ```sudo make install```

* [Compile F# from source](https://github.com/fsharp/fsharp/blob/master/README.md)

  Set the "--prefix" flag, e.g. "--prefix=/mono64"

    ```git clone https://github.com/fsharp/fsharp```
    
    ```cd fsharp```
    
    ```./autogen.sh --prefix=/mono64```
    
    ```make```
    
    ```sudo make install```

* When you run mono, use ```/mono64/bin/mono``` and put ```/mono64/bin``` on your path.  Adjust other applications that launch mono to use this location.

* Xamarin Studio and MonoDevelop run applications in 32-bit mode by default. You can configure additional runtimes under Preferences > .NET Runtimes to benefit from 64-bit execution.

<br />



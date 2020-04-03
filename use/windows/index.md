---
layout: default
title: Use F# on Windows | The F# Software Foundation
headline: Use F# on Windows
---

### Option 1: Install .Net Core SDK and use your own editor.

Install [.NET Core SDK](https://dotnet.microsoft.com/download). Once that is installed lets start by saying hello world.
<br/>

#### Say hello from a F# Script
 Create a file called 'hello.fsx' containing the following content. `printfn "Hello World from F#"`. Compile and run it from your terminal with `dotnet fsi .\hello.fsx`. After the welcome to .Net message (It will only show once) you will see "Hello World from F#".
<br/>

#### Say hello from a F# Console app
Create a project from a dotnet template with `dotnet new console --language F#`. Build and run it with `dotnet run`. You will see a message saying "Hello World from F#".

For more information about F# command-line tools, e.g. for a build server or cloud VM image, see [Get started with F# with the .NET Core CLI](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-command-line).
<br/>

### Option 2: Install Visual Studio

![logo](/images/thumbs/vstudio.png)&nbsp;On Windows, F# programmers commonly use the Visual Studio tools for F#.

* [Visual Studio 2019](https://www.visualstudio.com/downloads/) comes with F# support in all its editions: Community, Professional and Enterprise. Community is completely free. See [Get started with F# in Visual Studio](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-visual-studio) for more information.

* If you already have Visual Studio 2015/17, you can use that. They also include F# support, though the tooling is not as advanced as in Visual Studio 2019.

<br />

### Option 3: Install Visual Studio Code

![logo](/images/thumbs/VSCode.png)&nbsp;[Visual Studio Code](https://code.visualstudio.com) is a free, [open source](https://github.com/microsoft/vscode), cross platform source code editor
supporting [a lot of languages](https://code.visualstudio.com/docs/languages/overview).
F# is supported by the [Ionide](http://ionide.io/) project.

1. Install [Visual Studio Code](https://code.visualstudio.com/download) for Windows.
2. Press `Ctrl+Shift+P` and enter the following to install the Ionide package for VS Code.

        ext install Ionide-fsharp

You will also need to install either Visual Studio or the [Visual Studio 2019 Build Tools](https://www.visualstudio.com/downloads/#build-tools-for-visual-studio-2019). (See [Ionide](http://ionide.io/) for more information.)

Warning: until [Ionide 4.0](https://github.com/ionide/ionide-vscode-fsharp/issues/1108) is released, avoid using the integrated project creation; instead create new F# projects using the command line ([`dotnet new`](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-command-line)).

<br />

### Option 4: Install JetBrains Rider

![logo](/images/thumbs/rider.png)&nbsp;[JetBrains Rider](https://www.jetbrains.com/rider) is a cross-platform .NET IDE built using IntelliJ and ReSharper technology. It offers support for .NET and .NET Core applications on all platforms.

1. Install [JetBrains Rider](https://www.jetbrains.com/rider/download/) for Windows.
2. (optional) Install the latest [.NET Core SDK](https://www.microsoft.com/net/core#windowscmd).

You will also need either to install Visual Studio or to follow the steps [here](https://rider-support.jetbrains.com/hc/en-us/articles/207288089-Using-Rider-under-Windows-without-Visual-Studio-prerequisites).

<br />

### Option 5: Build F# from source

Build and contribute to the F# compiler and library from [the source](https://github.com/dotnet/fsharp).

---
layout: default
title: Use F# on Windows | The F# Software Foundation
headline: Use F# on Windows
---

### Option 1: Install the CLI tools and use your own editor

![logo](/images/thumbs/dotnet.png)&nbsp;Install the [.NET Core SDK](https://dotnet.microsoft.com/download). Once that is installed, you can begin using F#!

Create a file called `hello.fsx` that looks like this:

```fsharp
printfn "Hello World from F#"
```

Now compile and run this F# script with the following command:

```
dotnet fsi hello.fsx
```

If this is your first time using .NET Core, there will be a short, one-time message about using the .NET SDK. After that, you'll see the following output in your console:

```
Hello World from F#
```

To create a project use

```
dotnet new console --language F#
dotnet run
```

You will see a message saying "Hello World from F#".

For more information see [Getting started with the F# command line tools](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-command-line).

<br />

### Option 2: Install Visual Studio Code and Ionide

![logo](/images/thumbs/VSCode.png)&nbsp;[Visual Studio Code](https://code.visualstudio.com) is a free, [open source](https://github.com/microsoft/vscode), cross platform source code editor
supporting [a lot of languages](https://code.visualstudio.com/docs/languages/overview).
F# is supported by the [Ionide](http://ionide.io/) project.

1. Install [.NET Core SDK](https://dotnet.microsoft.com/download) like in step 1.
1. Install [Visual Studio Code](https://code.visualstudio.com/download) for Windows.
2. Press `Ctrl+Shift+P` and enter the following to install the Ionide package for VS Code.

        ext install Ionide-fsharp

You can also install the plugin from the plugin pane on the left-hand side.

Ionide works best if you use the .NET CLI to create your projects. You can learn more in [Get Started with F# in Visual Studio Code](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-vscode).

<br />

### Option 3: Install Visual Studio

![logo](/images/thumbs/vstudio.png)&nbsp;On Windows, F# programmers commonly use the Visual Studio tools for F#.

* [Visual Studio 2019](https://www.visualstudio.com/downloads/) comes with F# support in all its editions: Community, Professional and Enterprise. Community is completely free. See [Get started with F# in Visual Studio](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-visual-studio) for more information.

* If you already have an older version of Visual Studio, F# is also supported. But the quality of the tooling support and number of features is not as high as in Visual Stusio 2019.

<br />

### Option 4: Install JetBrains Rider

![logo](/images/thumbs/rider.png)&nbsp;[JetBrains Rider](https://www.jetbrains.com/rider) is a cross-platform .NET IDE built using IntelliJ and ReSharper technology. It offers support for .NET and .NET Core applications on all platforms.

1. Install [JetBrains Rider](https://www.jetbrains.com/rider/download/) for Windows.
2. Install the latest [.NET Core SDK](https://www.microsoft.com/net/core#windowscmd).

You will also need either to install Visual Studio or to follow the steps [here](https://rider-support.jetbrains.com/hc/en-us/articles/207288089-Using-Rider-under-Windows-without-Visual-Studio-prerequisites) if you need to use the older .NET Framework instead of .NET Core.

<br />

### Option 5: Build F# from source

You can build and contribute to the F# compiler and library from [the source](https://github.com/dotnet/fsharp) if that is your preference.

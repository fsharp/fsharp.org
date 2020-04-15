---
layout: default
title: Use F# on macOS | The F# Software Foundation
headline: Use F# on macOS
---

### Option 1: Install .Net Core SDK and use your own editor

Install [.NET Core SDK](https://dotnet.microsoft.com/download). Once that is installed, you can begin using F#!

#### Say hello from an F# Script

Create a file called `hello.fsx` that looks like this:

```fsharp
printfn "Hello World from F#"
```

You can compile and run this F# script with the following command:

```
dotnet fsi hello.fsx
```

If this is your first time using .NET Core, there will be a short, one-time message about using the .NET SDK. After that, you'll see the following output in your console:

```
Hello World from F#
```

#### Say hello from an F# Console app

Create a project from a dotnet template with `dotnet new console --language F#`. Build and run it with `dotnet run`. You will see a message saying "Hello World from F#".

For more information about using F# with command-line tools, see [Get started with F# with the .NET Core CLI](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-command-line).


### Option 3: Install Visual Studio Code and Ionide

![logo](/images/thumbs/VSCode.png)&nbsp;[Visual Studio Code](https://code.visualstudio.com) is a free, [open source](https://github.com/microsoft/vscode), cross platform source code editor
supporting [a lot of languages](https://code.visualstudio.com/docs/languages/overview).
F# is supported by the [Ionide](http://ionide.io/) project.

1. Install [.NET Core SDK](https://dotnet.microsoft.com/download) like in step 1.
1. Install [Visual Studio Code](https://code.visualstudio.com/download) for macOS.
2. Press `Ctrl+Shift+P` and enter the following to install the Ionide package for VS Code.

        ext install Ionide-fsharp

You can also install the plugin from the plugin pane on the left-hand side.

Ionide works best if you use the .NET CLI to create your projects. You can learn more in [Get Started with F# in Visual Studio Code](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-vscode).

### Option 3: Install Visual Studio for Mac

![logo](/images/thumbs/xamarin-studio.png)&nbsp;[Visual Studio for Mac](https://www.visualstudio.com/vs/visual-studio-mac/) is a free IDE for general purpose development. It supports a wide range of projects that you can use F# with.

You can learn more at [Get started with F# in Visual Studio for Mac](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-with-visual-studio-for-mac).

### Option 3: Install JetBrains Rider

![logo](/images/thumbs/rider.png)&nbsp;[JetBrains Rider](https://www.jetbrains.com/rider) is a cross-platform .NET IDE built using IntelliJ and ReSharper technology. It offers support for .NET and .NET Core applications on all platforms.

1. Install [JetBrains Rider](https://www.jetbrains.com/rider/download/) for Mac.
2. Install the [latest version of Mono](https://www.mono-project.com/download/stable/#download-mac).
3. Ensure Mono `/bin` folder is added to your `PATH`: `export PATH=$PATH:/Library/Frameworks/Mono.framework/Versions/Current/bin/`. For more info see: [Mono installed on Mac, but not recognized in terminal](http://stackoverflow.com/questions/32542535/mono-installed-on-mac-but-not-recognized-in-terminal)

### Option 5: Build F# from source

You can build and contribute to the F# compiler and library from [the source](https://github.com/dotnet/fsharp) if that is your preference.

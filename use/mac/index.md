---
layout: page
title: Use F# on macOS | fsharp.org
headline: Use F# on macOS
---

<div class="space-y-4 sm:space-y-8 lg:space-y-12">
<article markdown=1 class="prose-card">
## Option 1: Install the CLI tools and use your own editor
<img alt=".NET Core Logo" class="w-24 h-24 m-0" src="{{ '../../images/thumbs/NET_Core_Logo.svg' | relative_url }}" />

Install the [.NET SDK](https://dotnet.microsoft.com/download).

Once that is installed, you can begin using F#!

Create a file called `hello.fsx` that looks like this:

```fsharp
printfn "Hello World from F#"
```

Now compile and run this F# script with the following command:

```bash
dotnet fsi hello.fsx
```

If this is your first time using .NET Core, there will be a short, one-time message about using the .NET SDK. After that, you'll see the following output in your console:

    Hello World from F#

To create a project use

```bash
dotnet new console --language F#
dotnet run
```

You will see a message saying "Hello World from F#".

For more information see [Getting started with the F# command line tools](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-command-line).

</article>

<article markdown=1 class="prose-card">
## Option 2: Install Visual Studio Code and Ionide
<div class="flex flex-row gap-4 items-center">
<img alt="Visual Studio Code Logo" class="h-24 aspect-auto m-0" src="{{ '../../images/thumbs/Visual_Studio_Code_1.35_icon.svg' | relative_url }}" />
<i class="fa-solid fa-plus fa-xl"></i>
<img alt="Ionide Logo" class="h-24 aspect-auto m-0" src="{{ '../../images/thumbs/ionide_logo.png' | relative_url }}" />
</div>
[Visual Studio Code](https://code.visualstudio.com) is a free, [open source](https://github.com/microsoft/vscode), cross platform source code editor
supporting [a lot of languages](https://code.visualstudio.com/docs/languages/overview).
F# is supported by the [Ionide](http://ionide.io/) project.

1.  Install [.NET Core SDK](https://dotnet.microsoft.com/download) like in step 1.

2.  Install [Visual Studio Code](https://code.visualstudio.com/download) for macOS.

3.  Press `Cmd+Shift+P` and enter the following to install the Ionide package for VS Code.

        ext install Ionide-fsharp

You can also install the plugin from the plugin pane on the left-hand side.

Ionide works best if you use the .NET CLI to create your projects. You can learn more in [Get Started with F# in Visual Studio Code](https://docs.microsoft.com/dotnet/fsharp/get-started/get-started-vscode).

</article>

<article markdown=1 class="prose-card">
## Option 3: Install JetBrains Rider
<img alt="Jetbrains Rider Logo" class="h-24 aspect-auto m-0" src="{{ "../../images/thumbs/Rider_icon.svg" | relative_url }}" />
[JetBrains Rider](https://www.jetbrains.com/rider) is a cross-platform .NET IDE built using IntelliJ and ReSharper technology. It offers support for .NET and .NET Core applications on all platforms.

You can install [JetBrains Rider from here](https://www.jetbrains.com/rider/download/).

  <figcaption class="text-xs text-pretty">
Copyright © 2025 JetBrains s.r.o. Rider and the Rider logo are trademarks of JetBrains s.r.o.
  </figcaption>

</article>

<article markdown=1 class="prose-card">
## Option 4: Build F# from source
<img alt="GitHub Logo" class="h-24 aspect-auto m-0 dark:hidden" src="{{ "../../images/thumbs/github-mark.svg" | relative_url }}" />
<img alt="GitHub Logo" class="h-24 aspect-auto m-0 hidden dark:block" src="{{ "../../images/thumbs/github-mark-white.svg" | relative_url }}" />

You can build and contribute to the F# compiler and library from [the source](https://github.com/dotnet/fsharp).

</article>
</div>

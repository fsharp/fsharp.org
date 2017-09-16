---
layout: default
title: Use F# on Windows | The F# Software Foundation
headline: Use F# on Windows
---


### Option 1: Install the Visual F# Tools from Microsoft

![logo](/images/thumbs/vstudio.png)&nbsp;On Windows, F# programmers commonly use the Visual F# Tools from Microsoft.

* [Visual Studio 2017](https://www.visualstudio.com/downloads/) comes with F# support in all its editions: Community, Professional and Enterprise. The installer includes it with some of the selectable workloads, or you can select it manually in the "Individual components" tab: under the "Development activities" category, check "F# language support".

* If you already have Visual Studio 2012/13/15 Professional or above, you can use that. All recent versions of Visual Studio come with the Visual F# Tools. The Visual F# Tools are installed automatically when you first create or open an F# project. You can also install the support [directly as a separate download](https://www.microsoft.com/en-us/download/details.aspx?id=48179).

* Otherwise, install the free [Visual Studio 2017 Community](http://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx).

See [Visual F# Resources](http://msdn.microsoft.com/en-us/vstudio/hh388569.aspx) for more information about the Visual F# Tools from Microsoft.

<br />

### Option 2: Install Visual Studio Code

![logo](/images/thumbs/VSCode.png)&nbsp;[Visual Studio Code](https://code.visualstudio.com) is a free, [open source](https://github.com/microsoft/vscode), cross platform source code editor
supporting [a lot of languages](https://code.visualstudio.com/docs/languages/overview).
F# is supported by the [Ionide](http://ionide.io/) project and is a nice integration.

1. Install [Visual Studio Code](https://code.visualstudio.com/download) for Windows
2. Press `Ctrl+P` and enter the following to install the Ionide package for VS Code.

        ext install Ionide-fsharp

You will also need to install the free F# compiler and command line tools in Step 4.

<br />

### Option 3: Install JetBrains Rider

![logo](/images/thumbs/rider.png)&nbsp;[JetBrains Rider](https://www.jetbrains.com/rider) is a cross-platform .NET IDE built using IntelliJ and ReSharper technology. It offers support for .NET and .NET Core applications on all platforms.

1. Install [JetBrains Rider](https://www.jetbrains.com/rider/download/) for Windows.
2. (optional) Install latest [.NET Core SDK](https://www.microsoft.com/net/core#windowscmd)

You will also need to install the free F# compiler and command line tools in Step 4.

<br />

### Option 4: Install the free F# compiler and tools alone

If you're just looking for F# command-line tools, e.g. for a build server or cloud VM image, then you have two primary options.

#### Option A: Visual Studio 2017 Build Tools 

The [Visual Studio 2017 Build Tools SKU](https://www.visualstudio.com/downloads/#build-tools-for-visual-studio-2017), despite the name, actually does not install Visual Studio.  It installs MSBuild and various other build tools and compiler toolchains.

Starting with Visual Studio 2017 Update 3, F# is an optional component.  Simply select F# from the Individual Components tab and press **Install**.

#### Option B: Standalone installations

1. Requires .NET 4.5:

   - On Windows 10 .NET 4.6 is already present by default

   - On Windows 8 and Windows 2012 Server, this is already present by default
   
   - On Windows 7 and Windows 2008 Server, [install .NET 4.5](https://www.microsoft.com/en-US/download/details.aspx?id=30653) from Microsoft

2. Requires the Windows SDK:

   - On Windows 10 use the [Windows 10 and .NET 4.6 SDK](https://dev.windows.com/en-US/downloads/windows-10-sdk) from Microsoft

   - On Windows 8.1 use the [Windows 8.1 and .NET 4.5.1 SDK](http://msdn.microsoft.com/windows/desktop/bg162891) from Microsoft
   
   - On Windows 8 or Windows 2012 Server use the [Windows 8 and .NET 4.5 SDK](http://msdn.microsoft.com/windows/hardware/hh852363.aspx) from Microsoft
   
   - On Windows 7 or Windows 2008 Server use the [Windows 7 and .NET 4.0 SDK](http://www.microsoft.com/download/details.aspx?id=8279) from Microsoft
 
3. Requires Microsoft Build Tools 2017 if you don't have it on the box already - [Install Microsoft Build Tools 2017 through the Build Tools SKU of VS 2017](https://www.visualstudio.com/downloads/#build-tools-for-visual-studio-2017)

    (Note: Although this download says Visual Studio 2017, the Build Tools SKU does not install Visual Studio.  Only MSBuild and other tools required for build servers.)

4. [Install the free F# 4.1 Compiler SDK](http://download.microsoft.com/download/F/3/D/F3D6045E-4040-4058-ADAD-2698F1793CBC/Microsoft.FSharp.SDK.Core.msi) from Microsoft

   Alternatively, do a quiet install from a PowerShell administrator prompt (the URL is the redirect of the above). 

        Invoke-WebRequest -Uri "https://download.microsoft.com/download/F/3/D/F3D6045E-4040-4058-ADAD-2698F1793CBC/Microsoft.FSharp.SDK.Core.msi" -OutFile "$pwd\Microsoft.FSharp.SDK.Core.msi"
        msiexec /i Microsoft.FSharp.SDK.Core.msi /quiet

The compiler tools on 64-bit Windows are installed at

    C:\Program Files (x86)\Microsoft SDKs\F#\4.1\Framework\v4.0\fsc.exe
    C:\Program Files (x86)\Microsoft SDKs\F#\4.1\Framework\v4.0\fsi.exe
    C:\Program Files (x86)\Microsoft SDKs\F#\4.1\Framework\v4.0\fsiAnyCpu.exe
    
The compiler tools on 32-bit Windows are installed at

    C:\Program Files\Microsoft SDKs\F#\4.1\Framework\v4.9\fsc.exe
    C:\Program Files\Microsoft SDKs\F#\4.1\Framework\v4.0\fsi.exe
    C:\Program Files\Microsoft SDKs\F#\4.1\Framework\v4.0\fsiAnyCpu.exe

Previous versions:

* [Visual F# Tools 4.0](https://download.microsoft.com/download/9/1/2/9122D406-F1E3-4880-A66D-D6C65E8B1545/FSharp_Bundle.exe)
* [Visual F# Tools 3.0](http://go.microsoft.com/fwlink/?LinkId=261286)
    
<br />


### Option 5: Run already compiled F# code on servers

Compiled F# code depends on the FSharp.Core.dll assembly. This file is not part of a standard .NET installation, so in order to execute applications written in F# on servers (or other machines without developer tools), it must be installed or bundled with your application. The recommended procedure is to bundle this component with your final application. The *Visual F# Tools* downloads from Microsoft installs FSharp.Core.dll into GAC.

<br />

### Option 6: Build F# from source

Build and contribute to the F# compiler and library from [the source](https://github.com/Microsoft/visualfsharp)


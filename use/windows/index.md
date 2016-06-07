---
layout: default
title: Use F# on Windows | The F# Software Foundation
headline: Use F# on Windows
---


### Option 1: Install the Visual F# Tools from Microsoft

![logo](/images/thumbs/vstudio.png)&nbsp;On Windows, F# programmers commonly use the Visual F# Tools from Microsoft.

* Install the free [Visual Studio 2015 Community](http://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx). The Visual F# Tools are installed automatically when you first create or open an F# project. 
 
If you already have Visual Studio 2012/13/15 Professional or above, you can use that.  All recent versions of Visual Studio  come with the Visual F# Tools, using an on-demand install the first time you create or open an F# project.
The Visual F# Tools include the command-line compiler (`fsc.exe`) and F# Interactive (`fsi.exe`).
See [Visual F# Resources](http://msdn.microsoft.com/en-us/vstudio/hh388569.aspx) for more information about the Visual F# Tools from Microsoft.

#### ![logo](/images/thumbs/FSharpVSPowerTools.png)&nbsp;[Visual F# Power Tools](http://fsprojects.github.io/VisualFSharpPowerTools/) ####

Optionally, install the community-provided [Visual F# Power Tools](http://fsprojects.github.io/VisualFSharpPowerTools/),
for use with Visual Studio 2013 and 2015 (Community or higher, not Express, see above). They include [source code formatting](http://fsprojects.github.io/VisualFSharpPowerTools/codeformatting.html), 
[auto-generating XML Docs](http://fsprojects.github.io/VisualFSharpPowerTools/xmldoc.html), 
[navigation bar](http://fsprojects.github.io/VisualFSharpPowerTools/navbar.html), 
[highlight](http://fsprojects.github.io/VisualFSharpPowerTools/highlightusage.html) and [find](http://fsprojects.github.io/VisualFSharpPowerTools/findallreferences.html) references, 
[rename refactoring](http://fsprojects.github.io/VisualFSharpPowerTools/rename.html),
[depth colorizer](http://fsprojects.github.io/VisualFSharpPowerTools/depthcolorizer.html),
[implement interface](http://fsprojects.github.io/VisualFSharpPowerTools/implementinterface.html),
[record stub generation](http://fsprojects.github.io/VisualFSharpPowerTools/recordstubgeneration.html),
[union pattern match case generation](http://fsprojects.github.io/VisualFSharpPowerTools/unionpatternmatchcasegeneration.html) and the
[navigate-to command](http://fsprojects.github.io/VisualFSharpPowerTools/navigateto.html).

<br />

### Option 2: Install Visual Studio Code

![logo](/images/thumbs/VSCode.png)&nbsp;[Visual Studio Code](https://code.visualstudio.com) is Microsoft's free, [open source](https://github.com/microsoft/vscode), cross platform source code editor written entirely in TypeScript.
It is supported by the [Ionide](http://ionide.io/) project and has, among [a lot of languages](https://code.visualstudio.com/docs/languages/overview), a nice F# integration.

1. Install [Visual Studio Code](https://code.visualstudio.com/download) for Windows
2. Install the [Ionide package for VS Code](https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp) <br />
Open the Quick Open Menu in VS Code by pressing `Ctrl+P` and write the following command: <br />
        ext install Ionide-fsharp


### Option 3: Install the free F# compiler and tools alone

If you're just looking for F# command-line tools, e.g. for a build server or cloud VM image, then use the 
following requirements and installation steps:

1. Requires .NET 4.5:

   - On Windows 10 .NET 4.6 is already present by default

   - On Windows 8 and Windows 2012 Server, this is already present by default
   
   - On Windows 7 and Windows 2008 Server, [install .NET 4.5](http://www.microsoft.com/net/downloads) from Microsoft

2. Requires the Windows SDK:

   - On Windows 10 use the [Windows 10 and .NET 4.6 SDK](https://dev.windows.com/en-US/downloads/windows-10-sdk) from Microsoft

   - On Windows 8.1 use the [Windows 8.1 and .NET 4.5.1 SDK](http://msdn.microsoft.com/windows/desktop/bg162891) from Microsoft
   
   - On Windows 8 or Windows 2012 Server use the [Windows 8 and .NET 4.5 SDK](http://msdn.microsoft.com/windows/hardware/hh852363.aspx) from Microsoft
   
   - On Windows 7 or Windows 2008 Server use the [Windows 7 and .NET 4.0 SDK](http://www.microsoft.com/download/details.aspx?id=8279) from Microsoft
 
3. Requires Microsoft Build Tools 2015 - [Install Microsoft Build Tools 2015](https://www.microsoft.com/en-us/download/details.aspx?id=48159)  

4. [Install the free Visual F# Tools 4.0](https://www.microsoft.com/en-us/download/details.aspx?id=48179) from Microsoft

   Alternatively, do a quiet install from a PowerShell administrator prompt (the URL is the redirect of the above). 

        $webclient = New-Object Net.WebClient
        $url = 'http://download.microsoft.com/download/9/1/2/9122D406-F1E3-4880-A66D-D6C65E8B1545/FSharp_Bundle.exe'
        $webclient.DownloadFile($url, "$pwd\FSharp_Bundle.exe")
        .\FSharp_Bundle.exe /install /quiet

The compiler tools on 64-bit Windows are installed at

    C:\Program Files (x86)\Microsoft SDKs\F#\4.0\Framework\v4.0\fsc.exe
    C:\Program Files (x86)\Microsoft SDKs\F#\4.0\Framework\v4.0\fsi.exe
    C:\Program Files (x86)\Microsoft SDKs\F#\4.0\Framework\v4.0\fsiAnyCpu.exe
    
The compiler tools on 32-bit Windows are installed at

    C:\Program Files\Microsoft SDKs\F#\4.0\Framework\v4.0\fsc.exe
    C:\Program Files\Microsoft SDKs\F#\4.0\Framework\v4.0\fsi.exe
    C:\Program Files\Microsoft SDKs\F#\4.0\Framework\v4.0\fsiAnyCpu.exe

If you're looking for Visual F# Tools 3.0 specifically, its standalone version could be downloaded [here](http://go.microsoft.com/fwlink/?LinkId=261286). 
    
<br />


### Option 4: Run already compiled F# code on servers

Compiled F# code depends on the FSharp.Core.dll assembly. This file is not part of a standard .NET installation, so in order to execute applications written in F# on servers (or other machines without developer tools), it must be installed or bundled with your application.
The recommended procedure is to bundle this component with your final application.

The *Visual F# Tools* downloads from Microsoft installs FSharp.Core.dll into GAC, as well as the command-line tools *fsc* (the F# compiler) and *fsi* (F# Interactive).

- [Visual F# Tools 4.0](https://www.microsoft.com/en-us/download/details.aspx?id=48179)

### Option 5: Build F# from source

* Build and contribute to the F# compiler and library from [the source](https://github.com/Microsoft/visualfsharp)


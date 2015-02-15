---
layout: default
title: Use F# on Windows | The F# Software Foundation
headline: Use F# on Windows
---


### Option 1: Install the Visual F# Tools from Microsoft

![logo](/images/thumbs/vstudio.png)&nbsp;On Windows, F# programmers commonly use the Visual F# Tools from Microsoft.

*  Install the free [Visual Studio 2013 Community](http://www.visualstudio.com/en-us/products/visual-studio-community-vs.aspx); if you already have Visual Studio 2013 Professional or above, you can use that.  Visual Studio 2013 Community and above come with the Visual F# Tools. 

The Visual F# Tools include the command-line compiler (`fsc.exe`) and F# Interactive (`fsi.exe`).
See [Visual F# Resources](http://msdn.microsoft.com/en-us/vstudio/hh388569.aspx) for more information about the Visual F# Tools from Microsoft.

#### ![logo](/images/thumbs/FSharpVSPowerTools.png)&nbsp;[Visual F# Power Tools](http://fsprojects.github.io/VisualFSharpPowerTools/) ####

Optionally, install the community-provided [Visual F# Power Tools](http://fsprojects.github.io/VisualFSharpPowerTools/),
for use with Visual Studio 2012 and 2013 (Community or higher, not Express, see above). They include [source code formatting](http://fsprojects.github.io/VisualFSharpPowerTools/codeformatting.html), 
[auto-generating XML Docs](http://fsprojects.github.io/VisualFSharpPowerTools/xmldoc.html), 
[navigation bar](http://fsprojects.github.io/VisualFSharpPowerTools/navbar.html), 
[highlight](http://fsprojects.github.io/VisualFSharpPowerTools/highlightusage.html) and [find](http://fsprojects.github.io/VisualFSharpPowerTools/findallreferences.html) references, 
[rename refactoring](http://fsprojects.github.io/VisualFSharpPowerTools/rename.html),
[depth colorizer](http://fsprojects.github.io/VisualFSharpPowerTools/depthcolorizer.html),
[implement interface](http://fsprojects.github.io/VisualFSharpPowerTools/implementinterface.html),
[record stub generation](http://fsprojects.github.io/VisualFSharpPowerTools/recordstubgeneration.html),
[union pattern match case generation](http://fsprojects.github.io/VisualFSharpPowerTools/unionpatternmatchcasegeneration.html) and the
[navigate-to command](http://fsprojects.github.io/VisualFSharpPowerTools/navigateto.html).

#### ![logo](/images/thumbs/vstudio.png)&nbsp;Note to ReSharper users ####

With some versions of ReSharper, the `Alt+Enter` shortcut key for the `Execute in Interactive`
command of the Visual F# Tools  doesn't work, as ReSharper overrides this for its own purposes.
To fix this, either upgrade to ReSharper 8.0.10.1959 or greater, or install the [resharper-fsi-friendly](https://github.com/citizenmatt/resharper-fsi-friendly) plugin.

If you are using Visual F# Power Tools along side with ReSharper, there is a [known issue](http://youtrack.jetbrains.com/issue/RSRP-409199) where some F# commands are hidden by ReSharper. This
is fixed in ReSharper 9.0. For previous versions, you can workaround by disabling the ReSharper option "Hide overridden Visual Studio menu items" (ReSharper -> Options -> Keyboard & Menus).

<br />

### Option 2: Install F# and Xamarin Studio 

![logo](/images/thumbs/xamarin-studio.png)&nbsp;[Xamarin Studio](http://xamarin.com/studio) is a free IDE for general purpose development with commercial add-ins for mobile development. [MonoDevelop](http://monodevelop.com) is a free and open source IDE based on the same code.  F# can be used with either.

1. Install the free standalone F# compiler tools, following _Option 1_ above or _Option 3_ below. 
2. Install [Xamarin Studio](http://xamarin.com/studio) or [MonoDevelop](http://monodevelop.com) for Windows

<br />


### Option 3: Install the free F# compiler and tools alone

If you're just looking for F# command-line tools, e.g. for a build server or cloud VM image, then use the 
following requirements and installation steps:

1. Requires .NET 4.5:

   - On Windows 8 and Windows 2012 Server, this is already present by default
   
   - On Windows 7 and Windows 2008 Server, [install .NET 4.5](http://www.microsoft.com/net/downloads) from Microsoft

2. Requires the Windows SDK:

   - On Windows 8.1 use the [Windows 8.1 and .NET 4.5.1 SDK](http://msdn.microsoft.com/windows/desktop/bg162891) from Microsoft
   
   - On Windows 8 or Windows 2012 Server use the [Windows 8 and .NET 4.5 SDK](http://msdn.microsoft.com/windows/hardware/hh852363.aspx) from Microsoft
   
   - On Windows 7 or Windows 2008 Server use the [Windows 7 and .NET 4.0 SDK](http://www.microsoft.com/download/details.aspx?id=8279) from Microsoft
   
3. [Install the free Visual F# Tools 3.1.2](http://www.microsoft.com/download/details.aspx?id=44011) from Microsoft

   Alternatively, do a quiet install from a PowerShell administrator prompt (the URL is the redirect of the above). 

        $webclient = New-Object Net.WebClient
        $url = 'http://download.microsoft.com/download/E/A/3/EA38D9B8-E00F-433F-AAB5-9CDA28BA5E7D/FSharp_Bundle.exe'
        $webclient.DownloadFile($url, "$pwd\FSharp_Bundle.exe")
        .\FSharp_Bundle.exe /install /quiet

The compiler tools are installed at

    C:\Program Files (x86)\Microsoft SDKs\F#\3.1\Framework\v4.0\fsc.exe
    C:\Program Files (x86)\Microsoft SDKs\F#\3.1\Framework\v4.0\fsi.exe
    C:\Program Files (x86)\Microsoft SDKs\F#\3.1\Framework\v4.0\fsiAnyCpu.exe
    
If you're looking for Visual F# Tools 3.0 specifically, its standalone version could be downloaded [here](http://go.microsoft.com/fwlink/?LinkId=261286). 
    
<br />

### Option 4: Install Tsunami

[Tsunami](http://tsunami.io) is an innovative fully featured F# IDE. 
It is capable of being embedded directly into other desktop applications and websites.

- Desktop: Install MSI from [Download](http://tsunami.io/download.html)
- Browser: Embed the object in [Cloud Tsunami](http://tsunami.io/cloud_tsunami.html)

<br />

### Option 5: Build F# from source

* Build and contribute to the F# compiler and library from [the source](https://github.com/Microsoft/visualfsharp)

### Option 6: Run already compiled F# code on servers

Compiled F# code depends on the FSharp.Core.dll assembly. This file is not part of a standard .NET installation, so in order to execute applications written in F# on servers (or other machines without developer tools), it must be installed or bundles with your application.
The recommended procedure is to bundle this component with your final application.

The *Visual F# Tools* downloads from Microsoft installs FSharp.Core.dll into GAC, as well as the command-line tools *fsc* (the F# compiler) and *fsi* (F# Interactive).

- [Visual F# Tools 3.1.2](http://www.microsoft.com/en-us/download/details.aspx?id=44011)

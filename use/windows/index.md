---
layout: page
title: Use F# on Windows | The F# Software Foundation
headline: Use F# on Windows
---


### Option 1: Install F# and Visual Studio

If you already have Visual Studio 2012 Ultimate or Professional, then you already have F#. If not, then either get a [trial edition](http://www.microsoft.com/visualstudio/eng#downloads+d-2012-editions); or

1. [Install the Visual F# Express Tools](http://go.microsoft.com/fwlink/?LinkID=261287)
2. See [fsharp.net](http://fsharp.net) for more information about Visual F# from Microsoft. 

You can also use a different editor and the command-line compiler (fsc.exe) or F# Interactive (fsi.exe) 
after you have installed Visual F#.

#### Note to ReSharper users ####
When some versions of ReSharper are installed, the `Alt+Enter` shortcut key for the `Execute in Interactive`
command of the F# project system doesn't work, because ReSharper overrides this shortcut key for its own purposes.
However, there is no actual command clash, so you can keep using `Alt-Enter` both in F# and ReSharp without having
to remap keys.

To enable this, either upgrade to ReSharper 8.0.10.1959 or greater, or install the [resharper-fsi-friendly](https://github.com/citizenmatt/resharper-fsi-friendly) plugin.

<br />

### Option 2: Install Tsunami

[Tsunami](http://tsunami.io) is an innovative fully featured F# IDE. 
It has a number of unique features ideally suited for Big Data, Data Science and Machine Learning. It is capable of being embedded directly into other Desktop Applications and Websites.

- Desktop: Install MSI from [Download](http://tsunami.io/download.html)
- Browser: Embed the object in [Cloud Tsunami](http://tsunami.io/cloud_tsunami.html)


<br />

### Option 3: Install F# and Xamarin Studio 

[Xamarin Studio](http://xamarin.com/studio) is a freemium IDE for mobile app development. 
[MonoDevelop](http://monodevelop.com) is a free and open source IDE based on the same code.  F# can be 
used with both.

1. Install [the free standalone F# compiler tools](http://go.microsoft.com/fwlink/?LinkId=261286) 
2. Install [Xamarin Studio](http://xamarin.com/studio) or [MonoDevelop](http://monodevelop.com) for Windows
3. Install the F# Addin for Xamarin Studio or MonoDevelop from the Addin Gallery

<br />

### Option 4: Install the F# compiler and tools alone

If you're just looking for a compiler and/or F# Interactive, e.g. for a build server or cloud VM image, then:

1. Requires .NET 4.5:

   On Windows 8 and Windows 2012 Server, this is already present by default
   
   On Windows 7 and Windows 2008 Server, [install .NET 4.5](http://www.microsoft.com/net/download) from Microsoft

2. Requires the Windows SDK:

   On Windows 8 or Windows 2012 Server use the [Windows 8 and .NET 4.5 SDK](http://msdn.microsoft.com/en-us/windows/hardware/hh852363.aspx) from Microsoft
   
   On Windows 7 or Windows 2008 Server use the [Windows 7 and .NET 4.0 SDK](http://www.microsoft.com/en-us/download/details.aspx?id=8279) from Microsoft
   
3. [Install the free standalone F# compiler tools](http://go.microsoft.com/fwlink/?LinkId=261286) from Microsoft

   Alternatively, do a quiet install from a PowerShell administrator prompt (the URL is the redirect of the above). 

       $webclient = New-Object System.Net.WebClient
       $url = "http://download.microsoft.com/download/0/5/E/05E5C5E3-2A52-434F-A09E-C8150B987D09/VWD_FSharp.exe"
       $webclient.DownloadFile($url, "VWD_FSharp.exe")
       .\VWD_FSharp.exe /install /quiet

The compiler tools are installed at

    C:\Program Files (x86)\Microsoft SDKs\F#\3.0\Framework\v4.0\fsc.exe
    C:\Program Files (x86)\Microsoft SDKs\F#\3.0\Framework\v4.0\fsi.exe
    C:\Program Files (x86)\Microsoft SDKs\F#\3.0\Framework\v4.0\fsiAnyCpu.exe
    
<br />

### Option 5: Build HTML5 web apps or WinJS Windows Store apps

* [Using F# for HTML5 Web Applications](/use/html5)

<br />

### Option 6: Learn F# in the Browser

* [Learn F# online at Try F#](http://tryfsharp.org)

<br />

### Option 7: Build F# from source

* Build the F# compiler and library from [the source](http://fsharp.github.com/fsharp)


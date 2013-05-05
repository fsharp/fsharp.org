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

<br />
<br />


### Option 2: Install F# and Xamarin Studio 

[Xamarin Studio](http://xamarin.com/studio) is a freemium IDE for mobile app development. 
[MonoDevelop](http://monodevelop.com) is a free and open source IDE based on the same code.  F# can be 
used with both.

1. Install [the free standalone F# compiler tools](http://go.microsoft.com/fwlink/?LinkId=261286) 
2. Install [Xamarin Studio](http://xamarin.com/studio) or [MonoDevelop](http://monodevelop.com) for Windows
3. Install the F# Addin for Xamarin Studio or MonoDevelop from the Addin Gallery

<br />
<br />



### Option 3: Install the F# compiler and tools alone

If you're just looking for a compiler and/or F# Interactive, e.g. for a build server or cloud VM image, then:

1. Requires .NET 4.5:

   On Windows 8 and Windows 2012 Server, this is already present by default
   
   On Windows 7 and Windows 2008 Serer, [install .NET 4.5](http://www.microsoft.com/net/download) from Microsoft

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
<br />

### Option 4: Build HTML5 and Windows Store apps using F# WebSharper

1. Install [WebSharper](http://www.websharper.com) 

You can use WebSharper to make HTML5 and WinJS web apps written in F#. These can be deployed either as HTML5 
web apps or direct to the Windows 8 app store.

<br />
<br />

### Option 5: Learn F# in the Browser

* [Learn F# online at Try F#](http://tryfsharp.org)

### Option 6: Build F# from source

* Build the F# compiler and library from [the source](http://fsharp.github.com/fsharp)


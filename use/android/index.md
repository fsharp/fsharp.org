---
layout: page
title: Use F# for Android Development | The F# Software Foundation
headline: Use F# for Android Development
---

### Option 1: Build F# Android Apps using Xamarin Studio

1. Get the [Visual F# tools for Windows](/use/windows) or [F# Tools for Mac](/use/mac)
2. Get [Xamarin Studio](http://xamarin.com/download)
3. Open Xamarin Studio and use "Help --> Check for Updates --> Beta Channel". Update to Xamarin Studio 4.0.9+ (Windows), 4.1.4+ (Mac)
3. Add Tools --> Addin Manager --> Gallery --> Language Bindings --> F# Language Binding
4. Add Tools --> Addin Manager --> Gallery --> Mobile Development --> F# Support for Xamarin.Android Development
5. On Windows, also [install the F# 2.0 Runtime](http://www.microsoft.com/en-us/download/details.aspx?id=13450)

You can now create a new F# Android app, e.g. an "F# Honeycomb Application". Build and Debug will deploy to an emulator or device.

Note: If FSharp.Core shows as red, then remove the "FSharp.Core" reference and add a reference to 

    Mac: /Developer/MonoTouch/usr/lib/mono/2.1/FSharp.Core.dll 
    Windows: C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\MonoAndroid\v1.0\FSharp.Core.dll
        
Note: Additional F# libraries beyond the main app are currently considered "external code" and require a non-Starter edition of Xamarin Studio. This is a known issue.
        
Report problems as follows:

* For most issues and discussions, use the Xamarin forums and bug tracker
* For the Xamarin F# templates, fix them directly in [the Xamarin GitHub repository](http://github.com/xamarin/md-xamarin-fsharp-addins)
* For the F# language binding, see [the F# Binding repository](http://github.com/fsharp/fsharpbinding)

<br />
<br />


#### Option 2: Build HTML5 Android apps using F# WebSharper

* Use [WebSharper](http://www.websharper.com) to make HTML5 apps written in F#.

<br />
<br />


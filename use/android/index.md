---
layout: page
title: Use F# for Android Development | The F# Software Foundation
headline: Use F# for Android Development
---

### Option 1: Build F# Android Apps using Xamarin Studio

1. Get the [Visual F# tools for Windows](/use/windows) or [F# Tools for Mac](/use/mac)
2. Get [Xamarin Studio](http://xamarin.com/download)
3. Updateto the latest Xamarin Studio (4.0.3 build 13 or later) using "Help --> Check for Updates --> Alpha Channel".
3. Add Tools --> Addin Manager --> Gallery --> Language Bindings --> F# Language Binding"
4. Add Tools --> Addin Manager --> Gallery --> Mobile Development --> F# Support for Xamarin.Android Development" 

You can now create a new F# Android app, e.g. an "F# Honeycomb Application". Build and Debug will deploy to an emulator or device.

Note: Remove the "FSharp.Core" reference and add a reference to 

    Mac: /Developer/MonoTouch/usr/lib/mono/2.1/FSharp.Core.dll 
    Windows: C:\Program Files (x86)\Reference Assemblies\Microsoft\Framework\MonoAndroid\v1.0\FSharp.Core.dll
        
Note: Additional F# libraries beyond the main app are currently considered "external code" and require a non-Starter edition of Xamarin Studio. This is a known issue.
        
Report problems to the [F# Open Source Group email list](http://fsharp.github.com/fsharp) and/or Xamarin.

<br />
<br />
<br />


#### Option 2: Build HTML5 Android apps using F# WebSharper

* Use [WebSharper](http://www.websharper.com) to make HTML5 apps written in F#.

<br />
<br />
<br />


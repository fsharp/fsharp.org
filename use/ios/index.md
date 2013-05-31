---
layout: page
title: Use F# for iOS App Development | The F# Software Foundation
headline: Use F# for iOS App Development
---

### Option 1: Build F# iOS Apps using Xamarin Studio

[Xamarin](http://xamarin.com) offer partial support for F# iOS programming.
[Samples, tutorials and screencasts are available, see the [Games and App Programming](/games) page


1. Get the [F# Tools for Mac](/use/mac)
2. Get [Xamarin Studio](http://xamarin.com/download). Run and check it is version 4.0.3, Build 13 or later under "About". Update using the Alpha channel of "Tools --> Addin Manager" if needed
3. From Tools --> Addin Manager --> Gallery, add "Language Bindings --> F# Language Binding" (v3.2.15+)" and "Mobile Development --> F# Support for Xamarin.iOS Development" 

You can now create a new F# iOS app, e.g. an "iPad Single View Application". You may need to familiarize yourself
with C# iOS programming. Build and Debug will deploy to an emulator or device.

Note: Remove any "FSharp.Core" reference and add a reference to both

    /Developer/MonoTouch/usr/lib/mono/2.1/mscorlib.dll 
    /Developer/MonoTouch/usr/lib/mono/2.1/FSharp.Core.dll 
        
Note: FSharp.Core.dll is currently considered "user code" and will require a 
non-Starter edition of Xamarin Studio because of app size. This is a known issue which Xamarin intend to address.

Report problems to the [F# Open Source Group email list](http://fsharp.github.com/fsharp) and/or Xamarin.

<br />
<br />
<br />


#### Option 2: Build HTML5 Web apps using F# WebSharper

* Use [WebSharper](http://www.websharper.com) to make HTML5 apps written in F#, deployed to web and accessed via iOS.

<br />
<br />
<br />


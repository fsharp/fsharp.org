---
layout: page
title: Use F# on Mac OSX | The F# Software Foundation
headline: Use F# on Mac OSX
---


### Option 1: Install F# 3.0 alone

To use F# 3.0 on Mac OSX, simply:

*  [Install Mono 3.0.2 or later](http://www.go-mono.com/mono-downloads/download.html). This includes F# 3.0.

See the [Mac, Linux and Cross-Platform Dev Guide](/guides/mac-linux-cross-platform) to
go further.

<br />

### Option 2: Install F# 3.0 with Xamarin Studio:

* [Install Mono 3.0.2 or later](http://www.go-mono.com/mono-downloads/download.html). This includes F# 3.0.
* [Install Xamarin Studio](http://xamarin.com/studio) or [MonoDevelop](http://monodevelop.com). Run and check it is version 4.0.3, Build 13 or later under "About". Update using the Alpha channel of "Tools --> Addin Manager" if needed
* Go to the AddIn Manager and

  Add “Language Bindings –> F# Language Binding”. If it is missing, download and add [the latest Mac .mpack from the repository](http://addins.monodevelop.com/Project/Index/48). 
  
  Add “Mac Development –> F# Support for MonoMac and Xamarin.Mac Development”
  
  Optionally, add “Mobile Development –> F# Support for Android Development”

  Optionally, add “Mobile Development –> F# Support for iOS Development”

You can now create new projects in Xamarin Studio and MonoDevelop. Ignore any unresolved FSharp.Core.dll.

See the [Mac, Linux and Cross-Platform Dev Guide](/guides/mac-linux-cross-platform) to
go further.

<br />

### Option 3: Make HTML5 web apps via WebSharper

* [WebSharper](http://www.websharper.com) can make F# HTML5 web apps which can be used from Mac/OSX and any HTML5-enabled browser

<br />


### Option 4: Learn F# in the Browser on the Mac

* [Learn F# online at Try F#](http://tryfsharp.org)

<br />



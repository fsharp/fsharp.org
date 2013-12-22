---
layout: page
title: Use F# for Android Development | The F# Software Foundation
headline: Use F# for Android Development
---

### Option 1: Build Android Apps using F# + Xamarin Tools 

![logo](/images/thumbs/xamarin-studio.png)&nbsp;![logo](/images/thumbs/vstudio.png)&nbsp;[Xamarin](http://xamarin.com) provide F# tools for  Android and iOS modile development with F#, using either Xamarin Studio or Microsoft Visual Studio.

1. Get the [Visual F# tools for Windows](/use/windows) or [F# Tools for Mac](/use/mac)

2. Get [Xamarin Studio](http://xamarin.com/download)

3. Select "About/Help --> Check for Updates --> Switch to Alpha Channel"

4. Add About --> Addin Manager --> Gallery --> Language Bindings --> F# Language Binding
  
   If it is missing, download and add [the latest Mac or Windows .mpack from the repository](http://addins.monodevelop.com/Project/Index/48). 

5. Add and enable About/Tools --> Addin Manager --> Gallery --> Mobile Development --> F# Support for Xamarin.Android Development

6. On Windows, also [install the F# 2.0 Runtime](http://www.microsoft.com/en-us/download/details.aspx?id=13450)

   If it is missing, download and add [the latest Mac or Windows .mpack from the repository](http://addins.monodevelop.com/Project/Index/70). 

You can now create a new F# Android app, e.g. an "F# Honeycomb Application". Build and Debug will deploy to an emulator or device.

Report problems as follows:

* For most issues and discussions, use the Xamarin forums and bug tracker
* For the Xamarin F# templates, fix them directly in [the Xamarin GitHub repository](http://github.com/xamarin/md-xamarin-fsharp-addins)
* For the F# language binding, see [the F# Binding repository](http://github.com/fsharp/fsharpbinding)

<br />

### Option 2: Build HTML5 Android apps using WebSharper

* ![logo](/images/thumbs/WebSharper.png)&nbsp;[Using F# for HTML5 Web Applications](/use/html5)

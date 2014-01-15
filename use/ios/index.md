---
layout: page
title: Use F# for iOS App Development | The F# Software Foundation
headline: Use F# for iOS App Development
---

### Option 1: Build F# iOS Apps using Xamarin Studio

![logo](/images/thumbs/xamarin-studio.png)&nbsp;[Xamarin](http://xamarin.com) provide F# tools for Android and iOS mobile development with F#, using Xamarin Studio.

#### Installing

1. Get [Xamarin Studio and the F# Tools for Mac](/use/mac)

2. From "Xamarin Studio --> Addin Manager" select the Alpha update channel. Update as needed.

3. From "Xamarin Studio --> Addin Manager --> Updates" choose "Refresh".

4. From "Xamarin Studio --> Addin Manager --> Gallery" install and enable the F# Language Binding. If not available, compile from source (see below)

5. From "Xamarin Studio --> Addin Manager --> Installed" enable "Mobile Development --> F# Support for Xamarin.iOS Development"

You can now create a new F# iOS app, e.g. an "iPad Single View Application". 

See the [Apps and Games](/apps-and-games) section for more information on getting going with F# iOS development.

Report problems to the [F# Open Source Group email list](http://fsharp.github.com/fsharp) and/or Xamarin.

#### Building F# Language Binding for Xamarin Studio from source

Check out https://github.com/fsharp/fsharpbinding.git to $fsbind, then:

    cd $fsbind/monodevelop
    sh configure.sh
    make

That produces ```$fsbind/pack/X.Y.Z/local/Debug/MonoDevelop.FSharpBinding_X.Y.Z.mpack```.  Open Xamarin Studio, and from
Xamarin Studio --> Addin Manager and install this using  _Install from file_.



<br />


### Option 2: Build HTML5 iOS apps

* [Using F# for HTML5 Web Applications](/use/html5)


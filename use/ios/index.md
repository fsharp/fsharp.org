---
layout: page
title: Use F# for iOS App Development | The F# Software Foundation
headline: Use F# for iOS App Development
---

### Option 1: Build F# iOS Apps using Xamarin Studio

[Xamarin](http://xamarin.com) offer [partial support for F# iOS programming](http://docs.xamarin.com/guides/cross-platform/fsharp). 

#### Installing

1. Get the [F# Tools for Mac](/use/mac)
2. Get [Xamarin Studio](http://xamarin.com/download). Run and check it is at least version 4.0.9 or later under "About". Update using the Alpha or Beta channel of "Tools --> Addin Manager" if needed
3. Use version Xamarin iOS 6.3.7 or later.
 (In [6.3.7][http://docs.xamarin.com/releases/ios/xamarin.ios_6/xamarin.ios_6.3],
 FSharpCode.dll is "blessed" and does not count on the 64KB limit for the Starter edition.)
4. From Tools --> Addin Manager --> Gallery --> Language Bindings, add F# Language Binding" (v3.2.15+)

   If it is missing, download and add [the latest Mac .mpack from the repository](http://addins.monodevelop.com/Project/Index/48). 

4. From Tools --> Addin Manager --> Gallery --> Mobile Development, add "F# Support for Xamarin.iOS Development" 

You can now create a new F# iOS app, e.g. an "iPad Single View Application". 

Note: You may have to remove any "FSharp.Core" reference and add a reference to both

    /Developer/MonoTouch/usr/lib/mono/2.1/mscorlib.dll 
    /Developer/MonoTouch/usr/lib/mono/2.1/FSharp.Core.dll 

Report problems to the [F# Open Source Group email list](http://fsharp.github.com/fsharp) and/or Xamarin.

#### Getting Going

Watch [an introduction to iOS app development](http://skillsmatter.com/podcast/scala/f-on-ipad-and-iphone-with-xamarin-studio/mh-7404).

You will need to familiarize yourself with Xamarin C# iOS programming and will likely need some knowledge of 
Objective-C as well.  The [Xamarin Developer Center](http://docs.xamarin.com/) contains the primary documentation. 

Sample iOS games and apps are available from [Neil Danson's repository](https://bitbucket.org/thedo666/):

* [IMBD](https://bitbucket.org/thedo666/imdb) -  A micro iOS app for movie databse search
* [Pacman](https://bitbucket.org/thedo666/pacman) -  An iOS version of the classic game 
* [Raytracer](https://bitbucket.org/thedo666/raytracer) - An iOS version of F# image generation code
* [Pissed Off Owls](https://bitbucket.org/thedo666/pissed-off-owls) - An iOS micro game using MonoGame and the Farseer game engine


<br />
<br />
<br />


### Option 2: Build HTML5 Web apps using F# WebSharper

* Use [WebSharper](http://www.websharper.com) to make HTML5 apps written in F#, deployed to web and accessed via iOS.

<br />
<br />
<br />


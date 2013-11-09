---
layout: page
title: Use F# for iOS App Development | The F# Software Foundation
headline: Use F# for iOS App Development
---

### Option 1: Build F# iOS Apps using Xamarin Studio

[Xamarin](http://xamarin.com) offer [partial support for F# iOS programming](http://docs.xamarin.com/guides/cross-platform/fsharp). 

#### Installing

1. Get the [F# Tools for Mac](/use/mac)

2. Get [Xamarin Studio](http://xamarin.com/download). 

3. From "Xamarin Studio --> Addin Manager" select the Alpha update channel. Update as needed.

4. From "Xamarin Studio --> Addin Manager --> Updates" choose "Refresh".

5. From "Xamarin Studio --> Addin Manager --> Gallery" install and enable the F# Language Binding. If not available, compile from source (see below)

6. From "Xamarin Studio --> Addin Manager --> Installed" enable "Mobile Development --> F# Support for Xamarin.iOS Development"

You can now create a new F# iOS app, e.g. an "iPad Single View Application". 

Note: You may have to remove any "FSharp.Core" reference and add a reference to both

    /Developer/MonoTouch/usr/lib/mono/2.1/mscorlib.dll 
    /Developer/MonoTouch/usr/lib/mono/2.1/FSharp.Core.dll 

Report problems to the [F# Open Source Group email list](http://fsharp.github.com/fsharp) and/or Xamarin.

#### Building F# Language Binding for Xamarin Studio from source

Check out https://github.com/fsharp/fsharpbinding.git to $fsbind, then:

    cd $fsbind/monodevelop
    sh configure.sh
    make

That produces ```$fsbind/pack/3.2.20/local/Debug/MonoDevelop.FSharpBinding_3.2.20.mpack```.  Open Xamarin Studio, and from
Xamarin Studio --> Addin Manager and install this using  _Install from file_.


#### Getting Going

Watch [an introduction to iOS app development](http://skillsmatter.com/podcast/scala/f-on-ipad-and-iphone-with-xamarin-studio/mh-7404).

You will need to familiarize yourself with Xamarin C# iOS programming and will likely need some knowledge of 
Objective-C as well.  The [Xamarin Developer Center](http://docs.xamarin.com/) contains the primary documentation. 

Sample iOS games and apps are available from [Neil Danson's repository](https://bitbucket.org/thedo666/):

* [IMBD](https://bitbucket.org/thedo666/imdb) -  A micro iOS app for movie database search
* [Pacman](https://bitbucket.org/thedo666/pacman) -  An iOS version of the classic game 
* [Raytracer](https://bitbucket.org/thedo666/raytracer) - An iOS version of F# image generation code
* [Pissed Off Owls](https://bitbucket.org/thedo666/pissed-off-owls) - An iOS micro game using MonoGame and the Farseer game engine


<br />


### Option 2: Build HTML5 iOS apps

* [Using F# for HTML5 Web Applications](/use/html5)


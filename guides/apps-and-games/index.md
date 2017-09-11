---
layout: default
title: Guide - Mobile Apps and Games | The F# Software Foundation
headline: Guide - Mobile App and Game Programming with F#
redirect_from: "/apps-and-games/index.html"
---

F# executes on a broad range of app and gaming platforms such as  [Android](/use/android/), [iOS](/use/ios/), 
[Mac OS X](/use/mac/), [JavaScript/HTML5](/webstacks) and [Windows](/use/windows/). Its concise syntax, interoperability
with .NET libraries, and its ability to manage complexity of components such as state machines, calculation engines, and more
make it an ideal tool for many aspects of game and app development.

In addition, F# has excellent support for managing the server-side of games or apps. This provides a compelling story of full stack development with a single language for both client and server. See the [Web Programming](/webstacks) and [Cloud](/cloud) section for details of using F# with server-side technologies. For example, F# is used on the server-side of one of 
the largest Facebook social games, as described in [this interview](http://www.dotnetrocks.com/default.aspx?ShowNum=846).

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>This guide includes resources related to app and game programming with F#. To contribute to this guide, log on to GitHub, <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/apps-and-games/index.md">edit this page</a> and send a pull request.</p>
    <hr />
    <p>Note that the resources listed below are provided only for educational purposes related to the F# programming language. The F# Software Foundation does not endorse or recommend any commercial products, processes, or services. Therefore, mention of commercial products, processes, or services should not be construed as an endorsement or recommendation.</p>
</div>              

## Resources for App and Game Development

* auto-gen TOC:
{:toc}

### Higher-Level Application Development

These higher-level app development frameworks and tools support F#:

* [Xamarin Mobile](http://docs.xamarin.com/guides/cross-platform/getting_started/introduction_to_mobile_development) - Use F# to develop for iOS, Android, Mac and Windows development

* [WebSharper](http://websharper.com) - Can be used for cross-tier client/server HTML5 development and more

* [Visual Studio](http://msdn.microsoft.com/en-us/library/vstudio/hh913781.aspx) - Supports use of F# code in both Windows Store apps and cross-platforms apps through the Xamarin Tools for Visual Studio

### Xamarin App and Game Development 

Xamarin provides app and game development tools for Android, iOS and other platforms. They [support F#](http://docs.xamarin.com/guides/cross-platform/fsharp/fsharp_support_overview) as part of their stack.

#### Cross platform examples and resources:

* [Xamarin Forms Example](https://github.com/rachelreese/Current-Talks/tree/master/2014-10%20Evolve/EvolveXamForms) - An example of using the Xamarin Forms cross-platform front-end framework with F#

* [F# and Monogame Part 2 – Android](http://neildanson.wordpress.com/2013/07/31/f-and-monogame-part-2-android/)

* [F# and Monogame Part 3 – iOS](http://neildanson.wordpress.com/2013/07/31/f-and-monogame-part-3-ios/)

#### iOS examples and resources:

* A [video by Rachel Reese](https://www.youtube.com/watch?v=H9uzJFM2Hl0) showing a number of techniques for using F# to build iOS applications.

* Watch [an introduction to iOS app development](http://skillsmatter.com/podcast/scala/f-on-ipad-and-iphone-with-xamarin-studio/mh-7404).

* Sample iOS games and apps are available from [Neil Danson's repository](https://bitbucket.org/thedo666/):
 
  * [IMBD](https://bitbucket.org/thedo666/imdb) -  A micro iOS app for movie database search

  * [Pacman](https://bitbucket.org/thedo666/pacman) -  An iOS version of the classic game 

  * [Raytracer](https://bitbucket.org/thedo666/raytracer) - An iOS version of F# image generation code

  * [Pissed Off Owls](https://bitbucket.org/thedo666/pissed-off-owls) - An iOS micro game using MonoGame and the
    Farseer game engine

* [Simple iOS7 SpriteKit demo in F#](http://neildanson.wordpress.com/2013/09/19/simple-spritekit-demo-in-f/)

* [SpriteKit iOS7 and Physics in F#](http://neildanson.wordpress.com/2013/09/24/spritekit-and-physics-in-f/)

* [Adding Touch to SpriteKit](http://7sharpnine.com/posts/adding-touch-to-spritekit/)

* A Platform game in SpriteKit and F# – [Part 1 – Game State Management](http://neildanson.wordpress.com/2013/10/08/a-platform-game-in-spritekit-and-f-part-1-game-state-management/)

* A Platform game in SpriteKit and F# – [Part 2 – Start building a level](http://neildanson.wordpress.com/2013/10/08/a-platform-game-in-spritekit-and-f-part-2-start-building-a-level/)


### MonoGame

[MonoGame](http://www.monogame.net/) is an open implementation of a cross-platform gaming framework originally
based on the XNA 4 framework design. The goal of the project is to allow XNA developers on Xbox 360, Windows and 
Windows Phone to port their games to the iOS, Android, Mac OS X, Linux, Windows 8 Metro, and PlayStation 
Mobile.  

* F# and Monogame [Part 1 – MacOS](http://neildanson.wordpress.com/2013/07/30/f-and-monogame/)

* F# and Monogame [Part 2 – Android](http://neildanson.wordpress.com/2013/07/31/f-and-monogame-part-2-android/)

* F# and Monogame [Part 3 – iOS](http://neildanson.wordpress.com/2013/07/31/f-and-monogame-part-3-ios/)

* F# and Monogame [Part 4 – Content Pipeline](http://neildanson.wordpress.com/2013/08/13/f-and-monogame-part-4-content-pipeline/)

* [Running MonoGame with F# on the Mac](http://7sharpnine.com/posts/Fsharp-and-MonoGame-on-the-Mac/)

* [Using F# with MonoGame to get basic platformer mechanics](http://bruinbrown.wordpress.com/2013/10/06/making-a-platformer-in-f-with-monogame/)

* [Using F# Interactive for level design](http://bruinbrown.wordpress.com/2013/10/21/f-interactive-for-level-design/)

* [Making an endless runner game in F# using MonoGame](http://timjones.tw/blog/archive/2014/12/28/make-santa-jump-game-in-fsharp-using-monogame)


### Unity3D

[Visual Studio 2013 Tools for Unity](http://visualstudiogallery.msdn.microsoft.com/20b80b8c-659b-45ef-96c1-437828fe7cf2) allows you to write and debug your Unity 3D games inside Microsoft Visual Studio.
With this plugin you can debug DLLs built with F# in Visual Studio while running them from Unity3D.



### Open Source Sample Projects


* [Nu Game Engine](https://github.com/bryanedds/FPWorks) - A cross-platform F# 2D game engine built in the functional style. Uses SDL2 and Farseer Physics.

* [MXA Framework](https://github.com/insma/MXA-Framework) is an open-source XNA like based framework based on SharpDX.Direct3D11. It allow you to develop high performance game, 2D and 3D graphics rendering with familiar API.

* [FQuake3](https://github.com/TIHan/FQuake3) - An attempt to re-implement id Software's Quake III Arena in F#.

* [Learn On The Go](https://github.com/ovatsus/Apps/tree/master/LearnOnTheGo) - A windows phone app for watching [Coursera](https://www.coursera.org/) lectures implemented in F#.

* [UK Trains](https://github.com/ovatsus/Apps/tree/master/Trains) - A windows phone app for checking train departure and arrival information implemented in F#.



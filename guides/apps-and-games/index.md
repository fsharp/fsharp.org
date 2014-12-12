---
layout: default
title: Guide: Apps and Games | The F# Software Foundation
headline: Guide: Mobile App and Game Programming with F#
redirect_from: "/apps-and-games/index.html"
---

This guide is an overview of resources for app and game programming with F#. To contribute to this guide, log on to GitHub, [edit this page](https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/apps-and-games/index.md) and send a pull request.


F# executes on a broad range of app and gaming platforms such as  [Android](/use/android/), [iOS](/use/ios/), 
[F# on Mac](/use/mac/), [JavaScript/HTML5](/webstacks) and [Windows](/use/windows/). See those 
sections for details about getting started with F# on those platforms.

## Table of Contents

* auto-gen TOC:
{:toc}


### Mobile App and Game Development 

These higher-level app development stacks support F#:

* ![XamarinStudio](/images/thumbs/xamarin-studio.png)&nbsp;[Xamarin Mobile](http://docs.xamarin.com/guides/cross-platform/getting_started/introduction_to_mobile_development) - Use F# to develop for iOS, Android, Mac and Windows development

* ![WebSharper](/images/thumbs/WebSharper.png)&nbsp;[WebSharper](http://websharper.com) - Can be used for cross-tier client/server HTML5 development and more

* [Visual Studio](http://msdn.microsoft.com/en-us/library/vstudio/hh913781.aspx) - Supports use of F# code in both Windows Store apps and cros-platforms apps through the Xamarin Tools for Visual Studio

### Xamarin App and Game Development 

Xamarin provide app and game development tools for Android, iOS and other platforms. They [support F#](http://docs.xamarin.com/guides/cross-platform/fsharp/fsharp_support_overview) as part of their stack. 


Some resources for app and game development with F# and Xamarin tools:

* ![Xamarin Forms Example](https://github.com/rachelreese/Current-Talks/tree/master/Evolve-2014/EvolveXamForms - An example of using the Xamarin Forms cross-platform front-end framework with F#

* [F# and Monogame Part 2 – Android](http://neildanson.wordpress.com/2013/07/31/f-and-monogame-part-2-android/)

* [F# and Monogame Part 3 – iOS](http://neildanson.wordpress.com/2013/07/31/f-and-monogame-part-3-ios/)

Resources specific to iOS:

* Watch a video by [Rachel Reese](https://twitter.com/rachelreese) on creating a minesweeper game for iOS using F# and Xamarin:

<div>
  <iframe src="//player.vimeo.com/video/97516216" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> 
</div>


* Watch [an introduction to iOS app development](http://skillsmatter.com/podcast/scala/f-on-ipad-and-iphone-with-xamarin-studio/mh-7404).

* You will need to familiarize yourself with Xamarin C# iOS programming and will likely need some knowledge of 
Objective-C as well.  The [Xamarin Developer Center](http://docs.xamarin.com/) contains the primary documentation. 

* Sample iOS games and apps are available from [Neil Danson's repository](https://bitbucket.org/thedo666/):
 
  * [IMBD](https://bitbucket.org/thedo666/imdb) -  A micro iOS app for movie database search

  * [Pacman](https://bitbucket.org/thedo666/pacman) -  An iOS version of the classic game 

  * [Raytracer](https://bitbucket.org/thedo666/raytracer) - An iOS version of F# image generation code

  * [Pissed Off Owls](https://bitbucket.org/thedo666/pissed-off-owls) - An iOS micro game using MonoGame and the
    Farseer game engine


* [Simple iOS7 SpriteKit demo in F#](http://neildanson.wordpress.com/2013/09/19/simple-spritekit-demo-in-f/)

* [SpriteKit iOS7 and Physics in F#](http://neildanson.wordpress.com/2013/09/24/spritekit-and-physics-in-f/)

* [Adding Touch to SpriteKit](http://7sharpnine.com/posts/adding-touch-to-spritekit/)

* [A Platform game in SpriteKit and F# – Part 1 – Game State Management](http://neildanson.wordpress.com/2013/10/08/a-platform-game-in-spritekit-and-f-part-1-game-state-management/)

* [A Platform game in SpriteKit and F# – Part 2 – Start building a level](http://neildanson.wordpress.com/2013/10/08/a-platform-game-in-spritekit-and-f-part-2-start-building-a-level/)


### Unity3D

[Visual Studio 2013 Tools for Unity](http://visualstudiogallery.msdn.microsoft.com/20b80b8c-659b-45ef-96c1-437828fe7cf2) allows you to write and debug your Unity 3D games inside Microsoft Visual Studio.
With this plugin you can debug DLLs built with F# in Visual Studio while running them from Unity3D.

### MonoGame - Write Once, Play Everywhere

[MonoGame](http://www.monogame.net/) is an open implementation of a cross-platform gaming framework originally
based on the XNA 4 framework design. The goal of the project is to allow XNA developers on Xbox 360, Windows & Windows Phone to port 
their games to the iOS, Android, Mac OS X, Linux, Windows 8 Metro, and PlayStation 
Mobile.  

* [F# and Monogame Part 1 – MacOS](http://neildanson.wordpress.com/2013/07/30/f-and-monogame/)

* [F# and Monogame Part 2 – Android](http://neildanson.wordpress.com/2013/07/31/f-and-monogame-part-2-android/)

* [F# and Monogame Part 3 – iOS](http://neildanson.wordpress.com/2013/07/31/f-and-monogame-part-3-ios/)

* [F# and Monogame Part 4 – Content Pipeline](http://neildanson.wordpress.com/2013/08/13/f-and-monogame-part-4-content-pipeline/)

* [Running MonoGame with F# on the Mac](http://7sharpnine.com/posts/Fsharp-and-MonoGame-on-the-Mac/)

* [Using F# with MonoGame to get basic platformer mechanics](http://bruinbrown.wordpress.com/2013/10/06/making-a-platformer-in-f-with-monogame/)

* [Using F# Interactive for level design](http://bruinbrown.wordpress.com/2013/10/21/f-interactive-for-level-design/)


### Duality 

Duality is a plugin based 2D game development framework based on C# and OpenTK. To get a quick overview, please visit the [project page](http://duality.fetzenet.de). Duality's main strengh is a fully featured extensible editor. (OSS and MIT Licensed)
An [F# Scripting plugin is available](http://www.roundcrisis.com/2014/04/21/Fsharp-scripting-for-the-game-engine/) ([code](https://github.com/BraveSirAndrew/DualityScripting))

### Server-side of Games

F# is ideal for the sever-side of game and app development. For example, F# is used on the server-side of one of 
the largest Facebook social games, as described in [this interview](http://www.dotnetrocks.com/default.aspx?ShowNum=846).

See the [Web Programming](/webstacks) and [Cloud](/cloud) section for details of using F# with server-side technologies. 



  
### Projects


* ![Nu Game Engine](https://github.com/bryanedds/FPWorks/blob/master/Nu/Promotional/Nu%20Icon.png?raw=true)&nbsp;[Nu Game Engine](https://github.com/bryanedds/FPWorks) - A cross-platform F# 2D game engine built in the functional style. Uses SDL2 and Farseer Physics.

* ![fquake3_logo](https://raw.github.com/TIHan/FQuake3/master/fquake3_logo_32x32.png)&nbsp;[FQuake3](https://github.com/TIHan/FQuake3) - An attempt to re-implement id Software's Quake III Arena in F#.

* ![learnonthego](https://f.cloud.github.com/assets/738761/1654048/bb001dfe-5b42-11e3-92b6-6a7e6c28241c.png)&nbsp;[Learn On The Go](https://github.com/ovatsus/Apps/tree/master/LearnOnTheGo) - A windows phone app for watching [Coursera](https://www.coursera.org/) lectures implemented in F#.

* ![trains](https://f.cloud.github.com/assets/738761/1654047/b96c323e-5b42-11e3-9856-c000c6206ead.png)&nbsp;[UK Trains](https://github.com/ovatsus/Apps/tree/master/Trains) - A windows phone app for checking train departure and arrival information implemented in F#.

* [XNA Game Studio for Visual Studio 2013](https://msxna.codeplex.com/)

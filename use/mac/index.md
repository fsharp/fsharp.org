---
layout: page
title: Use F# on Mac OSX | The F# Software Foundation
headline: Use F# on Mac OSX
---


### Option 1: Install F# 3.0 

To get F# 3.0 for Mac OSX, simply:
*  [Install Mono 3.0.2 or later](http://www.go-mono.com/mono-downloads/download.html). This includes F# 3.0.

You can now 

* Start the F# Interactive using "fsharpi" and type "1+1;;".  You're off! 
* The F# command line compiler is "fsharpc". The --resident flag makes the compiler faster on subsequent invocations.  
* Use xbuild to build projects and solutions from Visual Studio without change

For Visual Tools:

* Install [Xamarin Studio](http://xamarin.com/studio) or [MonoDevelop](http://monodevelop.com) 
* Go to the AddIn Gallery and add the  [F# AddIn for Xamarin Studio and MonoDevelop](http://fsharp.github.com/fsharpbinding). These are all free.
* You can create new projects in Xamarin Studio and MonoDevelop. Be sure to retarget them to .NET 4.0

### Option 2: Make HTML5 web apps via WebSharper
* [WebSharper](http://www.websharper.com) can make F# HTML5 web apps which can be used from Mac/OSX and any HTML5-enabled browser


### Option 3: Learn F# in the Browser on the Mac

* [Learn F# online at Try F#](http://tryfsharp.org)

### Having trouble?

* Ask questions at the [F# Open Source Group](https://groups.google.com/forum/?fromgroups#!forum/fsharp-opensource)

### What should I use to edit my code?

We recommend [Xamarin Studio](http://xamarin.com/studio) or [MonoDevelop](http://monodevelop.com) with the [F# AddIn for MonoDevelop](http://fsharp.github.com/fsharpbinding). 

Some other editors have specific support for F#, either builtin or through addons provided by the F# community: 
* TextMate 
* Emacs. There is an [F# mode for Emacs](http://fsharp.github.com/fsharpbinding/) that extends Emacs with syntax highlighting for F#, support for working with F# Interactive and also automatic indentation. 
* VIM
* GEdit
* SublimeText 



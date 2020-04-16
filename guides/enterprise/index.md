---
layout: default
title: Guide - Enterprise Programming | The F# Software Foundation
headline: Guide - Enterprise Programming with F#
redirect_from: "/enterprise/index.html"
---

F# is an excellent choice for enterprises.

The benefits of F# for enterprise development are:

* *Compatibility* - F# is completely integrated with the .NET platform and is a fully supported component of Visual Studio and JetBrains Rider. You can continue to use your favorite C# libraries and maintain your existing development processes.

* *Low risk trials* - It's easier to learn F# than you might think. You can easily try out 
  F# for non-critical development tasks such as testing and scripting without committing to wholesale change.

* *Faster development time* - F# code is generally three times shorter than C# code. And F#
  has many little conveniences that save coding time, such as very succinct type definitions,
  with immutability and equality by default.

* *Easy data access* - F# includes "type providers" that provide type-safe access to all kinds of data (SQL, CSV, JSON, XML).

* *Fewer errors, less maintenance* - Many common errors, such as nulls or empty collections, are easily avoided in F#.
  F# classes cannot be null, exhaustive pattern matching means that edge cases are not overlooked,
  and units of measure can be used to avoid accidental mixups of incompatible numbers.

* *F# code is engineered for testing* - Functional programming does not use state and the logic tends to be linear,
  so it is very easy to test subsystems in isolation easily (using NUnit or your favorite test framework),
  and there are no tangled webs of dependencies. 
  In addition, F# supports property-based testing with FsCheck.

* *Better domain modelling* - F# has a powerful type system that can be used to model domains accurately.
  "Choice" types can model business cases more conveniently than inheritance, and business rules
  can be designed into the type system so that you get "compile-time unit tests", eliminating the need 
  for many tests that would otherwise have to be written by hand.

* *Taming complexity* - F# has a number of features to help you manage complexity and improve performance such as:
  a [safer](http://tomasp.net/blog/csharp-async-gotchas.aspx/) Async library,
  a built-in actor model that's easier than using threads,
  safe parallelization with immutable data, and more.

* *Improving developer morale* - F# is a fun language to program in, and F# is a great way for developers
  to learn new skills that will improve their skills in other languages, such as C# and JavaScript.

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>To contribute to this guide <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/enterprise/index.md">edit this page</a>. These resources are for educational purposes. The F# Software Foundation does not endorse any commercial products, processes, or services.</p>
</div>              

* auto-gen TOC:
{:toc}


<br />

### Benefits of F# for enterprise and line-of-business applications

* [The F# Way To Relaxation](https://vimeo.com/113594249) (video).
  A journey through the modern programming landscape and the F# approach to research, language design, interoperability, tooling and community.
* [White paper: F# in the Enterprise](https://msdn.microsoft.com/en-US/vstudio/gg634701)
* Many of the [F# testimonials](http://fsharp.org/testimonials/) are relevant to enterprise development.

Many developers have posted on why they like F#:

* [Why am I so enthusiastic about F#?](http://fpbridge.co.uk/why-fsharp.html)
* [Why F# for the Enterprise?](http://dotnetmeditations.com/blog/2014/6/12/why-should-you-try-f)
* [Why F#?](http://davefancher.com/2013/01/27/why-f/)
* [A list of many other "Why F#" posts](https://sergeytihon.wordpress.com/2013/03/24/why-f-by-f-weekly/).

<br />

### A tour of F# features ###

* [An introduction to F#](https://channel9.msdn.com/blogs/pdc2008/tl11) (video).
* [Why use F#?](http://fsharpforfunandprofit.com/series/why-use-fsharp.html).
  This series of posts will give you a guided tour through the main features of F#.
  
<br />

### Low risk ways to use F# ###

You can easily try out F# for non-critical development tasks such as testing and scripting without committing to wholesale change.
  
* [Low risk ways to use F#](http://fsharpforfunandprofit.com/series/low-risk-ways-to-use-fsharp-at-work.html).
  This series suggests a number of ways you can use F# in a low-risk, incremental way,
  without affecting any mission critical code.
  
<br />

#### F# for build automation
  
* [Scott Hanselman on FAKE](http://www.hanselman.com/blog/ExploringFAKEAnFBuildSystemForAllOfNET.aspx).
  FAKE is a build system that uses F# as its scripting language, but can be used to build any .NET project.
  
<br />

#### F# for testing .NET systems
  
* [Testing .NET systems with F#](http://www.slideshare.net/bartelink/testing-cinfdublinaltnet2013)  
* [F# As A Unit Testing Language](http://trelford.com/blog/post/fstestlang.aspx).  
* [Scott Hanselman on Canopy](http://www.hanselman.com/blog/NuGetPackageOfTheWeekCanopyWebTestingFrameworkWithF.aspx).
  Canopy is a web testing framework that uses F# as its scripting language.

<br />

### Fewer errors, less maintenance

Many common errors, such as nulls or empty collections, are easily avoided in F#.
F# classes cannot be null, exhaustive pattern matching means that edge cases are not overlooked,
and units of measure can be used to avoid accidental mixups of incompatible numbers.
  
* [It just works](https://neildanson.wordpress.com/2014/03/04/it-just-works/)
* [Why You Must Learn F# - Even If You Aren’t Writing Rocket Science Apps](http://www.codemag.com/Article/1203081)

<br />

### F# code is engineered for testing

Functional programming does not use state and the logic tends to be linear,
so it is very easy to test subsystems in isolation easily (using NUnit or your favorite test framework),
and there are no tangled webs of dependencies. 
  
* [Already Engineered for Testability](http://jackfoxy.com/fsharp-already-engineered-for-testability/)
* [An introduction to property-based testing](http://fsharpforfunandprofit.com/posts/property-based-testing/)
  
<br />

### Using F# for domain modelling  

F# has a powerful type system that can be used to model domains accurately.
"Choice" types can model business cases more conveniently than inheritance, and business rules
can be designed into the type system so that you get "compile-time unit tests", eliminating the need 
for many tests that would otherwise have to be written by hand.
  
* [Domain Modelling and DDD in F#](http://fsharpforfunandprofit.com/ddd/).
  Slides and video demonstrating how the F# type system can encode business rules.
* F# for Trading [video](https://www.youtube.com/watch?v=OonLCmLeQUQ) & [slides](http://www.slideshare.net/ptrelford/f-for-trading).
  Demonstrates how to use F# to design a simple trading application.

If you are moving to CQRS and an event-sourcing approach, F# is a great choice for modelling this as well. 

* [Domain-Driven Design (DDD) With F# and EventStore](http://gorodinski.com/blog/2013/02/17/domain-driven-design-with-fsharp-and-eventstore/)
  
<br />

### Data access and information-rich programming

We are entering a new information-rich world, one that provides huge opportunities for programmers
to explore and create exciting applications. F# is a leader in this area.


<br />

#### Using F# type providers to access data

F# type providers allow you to talk directly to data, combining the power of dynamic code generation, 
the safety of static types, and the ease of use of intellisense. 

* The **standard type providers** include:
  * [XML type provider](http://fsharp.github.io/FSharp.Data/library/XmlProvider.html)
  * [JSON type provider](http://fsharp.github.io/FSharp.Data/library/JsonProvider.html)
  * [SQL type provider](http://msdn.microsoft.com/en-us/library/hh361033.aspx).
* [Accessing loosely structured data from F# and C#](http://tomasp.net/blog/goto-loosely-structured-data.aspx/index.html)

<br />

#### Using F# to analyze data

F# also has powerful tools to analyze and process data, such as [Deedle](http://fslab.org/Deedle/) (for data and time series manipulation)
and the [R type provider](http://fslab.org/RProvider/) which makes it possible to use all of R's capabilities from the F# interactive environment,
including on-the-fly charting and data analysis.

* [Information Rich Programming in F#](https://channel9.msdn.com/Blogs/Charles/C9-Lectures-Donna-Malayeri-F-30-Information-Rich-Programming-1-of-1) (video).

* [How F# Learned to Stop Worrying and Love the Data](https://channel9.msdn.com/posts/Tomas-Petricek-How-F-Learned-to-Stop-Worrying-and-Love-the-Data) and [Understanding the World with F#](https://channel9.msdn.com/posts/Understanding-the-World-with-F) (video).
  In these demos, you'll learn how to acquire and understand data with F#.
  You'll see how to analyze the survival rate of Titanic passengers, how to correlate different indicators 
  about countries in the world and how to link US debt data with information about US presidents and visualize the results. 

<br />

### Taming complexity

F# has a number of features to help you manage complexity and improve performance such as:
a safer Async library,
a built-in actor model that's easier than using threads,
safe parallelization with immutable data, and more.
  
<br />

#### Asynchronous programming in F# ####

  * [Async in C# and F#: An introduction](http://tomasp.net/blog/csharp-fsharp-async-intro.aspx/)
  * [Async in C# and F#: Asynchronous gotchas in C#](http://tomasp.net/blog/csharp-async-gotchas.aspx/). Why the F# async library is safer than the C# one.
  * [Writing non-blocking user-interfaces in F#](http://tomasp.net/blog/async-non-blocking-gui.aspx/) 
  * [Asynchronous programming: another introduction](http://fsharpforfunandprofit.com/posts/concurrency-async-and-parallel/)

<br />

#### Agents and message queues ####

  * [An Introduction To F# Agents](http://www.developerfusion.com/article/139804/an-introduction-to-f-agents/)
  * [Agents](http://fsharpforfunandprofit.com/posts/concurrency-actor-model/). Another introduction

<br />

### Developer morale

Learning functional programming (via F#) is a lot of fun, and will make your team happier. 
Yes, you can't have fun all the time. But if you are enjoying yourself, then you are more likely to go the extra mile when needed.

What's more, using F# may help you attract talented developers. After all, wouldn't you want to work with people who are having fun?

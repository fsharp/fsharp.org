---
layout: default
title: Guide - Web Programming | The F# Software Foundation
headline: Guide - Web Programming with F#
redirect_from: "/webstacks/index.html"
---

This guide is an overview of the packages and tools for web programming with F#. To contribute to this guide, log on to GitHub, [edit this page](https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/web/index.md) and send a pull request.

F# has many advantages for building efficient, scalable and robust web solutions:

* *Fast* - F# code execution is fast, using native code generation from scripted or project code 
* *Succinct* - F# is concise, readable and type-safe, for fast development of robust web solutions
* *Reactive and Scalable* - F# asynchronous programming simplifies scalable, reactive web programming
* *Interoperable* - F# interoperates seamlessly with languages such as C#, JavaScript and TypeScript
* *JavaScript-ready* - F# is JavaScript-ready through [WebSharper](http://websharper.com) and [FunScript](http://funscript.info/)
* *Open-source* and *Cross-platform*  - like all good web tools

The [Cloud Programming](/cloud) section contains more details on scalable cloud-hosted web programming with F#.
To contribute to F# as a web programming tool, please join 
the [F# Web Stack Google Group](https://groups.google.com/forum/#!forum/web-stack-fs). 


## Table of Contents

* auto-gen TOC:
{:toc}


## Live Examples

### [TodoBackend](http://todobackend.com/)

TodoBackend is a project that aims to be "a shared example to showcase backend tech stacks." The F# community has contributed some examples, and a few more are in progress:

* [F# - Freya (OWIN)](http://www.todobackend.com/specs/index.html?http://todo-backend-fsharp.azurewebsites.net/owin)
* [F# - ASP.NET Web API](http://www.todobackend.com/specs/index.html?http://todo-backend-fsharp.azurewebsites.net/webapi)
* [F# - Frank](http://www.todobackend.com/specs/index.html?http://todo-backend-fsharp.azurewebsites.net/frank)
* F# - Freya Machine (Coming soon!)
* F# - Suave (Coming soon!)
* F# - Nancy (Coming soon!)

Please consider contributing, either directly to the TodoBackend project or via the [TodoBackendFSharp](https://github.com/panesofglass/TodoBackendFSharp) project.


## Frameworks for Web Applications

### ![logo](/images/thumbs/suave.png)&nbsp;[Suave.io](http://suave.io/)

Suave is a simple web development F# library providing a lightweight web server and a set of combinators to manipulate route flow and task composition.

### ![logo](/images/thumbs/WebSharper.png)&nbsp;[WebSharper](http://websharper.com/) 

WebSharper allows end-to-end web applications with both client and server developed in F#. 
It includes TypeScript interoperability, mobile web apps, getting started material, templates and much more.

* [Examples](http://websharper.com/samples)
* [Visual Studio templates](http://websharper.com/WebSharper.vsix)
* [MonoDevelop templates](https://github.com/intellifactory/monodevelop.websharper)
* [CloudSharper templates](http://cloudsharper.com/)

### [FunScript](http://funscript.info/)

FunScript is an F# to JavaScript converter with TypeScript interoperability.

* [Examples](http://funscript.info/learn.html)
* Introductory videos:
  * [TodoMVC with FunScript and Ractive part 1](http://youtu.be/smyeLH6HktA)
  * [TodoMVC with FunScript and Ractive part 2](http://youtu.be/hhqKArYkfYA)
  * [FunScript HTML Extensions](http://youtu.be/Xmvehkj8qGM)
* [Visual Studio templates](https://visualstudiogallery.msdn.microsoft.com/4688fe33-a41a-4c62-8322-4a7dccffa97c)

### [Pure F# ASP.NET MVC](http://bloggemdano.blogspot.com/2013/12/a-new-f-aspnet-mvc-5-and-web-api-2.html) 

[ASP.NET MVC](http://www.asp.net/mvc) is a widely used open source web framework from Microsoft. 
[Pure F# ASP.NET MVC](http://bloggemdano.blogspot.com/2013/12/a-new-f-aspnet-mvc-5-and-web-api-2.html) is a pure, F#-only project template for implementing a web application with ASP.NET MVC 5. Views are implemented in HTML5 using modern Javascript frameworks, also known as single-page applications, or SPAs. Models and controllers are implemented in F#.

* [Visual Studio templates](https://visualstudiogallery.msdn.microsoft.com/39ae8dec-d11a-4ac9-974e-be0fdadec71b)

### [NancyFx](http://nancyfx.org/)

NancyFx is a lightweight, low-ceremony framework for building HTTP-based micro-applications and micro-services on .NET and Mono. [F# templates](http://bloggemdano.blogspot.com/2013/12/a-few-other-template-additions-and.html) are available.

* [Visual Studio templates](https://visualstudiogallery.msdn.microsoft.com/b55b8aac-b11a-4a6a-8a77-2153f46f4e2f)

## Frameworks for Micro-services and Server-Side Web APIs

### [Serving Requests with IHttpHandler](http://codinglight.blogspot.co.uk/2010/03/writing-your-own-httphandler-in-f.html)

Do it the simple way, and serve web requests direct from code using F# asynchronous programming.

* [F# async on the server side](http://lorgonblog.wordpress.com/2010/03/28/f-async-on-the-server-side/) - Non-blocking I/O on the server side


### [Pure F# Web API 2.0](http://bloggemdano.blogspot.com/2013/12/a-new-f-aspnet-mvc-5-and-web-api-2.html)

[Web API 2.0](http://www.asp.net/web-api) is a widely used open source web framework from Microsoft. The [Pure F# Web Templates (Visual Studio, Web API 2.0)](http://bloggemdano.blogspot.com/2013/12/a-new-f-aspnet-mvc-5-and-web-api-2.html). These templates provide a Pure F# project for implementing a web API with Web API 2.0. Everything is implemented in F#.
   
[OWIN and Katana](http://www.asp.net/aspnet/overview/owin-and-katana) provide a flexible set of components for building and hosting Open Web Interface for .NET (OWIN)-based web applications. Web API can be hosted directly on Katana using the [Owin Web API package](http://www.nuget.org/packages/Microsoft.AspNet.WebApi.Owin).

Some resources on using F# with Web API:

* [Visual Studio templates](https://visualstudiogallery.msdn.microsoft.com/39ae8dec-d11a-4ac9-974e-be0fdadec71b)
* [How to create a pure F# ASP.NET Web API project](http://blog.ploeh.dk/2013/08/23/how-to-create-a-pure-f-aspnet-web-api-project/)
* [Running a pure F# ASP.NET Web API on Azure Web Sites](http://blog.ploeh.dk/2013/08/26/running-a-pure-f-web-api-on-azure-web-sites/)
* [Creating Lightweight F# websites that use pure F# OWIN Web APIs and Typescript web applications](http://cockneycoder.wordpress.com/2014/09/03/lightweight-websites-with-f/)
* [Sample F# ASP.NET Web API hosted with OWIN on an Azure Worker Role](https://github.com/panesofglass/AzureFSharpOwin)
* [F#/C# Web Templates for REST](http://visualstudiogallery.msdn.microsoft.com/3d2bf938-fc9e-403c-90b3-8de27dc23095) - (Visual Studio) Includes templates for ASP.NET Web API. 

### [Freya](https://github.com/freya-fs/freya)

Freya provides a functional web stack built on top of [OWIN](http://owin.org/). At its core, Freya wraps the OWIN environment dictionary with a computation expression and provides access to that dictionary with lenses. Additional layers of the stack provide types based on the HTTP and related RFCs, a pipeline abstraction for connecting Freya computations, a router, and an implementation of the [HTTP finite state machine](https://github.com/for-GET/http-decision-diagram), like that found in [webmachine](https://github.com/basho/webmachine).

* [NuGet](http://www.nuget.org/packages?q=freya)
* [GitHub](https://github.com/freya-fs/freya)
* [Introductory slide deck](https://github.com/freya-fs/freya.intro)
* [Examples (WIP)](https://github.com/freya-fs/freya.examples)
* [Docs (WIP)](https://github.com/freya-fs/freya.documentation)

### [Frank](http://frankfs.net/)

Frank provides combinators for composing web applications using the types in `System.Net.Http`, the library that drives ASP.NET Web API.

* [NuGet](http://www.nuget.org/packages/Frank)
* [GitHub](https://github.com/frank-fs/frank)
* [Web-host example](https://github.com/frank-fs/Frank.Samples.WebHost)
* [Self-host example](https://github.com/frank-fs/Frank.Samples.SelfHost)

### [SignalR](http://www.asp.net/signalr)

SignalR provides bi-directional communication between web servers and clients using one of several mechanisms, beginning with [web sockets](http://www.websocket.org/) and falling back through several other approaches depending on client and server capabilities.
One example is a [Web Application Server (F#)](http://visualstudiogallery.msdn.microsoft.com/c7ea6e81-b383-40e4-899c-4a5ab9d68f02).

### ![logo](/images/thumbs/servicestack.png)&nbsp;[ServiceStack](https://servicestack.net/)

ServiceStack is a framework for simple and fast web services on .NET and Mono.

* [F# ServiceStack Project Template](http://visualstudiogallery.msdn.microsoft.com/278caff1-917a-4ac1-a552-e5a2ce0f6e1f) - (Visual Studio) Includes a template to create a self-hosted, Asp.Net hosted F# ServiceStack service 
* [F# and ServiceStack Example 1](http://www.servicestack.net/mythz_blog/?p=785) - Web Services on any platform in and out of a web server! An async+parallel cached twitter proxy that works cross platform on Windows/OSX and Linux in 100 LOC
* [F# and ServiceStack Example 2](http://www.servicestack.net/mythz_blog/?p=811) - An Async, Cached Twitter API Proxy in F#
* [F#, ServiceStack and Heroku](https://github.com/kunjee17/ServiceStackHeroku) - Using ServiceStack and Heroku with F#

### [NancyFx](http://nancyfx.org/)

NancyFx is a lightweight, low-ceremony framework for building HTTP-based micro-services on .NET and Mono.

* [NancyFx Project Template](http://visualstudiogallery.msdn.microsoft.com/b55b8aac-b11a-4a6a-8a77-2153f46f4e2f) Includes templates for for getting started with a range of NancyFx applications.
* [F#, NancyFx and Heroku](http://blog.ashleytowns.id.au/posts/2013-04/2013-04-01-running-csharp-fsharp-xbuild-nuget-on-heroku.html) - Using NancyFx and Heroku with F#

### [Canopy for Client-side Testing](http://lefthandedgoat.github.io/canopy)

[canopy](http://lefthandedgoat.github.io/canopy/) is a web testing framework built on top of selenium and written in F#. It's syntax is clean and 
concise. You can easily leverage your existing .NET code to help you test.
 

## Books

Several books have been written that include information on building web applications with F#:

* [Building Web, Cloud, and Mobile Solutions with F#](http://www.amazon.com/Building-Web-Cloud-Mobile-Solutions/dp/1449333761) 
* [Expert F# 3.0](http://www.amazon.com/Expert-F-3-0-Apress/dp/1430246502/ref=sr_1_2?s=books&ie=UTF8&qid=1353176560&sr=1-2&keywords=F%23)


## Presentations

There are  several presentations and tutorials available that include information on 
build web applications with F#:

* [Taking F# to the Masses with CloudSharper](http://youtu.be/LvbfY3sl6Lo)
* [F# on the Web](http://youtu.be/2tVQNjdn-Y0)
* [Tackle UI with Reactive DOM in F# and WebSharper](http://youtu.be/wEkS09s3KBc)
* [Building an HTML5 application with WebSharper Sitelets, Part 1](http://www.developerfusion.com/article/124078/building-an-html5-application-with-websharper-sitelets-part-1/)
* [Building Better Web Apps with F#](http://bloggemdano.blogspot.com/2012/11/recording-for-building-better-web-apps.html)
* [Building Data-Driven Websites](http://msdn.microsoft.com/en-us/library/hh273072.aspx)
* [F# on the Web Workshop](https://github.com/c4fsharp/FsOnTheWeb-Workshop)
* [F# 3.0: data, services, Web, cloud, at your fingertips](http://channel9.msdn.com/Events/Build/BUILD2011/SAC-904T)
* [F# Introduction](http://skillsmatter.com/podcast/scala/phil-trelford-f-introduction)


## Hosting

Common hosting options are:

* [Heroku](http://heroku.com/) - See, for example, [F#, ServiceStack and Heroku](https://github.com/kunjee17/ServiceStackHeroku) and complete article about [hosting NancyFx and F# on Heroku](http://blog.ashleytowns.id.au/posts/2013-04/2013-04-01-running-csharp-fsharp-xbuild-nuget-on-heroku.html)
* [Azure Web Sites](http://www.windowsazure.com/) - Create and deploy to free Azure web sites from Visual Studio and other tools
* [AppHarbor](http://appharbor.com/) - Free hosting of .NET web applications



## Unit Testing Libraries

Some open source libraries that assist with web unit testing are:

* [FsCheck](http://fscheck.codeplex.com/)
* [FsUnit](https://github.com/fsharp/FsUnit)
* [Fuchu](https://github.com/mausch/Fuchu)
* [NaturalSpec](https://github.com/forki/NaturalSpec)
* [TickSpec](http://trelford.com/blog/post/TickSpec.aspx)
* [Unquote](http://code.google.com/p/unquote/)

Here are a few Visual Studio project templates available for building unit tests:

* [F# MsTest Project](http://visualstudiogallery.msdn.microsoft.com/51ebe64a-899b-4959-8c24-b0148ed6b264)
* [F# NUnit Template that also includes FsUnit, FsCheck, and Unquote](http://visualstudiogallery.msdn.microsoft.com/a52388eb-e1d3-4900-a25a-d18c8d23a1f3) 



## Resources for Other Frameworks

### Making WSDL and OData Services

* [F#/C# Web Service Template for WSDL](http://visualstudiogallery.msdn.microsoft.com/279345a4-f189-4d1f-98fe-6b1af322d164) - (Visual Studio, ASP.NET) Includes a template for WCF.
* [F# Web Data Feed Template for OData](http://visualstudiogallery.msdn.microsoft.com/62042780-c1bb-456a-a552-c7d88d5d7aef) - (Visual Studio, ASP.NET) Provides a project template for creating a convention-based OData Web Service in F# that runs under ASP.NET.   

### Older ASP.NET MVC using two projects (one F#, one C#)

When using MVC ASP.NET 3 or 4, mixed C#/F# ASP.NET MVC are used. In this approach, views are 
implemented in HTML with some C#. Models and controllers are implemented in F#.

* The [F#/C# Web Templates (Visual Studio, ASP.NET MVC 4)](http://visualstudiogallery.msdn.microsoft.com/3d2bf938-fc9e-403c-90b3-8de27dc23095) include templates for ASP.NET MVC 4 (ASPX/Razor) and Single Page Applications with Backbone.js or Knockout.js.
* The [F#/C# Web Templates (Xamarin Studio, ASP.NET MVC 4)](http://bloggemdano.blogspot.de/2012/12/using-new-aspnet-mvc-4-template-in.html) are a similar set of cross-platform templates for MonoDevelop. 
* The [F#/C# Web Templates (Visual Studio, ASP.NET MVC 3](http://visualstudiogallery.msdn.microsoft.com/f57aa816-e96b-4133-ab5d-9b9b99914ead) include templates for ASP.NET MVC 3 (ASPX/Razor). 

### Silverlight Applications

For those still using Silverlight, you can use F# to build Silverlight projects 
in whole or in part. Some resources are:

* [F# Client-Side Application Template (Visual Studio, Silverlight)](http://visualstudiogallery.msdn.microsoft.com/621d86fb-944f-48db-a69c-e73c5521de9d) - Includes a simple template for creating F# Silverlight Applications. The template creates a single Silverlight project that creates Silverlight controls from F# code and runs in an automatically generated HTML page.
 

---
layout: default
title: Guide - Web Programming | The F# Software Foundation
headline: Guide - Web Programming with F#
---

F# excels at building efficient, scalable and robust web solutions. Web programming is 
based around receiving a single HTTP request and replying with a result, which maps very
well to a stateless, functional approach. Advantages to using F# for web programming include:

* *Fast* - F# code execution is fast, using native code generation from scripted or project code 
* *Succinct* - F# is concise, readable and type-safe, for fast development of robust web solutions
* *Reactive and Scalable* - F# asynchronous programming simplifies scalable, reactive web programming
* *Interoperable* - F# interoperates seamlessly with languages such as C#, JavaScript and TypeScript
* *JavaScript-ready* - F# is JavaScript-ready through [WebSharper](http://websharper.com) and [Fable](http://fable.io/)
* *Open-source* and *cross-platform*

The [Cloud Programming](/guides/cloud/) guide contains more details on scalable cloud-hosted web programming with F#.


<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>To contribute to this guide <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/web/index.md">edit this page</a>. These resources are for educational purposes. The F# Software Foundation does not endorse any commercial products, processes, or services.</p>
</div>              

* auto-gen TOC:
{:toc}

------

## Web Frameworks 

<br />

#### SAFE-Stack
{: #safe-stack  .anchor }

[SAFE-Stack](https://safe-stack.github.io/) is an end-to-end, functional-first stack for cloud-ready web development that
emphasizes type-safe programming. It is an application development stack that brings several technologies together into a single,
coherent stack for type-safe, flexible, web-enabled applications that can be written almost entirely in F#.

* [Docs](https://safe-stack.github.io/docs/intro/)
* [Dojo](https://github.com/CompositionalIT/SAFE-Dojo/)
* [Support](https://safe-stack.github.io/docs/support/)

#### Giraffe
{: #giraffe  .anchor }

[Giraffe](https://github.com/giraffe-fsharp/Giraffe) is an F# library for building rich web applications that use ASP.NET Core under the hood. It has been heavily inspired and is similar to [Suave](https://suave.io/), but has been specifically designed with [ASP.NET Core](https://www.asp.net/core) in mind and can be plugged into the ASP.NET Core pipeline via [middleware](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware).

* [Docs](https://github.com/giraffe-fsharp/Giraffe/blob/master/DOCUMENTATION.md)
* [Samples](https://github.com/giraffe-fsharp/Giraffe/tree/master/samples)
* [Blog post showing how to use it with .NET Core 2.0](https://blogs.msdn.microsoft.com/dotnet/2017/09/26/build-a-web-service-with-f-and-net-core-2-0/)

<br />


#### Fable
{: #fable    .anchor }

[Fable](http://fable.io/) is an F# to JS compiler designed to generate clean
and standard code in order to maximize interoperability in both ways. It integrates with most
of JS development pipelines like [Babel](http://babeljs.io), [Webpack](https://webpack.github.io)
or [React Hot Loader](http://gaearon.github.io/react-hot-loader/). Fable allows you to develop
[node.js](https://nodejs.org/en/) services, desktop apps with [Electron](http://electron.atom.io)
and mobile apps with [React native](https://facebook.github.io/react-native/).

* [Docs](http://fable.io/docs/)
* [Samples](http://fable.io/samples.html)

<br />

#### ASP.NET Core

{: #aspnetcore  .anchor }

[ASP.NET Core](https://www.asp.net/core) is a modern, cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications. It runs on .NET Core and supports F# out of the box. If you install the [.NET Core SDK](https://www.microsoft.com/net/download/core), there are F# templates available via the `dotnet new` command.

* [Docs](https://docs.microsoft.com/aspnet/core/fundamentals/?tabs=aspnetcore2x)

<br />

#### WebSharper
{: #websharper    .anchor }

[WebSharper](http://websharper.com/)  allows end-to-end web applications with both client and server developed in F#. 
It includes TypeScript interoperability, mobile web apps, getting started material, templates and much more.

* [Examples](http://websharper.com/samples)
* [Visual Studio templates](http://websharper.com/WebSharper.vsix)
* [MonoDevelop templates](https://github.com/intellifactory/monodevelop.websharper)
* [CloudSharper templates](http://cloudsharper.com/)

<br />

#### Suave
{: #suave    .anchor }

[Suave](http://suave.io/) is a simple web development F# library providing a lightweight web server and a set of combinators to manipulate route flow and task composition.

<br />

#### Freya
{: #freya    .anchor }

[Freya](https://github.com/xyncro/freya) provides a functional web stack built on top of [OWIN](http://owin.org/). At its core, Freya wraps the OWIN environment dictionary with a computation expression and provides access to that dictionary with lenses. Additional layers of the stack provide types based on the HTTP and related RFCs, a pipeline abstraction for connecting Freya computations, a router, and an implementation of the [HTTP finite state machine](https://github.com/for-GET/http-decision-diagram), like that found in [webmachine](https://github.com/basho/webmachine).

* [NuGet](http://www.nuget.org/packages?q=freya)
* [GitHub](https://github.com/xyncro/freya)
* [Docs](https://freya.io/)
* Install the project template with `dotnet new --install Freya.Template`

<br />

#### NancyFx
{: #nancyfx    .anchor }

[NancyFx](http://nancyfx.org/) is a lightweight, low-ceremony framework for building HTTP-based micro-applications and micro-services on .NET and Mono. [F# templates](http://bloggemdano.blogspot.com/2013/12/a-few-other-template-additions-and.html) are available.

* [NancyFx Project Template](http://visualstudiogallery.msdn.microsoft.com/b55b8aac-b11a-4a6a-8a77-2153f46f4e2f) Includes templates for for getting started with a range of NancyFx applications.
* [F#, NancyFx and Heroku](http://blog.ashleytowns.id.au/posts/2013-04/2013-04-01-running-csharp-fsharp-xbuild-nuget-on-heroku.html) - Using NancyFx and Heroku with F#


<br />

#### Serving Requests with IHttpHandler
{: #httphandler    .anchor }

Do it the simple way, and serve web requests direct from code using F# asynchronous programming.

* [Summary](http://codinglight.blogspot.co.uk/2010/03/writing-your-own-httphandler-in-f.html)
* [F# async on the server side](http://lorgonblog.wordpress.com/2010/03/28/f-async-on-the-server-side/) - Non-blocking I/O on the server side

<br />

#### Pure F# Web API 2.0
{: #webapi20    .anchor }

[Web API 2.0](http://www.asp.net/web-api) is a widely used open source web framework from Microsoft that runs on .NET Framework. The [Pure F# Web Templates (Visual Studio, Web API 2.0)](http://bloggemdano.blogspot.com/2013/12/a-new-f-aspnet-mvc-5-and-web-api-2.html). These templates provide a Pure F# project for implementing a web API with Web API 2.0. Everything is implemented in F#.
   
[OWIN and Katana](http://www.asp.net/aspnet/overview/owin-and-katana) provide a flexible set of components for building and hosting Open Web Interface for .NET (OWIN)-based web applications. Web API can be hosted directly on Katana using the [Owin Web API package](http://www.nuget.org/packages/Microsoft.AspNet.WebApi.Owin).

Some resources on using F# with Web API:

* [Visual Studio templates](https://visualstudiogallery.msdn.microsoft.com/39ae8dec-d11a-4ac9-974e-be0fdadec71b)
* [How to create a pure F# ASP.NET Web API project](http://blog.ploeh.dk/2013/08/23/how-to-create-a-pure-f-aspnet-web-api-project/)
* [Running a pure F# ASP.NET Web API on Azure Web Sites](http://blog.ploeh.dk/2013/08/26/running-a-pure-f-web-api-on-azure-web-sites/)
* [Creating Lightweight F# websites that use pure F# OWIN Web APIs and Typescript web applications](http://cockneycoder.wordpress.com/2014/09/03/lightweight-websites-with-f/)
* [Sample F# ASP.NET Web API hosted with OWIN on an Azure Worker Role](https://github.com/panesofglass/AzureFSharpOwin)
* [F#/C# Web Templates for REST](http://visualstudiogallery.msdn.microsoft.com/3d2bf938-fc9e-403c-90b3-8de27dc23095) - (Visual Studio) Includes templates for ASP.NET Web API. 
* [A Simple Nowin F# Example](http://mikehadlow.blogspot.com/2015/04/a-simple-nowin-f-example.html) - example showing an F# OWIN app running on a web server other than IIS.

<br />

#### SignalR
{: #signalr    .anchor }

[SignalR](http://www.asp.net/signalr) provides bi-directional communication between web servers and clients using one of several mechanisms, beginning with [web sockets](http://www.websocket.org/) and falling back through several other approaches depending on client and server capabilities.
One example is a [Web Application Server (F#)](http://visualstudiogallery.msdn.microsoft.com/c7ea6e81-b383-40e4-899c-4a5ab9d68f02).

* [Skillscast: F# and SignalR for a fast Web](https://skillsmatter.com/skillscasts/6155-f-and-signalr-for-a-fast-web)
* [SignalR-FSharp-Example](https://github.com/Thorium/SignalR-FSharp-Example)
* F# and SignalR Stock Ticker [part 1](https://jamessdixon.wordpress.com/2013/11/26/f-and-singalr-stock-ticker-example/) [part 2](https://jamessdixon.wordpress.com/2013/12/03/f-and-signalr-stock-ticker-part-2/)
* [StackOverflow answer demonstrating typed access to SignalR client methods](http://stackoverflow.com/a/20380210/2089257)

<br />

#### ServiceStack
{: #service-stack    .anchor }

[ServiceStack](https://servicestack.net/) is a framework for simple and fast web services on .NET and Mono.

<br />

#### ASP.NET Blazor
{: #blazor .anchor }

[ASP.NET Blazor](https://blazor.net/) is a web framework for running .NET on [WebAssembly](https://webassembly.org/) similar to React, Angular, Vue, etc. It uses Razor `.cshtml` files to define components and render but can be used with F# libraries.

[Bolero](https://fsbolero.io/) is simply another way to bring F# to WebAssembly. 

[BlazorRedux](https://github.com/torhovland/blazor-redux) provides Redux-like state management for Blazor and works well with F#.

[Trail](https://github.com/panesofglass/trail) provides an F# DSL for rendering in Blazor, allowing for a complete F# solution.

<br />


------

## Web Testing Frameworks 
{:  .anchor }

<br />

#### Canopy for Client-side Testing
{: #canopy    .anchor }

[canopy](http://lefthandedgoat.github.io/canopy/) is a web testing framework built on top of selenium and written in F#. It's syntax is clean and 
concise. You can easily leverage your existing .NET code to help you test.
 
<br />

#### Unit Testing Libraries
{:  .anchor }

Some open source libraries that assist with web unit testing are:

* [Expecto](https://github.com/haf/expecto) - An evolution of Fuchu
* [FsCheck](https://fscheck.github.io/FsCheck)
* [FsUnit](https://github.com/fsprojects/FsUnit)
* [Fuchu](https://github.com/mausch/Fuchu)
* [TickSpec](https://github.com/fsprojects/TickSpec#project-description)
* [Unquote](https://github.com/SwensenSoftware/unquote/)


------

## Live Examples
{:  .anchor }

<br />

#### TodoBackend
{:  .anchor }

[TodoBackend](http://todobackend.com/) is a project that aims to be "a shared example to showcase backend tech stacks." The F# community has contributed some examples, and a few more are in progress:

* [F# - Freya (OWIN)](http://www.todobackend.com/specs/index.html?http://todo-backend-fsharp.azurewebsites.net/owin)
* [F# - ASP.NET Web API](http://www.todobackend.com/specs/index.html?http://todo-backend-fsharp.azurewebsites.net/webapi)

Please consider contributing, either directly to the TodoBackend project or via the [TodoBackendFSharp](https://github.com/panesofglass/TodoBackendFSharp) project.

------

## Tutorials
{:  .anchor }

* [Suave Music Store Tutorial](https://www.gitbook.com/book/theimowski/suave-music-store) for creating applications with Suave.IO

------

## Books
{:  .anchor }

Several books have been written that include information on building web applications with F#:

* [Building Web, Cloud, and Mobile Solutions with F#](http://www.amazon.com/Building-Web-Cloud-Mobile-Solutions/dp/1449333761) 
* [Expert F# 3.0](http://www.amazon.com/Expert-F-3-0-Apress/dp/1430246502/ref=sr_1_2?s=books&ie=UTF8&qid=1353176560&sr=1-2&keywords=F%23)

------

## Presentations
{:  .anchor }

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

------

## Hosting
{:  .anchor }

Common hosting options are:

* [Heroku](http://heroku.com/) - See, for example, [F#, ServiceStack and Heroku](https://github.com/kunjee17/ServiceStackHeroku) and complete article about [hosting NancyFx and F# on Heroku](http://blog.ashleytowns.id.au/posts/2013-04/2013-04-01-running-csharp-fsharp-xbuild-nuget-on-heroku.html)
* [Azure Web Sites](http://www.windowsazure.com/) - Create and deploy to free Azure web sites from Visual Studio and other tools
* [AppHarbor](http://appharbor.com/) - Free hosting of .NET web applications
* [GearHost](https://www.gearhost.com/) - Free hosting of .NET web applications (100 MB), IIS based, support for both .NET Framework and [Core](https://www.gearhost.com/documentation/deploy-net-core-application), MSSQL and MySQL databases (10 MB), support of simple WebJobs.




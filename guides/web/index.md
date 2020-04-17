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

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>To contribute to this guide <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/web/index.md">edit this page</a>. These resources are for educational purposes. The F# Software Foundation does not endorse any commercial products, processes, or services.</p>
</div>              

* auto-gen TOC:
{:toc}

------

## Integrated Stacks

#### SAFE Stack
{: #safe-stack  .anchor }

![logo](/images/thumbs/safestack.png)&nbsp;[SAFE Stack](https://safe-stack.github.io/) is an end-to-end, functional-first stack for cloud-ready web development that
emphasizes type-safe programming. It is an application development stack that brings several technologies together into a single,
coherent stack for type-safe, flexible, web-enabled applications that can be written almost entirely in F#.

* [Getting Started](https://safe-stack.github.io/docs/quickstart/)
* [Docs](https://safe-stack.github.io/docs/intro/)
* [Dojo](https://github.com/CompositionalIT/SAFE-Dojo/)
* [Support](https://safe-stack.github.io/docs/support/)

<br />

#### WebSharper
{: #websharper    .anchor }

![logo](/images/thumbs/WebSharper.png)&nbsp;[WebSharper](http://websharper.com/)  allows end-to-end web applications with both client and server developed in F#. 
It includes TypeScript interoperability, mobile web apps, getting started material, templates and much more.

* [Try Online](http://websharper.com/samples)

* [Documentation](http://developers.websharper.com)

* [Forums](http://forums.websharper.com)

<br />

#### Fable
{: #fable    .anchor }

![logo](/images/thumbs/fable.png)&nbsp;[Fable](http://fable.io/) is an F# to JS compiler designed to generate clean
and standard code in order to maximize interoperability in both ways. It integrates with most
of JS development pipelines like [Babel](http://babeljs.io), [Webpack](https://webpack.github.io)
or [React Hot Loader](http://gaearon.github.io/react-hot-loader/). Fable allows you to develop
[node.js](https://nodejs.org/en/) services, desktop apps with [Electron](http://electron.atom.io)
and mobile apps with [React native](https://facebook.github.io/react-native/).

* [Try Online](http://fable.io/repl)
* [Docs](http://fable.io/docs/)

## Web Frameworks 

<br />

#### Giraffe
{: #giraffe  .anchor }

![logo](/images/thumbs/giraffe.png)&nbsp;[Giraffe](https://github.com/giraffe-fsharp/Giraffe) is an F# library for building rich web applications that use ASP.NET Core under the hood. It has been heavily inspired and is similar to [Suave](https://suave.io/), but has been specifically designed with [ASP.NET Core](https://www.asp.net/core) in mind and can be plugged into the ASP.NET Core pipeline via [middleware](https://docs.microsoft.com/en-us/aspnet/core/fundamentals/middleware).

* [Docs](https://github.com/giraffe-fsharp/Giraffe/blob/master/DOCUMENTATION.md)
* [Samples](https://github.com/giraffe-fsharp/Giraffe/tree/master/samples)
* [Blog post showing how to use it with .NET Core 2.0](https://blogs.msdn.microsoft.com/dotnet/2017/09/26/build-a-web-service-with-f-and-net-core-2-0/)

<br />


#### ASP.NET Core

{: #aspnetcore  .anchor }

[ASP.NET Core](https://www.asp.net/core) is a modern, cross-platform, high-performance, open-source framework for building modern, cloud-based, Internet-connected applications. It runs on .NET Core and supports F# out of the box. If you install the [.NET Core SDK](https://www.microsoft.com/net/download/core), there are F# templates available via the `dotnet new` command.

* [Docs](https://docs.microsoft.com/aspnet/core/fundamentals/?tabs=aspnetcore2x)

<br />

#### Suave
{: #suave    .anchor }

![logo](/images/thumbs/suave.png)&nbsp;[Suave](http://suave.io/) is a simple web development F# library providing a lightweight web server and a set of combinators to manipulate route flow and task composition.

<br />

#### Saturn
{: #saturn    .anchor }

![logo](/images/thumbs/saturn.png)&nbsp;[Saturn](https://saturnframework.org) is a web development framework written in F# which implements the server-side MVC pattern. Many of its components and concepts will seem familiar to anyone with experience in other web frameworks like Ruby on Rails or Python’s Django. It's built on top of Giraffe and ASP.Net Core - modern, cross-platform, high-performance development platform for building cloud-ready web applications. 

It's heavily inspired by Elixir's [Phoenix](http://phoenixframework.org/).

* [NuGet](http://www.nuget.org/packages?q=saturn)
* [GitHub](https://github.com/SaturnFramework/Saturn)
* [Docs](https://saturnframework.org/docs)
* Install the project template with `dotnet new --install Saturn.Template`

<br />

#### Bolero

![logo](/images/thumbs/fsbolero.png)&nbsp;[Bolero](hthttps://fsbolero.io/) - F# on the client side, no JavaScript - Bolero uses Blazor to bring F# to WebAssembly. Create dynamic HTML content using syntax familiar from WebSharper and Fable, in a full-fledged client-side .NET web framework.

* [Get Started](https://fsbolero.io/)
* [Project Template](https://github.com/fsbolero/template)
* [Try Online](https://tryfsharp.fsbolero.io/)


<br />

#### Serving Requests with IHttpHandler
{: #httphandler    .anchor }

Do it the simple way, and serve web requests direct from code using F# asynchronous programming.

* [Summary](http://codinglight.blogspot.co.uk/2010/03/writing-your-own-httphandler-in-f.html)
* [F# async on the server side](http://lorgonblog.wordpress.com/2010/03/28/f-async-on-the-server-side/) - Non-blocking I/O on the server side

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

#### ASP.NET Blazor
{: #blazor .anchor }

[ASP.NET Blazor](https://blazor.net/) is a web framework for running .NET on [WebAssembly](https://webassembly.org/) similar to React, Angular, Vue, etc. It uses Razor `.cshtml` files to define components and render but can be used with F# libraries.

* [BlazorRedux](https://github.com/torhovland/blazor-redux) provides Redux-like state management for Blazor and works well with F#.

* [Trail](https://github.com/panesofglass/trail) provides an F# DSL for rendering in Blazor, allowing for a complete F# solution.

<br />

#### NancyFx
{: #nancyfx    .anchor }

[NancyFx](http://nancyfx.org/) is a lightweight, low-ceremony framework for building HTTP-based micro-applications and micro-services on .NET and Mono. [F# templates](http://bloggemdano.blogspot.com/2013/12/a-few-other-template-additions-and.html) are available.

* [NancyFx Project Template](http://visualstudiogallery.msdn.microsoft.com/b55b8aac-b11a-4a6a-8a77-2153f46f4e2f) Includes templates for for getting started with a range of NancyFx applications.

* [F#, NancyFx and Heroku](http://blog.ashleytowns.id.au/posts/2013-04/2013-04-01-running-csharp-fsharp-xbuild-nuget-on-heroku.html) - Using NancyFx and Heroku with F#


<br />

#### Freya
{: #freya    .anchor }

[Freya](https://github.com/xyncro/freya) provides a functional web stack built on top of [OWIN](http://owin.org/). At its core, Freya wraps the OWIN environment dictionary with a computation expression and provides access to that dictionary with lenses. Additional layers of the stack provide types based on the HTTP and related RFCs, a pipeline abstraction for connecting Freya computations, a router, and an implementation of the [HTTP finite state machine](https://github.com/for-GET/http-decision-diagram), like that found in [webmachine](https://github.com/basho/webmachine).

* [NuGet](http://www.nuget.org/packages?q=freya)
* [GitHub](https://github.com/xyncro/freya)
* [Docs](https://freya.io/)
* Install the project template with `dotnet new --install Freya.Template`

<br />

#### ServiceStack
{: #service-stack    .anchor }

[ServiceStack](https://servicestack.net/) is a framework for simple and fast web services on .NET and Mono.

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

* [Expert F# 4.0](https://books.google.com/books?isbn=1484207424)

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




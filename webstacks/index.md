---
layout: page
title: Web Programming | The F# Software Foundation
headline: Web Programming with F#
---

F# is excellent for building scalable, robust web solutions:
 * *Fast and Scalable* - F# is much faster than NodeJS, Python, PHP and Ruby 
 * *Succinct* - F# is concise, readable and type-safe, for fast development of robust web solutions
 * *Asynchronous* - F# provides asynchronous programming to simplify scalable client-server programming
 * *Interoperable* - F# interoperates seamlessly with languages such as C#, JavaScript and TypeScript
 * *JavaScript-ready* - F# is JavaScript-ready through [WebSharper](http://websharper.com) and [FunScript](http://funscript.info/)
 * *Open-source* and *Cross-platform*  - Like all good web tools!

## Frameworks for Web Applications


* ![logo](/community/projects/WebSharper.png)&nbsp;[WebSharper](http://www.websharper.com/home) 

  WebSharper allows end-to-end web applications with both client and server developed in F#. 
  It includes TypeScript interoperability, mobile web apps, getting started material, templates and much more.

* [Pure F# ASP.NET MVC](http://bloggemdano.blogspot.com/2013/12/a-new-f-aspnet-mvc-5-and-web-api-2.html) 

  [ASP.NET MVC](http://www.asp.net/mvc) is a widely used open source web framework from Microsoft.  [Pure F# ASP.NET MVC](http://bloggemdano.blogspot.com/2013/12/a-new-f-aspnet-mvc-5-and-web-api-2.html) 
  allows a Pure F# project for implementing a web application with ASP.NET MVC 5.
  Views are implemented in HTML5 using modern Javascript frameworks. 
  Models and controllers are implemented in F#.

* [FunScript](http://funscript.info/) 

  FunScript is an F# to JavaScript converter with TypeScript interoperability.

* [NancyFx](https://github.com/NancyFx/Nancy) 

  NancyFx is a lightweight, low-ceremony, framework for building HTTP based services on .NET and Mono.
  [F# templates](http://bloggemdano.blogspot.com/2013/12/a-few-other-template-additions-and.html) are available.


 
## Building Server-Side Web APIs

F# shines in the area of Web API development through frameworks like  [ServiceStack](http://www.servicestack.net/), [Web API 2.0](http://www.asp.net/web-api), [Frank](https://github.com/frank-fs/frank) and
[NancyFx](http://nancyfx.org/).

#### Pure F# Web API 2.0

[Web API 2.0](http://www.asp.net/web-api) is a widely used open source web framework from Microsoft.

The [Pure F# Web Templates (Visual Studio, Web API 2.0)](http://bloggemdano.blogspot.com/2013/12/a-new-f-aspnet-mvc-5-and-web-api-2.html).
These templates provide a Pure F# project for implementing a web API with Web API 2.0.
Everything is implemented in F#.

Some resources on using F# with Web API:

   * [How to create a pure F# ASP.NET Web API project](http://blog.ploeh.dk/2013/08/23/how-to-create-a-pure-f-aspnet-web-api-project/)

   * [Running a pure F# ASP.NET Web API on Azure Web Sites](http://blog.ploeh.dk/2013/08/26/running-a-pure-f-web-api-on-azure-web-sites/)

   * [F# Azure Worker Role with OWIN and Web API](https://github.com/panesofglass/AzureFSharpOwin) - Web services in an Azure worker role using OWIN with only F#

   * [F#/C# Web Templates for REST](http://visualstudiogallery.msdn.microsoft.com/3d2bf938-fc9e-403c-90b3-8de27dc23095) - (Visual Studio, ASP.NET Web API) Includes templates for ASP.NET Web API. 


#### Using ServiceStack

[ServiceStack](https://servicestack.net/) is is a framework for simple and fast web services on .NET and Mono.

 * [F# and ServiceStack Example 1](http://www.servicestack.net/mythz_blog/?p=785) - Web Services on any platform in and out of a web server! An async+parallel cached twitter proxy that works cross platform on Windows/OSX and Linux in 100 LOC
 * [F# and ServiceStack Example 2](http://www.servicestack.net/mythz_blog/?p=811) - An Async, Cached Twitter API Proxy in F#
 * [F#, ServiceStack and Heroku](https://github.com/kunjee17/ServiceStackHeroku) - Using ServiceStack and Heroku with F#

#### Serving Requests with IHttpHandlers 

 * [F# async on the server side](http://lorgonblog.wordpress.com/2010/03/28/f-async-on-the-server-side/) - Non-blocking I/O on the server side
 * [F# Web Data Feed Template for OData](http://visualstudiogallery.msdn.microsoft.com/62042780-c1bb-456a-a552-c7d88d5d7aef) -
    (Visual Studio, ASP.NET)Provides a project template for creating a convention-based OData Web Service in F# that runs under ASP.NET.   

#### Making WSDL Services

 * [F#/C# Web Service Template for WSDL](http://visualstudiogallery.msdn.microsoft.com/279345a4-f189-4d1f-98fe-6b1af322d164) - (Visual Studio, ASP.NET) Includes a template for WCF.



## Hosting

Common hosting options are:
 * [Heroku](http://heroku.com/) - See, for example, [F#, ServiceStack and Heroku](https://github.com/kunjee17/ServiceStackHeroku)
 * [Azure Web Sites](http://www.windowsazure.com/) - Create and deploy to free Azure web sites from Visual Studio and other tools
 * [AppHarbor](http://appharbor.com/) - Free hosting of .NET web applications

## Scaling to the Cloud

The [Cloud Programming](/cloud) section contains more details on cloud programming with F#.
Some specific resources related to web programming are:

 * [F# 3.0 Azure Samples](http://fsharp3sample.codeplex.com/wikipage?Title=AzureSamples)
 * [How to Create a Cloud-Scalable Internet Game Using F#, C#, and ASP.NET](http://blogs.msdn.com/b/fsharpteam/archive/2013/02/05/learn-how-to-create-an-internet-game-using-f-c-and-asp-net.aspx)
 * [Using F# and C# with Amazon EC2 Elastic Map/Reduce](http://atbrox.com/2011/02/07/an-example-of-using-f-and-c-netmono-with-amazons-elastic-mapreduce-hadoop/)

## Unit Testing Libraries

It is common to create a suite of unit tests when building web solutions. A list of open source 
libraries that assist with unit testing is available here:

 * [FsCheck](http://fscheck.codeplex.com/)
 * [FsUnit](https://github.com/dmohl/FsUnit)
 * [Fuchu](https://github.com/mausch/Fuchu)
 * [NaturalSpec](https://github.com/forki/NaturalSpec)
 * [TickSpec](http://trelford.com/blog/post/TickSpec.aspx)
 * [Unquote](http://code.google.com/p/unquote/)

Here are a few Visual Studio 2012 project templates available for building unit tests:

 * [F# MsTest Project](http://visualstudiogallery.msdn.microsoft.com/51ebe64a-899b-4959-8c24-b0148ed6b264)
 * [F# Unit Test Template (MSTest)](http://visualstudiogallery.msdn.microsoft.com/432eb82c-345e-4502-be56-015fe051a210)

## Client-side Testing

 * [canopy](http://lefthandedgoat.github.io/canopy/) is a web testing framework built on top of selenium and written in F#. It's syntax is clean and concise. You can easily leverage your existing .Net code to help you test.
 
## Books

Several books have been written that include information on building web applications with F#:

 * [Building Web, Cloud, and Mobile Solutions with F#](http://www.amazon.com/Building-Web-Cloud-Mobile-Solutions/dp/1449333761) 
 * [Expert F# 3.0](http://www.amazon.com/Expert-F-3-0-Apress/dp/1430246502/ref=sr_1_2?s=books&ie=UTF8&qid=1353176560&sr=1-2&keywords=F%23)


## Presentations

There are  several presentations and tutorials available that include information on 
build web applications with F#:

 * [Building an HTML5 application with WebSharper Sitelets, Part 1](http://www.developerfusion.com/article/124078/building-an-html5-application-with-websharper-sitelets-part-1/)
 * [Building Better Web Apps with F#](http://bloggemdano.blogspot.com/2012/11/recording-for-building-better-web-apps.html)
 * [Building Data-Driven Websites](http://msdn.microsoft.com/en-us/library/hh273072.aspx)
 * [F# 3.0: data, services, Web, cloud, at your fingertips](http://channel9.msdn.com/Events/Build/BUILD2011/SAC-904T)
 * [F# Introduction](http://skillsmatter.com/podcast/scala/phil-trelford-f-introduction)

### Older ASP.NET MVC using two projects (one F#, one C#)

When using MVC ASP.NET 3 or 4, mixed C#/F# ASP.NET MVC are used. In this approach, views are 
implemented in HTML with some C#. Models and controllers are implemented in F#.

   * The [F#/C# Web Templates (Visual Studio, ASP.NET MVC 4)](http://visualstudiogallery.msdn.microsoft.com/3d2bf938-fc9e-403c-90b3-8de27dc23095)  
   include templates for ASP.NET MVC 4 (ASPX/Razor) and Single Page Applications with Backbone.js or Knockout.js.

   * The [F#/C# Web Templates (Xamarin Studio, ASP.NET MVC 4)](http://bloggemdano.blogspot.de/2012/12/using-new-aspnet-mvc-4-template-in.html) 
   are a similar set of cross-platform templates for MonoDevelop. 

   * The [F#/C# Web Templates (Visual Studio, ASP.NET MVC 3](http://visualstudiogallery.msdn.microsoft.com/f57aa816-e96b-4133-ab5d-9b9b99914ead) 
   include templates for ASP.NET MVC 3 (ASPX/Razor). 

### Silverlight Applications: 

For those still using Silverlight, you can use F# to build Silverlight projects 
in whole or in part. Some resources are:

 * [F# Client-Side Application Template (Visual Studio, Silverlight)](http://visualstudiogallery.msdn.microsoft.com/621d86fb-944f-48db-a69c-e73c5521de9d) -
   Includes a simple template for creating F# Silverlight Applications. The template creates a single 
   Silverlight project that creates Silverlight controls from F# code and runs in an automatically generated HTML page.
 * [F# Web Application Template (Silverlight)](http://visualstudiogallery.msdn.microsoft.com/f0e9a557-3fd6-41d9-8518-c1735b382c73)
   Includes a template for Silverlight 4 and 5.
           
           

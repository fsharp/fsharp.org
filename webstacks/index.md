---
layout: page
title: Web Programming | The F# Software Foundation
headline: Web Programming with F#
---

F# provides the features you need to built scalable, robust web solutions. F# is:
 * *Fast and Scalable* - F# is much faster than NodeJS, Python, PHP and Ruby 
 * *Succinct* - F# is concise, readable and type-safe, for fast development of robust web solutions
 * *Asynchronous* - F# provides asynchronous programming to simplify scalable client-server programming
 * *Interoperabile* - F# interoperates seamlessly with languages such as C#, R, JavaScript and TypeScript
 * *Scalable* - Build scalable Web APIs and services using frameworks such as [ServiceStack](http://www.servicestack.net/)
 * *JavaScript-ready* - F# is JavaScript-ready through tools such as [WebSharper](http://websharper.com) and [FunScript](https://github.com/ZachBray/FunScript)
 * *Open-source* and *Cross-platform*  

### Building Web Applications:

Some specific options for web application development are:

 * [WebSharper](http://www.websharper.com/home) - Allows end-to-end web applications with both client and server developed in F#. 

   WebSharper includes TypeScript interoperability, mobile web apps, getting started material, templates and much more.

 * [ASP.NET MVC](http://www.asp.net/mvc) - A widely used open source web framework from Microsoft. 
   
   Views are implemented in HTML with some C#. Models and controllers are implemented in F#.

   The [F#/C# Web Templates (Visual Studio, ASP.NET MVC 4)](http://visualstudiogallery.msdn.microsoft.com/3d2bf938-fc9e-403c-90b3-8de27dc23095)  
   include templates for ASP.NET MVC 4 (ASPX/Razor) and Single Page Applications with Backbone.js or Knockout.js.

   The [F#/C# ASP.NET MVC 3 Templates](http://visualstudiogallery.msdn.microsoft.com/f57aa816-e96b-4133-ab5d-9b9b99914ead) 
   include templates for ASP.NET MVC 3 (ASPX/Razor). The [F#/C# Web Templates (MonoDevelop, ASP.NET MVC 4)](http://bloggemdano.blogspot.de/2012/12/using-new-aspnet-mvc-4-template-in.html) 
   are a similar se of cross-platform templates for MonoDevelop. 

 * [FunScript](https://github.com/ZachBray/FunScript/) - An F# to JavaScript converter with TypeScript interoperability.

 * [PicoMvc](https://github.com/robertpi/PicoMvc) is a micro framework for F# web programming.
 
### Building Web APIs:

F# shines in the area of Web API development through frameworks like  [ServiceStack](http://www.servicestack.net/), [ASP.NET Web API](http://www.asp.net/web-api), [Frank](https://github.com/frank-fs/frank) and
[NancyFx](http://nancyfx.org/).

 * [F# and ServiceStack Example 1](http://www.servicestack.net/mythz_blog/?p=785) - Web Services on any platform in and out of a web server! An async+parallel cached twitter proxy that works cross platform on Windows/OSX and Linux in 100 LOC
 * [F# and ServiceStack Example 2](http://www.servicestack.net/mythz_blog/?p=811) - An Async, Cached Twitter API Proxy in F#
 * [F#/C# Web Templates for REST](http://visualstudiogallery.msdn.microsoft.com/3d2bf938-fc9e-403c-90b3-8de27dc23095) - 
    (Visual Studio, ASP.NET Web API) Includes templates for ASP.NET Web API. 
 * [F# Web Data Feed Template for OData](http://visualstudiogallery.msdn.microsoft.com/62042780-c1bb-456a-a552-c7d88d5d7aef) -
    (Visual Studio, ASP.NET)Provides a project template for creating a convention-based OData Web Service in F# that runs under ASP.NET.   
 * [F#/C# Web Service Template for WSDL](http://visualstudiogallery.msdn.microsoft.com/279345a4-f189-4d1f-98fe-6b1af322d164) - (Visual Studio, ASP.NET) Includes a template for WCF.

### Scaling to the Cloud

The [Cloud Programming](/cloud) section contains more details on cloud programming with F#.
Some specific resources related to web programming are:

 * [F# 3.0 Azure Samples](http://fsharp3sample.codeplex.com/wikipage?Title=AzureSamples)
 * [How to Create a Cloud-Scalable Internet Game Using F#, C#, and ASP.NET](http://blogs.msdn.com/b/fsharpteam/archive/2013/02/05/learn-how-to-create-an-internet-game-using-f-c-and-asp-net.aspx)
 * [Using F# and C# with Amazon EC2 Elastic Map/Reduce](http://atbrox.com/2011/02/07/an-example-of-using-f-and-c-netmono-with-amazons-elastic-mapreduce-hadoop/)

#### Unit Testing Libraries

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

### Books

Several books have been written that include information on building web applications with F#:

 * [Building Web, Cloud, and Mobile Solutions with F#](http://www.amazon.com/Building-Web-Cloud-Mobile-Solutions/dp/1449333761) 
 * [Expert F# 3.0](http://www.amazon.com/Expert-F-3-0-Apress/dp/1430246502/ref=sr_1_2?s=books&ie=UTF8&qid=1353176560&sr=1-2&keywords=F%23)
 * [Programming F# 3.0](http://www.amazon.com/Programming-F-3-0-Chris-Smith/dp/1449320295/ref=sr_1_1?s=books&ie=UTF8&qid=1353176560&sr=1-1&keywords=F%23)
 * [Professional F# 2.0](http://www.amazon.com/Professional-F-2-0-Ted-Neward/dp/047052801X/ref=sr_1_9?s=books&ie=UTF8&qid=1353176560&sr=1-9&keywords=F%23)
 * [Real-World Functional Programming: With Examples in F# and C#](http://www.amazon.com/Real-World-Functional-Programming-Tomas-Petricek/dp/1933988924/ref=sr_1_5?s=books&ie=UTF8&qid=1353176560&sr=1-5&keywords=F%23) 
     
      
### Presentations

There are  several presentations and tutorials available that include information on 
build web applications with F#:

 * [Building an HTML5 application with WebSharper Sitelets, Part 1](http://www.developerfusion.com/article/124078/building-an-html5-application-with-websharper-sitelets-part-1/)
 * [Building Better Web Apps with F#](http://bloggemdano.blogspot.com/2012/11/recording-for-building-better-web-apps.html)
 * [Building Data-Driven Websites](http://msdn.microsoft.com/en-us/library/hh273072.aspx)
 * [F# 3.0: data, services, Web, cloud, at your fingertips](http://channel9.msdn.com/Events/Build/BUILD2011/SAC-904T)
 * [F# Introduction](http://skillsmatter.com/podcast/scala/phil-trelford-f-introduction)

### Silverlight Applications: 

For those still using Silverlight, you can use F# to build Silverlight projects 
in whole or in part. Some resources are:

 * [F# Client-Side Application Template (Visual Studio, Silverlight)](http://visualstudiogallery.msdn.microsoft.com/621d86fb-944f-48db-a69c-e73c5521de9d) -
   Includes a simple template for creating F# Silverlight Applications. The template creates a single 
   Silverlight project that creates Silverlight controls from F# code and runs in an automatically generated HTML page.
 * [F# Web Application Template (Silverlight)](http://visualstudiogallery.msdn.microsoft.com/f0e9a557-3fd6-41d9-8518-c1735b382c73)
   Includes a template for Silverlight 4 and 5.
           
           

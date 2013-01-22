---
layout: page
title: Web Stacks | The F# Software Foundation
headline: Web Stacks for F#
---

The stateless nature of the web makes functional programming ideal for modern web programming.
As a functional-first language, F# provides a uniquely powerful combination of features for this domain:

 * *Performance and Robustness* - F# is a high-performance, scalable, interoperable 
   language. A strongly-typed functional-first approach makes it simple to scale 
   solutions horizontally, improves the robustness of the solution, and reduces exceptions. 
 * *Succinctness* - F# provides a syntax that is concise yet readable and type-safe. This allows faster development 
   of web solutions and increases maintainability.  
 * *Language support* - F# provides a large number of features that improve the development of complex, large-scale, 
   and/or information-rich web solutions. Some of these include Type Providers, MailboxProcessor (Agents), 
   Asynchronous Workflows, Pattern Matching, Discriminated Union, the Option type, and many more.
 * *Interoperability* - F# has uniquely strong interoperability capabilities with both C# and other languages
   such as R and JavaScript.
 * *JavaScript* - JavaScript and F# share much in common. This reduces the context 
   switching that is associated with the disparate programming paradigms that are often 
   used between server and client-side development.  F# and JavaScript work very well 
   together through tools such as [WebSharper](http://websharper.com) and [FunScript](https://github.com/ZachBray/FunScript).
 * *Open-source* and *Cross-platform* - Most F# web development is done using fully open source components 
   such as F# itself, ASP.NET, WebSharper, FunScript and ServiceStack. F# web applications and services
   can be developed and deployed on Mac, Linux and Windows, and
   F# can be used to produce cross-platform HTML5 JavaScript user interfaces.

### Getting Started 

[Install F#](http://fsharp.org) and an IDE or text editor. Two free IDEs are:

 * [Visual Studio 2012 Express for Web](http://go.microsoft.com/fwlink/?LinkID=261287)
 * [MonoDevelop](http://monodevelop.com/)

The following templates can help you quickly get started with building web solutions with F#:

Cross-platform:
 
 * [F#/C# ASP.NET MVC 4 for Mac, Linux and Windows in MonoDevelop](http://bloggemdano.blogspot.de/2012/12/using-new-aspnet-mvc-4-template-in.html) - 
   Includes material about ASP.NET MVC (ASPX/Razor), ASP.NET Web API, and Single Page Applications with Backbone.js or Knockout.js.
 * [WebSharper Templates](http://www.websharper.com/docs/getting-started) WebSharper comes with numerous templates
   for getting going with F# client/server web programming directly.
 * [FunScript Templates](https://github.com/ZachBray/FunScript) FunScript comes with some example templates for building all-JavaScript applications in F#.

Visual Studio:

 * [F#/C# ASP.NET MVC 4 Template](http://visualstudiogallery.msdn.microsoft.com/3d2bf938-fc9e-403c-90b3-8de27dc23095) - 
   Includes templates for ASP.NET MVC (ASPX/Razor), ASP.NET Web API, and Single Page Applications with Backbone.js or Knockout.js.
 * [F#/C# ASP.NET MVC 3 Template](http://visualstudiogallery.msdn.microsoft.com/f57aa816-e96b-4133-ab5d-9b9b99914ead) - 
   Includes templates for ASP.NET MVC (ASPX/Razor).
 * [F#/C# Web Service Template (ASP.NET, WSDL)](http://visualstudiogallery.msdn.microsoft.com/279345a4-f189-4d1f-98fe-6b1af322d164) -
   Includes a template for WCF.
 * [F# Web Data Feed Template (ASP.NET, OData)](http://visualstudiogallery.msdn.microsoft.com/62042780-c1bb-456a-a552-c7d88d5d7aef) -
   Provides a project template for creating a convention-based OData Web Service in F# that runs under ASP.NET.   
 * [F# Client-Side Application Template (Silverlight)](http://visualstudiogallery.msdn.microsoft.com/621d86fb-944f-48db-a69c-e73c5521de9d) -
   Includes a simple template for creating F# Silverlight Applications. The template creates a single 
   Silverlight project that creates Silverlight controls from F# code and runs in an automatically generated HTML page.
 * [F# Web Application Template (Silverlight)](http://visualstudiogallery.msdn.microsoft.com/f0e9a557-3fd6-41d9-8518-c1735b382c73)
   Includes a template for Silverlight 4 and 5.

### Web Frameworks and Tools:

Here are some of the web frameworks used with F# web programming:

 * ASP.NET MVC - ASP.NET MVC provides a framework that allows view related aspects to be 
   easily created in C# with the models and controllers created in F#. This approach uses
   the "best tool for the job" concept and takes advantage of the inherent separation of 
   concerns provided by the Model-View-Controller (MVC) architectural design pattern. 
 * HTTP Services - F# shines in the area of SOAP and HTTP service development. Common frameworks
   for building SOAP or HTTP services with F# include [ASP.NET Web API](http://www.asp.net/web-api), 
   [ServiceStack](http://www.servicestack.net/), [Frank](https://github.com/frank-fs/frank),
   [NancyFx](http://nancyfx.org/), and WCF.
 * [WebSharper](http://www.websharper.com/home) - 
   F# is extremely well suited for acting as the workhorse on the server. 
   However, it doesn't stop there. Frameworks such as [WebSharper](http://www.websharper.com/home)
   allow end-to-end web applications to be developed with F#.
 * Silverlight - Via the Portable Library project in F# 3.0 or the Silverlight Library project in F# 2.0
   you can use F# to build Silverlight projects in whole or in part. 
 * [FunScript](https://github.com/ZachBray/FunScript/) - F# to JavaScript converter with TypeScript interoperability.
 * [PicoMvc](https://github.com/robertpi/PicoMvc)

### Unit Testing Libraries

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

### Resources

Several books have been written that include information on building web applications with F#:

 * [Building Web, Cloud, and Mobile Solutions with F#](http://www.amazon.com/Building-Web-Cloud-Mobile-Solutions/dp/1449333761) 
 * [Expert F# 3.0](http://www.amazon.com/Expert-F-3-0-Apress/dp/1430246502/ref=sr_1_2?s=books&ie=UTF8&qid=1353176560&sr=1-2&keywords=F%23)
 * [Programming F# 3.0](http://www.amazon.com/Programming-F-3-0-Chris-Smith/dp/1449320295/ref=sr_1_1?s=books&ie=UTF8&qid=1353176560&sr=1-1&keywords=F%23)
 * [Professional F# 2.0](http://www.amazon.com/Professional-F-2-0-Ted-Neward/dp/047052801X/ref=sr_1_9?s=books&ie=UTF8&qid=1353176560&sr=1-9&keywords=F%23)
 * [Real-World Functional Programming: With Examples in F# and C#](http://www.amazon.com/Real-World-Functional-Programming-Tomas-Petricek/dp/1933988924/ref=sr_1_5?s=books&ie=UTF8&qid=1353176560&sr=1-5&keywords=F%23) 
 
There are also several presentations and tutorials available that include information on 
build web applications with F#:

 * [Building an HTML5 application with WebSharper Sitelets, Part 1](http://www.developerfusion.com/article/124078/building-an-html5-application-with-websharper-sitelets-part-1/)
 * [Building Better Web Apps with F#](http://bloggemdano.blogspot.com/2012/11/recording-for-building-better-web-apps.html)
 * [Building Data-Driven Websites](http://msdn.microsoft.com/en-us/library/hh273072.aspx)
 * [F# 3.0: data, services, Web, cloud, at your fingertips](http://channel9.msdn.com/Events/Build/BUILD2011/SAC-904T)
 * [F# Introduction](http://skillsmatter.com/podcast/scala/phil-trelford-f-introduction)

 
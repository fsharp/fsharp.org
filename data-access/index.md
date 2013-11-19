---
layout: page
title: Data Access | The F# Software Foundation
headline: Data Access with F#
---

F# supports all common data import and access techniques. In addition, the Type Provider feature of 
F# 3.0 brings simplicity to accessing data, including databases,
web-scale data and structured text formats like JSON, and XML.

If the data access libraries you need are not listed here, you can search for them on [NuGET](http://nuget.org). 

[Try F#](http://tryfsharp.org/learn) has specific tutorials related to data access. 

### CSV, XML and JSON data

Many [NuGET](http://nuget.org) packages exist for document access. Some specific frameworks dedicated to simplifying document data access are:

 * Direct access to CSV and other log file formats is simple. For example, see [Log File Analysis with F#](http://jyliao.blogspot.co.uk/2011/03/log-analysis-with-f.html)

 * [FSharp.Data](http://fsharp.github.io/FSharp.Data/) - The F# Data library (FSharp.Data.dll) implements functionality to access data in your F# applications and scripts. 

   It implements F# type providers for working with structured file formats (CSV, JSON and XML) and for accessing the WorldBank and Freebase data. It also includes helpers for parsing JSON files and for sending HTTP requests.

 * [Json.NET](http://json.codeplex.com/) - "Serialize All Things"

### SQL Data Access

A wide range of high-quality libraries exist for SQL data access from F#. Many can be found on [NuGET](http://nuget.org).
Some resources are listed below:

 * [The SqlDataConnection Type Provider](http://msdn.microsoft.com/en-us/library/hh361033.aspx) - For accessing SQL using F# 3.0 LINQ queries
 * [The SqlEntityConnection Type Provider](http://msdn.microsoft.com/en-us/library/hh361035.aspx) - For accessing SQL using F# 3.0 LINQ queries and Entity Framework
 * [ADO.NET](http://msdn.microsoft.com/en-us/library/aa286484.aspx) - A set of classes that expose data access services to the .NET programmer
 * [FSharp.Data.SqlCommandTypeProvider](https://github.com/dmitry-a-morozov/FSharp.Data.SqlCommandTypeProvider) - Use SQL to specify your queries. Contributors welcome!
 * [FSharpComposableQueries](http://fsharp.github.io/FSharpComposableQuery/) - Compositional Query Framework for F# Queries, based on "A Practical Theory of Language-Integrated Query"

### Web Data Stores

F# allows for the direct integration of scalable data stores into F# programming. Some specific examples are:

 * [Freebase](http://freeebase.com) - A type provider for Freebase is available in the [FSharp.Data](http://fsharp.github.io/FSharp.Data/) library
 * [World Bank](http://worldbank.org) - A type provider for the World bank data sets is available in the [FSharp.Data](http://fsharp.github.io/FSharp.Data/) library

### Exploratory Data Frame and Time Series Programming

 * [Deedle](http://bluemountaincapital.github.io/Deedle/) is an easy-to-use, high quality package 
   for data and time series manipulation and for scientific programming. It supports working with 
   structured data frames, ordered and unordered data, as well as time series. Deedle is designed to 
   work well for exploratory programming using F# and C# interactive console, but can be also used in 
   efficient compiled .NET code.  If you are familiar with the Pandas library from Python or the 'tseries' 
   package in R, then this package is for you.



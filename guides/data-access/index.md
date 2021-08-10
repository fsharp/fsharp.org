---
layout: default
title: Guide - Data Access | The F# Software Foundation
headline: Guide - Data Access with F#
redirect_from: "/data-access/index.html"
---

F# supports all common data import and access techniques. In addition, the type provider feature of 
F# brings simplicity and flexibility to accessing data, including databases, web-scale data and structured 
text formats like JSON, and XML.  

If the data access libraries you need are not listed here, you can search for them on [nuget](http://nuget.org).

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>To contribute to this guide <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/data-access/index.md">edit this page</a>. These resources are for educational purposes. </p>
</div>              

* auto-gen TOC:
{:toc}


<br />

### CSV, HTML, JSON and XML data

* [FSharp.Data](http://fsprojects.github.io/FSharp.Data/) - The F# Data library (FSharp.Data.dll) implements functionality to access data in your F# applications and scripts.  It implements F# type providers for working with structured file formats (CSV, HTML, JSON and XML) and for accessing the WorldBank and Freebase services. It also includes helpers for parsing CSV, HTML and JSON files and for sending HTTP requests.

* [Json.NET](https://www.newtonsoft.com/json) provides full support for serialization of F# types to and from JSON.

* Direct access to CSV and other log file formats is simple. For example, see [Log File Analysis with F#](http://jyliao.blogspot.co.uk/2011/03/log-analysis-with-f.html)


<br />

### SQL Data Access

A wide range of high-quality libraries exist for SQL data access from F#. Many can be found on [NuGET](http://nuget.org).
Some resources are listed below:

* [FSharp.Data.SqlClient](http://fsprojects.github.io/FSharp.Data.SqlClient/) - Use SQL to specify your queries, explore Stored Procedures, User Defined Types and Functions with IntelliSense right in your F# code. Requries SQL Server 2012+ or SQL Azure.

* [FSharp.Data.SQLProvider](http://fsprojects.github.io/SQLProvider/) - A general SQL database type provider, supporting LINQ queries, schema exploration, individuals. Requires SQL Server, SQLite, PostgreSQL, Oracle, MySQL or Microsoft Access.

* [ADO.NET](http://msdn.microsoft.com/library/aa286484.aspx) - A set of .NET classes exposing data access services to the .NET programmer. Works with a very broad range of databases.

* [Rezoom.SQL](https://github.com/rspeele/Rezoom.SQL) - A library that statically typechecks a common SQL dialect and translates it to various RDBMS backends.

<br />

### Web Data Stores

F# allows for the direct integration of scalable data stores into F# programming. For example, a type provider for the World bank data sets is available in the [FSharp.Data](http://fsprojects.github.io/FSharp.Data/) library. Other
web data stores can be accessed through F# support for JSON, XML and CSV data formats.

<br />

### Data Frame and Time Series Programming

* See the [Data Science](../data-science) guide for more information on data frame and time series programming with F#.




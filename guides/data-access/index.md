---
layout: default
title: Guide - Data Access | fsharp.org
headline: Guide - Data Access with F#
redirect_from: "/data-access/index.html"
---

F# supports all common data import and access techniques. In addition, the type provider feature of
F# brings simplicity and flexibility to accessing data, including databases, web-scale data and structured
text formats like JSON, and XML.

If the data access libraries you need are not listed here, you can search for them on [nuget](http://nuget.org).

### CSV, HTML, JSON and XML data

* [FSharp.Data](http://fsprojects.github.io/FSharp.Data/) - The F# Data library (FSharp.Data.dll) implements functionality to access data in your F# applications and scripts.  It implements F# type providers for working with structured file formats (CSV, HTML, JSON and XML) and for accessing the WorldBank and Freebase services. It also includes helpers for parsing CSV, HTML and JSON files and for sending HTTP requests.

* [Json.NET](https://www.newtonsoft.com/json) provides full support for serialization of F# types to and from JSON.

* Direct access to CSV and other log file formats is simple. For example, see [Log File Analysis with F#](http://jyliao.blogspot.co.uk/2011/03/log-analysis-with-f.html)

<br />

### SQL Data Access

A wide range of high-quality libraries exist for SQL data access from F#. Many can be found on [NuGET](http://nuget.org).
Some resources are listed below:

* [LINQ to DB](https://github.com/linq2db/linq2db) - LINQ to DB is the fastest LINQ database access library offering a simple, light, fast, and type-safe layer between your POCO objects and your database.

* [FSharp.Data.SQLProvider](http://fsprojects.github.io/SQLProvider/) - A general SQL database type provider, supporting LINQ queries, schema exploration, individuals. Requires SQL Server, SQLite, PostgreSQL, Oracle, MySQL or Microsoft Access.

* [Facil](https://github.com/cmeeren/Facil) - Generates F# data access source code from .sql script files and stored procedures. Optimized for developer happiness. Works with SQL Server 2012+. Well-tested, performant, and fully-featured - supports e.g. table-valued parameters, temp tables, and generated DTOs matching your tables, which can be used for both inserts and queries. Highly configurable.

* [FSharp.Data.SqlClient](http://fsprojects.github.io/FSharp.Data.SqlClient/) - Use SQL to specify your queries, explore Stored Procedures, User Defined Types and Functions with IntelliSense right in your F# code. Requries SQL Server 2012+ or SQL Azure.

* [Rezoom.SQL](https://github.com/rspeele/Rezoom.SQL) - Statically typed SQL for F#. Rezoom.SQL is an F# ORM for SQL databases. It integrates with the F# compiler via a generative type provider to statically typecheck its own dialect of SQL. It knows how to translate this SQL dialect to various backends. Currently it supports SQLite, SQL Server, and PostgreSQL. The type provider makes it fast and easy to write SQL statements, run them, and consume their results from your F# code with full type safety. You don't need to install any editor extensions or custom tooling, just add a NuGet package and you're off and running

* [Dapper.FSharp](https://github.com/Dzoukr/Dapper.FSharp) - Lightweight F# extension for StackOverflow Dapper with support for MSSQL, MySQL, and PostgreSQL.

* [Npgsql.FSharp](https://github.com/Zaid-Ajaj/Npgsql.FSharp) - A thin F#-friendly layer for the Npgsql data provider for PostgreSQL. For an optimal developer experience, this library is made to work with [Npgsql.FSharp.Analyzer](https://github.com/Zaid-Ajaj/Npgsql.FSharp.Analyzer) which is a F# analyzer that will verify the query syntax and perform type-checking against the parameters and the types of the columns from the result set.

* [Donald](https://github.com/pimbrouwers/Donald) - Donald is a well-tested library, with pleasant ergonomics that aims to make working with ADO.NET safer and a lot more succinct. It is an entirely generic abstraction, and will work with all ADO.NET implementations.

* [SqlHydra](https://github.com/JordanMarr/SqlHydra) - SqlHydra is a suite of NuGet packages for working with databases in F#. It includes a set of dotnet tools for generating types for various database providers, and a querying library that works with SQL Server, SQLite, PostgreSql, MySql, Oracle and Firebird.

* [SqlFun](https://github.com/jacentino/SqlFun) - SqlFun is a tool for writing data access code in F# functional way.
It's fast, type safe and gives you all powers of SQL, no custom query language constraints you.
It's also lightweight, you need to know a general idea and few functions (and, of course SQL).

* [RepoDB](https://github.com/mikependon/RepoDB) - RepoDB is an open-source .NET ORM library that bridges the gaps of micro-ORMs and full-ORMs. It helps you simplify the switch-over of when to use the BASIC and ADVANCE operations during the development.

* [DustyTables](https://github.com/Zaid-Ajaj/DustyTables) - Functional wrapper around plain old (dusty?) SqlClient to simplify data access when talking to MS Sql Server databases.

* [ADO.NET](https://docs.microsoft.com/en-us/dotnet/framework/data/adonet/) - A set of .NET classes exposing data access services to the .NET programmer. Works with a very broad range of databases.

<br />

### NoSQL Data Access

* [MongoDB.NET](https://github.com/mongodb/mongo-csharp-driver) - The official .NET Driver for MongoDB, despite its name you can use it from F# as well.

* [Mondocks](https://github.com/AngelMunoz/Mondocks) - An alternative way to interact with MongoDB databases from F# that allows you to use mongo-idiomatic constructs

<br />

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial">
    <p>To contribute to this guide <a href="https://github.com/fsharp/fsharp.org/edit/main/guides/data-access/index.md">edit this page</a>. These resources are for educational purposes. </p>
</div>

<br />

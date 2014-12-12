---
layout: default
title: Guide - Cloud Programming | The F# Software Foundation
headline: Guide - Cloud Data, Compute and Messaging with F#
redirect_from: "/cloud/index.html"
---

This guide is an overview of the packages and tools for scalable data processing with F#,
particularly for taking advantage of scalable cloud-computing resources. To contribute to this guide, log on to GitHub, [edit this page](https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/cloud/index.md) and send a pull request.

## Table of Contents

* auto-gen TOC:
{:toc}


## Cloud Platforms

### [Amazon Web Services](http://aws.amazon.com)

Amazon Web Services (AWS) provide a large array of on-demand and managed computing and 
hosting services. AWS include on-demand and reserved virtual machine instances, 
a variety of storage options, a content delivery network (CDN), DNS capabilities, and many others. 
Amazon offers services from multiple data centers around the world.

Amazon offers a .NET SDK for managing the AWS services, 
[described here](http://aws.amazon.com/sdkfornet/). This SDK provides facilities for managing 
storage, compute instances, and other Amazon services.

Some additional resources for using F# and .NET on Amazon's AWS service:

 * [AWS Toolkit for Visual Studio](http://aws.amazon.com/visualstudio/)

 * [Using F# and C# with Elastic MapReduce](http://atbrox.com/2011/02/07/an-example-of-using-f-and-c-netmono-with-amazons-elastic-mapreduce-hadoop/)


### [Windows Azure](http://www.windowsazure.com/en-us/home/features/overview/)

Windows Azure provides access to  Microsoft's worldwide datacenters through services including 
virtual machines, geo-redundant storage, database clusters and website deployment.  [This page](http://www.windowsazure.com/en-us/develop/net/fundamentals/compute/) provides 
detail on the structure of Azure applications.

 * [Fog](http://dmohl.github.io/Fog/) - A simple and pleasant set of wrappers for accessing
   basic Azure API services such as blob, table, queue, Service Bus and caching in one simple, 
   uniform set of functions.

 * [FSharp.Azure](https://github.com/daniel-chambers/FSharp.Azure) - FSharp.Azure provides an idiomatic F# API to query and modify data in Azure table storage using immutable F# record types. 
 
 * [F# Azure Storage Type Provider](https://github.com/isaacabraham/AzureStorageTypeProvider) - Provides strongly-typed access to Blobs and Tables with automatic schema generation of table schema based off EDM metadata.

 * F# material based on the Windows Azure Training Kit for developers, focusing on web and data programming:

   * [Part 1: Building and Publishing Windows Azure Web Sites using F#](http://sireel-world.azurewebsites.net/sir-eel-visions/WATK-FS-Pt1)

   * [Part 2 - WATK in F#, Part 2: Deploying an Azure Web Site with Git](http://sireel-world.azurewebsites.net/sir-eel-visions/WATK-FS-Pt2)

   * [Part 3 - WATK in F#, Part 3: Using Entity Framework with an Azure Database](http://sireel-world.azurewebsites.net/sir-eel-visions/WATK-FS-Pt3)

   * [Part 4 - WATK in F#, Part 4: Introduction to Cloud Services](http://sireel-world.azurewebsites.net/sir-eel-visions/WATK-FS-CS-Pt01)

   * [Part 5 - WATK in F#, Part 5: Background Processing with Worker Roles and Queues](http://sireel-world.azurewebsites.net/sir-eel-visions/WATK-FS-CS-Pt02)

   * [Part 6 - WATK in F#, Part 6: Debugging Applications in Windows Azure](http://sireel-world.azurewebsites.net/sir-eel-visions/watk-in-f-part-6-debugging-applications-in-windows-azure)

 * [Building Web, Cloud, and Mobile Solutions with F#](http://www.amazon.com/Building-Cloud-Mobile-Solutions-ebook/dp/B00AANFL60) - Book including details on Azure programming with F#

Below are resources on using Windows Azure from F# and .NET in general:

 * [Introduction to Windows Azure](http://www.windowsazure.com/en-us/develop/net/fundamentals/intro-to-windows-azure/)

 * [.NET and RESTful management API reference](http://msdn.microsoft.com/en-us/library/windowsazure/ff800682.aspx)

 * [F# 3.0 Azure Samples](http://fsharp3sample.codeplex.com/wikipage?Title=AzureSamples)

 * [How to Create a Cloud-Scalable Internet Game Using F#, C#, and ASP.NET](http://blogs.msdn.com/b/fsharpteam/archive/2013/02/05/learn-how-to-create-an-internet-game-using-f-c-and-asp-net.aspx)

 * [Running a pure F# Web API on Azure Web Sites](http://blog.ploeh.dk/2013/08/26/running-a-pure-f-web-api-on-azure-web-sites/)

## Scalable Distributed Programming and Messaging

Distributed compute problem require a very wide range of communication capabilities, ranging
from simple command line argument passing to heavily optimized, low-latency interprocess
communications. This section lists a wide range of communication libraries available to F#.

#### [FSharp.CloudAgent](http://isaacabraham.github.io/FSharp.CloudAgent) and [F# Mailbox Processor](http://blogs.msdn.com/b/dsyme/archive/2010/02/15/async-and-parallel-design-patterns-in-f-part-3-agents.aspx) 

F# Mailbox Processors are an Agent pattern for inter-thread and inter-process communication using the F# library's MailboxProcessor.

FSharp.CloudAgent is a simple-to-use framework that allows the easy creation of distributable pools of workers or agents using F#'s native Mailbox Processor agent framework, using Azure Service Bus to provide a cheap and reliable message bus.


#### Akka.NET

The [Akka.NET](http://akkadotnet.github.io/) framework is an open source toolkit and runtime for building highly concurrent, distributed, and fault-tolerant event-driven applications on .NET and Mono.  It is used in production systems by its own contributors.

 * [General information](http://akkadotnet.github.io/)

 * [F#-specific API](http://akkadotnet.github.io/wiki/FSharp%20API)

#### MBrace

The [MBrace](http://m-brace.net/) framework is an open-source  programming model and distributed runtime that enables scalable, fault-tolerant computation and data processing for the .NET/mono frameworks.

 * [Programming model](http://www.m-brace.net/programming-model.html)

 * [Windows Azure support](http://www.m-brace.net/azure-tutorial.html)

#### Orleans

The [Orleans](http://research.microsoft.com/jump/139795/) framework provides a straightforward approach to building distributed high-scale computing applications, without the need to learn and apply complex concurrency or other scaling patterns. It was designed for use in the cloud, and has been used extensively in Microsoft Azure.  A simple ['Hello World' F# sample](https://orleans.codeplex.com/SourceControl/latest#src/samples/FSharpHelloWorld/Grains/Grain1.fs) also available.

#### [ServiceStack](http://www.servicestack.net/) 

[ServiceStack](http://www.servicestack.net/) is "Thoughtfully architected, obscenely fast, thoroughly enjoyable web services for all", see also [F# web programming](http://fsharp.org/webstacks/index.html)

#### ZeroMQ

* F# ZeroMQ bindings](http://zeromq.github.io/fszmq)  An F#-specific binding for the [ZeroMQ](http://www.zeromq.org) (Zero Message Queue) library.

* [ZeroMQ](http://www.zeromq.org/bindings:clr) - A more general .NET binding for ZeroMQ.

#### MPI

* [MPI .NET](http://osl.iu.edu/research/mpi.net/) - A C# implementation of the popular [Message Passing Interface (MPI) protocol](http://en.wikipedia.org/wiki/Message_Passing_Interface).  

* [MS-MPI](http://msdn.microsoft.com/en-us/library/bb524831.aspx) - Microsoft's implementation of the MPI protocol, available on some versions of Windows Server.

#### Ractor.CLR

![logo](https://raw.githubusercontent.com/buybackoff/Ractor.CLR/master/docs/files/img/logo32.png)&nbsp;[Ractor.CLR](https://github.com/buybackoff/Ractor.CLR)  is a Redis-based distributed actors system.

## Big Data Programming and NoSQL Databases

F# can be used with many scalable data-storage systems. Some are accessible via the Cloud SDKs outlined above.
Some further resources for specific systems are:

#### Hadoop

[Hadoop](http://hadoop.apache.org/) supports data-intensive distributed applications running on large 
clusters of commodity hardware. Hadoop derives from Google's MapReduce and Google File System papers.

 * [How to use Hadoop on Azure](http://www.windowsazure.com/en-us/develop/net/how-to-guides/hadoop/)

 * [Hadoop Streaming and F# MapReduce](http://blogs.msdn.com/b/carlnol/archive/2011/12/16/hadoop-streaming-and-f-mapreduce.aspx)

 * [hadoop-sharp](http://code.google.com/p/hadoop-sharp/) - CLR (.NET/Mono) interface for Hadoop 

 * [HadoopFs](https://github.com/isaacabraham/HadoopFs) - A lightweight F# implementation of the Hadoop Streaming API

 * [Microsoft .NET SDK For Hadoop](https://hadoopsdk.codeplex.com/) - Includes LINQ to Hive and other resources


#### Riak

[Riak](http://en.wikipedia.org/wiki/Riak) is a NoSQL database implementing the principles from Amazon's Dynamo paper:

 * [Exploring Riak with F#](http://jyliao.blogspot.co.uk/2013/04/exploring-riak-with-f.html) Explores the use of Riak from F# (Part I)

 * [Exploring Riak with F# and CorrugatedIron](http://jyliao.blogspot.co.uk/2013/04/exploring-riak-with-f-and-corrugatediron.html) Explores the use of Riak from F# (Part II)

 * [Using Riak MapReduce with F#](http://jyliao.blogspot.com/2013/06/riak-mapreduce-with-f.html) Explores the use Riak from F# (Part III)

 * [Riak CAP Tuning and F#](http://jyliao.blogspot.co.uk/2013/06/riak-cap-tuning-and-f.html)

#### Cassandra

[Cassandra](http://cassandra.apache.org/) is a distributed database management system designed 
to handle large amounts of data across many commodity servers, providing high availability with 
no single point of failure. 

 * [Aquiles](http://aquiles.codeplex.com/) - A .NET Client for Apache Cassandra version 0.6.X or above using Thrift API. 

 * [Cassandraemon](http://cassandraemon.codeplex.com/) - A LINQ Provider for Apache Cassandra

 * [cassandra-sharp](http://code.google.com/p/cassandra-sharp/) - A high performance .NET driver for Apache Cassandra

 * [FluentCassandra](https://github.com/managedfusion/fluentcassandra) - A .NET library for accessing Apache Cassandra

#### RavenDB

[RavenDB](http://ravendb.net/) is a scalable document-oriented database.

 * [F# Client API](http://ravendb.net/docs/client-api/fsharp) - The F# client API is a thin wrapper around the standard RavenDB client API, that provides a small set of combinators and a computation builder that hides the complexity of dealing with Linq expressions from F#. This documentation assumes some familiarity with the basics of RavenDB. 

#### MongoDB

[MongoDB](http://www.mongodb.org/) is a cross-platform document-oriented NoSQL database system.

 * [Mongo DB](http://www.mongodb.org/display/DOCS/CSharp+Language+Center) - MongoDB bindings for .NET

 * [Enhancing the F# developer experience with MongoDB](http://blog.mongodb.org/post/59584347005/enhancing-the-f-developer-experience-with-mongodb) - Extra options for the F# developer using MongoDB

#### Neo4j

[Neo4j](http://www.neo4j.org/) is an embedded, disk-based, fully transactional persistence engine that 
stores data structured in graphs rather than in tables.

 * [Neo4jClient](http://hg.readify.net/neo4jclient/wiki/Home) - Neo4j bindings for .NET

 * [Using Neo4j Graph DB With F#](http://sergeytihon.wordpress.com/2013/03/27/using-neo4j-graph-db-with-f/) - Introduction to using Neo4j with F#

 * [Using Neo4j with F# – Cypher 2.0](http://geekswithblogs.net/cskardon/archive/2013/11/27/using-neo4j-with-f-ndash-cypher-2.0.aspx)


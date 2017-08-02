---
layout: default
title: Guide - Cloud Programming | The F# Software Foundation
headline: Guide - Cloud Data, Compute and Messaging with F#
redirect_from: "/cloud/index.html"
---

Cloud computing relies on leveraging multiple integrated services.  Using multiple services required a unique set 
of technologies and capabilities, and F# excels in this domain.  With the recent rise of cloud solutions, it is becoming increasingly easy to deploy multiple services "in the cloud", expanding what is possible both by storing large amounts of data and running heavy computations distributed across clusters of machines.  

The combination of built in support for asynchronous workflows, data processing capabilities, computation expressions, 
extensible syntax, composability, expressiveness for numeric code and more make F# uniquely suited to develop 
scalable cloud solutions efficiently. 

This guide is an overview of the packages and tools for scalable compute, messaging, storage, and data processing with F#, 
particularly for taking advantage of cloud-computing resources. 

For cloud-hosted web programming and services, refer to the [Web Programming Guide](/guides/web/).

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>This guide includes resources related to cloud programming with F#. To contribute to this guide, log on to GitHub, <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/cloud/index.md">edit this page</a> and send a pull request.</p>
    <hr />
    <p>Note that the resources listed below are provided only for educational purposes related to the F# programming language. The F# Software Foundation does not endorse or recommend any commercial products, processes, or services. Therefore, mention of commercial products, processes, or services should not be construed as an endorsement or recommendation.</p>
</div>              

## Resources for Cloud Programming

* auto-gen TOC:
{:toc}


### Cloud Platforms


#### [Microsoft Azure](https://docs.microsoft.com/en-us/dotnet/articles/fsharp/using-fsharp-on-azure/)

[Microsoft Azure](https://azure.microsoft.com/) provides access to  Microsoft's worldwide datacenters through services including 
virtual machines, geo-redundant storage, database clusters, website deployment and other services.  

 * [Using F# on Azure](https://docs.microsoft.com/en-us/dotnet/articles/fsharp/using-fsharp-on-azure/) - Microsoft's comprehensive guide to using F# on Azure.
 
 * [F# and Azure Functions](https://azure.microsoft.com/en-us/documentation/articles/functions-reference-fsharp/) - Developer reference for using F# with Azure Functions.
 
 * [Building Web, Cloud, and Mobile Solutions with F#](http://www.amazon.com/Building-Cloud-Mobile-Solutions-ebook/dp/B00AANFL60) - Book including details on Azure programming with F#

 * [FSharp.Azure.Storage](https://github.com/daniel-chambers/FSharp.Azure.Storage) - FSharp.Azure provides an idiomatic F# API to query and modify data in Azure table storage using immutable F# record types. 
 
 * [F# Azure Storage Type Provider](https://github.com/isaacabraham/AzureStorageTypeProvider) - Provides strongly-typed access to Blobs and Tables with automatic schema generation of table schema based off EDM metadata.

 * [Running a pure F# Web API on Azure Web Sites](http://blog.ploeh.dk/2013/08/26/running-a-pure-f-web-api-on-azure-web-sites/)

#### [Amazon Web Services](http://aws.amazon.com)

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

 * [FSharp.AWS.DynamoDB](https://github.com/fsprojects/FSharp.AWS.DynamoDB#fsharpawsdynamodb) - an F# wrapper over the standard Amazon.DynamoDB library which allows you to represent table items using F# records and perform updates, queries and scans using F# quotation expressions
 
 * [F# Template for AWS Lambda](https://github.com/lukemerrett/FSharp-Template-for-Aws-Lambda) - a .Net Core 1.0 project & guide for publishing to AWS Lambda.  Lambda doesn't officially support F#, however the recent support for .Net Core allows us to run compiled F# assemblies

### Containers

#### Docker

[Docker](https://www.docker.io/) automates the deployment of applications inside [software containers](http://en.wikipedia.org/wiki/Operating_system%E2%80%93level_virtualization), by providing an additional layer of abstraction and automation of operating system–level virtualization on Linux.

F# is available by default in [the Docker official images for Mono](https://github.com/docker-library/official-images/blob/master/library/mono).  There is also an [official Docker image for F#](https://hub.docker.com/r/fsharp/), [source](https://github.com/fsprojects/docker-fsharp).

### Scalable Distributed Programming and Messaging

Distributed compute problems require a wide range of communication capabilities, ranging
from simple command line argument passing to heavily optimized, low-latency interprocess
communications. This section lists a wide range of communication libraries available to F#.

#### FSharp.CloudAgent and F# Mailbox Processor

The [F# Mailbox Processor](http://blogs.msdn.com/b/dsyme/archive/2010/02/15/async-and-parallel-design-patterns-in-f-part-3-agents.aspx) provides an Agent pattern for inter-thread communication directly within the core F# libraries.

[FSharp.CloudAgent](http://fsprojects.github.io/FSharp.CloudAgent) is a simple-to-use framework that allows the easy creation of distributable pools of workers or agents using F#'s native MailboxProcessor agent framework, using Azure Service Bus to provide a cheap and reliable message bus.

#### Akka.NET

The [Akka.NET](http://akkadotnet.github.io/) framework is an open source toolkit and runtime for building highly concurrent, distributed, and fault-tolerant event-driven applications on .NET and Mono.  It is used in production systems by its own contributors.

 * [General information](http://akkadotnet.github.io/)

 * [F#-specific API](http://akkadotnet.github.io/wiki/FSharp%20API)

#### MBrace

The [MBrace](http://mbrace.io/) framework is an open-source programming model and distributed runtime that enables scalable, fault-tolerant computation and data processing for the .NET/mono frameworks.

 * [Programming model](http://mbrace.io/programming-model.html)

 * [Microsoft Azure support](http://mbrace.io/azure-tutorial.html)

#### Orleans

The [Orleans](http://research.microsoft.com/en-us/projects/orleans/) framework provides a straightforward approach to building distributed high-scale computing applications, without the need to learn and apply complex concurrency or other scaling patterns. It was designed for use in the cloud, and has been used extensively in Microsoft Azure.  A simple ['Hello World' F# sample](https://github.com/dotnet/orleans/blob/master/Samples/FSharpHelloWorld/Grains/Grain1.fs) also available.

#### Kafka

* [Kafunk](https://jet.github.io/kafunk/) - An F# Kafka client.

* [anaerobic](https://github.com/anaerobic/fsharp-kafka-simple) - A simple implementation of a Kafka producer and consumer in F#.

#### ZeroMQ

* [F# ZeroMQ bindings](http://zeromq.github.io/fszmq)  An F#-specific binding for the [ZeroMQ](http://www.zeromq.org) (Zero Message Queue) library.

* [ZeroMQ](http://www.zeromq.org/bindings:clr) - A more general .NET binding for ZeroMQ.

#### MPI

* [MPI .NET](http://osl.iu.edu/research/mpi.net/) - A C# implementation of the popular [Message Passing Interface (MPI) protocol](http://en.wikipedia.org/wiki/Message_Passing_Interface).  

* [MS-MPI](http://msdn.microsoft.com/en-us/library/bb524831.aspx) - Microsoft's implementation of the MPI protocol, available on some versions of Windows Server.

#### Ractor.CLR

[Ractor.CLR](https://github.com/buybackoff/Ractor.CLR) is a Redis-based distributed actors system.

### Scalable Data Programming and NoSQL Databases

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

#### Storm

[Storm](http://storm.apache.org/) is platform for realtime analytics, online machine learning, continuous computation, distributed RPC, ETL, and more. Capable of running on the same infrastructure as Hadoop clusters, it is scalable, fault-tolerant, guarantees your data will be processed, and is easy to set up and operate. 

 * [FsStorm](http://fsstorm.github.io/FsStorm) - F# library for implementation of Apache Storm components and definition of topologies in F# DSL, with fine-grained access to multilang via Json AST.

 * [FsShelter](https://prolucid.github.io/FsShelter) - reimagined FsStorm that favours static typing, simplicity and modularity.

 * [Hosted Storm on Azure HDInsight](https://azure.microsoft.com/en-us/documentation/articles/hdinsight-storm-overview/) - Storm as a service on Azure HDInsight.

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


---
layout: default
title: Guide - Cloud Programming | fsharp.org
headline: Guide - Cloud Programming with F#
redirect_from: "/cloud/index.html"
---

Cloud computing relies on leveraging multiple integrated services.  Using multiple services required a unique set
of technologies and capabilities, and F# excels in this domain.  With the recent rise of cloud solutions, it is becoming increasingly easy to deploy multiple services "in the cloud", expanding what is possible both by storing large amounts of data and running heavy computations distributed across clusters of machines.
The combination of built in support for asynchronous workflows, data processing capabilities, computation expressions,
extensible syntax, composability, expressiveness for numeric code and more make F# uniquely suited to develop
scalable cloud solutions efficiently.

This guide is an overview of the packages and tools for scalable compute, messaging, storage, and data processing with F#,
particularly for taking advantage of cloud-computing resources.

For cloud-hosted web programming and services, refer to the [Web Programming Guide](../web/).

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial">
    <p>To contribute to this guide <a href="https://github.com/fsharp/fsharp.org/edit/main/guides/cloud/index.md">edit this page</a>. These resources are for educational purposes. </p>
</div>

* auto-gen TOC:
{:toc}

### Integrated Stacks

#### SAFE Stack

{: #safe-stack  .anchor }

![logo](../../images/thumbs/safestack.png)&nbsp;[SAFE Stack](https://safe-stack.github.io/) is an end-to-end, functional-first stack for cloud-ready web development that
emphasizes type-safe programming. It is an application development stack that brings several technologies together into a single,
coherent stack for type-safe, flexible, web-enabled applications that can be written almost entirely in F#.

* [Getting Started](https://safe-stack.github.io/docs/quickstart/)
* [Docs](https://safe-stack.github.io/docs/intro/)
* [Dojo](https://github.com/CompositionalIT/SAFE-Dojo/)
* [Support](https://safe-stack.github.io/docs/support/)

### Cloud Platforms

#### [Microsoft Azure](https://docs.microsoft.com/dotnet/articles/fsharp/using-fsharp-on-azure/)

[Microsoft Azure](https://azure.microsoft.com/) provides access to  Microsoft's worldwide datacenters through services including
virtual machines, geo-redundant storage, database clusters, website deployment and other services.

* [Using F# on Azure](https://docs.microsoft.com/dotnet/articles/fsharp/using-fsharp-on-azure/) - Microsoft's comprehensive guide to using F# on Azure.

#### [Amazon Web Services](http://aws.amazon.com)

Amazon Web Services (AWS) provide a large array of on-demand and managed computing and
hosting services. Amazon offers a .NET SDK for managing the AWS services,
[described here](http://aws.amazon.com/sdkfornet/). This SDK provides facilities for managing
storage, compute instances, and other Amazon services.
Some additional resources for using F# and .NET on Amazon's AWS service:

* [FSharp.AWS.DynamoDB](https://github.com/fsprojects/FSharp.AWS.DynamoDB#fsharpawsdynamodb) - an F# wrapper over the standard Amazon.DynamoDB library which allows you to represent table items using F# records and perform updates, queries and scans using F# quotation expressions

### Scalable Data Programming

F# can be used with many scalable data-storage systems. Some are accessible via the Cloud SDKs outlined above.

#### Apache Spark

[Apache Spark™](https://dotnet.microsoft.com/apps/data/spark) is a free, open-source, and cross-platform analytics engine for large-scale data processing.

* F# samples are included in the [GitHub Repo](https://github.com/dotnet/spark#samples)

* [Getting Started with Data Analytics & Machine Learning in F#](https://www.youtube.com/watch?v=ciBtKRZMIaU)

### Scalable Distributed Programming and Messaging

Distributed compute problems require a wide range of communication capabilities, ranging
from simple command line argument passing to heavily optimized, low-latency interprocess
communications. This section lists a wide range of communication libraries available to F#.

#### Akka.NET

The [Akka.NET](https://getakka.net/) framework is an open source toolkit and runtime for building highly concurrent, distributed, and fault-tolerant event-driven applications.  It is used in production systems by its own contributors.

#### Orleans

The [Orleans](https://dotnet.github.io/orleans/) framework provides a straightforward approach to building distributed high-scale computing applications, without the need to learn and apply complex concurrency or other scaling patterns. It was designed for use in the cloud, and has been used extensively in Microsoft Azure.

#### Kafka

* [FsKafka](https://github.com/jet/FsKafka) - An F# Kafka client.

* [anaerobic](https://github.com/anaerobic/fsharp-kafka-simple) - A simple implementation of a Kafka producer and consumer in F#.

#### ZeroMQ

* [F# ZeroMQ bindings](https://zeromq.org/languages/fsharp)  An F#-specific binding for the [ZeroMQ](http://www.zeromq.org) (Zero Message Queue) library.

* [ZeroMQ](https://zeromq.org/languages/csharp/) - A more general .NET binding for ZeroMQ.

#### MPI

* [MPI .NET](https://github.com/mpidotnet/MPI.NET/) - A C# implementation of the popular [Message Passing Interface (MPI) protocol](http://en.wikipedia.org/wiki/Message_Passing_Interface).

* [MS-MPI](http://msdn.microsoft.com/library/bb524831.aspx) - Microsoft's implementation of the MPI protocol, available on some versions of Windows Server.

### Containers

#### Docker

[Docker](https://www.docker.io/) automates the deployment of applications inside [software containers](http://en.wikipedia.org/wiki/Operating_system%E2%80%93level_virtualization), by providing an additional layer of abstraction and automation of operating system–level virtualization on Linux.

F# is available in the [official Docker images for the .NET SDK](https://hub.docker.com/_/microsoft-dotnet-sdk).

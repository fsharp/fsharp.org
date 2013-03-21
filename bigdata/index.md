---
layout: page
title: Big Data Stacks | The F# Software Foundation
headline: Data, Compute, Cloud, and Messaging Stacks for F#
---

This page provides an overview of the packages and tools available for large-scale data processing,
particularly taking advantage of "cloud" computing resources, from F#.


Data, Compute, Cloud, and Messaging Stacks
------------------------------------------
Plummeting costs of storage and compute power have contributed to an exponential growth 
in the volumes and variety of data available, and the desire to extract as much meaningful 
information as possible. Even basic computers now have multi-core processes and 
substantial data processing capabilities if utilized efficiently and the rise of utility 
(“cloud”) computing makes large-scale compute clusters available to nearly everyone.

Data processing commonly follows a functional (as opposed to an imperative) model 
since the original data is not modified in place, but rather transformed step-by-step to 
produce the desired result. As a result, F#’s functional-first design makes expressing 
such data processing pipelines feel very natural.

Further, “Type Providers”, introduced in F# 3.0, make F# arguably the best language 
available for working with metadata. This feature, discussed in more detail below, provides 
a powerful solution for accessing both regular and irregular data from traditional databases 
as well as standard text formats like JSON, and XML.

Large, distributed calculations also tend to be a very good fit for functional languages in 
general and particularly F# with the wide variety of libraries and services available. The 
[F# Maths](../math/index.html) page surveys many of the numerics-specific packages available. The language itself 
also incorporates strong support for concurrent and asynchronous programming necessary to 
take advantage of multicore and multiprocessor compute resources. 

The rest of this page surveys the related services and software packages available for taking 
advantage of utility computing services, database access, data processing, and distributed 
computing / messaging.

Services
--------
The section describes several of the most common utility computing services and software 
stacks available. Each of the services provides a variety of on-demand compute and storage 
capabilities.

### [Windows Azure](http://www.windowsazure.com/en-us/home/features/overview/)

Windows Azure is Microsoft’s entry into the cloud services market and provides access to 
Microsoft’s datacenters around the world. Windows Azure provides a range of services from 
low-level capabilities including Window and Linux virtual machines and geo-redundant storage 
to higher-level services including database clusters and website deployment. The website 
linked in the title provides an overview of all of the services available. 
[This page](http://www.windowsazure.com/en-us/develop/net/fundamentals/compute/) provides 
considerable additional detail on the structure of Azure applications.

Below are some additional resources on using Windows Azure from F# and .NET in general:
 * [Introduction to Windows Azure](http://www.windowsazure.com/en-us/develop/net/fundamentals/intro-to-windows-azure/)
 * [.NET and RESTful management API reference](http://msdn.microsoft.com/en-us/library/windowsazure/ff800682.aspx)
 * [Publishing an F#/C# MVC Application to Windows Azure](http://msdn.microsoft.com/en-us/library/vstudio/jj865569.aspx) 
 * [Distributed Numerics on Azure with F#](http://blogs.msdn.com/b/cloudnumerics/archive/2012/01/16/cloud-numerics-example-distributed-numerics-on-azure-with-f.aspx)
 * [How to use Hadoop on Azure](http://www.windowsazure.com/en-us/develop/net/how-to-guides/hadoop/)


### [Amazon Web Services](http://aws.amazon.com)
Amazon Web Services (AWS) provide a large array of on-demand and managed computing and 
hosting services. AWS include on-demand and reserved virtual machine instances, 
a variety of storage options, a content delivery network (CDN), DNS capabilities, and many others. 
Amazon offers services from multiple data centers around the world.

Amazon offers a .NET SDK for managing the AWS services, 
[described here](http://aws.amazon.com/sdkfornet/). This SDK provides facilities for managing 
storage, compute instances, and other Amazon services.

Some additional resources for using F# and .NET on Amazon’s AWS service:
	[AWS Toolkit for Visual Studio](http://aws.amazon.com/visualstudio/)
	[Using F# and C# with Elastic MapReduce](http://atbrox.com/2011/02/07/an-example-of-using-f-and-c-netmono-with-amazons-elastic-mapreduce-hadoop/)

Distributed Communications
--------------------------

Distributed compute problem require a very wide range of communication capabilities, ranging
from simple command line argument passing to heavily optimized, low-latency interprocess
communications. This section lists a wide range of communication libraries available to F#.

 * [F# Mailbox Processor](http://blogs.msdn.com/b/dsyme/archive/2010/02/15/async-and-parallel-design-patterns-in-f-part-3-agents.aspx) -
Discusses the Agent pattern for inter-thread and inter-process communication using the F#
library's MailboxProcessor. 
 * [F# ZeroMQ bindings](https://github.com/pblasucci/fs-zmq) - An F#-specific binding
for the [ZeroMQ](http://www.zeromq.org) (Zero Message Queue) library.
 * [ZeroMQ](http://www.zeromq.org/bindings:clr) - A more general .NET binding for ZeroMQ.
 * [MPI .NET](http://osl.iu.edu/research/mpi.net/) - A C# implementation of the popular
 [Message Passing Interface (MPI) protocol](http://en.wikipedia.org/wiki/Message_Passing_Interface).  
 * [MS-MPI](http://msdn.microsoft.com/en-us/library/bb524831.aspx) - Microsoft's
implementation of the MPI protocol, available on some versions of Windows Server.
 * [Windows Communication Foundation](http://msdn.microsoft.com/en-us/library/dd456779.aspx) -
A framework from Microsoft for building service-oriented applications.



Database interfaces
-------------------

Cassandra:
 * [Aquiles](http://aquiles.codeplex.com/)
 * [Cassandraemon](http://cassandraemon.codeplex.com/)
 * [cassandra-sharp](http://code.google.com/p/cassandra-sharp/)
 * [FluentCassandra](https://github.com/managedfusion/fluentcassandra)

Mongo DB (http://www.mongodb.org/display/DOCS/CSharp+Language+Center)


Accessing SQL Databases using F#
Data Processing
[Parallel LINQ (PLINQ)](http://msdn.microsoft.com/en-us/library/dd460688.aspx)
[Microsoft .NET SDK for Hadoop](http://hadoopsdk.codeplex.com/)
[F# Data Mining](http://fdatamining.blogspot.com/2010/05/why-f-is-language-for-data-mining.html)
[Parallel Programming in F# III: Aggregating Data:](http://tomasp.net/blog/fsharp-parallel-aggregate.aspx)

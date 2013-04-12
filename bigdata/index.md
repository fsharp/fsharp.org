---
layout: page
title: Data Science | The F# Software Foundation
headline: Data Science with F#
---

Data science brings techinques such as statistical analysis, machine learning and programming to 
real-world data sources to bring understanding and insight to data-oriented problem domains.

F# is an excellent solution for programmatic data science as it combines efficient execution
with powerful libraries and scalable data integration. The Type Provider feature of 
F# 3.0 brings simplicity to accessing both regular and irregular data, including traditional databases,
web-scale data and standard structured text formats like JSON, and XML.

[Try F#](http://tryfsharp.org) has sections specific to data science. 
Further resources related to different aspects of data science are below. 

### Math and Statistics Programming

See the [Maths and Statistics](/math) section for details of numerics and statistics packages available for F#.

### Big Data and Big Compute

See the [Cloud Programming](/cloud) section for details of scalable data, compute and messaging frameworks and clients for F#.

### Web Programming

Data Science often invoves presenting results through the web. See the [Web Programming](/webstacks) section 
for details of web programming with F#.

### Data Access and Integration

F# has a wide range of useful data import and access techniques available. Many F# books
and introductions cover some of these. Some specific frameworks dedicated to simplifying data access are:

 * [FSharp.Data](http://tpetricek.github.io/FSharp.Data/) - The F# Data library (FSharp.Data.dll) implements everything you need to access data in your F# applications and scripts. It implements F# type providers for working with structured file formats (CSV, JSON and XML) and for accessing the WorldBank and Freebase data. It also includes helpers for parsing JSON files and for sending HTTP requests.
  
### Machine Learning 

Several F#/.NET Machine Learning packages are available be [searching on nuget.org](http://nuget.org/packages?q=machine+learning), for example:

 * [Accord.MachineLearning](http://nuget.org/packages/Accord.MachineLearning/) - Contains Support Vector Machines, Decision Trees, Naive Bayesian models, K-means, Gaussian Mixture models and general algorithms such as Ransac, Cross-validation and Grid-Search for machine-learning applications. This package is part of the Accord.NET Framework.
 * [Encog Machine Learning Framework](http://nuget.org/packages/encog-dotnet-core/) - An advanced neural network and machine learning framework. Encog 
   contains classes to create a wide variety of networks, as well as support classes to normalize and process data for these neural networks. Encog trains using multithreaded resilient propagation. Encog can also make use of a GPU to further speed processing time. A GUI based workbench is also provided to help model and train neural networks. 
 * [Numl](http://nuget.org/packages/numl/) - A machine learning library intended to ease the use of using standard modeling techniques for both prediction and clustering

Some specific introductions to implementing different machine learning with F# are as follows:

 * [Support Vector Machines in F#](http://fdatamining.blogspot.co.uk/2011/02/support-vector-machines-svms-in-f-using.html)
 * [Setting up F# Interactive for Machine Learning with Large Datasets](http://richardminerich.com/2013/03/setting-up-fsharp-interactive-for-machine-learning-with-large-datasets/)
 * [Simplify data with SVD and Math.NET in F#](http://clear-lines.com/blog/post/Simplify-data-with-SVD-and-MathNET-in-FSharp.aspx)
 * [K-Means clustering in F#](http://clear-lines.com/blog/post/K-Means-Clustering-in-FSharp.aspx)
 * [Kaggle/StackOverflow contest field notes](http://clear-lines.com/blog/post/Kaggle-StackOverflow-field-notes-part-1.aspx)
 * [Nearest Neighbor Classification, Part 1](http://clear-lines.com/blog/post/Nearest-Neighbor-Classification-part-1.aspx)
 * [Nearest Neighbor Classification, Part 2](http://clear-lines.com/blog/post/Nearest-Neighbor-Classification-Part-2.aspx)
 * [Decision Tree Classification in F#](http://clear-lines.com/blog/post/Decision-Tree-classification.aspx)
 * [Naïve Bayes Classification](http://clear-lines.com/blog/post/Naive-Bayes-Classification.aspx)
 * [Logistic Regression in F#](http://clear-lines.com/blog/post/Logistic-Regression.aspx)
 * [Support Vector Machine in F#: getting there](http://clear-lines.com/blog/post/Support-Vector-Machine-in-FSharp.aspx)
 * [AdaBoost in F#](http://clear-lines.com/blog/post/AdaBoost-classifier-in-FSharp.aspx)

### R, MATLAB, Mathematics and Python Integration

F# can integrate with systems such as R, MATLAB, Mathematica and Python. Some specific resources are:

 * [R Type Provider for F#](https://github.com/BlueMountainCapital/FSharpRProvider) - An F# type provider for high-fidelity integration between F# and R
 * [Python for .NET](http://pythonnet.sourceforge.net/readme.html) - Allows Python to be integrated into F# and C# programs
 * [Integrating MATLAB with C#](http://www.mathworks.com/matlabcentral/fileexchange/12987) - shows various techniques to call MATLAB from C# and other .NET languages
        
Many other resources are available for integrating F#, C# and .NET with these systems. If a resource specific
to F# can't be found, then search for C# instead and adjust the technique appropriately.
          
          

### Other links

 * [Parallel LINQ (PLINQ)](http://msdn.microsoft.com/en-us/library/dd460688.aspx)
 * [F# Data Mining](http://fdatamining.blogspot.com/2010/05/why-f-is-language-for-data-mining.html)
 * [Parallel Programming in F#: Aggregating Data:](http://tomasp.net/blog/fsharp-parallel-aggregate.aspx)

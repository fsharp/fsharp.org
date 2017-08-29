---
layout: default
title: Guide - Machine Learning | The F# Software Foundation
headline: Guide - Machine Learning with F#
redirect_from: "/machine-learning/index.html"
---

F# is well-suited to machine learning because of its efficient execution, succinct style,
data access capabilities and scalability. F# has been successfully used by some of the most advanced 
machine learning teams in the world, including several groups at Microsoft Research.

Other guides contain some material related to machine learning:

* [Math and Statistics](/guides/math-and-statistics/)
* [Data Science](/guides/data-science/)
* [Cloud Programming](/guides/cloud/)

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial"> 
    <p>This guide includes resources related to machine learning programming with F#. To contribute to this guide, log on to GitHub, <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/machine-learning/index.md">edit this page</a> and send a pull request.</p>
    <hr />
    <p>Note that the resources listed below are provided only for educational purposes related to the F# programming language. The F# Software Foundation does not endorse or recommend any commercial products, processes, or services. Therefore, mention of commercial products, processes, or services should not be construed as an endorsement or recommendation.</p>
</div>              


## Resources for Machine Learning

* auto-gen TOC:
{:toc}

### Tutorials and Introductions

Introductions to different machine learning algorithms with F#:

 * [FSML - A machine learning project in F#](https://github.com/rnorm/FSML)
 * [Gaussian process regression in F#](http://evelinag.com/blog/2014/09-15-introducing-ariadne/index.html)
 * [K-Means clustering in F#](http://clear-lines.com/blog/post/K-Means-Clustering-in-FSharp.aspx)
 * [Simplify data with SVD and Math.NET in F#](http://clear-lines.com/blog/post/Simplify-data-with-SVD-and-MathNET-in-FSharp.aspx)
 * [Recommendation Engine using Math.NET, SVD and F#](http://www.clear-lines.com/blog/post/Recommendation-Engine-with-SVD-and-MathNET-in-FSharp.aspx)
 * [Setting up F# Interactive for Machine Learning with Large Datasets](http://richardminerich.com/2013/03/setting-up-fsharp-interactive-for-machine-learning-with-large-datasets/)
 * [Random Forests in F# - first cut](http://www.clear-lines.com/blog/post/Random-Forest-classification-in-F-first-cut.aspx)
 * [Nearest Neighbor Classification, Part 1](http://clear-lines.com/blog/post/Nearest-Neighbor-Classification-part-1.aspx)
 * [Nearest Neighbor Classification, Part 2](http://clear-lines.com/blog/post/Nearest-Neighbor-Classification-Part-2.aspx)
 * [Decision Tree Classification in F#](http://clear-lines.com/blog/post/Decision-Tree-classification.aspx)
 * [Naïve Bayes Classification](http://clear-lines.com/blog/post/Naive-Bayes-Classification.aspx)
 * [Logistic Regression in F#](http://clear-lines.com/blog/post/Logistic-Regression.aspx)
 * [Support Vector Machine in F#: getting there](http://clear-lines.com/blog/post/Support-Vector-Machine-in-FSharp.aspx)
 * [AdaBoost in F#](http://clear-lines.com/blog/post/AdaBoost-classifier-in-FSharp.aspx)
 * [Support Vector Machines in F#](http://fdatamining.blogspot.co.uk/2011/02/support-vector-machines-svms-in-f-using.html)
 * [Kaggle/StackOverflow contest field notes](http://clear-lines.com/blog/post/Kaggle-StackOverflow-field-notes-part-1.aspx)
 * [F# Data Mining](http://fdatamining.blogspot.com/2010/05/why-f-is-language-for-data-mining.html)
 * [Parallel Programming in F#: Aggregating Data:](http://tomasp.net/blog/fsharp-parallel-aggregate.aspx)
 * [Particle Swarm Optimization in F#](http://www.danielslater.net/2015/05/particle-swarm-optimization-in-f.html)

### Machine Learning Packages

Several F# machine learning packages are available. Some are accessed through F#'s interoperability mechanisms to R, Python and Java. .NET packages can be found by [searching on nuget.org](http://nuget.org/packages?q=machine+learning). For example:

 * [Accord.MachineLearning](http://nuget.org/packages/Accord.MachineLearning/) - Contains Support Vector Machines, Decision Trees, Naive Bayesian models, K-means, Gaussian Mixture models and general algorithms such as Ransac, Cross-validation and Grid-Search for machine-learning applications. This package is part of the Accord.NET Framework.
   See also [First steps with Accord.NET SVM in F#](http://www.clear-lines.com/blog/category/Machine-Learning.aspx)

 * [R Packages](http://bluemountaincapital.github.io/FSharpRProvider/) - All R packages can be accessed through the [RProvider for F#](http://bluemountaincapital.github.io/FSharpRProvider/).
   See, for example, [F# Neural Networks with the RProvider and Deedle](http://sergeytihon.wordpress.com/2013/11/18/f-neural-networks-with-rprovider-deedle/)

 * [Vulpes](https://github.com/SpiegelSoft/Vulpes) - A machine learning app using a deep belief network and connecting to the NVIDIA GPU unit using [Alea.cuBase](http://blog.quantalea.net/).

 * [Ariadne](http://evelinag.com/Ariadne/) - Library for fitting Gaussian process regression models.

 * [Encog Machine Learning Framework](http://nuget.org/packages/encog-dotnet-core/) - An advanced neural network and machine learning framework. Encog
   contains classes to create a wide variety of networks, as well as support classes to normalize and process data for these neural networks. Encog trains using multithreaded resilient propagation. Encog can also make use of a GPU to further speed processing time. A GUI based workbench is also provided to help model and train neural networks.
   See, for example, [ENCOG Neural Network XOR example in F#](http://relentlessdevelopment.wordpress.com/2013/11/14/hello-neurons-encog-neural-network-xor-example-in-f/)

 * [Numl](http://nuget.org/packages/numl/) - A machine learning library intended to ease the use of using standard modeling techniques for both prediction and clustering

 * [DiffSharp](http://diffsharp.github.io/DiffSharp/) - An automatic differentiation (AD) library for incorporating derivative calculations with minimal changes into existing code, providing exact and efficient gradients, Jacobians and Hessians for machine learning and optimization applications.

 * [Hype](http://hypelib.github.io/Hype/) - An experimental deep learning library, where you can perform optimization on compositional machine learning systems of many components, even when such components themselves internally perform optimization. Underlying computations are run by a BLAS/LAPACK backend (OpenBLAS by default).


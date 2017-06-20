---
layout: default
title: F# Publications | The F# Software Foundation
headline: Publications related to F#
---

F# is about clarity of thinking and expression - "computational thinking made manifest" - and is loved by academics and researchers
for bringing clear, concise problem solving techniques developed in academia into practice. 
F# is both based on academic research and acts as an inspiration for thousands of 
students and researchers worldwide. Many standard F# features (including _active patterns_ and _asynchronous workflows_) 
have been described in academic literature, and many
research projects build on top of F#. 

<a href="http://blogs.msdn.com/b/dsyme/archive/2012/07/11/how-to-reference-for-f-in-a-research-paper.aspx">How to reference F# in a research paper</a>.

To add a paper to this list, log on to GitHub, [edit this page](https://github.com/fsharp/fsfoundation/edit/gh-pages/teaching/research.md) and submit a pull request.


 * **[Information-rich programming](#information-rich-programming)** - publications related to F# type providers, a novel mechanism
     that integrates large-scale data into statically typed function programming language.
 
 * **[Asynchronous, Concurrent and Reactive programming](#asynchronous-concurrent-and-reactive-programming)** - publications
   about F# _asynchronous workflows_, the asynchronous programming model used in F#,
   event-based programming and "joinads", a research extension of F# _computation expression_ syntax
   for concurrent, reactive and parallel programming patterns.

 * **[Parallel, Distributed and Cloud programming](#distributed-and-parallel-programming)** - publications
   related to parallel and distributed programming using F#.

 * **[Functional programming](#functional-programming)** - publications
    about core F# language features including _active patterns_ and intialization of 
    mutually recursive values.

 * **[DSLs and Meta-programming](#dsls-and-meta-programming)** - publications related to DSL and 
   meta-programming in F#.

 * **[Units of Measure](#units-of-measure)** - publications related to the Units of Measure feature of F#.

 * **[Web programming](#web-programming)** - publications related to web programming with F#.
  
 * **[Security and Verification Research](#security-and-verification-research)** - variations of F# and their use in security and verification research.

 * **[Applications](#applications)** - publications and academic presentations describing applications of F#.


--------------


## Information-rich programming
{: #information-rich-programming .anchor }

### [Types from data: Making structured data first-class citizens in F#](http://conf.researchr.org/event/pldi-2016/pldi-2016-papers-types-from-data-making-structured-data-first-class-citizens-in-f-)

Tomas Petricek, Don Syme, Gustavo Guerra  
[Distinguished Paper Award, _PLDI 2016_](http://conf.researchr.org/home/pldi-2016)

Most modern applications interact with external services and access data in structured formats such as XML, JSON and CSV. Static type systems do not understand such formats, often making data access more cumbersome. Should we give up and leave the messy world of external data to dynamic typing and runtime checks? Of course, not!

In this paper, we integrate external structured data into F# programming. As most real-world data does not come with an explicit schema, we develop a shape inference algorithm that infers a shape from representative sample documents and transforms the shape into F# types using type providers. We present a formalization and a relative type soundness theorem for a simplified version of this process.

Our library significantly reduces the amount of data access code and it provides additional safety guarantees when contrasted with the widely used weakly typed techniques.


### [F# 3.0 - Strongly-Typed Language Support for Internet-Scale Information Sources](http://research.microsoft.com/apps/pubs/default.aspx?id=173076)

Don Syme et al.  
_MSR Technical Report_

A growing trend in both the theory and practice of programming is the interaction between 
programming and rich information spaces. From databases to web services to the semantic 
web to cloud-based data, the need to integrate programming with heterogeneous, connected, 
richly structured, streaming and evolving information sources is ever-increasing. 
Most modern applications incorporate one or more external information sources as integral components. 

Providing strongly typed access to these sources is a key consideration for strongly-typed 
programming languages, to insure low impedance mismatch in information access. At this scale, 
information integration strategies based on library design and code generation are manual, 
clumsy, and do not handle the internet-scale information sources now encountered in 
enterprise, web and cloud environments. 

In this report we describe the design and implementation 
of the type provider mechanism in F# 3.0 and its applications to typed programming 
with web ontologies, web-services, systems management information, database mappings, 
data markets, content management systems, economic data and hosted scripting. Type soundness 
becomes relative to the soundness of the type providers and the schema change in 
information sources, but the role of types in information-rich programming tasks is 
massively expanded, especially through tooling that benefits from rich types in explorative programming.

### [Themes in Information-Rich Functional Programming for Internet-Scale Data Sources](http://tomasp.net/academic/papers/inforich/)

Don Syme et al.  
_DDFP 2013_

The F# language includes a feature called F# 3.0 Type Providers to support the integration of internet-scale information sources into a strongly typed functional-first programming environment. In this position paper we describe the key themes in information-rich functional programming that we have observed during this work. Our contribution is to document these themes and highlight future challenges and opportunities, in the context of a recently released, practical, open-source system for information-rich functional programming. We believe that this area is rich in excellent opportunities for future language and tooling research, information-space integration and schematization techniques.





## Asynchronous, Concurrent and Reactive programming
{: #asynchronous-concurrent-and-reactive-programming .anchor }

### [The F# Asynchronous Programming Model](http://blogs.msdn.com/b/dsyme/archive/2010/10/21/the-f-asynchronous-programming-model-padl-2010-pre-publication-draft.aspx)

Don Syme, Tomas Petricek, Dmitry Lomov  
_Proceedings of PADL 2011_

We describe the asynchronous programming model in F#, and its applications to reactive, 
parallel and concurrent programming. The key feature combines a core language with a 
non-blocking modality to author lightweight asynchronous tasks, where the modality has 
control flow constructs that are syntactically a superset of the core language and are given
an asynchronous semantic interpretation. This allows smooth transitions between 
synchronous and asynchronous code and eliminates callback-style treatments of inversion 
of control, without disturbing the foundation of CPU-intensive programming that allows F# to 
interoperate smoothly and compile efficiently to .NET and native code.  

### [Collecting Hollywood’s Garbage: Avoiding Space-Leaks in Composite Events](http://tomasp.net/academic/papers/hollywood/)

Tomas Petricek, Don Syme  
_Proceedings of ISMM 2010_

The reactive programming model is largely different to what we’re used to as we don’t 
have full control over the application’s control flow. If we mix the declarative and 
imperative programming style, which is usual in the ML family of languages, the situation is 
even more complex. It becomes easy to introduce patterns where the usual garbage collector 
for objects cannot automatically dispose all components that we intuitively consider garbage. 

In this paper we discuss a duality between the definitions of garbage for objects and events. 
We combine them into a single one, to specify the notion of garbage for reactive programming 
model in a mixed functional/imperative language and we present a formal algorithm for 
collecting garbage in this environment. 

Building on top of the theoretical model, we implement a library for reactive programming 
that does not cause leaks when used in the mixed declarative/imperative model. The library 
allows us to safely combine both of the reactive programming patterns. As a result, we can 
take advantage of the clarity and simplicity of the declarative approach as well as the 
expressivity of the imperative model.


## Functional programming
{: #functional-programming .anchor }

### [Extensible pattern matching via a lightweight language extension](http://research.microsoft.com/pubs/79947/p29-syme.pdf)

Don Syme, Gregory Neverov, James Margetson
_Proceedings of ICFP 2007_

Pattern matching of algebraic data types (ADTs) is a standard feature in typed functional 
programming languages, but it is well known that it interacts poorly with abstraction. While 
several partial solutions to this problem have been proposed, few have been implemented or 
used. This paper describes an extension to the .NET language F# called active patterns, 
which supports pattern matching over abstract representations of generic heterogeneous data 
such as XML and term structures, including where these are represented via object models in 
other .NET languages. Our design is the first to incorporate both ad hoc pattern matching 
functions for partial decompositions and "views" for total decompositions, and yet remains 
a simple and lightweight extension. We give a description of the language extension along 
with numerous motivating examples. Finally we describe how this feature would interact with 
other reasonable and related language extensions: existential types quantified at data 
discrimination tags, GADTs, and monadic generalizations of pattern matching.

### [Initializing Mutually Referential Abstract Objects: The Value Recursion Challenge](http://research.microsoft.com/pubs/79951/valrec-final-ml-workshop.pdf)

Don Syme  
_Proceedings of ML Workshop 2006_

Mutual dependencies between objects arise frequently in programs, and programmers must 
typically solve this value recursion by manually filling "initialization holes" to help 
construct the corresponding object graphs, i.e. null values and/or explicitly mutable locations. 
This paper aims to augment ongoing theoretical work on value recursion with a description 
of a semi-safe mechanism for a generalized form of value recursion in an ML-like language, 
where initialization corresponds to a graph of lazy computations whose nodes are sequentially 
forced, requiring runtime checks for soundness during initialization in the style of Russo. 
Our primary contribution is to use the mechanism to develop compelling examples of how the 
absence of value recursion leads to real problems in the presence of abstraction boundaries, 
and give micro-examples that characterize how initialization graphs permit more programs to 
be expressed in the mutation-free fragment of ML. Finally we argue that in heterogeneous 
programming environments semi-safe variations on value-recursion may be appropriate for 
ML-like languages, because initialization effects from external libraries are difficult to 
characterize, document and control. 

### [Extending Monads with Pattern Matching](http://tomasp.net/academic/papers/docase/)

Tomas Petricek, Alan Mycroft and Don Syme  
_Proceedings of Haskell Symposium 2011_

Sequencing of effectful computations can be neatly captured using monads and elegantly 
written using `do` notation. In practice such monads often allow additional ways of 
composing computations, which have to be written explicitly using combinators. 

We identify joinads, an abstract notion of computation that is stronger than monads 
and captures many such ad-hoc extensions. In particular, joinads are monads with three 
additional operations: one of type `m a -> m b -> m (a, b)` captures various forms of 
parallel composition, one of type `m a -> m a -> m a` that is inspired by choice and one 
of type `m a -> m (m a)` that captures aliasing of computations. Algebraically, the first 
two operations form a near-semiring with commutative multiplication. 

We introduce `docase` notation that can be viewed as a monadic version of `case`. Joinad 
laws make it possible to prove various syntactic equivalences of programs written using 
`docase` that are analogous to equivalences about `case`. Examples of joinads that benefit 
from the notation include speculative parallelism, waiting for a combination of user 
interface events, but also encoding of validation rules using the intersection of parsers. 

### [Try Joinads Demonstrator](http://tryjoinads.org/)

Joinads is a general-purpose research extension of the F# computation expression syntax (also 
called _monadic syntax_) in F# and is mainly useful for concurrent, parallal and reactive 
programming. The extension adds a new piece of notation, written `match!` that can be 
used to compose computations using non-deterministic choice, parallel composition and aliasing.

The best way to experiment with Joinads is to visit the [TryJoinads.org](http://tryjoinads.org/)
web site, which contains a number of tutorials that can be tested in web browser capable
of running Silverlight (MacOS and Windows).


### [Evaluation strategies for monadic computations](http://tomasp.net/academic/papers/malias/)

Tomas Petricek  
_Proceedings of MSFP 2012_

Monads have become a powerful tool for structuring effectful computations in functional 
programming, because they make the order of effects explicit. When translating pure code to a 
monadic version, we need to specify evaluation order explicitly. This requires us to choose 
between _call-by-value_ or _call-by-name_ style. The two translations give programs with 
different semantics, structure and also different types.

In this paper, we translate pure code to monadic using an additional operation `malias` 
that abstracts out the evaluation strategy. The `malias` operation is based on _computational comonads_; 
we use a categorical framework to specify the laws that are required to hold about the operation.

We show two implementations of `malias` for any monad that give _call-by-value_ and 
_call-by-name_ semantics. Although we do not give _call-by-need_ semantics for any monad, we 
show how to turn any monad into an extended monad with _call-by-need_ semantics, which partly 
answers a standing open question. Moreover, using our unified translation, it is possible to 
change the evaluation strategy of functional code translated to the monadic form without 
changing its structure or types. 


### [Joinads: a retargetable control-flow construct for reactive, parallel and concurrent programming](http://tomasp.net/academic/papers/joinads/)

Tomas Petricek and Don Syme  
_Proceedings of PADL 2011_

Modern challenges led to a design of a wide range of programming models for reactive,
parallel and concurrent programming, but these are often difficult to encode in general 
purpose languages. We present an abstract type of computations called _joinads_ together 
with a syntactic language extension that aims to make it easier to use joinads in 
modern functional languages. 

Our extension generalizes pattern matching to work on abstract computations. It keeps a 
familiar syntax and semantics of pattern matching making it easy to reason about code, 
even in a non-standard programming model. We demonstrate our extension using three important 
programming models – a reactive model based on events; a concurrent model based on join 
calculus and a parallel model using futures. All three models are implemented as libraries 
that benefit from our syntactic extension. This makes them easier to use and also opens 
space for exploring new useful programming models. 


### [The F# Computation Expression Zoo](http://tomasp.net/academic/papers/computation-zoo/)

Tomas Petricek, Don Syme  
_Proceedings of PADL 2014_

Many computations can be structured using abstract computation types such as monoids, monad transformers or applicative functors. Functional programmers use those abstractions directly while main-stream languages often integrate concrete instances as language features - e.g. generators in Python or asynchronous computations in C# 5.0. The question is, is there a sweet spot between convenient, hardwired language features, and an inconvenient but flexible libraries?

F# computation expressions answer this question in the affirmative. Unlike the do notation in Haskell, computation expressions are not tied to a single kind of abstraction. They support a wide range of computations, depending on what operations are available. They also provide greater syntactic flexibility leading to a more intuitive syntax, without resorting to full macro-based meta-programming.

We show that computation expressions can structure well-known computations including monoidal list comprehensions, monadic parsers, applicative formlets and asynchronous sequences based on the list monad transformer. We also present typing rules for computation expressions that are capable of capturing all these applications.


## DSLs and Meta-programming
{: #dsls-and-meta-programming .anchor }

### [Leveraging .NET meta-programming components from F#: integrated queries and interoperable heterogeneous execution](http://dl.acm.org/citation.cfm?doid=1159876.1159884)

Don Syme  
_Proceedings of the 2006 workshop on ML_

Language-integrated meta-programming and extensible compilation have been recurring themes of 
programming languages since the invention of LISP. A recent real-world application of these 
techniques is the use of small meta-programs to specify database queries, as used in the  
LINQ extensions for .NET. It is important that .NET languages such as F# are able to leverage 
the functionality provided by LINQ and related components for heterogeneous execution, both 
for pragmatic reasons and as a first step toward applying more disciplined, formal approaches 
to these problems. This paper explores the use of a modest meta-programming extension to F# to 
access and leverage the functionality of LINQ and other components. We do this by demonstrating 
an implementation of language integrated SQL queries using the LINQ/SQLMetal libraries. We also 
sketch two other applications: the execution of data-parallel quoted F# programs on a GPU via the 
Accelerator libraries, and dynamic native-code compilation via LINQ.

### [The F# Computation Expression Zoo](http://tomasp.net/academic/papers/computation-zoo/)

Tomas Petricek and Don Syme
_In proceedings of PADL 2014_

Many computations can be structured using abstract computation types such as monoids, monad 
transformers or applicative functors. Functional programmers use those abstractions directly while 
main-stream languages often integrate concrete instances as language features - e.g. generators in 
Python or asynchronous computations in C# 5.0. The question is, is there a sweet spot between 
convenient, hardwired language features, and an inconvenient but flexible libraries?

F# computation expressions answer this question in the affirmative. Unlike the do notation in Haskell, 
computation expressions are not tied to a single kind of abstraction. They support a wide range of 
computations, depending on what operations are available. They also provide greater syntactic 
flexibility leading to a more intuitive syntax, without resorting to full macro-based meta-programming.

We show that computation expressions can structure well-known computations including monoidal list 
comprehensions, monadic parsers, applicative formlets and asynchronous sequences based on the list 
monad transformer. We also present typing rules for computation expressions that are capable of 
capturing all these applications.


### [Rapid Prototyping of DSLs with F#](http://academic.research.microsoft.com/Publication/39281456/rapid-prototyping-of-dsls-with-f#)

Adam Granicz
_Central European Functional Programming School (CEFP)_

In these lecture notes we present the F# implementation of a small programming language we call Simply. 
We give the parser implementation using active patterns, F#’s unique feature for extensible pattern matching, 
which as we demonstrate provide an elegant and type-safe mechanism to embed parsers as an alternative approach 
to parser generators. We also build an evaluator, and extend the core Simply language with Logo-like 
primitives and build a graphical shell environment around it. As a warm-up, we give a rudimentary survey 
of some notable F# features, including sequence expressions and active patterns.

##  Parallel and Distributed programming
{: #distributed-and-parallel-programming   .anchor }


### [MBrace: cloud computing with monads](http://dl.acm.org/citation.cfm?id=2525531&dl=ACM&coll=DL&CFID=454202220&CFTOKEN=25283533)

Jan Dzik, Nick Palladinos, Konstantinos Rontogiannis, Eirik Tsarpalis, Nikolaos Vathis
_In pre-proceedings of PLOS '13 Seventh Workshop on Programming Languages and Operating Systems Article No. 7_

As cloud computing and big data gain prominence in today's economic landscape, the challenge of effectively articulating complex algorithms in distributed environments becomes ever more important. In this paper we describe MBrace; a novel programming model/framework for performing large scale computation in the cloud. Based on the .NET software stack, it utilizes the power of the F# programming language. MBrace introduces a declarative style for specifying and composing parallelism patterns, in what is known as cloud workflows or a cloud monad. MBrace is also a distributed execution runtime that handles orchestration of cloud workflows in the data centre.

### [Implementation of MBrace for large-scale cloud computing](https://github.com/krontogiannis/MBrace.Azure/raw/thesis/docs/mbrace-thesis-en.pdf)

Konstantinos Rontogiannis
_Diploma Thesis, National Technical University of Athens, School of Electrical and Computer Engineering, 2015_

The purpose of this diploma dissertation is on one hand the description of MBrace; a programming
model for performing large scale distributed computations, and on the other hand the implementation
of MBrace on the Microsoft Azure cloud computing platform.

In the era of big data and cloud computing, the need for efficient and effective orchestration of distributed
computations becomes a necessity. Cloud computing providers make it easy for someone to
get access to computational resources needed.

Programming large scale distributed systems is a remarkably difficult task, that requires the management
and orchestration of multiple concurrent processes, software and hardware failures, scalability
and elasticity.

In this diploma dissertation we describe MBrace; a programming model for large scale cloud computing.
Based on the F# programming language and the .NET framework stack, MBrace provides a
declarative, expressive and rich model for creating and composing distributed computations. This
pattern is also known as cloud workflows, or cloud monad. Finally, we have implemented this model
on top of the Microsoft Azure platform, providing MBrace.Azure: a distributed execution runtime for
cloud computations.

### [Specifying and Executing Optimizations for Parallel Programs](http://web.engr.illinois.edu/~mansky1/exec.pdf)

William Mansky, Dennis Griffith, Elsa L. Gunter
_In pre-proceedings of GRAPHITE '14_

Compiler optimizations, usually expressed as rewrites on program graphs, are a core part of all modern compilers. However, even production compilers have bugs, and these bugs are difficult to detect and resolve. The problem only becomes more complex when compiling parallel programs; from the choice of graph representation to the possibility of race conditions, optimization designers have a range of factors to consider that do not appear when dealing with single-threaded programs. In this paper we present PTRANS, a domain-specific language for formal specification of compiler transformations, and describe its executable semantics. The fundamental approach of PTRANS is to describe program transformations as rewrites on control flow graphs with temporal logic side conditions. The syntax of PTRANS allows cleaner, more comprehensible specification of program optimizations; its executable semantics allows these specifications to act as prototypes for the optimizations themselves, so that candidate optimizations can be tested and refined before going on to include them in a compiler. We demonstrate the use of PTRANS to state, test, and refine the specification of a redundant store elimination optimization on parallel programs.

### [Prajna: Cloud Service and Interactive Big Data Analytics](http://msrccs.github.io/Prajna/)

Jin Li, Sanjeev Mehrotra and Weirong Zhu

In this paper, we describe Prajna, a distributed functional
programming platform. Prajna is built on top of .Net and F#,
and is open source released. Prajna not only
supports (and extends) in-memory data analytics on large
clusters like that of Spark, but also supports development
and deployment of cloud services. Moreover, we show that
Prajna can harmonize cloud service and data analytical service,
and add rich data analytics on any existing cloud service/application.
Prajna supports running of cloud service and interactive data analytics in both managed code and unmanaged
code, and supports running of remote code with significant data components (e.g., a recognition model that is hundreds of megabytes in size). 




## Units of Measure
{: #units-of-measure .anchor }


### [Relational parametricity and units of measure](http://dl.acm.org/citation.cfm?id=263761)

Type systems for programming languages with numeric
types can be extended to support the checking of units
of measure. Quantification over units then introduces
a new kind of parametric polymorphism with a corresponding
Reynolds-style representation independence
principle: that the behaviour of programs is invariant
under changes to the units used. We prove this ‘dimensional
invariance’ result and describe four consequences.
The first is that the type of an expression can be used to
derive equations which describe its properties with respect
to scaling (akin to Wadler’s ‘theorems for free’ for
System F). Secondly there are certain types which are
inhabited only by trivial terms. For example, we prove
that a fully polymorphic square root function cannot
be written using just the usual arithmetic primitives.
Thirdly we exhibit interesting isomorphisms between
types and for first-order types relate these to the central
theorem of classical dimensional analysis. Finally
we suggest that for any expression whose behaviour is
dimensionally invariant there exists some equivalent expression
whose type reflects this behaviour, a consequence
of which would be a full abstraction result for
a model of the language.

### [Programming Languages and Dimensions](http://academic.research.microsoft.com/Publication/1387457/programming-languages-and-dimensions)

Andrew Kennedy
_PhD Thesis, University of Cambridge, 1995_

### [Types for Units-of-Measure: Theory and Practice](http://research.microsoft.com/en-us/um/people/akenn/units/cefp09typesforunitsofmeasure.pdf)

Andrew Kennedy
_Lecture notes , for CEFP'09, Revised July 2010_


##  Web programming
{: #web-programming    .anchor }

### [Visualizing Data in the Web](http://dl.acm.org/citation.cfm?id=2429376)

Loic Denuziere, Adam Granicz, Anton Tayanovskyy
_Data Driven Functional Programming 2013 (DDFP)_

### [Composing Reactive GUIs in F# Using WebSharper](http://link.springer.com/content/pdf/10.1007/978-3-642-24276-2_13)

Joel Bjornson, Anton Tayanovskyy, and Adam Granicz
_The 22nd Symposium on Implementation and Application of Functional Languages (IFL)_

We present a generic library for constructing composable
and interactive user interfaces in a declarative style. The paper introduces
flowlets, an extension of formlets providing interactivity. Realworld
examples are given using the current implementation that compiles
flowlets defined in F# to JavaScript with WebSharper


##  Security and Verification Research
{: #security-and-verification-research  .anchor }

The experimental [FStar language](http://research.microsoft.com/en-us/projects/fstar/) is inspired by F#. 
Some of the publications about FStar are below.

* Verifying Higher-order Programs with the Dijkstra Monad, Nikhil Swamy, Joel Weinberger, Cole Schlesinger, 
  Juan Chen, and Benjamin Livshits, in ACM Programming Language Design and Implementation (PLDI) 2013, ACM, June 2013

* Self-Certification: Bootstrapping Certified Typecheckers in FStar with Coq, Pierre-Yves Strub, Nikhil Swamy, 
  Cedric Fournet, and Juan Chen, in In Proceedings of the ACM Symposium on Principles on Programming Languages, 
  ACM, January 2012

* Secure Distributed Programming with Value-dependent Types, Nikhil Swamy, Juan Chen, Cedric Fournet, Pierre-Yves Strub, Karthikeyan Bharagavan, and Jean Yang, 
  in The 16th ACM SIGPLAN International Conference on Functional Programming (ICFP 2011), ACM SIGPLAN, September 2011
    
* Verified Security for Browser Extensions, Arjun Guha, Matthew Fredrikson, Benjamin Livshits, and Nikhil Swamy, 
  in Proceedings of the IEEE Symposium on Security and Privacy (Oakland), IEEE, 22 May 2011
    
* Mechanized soundness proofs for FStar, Pierre-Yves Strub, Cedric Fournet, and Nikhil Swamy, 1 April 2011
    
* Secure Distributed Programming with Value-Dependent Types, Nikhil Swamy, Juan Chen, Cedric Fournet, 
  Pierre-Yves Strub, Karthikeyan Bharagavan, and Jean Yang, no. MSR-TR-2011-37, 24 March 2011
    


##  Applications
{: #applications   .anchor }

For more applications of F#, see the [Testimonials](/testimonials/) page. Below are some peer-reviewed publications or academic presentations related to applications of F#.

### [Learning with F#](http://dl.acm.org/citation.cfm?id=1362709)

Phil Trelford, _Commercial Users of Funnctional Programming_, 2006. This talk describes how the Applied Games Group at Microsoft Research Cambridge uses F#. This group consists of seven people, and specializes in the application of statistical machine learning, especially ranking problems. The ranking systems they have developed are used by the XBox Live team to do server-side analysis of game logs, and they recently entered an internal competition to improve "click-through" prediction rates on Microsoft adCenter, a multi-million dollar industry for the company. The amount of data analysed by the tools is astounding: e.g. 3TB in one case, with programs running continuously over four weeks of training data and occupying all the physical memory on the 64-bit 16GB machines we use.

F# plays a crucial role in helping the group process this data efficiently and develop smart algorithms that extract essential features from the data and represent the information using the latest statistical technique called "factor graphs". Our use of F# in conjunction with SQL Server 2005 is especially interesting: we use novel compilation techniques to express the primary schema in F# and then use SQL Server as a data slave.


### [Developing an F# Bioinformatics Application with HTML5 Visualization](http://cufp.org/videos/developing-f-bioinformatics-application-html5-visualization)

Adam Granicz, IntelliFactory
_Commercial Users of Functional Programming (CUFP) 2012_

With proprietary plugin-based containers like Flash or Silverlight gradually losing ground, an increasing 
number of web applications are beginning to seek web standards compliance, and to utilize HTML5 to deliver 
rich and interactive client-side functionality and end-user experience. Indeed, modern browsers continue 
to invest heavily in establishing standard support for various HTML5 features, making HTML5 an appropriate 
choice for an ever-growing crowd of web developers.

Earlier this year at IntelliFactory, we completed a pilot project missioned to create a custom, 
innovative, and highly interactive bioinformatics web application using F# and our WebSharper technology. 
This application set out to serve the bioinformatics research community, and to deliver, among others, 
an interactive visualization of the gene sequence of a particular bacterium, with various mutations 
available for further research and laboratory use. The application consumed a large amount of bio data 
and integrated various advanced HTML5 visualizations, such as full functional gene ontology, a KEGG 
orthology, and a phenotype map, making it a useful web resource for researchers and laboratory staff alike.

I will present our experience report on developing this bioinformatics application, the 
practices and guidelines related to client-based visualization projects we distilled while developing it, 
the challenges we met on the way, and how we solved these challenges. Many bioinformatics algorithms 
are amenable to functional programming, but as a full-blown web application with advanced visualization
this project yielded a great deal of details that we hope will be useful for other attendees.


### [BumbleBee: A Transformation Environment for Spreadsheet Formulae](http://scholar.google.nl/citations?view_op=view_citation&hl=en&user=Kzy5f1IAAAAJ&citation_for_view=Kzy5f1IAAAAJ:LkGwnXOMwfcC)

Felienne Hermans, Danny Dig

Spreadsheets are widely used in industry. It is estimated that end-user 
programmers outnumber regular programmers by a factor of 5. However, spreadsheets are 
error-prone: several reports exist of companies which have lost money because of 
spreadsheet errors. We assert that a contributing factor to these problems is the difficulty of 
consistent editing of spreadsheet formulas.


### [The First Substantial Line of Business Application in F#](http://dl.acm.org/citation.cfm?id=1668117), [video](http://cufp.org/videos/first-substantial-line-business-application-f)

Adam Granicz, IntelliFactory, Alex Peake, Veracentra
_Commercial Users of Functional Programming (CUFP) 2009_

We have developed MarketingPlatform™ a marketing automation solution delivered as Software as a Service 
with F# as the primary language. MarketingPlatform™ is a solution for marketers in direct marketing and 
in channel marketing who would like to gain a timely and deep understanding of what is working and what 
is not working in their marketing campaigns. Marketers are than facilitated in the execution and delivery
of campaigns, using this insight to create relevant communications to each individual. It is divided into 
four tightly integrated campaign management steps of Measure, Analyze, Design and Execute.


### [Applying Functional Programming to Build Platform-Independent Mobile Applications](http://cufp.org/conference/sessions/2011/applying-functional-programming-build-platform-ind)

Adam Granicz, IntelliFactory
_Commercial Users of Functional Programming (CUFP) 2011_

Native mobile applications enjoyed tremendous success in recent years, and looking at various mobile 
application stores such as Apple's App Store or Google's Android Market reveals a staggering number of 
native mobile applications. As technologies to build these applications mature and the market saturates, 
mobile OS vendors are struggling to find ways to keep up with and secure the exponential market growth. 
Inhibiting factors include platform-specific development environments, programming languages, and 
building blocks for applications; developer-unfriendly licensing, policies and subscriptions; and 
controlled channels of application distribution.

These problems have given rise to many promising alternatives and technologies that aim to bridge 
across various mobile platforms and enable sharing some or all the code in between versions of 
applications for different mobile OSs. Two main directions unfolded: targeting mobile code generation 
from mainstream languages such as C# and Java, and embracing web applications with platform-independent 
UI abstractions and enhanced access to the capabilities of the underlying device. While the technologies
that enabled the former are an interesting topic, we believe that the latter has implications not only 
for mobile applications but also for their desktop counterparts, and finding ways to utilize functional 
programming in the development of these web-based applications has an immense impact on mobiles and desktops alike.
 
In this talk I will highlight some of the work we are doing at IntelliFactory to enable building 
platform-independent mobile applications in F#. This work leverages our commercially available WebSharper
framework, the premiere functional web development framework for F# with thousands of active users and 
partner companies, and utilizes some key functional programming abstractions that enable modeling 
first-class, type-safe, composable web applications and user interfaces. I will briefly outline the 
metaprogramming infrastructure that enables us to enlist arbitrary JavaScript libraries into the 
type-safe discipline of F#, and the underlying CoreJS language that is more amenable to reasoning about 
and applying code transformations and optimizations.
 
At the end of the talk, I will briefly touch upon our upcoming F# in the Cloud support and how that 
helps to seamlessly scale into the cloud desktop and mobile web applications with immense server computation needs.


### [GLR-based abstract parsing](http://dl.acm.org/citation.cfm?id=2556616&dl=ACM&coll=DL), [video (in russian)](http://vimeo.com/79442837)

Semen Grigorev, Saint Petersburg State University, Iakov Kirilenko, Saint Petersburg State University

_Central & Eastern European Software Engineering Conference in Russia (CEE-SECR '13) 2013_

Abstract parsing is an important step of the processing of dynamically constructed statements or string-embedded 
languages (such as embedded or dynamic SQL). Existing LALR-based algorithms have performance issues. To increase performance we propose 
to use a GLR-algorithm as a base for abstract parsing and to reuse graph-structured stack and shared packed parse forest. 
RNGLR-algorithm modification for abstract parsing is presented.

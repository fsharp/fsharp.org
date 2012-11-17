---
layout: page
title: F# Research | The F# Software Foundation
headline: Publications about F# research
---

Many of the standard F# features (including _active patterns_ and _asynchronous workflows_) 
have been described in academic literature. Additionally, there have been also several 
research projects that build on top of F#. They fall in the following areas:

 * **[Information-rich programming](#informationrich_programming)** - papers in this 
   section describe research related to F# 3.0 type providers, a novel mechanism
   that integrates large-scale data into statically typed function programming language.

 * **[Asynchronous programming](#asynchronous_programming)** - this section describes
   F# 2.0 _asynchronous workflows_ and the asynchronous programming model used in F#.
   It also includes some work on event-based programming.

 * **[Concurrent and reactive programming with Joinads](#concurrent_and_reactive_programming_with_joinads)**
   - this section discusses a research extension of F# _computation expression_ syntax
   that can be used to encode a wide range of programming patterns from concurrent, reactive
   and parallel programming.

 * **[Functional programming](#functional_programming)** - this section provides information
   about core F# language features including _active patterns_ and intialization of 
   mutually recursive values.

--------------

## Information-rich programming

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

## Asynchronous programming

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

### [Collecting Hollywood’s Garbage: Avoiding Space-Leaks in Composite Events](http://www.cl.cam.ac.uk/~tp322/papers/hollywood.html)

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

## Concurrent and reactive programming with Joinads

Joinads is a general-purpose research extension of the F# computation expression syntax (also 
called _monadic syntax_) in F# and is mainly useful for concurrent, parallal and reactive 
programming. The extension adds a new piece of notation, written `match!` that can be 
used to compose computations using non-deterministic choice, parallel composition and aliasing.

The best way to experiment with Joinads is to visit the [TryJoinads.org](http://tryjoinads.org/)
web site, which contains a number of tutorials that can be tested in web browser capable
of running Silverlight (MacOS and Windows).

### [Extending Monads with Pattern Matching](http://www.cl.cam.ac.uk/~tp322/papers/docase.html)

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

### [Evaluation strategies for monadic computations](http://www.cl.cam.ac.uk/~tp322/papers/malias.html)

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


### [Joinads: a retargetable control-flow construct for reactive, parallel and concurrent programming](http://www.cl.cam.ac.uk/~tp322/papers/joinads.html)

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

## Functional programming

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

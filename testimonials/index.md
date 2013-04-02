---
layout: page
title: Testimonials | The F# Software Foundation
headline: Testimonials and Quotes
class: testimonials
---

<!-- 

Please contribute your testimonials!
====================================

Adding new testimonials to this page is easy - you can write your quote in plain 
text, using some Markdown formatting. Look at the existing examples to see how 
this works.

Here is a simple template that you can copy and use for your testimonial:

    > Short quote with a punchline (appears on the left)

    1. Your Name
    2. Your Affiliation
    3. [Case study](http://link.to.case.study.or.more.details)

    The main text goes here.     Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Vivamus cursus aliquam purus vitae interdum. Donec posuere interdum orci. Sed semper 
    ante a felis viverra elementum. Praesent posuere porta ornare. 
  
    You can use multiple paragraphs.     Suspendisse sed justo erat, vel sagittis mauris. 
    Ut vulputate bibendum neque, nec dictum ligula scelerisque at. In hac habitasse platea 
    dictumst. Suspendisse nec purus id erat commodo tristique vel non ligula. 
  
     - **You can** also include a list
     - **Use double star** to make things bold

    <div class="keywords">comma, separated, list, of, keywords</div>

In the numbered list, everything is optional. You can remain anonymous if you wish,
or you can add as many details as you want. Keywords will be used later on to filter
the content (so please add some, even though they are not used at the moment).

-->


<div id="simon-cousins-1"> </div> 

---

> The use of F# demonstrates a sweet spot for the language within enterprise software

1. **Simon Cousins**
2. [source](http://stackoverflow.com/questions/2785029/in-what-areas-might-the-use-of-f-be-more-appropriate-than-c), [permalink](#simon-cousins-1)

I have written an application to balance the national power generation schedule for a portfolio 
of power stations to a trading position for an energy company. The client and server components 
were in C# but the calculation engine was written in F#. 

The use of F# to address the complexity at the heart of this application clearly demonstrates 
a sweet spot for the language within enterprise software, namely algorithmically complex 
analysis of large data sets. My experience has been a very positive one.

<div class="keywords">energy, trading, calculations, ETL, extract, transform, load</div>

<div id="horspool-1"> </div>

---

> When F# is combined with Visual Studio... productivity goes through the roof!

1. [**Prof Nigel Horspool**](http://webhome.cs.uvic.ca/~nigelh/)
2. University of Victoria, Canada
3. [permalink](#horspool-1)

F# programs tend to be much shorter than their equivalents in other languages. The 
fewer lines of code required, of course, the higher the productivity. When F# is combined 
with Visual Studio, which provides help with remembering the methods attached to different 
data types and how to use those methods, productivity goes through the roof!

<div class="keywords">teaching, research</div>



<div id="trafigura-ad-1"> </div>

---

> Our risk and analytic capabilities (...) are entirely written in F#

1. **Lawrence Austen**
2. Chief Risk Officer at [Trafigura](http://cufp.org/users/lawrenceausten)
3. [source](http://cs.hubfs.net/topic/None/59847), [permalink](#trafigura-ad-1)

...work directly with Trafigura's Chief Risk Officer/Head of Quantitative Analysis, 
cranking code and rapidly extending our risk and analytic capabilities, which are entirely 
written in F#. 

Trafigura Limited engages in the supply and offtake of crude oil, petroleum products, liquefied 
petroleum gas, metals, and metal ores and concentrates worldwide. Its solutions include trading, 
financing, hedging, and logistical support....

<div class="keywords">comodities, trading, risk, analysis</div>



---
[Click to add a new testimonial. Just log on to github, edit and send the pull request! Or email fsharp@fsharp.org](https://github.com/fsharp/fsfoundation/blob/gh-pages/testimonials/index.md)



<div id="credit-suisse-abstract"> </div>

---

> At Credit Suisse, we've been using F# to develop quantitative models for financial products

1. **Howard Mansell**
2. Credit Suisse (at time of writing)
3. [source: CUFP Workshop, 2008](http://cufp.org/archive/2008/abstracts.html#MansellHoward)
4. [permalink](#credit-suisse-abstract)

Building valuation models for derivative trades requires rapid development of mathematical models, made possible by 
composition of lower-level model components. We have found that F#, with the associated toolset, provides a 
unique combination of features that make it very well suited to this kind of development. In this talk, I will explain how we 
are using F# and show why it is a good match. I will also talk about the problems we have had, 
and outline future enhancements that would benefit this kind of work.

The abstract to [a talk at the Commercial Users of Functional Programming workshop](http://cufp.org/archive/2008/abstracts.html#MansellHoward)

<div class="keywords">financial services, analysis, fixed income, derivatives, financial modelling</div>


<div id="aviva-flying-frog-1"> </div>

---

> Aviva developed an entire pension quote calculator entirely in F# in under 100 days with no prior F# experience at all...

1. [**Flying Frog Consultancy**](http://stackoverflow.com/questions/952318/what-are-the-benefits-of-using-c-sharp-vs-f-or-f-vs-c), [source 2](http://www.quora.com/Which-organizations-use-the-F-programming-language-in-a-non-trivial-fashion/answer/Jon-Harrop-1), [source 3](http://stackoverflow.com/questions/179332/anyone-actually-using-f-in-production)
2. [permalink](#aviva-flying-frog-1)

Aviva (one of the world's largest insurance companies) have F# code in production, are starting several 
more projects in F#. We are currently consulting for Aviva (£2.5bn profit) who have migrated 
some of their number crunching and business logic to F# and are so happy with the results 
(10x faster and 10x less code vs their Visual C++ 6) that they are proposing to migrate 1,600,000 lines of code to 
F#. In particular, their developers found F# easy to learn and use.

... my predecessor developed an entire pension quote calculator (typically scheduled to take 300-400 man days) 
entirely in F# in under 100 days with no prior F# experience at all. Performance is 10× 
better than the C++ that it replaces because the new code avoids unnecessary copying and exploits multicore 
parallelism. Part of my job here will be to give basic F# training to around 20 people and bring a few people up to expert level.

In answer to "Can you give any evidence for 10x performance gain over C++?". Aviva's C++ 
code is a simple manual translation from very inefficient Mathematica code that suffers from several pathological 
performance problems mainly centered around excessive copying. The F# rewrite does not have these problem. 
The 10x performance gain was verified by the client.

<div class="keywords">financial services, insurance, actuarial</div>


---

> ...we have decided to use F# as our functional language to have automatic integration with rest of the system...

1. EMEA-based Security Solutions Company

We develop security product to protect critical infrastructure (e.g. Oil Refinery, Airport, etc) for countries across 
the globe.... In core of our product there are prediction algorithms. We use different modeling and theorems 
(Monte Carlo, Action, etc) to implement the prediction components. ... Since we are rewriting our next generation product 
using .NET, we have decided to use F# as functional language to  have automatic integration with rest of the system. ... We 
also have advanced machine learning components (Artificial Intelligence) and functional languages are the 
best fit to write AI stuff. We are planning to use F# as the primary programming language in this 
area because of its interoperability with .NET. 

<div class="keywords">security, integration</div>

---

> I keep being surprised by how compact and readable F# is...

1. London-Based Asset Management Company

We have set up a complete risk management system that combines several data sources, presents them in a ... 
WPF user interface, and does a LOT of calculation behind the scenes. When the calculation 
requires a proper algorithm (i.e. anything that is more complex than a simple for loop), 
our choice has been F#. I have to say I keep being surprised by how compact it is and, nonetheless, 
how readable it is even when I'm reading code that I hadn't looked at or thought about for six months.

<div class="keywords">data, analysis, calculation, financial services, derivatives</div>



<div id="peter-sestoft-1"> </div>
---

> ...That's the reason we have chosen F# for our undergraduate functional programming class...

1. **Prof. Peter Sestoft**
2. [IT University of Copenhagen](http://www.itu.dk/people/sestoft/)
3. [permalink](#peter-sestoft-1)

F# has a beautiful simple but expressive language at its core, and many powerful features 
built around that core language.  It can draw on all the power of the .NET libraries, 
and runs on Windows, MacOS and Linux.  That's the reason we have chosen F# for our 
undergraduate functional programming class as well as our 
undergraduate programming language class [(link)](http://www.itu.dk/people/sestoft/plc/)

<div class="keywords">teching, research, cross-platform</div>




<div id="darren-platt-1"> </div>
---

> F# rocks... building out various algorithms for DNA processing here and 
> it's like a drug

1. **Darren Platt**
2. Amyris Biotechnology, [source](http://research.microsoft.com/en-us/events/2012summerschool/kenjifsharpfphdsummerschool2012new.pdf)
3. [permalink](#darren-platt-1)

With F#... we have written a complete genome re-sequencing pipeline with interface, algorithms, 
reporting in ~5K lines and it has been incredibly reliable, fast  and easy to maintain.

F# rocks - we're building out various algorithms for DNA processing here and it's like a drug.  Just 
implemented a suffix tree in 150 lines that can index 200,000 bases a second ;)    We have probably 
10-20K lines of code for many scientific applications ranging from a full genome sequencing 
pipeline that reconstructs and annotated yeast strains, to simulators for various processes 
and design tools for building DNA sequences/constructs.  There are lab located apps that 
grab robot log files and move them to databases and a tool for viewing a huge collection of DNA sequencing data.

F# has been phenomenally useful.  I would be writing a lot of this in Python otherwise and F# is more 
robust, 20x 1. 100x faster to run and for anything but the most trivial programs, faster to develop.  
The UI work is especially gratifying, because state of the art for a lot of genomic data display 
is still PNG images embedded in JavaScript and with F# I can render half a million data points on 
a web page without jumping through hoops.

With Units of Measure I started labelling the coordinates as one or zero based and immediately found a bug where I'd casually mixed the two systems. Yay F#!

<div class="keywords">biotechnology, units of measure, bioinformatics</div>



---

> I evaluated F# and it and found that for certain tasks it was better 
> than C# in terms of performance while maintaining suitable readability

1. **Atalasoft**
2. [source](http://www.atalasoft.com/cs/blogs/stevehawley/archive/2011/08/01/building-pure-managed-dotimage.aspx)

I evaluated F# and it and found that for certain tasks it was better than C# in terms of performance 
while maintaining suitable readability and for certain tasks, it leant itself better to certain 
algorithms (OctTree based color quantization stands out). ...we were able to heavily leverage inline functions in F#......Since each of 
these are inlines, the F# optimizer can actually do something useful with the code. By using F#, we were able to address this cost by using 
inlining, code profiling, scanline caching, memoization and other techniques. In many cases we ended up with 
code that ran in equivalent time to C++ code or in some cases faster.

<div class="keywords">algorithms, performance, immage processing</div>

---

> F#...levels the playing field between beginners and experienced programmers.

1. **Prof. Susan Eisenbach**
2. Imperial College, United Kingdom 

Functional languages are ideal for teaching clear thinking, for solving problems 
amenable to code solutions and it levels the playing field between beginners and 
experienced programmers. The first programming language taught has a substantial 
influence on what language students use when they have a free choice. F#, once it 
is platform independent, has the potential to become the first programming language. 

<div class="keywords">teaching, research, cross-platform</div>

---

> With its new tools, the bank can speed development by 50 percent or more, improve quality, and reduce costs.

1. [**Microsoft Case Study**](http://www.microsoft.com/casestudies/Case_Study_Detail.aspx?casestudyid=4000006794)

A large financial services firm in Europe sought new development tools that could cut costs, boost productivity, 
and improve the quality of its mathematical models. To address its needs, the bank deployed F#, the 
.NET Framework, and Visual Studio. It will soon upgrade to Visual Studio 2010 and then integrated 
F#. With its new tools, the bank can speed development by 50 percent or more, improve quality, and reduce costs.

<div class="keywords">financial services, financial modelling, derivatives, fixed income</div>

---

> F#...made it trivial... 

1. **Prof David Walker**
2. Princeton University

Our graduate course on Parallelism this Fall is full, even though it assumes no 
experience with functional programming or F#. The students are preparing the courseware 
themselves, and one of the topics we are studying is functional reactive programming (FRP) 
with continuous, time-varying behaviors. F#, with its rich graphics libraries, made it 
trivial to construct a super-fun assignment involving purely functional and interactive 
animation of a mock solar system.

<div class="keywords">teaching, research, cross-platform</div>

---

> I have now delivered three business critical projects written in F#. I am still waiting for the first bug to come in.

1. [Colin Bull and Simon Cousins](http://www.simontylercousins.net/journal/2013/2/22/does-the-language-you-choose-make-a-difference.html)

I am both a C# dev and an F# dev. I can only offer subjective anecdotal evidence based 
on my experience of delivering projects in both languages (I am too busy delivering 
software to do anything else). 
 
That said, the one stat in the summary that I find most compelling is the defect rate. 
I have now delivered three business critical projects written in F#. I am still waiting 
for the first bug to come in. This is not the case with the C# projects I have delivered. 
I will continue to monitor and report on this. It might be that I am just on a lucky streak, 
but I suspect that the clarity and concision of F# code contributes greatly to its correctness.

<div class="keywords">energy, extract, transform, load, ETL</div>



<div id="microsoft-quantum-1"> </div>
---

> F# is central to Microsoft’s quantum algorithm research

1. Dave Wecker
2. Microsoft Advanced Strategies and Research
3. [permalink](#microsoft-quantum-1)

F# is central to Microsoft’s quantum algorithm research. The LIQUi|⟩ simulator (Language 
Integrated Quantum Operations) presents an extension of F# that presents a 
seamless integration of classical and quantum operations. The scale and efficiency 
of the simulator allows it to handle among the largest entangled 
systems of qubits (quantum bits) ever modeled utilizing a targeted linear algebra package 
written entirely in F#. In addition, the modular architecture allows users to 
easily extend the system in any desired research direction. The base library is 
well over 20,000 lines of code and implements a wide range of modules including 
circuits, molecular modeling, spin-glass systems, quantum error correction, machine 
learning, factoring and many others. The system runs in client, server and cloud 
environments. It is also designed to be used as an educational tool and we have 
found that bringing new users up to speed is a quick and painless process.

<div class="keywords">simulation, quantum, Microsoft, modelling</div>


<div id="tabbles-1"> </div>
---

> ...the core logic is written in F# wherever possible...

1. **Andrea D'Intino**
2. [Yellow blue soft](http://tabbles-dev.blogspot.co.uk/2009/12/tabbles-museum-evolution-of-gui-and-of.html)
3. [permalink](#tabbles-1)

Yellow blue soft is a truly international Micro-ISV: We are a small, dynamic and international 
team who is wondering why file-management is lagging 30 years behind and no one seems to care 
or even notice. We do. We love what we're doing and most importantly we love listening to you! 
Visit our blog to know more about us and join our forum to become part of our sparkling community.

The tabbles are special containers that you can use to categorize any kind of file and document as 
well as folders and bookmarks. Using Tabbles you can quickly categorize, find, sort and share your 
documents, in a totally new way.

<div class="keywords">applications, business logic</div>


<div id="forensic-software-1"> </div>
---

> This software provides the user with maximum flexibility to move 
> quickly through multiple images

1. [**Forensic Software**](http://www.forensic-software.com/)
2. [permalink](#forensic-software-1)
3. 
Forensic Comparison Software is the ideal tool for displaying 
two digital images, side by side, for comparison purposes. This software provides the user with maximum 
flexibility to move quickly through multiple images, in a manner that replaces the intensive manual comparison 
of hard copy photographs. Focusing on the individual's needs, Forensic Comparison Software provides many 
intuitive and easy to use features for enhancing digital images.

<div class="keywords">security, algorithms</div>


<div id="genetec-job-ad-1"> </div>
---

> Software developers at Genetec use their technical aptitudes 
> creatively in order to design and program new features

1. Montreal-based IP Security Company
2. [source](http://www.linkedin.com/groups/I-am-looking-Software-Developer-2347131.S.125972690)
3. [permalink](#genetec-job-ad-1)

From a [job advertisement](http://www.linkedin.com/groups/I-am-looking-Software-Developer-2347131.S.125972690) for F# programmers:  
Software developers at Genetec use their technical aptitudes creatively 
in order to design and program new features, while working closely with the product management teams to 
meet customers' expectations. They work in multidisciplinary teams driven by the desire to overcome the limits of the 
technology in order to deliver products of outstanding quality, beauty and creativity to the customers. 

The current position is a code intensive position specialized in distributed applications development using 
functional programming and .NET technologies. Design and implement large scale distributed network centric applications 
using .NET 4.0 technologies in F#.


<div class="keywords">distributed computing, security</div>


<div id="grange-insurance-1"> </div>
---

> Grange Insurance parallelized its rating engine to take better 
> advantage of multicore server hardware

1. [Grange Insurance](http://www.microsoft.com/casestudies/case_study_detail.aspx?casestudyid=4000005226)
2. [permalink](#grange-insurance-1)

For nearly 75 years, Grange Insurance has offered competitive products and services to policyholders 
in more than a dozen U.S. states. To maintain its well-earned reputation and standing, the company decided to 
enhance its rating engine—a software tool for rating policies and performing what-if modeling, impact analyses, 
and other vital activities. Working with the Sophic Group and using the Microsoft Visual Studio Team System development 
environment and F# programming language, Grange Insurance parallelized its rating engine to take
better advantage of multicore server hardware, and in so doing garnered significant performance benefits. 
Processes that used to require hours now take just minutes, enabling the company to trim time-to-market 
by weeks and making it far easier for independent agents to sell and service Grange products.

<div class="keywords">insurance, parallelization, financial services</div>


<div id="bohdan-szymanik-1"> </div>
---

> Bohdan ... shows F#'s use for performing aggregations over large datasets, taking advantage of cpu and io parallelism

1. Bohdan Szymanik
2. [source](http://dnufba.preview.intergen.net.nz/Lists/Events%20Calendar/DispForm.aspx?ID=279)
3. [permalink](#bohdan-szymanik-1)

Bohdan Szymanik, CTO at Kiwibank, is keen to show how he's been using F# for analysis tasks 
within the bank. He'll provide an intro to the language then show its use for performing 
aggregations over large datasets, taking advantage of cpu and io parallelism, and data 
presentation through charting and image generation.

<div class="keywords">financial services, data, analysis</div>


<div id="dsyme-ad-predict-1"> </div>
---

> F#'s powerful type inference means less typing, more thinking

1. Don Syme
2. Principal Researcher, Microsoft
3. Eclipse Summit Europe 2009, [source](http://www.slideshare.net/lgayowski/taking-functional-programming-into-the-mainstream-eclipse-summit-europe-2009), slide 49
4. [permalink](#dsyme-ad-predict-1)

F# was used on Microsoft's AdPredict project for adCenter. This was a 4 week project with 4 machine learning experts involving a model 
with 100million probabilistic variables and processing 6TB of training data in real-time. 2 weeks of CPU time 
were used during training. What We Observed:

 - **Quick Coding** - F#'s powerful type inference means less typing, more thinking 
 - **Agile Coding** - Type-inferred code is easily refactored
 - **Scripting**  - "Hands-on" exploration.
 - **Performance** - Immediate scaling to massive data sets
 - **Memory-Faithful** - Mega-data structures on 16GB machines
 - **Succinct** - Live in the domain, not the language
 - **Symbolic** - Schema compilation and "Schedules"
 - **.NET Integration** - Especially Excel, SQL Server

 <div class="keywords">integration, machine learning, advertising, prediction</div>


<div id="julien-laugel-1"> </div>
---

> F# allows you to move smoothly in your programming style

1. **Julien Laugel**, eurostocks.com
2. [source](http://www.slideshare.net/lgayowski/taking-functional-programming-into-the-mainstream-eclipse-summit-europe-2009), slide 19
3. [permalink](#julien-laugel-1)

I've been coding in F# lately, for a production task. F# allows you to move smoothly in your 
programming style... I start with pure functional code, shift slightly towards an object-oriented style, 
and in production code, I sometimes have to do some imperative programming. I can start with a pure idea, and 
still finish my project with realistic code. You're never disappointed in any phase of the project!

 <div class="keywords">imperative, functional, financial services, portfolio analysis</div>

---

> ...your code is less error-prone...

1. Dario on [StackOverflow](http://stackoverflow.com/a/952443)

You can formulate many problems much easier, closer to their definition and more concise in a 
functional programming language like F# and your code is less error-prone (immutability, more powerful type system, intuitive recurive algorithms). 
You can code what you mean instead of what the computer wants you to say ;-)  Furthermore you 
can have F# and C# together in one solution, so you can combine the benefits of both 
languages and use them where they're needed.

<div class="keywords">domain modeling, immutability</div>


<div id="antonio-hayley-1"> </div>
---

> I'd recommend F#... learning another language is one way to become a better programmer.

1. Antonio Hayley on StackOverflow
2. [source](http://stackoverflow.com/a/179357)
3. [permalink](#antonio-hayley-1)

I'd recommend F# to a die hard C# developer just because learning another language 
is one way a programmer can get out of a local maxima and 
become a better programmer. And F# isn't just a different set of semantics on top of 
the same syntax as most imperative languages are, 
it's a totally different programming style. All the more to expand the capabilities 
and understanding of a programmer.

 <div class="keywords">learning, imperative, functional</div>


<div id="jared-parsons-1"> </div>
---

> ...I have to say I love the language...

1. Jared Parsons on StackOverflow, [source](http://stackoverflow.com/a/2785476)
2. [permalink](#jared-parsons-1)

Over the last 6 or so months, I've been working on a Vim emulation layer. This is the first major project I've ever done with F# 
and I have to say I love the language. In many ways I used this project as a method of learning 
F# (and this learning curve is very much evident if you look through the history of the project). 
What I find the most amazing about F# is just how concise of a language it is. The Vim engine comprises 
the bulk of the logic yet it only comprises 30% of the overall code base.

 <div class="keywords">learning, conciseness</div>


<div id="path-of-go"> </div>
---

> ...The AI is implemented in F#...

1. source: [Path of Go on youtube](http://www.youtube.com/watch?v=bb4igmbv_Oc)
2. [permalink](#path-of-go)

Path of Go is powered by three technologies...: an AI capable of playing Go, the F# language, 
and TrueSkill to match online players. The AI is implemented in F# and meets the challenge of 
running efficiently in the .net compact framework on Xbox 360. This game places you in a number of 
visually stunning 3D scenes. It was fully developed in managed code using the XNA environment.

 <div class="keywords">artificial intelligence, statistics, machine learning, TrueSkill</div>



<div id="dmitry-soshnikov-1"> </div>
---

> There is a noticeable interest in the developer community in Russia towards F#.

1. Dmitry Soshnikov, Associate Professor, Moscow Aviation Technical University
2. [permalink](#dmitry-soshnikov-1)

I do some samples in F# for the lectures and the book, but all that is within a single-user 
VS 2010 Pro installation. Right now we have a set of slides on functional programming with 
F# in Russian in the curriculum repository, and the video-course of functional programming 
using F# available in the largest Russian Internet-University (intuit.ru). The course 
is being taught in 2 universities. There is a noticeable interest in the developer community in 
Russia towards F#.



<div id="boston-based-company"> </div>
---

> F# encourages Reason Driven Development that leads to virtually bug-free code

1. Boston based company that provides solutions to fixed income financial services 
2. [permalink](#boston-based-company)

We are using F# because it considerably increases speed of software development which is crucial 
for a small company with limited development resources.  The most enjoyable feature of this language 
is that the developer can reason about the code instead of relying only on unit tests. 
I would say the language encourages Reason Driven Development methodology which leads to 
virtually bug-free code.  F# as strongly typed functional language ideally fits for tasks our 
software solves – Fixed Income securities trading optimization. It is also very important that 
F# computation engine could be seamlessly integrated with other parts of .NET-based software product. 

<div class="keywords">fixed income, trading, optimization, financial services</div>


<div id="robert-boissy"> </div>
---

> Many attributes of the F# programming language make it an ideal choice 
> for ...the exponentially growing volumes of molecular analysis data

1. Dr. Robert Boissy
2. Assistant Prof., University of Nebraska Medical Center
2. [permalink](#robert-boissy)

I am involved in bioinformatics and computational genomics as a faculty member at the 
University of Nebraska Medical Center (UNMC).  In an academic medical center like UNMC there 
are heavy demands on my time and a wide range of different types of research projects that 
I can end up working on.  I have used the F# programming language on both the .NET and Mono 
frameworks for several of these projects, including one that involved a very productive 
collaboration with IntelliFactory and the use of WebSharper (http://www.websharper.com/home).  
You can visit the resulting [web site](http://app1/unmc.edu/fgx) and read the freely 
available peer-reviewed scientific publication that describes the important 
[infectious disease research](http://mbio.asm.org/content/4/1/e00537-12.long) 
that this F# software development project facilitates.  I am always interested in 
opportunities to work with professional software development enterprises whose teams include 
developers with F# expertise, because I believe that many attributes of the F# programming 
language make it an ideal choice for the development of software solutions that integrate 
Electronic Health Record (EHR) data and the exponentially growing volumes of molecular analysis 
data that can now be obtained from individual patients (e.g., personal genome DNA sequencing data).  
There's an exciting future for F# in this huge, emerging, data-rich health care market.


<div class="keywords">bioinformatics, genomics, health, molecular analysis, simulation</div>



<div id="advertisement-rating-and-ranking-at-microsoft"> </div>
---

> Around 95% of the code in these projects has been developed in F#

1. [F# in Advertisement Ranking & Rating @ Microsoft](http://research.microsoft.com/en-us/events/2012summerschool/kenjifsharpfphdsummerschool2012new.pdf)
2. [permalink](#advertisement-rating-and-ranking-at-microsoft)

Around 95% of the code in these projects has been developed in F#. F# allowed for rapid development 
of prototypes, and thus also rapid verification or falsification of the underlying mathematical models.
Complex algorithms, for example to compute Nash equilibria in game theory, can be expressed 
succinctly.  Units of measure reduced the chance of errors dramatically: 
Prices, probabilities, derivatives, etc. can already be kept apart at compile time.

 <div class="keywords">advertising, ranking, rating, machine learning, statistics</div>


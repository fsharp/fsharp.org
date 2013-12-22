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

<a id="simon-cousins-1" href="#"> </a>
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

<a id="credit-suisse-abstract" href="#">&nbsp;</a>
---

> At Credit Suisse, we've been using F# to develop quantitative models for financial products

1. **Howard Mansell**
2. Credit Suisse (at time of writing)
3. [source: CUFP Workshop, 2008](http://cufp.org/archive/2008/abstracts.html#MansellHoward), [permalink](#credit-suisse-abstract)

Building valuation models for derivative trades requires rapid development of mathematical models, made possible by 
composition of lower-level model components. We have found that F#, with the associated toolset, provides a 
unique combination of features that make it very well suited to this kind of development. In this talk, I will explain how we 
are using F# and show why it is a good match. I will also talk about the problems we have had, 
and outline future enhancements that would benefit this kind of work.

The abstract to [a talk at the Commercial Users of Functional Programming workshop](http://cufp.org/archive/2008/abstracts.html#MansellHoward)
<div class="keywords">financial services, analysis, fixed income, derivatives, financial modelling</div>
 
<a id="kaggle-1" href="#">&nbsp;</a>
---

> The F# code is consistently shorter, easier to read, easier to refactor and contains far fewer bugs.
> As our data analysis tools have developed ... we've become more productive. 

1. [**Kaggle**](http://www.kaggle.com/about/)
2. [permalink](#kaggle-1)

At Kaggle we initially chose F# for our core data analysis algorithms because of its expressiveness. 
We've been so happy with the choice that we've found ourselves moving more and more of 
our application out of C# and into F#. The F# code is consistently shorter, easier to read, 
easier to refactor, and, because of the strong typing, contains far fewer bugs.

As our data analysis tools have developed, we've seen domain-specific constructs 
emerge very naturally; as our codebase gets larger, we become more productive. 

The fact that F# targets the CLR was also critical - even though we have a large existing 
code base in C#, getting started with F# was an easy decision because 
we knew we could use new modules right away. 
<div class="keywords">data science, machine learning, startup</div>

<a id="handelsbanken-1" href="#">&nbsp;</a>
---

> The performance is phenomenal.  We can now re-calculate the entire bank portfolio from scratch in 
> less than a second and the response-time for single deal verification calculation is far below 100 milliseconds.

1. **Jan Erik Ekelof**, M.Sc.
2. Head IT-architect and lead developer Counterparty Risk
3. Handelsbanken 
4. [permalink](#handelsbanken-1)
 
I first evaluated F# back in 2006 - 2007 for the purpose of math oriented high performance applications within 
Financial Risk. I got in spring 2009 a mission to implement a new Real-time Counter-party Risk system covering 
all possible present and future deal types within the entire bank. The effort was started with only three 
resources, me as architect and lead developer and two colleagues – one risk expert and one high performing 
developer. Our first intention was to use C#, but I did a quick proof-of-concept with F# implementing a low 
level TCP/IP-communication to an existing risk-system. This showed us and our  management that F# could give 
us a real productivity boost due to its support for multiple paradigms and functional concepts together with 
an impressive support for multi-threading. 

Our first delivery is approaching rapidly and F# has proved itself as a real life-saver. We started off using 
C# in many places but have since then moved almost entirely into F# due to its ability to reduce the amount of 
code required and its simplicity when developing massive parallel computations. The performance is phenomenal. 
We can now re-calculate the entire bank portfolio from scratch in less than a second and the response-time for 
single deal verification calculation is far below 100 milliseconds(the original demand was 200 milliseconds to 
make the application usable for electronic markets). Although some gains are to be attributed to how we have built 
our calculation models, F# made it possible for us to implement our algorithms and techniques with very little code 
and with a huge similarity to the original mathematical models and regulations (which is important for verification 
of correctness). We have also been able to use the support for Async-workflows producing code that is simple and 
clear and easy to understand but still runs in parallel when required. 
 
The present application contains 35 to 40.000 lines of F#-code and an equal amount of C#-code. However, our 
estimate is that the F# code contains at least 80% of the functionality (which is pretty amazing!). Our experience 
shows us that the number of code lines shrinks with a ratio of 1/2 to 1/4 by just porting functionality from 
C# to F# (not counting single character or empty lines in the C#-code). We have by remodeling increased the 
ratio to the area of 1/5 to 1/8, where the remodeling involves replacing object oriented constructs with 
functional ones (and actually removing mutable states). One example from last week was a limit-utilization 
module written in F# but using an object-oriented approach containing +300 lines of code. I rewrote it to 
below 70 lines of code just by shifting paradigm (and the rewrite made it much easier to understand and verify)! 
<div class="keywords">financial services, analysis, counterparty risk, fixed income, derivatives, financial modelling</div>

<a id="grange-insurance-1" href="#">&nbsp;</a>
---

> Grange Insurance parallelized its rating engine to take better 
> advantage of multicore server hardware

1. [**Grange Insurance**](http://www.microsoft.com/casestudies/case_study_detail.aspx?casestudyid=4000005226)
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

<div class="hero-unit visible-desktop contributeTestimonials" id="how-to-add-testimonial"> 
  <h3>Contribute testimonials</h3>
    <p> To add a new testimonial, log on to GitHub, <a href="https://github.com/fsharp/fsfoundation/blob/gh-pages/testimonials/index.md">edit this page</a> and send the pull request.  You can also send testimonials by email to <a href="mailto:fsharp@fsharp.org">fsharp@fsharp.org</a>.</p>
</div>              

<a id="aviva-flying-frog-1" href="#">&nbsp;</a>
---

> Large insurance company developed an entire pension quote calculator entirely in F# in under 100 days with no prior F# experience at all...

1. **Large insurance company** 
2. [source 1](http://stackoverflow.com/questions/952318/what-are-the-benefits-of-using-c-sharp-vs-f-or-f-vs-c), [source 2](http://www.quora.com/Which-organizations-use-the-F-programming-language-in-a-non-trivial-fashion/answer/Jon-Harrop-1), [source 3](http://stackoverflow.com/questions/179332/anyone-actually-using-f-in-production), [permalink](#aviva-flying-frog-1)

One of the world's largest insurance companies have F# code in production, are starting several 
more projects in F#. We are currently consulting for this company (£2.5bn profit) who have migrated 
some of their number crunching and business logic to F# and are so happy with the results 
(10x faster and 10x less code vs their Visual C++ 6) that they are proposing to migrate 1,600,000 lines of code to 
F#. In particular, their developers found F# easy to learn and use.

... my predecessor developed an entire pension quote calculator (typically scheduled to take 300-400 man days) 
entirely in F# in under 100 days with no prior F# experience at all. Performance is 10× 
better than the C++ that it replaces because the new code avoids unnecessary copying and exploits multicore 
parallelism. Part of my job here will be to give basic F# training to around 20 people and bring a few people up to expert level.

In answer to "Can you give any evidence for 10x performance gain over C++?". The insurer's C++ 
code is a simple manual translation from very inefficient Mathematica code that suffers from several pathological 
performance problems mainly centered around excessive copying. The F# rewrite does not have these problem. 
The 10x performance gain was verified by the client.
<div class="keywords">financial services, insurance, actuarial</div>

<a id="trafigura-ad-1" href="#">&nbsp;</a>
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

<a id="yan-cui" href="#">&nbsp;</a>
---

> The F# solution offers us an order of magnitude increase in productivty...

1. **GameSys**
2. Yan Cui
3. Lead Server Engineer
4. [source](http://www.dotnetrocks.com/default.aspx?showNum=846), [permalink](#yan-cui)

F# is becoming an increasingly important part of our server side infrastructure that supports
our mobile and web-based social games with millions of active users. F# first came to prominence
in our technology stack in the implementation of the rules engine for our social slots games 
which by now serve over **700,000 unique players** and **150,000,000 requests** per day at peaks 
of several thousand requests per second.
The F# solution offers us an **order of magnitude increase in productivity** and allows
one developer to perform the work that are performed by a team of dedicated developers on an 
existing Java-based solution, and is critical in supporting our agile approach and bi-weekly 
release cycles.

The [agent-based programming model](http://www.developerfusion.com/article/139804/an-introduction-to-f-agents/) 
offered by F#'s MailboxProcessor allows us to **build thread-safe components with high-concurrency requirements effortlessly**, without using locks and sacrificing maintainability and complexity.
These agent-based solutions also offer much improved efficiency and latency whilst running at scale.
Indeed our agent-based stateful server for our [MMORPG](https://apps.facebook.com/herebemonsters/)
has proved a big success and great cost saver that we're in the process of rolling it out across
all of our social games!
<div class="keywords">gaming, agents, cloud, big data, scalability</div>

<a id="simard-1" href="#">&nbsp;</a>
---



> For a machine learning scientist, speed of experimentation is the critical factor to optimize.  

1. **Patrice Simard**
2. Distinguished Engineer
3. Microsoft 
4. [permalink](#simard-1)

I wrote the first prototype of the click prediction system deployed in Microsoft AdCenter in F# in a few days.  
 
For a machine learning scientist, speed of experimentation is the critical factor to optimize.  Compiling is 
fast but loading large amounts of data in memory takes a long time.  With F#’s REPL, you only need to load the 
data once and you can then code and explore in the interactive environment.  Unlike C# and C++, F# was designed 
for this mode of interaction.  It has the ease of use of Matlab or Python, both of which I have used extensively 
in the past. One problem with Matlab and Python is that they are not strongly typed.  No compile-time type 
checking hurts speed of experimentation because of bugs, lack of reusability, high cost of refactoring, no 
intellisense, and slow execution.  Switching to F# was liberating and exhilarating.  2 caveats: Not every 
problem fits that model.  With a bit of discipline, such as avoiding massive parallelism for as long as 
possible, the model goes a long way.  The second caveat is that the cost of learning F# is steep.  For me, it 
was 2 weeks of decreased productivity. It has proven a worthwhile investment.
 
As a machine learning practitioner programming in F#, I constantly switch between two activities: 
1) writing prototype code (highly interactive ugly code with throw away results, functions, and visualizations) 
and 2) upgrading prototype code to library standard (fast, generic, reusable).  When I go back to writing 
prototypes, I build on top of the newly upgraded functions.  In F#, the cost of switching between these two 
modes is minimal: often nothing needs to be done other than adding comments and deleting deprecated functions.  
This means that most of the time is dedicated to experimenting and the majority of the code is close to shipping 
quality.  Some people can do this in C# or Matlab, but I find that F# excels at it.
 
I started F# with deep suspicions regarding efficiency.  My first test was to link F# with C++/CLI and 
check performance of calling SSE/AVX optimized code.  As hoped, F# is comparable to C# when it comes to 
speed.  You have the same flexibility to link with well optimized code.  The inline generics are truly 
magical: same IL in the linked DLLs, but the functions expand to specialized fast code when you instantiate
them.  Compromises between intuitive code and efficient code still need to be made. I found that “for” loop, 
“tail recursive” loop, or Parallel.For with ThreadLocal loops, are faster than a succession of piped IEnumerables 
(seq in F#).  F# does not hamper one’s ability to write ugly fast code.  Rest assured.
 
Several people in the machine learning group in Microsoft Research have switched to F# for the reasons 
above.  The world is slowly moving toward functional programming with good justifications: the code is 
cleaner and easier to debug in a distributed environment.  Among the available functional languages, F# 
is a compelling option.

<div class="keywords">advertising, machine learning, data science, statistics, predication</div>

<a id="lemball-1" href="#">&nbsp;</a>
---



> The results speak for themselves.

1. **Matt Ball**
2. Liz Earle Beauty Co. Ltd
3. [source](http://saxonmatt.co.uk/2013/04/adopting-fsharp-part-ii.html), [permalink](#lemball-1)

As a business we actively seek improvement every single day. This is the same for our IT systems, 
so we have been searching for a means to do that in our in-house software systems.
 
The F# type system has allowed us to do this - by eliminating null references, increasing type 
safety and creating rich domain models that help us express hard-and-fast business rules in a 
way that we can really lean on the compiler; while actually reducing our total lines of code 
(and noise!). Doing so has reduced both our requirement for expensive bug hunts in our 
production systems, and the overall cost of maintaining unnecessary code complexity.
 
We have been evaluating F# for a year now, and have components in our production systems that 
have been bug-free since deployment. The results speak for themselves.
<div class="keywords">retail, e-commerce, ETL, web services, soa, correctness</div>

<a id="emea" href="#">&nbsp;</a>
---

> ...we have decided to use F# as our functional language to have automatic integration with rest of the system...

1. EMEA-based Security Solutions Company
2. [permalink](#emea)

We develop security product to protect critical infrastructure (e.g. Oil Refinery, Airport, etc) for countries across 
the globe.... In core of our product there are prediction algorithms. We use different modeling and theorems 
(Monte Carlo, Action, etc) to implement the prediction components. ... Since we are rewriting our next generation product 
using .NET, we have decided to use F# as functional language to  have automatic integration with rest of the system. ... We 
also have advanced machine learning components (Artificial Intelligence) and functional languages are the 
best fit to write AI stuff. We are planning to use F# as the primary programming language in this 
area because of its interoperability with .NET. 
<div class="keywords">security, integration</div>

<a id="financial-services-1" href="#">&nbsp;</a>
---

> With its new tools, the bank can speed development by 50 percent or more, improve quality, and reduce costs.

1. **Large Financial Services Firm, Europe**
2. [source](http://www.microsoft.com/casestudies/Case_Study_Detail.aspx?casestudyid=4000006794), [permalink](#financial-services-1)

A large financial services firm in Europe sought new development tools that could cut costs, boost productivity, 
and improve the quality of its mathematical models. To address its needs, the bank deployed F#, the 
.NET Framework, and Visual Studio. It will soon upgrade to Visual Studio 2010 and then integrated 
F#. With its new tools, the bank can speed development by 50 percent or more, improve quality, and reduce costs.
<div class="keywords">financial services, financial modelling, derivatives, fixed income</div>

<a id="boston-based-company" href="#">&nbsp;</a>
---

> F# encourages Reason Driven Development that leads to virtually bug-free code

1. **Boston-based Financial Services Firm, Fixed Income**
2. [permalink](#boston-based-company)

We are using F# because it considerably increases speed of software development which is crucial 
for a small company with limited development resources.  The most enjoyable feature of this language 
is that the developer can reason about the code instead of relying only on unit tests. 
I would say the language encourages Reason Driven Development methodology which leads to 
virtually bug-free code.  F# as strongly typed functional language ideally fits for tasks our 
software solves – Fixed Income securities trading optimization. It is also very important that 
F# computation engine could be seamlessly integrated with other parts of .NET-based software product. 
<div class="keywords">fixed income, trading, optimization, financial services</div>

<a id="early-warning-1" href="#">&nbsp;</a>
---

> At a major Investment Bank, we used F# to build an Early Warning Indicator System for Liquidity Risk
 
1. **Stephen Channell**
2. Cepheis Ltd 
3. [Case Study](http://docs.cepheis.com/present/Early%20Warning%20Indicators.pdf), [permalink](#early-warning-1)

Early Warning Indicators is a standalone dashboard application to monitor real-time market 
movements and highlight potential risk for further analysis. EWI subscribed to real-time equity, 
Forex and commodity prices and needed to calculate Red/Amber/Green status in real-time for 
tolerance breaches and to generate dashboard reports as needed.
 
The business wanted the flexibility to define formulas using Excel expressions, but spreadsheet
components could not cope with the data-rate without conflation and management didn’t want a 
solution that relied on an Excel template and IT change control to add new indicators.
 
F# was chosen for development productivity, performance of a cell framework implemented using 
computation expressions; ease with which Excel expressions could be parsed as a DSL and .NET 
integration with QALib, Market and timer-series data.
 
Post implementation review highlighted that (given resource and time constraints) functionality 
would have been sacrificed without F# and its associated tooling.
 
<a id="london-based-company" href="#">&nbsp;</a>

----

> I keep being surprised by how compact and readable F# is...

1. **London-Based Asset Management Company**
2. [permalink](#london-based-company)

We have set up a complete risk management system that combines several data sources, presents them in a ... 
WPF user interface, and does a LOT of calculation behind the scenes. When the calculation 
requires a proper algorithm (i.e. anything that is more complex than a simple for loop), 
our choice has been F#. I have to say I keep being surprised by how compact it is and, nonetheless, 
how readable it is even when I'm reading code that I hadn't looked at or thought about for six months.
<div class="keywords">data, analysis, calculation, financial services, derivatives</div>

<a id="cme-1" href="#">&nbsp;</a>
---

> The efficient use of functional programming throughout the R&amp;D cycle helped make the cycle faster and more efficient.

1. Moody Hadi (CME Group)
2. [source](http://stevanovichcenter.uchicago.edu/conferences/fp/Program.html), [permalink](#cme-1)

The credit markets have varying pockets of liquidity. Market participants would like to understand how the 
liquidity of their set of entities changes relative to the overall market. A liquidity scoring model is 
needed to provide these metrics across the entire CDS universe. Functional programming and specifically 
F# was used  in order to provide the market with a fast and accurate solution. ... The research and development cycle was made faster and more efficient by the effective use of 
functional programming. 

The efficient use of functional programming throughout the R&amp;D cycle helped make the cycle faster and more efficient.
Less time was spent on translating requirements, miscommunications etc and more on producing a fast and accurate solution quickly.

Since programmers can understand your quant code they can focus on their core competency – developing fast and reliable production code.
The development exercise becomes catered towards optimization, performance tuning and error handling (i.e. making the code reliable)
Functionality is not lost from the prototype due to miscommunication or rather crude documentation/requirements, which saves time in testing.
Mass regression testing is easy with precise precision level differences between the prototype and the production system.

<a id="julien-laugel-1" href="#">&nbsp;</a>
---

> F# allows you to move smoothly in your programming style

1. **Julien Laugel**, eurostocks.com
2. [source](http://www.slideshare.net/lgayowski/taking-functional-programming-into-the-mainstream-eclipse-summit-europe-2009), [permalink](#julien-laugel-1)

I've been coding in F# lately, for a production task. F# allows you to move smoothly in your 
programming style... I start with pure functional code, shift slightly towards an object-oriented style, 
and in production code, I sometimes have to do some imperative programming. I can start with a pure idea, and 
still finish my project with realistic code. You're never disappointed in any phase of the project!
<div class="keywords">imperative, functional, financial services, portfolio analysis</div>

<a id="simon-cousins-2" href="#">&nbsp;</a>
---

> I have now delivered three business critical projects written in F#. I am still waiting for the first bug to come in.

1. **UK-based Power Company**
2. Simon Cousins
2. [source](http://www.simontylercousins.net/journal/2013/2/22/does-the-language-you-choose-make-a-difference.html), [permalink](#simon-cousins-2)

I am both a C# dev and an F# dev. I can only offer subjective anecdotal evidence based 
on my experience of delivering projects in both languages (I am too busy delivering 
software to do anything else). 
 
That said, the one stat in the summary that I find most compelling is the defect rate. 
I have now delivered three business critical projects written in F#. I am still waiting 
for the first bug to come in. This is not the case with the C# projects I have delivered. 
I will continue to monitor and report on this. It might be that I am just on a lucky streak, 
but I suspect that the clarity and concision of F# code contributes greatly to its correctness.
<div class="keywords">energy, extract, transform, load, ETL</div>

<a id="advertisement-rating-and-ranking-at-microsoft" href="#">&nbsp;</a>
---

> Around 95% of the code in these projects has been developed in F#

1. Anton Schwaighofer, **Microsoft**
2. bing Ads Ranking Allocation and Pricing
3. [source](http://research.microsoft.com/en-us/events/2012summerschool/kenjifsharpfphdsummerschool2012new.pdf), [permalink](#advertisement-rating-and-ranking-at-microsoft)

Around 95% of the code in these projects has been developed in F#. F# allowed for rapid development 
of prototypes, and thus also rapid verification or falsification of the underlying mathematical models.
Complex algorithms, for example to compute Nash equilibria in game theory, can be expressed 
succinctly.  Units of measure reduced the chance of errors dramatically: 
Prices, probabilities, derivatives, etc. can already be kept apart at compile time.
<div class="keywords">advertising, ranking, rating, machine learning, statistics</div>

<a id="microsoft-quantum-1" href="#">&nbsp;</a>
---

> F# is central to Microsoft’s quantum algorithm research

1. **Dave Wecker**
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

<a id="byron-cook-1" href="#">&nbsp;</a>
---

> F# is the night vision goggles I need when I go into the dark and attempt to solve previously unsolved problems.  

1. [**Professor Byron Cook**](http://research.microsoft.com/en-us/people/bycook/)
2. Microsoft, [permalink](#byron-cook-1)

I’m one of the first users of F#, since 2004. In my work (e.g. SLAM, Terminator, Zapato, T2, etc)
I find that F# is the night vision goggles I need when I go into the dark and attempt to solve 
previously unsolved problems.  Everything becomes simple and clear when expressed in F#.  
<div class="keywords">verification, algorithms, analysis, problem solving</div>

<a id="andrew-phillips-1" href="#">&nbsp;</a>
---

> F# will continue to be our language of choice for scientific computing.

1. [**Dr. Andrew Phillips**](http://research.microsoft.com/biology)
2. Head of Bio Computation Group
3. Microsoft Research, [permalink](#andrew-phillips-1)

I lead the Biological Computation group at Microsoft Research, where we are developing methods and
software for [modelling and analysis of biological systems](http://research.microsoft.com/biology). 
We have been using F# in our group for the past 7 years, and it's the language of choice for all 
of our software development. In particular it forms the basis of our software for programming 
[computational circuits made of DNA](http://research.microsoft.com/dna), for programming 
[genetic devices that operate inside cells](http://research.microsoft.com/gec), and for programming 
[complex biological processes in a modular way](http://research.microsoft.com/spim). 

The functional data structures and static type-checking that F# provides are ideally suited for developing 
these domain-specific languages, and the Visual Studio integration is superb for debugging 
and source control. The integration with .Net is seamless, and allows us to incorporate 
efficient numerical and visualisation libraries written in C#. It also allows us to 
take advantage of the full suite of .Net UI components. 

Our languages are specified with a formal syntax and semantics, which are rigorously 
analysed prior to their implementation. Programming in a functional language like F# brings the implementation much closer to the 
formal specification, which is important for ensuring accurate simulation and 
probabilistic analysis. Correct implementation of the semantics is critical, since even 
small coding errors can give rise to divergent predictions, which can in turn compromise 
biological experiments. F# is a great language for writing clean, concise code, which is 
statically typed within a professional development environment that supports a wealth of 
libraries. It will continue to be our language of choice for scientific computing.
<div class="keywords">biology, modelling, algorithms, analysis, DNA computing, correct, scientific computing</div>

<a id="miccrosoft-engineering-1" href="#">&nbsp;</a>
---

> In our engineering group at Microsoft we use F# for several projects

1. Microsoft Engineering Team
2. [permalink](#microsoft-engineering-1)

In our internal engineering group at Microsoft, F# is used for several important tools:
*  analyzing feedback on the web to look for compatibility-related issues, 
*  a static code analyzer to detect compatibility regressions in a product,
*  a delta-debugging tool to help root cause regression analysis in product builds.
<div class="keywords">tools, engineering, debugging, builds, static analysis</div>


<a id="michael-hansen" href="#">&nbsp;</a>
---

> The simple, well-designed and powerful core of the language was perfect for introducing the fundamental concepts of functional programming.

1. [**Michael R. Hansen**](http://www2.imm.dtu.dk/~mire)
2. Associate Professor, Technical University of Denmark
3. [permalink](#michael-hansen)

Producing an [F#-based book](http://www.compute.dtu.dk/~mire/FSharpBook) on functional programming has been a fantastic experience.

Using this material in an [F#-based course](http://www.compute.dtu.dk/courses/02157)
introducing the fundamental concepts of functional programming has
been a delightful experience as well. The simple,
well-designed, yet powerful, core of the language was perfect for
that purpose and, to our surprise, the transition from using SML
to using F# actually made the tooling easier for students no
matter which platforms they used.

Furthermore, F# with it rich runtime environment has proved to be
an excellent programming platform in research applications and in
a more advanced course aiming at showing the role of functional
programming in a broad variety of applications ranging from
computer science applications to more real-life applications. In
the first version of this course, given together with Anh-Dung Phan,
the students completed three projects in three weeks: One being an
interpreter for a rich imperative programming language,
another being implementation, application and analysis of a
functional pearl, and the last being a curriculum planning system
for studies at the Technical University of Denmark.

<a id="hans-rischel" href="#">&nbsp;</a>
---

> Solving a number of programming problems using the language convinced me of the supreme qualities of F#

1. **Hans Rischel**
2. Former teacher of computer science at the Technical University of Denmark
3. [permalink](#hans-rischel)

I was approached by my former colleague Michael (Michael R. Hansen) in autumn 
2010 where he proposed that we should write a new textbook on functional 
programming - now using the F# programming language. To begin with I was quite 
sceptical about using a programming language appearing as part of a Microsoft 
program package. Solving a number of programming problems using the language 
convinced me, however, of the supreme qualities of F# - and we embarked on 
the project of getting acquainted with F# and writing the textbook. 

Michael and I spent considerable time solving traditional programming 
problems in F#. A combination of functional and imperative F# with an 
occasional pinch of OO gives a very pleasing platform for program 
development - once you have found your way through the wilderness of MSDN 
documentation (newcomers to the MSDN world may benefit from the
[keyword index](http://www.compute.dtu.dk/~mire/FSharpBook/keywordindex.html)
to the MSDN library documentation found on the [web-site of the book](http://www.compute.dtu.dk/~mire/FSharpBook)). 
All of Chapter 10 and part of Chapter 11 present program examples using 
this programming style.

Computation expressions look esoteric to begin with, but they are actually 
rather useful. We spent much time 
trying to get this concept down to earth, with the purpose of making it accessible 
to simple-minded people like ourselves. The reader may judge how far we 
succeeded by studying Chapter 12 of the book. 

Writing this [textbook](http://www.cambridge.org/9781107019027) with Michael has been an exciting experience.

<a id="dsyme-ad-predict-1" href="#">&nbsp;</a>
---

> F#'s powerful type inference means less typing, more thinking

1. **Don Syme**
2. Principal Researcher, Microsoft
3. Eclipse Summit Europe 2009, [source](http://www.slideshare.net/lgayowski/taking-functional-programming-into-the-mainstream-eclipse-summit-europe-2009), slide 49
4. [permalink](#dsyme-ad-predict-1)

F# was used on Microsoft's AdPredict project for adCenter. This was a 4 week project with 4 machine learning experts involving a model 
with 100million probabilistic variables and processing 6TB of training data in real-time. 2 weeks of CPU time 
were used during training. Benefits included  **Quick Coding** - F#'s powerful type inference means less typing, more thinking, 
**Agile Coding** - Type-inferred code is easily refactored,
**Scripting**  - "Hands-on" exploration,
**Performance** - Immediate scaling to massive data sets,
**Memory-Faithful** - Mega-data structures on 16GB machines,
**Succinctness** - Live in the domain, not the language,
**Symbolic** - Schema compilation and "Schedules" and **.NET Integration** - Especially Excel, SQL Server
<div class="keywords">integration, machine learning, advertising, prediction</div>

<a id="path-of-go" href="#">&nbsp;</a>
---

> ...The AI is implemented in F#...

1. **Microsoft**, **Path of Go**
2. [video source](http://www.youtube.com/watch?v=bb4igmbv_Oc), [permalink](#path-of-go)

Path of Go is powered by three technologies...: an AI capable of playing Go, the F# language, 
and TrueSkill to match online players. The AI is implemented in F# and meets the challenge of 
running efficiently in the .net compact framework on Xbox 360. This game places you in a number of 
visually stunning 3D scenes. It was fully developed in managed code using the XNA environment.
<div class="keywords">artificial intelligence, statistics, machine learning, TrueSkill</div>

<a id="tabbles-1" href="#">&nbsp;</a>
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

<a id="horspool-1" href="#">&nbsp;</a>
---

> When F# is combined with Visual Studio... productivity goes through the roof!

1. [**Prof Nigel Horspool**](http://webhome.cs.uvic.ca/~nigelh/)
2. University of Victoria, Canada
3. [source](http://web.archive.org/web/20120410193300/http://www.tryfsharp.org/Experts.aspx), [permalink](#horspool-1)

F# programs tend to be much shorter than their equivalents in other languages. The 
fewer lines of code required, of course, the higher the productivity. When F# is combined 
with Visual Studio, which provides help with remembering the methods attached to different 
data types and how to use those methods, productivity goes through the roof!
<div class="keywords">teaching, research</div>

<a id="peter-sestoft-1" href="#">&nbsp;</a>
---

> ...That's the reason we have chosen F# for our undergraduate functional programming class...

1. **Prof. Peter Sestoft**
2. [IT University of Copenhagen](http://www.itu.dk/people/sestoft/)
3. [permalink](#peter-sestoft-1)

F# has a beautiful, simple but expressive language at its core, and many powerful features 
built around that core language.  It can draw on all the power of the .NET libraries, 
and runs on Windows, MacOS and Linux.  That's the reason we have chosen F# for our 
undergraduate functional programming class as well as our 
undergraduate programming language class [(link)](http://www.itu.dk/people/sestoft/plc/)
<div class="keywords">teching, research, cross-platform</div>

<a id="susan-eisenbach-1" href="#">&nbsp;</a>
---

> F#...levels the playing field between beginners and experienced programmers.

1. **Prof. Susan Eisenbach**
2. Imperial College, United Kingdom 
3. [source](http://web.archive.org/web/20120410193300/http://www.tryfsharp.org/Experts.aspx), [permalink](#susan-eisenbach-1)

Functional languages are ideal for teaching clear thinking, for solving problems 
amenable to code solutions and it levels the playing field between beginners and 
experienced programmers. The first programming language taught has a substantial 
influence on what language students use when they have a free choice. F#, once it 
is platform independent, has the potential to become the first programming language. 
<div class="keywords">teaching, research, cross-platform</div>

<a id="david-walker-1" href="#">&nbsp;</a>
---

> F#...made it trivial... 

1. **Prof David Walker**
2. Princeton University
3. [source](http://web.archive.org/web/20120410193300/http://www.tryfsharp.org/Experts.aspx), [permalink](#david-walker-1)

Our graduate course on Parallelism this Fall is full, even though it assumes no 
experience with functional programming or F#. The students are preparing the courseware 
themselves, and one of the topics we are studying is functional reactive programming (FRP) 
with continuous, time-varying behaviors. F#, with its rich graphics libraries, made it 
trivial to construct a super-fun assignment involving purely functional and interactive 
animation of a mock solar system.
<div class="keywords">teaching, research, cross-platform</div>

<a id="uni-pisa-1" href="#">&nbsp;</a>
---

> We recommend teaching F# because it is an extraordinary and flexible tool for teaching different areas of Computer Science

1. **Antonio Cisternino**
2. University of Pisa, Italy
3. [permalink](#uni-pisa-1)

At the University of Pisa we use F# for teaching UI programming, a fundamental course in the third year curriculum. 
In 2014 two more courses (Programming I & II) will use F# and Try F#. 

We use F# for teaching because it fits teaching both fundamentals and technology thanks to rich programming 
environment and libraries to access all system resources (such as UIs). Moreover, F# feels like a dynamic 
language thanks to F# interactive even if it is a statically typed language.  Our students use F# on Windows, 
Mac and Linux. Try F# is a particularly valuable tool for teaching because it has a quite sophisticated 
editor with interactive evaluation and the ability of sharing saved files with students.

I’ve also used F# for teaching programming for scientists at Scuola Normale Superiore, a PhD 
course at ITU Copenhagen and to graduate students in biomedical engineering. 

We recommend teaching F# because it is an extraordinary and flexible tool for teaching different areas of 
Computer Science. The language is rich and its functional nature allows to easily define the appropriate 
subset for teaching particular concepts. I use it to teach entire classes by typing code and evaluate interactively 
discussing the results of a single evaluation. It is also a great tool for teaching programming to scientists 
and engineers: I found that its mathematical roots in lambda calculus are more readily grasped by 
non-programmers, and interactive evaluation recalls environments such as Matlab and Mathematica very 
popular in these communities.

<a id="simao-sousa-1" href="#">&nbsp;</a>
---

> F# is very popular among my students for the programming projects

1. **Simão Sousa**
2. University of Beira Interior, Portugal
3. [permalink](#simao-sousa-1)

I teach and use OCaml and F# in my lectures (Theory of Computation, Formal Languages and Compiler 
Design, Formal Methods, Applied Cryptography), and F# is very popular among my students for the 
programming projects.  Most of the students that are supervised by me (undergraduate, master 
but also PhD) use F#  as the underlying programming language. This is even more the case now since
part of our research directions includes working on cloud/distributed systems. 

F# and its programming environment  leverage with no doubt the ability and the productivity of my 
students. This is, in my opinion,  for two main reasons. First, F# allows the student, but also the 
researcher like me,  to focus on the key aspects of his creation, while, secondly,  enhancing  
technologically the work done in a so remarkable and facilitated way.  Once drawn in paper and pencil, 
an algorithm is naturally implemented in F# and easily deployed in whatever is its execution context.

I am  definitively a strong believer of F# and amazed by the language and its community.
<div class="keywords">teaching, research, cross-platform</div>

<a id="atalasoft" href="#">&nbsp;</a>
---

> I evaluated F# and it and found that for certain tasks it was better 
> than C# in terms of performance while maintaining suitable readability

1. **Atalasoft**
2. [source](http://www.atalasoft.com/cs/blogs/stevehawley/archive/2011/08/01/building-pure-managed-dotimage.aspx), [permalink](#atalasoft)

I evaluated F# and it and found that for certain tasks it was better than C# in terms of performance 
while maintaining suitable readability and for certain tasks, it leant itself better to certain 
algorithms (OctTree based color quantization stands out). ...we were able to heavily leverage inline functions in F#......Since each of 
these are inlines, the F# optimizer can actually do something useful with the code. By using F#, we were able to address this cost by using 
inlining, code profiling, scanline caching, memoization and other techniques. In many cases we ended up with 
code that ran in equivalent time to C++ code or in some cases faster.
<div class="keywords">algorithms, performance, immage processing</div>

<a id="15below-1" href="#">&nbsp;</a>
---

> We would recommend F# as an additional tool in the kit of any company building software on the .NET stack.

1. **Michael Newton**, Senior Developer
2. [15below Ltd](http://15below.com), [permalink](#15below-1)

Historically, our code base has been written in a mix of C# and VB.net. F#'s excellent interoperability 
with the rest of .NET allows us to use it for components where it's particular strength's shine without
having to discard or rewrite our existing code.

Whether it's driving the build and continuous integration system (due to scripting being a first 
class citizen in the F# world) or writing rock solid infrastructure components (due to the easy 
use of functional paradigms via features such as computational expressions, type inference and 
discriminated unions) we have found our F# code to be concise, easy to write and reliable to use. 
It is a perfect fit for many components within our messaging based architecture.

We would recommend it as an additional tool in the kit of any company building software on the .NET stack.

<a id="forensic-software-1" href="#">&nbsp;</a>
---

> This software provides the user with maximum flexibility to move 
> quickly through multiple images

1. [**Forensic Software**](http://www.forensic-software.com/)
2. [permalink](#forensic-software-1)

Forensic Comparison Software is the ideal tool for displaying 
two digital images, side by side, for comparison purposes. This software provides the user with maximum 
flexibility to move quickly through multiple images, in a manner that replaces the intensive manual comparison 
of hard copy photographs. Focusing on the individual's needs, Forensic Comparison Software provides many 
intuitive and easy to use features for enhancing digital images.
<div class="keywords">security, algorithms</div>

<a id="bohdan-szymanik-1" href="#">&nbsp;</a>
---

> Bohdan ... shows F#'s use for performing aggregations over large datasets, taking advantage of cpu and io parallelism

1. **Bohdan Szymanik**
2. [source](http://dnufba.preview.intergen.net.nz/Lists/Events%20Calendar/DispForm.aspx?ID=279), [permalink](#bohdan-szymanik-1)

Bohdan Szymanik, CTO at Kiwibank, is keen to show how he's been using F# for analysis tasks 
within the bank. He'll provide an intro to the language then show its use for performing 
aggregations over large datasets, taking advantage of cpu and io parallelism, and data 
presentation through charting and image generation.
<div class="keywords">financial services, data, analysis</div>

<a id="vitor-pereira" href="#">&nbsp;</a>
---

> I am using F# to develop an API for data encryption using fully homomorphic encryption.

1. **Vitor Pereira**
2. [permalink](#vitor-pereira)

I am currently using F# to develop my undergraduate final project. The project consists in developing
an Application Programming Interface that allows one to encrypt data using fully homomorphic encryption
and I found in F# the ideal programming language to develop it.

Besides all the benefits of the functional paradigm for this type of work, F# interoperability with
the .NET platform allows the construction of powerful implementations that other functional languages
do not allow so easily.

I really hope that, in the future, I keep working in Cryptography using F# as the main programming 
language for my projects. I am also preparing a hands-on presentation about F# and Cryptography to 
be presented at an event in Microsoft Portugal, which I will surely enjoy!
<div class="keywords">security, cryptography, student, academia</div>






<a id="giuseppe-maggiore" href="#">&nbsp;</a>
---


> I can tell you, F# really saved us a ton of effort.

1. **Giuseppe Maggiore**
2. [permalink](#giuseppe-maggiore), [source](http://www.reddit.com/r/programming/comments/1h7xpz/announcing_a_prerelease_of_f_31_and_the_visual_f/carwdwa)

I am the lead developer of [Galaxy Wars](http://www.galaxywars.co.uk/), and I can tell you, F# really saved us a ton of effort.
Monadic coroutines alone I believe are the reason why we manage to ship the thing on time...

<div class="keywords">games</div>


<a id="namigop" href="#">&nbsp;</a>
---

> I am using F# to develop an API for data encryption using fully homomorphic encryption.

1. **namigop** (Erik Araojo)
2. [permalink](#namigop), [source](http://www.reddit.com/r/programming/comments/1h7xpz/announcing_a_prerelease_of_f_31_and_the_visual_f/cart1dq)

I've written two commercial apps in F#, WcfStorm.Rest and WcfStorm.Server.  
The UI part was in C# and the library part was in F#. In my experience it is fun language to code in. 
<div class="keywords">security, cryptography, student, academia</div>


<a id="mario-pereira" href="#">&nbsp;</a>
---

> everyone gets really amazed when they try F# and experience its imense expressive power

1. **Mário Pereira**
2. Microsoft Student Partner (MSP)
3. Faculty of Sciences, University of Oporto
2. [permalink](#mario-pereira)

I have been a Microsoft Student Partner (MSP) for three years, which
offered me the opportunity to be in touch with most portuguese
faculties and their students, getting the change to be a bit of an
evangelist for Microsoft technologies. I chose to spent my MSP
experience giving introductory seminars to F# and functional
programming using F#. So far, I have given these presentations on most
portuguese faculties and also at Microsoft portuguese headquarters. The
result is always the same: everyone gets really amazed when they try
F# and experience its imense expressive power, its delightful
syntax and realize they can do functional programming (which is
oftenly taken as something boring and complicated) on a familiar and
confortable environment. Currently, along with a fellow portuguese
MSP, (following the success of previous presentations and in response 
to the many requests for new sessions on F#) I'm preparing an hands-on session on the use of F# for
Cryptography, to be presented on a future event at Microsoft Portugal.

Personally, F# offers me a solid and trustable ground to develop
reliable and complex applications on a confortable and succinct way,
impossible to achieve with other languages and paradigms. With no
doubt, I can say I'm a huge fan of F# and I'm always eager to get in
touch with every new feature the language has to offer.

<a id="dario" href="#">&nbsp;</a>
---

> ...your code is less error-prone...

1. **Dario**
2. [source](http://stackoverflow.com/a/952443), [permalink](#dario)

You can formulate many problems much easier, closer to their definition and more concise in a 
functional programming language like F# and your code is less error-prone (immutability, more powerful type system, intuitive recurive algorithms). 
You can code what you mean instead of what the computer wants you to say ;-)  Furthermore you 
can have F# and C# together in one solution, so you can combine the benefits of both 
languages and use them where they're needed.
<div class="keywords">domain modeling, immutability</div>

<a id="antonio-hayley-1" href="#">&nbsp;</a>
---

> I'd recommend F#... learning another language is one way to become a better programmer.

1. **Antonio Hayley**
2. [source](http://stackoverflow.com/a/179357), [permalink](#antonio-hayley-1)

I'd recommend F# to a die hard C# developer just because learning another language 
is one way a programmer can get out of a local maxima and 
become a better programmer. And F# isn't just a different set of semantics on top of 
the same syntax as most imperative languages are, 
it's a totally different programming style. All the more to expand the capabilities 
and understanding of a programmer.
<div class="keywords">learning, imperative, functional</div>

<a id="microsoft-narwhal-1" href="#">&nbsp;</a>
---


> ...We use F# in oceanographic research to connect multiple visualizations together in time and space...

1. **Rob Fatland**, Microsoft Research
2. [permalink](#microsoft-narwhal-1)

We use F# in oceanographic research to connect multiple visualizations together in time and space, which is map-plane location and depth. We began by building our Narwhal Developers Library for [Layerscape](http://layerscape.org) 
in C# with emphasis on visualizing flow lines and understanding drift experiment data. These data are quite complex, involving physical ocean state and measurement of microbial metabolic processes, consolidating remote sensing and passive drifters, and adding to all this current measurements with the tracks of autonomous robots. Our technical term for the visualization challenge is ‘horrible’. 

To cope with the horrible we began adding F# scripts; and this has been extremely productive, particularly in morphing ideas about data exploration into real tools quickly. Our most interesting achievement to date is to wire a chart into a 4D visual environment. The set-up is like this: The scientist sees two views of the data: First color coded structure in a curtain plot of time versus depth (chlorophyll coded as color for example), and second this same data time-boxed in the dynamic Worldwide Telescope (WWT) visualization engine. F# is used to wire them together: Left click (and drag) in the chart to scroll the WWT clock back and forth.  Right-click + drag in the chart to select a subset of the data which is then used to construct a new (small) advection visualization. Because the selected pieces are small and chosen interactively we get around the horrible problem of seeing everything at once.  It is like seeing an entire forest and making all but a few curious trees vanish. So F# has been a great way to make rapid progress, and fun to learn as well.  

<div class="keywords">visualiztion; astronomy; oceanographic research; Microsoft</div>

<a id="jared-parsons-1" href="#">&nbsp;</a>
---

> ...I have to say I love the language...

1. **Jared Parsons**
2. [source](http://stackoverflow.com/a/2785476), [permalink](#jared-parsons-1)

Over the last 6 or so months, I've been working on a Vim emulation layer. This is the first major project I've ever done with F# 
and I have to say I love the language. In many ways I used this project as a method of learning 
F# (and this learning curve is very much evident if you look through the history of the project). 
What I find the most amazing about F# is just how concise of a language it is. The Vim engine comprises 
the bulk of the logic yet it only comprises 30% of the overall code base.
<div class="keywords">learning, conciseness</div>

<a id="dmitry-soshnikov-1" href="#">&nbsp;</a>
---

> There is a noticeable interest in the developer community in Russia towards F#.

1. **Dmitry Soshnikov**
2. Associate Professor, Moscow Aviation Technical University
2. [permalink](#dmitry-soshnikov-1)

I do some samples in F# for the lectures and the book, but all that is within a single-user 
VS 2010 Pro installation. Right now we have a set of slides on functional programming with 
F# in Russian in the curriculum repository, and the video-course of functional programming 
using F# available in the largest Russian Internet-University (intuit.ru). The course 
is being taught in 2 universities. There is a noticeable interest in the developer community in 
Russia towards F#.

<a id="darren-platt-1" href="#">&nbsp;</a>
---

> F# rocks... building out various algorithms for DNA processing here and 
> it's like a drug

1. **Darren Platt**
2. Amyris Biotechnology
3. [source](http://research.microsoft.com/en-us/events/2012summerschool/kenjifsharpfphdsummerschool2012new.pdf), [permalink](#darren-platt-1)

With F#... we have written a complete genome re-sequencing pipeline with interface, algorithms, 
reporting in ~5K lines and it has been incredibly reliable, fast  and easy to maintain.

F# rocks - we're building out various algorithms for DNA processing here and it's like a drug.  Just 
implemented a suffix tree in 150 lines that can index 200,000 bases a second ;)    We have probably 
10-20K lines of code for many scientific applications ranging from a full genome sequencing 
pipeline that reconstructs and annotated yeast strains, to simulators for various processes 
and design tools for building DNA sequences/constructs.  There are lab located apps that 
grab robot log files and move them to databases and a tool for viewing a huge collection of DNA sequencing data.

F# has been phenomenally useful.  I would be writing a lot of this in Python otherwise and F# is more
robust, 20x - 100x faster to run and for anything but the most trivial programs, faster to develop.

The UI work is especially gratifying, because state of the art for a lot of genomic data display 
is still PNG images embedded in JavaScript and with F# I can render half a million data points on 
a web page without jumping through hoops.

With Units of Measure I started labelling the coordinates as one or zero based and immediately found a bug where I'd casually mixed the two systems. Yay F#!
<div class="keywords">biotechnology, units of measure, bioinformatics</div>

<a id="robert-boissy" href="#">&nbsp;</a>
---

> Many attributes of the F# programming language make it an ideal choice 
> for ...the exponentially growing volumes of molecular analysis data

1. **Dr. Robert Boissy**
2. Assistant Professor
3. University of Nebraska Medical Center
4. [permalink](#robert-boissy)

I am involved in bioinformatics and computational genomics as a faculty member at the 
University of Nebraska Medical Center (UNMC).  In an academic medical center like UNMC there 
are heavy demands on my time and a wide range of different types of research projects that 
I can end up working on.  I have used the F# programming language on both the .NET and Mono 
frameworks for several of these projects, including one that involved a very productive 
collaboration with IntelliFactory and the use of WebSharper (http://www.websharper.com/home).  
You can visit the resulting [web site](http://app1.unmc.edu/fgx) and read the freely 
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

<a id="reminder-hero" href="#">&nbsp;</a>
---

> The power and flexibility of the language lets us ship features faster, with fewer bugs.

1. **Marty Dill**
2. [**Reminder Hero**](http://reminderhero.com)
3. [permalink](#reminder-hero)

All of our back-end data processing and parsing is done in F#. The power and flexibility of the
language lets us ship features faster, with fewer bugs. Regressions are virtually nonexistent, and the
functional nature of the language makes it easy to ensure that our code is testable.

Our first iterations were written in C#, but after switching to F#, we saw a drastic reduction in code size,
along with an increase in readability. We'll definitely be sticking with F# for all of our future projects.

<div class="keywords">data, parsing, processing, readability</div>

### Additional Case Studies

The following written or recorded case studies describe the benefits of F# for a range of enterprise scenarios:

 * [Banking Firm Speeds Development by 50 Percent](http://www.microsoft.com/casestudies/Case_Study_Detail.aspx?casestudyid=4000006794)
 * [F# for Energy Trading and Energy Portfolio Optimization](http://blogs.msdn.com/b/dsyme/archive/2011/01/12/f-for-energy-trading-and-energy-portfolio-optimization.aspx)
 * [F# Business Intelligence Case Study - XBox Live Trueskill](http://dl.acm.org/citation.cfm?id=1362702.1362709&coll=ACM&dl=ACM&type=series&idx=SERIES824%25E2%2588%2582=series&WantType=Proceedings&title=ICFP)
 * [Insurance Company Improves Time-to-Market with Enhanced Rating Engine](http://www.microsoft.com/casestudies/Case_Study_Detail.aspx?CaseStudyID=4000005226)
 * [F# for Facebook Social Gaming](http://www.dotnetrocks.com/default.aspx?ShowNum=846)



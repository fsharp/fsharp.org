---
id: aviva-flying-frog-1
bullets:
- '**Large insurance company**'
- '[source 1](http://stackoverflow.com/questions/952318/what-are-the-benefits-of-using-c-sharp-vs-f-or-f-vs-c), [source 2](http://www.quora.com/Which-organizations-use-the-F-programming-language-in-a-non-trivial-fashion/answer/Jon-Harrop-1), [permalink](#aviva-flying-frog-1)'
keywords:
- financial services
- insurance
- actuarial
quote: Large insurance company developed an entire pension quote calculator entirely in F# in under 100 days with no prior F# experience at all...
---
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

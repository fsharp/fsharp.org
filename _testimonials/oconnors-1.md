---
id: oconnors-1
bullets:
- Jack Mott
- O'Connor's Online
- '[Case study](https://www.oconnors.com/)'
keywords:
- web application
- caching
- redis
- legal research
- oconnors
- azure
- asp.net
quote: F# was so easy to pick up we went from complete novices to having our code in production in less than a week.
---
As an experiment to evaluate functional programming as a production tool we developed a
new multi level caching system for our website in F#.  Because F# can use existing C#
libaries so easily we were able to proceed rapidly using popular packages such as
StackExchange.Redis and ProtoBuf-Net. In less than a week we had a flexible caching
system in production, complete with an administration page and performance statistics
tracking.

We also found that it was straightforward to use our new F# module from within our
existing C# code, and that the F# code deployed to and ran as an Azure app service
without any special configuration. Adding F# to the code base was completely painless.

The developers on our team are all intrigued by F# and eager to learn more. As well,
we find that at college recruiting events, prospective students are very excited to hear
that we are using a functional language in production

---
id: yan-cui
bullets:
- '**GameSys**'
- Yan Cui
- Lead Server Engineer
- '[source](http://www.dotnetrocks.com/default.aspx?showNum=846), [permalink](#yan-cui)'
keywords:
- gaming
- agents
- cloud
- big data
- scalability
quote: The F# solution offers us an order of magnitude increase in productivty...
---
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

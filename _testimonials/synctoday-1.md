---
id: synctoday-1
bullets:
- '**Sync.Today**'
keywords:
- synchronization
- integration
- startup
quote: '"Speed. I am speed." works for F# like a charm.'
---
We felt our C# Sync.Today 2013 started to become a huge monster with all the C# scripting, hooks etc.
At the same time it was not really providing us with the flexibility we needed to fulfil our customers' requirements.
Instead of just another round of refactoring we decided to start moving to F# with Sync.Today 2015. Since both languages share the same
common CLR, we did not throw everything away. We just started to simplify more and more because the F# code
has much less lines (we had 146831x "{ or }", 56555x "Blank", 2770x "Null checks", 56194x "Comments" and finally
223502 "Useful lines" and now we have 30602 lines with an order of magnitude more features and benefits )
Since we are processing a lot of information, but without complex computations etc., Orleans became the distributed computing library we build the solution on. It is using mixed C# + F# code now, which is perfect for us and allow us to run both on-premise and in Azure.

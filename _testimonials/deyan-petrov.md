---
id: deyan-petrov
bullets:
- '**Deyan Petrov, [5G Pay](https://5gpay.com/)**'
keywords:
- simple
- safe
quote: F# brought correct defaults, simplicity and safety back to our coding
---
A couple of years ago we started a greenfield project with backend (microservices) 100% written in F#. The language allowed/allows us to deliver a lot with a very small team, resulting in a concise and easily maintainable codebase.

We are solely focusing on the basics - functions and records, and shying away from OOP or any other complicated constructs. Among the "exotic" features of F# we use are only a few [computational expressions](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/computation-expressions) - Async, AsyncResult, Result, as well as the [units of measures](https://learn.microsoft.com/en-us/dotnet/fsharp/language-reference/units-of-measure) for strongly-typing GUIDs and other domain attributes. Even Dependency Injections we with straightforward [partial application](https://fsharpforfunandprofit.com/posts/partial-application/) unstead of using the sophisticated Reader monad or similar.

Being a member of the .NET family F# still gives us access to .NET BCL and any (performance) improvements of it, as well as to all 3rd-party libraries written in C# (e.g. Azure SDKs, sftp, email clients and many others).

Onboarding of new team members (usually with C# background) has been pretty easy and quick.

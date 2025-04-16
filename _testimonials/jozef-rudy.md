---
id: jozef-rudy
bullets:
- '**Jozef Rudy, PhD**'
- Founder
- '[CryptoQuant](https://www.cryptoquant.dev)'
keywords:
- startup
- fintech
- trading
- cryptocurrencies
quote: F# is more flexible than C#, yet gives stronger type safety. It allows for fearless refactoring, which is also easier because of naturally less coupled code while at the same time codebase being 40%-size of equivalent c# one.
  
---
I first ventured into F# while working at a US-based startup where one of our servers handling PnL calculations was performing sub-optimally.
I decided to re-write that in F# as a test. I was surprised that without requiring any special libraries (unlike the Python version that relied on pandas and numpy) the F# code was similarly concise yet significantly more performant.

When I started [CryptoQuant](https://cryptoquant.dev), which allows backtesting and live testing of trading strategies on cryptocurrencies, I started writing just the trading rule parser in F#.

The illustration of the first version of the parser can be found on my public git [repo](https://github.com/jozefRudy/trading-rule-parser).
It parses subset of Typescript into F# interpretable AST, which can later be evaluated against data to calculate entry/exit signals.

Because parsing with Fparsec went so well I later gradually migrated entire project into F# (from C#).
The beauty of this approach is that I don't need any specialized F# libraries - I can stay very close to the original (C#) dotnet server, avoiding dependency on specialized F# third-party packages.
I can still use great dotnet server features like background jobs or dependency injection.

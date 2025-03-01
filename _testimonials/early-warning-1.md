---
id: early-warning-1
bullets:
- '**Stephen Channell**'
- 'Cepheis Ltd '
keywords: []
quote: At a major Investment Bank, we used F# to build an Early Warning Indicator System for Liquidity Risk
---
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

    
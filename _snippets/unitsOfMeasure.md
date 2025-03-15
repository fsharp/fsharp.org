---
order: 22
title: UnitsOfMeasure.fs
excerpt_separator: <!--more-->
code: |
    open FSharp.Data.UnitSystems.SI
    
    // Acceleration due to gravity
    let g = 9.81<m/s^2> 

    // The return type is inferred as float<m>
    let distance ( t: float<s> ) =
        0.5 * g * t * t  
    
    let fallDuration = 2.0<s>
    let fallDistance = distance fallDuration
    printfn $"Distance fallen in {fallDuration}s is {fallDistance}m"
---
## Numaric Safety through Units of Measure

F# offers world-class compile-time unit safety without runtime overhead, giving you the power to express your domain in a type-safe way. This is particularly useful in scientific, engineering and financial applications where unit errors can lead to catastrophic results.
<!--more-->
- **Compile-time dimensional safety** catches errors before running, preventing scientific and engineering mistakes
- **Domain-specific units** express quantities that directly reflect your problem space
- **Automatic unit conversions** maintain type safety while handling complex calculations
- **Seamless interoperability** works with normal numeric types when needed
- **Custom unit definitions** let you create your own units and conversions with simple syntax



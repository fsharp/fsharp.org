---
order: 1
title: UnitsOfMeasure.fs
excerpt_separator: <!--more-->
code: |
    [<Measure>] type m  // Meters
    [<Measure>] type s  // Seconds
    
    // Acceleration due to gravity
    let g = 9.81<m/s^2> 

    // The return type is inferred as float<m>
    let distance ( t: float<s> ) =
        0.5 * g * t * t  
    
    let fallDuration = 2.0<s>
    let fallDistance = distance fallDuration
    printfn $"Distance fallen in {fallDuration}s is {fallDistance}m"
---
## Units of Measure

F# offers compile-time unit safety without runtime overhead, enforcing correctness mathematically.
<!--more-->
- **Compile-time dimensional safety** catches errors before running, preventing scientific and engineering mistakes
- **Domain-specific units** express quantities that directly reflect your problem space
- **Automatic unit conversions** maintain type safety while handling complex calculations
- **Seamless interoperability** works with normal numeric types when needed
- **Custom unit definitions** let you create your own units and conversions with simple syntax



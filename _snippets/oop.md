---
order: 10
title: OOP.fs
excerpt_separator: <!--more-->
code: |
    // Interface definition
    type ICalculator =
        abstract Add: x: int -> y: int -> int
        abstract Multiply: x: int -> y: int -> int

    // Class implementation with interface
    type Calculator(precision: int) =
        
        // Interface implementation
        interface ICalculator with
            member _.Add x y = x + y
            member _.Multiply x y = x * y
        
        // Public methods
        member _.Subtract(x, y) = x - y
        
        // Method using property
        member _.RoundToPrecision(value: float) =
            System.Math.Round(value, precision)
            
        // Method with default parameter
        member _.Power(x: float, ?exponent: float) =
            let exp = defaultArg exponent 2.0
            System.Math.Pow(x, exp)
    
    // Object expression (anonymous implementation)
    let quickCalc = 
        { new ICalculator with 
            member _.Add x y = x + y
            member _.Multiply x y = x * y }

    // Type extension - add method to existing type
    type System.Int32 with
        member x.IsEven = x % 2 = 0
---
## Objects Made Simple

F# is **functional first** and **immutable by default**, but it also provides pragmatic support for object programming.
<!--more-->
- **Seamless .NET integration** lets you work with existing .NET libraries and frameworks
- **Rich interface system** allows you to define clear contracts for your components
- **Object expressions** provide lightweight implementation of interfaces without defining full classes
- **Concise member syntax** keeps methods and properties clean and readable
- **Automatic property generation** reduces boilerplate code for data-carrying types
- **Type extensions** let you add methods to existing types without inheritance

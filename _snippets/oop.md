---
order: 11
title: OOP.fs
excerpt_separator: <!--more-->
code: |
    // Interface definition
    type ICalculator =
        abstract Add: x: int -> y: int -> int
        abstract Multiply: x: int -> y: int -> int

    // Class implementation
    type BasicCalculator() =
        interface ICalculator with
            member this.Add x y = x + y
            member this.Multiply x y = x * y
        
        // Class method
        member this.Subtract(x, y) = x - y
        
    // Class with constructor and property
    type ScientificCalculator(precision: int) =
        inherit BasicCalculator()
        
        // Auto-property with getter and setter
        member val Precision = precision with get, set
        
        // Method using property
        member this.RoundToPrecision(value: float) =
            System.Math.Round(value, this.Precision)
            
        // Method with default parameter
        member this.Power(x: float, ?exponent: float) =
            let exp = defaultArg exponent 2.0
            System.Math.Pow(x, exp)
    
    // Type extension - add method to existing type
    type System.Int32 with
        member this.IsEven = this % 2 = 0

    // Demo usage
    let demo() =
        // Object expression (anonymous implementation)
        let quickCalc = 
            { new ICalculator with 
                member _.Add x y = x + y
                member _.Multiply x y = x * y }
        
        // Class instantiation
        let basic = BasicCalculator()
        let scientific = ScientificCalculator(2)
        
        printfn "5 + 3 = %d" (basic.Subtract(5, 3))
        printfn "Is 10 even? %b" (10.IsEven)
        printfn "2.345 rounded = %f" (scientific.RoundToPrecision(2.345))
        printfn "2^3 = %f" (scientific.Power(2.0, 3.0))
---
## Object Oriented Programming Support

F# is **functional first** and **immutable by default**, but it also provides full support for object-oriented programming.
<!--more-->
- **Seamless .NET integration** lets you work with existing .NET libraries and frameworks
- **Rich class system** allows you to build robust object hierarchies with interfaces and inheritance
- **Object expressions** provide lightweight implementation of interfaces without defining full classes
- **Concise member syntax** keeps methods and properties clean and readable
- **Automatic property generation** reduces boilerplate code for data-carrying types
- **Type extensions** let you add methods to existing types without inheritance
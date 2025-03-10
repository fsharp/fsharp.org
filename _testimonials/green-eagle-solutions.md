---
id: green-eagle-solutions
bullets:
- '**Green Eagle Solutions**'
keywords:
- energy
- renewable
- scada
- scripting
- literate programming
quote: F# terse syntax made the final code look really similar to the algorithm we wrote at first
---
At Green Eagle Solutions, we develop control systems for renewable energy plants. Thus, it's crucial for us to test our software in a real-time environment where are all the other actors (protocols, weather conditions, legacy software) come into play.

Beforehand, we used Python to quickly build simulators to test our components. With F# we have now all the advantages of a dynamic language, while keeping the static typing safety we are used to. The fact that we don't need to leave Visual Studio and being able to seamlessly use all the APIs we have developed in C# are also a big plus.

We have also started to use F# directly in our components to implementing the core logic, while leaving C# to networking tasks. We've taking advantage of this language mix to create a dependency injector which recompiles the F# logic at runtime whenever the script changes for quick development iterations, but loads a precompiled .dll when deployed in production. The double nature of F# as a scripting and a compiled language really shines here.

F#'s terse syntax made the final code look really similar to the algorithm we wrote at first in formal language. Also, we've come to really appreciate the numerous metaprogramming libraries in the F# ecosystem: we particularly like FSharp.Formatting and have started to adopt the literate programming style to integrate as much as possible the code and the documentation and prevent them losing sync.
    
---
id: atalasoft
bullets:
- '**Atalasoft**'
- '[source](http://www.atalasoft.com/cs/blogs/stevehawley/archive/2011/08/01/building-pure-managed-dotimage.aspx), [permalink](#atalasoft)'
keywords:
- algorithms
- performance
- immage processing
quote: I evaluated F# and found that for certain tasks it was better than C# in terms of performance while maintaining suitable readability
---
I evaluated F# and found that for certain tasks it was better than C# in terms of performance 
while maintaining suitable readability and for certain tasks, it leant itself better to certain 
algorithms (OctTree based color quantization stands out). ...we were able to heavily leverage inline functions in F#......Since each of 
these are inlines, the F# optimizer can actually do something useful with the code. By using F#, we were able to address this cost by using 
inlining, code profiling, scanline caching, memoization and other techniques. In many cases we ended up with 
code that ran in equivalent time to C++ code or in some cases faster.
    
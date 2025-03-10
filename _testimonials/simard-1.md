---
id: simard-1
bullets:
- '**Patrice Simard**'
- Distinguished Engineer
- 'Microsoft '
keywords:
- advertising
- machine learning
- data science
- statistics
- predication
quote: 'For a machine learning scientist, speed of experimentation is the critical factor to optimize.  '
---
I wrote the first prototype of the click prediction system deployed in Microsoft AdCenter in F# in a few days.  

For a machine learning scientist, speed of experimentation is the critical factor to optimize.  Compiling is 
fast but loading large amounts of data in memory takes a long time.  With F#’s REPL, you only need to load the 
data once and you can then code and explore in the interactive environment.  Unlike C# and C++, F# was designed 
for this mode of interaction.  It has the ease of use of Matlab or Python, both of which I have used extensively 
in the past. One problem with Matlab and Python is that they are not strongly typed.  No compile-time type 
checking hurts speed of experimentation because of bugs, lack of reusability, high cost of refactoring, no 
intellisense, and slow execution.  Switching to F# was liberating and exhilarating.  2 caveats: Not every 
problem fits that model.  With a bit of discipline, such as avoiding massive parallelism for as long as 
possible, the model goes a long way.  The second caveat is that the cost of learning F# is steep.  For me, it 
was 2 weeks of decreased productivity. It has proven a worthwhile investment.

As a machine learning practitioner programming in F#, I constantly switch between two activities: 
1) writing prototype code (highly interactive ugly code with throw away results, functions, and visualizations) 
and 2) upgrading prototype code to library standard (fast, generic, reusable).  When I go back to writing 
prototypes, I build on top of the newly upgraded functions.  In F#, the cost of switching between these two 
modes is minimal: often nothing needs to be done other than adding comments and deleting deprecated functions.  
This means that most of the time is dedicated to experimenting and the majority of the code is close to shipping 
quality.  Some people can do this in C# or Matlab, but I find that F# excels at it.

I started F# with deep suspicions regarding efficiency.  My first test was to link F# with C++/CLI and 
check performance of calling SSE/AVX optimized code.  As hoped, F# is comparable to C# when it comes to 
speed.  You have the same flexibility to link with well optimized code.  The inline generics are truly 
magical: same IL in the linked DLLs, but the functions expand to specialized fast code when you instantiate
them.  Compromises between intuitive code and efficient code still need to be made. I found that “for” loop, 
“tail recursive” loop, or Parallel.For with ThreadLocal loops, are faster than a succession of piped IEnumerables 
(seq in F#).  F# does not hamper one’s ability to write ugly fast code.  Rest assured.

Several people in the machine learning group in Microsoft Research have switched to F# for the reasons 
above.  The world is slowly moving toward functional programming with good justifications: the code is 
cleaner and easier to debug in a distributed environment.  Among the available functional languages, F# 
is a compelling option.

    
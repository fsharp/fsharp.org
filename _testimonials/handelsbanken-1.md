---
id: handelsbanken-1
bullets:
- '**Jan Erik Ekelof**, M.Sc.'
- Head IT-architect and lead developer Counterparty Risk
- 'Handelsbanken '
keywords:
- financial services
- analysis
- counterparty risk
- fixed income
- derivatives
- financial modelling
quote: The performance is phenomenal. We can now re-calculate the entire bank portfolio from scratch in less than a second and the response-time for single deal verification calculation is far below 100 milliseconds.
---
I first evaluated F# back in 2006 - 2007 for the purpose of math oriented high performance applications within 
Financial Risk. I got in spring 2009 a mission to implement a new Real-time Counter-party Risk system covering 
all possible present and future deal types within the entire bank. The effort was started with only three 
resources, me as architect and lead developer and two colleagues – one risk expert and one high performing 
developer. Our first intention was to use C#, but I did a quick proof-of-concept with F# implementing a low 
level TCP/IP-communication to an existing risk-system. This showed us and our  management that F# could give 
us a real productivity boost due to its support for multiple paradigms and functional concepts together with 
an impressive support for multi-threading. 

Our first delivery is approaching rapidly and F# has proved itself as a real life-saver. We started off using 
C# in many places but have since then moved almost entirely into F# due to its ability to reduce the amount of 
code required and its simplicity when developing massive parallel computations. The performance is phenomenal. 
We can now re-calculate the entire bank portfolio from scratch in less than a second and the response-time for 
single deal verification calculation is far below 100 milliseconds(the original demand was 200 milliseconds to 
make the application usable for electronic markets). Although some gains are to be attributed to how we have built 
our calculation models, F# made it possible for us to implement our algorithms and techniques with very little code 
and with a huge similarity to the original mathematical models and regulations (which is important for verification 
of correctness). We have also been able to use the support for Async-workflows producing code that is simple and 
clear and easy to understand but still runs in parallel when required. 

The present application contains 35 to 40.000 lines of F#-code and an equal amount of C#-code. However, our 
estimate is that the F# code contains at least 80% of the functionality (which is pretty amazing!). Our experience 
shows us that the number of code lines shrinks with a ratio of 1/2 to 1/4 by just porting functionality from 
C# to F# (not counting single character or empty lines in the C#-code). We have by remodeling increased the 
ratio to the area of 1/5 to 1/8, where the remodeling involves replacing object oriented constructs with 
functional ones (and actually removing mutable states). One example from last week was a limit-utilization 
module written in F# but using an object-oriented approach containing +300 lines of code. I rewrote it to 
below 70 lines of code just by shifting paradigm (and the rewrite made it much easier to understand and verify)!

    
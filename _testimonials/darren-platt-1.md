---
id: darren-platt-1
bullets:
- '**Darren Platt**'
- Amyris Biotechnology
- '[source](http://research.microsoft.com/en-us/events/2012summerschool/kenjifsharpfphdsummerschool2012new.pdf)'
keywords:
- biotechnology
- units of measure
- bioinformatics
quote: F# rocks... building out various algorithms for DNA processing here and it's like a drug
---
With F#... we have written a complete genome re-sequencing pipeline with interface, algorithms,
reporting in ~5K lines and it has been incredibly reliable, fast  and easy to maintain.

F# rocks - we're building out various algorithms for DNA processing here and it's like a drug.  Just
implemented a suffix tree in 150 lines that can index 200,000 bases a second ;)    We have probably
10-20K lines of code for many scientific applications ranging from a full genome sequencing
pipeline that reconstructs and annotated yeast strains, to simulators for various processes
and design tools for building DNA sequences/constructs.  There are lab located apps that
grab robot log files and move them to databases and a tool for viewing a huge collection of DNA sequencing data.

F# has been phenomenally useful.  I would be writing a lot of this in Python otherwise and F# is more
robust, 20x - 100x faster to run and for anything but the most trivial programs, faster to develop.

The UI work is especially gratifying, because state of the art for a lot of genomic data display
is still PNG images embedded in JavaScript and with F# I can render half a million data points on
a web page without jumping through hoops.

With Units of Measure I started labelling the coordinates as one or zero based and immediately found a bug where I'd casually mixed the two systems. Yay F#!

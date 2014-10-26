---
layout: default
title: Teaching F# | The F# Software Foundation
headline: Using F# for teaching
---

<div>
    <p>
        F# is a simple and expressive programming language. It can be described as statically typed
        impure functional language that supports functional, imperative and object-oriented paradigm
        and also several other programming styles including data-driven, event-driven and parallel
        programming. This makes it an excellent tool for introducing programming as well as programming
        paradigms. Using F# for teaching has several advantages:
    </p>
    <ul>
        <li>
            <p>
                <strong>Simplicity and mathematical elegance.</strong> The functional paradigm allows starting with
                very simple concepts and gradually introducing advanced programming techniques. The
                language is theoretically well-founded, which helps students grasp many mathematical ideas.
                It can be also used to introduce theories such as lambda calculus.
            </p>
        </li>
        <li>
            <p>
                <strong>Real-world libraries.</strong> When using the language, students have access to a wide range of
                Mono and .NET libraries that can be easily used to create impressive and entertaining
                applications. Learning how to use some of these libraries is also an important practical
                skill valued by the industry.
            </p>
        </li>
        <li>
            <p>
                <strong>Explorative, data-rich environment.</strong> Thanks to a large number of libraries, it is easy
                to load data from various data sources. F# Interactive and language features such as
                units of measure make it easy to explore, analyze and structure the data. The data can
                be visualized using several .NET cross-platform charting libraries as well as by calling gnuplot.
            </p>
        </li>
    </ul>
    <p>
        The F# compiler and tools are cross-platform and run using .NET on Windows and using Mono on
        Mac OS and Linux. F# language is supported in several editors. Aside from the commercial Visual
        Studio and Xamarin Studio tools, there is an F# mode for Emacs and open-source language binding for MonoDevelop.
    </p>
    <h2 id="online-teaching-and-learning" class="anchor">Online Teaching and Learning</h2>
    <p>
        <a href="http://www.tryfsharp.org">Try F#</a> is an interactive environment where you can
        explore F# in your web browser (on Mac and Windows). It contains a number
        of online tutorials demonstrating the concepts of F#:
    </p>
    <p><img src="files/tryfsharp.jpg" style="float:right;margin:5px 0px 5px 25px;"></p>
    <ul>
        <li><a href="http://www.tryfsharp.org/Learn/getting-started">Getting started in F#</a></li>
        <li><a href="http://www.tryfsharp.org/Learn/advanced-programming">Advanced F# Programming</a></li>
        <li><a href="http://www.tryfsharp.org/data-visualization">Data Visualization and Charting</a></li>
        <li><a href="http://www.tryfsharp.org/Learn/data-science">Data Science</a></li>
        <li><a href="http://www.tryfsharp.org/Learn/scientific-computing">Scientific and Numerical Computing</a></li>
        <li><a href="http://www.tryfsharp.org/Learn/financial-computing">Financial Computing</a></li>
    </ul>
    <h2 id="video-lectures" class="anchor">Video lectures</h2>
    <ul>
        <li>
            <p>
                <strong><a href="http://channel9.msdn.com/Tags/peter-sestoft">Teaching programming language concepts with F#</a></strong>
                Peter Sestoft, IT University of Copenhagen, Denmark
            </p>
            <p>
                This is a two-part video lecture by Peter Sestoft, professor from the IT University of Copenhagen,
                Denmark. In the lecture, Peter introduces the curriculum, lecture plan and lecture notes
                for the course “Programs as data” that uses the functional programming concepts in F# to
                teach students language concepts and implemen­tation details.
            </p>
        </li>
        <li>
            <p>
                <strong><a href="http://channel9.msdn.com/Shows/Going+Deep/C9-Lectures-Dr-Don-Syme-Introduction-to-F-1-of-3">C9 Lectures - Introduction to F#</a></strong>
                Don Syme, Microsoft Research, Cambridge, UK
            </p>
            <p>
                Three part series of introductory video lectures by Don Syme, the designer of the F#
                language. Don introduces functional concepts such as functional data structures and pattern
                matching, imperative features of F# as well as the F# object model.
            </p>
        </li>
        <li>
            <p><strong><a href="http://research.microsoft.com/en-us/events/fsharpined/">F# in Education</a></strong></p>
            <p>
                F# in Education was a one-day workshop for educators and industrialists, held in Cambridge,
                Massachusetts, U.S., on November, 2010. The workshop investigated F# as a possible teaching
                language, as well as its use in industry. Developments in cross-platform issues were highlighted.
            </p>
        </li>
    </ul>
    <h2 id="textbooks-for-teaching-f35" class="anchor">Textbooks for Teaching F#</h2>
    <p><a href="http://www.imm.dtu.dk/~mire/FSharpBook"><img src="files/fpbook.jpg" style="float:right;margin:15px;border-style:none;"></a></p>
    <h4 id="functional-programming-using-fhttpwwwimmdtudkmirefsharpbook"><a href="http://www.imm.dtu.dk/~mire/FSharpBook">Functional Programming Using F#</a></h4>
    <p>Michael R. Hansen and Hans Rischel</p>
    <p>
        This introduction to the principles of functional programming using F#
        shows how to apply theoretical concepts to produce succinct and elegant
        programs. Coverage includes advanced features in the .NET library, the
        imperative features of F# and topics such as sequences, computation
        expressions and asynchronous computations. The book contains a broad
        spectrum of examples and exercises.
    </p>
    <p>
        Further material comprising the programs in the book, lecture slides and
        mini-projects are found <a href="http://www.imm.dtu.dk/~mire/FSharpBook/">on the book web site</a>.
    </p>
    <div style="clear:both;">&nbsp;</div>
    <p><a href="http://www.amazon.com/Programming-Language-Concepts-Undergraduate-Computer/dp/1447141555"><img src="files/sestoft.png" style="float:right;margin:15px;border-style:none;"></a></p>
    <h4 id="programming-language-conceptshttpwwwamazoncomprogramming-language-concepts-undergraduate-computerdp1447141555"><a href="http://www.amazon.com/Programming-Language-Concepts-Undergraduate-Computer/dp/1447141555">Programming Language Concepts</a></h4>
    <p>Peter Sestoft</p>
    <p>
        Programming Language Concepts uses a functional programming language (F#) as the metalanguage in which to
        present all concepts and examples, and thus has an operational flavour, enabling practical experiments
        and exercises. It includes basic concepts such as abstract syntax, interpretation, stack machines,
        compilation, type checking, and garbage collection techniques, as well as the more advanced topics on
        polymorphic types, type inference using unification, co- and contravariant types, continuations, and
        backwards code generation with on-the-fly peephole optimization.
    </p>
    <p>
        Programming Language Concepts covers practical construction of lexers and parsers, but not regular
        expressions, automata and grammars, which are well covered elsewhere. It throws light on the design
        and technology of Java and C# to strengthen students’ understanding of these widely used languages.
        The examples present several interpreters and compilers for toy languages, including a compiler for
        a small but usable subset of C, several abstract machines, a garbage collector, and ML-style polymorphic
        type inference. Each chapter has exercises based on such examples.
    </p>
    <h2 id="lectures-and-course-material" class="anchor">Lectures and course material</h2>
    <ul>
        <li>
            <p>
                <strong><a href="http://tomasp.net/materials/mff-fsharp-09/">Introduction to functional programming</a></strong>
                Tomas Petricek, Charles University, Czech Republic
            </p>
            <p>
                The course explains basic functional concepts such as function composition, functional data
                types and higher-order functions. It highlights some interesting connections between these
                and concepts that student may already know or will learn in various mathematics lectures. The
                site includes lecture slides and a number of simple homeworks that usually require some
                interesting insight.
            </p>
        </li>
        <li>
            <p>
                <strong><a href="http://www.idt.mdh.se/kurser/DVA201/">Functional Programming with F#</a></strong>
                Björn Lisper, Mälardalen University, Sweden
            </p>
            <p>
                The course gives the students a solid under­standing of functional programming, its appli­cations,
                and its strengths and weaknesses. It includes topics such as recursion, modern type systems,
                higher order functions, lazy evaluation and tradeoffs of using side effects. In addition it
                also provides short orientations of lambda calculus and type inference, in order to enhance
                the understanding of the functional prog­ramming paradigm.
            </p>
        </li>
        <li>
            <p>
                <strong><a href="http://undergraduate.csse.uwa.edu.au/units/CITS3242/">Programming Paradigms</a></strong>
                Rowan Davies, The University of Western Australia
            </p>
            <p>
                This unit explores and compares the main alternative paradigms for high-level programming. It
                considers important modern paradigms such as functional programming, logic programming and concurrent
                programming, and compares these with the mainstream paradigms of imperative programming and
                object-oriented programming. It considers past and future trends in programming paradigms and
                explores the motivation for each paradigm, the concepts which define it, and how each paradigm can
                be used in practice to complete programming tasks. It also compares the advantages of each
                paradigm in the software production process, with particular emphasis on productivity,
                scalability, program behaviour, and the correctness of programs. The unit focuses on both
                fundamental concepts and practical software development, with the former enabling the latter.
            </p>
        </li>
        <li>
            <p>
                <strong>Functional programming at St Matthews</strong>
                Samin Ishtiaq, Microsoft Research Cambridge
            </p>
            <p>
                Samin Ishtiaq taught a 1 hour crash course in functional programming to 10/11 year olds at
                a local primary school. The course leads up to calculating areas and volumes, which is what
                the students were learning in maths at that time. This was the first experience of programming
                for almost all of the students.
            </p>
            <p>The <a href="https://github.com/sishtiaq/StMattFP101">code</a>. </p>
        </li>
    </ul>
</div> 


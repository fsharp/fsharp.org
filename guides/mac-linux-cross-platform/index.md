---
layout: default
title: Guide - Cross Platform Dev Guide | The F# Software Foundation
headline: Guide - Cross-Platform Development with F#
---

To get started with F#, please refer to the following documents:

* [Getting Started with F# on Mac](/use/mac)
* [Getting Started with F# on Linux](/use/linux)
* [Getting Started with F# on Windows](/use/windows)
* [Getting Started with F# for iOS Programming](/use/ios)
* [Getting Started with F# for Android Programming](/use/android)

Once you have F# installed and operating, refer to the resources below for platform specific techniques,
tools, and resources.

<div class="jumbotron visible-lg calloutBox" id="how-to-add-testimonial">
    <p>This guide includes resources related to cross-platform development with F#. To contribute to this guide, log on to GitHub, <a href="https://github.com/fsharp/fsfoundation/edit/gh-pages/guides/mac-linux-cross-platform/index.md">edit this page</a> and send a pull request.</p>
    <hr />
    <p>Note that the resources listed below are provided only for educational purposes related to the F# programming language. The F# Software Foundation does not endorse or recommend any commercial products, processes, or services. Therefore, mention of commercial products, processes, or services should not be construed as an endorsement or recommendation.</p>
</div>

## Resources for cross-platform development

* auto-gen TOC:
{:toc}

### Compilation, Command Line Tools and Scripting

You can start F# Interactive using

    $ fsharpi

    > 1+1;;

    val it : int = 2

You’re off! Some common commands are:

    fsharpi                            (starts F# interactive)
    fsharpc file.fs                    (F# compiler)
    xbuild                             (builds .fsproj projects and .sln files)
    mono file.exe arg1 ... argN        (runs a compiled F# program)
    mkbundle --static file.exe -o file (makes a static native image, including the F# runtime)

Cross-platform users may also be interested in [Fable](https://github.com/fsprojects/Fable), an F# compiler that emits JavaScript.

###  Editing

Some editors have specific support for F#, either builtin or through addons provided by the F# community:

* [Xamarin Studio](http://xamarin.com/studio) has built-in support for F# development on OSX and Windows.

* [Emacs for Mac](http://emacsformacosx.com/) and [Linux](http://wikemacs.org/index.php/Installing_Emacs_on_GNU/Linux). There is an [F# mode for Emacs](https://github.com/fsharp/emacs-fsharp-mode) that extends Emacs with syntax highlighting for F#, support for working with F# Interactive, automatic indentation and more.

* [Visual Studio Code](https://code.visualstudio.com/) for Mac, Linux and Windows. This is a free, [open source](https://github.com/microsoft/vscode), cross platform source code editor
supporting [a lot of languages](https://code.visualstudio.com/docs/languages/overview).
F# is supported by the [Ionide](http://ionide.io/) project and is a nice integration. To install, press `Ctrl+P` and enter the following to install the Ionide package for VS Code.

        ext install Ionide-fsharp

* [MonoDevelop](http://monodevelop.com) with the [F# AddIn for MonoDevelop](http://fsharp.github.io/fsharpbinding).

  See [the installation instructions for MonoDevelop on Linux](http://www.monodevelop.com/download/).

  Then install [the F# AddIn for MonoDevelop](https://github.com/fsharp/xamarin-monodevelop-fsharp-addin) by adding it from the AddIn Manager, or building/installing it yourself from source.

* [Atom Editor](https://atom.io) supports F# via [Ionide](http://ionide.io) for cross platform F# development.

* Sublime Text

  Use and contribute to:

  * [F# development tools for Sublime Text 3](https://github.com/fsharp/sublime-fsharp-package)

  See also:

  * [Configuring Sublime Text 2 To Work With FSharp](http://onor.io/2012/01/26/configuring-sublime-text-2-to-work-with-fsharp/)
  * [Using Sublime Text 2 as F# REPL](http://blog.kulman.sk/using-sublime-text-2-as-f-repl/)

* Vim

  Use and contribute to:

  * [Vim support for F#](https://github.com/fsharp/vim-fsharp/)

  See also:

  * [Writing and Running F# Scripts with Vim](http://juliankay.com/development/writing-and-running-f-scripts-with-vim/)
  * [Vim Runtime Files for F#](https://github.com/kongo2002/fsharp-vim)

If running F# Interactive in Emacs or another similar environment, use

    > fsharpi --readline-

to turn off console processing.

###	Documentation

For most F# documentation, see the [documentation pages](/about/index.html#documentation).

###	Projects and Build Automation

####  .fsproj and .sln files

You can use ``xbuild`` to build projects and solutions described by the ``.fsproj`` and ``.sln`` file
formats from Visual Studio without change.
Xamarin Studio and MonoDevelop can also create and manage .fsproj and .sln files.

Use xbuild to build projects and solutions:

    xbuild RocketPart.fsproj
    xbuild RocketSolution.sln

Many people doing cross-platform or Mac/Linux development don't like ``.sln`` files because the file format
is not very amenable to human editing. If so, you can also create a ``.fsproj`` file that brings together a collection of
``.fsproj`` files. Example of this can be found
[on F# Core Engineering](http://fsharp.github.io/2015/04/18/fsharp-core-notes.html#examples-of-how-project-files-reference-fsharpcore-and-the-f-targets-file)

Tooling around F# projects often relies on ``.fsproj`` files being present, for example the
autocompletion in [emacs mode](https://github.com/fsharp/emacs-fsharp-mode) or
[Vim](https://github.com/fsharp/vim-fsharp) will not work with out one, except when editing an F# script. These ``.fsproj``
files are special XML files, and can therefor be somewhat unwieldy to maintain
by hand.  To help with this you can use tools such as Xamarin Studio or MonoDevelop to
create and maintain them, or command line tools such as ``Forge`` (see below).

#### Forge

[Forge](https://github.com/fsharp-editing/Forge) is a self contained tool for
generating and managing projects. It allows the generation of new projects based
on an expanding list of templates. It also encapsulates the best practices for those
projects in terms of tooling and layout. The generated projects contain .fsproj files, 
which can in turn be managed via forge as well making sure cross platform builds as well
as editor integration works out of the box. Of course forge can also manage the .fsproj
files for existing projects.

#### Makefiles

The F# command-line compiler (fsharpc) can be used with Makefiles in the usual way.

#### FAKE

[FAKE](http://fsharp.github.io/FAKE/) is a build-and-publish automation utility sometimes used by F# programmers (partly because
builds are automated using F# itself, and partly because it is a great tool).

FAKE can be fetched using NuGet.exe, e.g.:

    # Get nuget.exe
    sudo mozroots --import --sync
    curl -L http://nuget.org/nuget.exe -o nuget.exe

    # Get FAKE.exe
    mono nuget.exe install FAKE -OutputDirectory lib -ExcludeVersion -Prerelease


### Package Repositories and Dependency Management

#### NuGet

[NuGet](http://nuget.org/) is an open-source, cross-platform package management tool with many thousands
of packages available. See the [documentation](http://docs.nuget.org/).
It is used extensively on Windows ecosystem but is growing in its cross-platform use.

* Using nuget from the command line

For those on Mac/Linux, familiarity with the command-line NuGet.exe utility is highly useful.
Get the command line utility like this:

    # Get nuget.exe
    sudo mozroots --import --sync
    curl -L http://nuget.org/nuget.exe -o nuget.exe

Before using NuGet.exe on Mac/Linux, be sure to run

     mozroots --import --sync

Typical usage is:

    mono nuget.exe install                               -- installs from packages.config
    mono nuget.exe install packageId -Version 2.2.2.3    -- installs particular version of particular package

An example packages.config is:

    <?xml version="1.0" encoding="utf-8"?>
    <packages>
      <package id="FsUnit" version="1.2.1.0" targetFramework="net40" />
     <package id="NUnit" version="2.6.2" targetFramework="net40" />
    </packages>

See also the [documentation](http://docs.nuget.org/docs/reference/command-line-reference).

* Using nuget packages as part of a build

F# project files (.fsproj) can be configure to automatically get NuGet packages during a build. The
project file should have a line like this (adjust the '...' to reference a copy of NuGet.targets checked into your project).

    <Import Project="...\NuGet.targets" Condition="Exists('...\NuGet.targets')" />

A copy of NuGet.exe should be in that directory with executable permissions set. You may also need to set:

    export EnableNuGetPackageRestore=true

It is quite common to check a copy of NuGet.exe into a project, e.g. in lib/NuGet/NuGet.exe.


* Using nuget in MonoDevelop and Xamarin Studio

You can add NuGet support to these IDEs if not already present. See [NuGet for MonoDevelop and Xamarin Studio](https://github.com/mrward/monodevelop-nuget-addin#nuget-addin-for-monodevelop-and-xamarin-studio).

* Making nuget packages

See [http://nuget.org](http://nuget.org) to learn how to make and publish NuGet packages, or look at examples
from other F# community projects.

#### Paket

[Paket](http://fsprojects.github.com/Paket) is a dependency manager client for .NET that is very popuar with the F# community.
Excellent documentation is available for using Paket with F# on the Paket site.

You can also use Paket specifications as prefixes in F# scripting.  For example, see [Paket and Suave](https://suave.io/paket.html).

Some tips:
* Use ``frameworks: net46`` at the top of your ``paket.dependencies`` file when developing for Mono or F# scripting.  This makes Paket dependency resolution much faster with far fewer downloads

#### Paket Load Script Generation

Paket has a feature [``--generate-include-scripts``](https://fsprojects.github.io/Paket/paket-generate-include-scripts.html) that is very useful for doing cross-patform scripting that references many nuget packages.



#### Some Examples of Cross-Platform Packages

Some F# and CLI packages are more cross-platform friendly than others. Many will work with no alteration.
Here are some of interest:

* FSharp.Core Library, the core F# library

* [FSharp.Data](http://fsharp.github.io/FSharp.Data/)

In the wider F# exosystem there are many cross-platform and/or portable packages
and libraries. Here are some examples:

* [Math.Net Numerics](http://numerics.mathdotnet.com/) - Math.NET Numerics provides cross-platform and portable  methods and algorithms for numerical computations in science, engineering and everyday use. Covered topics include special functions, linear algebra, probability models, random numbers, interpolation, integral transforms and more.

* [Suave](http://suave.io/) - "A simple web development F# library providing a lightweight web server and a set of combinators to manipulate route flow and task composition"

* [ServiceStack](http://www.servicestack.net/) - "Thoughtfully architected, obscenely fast, thoroughly enjoyable web services for all"

* [ReactiveUI](https://github.com/reactiveui/ReactiveUI) - Reactive UI is an MVVM framework built on top of
  the Reactive Extensions. Version 5.0 is "totally Portable-Friendly", and supports Xamarin.iOS, Xamarin.Android,
  Xamarin.Mac, .NET 4.5 (WPF), Windows Phone 8 and Windows Store Apps (WinRT).

* [Akavache](https://github.com/github/Akavache#akavache-an-asynchronous-key-value-store-for-native-applications) - Akavache is an asynchronous, persistent (i.e. writes to disk) key-value store created for writing desktop and mobile applications in C# and F#. Think of it like memcached for desktop apps.
  At the time of writing, it is compatible with .NET 4.0/4.5, Mono 3.0 (including Xamarin.Mac), Silverlight 5, Windows Phone 7.1/8.0, and WinRT (Metro / Modern UI / Windows Store / Whatever Microsoft Is Calling That Tablet'y OS Thing That They Make).

* [Splat](https://github.com/xpaulbettsx/splat#splat) – It has cross platform APIs for
  images and colors, with platform-specific extension methods to go back and forth
  between the platform-specific native types.

* [OxyPlot](https://oxyplot.codeplex.com/) – OxyPlot is a cross-platform plotting library for .NET.
  The core is a portable library, the package OxyPlot.GtkSharp is usable on Mac/OSX.

There are a wide range of cross-platform libraries available as part of the core libraries
available to F#, for example:

* [Versions of .NET Frameworks Libraries](http://www.mono-project.com/Start).

* [Bindings to Unix functionality](http://docs.go-mono.com/index.aspx?link=N%3aMono.Unix)

* [Bindings to Mac functionality](http://www.mono-project.com/MonoMac)

* [MonoGame](http://monogame.codeplex.com/)

* [Xamarin.Mac](http://xamarin.com/mac)

Compatibility guides, [documentation](http://docs.go-mono.com/?link=root) and [migration assessment tools](http://www.mono-project.com/MoMA) are also available.


### Portable (PCL) Libraries


Portable .NET libraries have access to less core functionality, called a "portable profile", but can be used
across multiple platforms and multiple profiles of .NET. For example, a portable library may
be usable on Mac, Linux, Android, iOS, Windows and Windows Store apps (depending on the versions
of runtime machinery used and other factors).

See [Cross-Platform Portable Class Libraries with .NET are Happening](http://www.hanselman.com/blog/CrossPlatformPortableClassLibrariesWithNETAreHappening.aspx)
for a perspective on cross-platform portable libraries for Visual Studio users.

F# portable libraries reference FSharp.Core versions such as 2.3.5.1, with matching mscorlib versions.
A binding redirect may be neeeded to ensure bindings to these libraries redirect correctly, e.g. to
FSharp.Core 4.4.0.0.

When authoring a Portable library on OSX and Linux, be sure to reference [the FSharp.Core nuget package](https://www.nuget.org/packages/FSharp.Core) to find the right profile version of FSharp.Core.  This is simpler
than reying on any specific version incuded with your F# installation.

For more information on FSharp.Core, see the [Notes and Guidance on FSharp.Core](http://fsharp.github.io/2015/04/18/fsharp-core-notes.html) from the Core Engineering Group of [the F# Software Foundation](http://fsharp.org).

### Binding Redirects

Applications will almost certainly need to specify "binding redirects" for some or all components where multiple
versions of components need to be "unified" to one master version at runtime.  This applies particularly to ``FSharp.Core``
but also to other components. For instance, see [examples of binding redirects for FSharp.Cpre](http://fsharp.github.io/2015/04/18/fsharp-core-notes.html#use-binding-redirects-for-applications).


### Unit Testing

A table of .NET unit testing frameworks can be found [here](http://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#.NET_programming_languages).

#### Fuchu

[Fuchu](https://github.com/mausch/Fuchu) is a test library for .NET, supporting C# and VB.NET but with a special focus on F#. It draws heavily from Haskell's test-framework and HUnit. You can read about the rationale and underlying concepts in [this blog post](http://bugsquash.blogspot.com/2012/06/fuchu-functional-test-library-for-net.html), or tests should be first-class values so that you can move them around and execute them in any context that you want. Also, if they are first-class values, then you can take extra care with what the test methods return, making integrations with external libraries much cheaper.

    Install-Package Fuchu

Since tests are values, it's easy to extend the framework to integrate with other tooling, e.g. with FsCheck to use a fuzzing/randomization approach to testing (see below)

    Install-Package Fuchu.FsCheck

Fuchu also has an integration with PerfUtil which can be used to automate performance testing and trending in a continuous integration environment.

    Install-Package Fuchu.PerfUtil

#### FsCheck

[FsCheck](https://github.com/fsharp/FsCheck) is a tool for testing .NET programs automatically.
The programmer provides a specification of the program,
in the form of properties which functions, methods or objects should satisfy,
and FsCheck then tests that the properties hold in a large number of randomly generated cases.

#### NUnit

[NUnit](http://nunit.org/) is an open-source, cross-platform unit-testing
framework for F# and other  .NET languages. It is written
in C# and has been completely redesigned to take advantage of many .NET language features,
for example custom attributes and other reflection related capabilities.
Also [xUnit](http://xunit.codeplex.com/) is a good alternative for NUnit.

Some guides to using F# and NUnit together are:

 * [NUnit With F#](http://davefancher.com/2012/09/06/nunit-with-f/)
 * [Using NUnit with F# Code](http://sector0.dk/?p=33)
 * [F# as a Unit Testing Language](http://trelford.com/blog/post/fstestlang.aspx)

#### FsUnit

[FsUnit](https://github.com/fsharp/fsunit) is often used by F# programmers as an DSL to access popular unit testing frameworks.
An [FsUnit NuGet package](http://nuget.org/packages/FsUnit) is available.

###  Continuous Integration builds

#### Using Travis and AppVeyor

Perhaps the simplest way to regularly build and test your work across multiple platforms is to use Travis.

You can automate the build and test of all commits and pull requests to GitHub projects
on Linux and OSX by using Travis.  This is very easy to arrange, just add a .travis.yml file to your project root ([example](https://github.com/fsharp/FSharp.Data/blob/master/.travis.yml), [example](https://github.com/fsharp/FSharp.Compiler.Service/blob/master/.travis.yml) ), and register the project in your Travis account.

Setting the language to "objective-c" causes Travis to use an OSX machine for build.

Travis is free for open source projects.

To also automate your build and test on Windows, AppVeyor is a good choice.  Here is [an example configuration file](https://github.com/fsharp/FSharp.Compiler.Service/blob/master/appveyor.yml).


### Miscellaneous Notes on Open Source and Cross Platform Development


#### Testing on multiple platforms

If you are Windows developers, you can set up a Vagrant box in order to test your libraries and tools on Mono (though often a Travis build is simpler, see above)
A detailed guide of setting up Vagrant is available [here](http://christoph.ruegg.name/blog/test-csharp-fsharp-on-mono-with-vagrant.html).


#### Dos and Don’ts

* Generally use `/` instead of `\` on paths. In .fsproj files you can generally use either.
* In .fsproj files, don't use copy commands on PostBuildEvent's, but use the MSBuild Copy task itself ([example](http://msdn.microsoft.com/en-us/library/3e54c37h.aspx))
* Don't assume pdbs are always created after the compilation
* Executables included in .NET may not exist in Mono or may have a different name or location e.g. SvcUtil etc
* External components that would be available via NuGet in Windows might be included as part of Mono - Rx, TDF etc
* Don't rely the registry, also Mono can use a version of it, it can have permissions issues
* Avoid Windows Forms/WPF in favour of Javascript or native UI frameworks
* Beware differences in [behaviour with loading assemblies](https://bugzilla.xamarin.com/show_bug.cgi?id=10906) which is a very niche problem though. Generally the less trodden the code is, the more subtle differences there are.
* When using NUnit, create your test fixtures with classes and methods, exactly the way you'd do in C# (Trying to use modules as test fixtures will trigger odd behaviors on Xamarin Studio).
* Differences in F# Interactive DLL resolution. Use

        #I @"./lib/FAKE/tools"
        #r @"./lib/FAKE/tools/FakeLib.dll"

  Not just

        #r @"./lib/FAKE/tools/FakeLib.dll"

* If your build executes binaries and tasks, make sure the “x” permissions are
  set for Fsc.exe etc. and all other executables triggered by xbuild.


#### Developing Cross-Platform and Multi-Targeting Type Providers

F# type providers are compile-time components that must execute on your machine during build and development.

A type provider executing on Mac/Linux  can expose some small differences in the implementation of .NET, for example in
the System.Type implementation. The ProvidedTypes API can normally be adjusted to account for these.

To help isolate the problem, try the following:

*	Start with a simple file that uses the type provider and compile it using `fsc.exe` on Windows. This should succeed.
*	Now compile the file on Windows using the open source `fsc.exe` (this will run using .NET). This should succeed (if not, there is a bug in the open source compiler).
*	Now compile the file on Windows using the open source `mono fsc.exe` (this will run using Mono). If this fails, then there are differences in Mono vs .NET exposed by the type provider. The type provider can probably be adjusted.
*	If that succeeded, then try the same command-line compilation on, say, OSX. If this fails then the type provider may not be cross-platform, e.g. may rely on Windows-only functionality. Diagnostics from the type provider may need improving.
*	If that succeeded, then check if the type provider works from MonoDevelop. If not then the problem is with the MonoDevelop binding (but that is very unlikely because it doesn't know anything specific about type providers).

Switching to command-line compilations will help localize the problem.

### Having trouble?

* Ask questions at the [F# Open Source Group](https://groups.google.com/forum/#!forum/fsharp-opensource)
* For technical questions on specific scenarios, you can also ask on [StackOverflow](http://stackoverflow.com/questions/tagged/f%23).


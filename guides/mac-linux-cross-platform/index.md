---
layout: page
title: Cross Platform Dev Guide | The F# Software Foundation
headline: F# Mac, Linux and Cross-Platform Development Guide
---

## Getting Started

See:
* [Getting Started with F# on Mac](/use/mac)
* [Getting Started with F# on Linux](/use/linux)
* [Getting Started with F# for iOS Programming](/use/ios)
* [Getting Started with F# for Android Programming](/use/android)

##  Command Line Tools

You can start F# Interactive using 

    $ fsharpi

    > 1+1;;
    
    val it : int = 2

You’re off! Some common commands are:

    fsharpi                            (starts F# interactive)
    fsharpc file.fs                    (F# compiler)
    xbuild                             (builds .fsproj projects and .sln files, authored in 
                                        Xamarin Studio and Visual Studio)
    mono file.exe arg1 ... argN        (runs a compiled F# program)
    mkbundle --static file.exe -o file (makes a static native image for an F# program, 
                                        including the F# runtime)

##  Editing 

### What should I use to edit my code?

Some editors have specific support for F#, either builtin or through addons provided by the F# community: 
* [Xamarin Studio](http://xamarin.com/studio) or [MonoDevelop](http://monodevelop.com) with the [F# AddIn for MonoDevelop](http://fsharp.github.com/fsharpbinding). 
* Emacs. There is an [F# mode for Emacs](http://fsharp.github.com/fsharpbinding/) that extends Emacs with syntax highlighting for F#, support for working with F# Interactive and also automatic indentation. 
* Vim
* SublimeText 

##	Documentation 

For most F# docuementation, see the [documentation pages](/about/index.html#documentation).

##	Projects, Packages, Testing and Build Automation

###  .fsproj and .sln files

You can use xbuild to build projects and solutions from Visual Studio without change.
Xamarin Studio and MonoDevelop can also create and manage .fsproj and .sln files.

Use xbuild to build projects and solutions:

    xbuild RocketPart.fsproj
    xbuild RocketSolution.sln

Many people doing cross-platform or Mac/Linux development don't like .sln files.
In this case, you can also create a .proj file that brings together
a collection of .fsproj files. Include, for example, [root.traversals.targets](https://github.com/fsharp/fsharp/blob/master/src/root.traversal.targets) used in the F# compiler source
in a .proj like this:

    <Project xmlns="http://schemas.microsoft.com/developer/msbuild/2003" ToolsVersion="4.0">
    
      <ItemGroup>
        <ProjectFiles Include="fsharp-proto-build.proj"/>
        <ProjectFiles Include="fsharp-library-build.proj"/>
        <ProjectFiles Include="fsharp-compiler-build.proj"/>
      </ItemGroup>
    
      <Import Project="root.traversal.targets"/>
    
    </Project>

If you need to create a .fsproj file from scratch yourself, either install Xamarin Studio or MonoDevelop, 
or find an existing one, copy it and edit it by hand.

### Makefiles

The F# command-line compiler can be used with Makefiles in the normal way.


### NuGet 

[NuGet](http://nuget.org/) is an open-source, cross-platform package management tool with many thousands
of packages avaialble. See the [documentation](http://docs.nuget.org/).

It is generally used for package management on the Windows ecosystem but is growing in its cross-platform use.

#### NuGet Command Line

For those on Mac/Linux, familiarity with the command-line NuGet.exe utility is highly useful.
Get the command line utility from [nuget.codeplex.com](http://nuget.codeplex.com/). See also
the [documentation](http://docs.nuget.org/docs/reference/command-line-reference).

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

#### Using NuGet as part of a build

F# project files (.fsproj) can be configure to automatically get NuGet packages during a build. The
project file should have a line like this (if necessary, adjusted to locate a copy of NuGet.targets).

  <Import Project="...\NuGet.targets" Condition="Exists('...\NuGet.targets')" />

A copy of NuGet.exe should be in that directory with executable permissions set. You may also need to set:

  export EnableNuGetPackageRestore=true

It is quite common to check a copy of NuGet.exe into a project, e.g. in lib/NuGet/NuGet.exe.


#### NuGet MonoDevelop and Xamarin Studio support

You can add NuGet support to these IDEs. See [NuGet for MonoDevelop and Xamarin Studio](https://github.com/mrward/monodevelop-nuget-addin#nuget-addin-for-monodevelop-and-xamarin-studio).

#### Making NuGet packages

See http://nuget.org to learn how to make and publich NuGet packages.

### Other Package Mechanisms

Other package mechanisms include:
* Git sub-modules (especially when building from source)
* Traditional unix packages

### FAKE

[FAKE](http://fsharp.github.io/FAKE/) is a build-and-publish automation utility sometimes used by F# programmers (partly because
builds are automated using F# itself, and partly because it is a great tool).


### Portable Libraries

Portable libraries are ones using FSharp.Core versions such as 4.3.5.0, with matching mscorlib versions.

They have access to less core functionality, called a "portable profile", but can be used across multiple
platforms and multiple profiles of .NET. For example, a portable library may be usable on Mac, Linux, Android,
iOS, Windows and Windows Store apps (depending on the versions of runtime machinery used and other factors).

At the time of writing, creating portable libraries was not yet fully supported on 
Mac and Linux. But if you are developing on Windows, or using libraries on Windows, then consider
creating portable libraries to ease cross-platfom use.

## Unit Testing

A table of unit testing frameworks can be found [here](http://en.wikipedia.org/wiki/List_of_unit_testing_frameworks#.NET_programming_languages).

### NUnit

[NUnit](http://nunit.org/) is an open-source, cross-platform unit-testing 
framework for F# and other  .NET languages. It is written 
in C# and has been completely redesigned to take advantage of many .NET language features, 
for example custom attributes and other reflection related capabilities. NUnit brings 
xUnit to all .NET languages.

Some guides to using F# and Nunit together are:

 * [NUnit With F#](http://davefancher.com/2012/09/06/nunit-with-f/)
 * [Using NUnit with F# Code](http://sector0.dk/?p=33)
 * [F# as a Unit Testing Language](http://trelford.com/blog/post/fstestlang.aspx)
 

### FsUnit

[FsUnit](http://fsunit.codeplex.com/) is sometimes used by F# programmers. 
An [FsUnit NuGet package](http://nuget.org/packages/FsUnit) is available.


## Some Important Packages

Some F# packages are more cross-platform friendly than others. Here are some which are commonly used on
Mac and Linux:

* FSharp.Core Library
* MonoMac
* Math.Net
* MonoGame
* Xamarin.Mac
* ServiceStack
* ASP.NET Razor, RazorEngine
* MongoDB, MongoDB.FSharp
* FSharpx 
* FSharp.Data


## Miscellaneous Notes on Open Source and Cross Platform Development

### Using the TeamCity build service

To use versions of Mono such as Mono 3.0.12, you need to set an environment variable in your build config. 
Under build parameters, add this environment variable "env.MOPE_VERSION" and set it to "3.0.12". 


### Dos and Don’ts

* Generally use / instead of \ on paths. In .fsproj files you can generally use either.
* In .fsproj files, don't use copy commands on PostBuildEvent's, but use the MSBuild Copy task itself (example)
* Don't assume pdbs are always created after the compilation
* Executables included in .NET may not exist in Mono or may have a different name or location - SvcUtil etc
* Fake build scripts may not work as intended due to Mono issues
*	MSBuild API is incomplete in Mono, programatic API usage might fail 
*	Nuget can be troublesome
*	External components that would be available via Nuget in Windows might be included as part of Mono - Rx, TDF etc
*	MSBuild targets might be different in Mono
*	Don't rely the registry, also Mono can use a version of it, it can be fright with issues
*	Avoid Windows Forms/WPF in favour of native UI frameworks
*	Beware differences in behaviour with loading assemblies (https://bugzilla.xamarin.com/show_bug.cgi?id=10906). A very niche problem though. Generally the less trodden the code is, the more subtle differences there are.
*	When using NUnit, create your test fixtures with classes and methods, exactly the way you'd do in C#. (Trying to use modules as test fixtures will trigger odd behaviors on Xamarin Studio.)
*	Differences in F# Interactive DLL resolution. Use 

      #I @"./lib/FAKE/tools"
      #r @"./lib/FAKE/tools/FakeLib.dll"

  Not just

      #r @"./lib/FAKE/tools/FakeLib.dll"

*	If your build executes binaries and tasks, make sure the “x” permissions are 
  set for Fsc.exe etc. and all other executables triggered by xbuild.

*	TeamCity compiler is stricter about “ExtensionAttribute” on assemblies (Mono 3.0.0)

*	Nuget package restore: https://nuget.codeplex.com/workitem/3435. In NuGet.targets, the 
  "solutionDir" argument has an extra space. This breaks package restore on Mono. 


### Developing Cross-Platform and Multi-Targeting Type Providers

F# type providers are compile-time components that must execute on your machine during build and development.

A type provider executing on Mac/Linux  can expose some small differences in the implementation of .NET, for example in 
the System.Type implementation. The ProvidedTypes API can normally be adjusted to account for these.

To help isolate the problem, try the following:

*	Start with a simple file that uses the type provider and compile it using "fsc.exe" on Windows. This should succeed.
*	Now compile the file on windows using the open source "fsc.exe" (this will run using .NET). This should succeed (if not, there is a bug in the open source compiler)
*	Now compile the file on windows using the open source "mono fsc.exe" (this will run using Mono). . If this fails, then there are differences in Mono v. .NET exposed by the type provider. The type provider can probably be adjusted.
*	If that succeeded, then try the same command-line compilation on, say, OSX. If this fails then the type provider may not be cross-platform, e.g. may rely on Windows-only functionality. Diagnostics from the type provider may need improving.
*	If that succeeded, then check if the type provider works from MonoDevelop. If not then the problem is with the MonoDevelop binding (but that is very unlikely because it doesn't know anything specific about type providers)

Switching to command-line compilations will help localize the problem.

## Having trouble?

* Ask questions at the [F# Open Source Group](https://groups.google.com/forum/#!forum/fsharp-opensource)


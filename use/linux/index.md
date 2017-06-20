---
layout: default
title: Use F# on Linux | The F# Software Foundation
headline: Use F# on Linux
---


## Option 1: Install from your Linux distribution's package manager

When being used as .NET language, F# requires a .NET runtime. On Linux this runtime is Mono or .NET Core.
Most Linux distributions include a version of Mono in their repositories. However, these versions
are typically pretty old. Therefore, it is *highly recommended* that you add the official Mono package
repository to your package manager, as described below. This makes it easy to get updates or uninstall, if 
required.

* [Ubuntu/Mint](#ubuntu)
* [Debian](#debian)
* [CentOS/RHEL/Amazon/Fedora](#centos)
* [Gentoo/Sabayon/Funtoo/Calculate](#gentoo)

Once installed, see [installing a smart editor](#smart-editor) and the [Linux and Cross-Platform Development Guide](/guides/mac-linux-cross-platform).

Note that the Mono runtime is available for a wide variety of CPU architectures, not just x86 and ARM. All
of these support F#.

### Ubuntu/Mint
{: #ubuntu .anchor  }

1. Add the mono repository to your package manager, as detailed [here](http://www.mono-project.com/download/#download-lin-ubuntu). 

2. Install the `fsharp` package, which will pull in an updated version of Mono, if required.

        sudo apt-get update
        sudo apt-get install fsharp

This installs the F# compiler `fsharpc` and and the F# intereactive `fsharpi`. 

### Debian
{: #debian .anchor }

1. Add the mono repository to your package manager, as detailed [here](http://www.mono-project.com/download/#download-lin-debian). 

2. Install the `fsharp` package, which will pull in an updated version of Mono, if required.

        sudo apt-get update
        sudo apt-get install fsharp

This installs the F# compiler `fsharpc` and and the F# intereactive `fsharpi`. 
Please note that the [Debian package](https://tracker.debian.org/pkg/fsharp) tends to be less up-to-date than the packages above.

### CentOS/RHEL/Amazon/Fedora
{: #centos .anchor  }

1. Add the mono repository to your package manager, as detailed [here](http://www.mono-project.com/download/#download-lin-centos)
1. [Follow these instructions](http://www.mono-project.com/docs/getting-started/install/linux/#centos-7-fedora-19-and-later-and-derivatives). 

2. Then install packages `mono-complete` and `fsharp`.

        sudo yum update
        sudo yum install mono-complete fsharp

This installs the F# compiler `fsharpc` and and the F# intereactive `fsharpi`. 


### Gentoo/Sabayon/Funtoo/Calculate
{: #gentoo .anchor  }

From portage tree:

       emerge fsharp

Alternatively there is an overlay available with current versions of various .NET programs, including F#, FAKE, NuGet and others.

1. Add the "dotnet" overlay from layman. (If you need to set it up, there is a [Manual](http://www.gentoo.org/proj/en/overlays/userguide.xml) on the Gentoo site.)
   
       layman -a dotnet 
   
2. Now you can build F#.
   
       emerge fsharp
   
3. (Optional) There are emacs mode and monodevelop bindings, you can chose what you want by setting use flags alike in following example:
   
       USE="+emacs -monodevelop" emerge fsharpbinding

<br />

## Option 2: Install from source


1. Get Mono, the cross-platform, open source .NET runtime implementation used by F#. Preferably use a package from your distribution or Xamarin. If this is not possible, [install from source by following these instructions](https://github.com/mono/mono).

   Note that if you are installing to a private prefix, [follow these instructions](http://mono-project.com/Parallel_Mono_Environments) and ensure `LD_LIBRARY_PATH` includes the "lib" directory of that prefix location and `PKG_CONFIG_PATH` includes the "lib/pkgconfig" directory of that prefix location, e.g.
   
        export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/user/mono/lib/
        export PKG_CONFIG_PATH=/home/user/mono/lib/pkgconfig/

2. Build and install the F# Compiler (open edition) from source. If using a VM or other memory-constrained system, be aware that errors during compilation may be due to insufficient memory (in particular error 137).

        sudo apt-get install autoconf libtool pkg-config make git automake
        git clone https://github.com/fsharp/fsharp
        cd fsharp
        ./autogen.sh --prefix /usr
        make
        sudo make install

   If installing to a different prefix, use the same prefix as for the Mono runtime above.

<br />


## Other options

<br />


### Use a Vagrant VM on Windows

To use F# on Linux VMs on Windows, use [F# with Vagrant](http://christoph.ruegg.name/blog/test-csharp-fsharp-on-mono-with-vagrant.html).

### Slackware Slackbuild

1. Get Mono Slackbuild from this page [http://slackbuilds.org/repository/14.1/development/mono/](http://slackbuilds.org/repository/14.1/development/mono/) and run :

     ./mono.SlackBuild

2. Get last FSharp Slackbuild from this page [http://slackbuilds.org/repository/14.1/development/fsharp/](http://slackbuilds.org/repository/14.1/development/fsharp/) and run :

    ./fsharp.SlackBuild
   
<br />


### Using Nix on any Linux distribution or Mac OS X

1. Install Nix if you don't already have it:

        sudo mkdir /nix && sudo chown `id -u`.`id -g` /nix # create /nix
        sudo -k                                            # give up root privileges
        curl https://nixos.org/nix/install | bash          # install Nix
        . $HOME/.nix-profile/etc/profile.d/nix.sh          # update PATH accordingly
 
2. Get F#

        nix-env -iA nixpkgs.fsharp
    
3. You might also like…

        # List all the .NET packages that are readily available in the Nix
        # package collection:
        nix-instantiate --eval --expr 'with import <nixpkgs> {};
                                         lib.attrNames dotnetPackages' 
    
        # Download FSharp.Data in the Nix store and make it available in ./FSData
        nix-build '<nixpkgs>' -A dotnetPackages.FSharpData --out-link FSData

Find out more about the [Nix package manager](https://nixos.org/nix/) and [NixOS](https://nixos.org/) (the purely functional Linux distribution based on it)

Explore (and contribute to) the collection of .NET applications and libraries in the [Nixpkgs GitHub repo](https://github.com/NixOS/nixpkgs/blob/master/pkgs/top-level/dotnet-packages.nix)
   
<br />

## Highly recommended: Install a smart editor
{: #smart-editor}

Like other strongly typed languages, F# can benefit tremendously from an editor that has support
for the language. This makes smart auto-completion and compiling while you edit possible, which 
increases the discoverability of features and programmer productivity in general.

<br />


### Option 1: Visual Studio Code

![logo](/images/thumbs/VSCode.png)&nbsp;[Visual Studio Code](https://code.visualstudio.com) is a free, [open source](https://github.com/microsoft/vscode), cross platform source code editor
supporting [a lot of languages](https://code.visualstudio.com/docs/languages/overview).
F# is supported by the [Ionide](http://ionide.io/) project and is a nice integration.

1. Install [Visual Studio Code](https://code.visualstudio.com/download) for Linux
2. Press `Ctrl+P` and enter the following to install the Ionide package for VS Code.

        ext install Ionide-fsharp

You will also need to install the F# packages from Step 1.

<br />


### Option 2: JetBrains Rider

![logo](/images/thumbs/rider.png)&nbsp;[JetBrains Rider](https://www.jetbrains.com/rider) is a cross-platform .NET IDE built using IntelliJ and ReSharper technology. It offers support for .NET and .NET Core applications on all platforms.

1. Install [JetBrains Rider](https://www.jetbrains.com/rider/download/) for Linux.
2. [Follow these instructions](http://www.mono-project.com/download/#download-lin-ubuntu). 
3. Then install packages `mono-complete`, `msbuild` and `fsharp`.

        sudo apt-get update
        sudo apt-get install mono-complete msbuild fsharp
		
4. (optional) Install latest `dotnet-dev-x.y.z` [.NET Core packages](https://www.microsoft.com/net/core#linuxubuntu)


## Get involved!
To help improve this docuemtnation, you can [submit an edit to this page](https://github.com/fsharp/fsfoundation/blob/gh-pages/use/linux/index.md).
Or to help with Linux packages, consider joining the [F# Core Engineering Group](http://fsharp.github.io).  

<br />

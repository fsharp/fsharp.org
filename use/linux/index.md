---
layout: default
title: Use F# on Linux | The F# Software Foundation
headline: Use F# on Linux
---

To help with Linux packages, please join the [F# Core Engineering Group](http://fsharp.github.io).  You can also 
[submit an edit to this page](https://github.com/fsharp/fsfoundation/blob/gh-pages/use/linux/index.md).

### Option 1: Use the F# Debian/Ubuntu packages 

To use the latest stable version of the F# Debian/Ubuntu package, it is highly
recommended that you:

1. [Follow these instructions](http://www.mono-project.com/docs/getting-started/install/linux/#debian-ubuntu-and-derivatives). 

2. Then install packages mono-complete and fsharp.

    sudo apt-get update
    sudo apt-get install mono-complete fsharp

This installs `fsharpc` and `fsharpi`. If you don't have access to these repositories, compile from source or see Option 6 below. Once installed, see the [Linux and Cross-Platform Development Guide](/guides/mac-linux-cross-platform) to
go further.

F# is also available as a [Debian package](http://packages.qa.debian.org/f/fsharp.html) though the package
tends to be less up-to-date than the packages above.

### Option 2: Install Visual Studio Code

![logo](/images/thumbs/VSCode.png)&nbsp;[Visual Studio Code](https://code.visualstudio.com) is Microsoft's free, [open source](https://github.com/microsoft/vscode), cross platform source code editor written entirely in TypeScript that is running on Linux, Windows and Mac OS.
It is supported by the [Ionide](http://ionide.io/) project and has, among [a lot of languages](https://code.visualstudio.com/docs/languages/overview), a nice F# integration.

1. Install [Visual Studio Code](https://code.visualstudio.com/download) for Windows
2. Install the [Ionide package for VS Code](https://marketplace.visualstudio.com/items?itemName=Ionide.Ionide-fsharp) <br />
Open the Quick Open Menu in VS Code by pressing `Ctrl+P` and write the following command: <br />
        ext install Ionide-fsharp

### Option 3: Build and install the F# runtime, compiler and tools


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

Once installed, see the [Linux and Cross-Platform Development Guide](/guides/mac-linux-cross-platform) to
go further.


### Option 3: F# for RHEL, CentOS, Amazon, Fedora w/ puppet/configuration management

To see an example of how to set it up, navigate to https://github.com/haf/vagrant-eventstore#run, read the README and look inside the `run` file and the `Vagrantfile` file. It pulls down all required dependencies and starts vagrant to get you up and running EventStore (as a sample application).

With the `epel`, `eventstore`, `mono` and `supervisor` puppet module and a reference to [packagecloud/haf/oss](https://packagecloud.io/haf/oss) repository, you can install a full environment and running service in a couple of minutes:

    class baseline {
      include ::epel
      include ::packagecloud
    
      packagecloud::repo { 'haf/oss':
        type => 'rpm',
      }
    }
    
    node default {
      include ::baseline
    
      class { 'mono':
        require => [
          Class['epel'],
          Packagecloud::Repo['haf/oss']
        ],
      }
    
      class { 'supervisor':
        require => [
          Class['epel'],
          Packagecloud::Repo['haf/oss']
        ],
      }
    
      include ::eventstore
    }

### Option 4: Get F# on Gentoo (Sabayon/Funtoo/Calculate)

From portage tree:

        emerge fsharp

Alternatively there is an overlay available with current versions of various .NET programs, including F#, FAKE, NuGet and others.

1. Add the "dotnet" overlay from layman. (If you need to set it up, there is a [Manual](http://www.gentoo.org/proj/en/overlays/userguide.xml) on the Gentoo site.)
   
       layman -a dotnet 
   
2. Now you can build F#.
   
       emerge fsharp
   
3. (Optional) There are emacs mode and monodevelop bindings, you can chose what you want by setting use flags alike in following example:
   
       USE="+emacs -monodevelop" emerge fsharpbinding

Once installed, see the [Linux and Cross-Platform Development Guide](/guides/mac-linux-cross-platform) to
go further.


### Option 5: Use a Vagrant VM on Windows

To use F# on Linux VMs on Windows, use [F# with Vagrant](http://christoph.ruegg.name/blog/test-csharp-fsharp-on-mono-with-vagrant.html).


### Option 6: Slackware Slackbuild

1. Get Mono Slackbuild from this page [http://slackbuilds.org/repository/14.1/development/mono/](http://slackbuilds.org/repository/14.1/development/mono/) and run :

     ./mono.SlackBuild

2. Get last FSharp Slackbuild from this page [http://slackbuilds.org/repository/14.1/development/fsharp/](http://slackbuilds.org/repository/14.1/development/fsharp/) and run :

    ./fsharp.SlackBuild
   

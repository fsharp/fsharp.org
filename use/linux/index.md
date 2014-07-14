---
layout: default
title: Use F# on Linux | The F# Software Foundation
headline: Use F# on Linux
---

To help with Linux packages, please email the [F# Open Source Group](http://fsharp.github.com).  You can also 
[submit an edit to this page](https://github.com/fsharp/fsfoundation/blob/gh-pages/use/linux/index.md).

### Option 1: Use the F# Debian packages 

F# is available as a [Debian package](http://packages.qa.debian.org/f/fsharp.html). The packages are currently available in Debian _experimental_ and Ubuntu 14.04 ([_trusty/universe_](http://packages.ubuntu.com/trusty/fsharp)), use:

    sudo apt-get update
    sudo apt-get install mono-complete
    sudo apt-get install fsharp

This installs `fsharpc` and `fsharpi`. If you don't have access to *trusty/universe*, compile from source or see Option 6 below.


Once installed, see the [Linux and Cross-Platform Development Guide](/guides/mac-linux-cross-platform) to
go further.


### Option 2: Build and install the F# 3.1 runtime, compiler and tools


1. Get Mono, the runtime used by F#. Either [follow these instructions](http://www.go-mono.com/mono-downloads/download.html) or use:

        sudo apt-get install mono-devel
   
   or build and install the latest release:
   
        sudo apt-get install libtool autoconf g++ gettext make git
        git clone https://github.com/mono/mono
        cd mono
        ./autogen.sh --prefix /usr
        make get-monolite-latest
        make EXTERNAL_MCS="${PWD}/mcs/class/lib/monolite/gmcs.exe"
        make
        sudo make install

   If installing to a private prefix, [follow these instructions](http://mono-project.com/Parallel_Mono_Environments) and ensure `LD_LIBRARY_PATH` includes the "lib" directory of that prefix location, e.g.
   
        export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/user/mono/lib/

2. Build and install the F# Compiler (open edition) from source.

        sudo apt-get install autoconf libtool pkg-config make git
        git clone https://github.com/fsharp/fsharp
        cd fsharp
        ./autogen.sh --prefix /usr
        make
        sudo make install

   If installing to a different prefix, use the same prefix as for the Mono runtime above.

Once installed, see the [Linux and Cross-Platform Development Guide](/guides/mac-linux-cross-platform) to
go further.


### Option 3: Get the F# 3.0 CentOS/RHEL/SciLinux packages with puppet

Compiling the RPMs is easy with
[FPM-recipes](https://github.com/haf/fpm-recipes). This will give you a *mono*
RPM and a *fsharp* RPM. Either you install these directly on your target system,
or you set up a [yum repository](https://github.com/haf/puppet-yum) to host
them.

When you have RPMs, the rest is really easy with
[puppet-mono](https://github.com/haf/puppet-mono) and
[puppet-fsharp](https://github.com/haf/puppet-fsharp) which take care of pulling
in the packages for you. The mono module also updates the CA-authority list from
Mozilla so that you don't get problems with HTTPS requests.

        include mono
        include fsharp

Or alternatively from the command line:

        sudo yum install -y mono fsharp

You can now do:

        fsharpi

Once installed, see the [Linux and Cross-Platform Development Guide](/guides/mac-linux-cross-platform) to
go further.


### Option 4: Get F# 3.1 on Gentoo ( Sabayon / Funtoo / Calculate )

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


### Option 6: Get access to the Debian packages

If you want to use Debian packages and don't have access to trusty/universe packages, then 
the following steps may allow access. However, if used on the wrong operation system version (eg some versions of Linux Mint), this can also make your system unable to reboot without some kind of manual fixing, so only do this if you know what you are doing :

1. Add the following using `sudo vi /etc/apt/sources.list`:

        deb http://azure.archive.ubuntu.com/ubuntu/ trusty main
        deb-src http://azure.archive.ubuntu.com/ubuntu/ trusty main
        
        deb http://azure.archive.ubuntu.com/ubuntu/ trusty universe
        deb-src http://azure.archive.ubuntu.com/ubuntu/ trusty universe

2. Install the fsharp packages with the following commands:

        sudo apt-get update
        sudo apt-get install mono-complete
        sudo apt-get install fsharp



---
layout: page
title: Use F# on Linux | The F# Software Foundation
headline: Use F# on Linux
---

To help with Linux packages, please email the [F# Open Source Group](http://fsharp.github.com).

Once installed, see the [Linux and Cross-Platform Development Guide](/guides/mac-linux-cross-platform) to
go further.

### Option 1: Build and install the F# 3.0 runtime, compiler and tools


1. Get Mono, the runtime used by F#. Either [follow these instructions](http://www.go-mono.com/mono-downloads/download.html) or use:

        sudo apt-get install mono-devel
   
   or build and install version 3.0 (needed for xbuild support)
   
        sudo apt-get install libtool autoconf g++ gettext make git
        git clone https://github.com/mono/mono
        cd mono
        ./autogen.sh   --prefix /usr
        make get-monolite-latest
        make
        sudo make install

   If installing to a private prefix, [follow these instructions](http://mono-project.com/Parallel_Mono_Environments) and ensure LD_LIBRARY_PATH includes the "lib" directory of that prefix location {{   export LD_LIBRARY_PATH="$LD_LIBRARY_PATH:/home/user/mono/lib/"  }}. 

2. Build and install the F# Compiler (open edition) from source.

        sudo apt-get install autoconf libtool pkg-config make git
        git clone https://github.com/fsharp/fsharp
        cd fsharp
        ./autogen.sh --prefix /usr
        make
        sudo make install

   If installing to a different prefix, use the same prefix as for the F# runtime above.

   Common commands are:

        fsharpi                            (starts F# interactive)
        fsharpc                            (F# compiler)
        xbuild                             (builds .fsproj projects and .sln files, authored in MonoDevelop or Visual Studio)
        mono file.exe arg1 ... argN        (runs a compiled F# program)
        mkbundle --static file.exe -o file (makes a static native image for an F# program, including the F# runtime)

### Option 2: Get the F# 3.0 Debian packages

Currently, F# is only available in Debian [unstable](http://www.debian.org/releases/sid/)
(see the [the package home page](http://packages.qa.debian.org/f/fsharp.html)).
If you're already running unstable, simply run `aptitude install fsharp fsharp-console` as root.
Otherwise, follow the following steps:

1. Add the following to /etc/apt/sources.list:

        deb http://http.us.debian.org/debian/ unstable main contrib non-free 
        deb-src http://http.us.debian.org/debian/ unstable main contrib non-free 

2. Add unstable to /etc/apt/preferences with a low pin-priority. For
   example, pinning unstable packages at -10 will ensure that aptitude
   will never automatically upgrade or install packages from unstable.
   The following preferences file is suitable for Debian testing:

        Package: *
        Pin: release o=Debian,a=testing
        Pin-Priority: 990

        Package: *
        Pin: release o=Debian,a=unstable
        Pin-Priority: -10

   If you want aptitude to upgrade fsharp automatically, use a pin-priority
   greater than or equal to 100. See [apt_preferences(5)](http://manpages.debian.net/cgi-bin/man.cgi?sektion=5&query=apt_preferences&apropos=0&manpath=sid&locale=en)
   for more details.

3. Install the fsharp packages with the following commands as root:

        aptitude update
        aptitude -t unstable install fsharp fsharp-console libfsharp-compiler4.3-cil \
            libfsharp-core4.3-cil libfsharp-compiler-interactive-settings4.3-cil \
            libfsharp-compiler-interactive-settings4.3-cil
        ln -s /usr/lib/cli/FSharp.*-4.3/*{dll,xml,sigdata,optdata} /usr/lib/mono/4.0

   If unstable has a positive pin-priority, you can replace the second
   command with `aptitude install fsharp fsharp-console`.
   The last line is needed due to packaging bugs [706683](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=706683) and [705906](http://bugs.debian.org/cgi-bin/bugreport.cgi?bug=705906).

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

### Option 4: Installation on Gentoo/Funtoo

There is an overlay available with current versions dotnet programs, available are F#, FAKE, nuget, etc.

1. Add the "dotnet" overlay from layman. (If you need to set it up, there is a [Manual](http://www.gentoo.org/proj/en/overlays/userguide.xml) on the Gentoo site.)

        layman -a dotnet 

2. Now you can build F#.

        emerge fsharp
        
3. (Optional) There are emacs mode and monodevelop bindings, you can chose what you want by setting use flags alike in following example:

        USE="+emacs -monodevelop" emerge fsharpbinding


### Option 5: Use a Vagrant VM on Windows

To use F# on Linux VMs on Windows, use [F# with Vagrant](http://christoph.ruegg.name/blog/test-csharp-fsharp-on-mono-with-vagrant.html).


### Option 6: Make JS/HTML5 web apps and run them in your browser

See [Using F# for HTML5 Web Applications](/use/html5)

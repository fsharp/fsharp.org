---
layout: default
title: Use F# on Linux | The F# Software Foundation
headline: Use F# on Linux
---

To help with Linux packages, please join the [F# Core Engineering Group](http://fsharp.github.io).  You can also 
[submit an edit to this page](https://github.com/fsharp/fsfoundation/blob/gh-pages/use/linux/index.md).

### Option 1: Use the F# Debian packages 

F# is available as a [Debian package](http://packages.qa.debian.org/f/fsharp.html). The packages are available in Debian _testing_ and Ubuntu 14.04 ([_trusty/universe_](http://packages.ubuntu.com/trusty/fsharp)).

It is highly recommended (albeit optional) that you add the Mono package repository to your sources in order to get a much more up to date version of the Mono runtime:

```bash
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb http://download.mono-project.com/repo/debian wheezy main" | sudo tee /etc/apt/sources.list.d/mono-xamarin.list
```

(These steps are documented here: http://www.mono-project.com/docs/getting-started/install/linux/#debian-ubuntu-and-derivatives)

Then proceed to install the fsharp & mono packages

```bash
sudo apt-get update
sudo apt-get install mono-complete fsharp
```

This installs `fsharpc` and `fsharpi`. If you don't have access to these repositoties, compile from source or see Option 6 below.


Once installed, see the [Linux and Cross-Platform Development Guide](/guides/mac-linux-cross-platform) to
go further.

For Linux, F# uses [Mono](http://mono-project.com), the cross-platform, open-source .NET implementation. Install at least `3.2.8`. 
Compiling Mono from source is a slow process so it is preferable to install using your package manager or
an [up-to-date package for various Linux distributions](http://www.go-mono.com/mono-downloads/download.html).
Debian *testing* and Ubuntu 14.04 have sufficiently recent versions available in the package repositories. 



### Option 2: Build and install the F# 3.1 runtime, compiler and tools


1. Get Mono, the cross-platform, open source .NET runtime implementation used by F#. Preferably use a package from your distribution or Xamarin. If this is not possible, [install from source by following these instructions](https://github.com/mono/mono).

   Note that if you are installing to a private prefix, [follow these instructions](http://mono-project.com/Parallel_Mono_Environments) and ensure `LD_LIBRARY_PATH` includes the "lib" directory of that prefix location, e.g.
   
        export LD_LIBRARY_PATH=$LD_LIBRARY_PATH:/home/user/mono/lib/

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


### Option 3: F# 3.x for RHEL, CentOS, Amazon, Fedora w/ puppet/configuration management

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

### Option 4: Get F# 3.1 on Gentoo (Sabayon/Funtoo/Calculate)

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



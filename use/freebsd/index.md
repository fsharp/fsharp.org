---
layout: page
title: Use F# on FreeBSD | The F# Software Foundation
headline: Use F# on FreeBSD
---


### Option 1: Build and install the F# 3.0 runtime, compiler and tools from the FreeBSD ports collection

*The commands for steps 1-3 must be run as 'root', e.g., using `su`.*

1. Update your local copy of the ports collection:

       portsnap fetch update


2. Build and install Mono:

   If you do not have an existing Mono installation, you can just build and install the latest version:

       cd /usr/ports/lang/mono
       make install clean BATCH=yes

   If you already have an older version of Mono installed on your system, you must de-install the existing
   version before installing the new version:

       cd /usr/ports/lang/mono
       make deinstall
       make install clean BATCH=yes

   NOTE : Mono is dependent on several other ports, which will automatically be compiled and installed (if necessary)
   before proceeding with the Mono build/installation. The ``BATCH=yes`` option tells `make` to configure these
   dependencies using their default build settings; if you want to modify these settings, leave this option off.


3. Build and install the F# compiler (open edition) and libraries:

       cd /usr/ports/lang/fsharp
       make install clean

4. F# is now installed on your system. Confirm the installation was successful by launching F# interactive:

       fsharpi

   If you're greeted with the F# interactive shell, the installation was successful -- type ``#quit;;`` and press ENTER to exit.


### Using F# on FreeBSD

Once installed, use `fsharpi` to start F# Interactive, and use `fsharpc` to compile.

    fsharpi     (starts F# interactive)
    fsharpc     (F# compiler)
    xbuild      (Builds .fsproj projects and .sln files, including ones authored in Visual Studio)

If running F# interactive in Emacs or another similar environment, use
              
    fsharpi --readline-

to turn off console processing.


### Editing tools

Some editors have specific support for F#, either builtin or through addons provided by the F# community: 

* Emacs. There is an [F# mode for Emacs](http://fsharp.github.com/fsharpbinding/) that extends Emacs with syntax highlighting and much more.

  You can install emacs from a binary package:

       pkg_add -r emacs

  If a package is unavailable for your system (for whatever reason), you can build and install emacs from the ports collection:

       cd /usr/ports/editors/emacs
       make install clean

  More information can be found in the FreeBSD Developers' Handbook: [Using Emacs as a Development Environment](http://www.freebsd.org/doc/en/books/developers-handbook/emacs.html).


### Notes

* The installation instructions above have been tested on both the i386 and amd64 builds of FreeBSD 9.1-RELEASE.
  They should work for other versions as well -- if they don't work on your system, please contact the
  [fsharp-opensource](https://groups.google.com/group/fsharp-opensource) group and/or the
  [freebsd-mono](http://lists.freebsd.org/mailman/listinfo/freebsd-mono) mailing list for assistance.


<br> </br>
<br> </br>


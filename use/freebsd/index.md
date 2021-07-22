---
layout: default
title: Use F# on FreeBSD | The F# Software Foundation
headline: Use F# on FreeBSD
---


### Option 1: Build and install the F# runtime, compiler and tools from the FreeBSD ports collection

*The commands for steps 1-4 must be run as 'root', e.g., using `su`.*

1. Update your local copy of the ports collection:

   If this is the first time you're running portsnap on your system (e.g., you've just installed FreeBSD), you'll need
   to fetch a complete copy of the ports collection:

       portsnap fetch extract

   Otherwise, you can just update your local copy of the ports collection:

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
       make install clean BATCH=yes


4. F# is now installed on your system. Confirm the installation was successful by launching F# interactive:

       fsharpi

   If you're greeted with the F# interactive shell, the installation was successful -- type ``#quit;;`` and press ENTER to exit.


### Editing tools

Some editors have specific support for F#, either builtin or through addons provided by the F# community: 

* Emacs. There is an [F# mode for Emacs](https://github.com/fsharp/emacs-fsharp-mode) that extends Emacs with syntax highlighting and much more.

  For console-only users, install the [editors/emacs-nox11](http://www.freshports.org/editors/emacs-nox11/) port:

       cd /usr/ports/editors/emacs-nox11
       make install clean BATCH=yes

  For desktop (GUI) users, install the [editors/emacs](http://www.freshports.org/editors/emacs/) port:

       cd /usr/ports/editors/emacs
       make install clean BATCH=yes

  Once ``emacs`` is installed, follow the directions in the [fsharp-mode README](https://github.com/fsharp/fsharpbinding/blob/master/emacs/README.md)
  to install the *fsharp-mode* package.

  More information can be found in the FreeBSD Developers' Handbook: [Using Emacs as a Development Environment](http://www.freebsd.org/doc/en/books/developers-handbook/emacs.html).


### Notes

* The installation instructions above have been tested on both the i386 and amd64 builds of FreeBSD 9.1-RELEASE.
  They should work for other versions as well -- if they don't work on your system, please contact the
  [fsharp-opensource](https://groups.google.com/group/fsharp-opensource) group and/or the
  [freebsd-mono](http://lists.freebsd.org/mailman/listinfo/freebsd-mono) mailing list for assistance.

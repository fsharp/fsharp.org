---
id: goswin-1
bullets:
- '**Goswin Rothenthal**'
- Design Engineer
- Waagner Biro
keywords:
- geometry
- CAD
- construction industry
- Rhino
quote: We see great potential for F# to be used as a scripting language in CAD; it fits very well for computational design challenges in the construction industry.
---
<a href="http://www.waagner-biro.com/en/company/news-press/news/oriental-jewel-by-waagner-biro-the-domed-roof-of-the-louvre-abu-dhabi"> <img src="/img/big/goswin-waggner.png" /></a>

In recent years many Architects have discovered that they can greatly enlarge their design repertoire by the use of parametric design, programming or scripting. Architects can now quickly and easily explore new geometries previously unseen in Architecture. Besides being designed in a novel way these geometries can also be exactly represented and reasoned about in terms of structural feasibility and manufacturing constraints. These facts take new geometries out of the dreams of Architects and make them real candidates for construction.

One such project is the *Louvre Abu Dhabi* by Jean Nouvel. Waagner-Biro was awarded the construction contract for the Dome. For the cladding of this dome more than 450´000 individual cutting and drilling patterns of custom aluminium extrusions had to be described and automated. The sheer scale and complexity of the cladding on the dome required us to re-evaluate our parametric design approach. I developed an F# application to represent and organize all cladding elements of the dome. It includes a small geometry kernel and an adapted version of the Half Edge Data Structure to efficiently query the neighbourhood of each element. I used Rhino and its .NET API to host the F# DLL for drawing and visualisation. This application enabled us to have an integrated workflow from the main geometry setout all the way down to the manufacturing data in a single parametric model. This project was the first use of F# at Waagner-Biro for a large scale project. The switch to F# from dynamic scripting languages helped to reduce development time and execution time. The strongly typed environment, algebraic data types and immutable data helped to avoid a whole range of bugs and fits well the domain of generating static 3d geometry. I see great potential for F# to be used as scripting languages in CAD, especially since most big CAD packages already offer a .NET API.

(Image credits: Jean Nouvel Architects)

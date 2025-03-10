---
id: microsoft-narwhal-1
bullets:
- '**Rob Fatland**, Microsoft Research'
keywords:
- visualiztion
- astronomy
- oceanographic research
- Microsoft
quote: '...We use F# in oceanographic research to connect multiple visualizations together in time and space...'
---
We use F# in oceanographic research to connect multiple visualizations together in time and space, which is map-plane location and depth. We began by building our Narwhal Developers Library for Layerscape 
in C# with emphasis on visualizing flow lines and understanding drift experiment data. These data are quite complex, involving physical ocean state and measurement of microbial metabolic processes, consolidating remote sensing and passive drifters, and adding to all this current measurements with the tracks of autonomous robots. Our technical term for the visualization challenge is ‘horrible’. 

To cope with the horrible we began adding F# scripts; and this has been extremely productive, particularly in morphing ideas about data exploration into real tools quickly. Our most interesting achievement to date is to wire a chart into a 4D visual environment. The set-up is like this: The scientist sees two views of the data: First color coded structure in a curtain plot of time versus depth (chlorophyll coded as color for example), and second this same data time-boxed in the dynamic Worldwide Telescope (WWT) visualization engine. F# is used to wire them together: Left click (and drag) in the chart to scroll the WWT clock back and forth.  Right-click + drag in the chart to select a subset of the data which is then used to construct a new (small) advection visualization. Because the selected pieces are small and chosen interactively we get around the horrible problem of seeing everything at once.  It is like seeing an entire forest and making all but a few curious trees vanish. So F# has been a great way to make rapid progress, and fun to learn as well.  
    
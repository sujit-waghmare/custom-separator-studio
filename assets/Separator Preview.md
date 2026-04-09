*make sure to disable separator studio plugin first. Or switch to editing view.* I trust that you've read ![License](https://img.shields.io/github/license/bigelephant67/custom-separator-studio?style=flat-square) 
### 01. Solid Line

<hr style="border: none; border-top: 2px solid currentColor;" />


### 02. Dashed Line

<hr style="border: none; border-top: 2px dashed currentColor;" />


### 03. Dotted Line

<hr style="border: none; border-top: 4px dotted currentColor;" />


### 04. Double Line

<hr style="border: none; border-top: 4px double currentColor;" />


### 05. Fading Edges


<hr style="border: 0; height: 2px; background-image: linear-gradient(to right, transparent, currentColor, transparent);" />


### 06. Centered Short Divider

<hr style="border: none; border-top: 3px solid currentColor; width: 30%; margin: 20px auto;" />


### 07. Thick Colored Line

<hr style="border: none; height: 4px; background-color: #e88b23;" />


### 08. Groove 3D Line

<hr style="border: 3px groove currentColor;" />


### 09. Shadow Line

<hr style="border: none; height: 1px; background-color: currentColor; box-shadow: 0 3px 5px currentColor;" />


### 10. Two-Tone Gradient Line

<hr style="border: 0; height: 3px; background-image: linear-gradient(to right, #4facfe 0%, #fffffe 100%);" />


### 11. Cyan Neon Glow

<hr style="border: none; height: 2px; background-color: #00ffff; box-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff;" />


### 12. Pink Pulse Border

<hr style="border: 1px solid #ff00ff; box-shadow: 0 0 8px #ff00ff, inset 0 0 8px #ff00ff; height: 4px; background-color: transparent;" />


### 13. Laser Line

<hr style="border: none; height: 1px; background-color: #39ff14; box-shadow: 0 0 4px #39ff14, 0 0 8px #39ff14, 0 0 12px #39ff14;" />


### 14. Yellow Drop-Shadow Dashed

<hr style="border: 2px dashed #ffff00; filter: drop-shadow(0 0 5px #ffff00);" />


### 15. Purple Double Glow

<hr style="border: none; height: 6px; border-top: 2px solid #8a2be2; border-bottom: 2px solid #8a2be2; box-shadow: 0 0 6px #8a2be2;" />


### 16. Left Fading Line

<hr style="border: 0; height: 2px; background-image: linear-gradient(to right, currentColor, transparent);" />


### 17. Right Fading Line

<hr style="border: 0; height: 2px; background-image: linear-gradient(to left, currentColor, transparent);" />


### 18. Fading Dashed Line

<hr style="border: none; height: 1px; background: repeating-linear-gradient(90deg, currentColor, currentColor 10px, transparent 10px, transparent 20px); -webkit-mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);" />


### 19. Soft Blurred Fading Center

<hr style="border: 0; height: 4px; background-image: linear-gradient(to right, transparent, currentColor, transparent); filter: blur(2px);" />


### 20. Sharp Center Fading Edges

<hr style="border: 0; height: 1px; background-image: linear-gradient(to right, transparent, currentColor 20%, currentColor 80%, transparent);" />


### 21. Shadow "Depth" Break

<div style="height: 20px; width: 100%; box-shadow: inset 0 10px 10px -10px rgba(0,0,0,0.8); margin: 30px 0;"></div>

### 22. "Circuit Board" Trace

<div style="display: flex; align-items: center; margin: 25px 0;">
  <div style="flex: 1; height: 2px; background: #444;"></div>
  <div style="width: 10px; height: 10px; border: 2px solid #7433ff; border-radius: 50%; background: #1e1e1e; margin: 0 5px;"></div>
  <div style="flex: 1; height: 2px; background: #444;"></div>
</div>

### 23. "Floating" Numbered Separator

<div style="display: flex; align-items: center; margin: 30px 0;">
  <div style="flex: 1; height: 1px; background: #444;"></div>
  <div style="width: 30px; height: 30px; border: 1px solid #7433ff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-family: monospace; color: #7433ff; font-weight: bold; margin: 0 10px;">
    02
  </div>
  <div style="flex: 1; height: 1px; background: #444;"></div>
</div>

### 24. The "Pulse" Data Line

<div style="display: flex; align-items: center; justify-content: center; margin: 30px 0;">
  <div style="flex: 1; height: 1px; background: linear-gradient(to left, #444, transparent);"></div>
  <svg width="60" height="20" viewBox="0 0 60 20">
    <path d="M0 10 L20 10 L25 2 L35 18 L40 10 L60 10" fill="none" stroke="#7433ff" stroke-width="2"/>
  </svg>
  <div style="flex: 1; height: 1px; background: linear-gradient(to right, #444, transparent);"></div>
</div>

### 25. Technical "Wedge" Separator

<div style="height: 5px; width: 100%; background: linear-gradient(90deg, #FF0000, #7433ff); clip-path: polygon(0% 0%, 100% 0%, 95% 100%, 5% 100%); margin: 25px 0;"></div>

### 26. SVG "Wave" Separators

<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 30L60 35C120 40 240 50 360 45C480 40 600 20 720 15C840 10 960 20 1080 30C1200 40 1320 50 1380 55L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V30Z" fill="#333"/>
</svg>

### 27. Interactive "Glass" Progress Bars
Instead of a simple static bar, you can create a "Glassmorphism" effect using HTML. It changes based on how many seprators you have. If you have `n` number of seprator then it'll calculate percentage by the formula $\frac{100}{n}$  and resultant answer in % is selected for initial seprator, and 100% will be selected for final. If you've 7 seprator then it'll be 14% for initial and 100% for final. **Note:** for better accuracy and measurement make sure to add final seprator at the end of the note.
You can see the sample given below:

<div style="width: 100%; background: rgba(255,255,255,0.1); border-radius: 8px; border: 1px solid rgba(255,255,255,0.2); backdrop-filter: blur(5px);">
  <div style="width: 28%; height: 15px; background: linear-gradient(90deg, #ff0000, #ff7300); border-radius: 7px; text-align: center; line-height: 15px; color: white; font-size: 10px; font-weight: bold;">
    28% Complete
  </div>
</div>
### 28. The "Dotted Logic" Separator

<hr style="border: none; border-top: 3px dotted #7433ff; color: #fff; background-color: transparent; height: 1px; width: 50%;">


### 29. The "Gradient Glow" Rule

<div style="height: 2px; background: linear-gradient(to right, transparent, #FF0000, transparent); margin: 20px 0;"></div>

### 30. Text-Integrated Separator

<div style="display: flex; align-items: center; text-align: center; color: #555;">
  <div style="flex: 1; height: 1px; background: #444;"></div>
  <span style="padding: 0 10px; font-size: 0.8em; letter-spacing: 2px; text-transform: uppercase;">Next Section</span>
  <div style="flex: 1; height: 1px; background: #444;"></div>
</div>

### 31. Icon-Centered Separator

<div style="display: flex; align-items: center; text-align: center; margin: 20px 0;">
  <div style="flex: 1; height: 1px; background: linear-gradient(to left, #444, transparent);"></div>
  <span style="padding: 0 15px; font-size: 1.5em; color: #7433ff;">😁</span>
  <div style="flex: 1; height: 1px; background: linear-gradient(to right, #444, transparent);"></div>
</div>
### 32. Centered Faded Short Seprator

<hr style="border: 0; height: 3px; background-image: linear-gradient(to right, transparent, currentColor, transparent); width: 60%; margin: 10px auto;" />

---
Made by: https://github.com/bigelephant67
GitHub repo: https://github.com/bigelephant67/custom-separator-studio
Date: 2026-04-10
cssclasses:
  - r-Y
---
# 🎨 Separator Studio — Complete 1:1 Tutorial

![GitHub release (latest by asset)](https://img.shields.io/github/v/release/bigelephant67/custom-separator-studio?color=blue&style=flat-square)
![Obsidian Minimum Version](https://img.shields.io/badge/Obsidian-v0.15.0+-purple?style=flat-square)
![License](https://img.shields.io/badge/License-All_Rights_Reserved-red?style=flat-square)
![GitHub Release Date](https://img.shields.io/github/release-date/bigelephant67/custom-separator-studio?style=flat-square)

---

## 📦 STEP 1: Prerequisites

Before anything, make sure you have the following ready in Obsidian:

1. **Reading View** — This plugin specifically targets the rendering of horizontal rules in Reading View/Preview mode.
2. **Separator Studio** — The plugin we are installing to handle the custom styling.

To prepare for installation:
> Obsidian → Settings → Community Plugins → Turn off Restricted Mode → Browse

---

## 🗂 STEP 2: Manual Installation of the Plugin

Since this plugin is not on the community store yet, install it manually from [GitHub](https://github.com/bigelephant67/custom-separator-studio).

### Folder structure you need:


```
YourVault/
	└── .obsidian/
		└── plugins/
			└── custom-separator-studio/
				├── main.js
				├── manifest.json
				└── styles.css
```

### Steps:

1. Open your vault folder on your computer.
   - Windows: Right-click vault in Obsidian → "Open vault folder"
   - Mac/Linux: Same option in File menu.
2. Navigate to `.obsidian/plugins/`.
   - If the `plugins/` folder doesn't exist, create it manually.
3. Create a new folder named exactly: `custom-separator-studio`
4. Paste `main.js`, `manifest.json`, and `styles.css` inside it.
5. Open Obsidian.
6. Go to **Settings → Community Plugins**.
7. Click the **Refresh** button (circular arrow icon).
8. Find **"Separator Studio"** in the list.
9. Toggle it **ON**.

✅ Your standard `---` lines are now ready to be transformed.

---

## ⚙️ STEP 3: Plugin Settings

Go to:
> Settings → (scroll down) → Separator Studio

You will see three primary sections for customization:


### 🔢 Section 1: Master Preview & Global Style

- **Master Live Preview**: A large box at the top showing exactly how your chosen separator looks.
- **Style Selection**: Choose from 32 distinct designs (0 to 31).
- **Apply Button**: Changes apply to your notes once you hit the "Apply" button or switch notes.
- **Default**: Style 0 (Standard subtle line).


### 🎨 Section 2: Per-Separator Controls

Each separator is housed in a **collapsible drawer**. Click a drawer to open specific settings:

#### Customization Options:

1. **Color Selection**:
   - **Solid Color**: Pick a single color for the line/icon.
   - **Gradient**: Toggle dual-color mode for smooth transitions.
2. **Thickness Slider**:
   - Adjust the height/weight of the separator (typically 1px to 20px+).
3. **Text Input**:
   - For separators with labels (like "End of Note" styles), type your custom text here.
4. **Mini Preview**:
   - Every drawer has its own small preview so you can see changes before clicking Apply.


### 📋 Section 3: Progress Bar Logic (Special Styles)

If you select **Separator 27**, the plugin switches to "Auto-Progress" mode.

#### How it works:

- **The Formula**: The plugin counts every `---` in your note. 
- **Auto-Calculation**: It uses `(i+1) * (100/n)` to ensure:
  - The first bar is never 0%.
  - The last bar is always 100%.
  - Every bar in between is mathematically spaced.
- **Text Centering**: A layered Flexbox system ensures the percentage text stays perfectly centered regardless of the thickness you set.

---

## 📝 STEP 4: Using the Custom Separators

### 4.1 — Use standard Markdown

In any note, simply type the standard horizontal rule syntax:

```markdown
---
```
### 4.2 — What the plugin renders
| Element | Visual Result |
|---|---|
| Standard --- | Replaced by your chosen graphical style |
| Custom Colors | Applied via CSS variables dynamically |
| Progress | Calculated automatically (for Style 27) |
### 4.3 — Where to use them
Good places to use these custom separators:
 * **Long-form essays** to break up major chapters.
 * **Daily Notes** to separate "Morning Reflection" from "Task Lists".
 * **Dashboards** to create distinct visual headers.
 * **Course Notes** to indicate progress through a lecture.

---

## 🧪 STEP 5: Testing It Works
Follow this exact sequence to verify everything is working:
 1. Make sure the plugin is enabled (Step 2).
 2. Create a new note and type --- on three separate lines.
 3. Switch to **Reading View**.
 4. Go to **Settings → Separator Studio** and change the color to Red.
 5. Click **Apply**.
 6. Your note should now show three red custom separators.

---

## 🚫 STEP 6: Testing Auto-Progress (Style 27)
 1. Go to **Settings → Separator Studio**.
 2. Select **Separator 27** from the list.
 3. Open a long note and add 4 horizontal rules (---) throughout the page.
 4. Switch to **Reading View**.
 5. The first bar should show **25%**, the second **50%**, the third **75%**, and the last **100%**.
 6. Add one more --- in the middle — the percentages should update to 20%, 40%, etc., immediately.

---

## ❌ STEP 7: Troubleshooting
### Problem: Separators look like standard lines
 * Make sure you are in **Reading View**. Most custom styling doesn't show in Live Preview/Editing mode yet.
 * Ensure you clicked the **Apply** button in settings.
### Problem: Progress bars all show 100%
 * This was a bug in v1.1.0. Ensure you are on **v1.3.0** or higher.
 * v1.3.0 uses a MutationObserver to count the total separators correctly.
### Problem: Text is cut off or uncentered
 * Check the **Thickness Slider**. If the separator is too thin, the text might not have room to breathe.
 * Increase thickness to at least 15px for text-based styles.
### Problem: Plugin doesn't appear after manual install
 * Double-check the folder is named exactly custom-separator-studio.
 * Ensure styles.css is present; without it, the separators will have no shape or color.

---

## 💡 STEP 8: Pro Tips
 * **Gradient Aesthetics** — Use a lighter and darker shade of the same color for a professional "metallic" or "glass" look.
 * **Note Navigation** — Use the Progress Bar style in long research notes to visually see how far you've scrolled.
 * **Consistent Branding** — Pick one style and color for your entire vault to make your Obsidian feel like a custom app.
 * **Cleanup** — If you ever uninstall, your notes remain perfectly valid Markdown because the plugin uses standard --- tags.

---

## 🗺 Quick Reference Card
| What you want            | How to do it                              |
| ------------------------ | ----------------------------------------- |
| Change Separator Style   | Settings → Style Dropdown                 |
| Change Line Color        | Settings → Color Picker                   |
| Make it a Gradient       | Settings → Toggle Gradient → Pick Color 2 |
| Show Percentage Progress | Choose Style 27                           |
| Update current notes     | Click "Apply" in Settings                 |
| Reset Appearance         | Toggle the plugin Off and On              |

---

## 📁 File Reference
| File | Purpose | Edit? |
|---|---|---|
| main.js | Logic for rendering and settings | ❌ No |
| manifest.json | Versioning and ID info | ❌ No |
| styles.css | The visual design for all 32 styles | ✅ Optional |
*Plugin version: 1.3.0 — Compatible with Obsidian 0.15.0 and above*

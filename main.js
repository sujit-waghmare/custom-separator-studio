'use strict';

const { Plugin, PluginSettingTab, Setting, MarkdownRenderer, Component } = require('obsidian');

// ─── Separator definitions ────────────────────────────────────────────────────
const SEPARATORS = [
  { id: 1,  name: "Solid Line",                    hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 2,  name: "Dashed Line",                   hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 3,  name: "Dotted Line",                   hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 4,  name: "Double Line",                   hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 5,  name: "Fading Edges",                  hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 6,  name: "Centered Short Divider",        hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 7,  name: "Thick Colored Line",            hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 8,  name: "Groove 3D Line",                hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 9,  name: "Shadow Line",                   hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 10, name: "Two-Tone Gradient Line",        hasColor: false, hasGradient: true,  hasText: false, hasThickness: true  },
  { id: 11, name: "Cyan Neon Glow",                hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 12, name: "Pink Pulse Border",             hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 13, name: "Green Laser Line",              hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 14, name: "Yellow Drop-Shadow Dashed",     hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 15, name: "Purple Double Glow",            hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 16, name: "Left Fading Line",              hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 17, name: "Right Fading Line",             hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 18, name: "Fading Dashed Line",            hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 19, name: "Soft Blurred Fading Center",    hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 20, name: "Sharp Center Fading Edges",     hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 21, name: "Shadow Depth Break",            hasColor: false, hasGradient: false, hasText: false, hasThickness: false },
  { id: 22, name: "Circuit Board Trace",           hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 23, name: "Floating Numbered Separator",   hasColor: true,  hasGradient: false, hasText: true,  hasThickness: true, textLabel: "Number / Text", textDefault: "01" },
  { id: 24, name: "Pulse Data Line",               hasColor: true,  hasGradient: false, hasText: false, hasThickness: false },
  { id: 25, name: "Technical Wedge Separator",     hasColor: false, hasGradient: true,  hasText: false, hasThickness: true  },
  { id: 26, name: "SVG Wave Separator",            hasColor: true,  hasGradient: false, hasText: false, hasThickness: false },
  { id: 27, name: "Interactive Glass Progress Bar",hasColor: false, hasGradient: true,  hasText: true,  hasThickness: true, textLabel: "Progress % (0-100)", textDefault: "50" },
  { id: 28, name: "Dotted Logic Separator",        hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 29, name: "Gradient Glow Rule",            hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
  { id: 30, name: "Text-Integrated Separator",     hasColor: true,  hasGradient: false, hasText: true,  hasThickness: true, textLabel: "Label Text", textDefault: "Next Section" },
  { id: 31, name: "Icon-Centered Separator",       hasColor: true,  hasGradient: false, hasText: true,  hasThickness: false, textLabel: "Icon / Emoji / Symbol", textDefault: "✦" },
  { id: 32, name: "Centered Faded Short Separator",hasColor: true,  hasGradient: false, hasText: false, hasThickness: true  },
];

// ─── HTML generator ───────────────────────────────────────────────────────────
function generateHTML(id, color1, color2, thickness, customText) {
  const c1 = color1 || '#7433ff';
  const c2 = color2 || '#ff0000';
  const th = thickness || 2;
  const txt = customText || '';

  switch (id) {
    case 1:  return `<hr style="border:none;border-top:${th}px solid ${c1};" />`;
    case 2:  return `<hr style="border:none;border-top:${th}px dashed ${c1};" />`;
    case 3:  return `<hr style="border:none;border-top:${th}px dotted ${c1};" />`;
    case 4:  return `<hr style="border:none;border-top:${th}px double ${c1};" />`;
    case 5:  return `<hr style="border:0;height:${th}px;background-image:linear-gradient(to right,transparent,${c1},transparent);" />`;
    case 6:  return `<hr style="border:none;border-top:${th}px solid ${c1};width:30%;margin:20px auto;" />`;
    case 7:  return `<hr style="border:none;height:${th}px;background-color:${c1};" />`;
    case 8:  return `<hr style="border:${th}px groove ${c1};" />`;
    case 9:  return `<hr style="border:none;height:${th}px;background-color:${c1};box-shadow:0 3px 5px ${c1};" />`;
    case 10: return `<hr style="border:0;height:${th}px;background-image:linear-gradient(to right,${c1} 0%,${c2} 100%);" />`;
    case 11: return `<hr style="border:none;height:${th}px;background-color:${c1};box-shadow:0 0 5px ${c1},0 0 10px ${c1};" />`;
    case 12: return `<hr style="border:${th}px solid ${c1};box-shadow:0 0 8px ${c1},inset 0 0 8px ${c1};height:${th}px;background-color:transparent;" />`;
    case 13: return `<hr style="border:none;height:${th}px;background-color:${c1};box-shadow:0 0 4px ${c1},0 0 8px ${c1},0 0 12px ${c1};" />`;
    case 14: return `<hr style="border:${th}px dashed ${c1};filter:drop-shadow(0 0 5px ${c1});" />`;
    case 15: return `<hr style="border:none;height:${th * 3}px;border-top:${th}px solid ${c1};border-bottom:${th}px solid ${c1};box-shadow:0 0 6px ${c1};" />`;
    case 16: return `<hr style="border:0;height:${th}px;background-image:linear-gradient(to right,${c1},transparent);" />`;
    case 17: return `<hr style="border:0;height:${th}px;background-image:linear-gradient(to left,${c1},transparent);" />`;
    case 18: return `<hr style="border:none;height:${th}px;background:repeating-linear-gradient(90deg,${c1},${c1} 10px,transparent 10px,transparent 20px);-webkit-mask-image:linear-gradient(to right,transparent,black 20%,black 80%,transparent);" />`;
    case 19: return `<hr style="border:0;height:${th}px;background-image:linear-gradient(to right,transparent,${c1},transparent);filter:blur(2px);" />`;
    case 20: return `<hr style="border:0;height:${th}px;background-image:linear-gradient(to right,transparent,${c1} 20%,${c1} 80%,transparent);" />`;
    case 21: return `<div style="height:20px;width:100%;box-shadow:inset 0 10px 10px -10px rgba(0,0,0,0.8);margin:30px 0;"></div>`;
    case 22: return `<div style="display:flex;align-items:center;margin:25px 0;"><div style="flex:1;height:${th}px;background:#444;"></div><div style="width:10px;height:10px;border:${th}px solid ${c1};border-radius:50%;background:#1e1e1e;margin:0 5px;"></div><div style="flex:1;height:${th}px;background:#444;"></div></div>`;
    case 23: return `<div style="display:flex;align-items:center;margin:30px 0;"><div style="flex:1;height:${th}px;background:#444;"></div><div style="width:30px;height:30px;border:${th}px solid ${c1};border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:monospace;color:${c1};font-weight:bold;margin:0 10px;">${txt || '01'}</div><div style="flex:1;height:${th}px;background:#444;"></div></div>`;
    case 24: return `<div style="display:flex;align-items:center;justify-content:center;margin:30px 0;"><div style="flex:1;height:1px;background:linear-gradient(to left,#444,transparent);"></div><svg width="60" height="20" viewBox="0 0 60 20"><path d="M0 10 L20 10 L25 2 L35 18 L40 10 L60 10" fill="none" stroke="${c1}" stroke-width="2"/></svg><div style="flex:1;height:1px;background:linear-gradient(to right,#444,transparent);"></div></div>`;
    case 25: return `<div style="height:${th}px;width:100%;background:linear-gradient(90deg,${c1},${c2});clip-path:polygon(0% 0%,100% 0%,95% 100%,5% 100%);margin:25px 0;"></div>`;
    case 26: return `<svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 30L60 35C120 40 240 50 360 45C480 40 600 20 720 15C840 10 960 20 1080 30C1200 40 1320 50 1380 55L1440 60V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V30Z" fill="${c1}"/></svg>`;
    case 27: {
      const pct = Math.min(100, Math.max(0, parseInt(txt) || 50));
      return `<div style="width:100%;background:rgba(255,255,255,0.1);border-radius:8px;border:1px solid rgba(255,255,255,0.2);backdrop-filter:blur(5px);"><div style="width:${pct}%;height:${th}px;background:linear-gradient(90deg,${c1},${c2});border-radius:7px;text-align:center;line-height:${th}px;color:white;font-size:10px;font-weight:bold;">${pct > 15 ? pct + '% Complete' : ''}</div></div>`;
    }
    case 28: return `<hr style="border:none;border-top:${th}px dotted ${c1};width:50%;" />`;
    case 29: return `<div style="height:${th}px;background:linear-gradient(to right,transparent,${c1},transparent);margin:20px 0;"></div>`;
    case 30: return `<div style="display:flex;align-items:center;text-align:center;color:${c1};"><div style="flex:1;height:${th}px;background:#444;"></div><span style="padding:0 10px;font-size:0.8em;letter-spacing:2px;text-transform:uppercase;">${txt || 'Next Section'}</span><div style="flex:1;height:${th}px;background:#444;"></div></div>`;
    case 31: return `<div style="display:flex;align-items:center;text-align:center;margin:20px 0;"><div style="flex:1;height:1px;background:linear-gradient(to left,#444,transparent);"></div><span style="padding:0 15px;font-size:1.5em;color:${c1};">${txt || '✦'}</span><div style="flex:1;height:1px;background:linear-gradient(to right,#444,transparent);"></div></div>`;
    case 32: return `<hr style="border:0;height:${th}px;background-image:linear-gradient(to right,transparent,${c1},transparent);width:60%;margin:10px auto;" />`;
    default: return `<hr />`;
  }
}

// ─── Default settings ─────────────────────────────────────────────────────────
const DEFAULT_SETTINGS = {
  selectedId: 1,
  color1: '#7433ff',
  color2: '#ff0000',
  thickness: 2,
  customText: '',
};

// ─── Plugin ───────────────────────────────────────────────────────────────────
class SeparatorStudioPlugin extends Plugin {
  async onload() {
    await this.loadSettings();
    this.addSettingTab(new SeparatorStudioSettingTab(this.app, this));
    this.registerMarkdownPostProcessor((el) => {
      el.querySelectorAll('hr').forEach(hr => {
        const html = generateHTML(
          this.settings.selectedId,
          this.settings.color1,
          this.settings.color2,
          this.settings.thickness,
          this.settings.customText
        );
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        hr.replaceWith(wrapper.firstElementChild || wrapper);
      });
    });
  }

  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }

  async saveSettings() {
    await this.saveData(this.settings);
  }
}

// ─── Settings Tab ─────────────────────────────────────────────────────────────
class SeparatorStudioSettingTab extends PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
    this.expandedId = null;
  }

  display() {
    const { containerEl } = this;
    containerEl.empty();

    // ── inject styles ──
    const style = containerEl.createEl('style');
    style.textContent = `
      .ss-header { font-family: monospace; font-size: 1.3em; font-weight: bold; margin-bottom: 4px; letter-spacing: 1px; }
      .ss-sub    { color: var(--text-muted); font-size: 0.85em; margin-bottom: 20px; }
      .ss-live-label { font-size: 0.75em; text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin-bottom: 6px; }
      .ss-preview-box {
        border: 1px solid var(--background-modifier-border);
        border-radius: 8px;
        padding: 28px 20px;
        margin-bottom: 24px;
        background: var(--background-secondary);
        min-height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ss-preview-box > * { width: 100%; }
      .ss-drawer {
        border: 1px solid var(--background-modifier-border);
        border-radius: 8px;
        margin-bottom: 8px;
        overflow: hidden;
        transition: all 0.2s ease;
      }
      .ss-drawer-head {
        display: flex;
        align-items: center;
        padding: 10px 14px;
        cursor: pointer;
        user-select: none;
        gap: 10px;
        background: var(--background-secondary);
        transition: background 0.15s;
      }
      .ss-drawer-head:hover { background: var(--background-modifier-hover); }
      .ss-drawer-head.active { background: var(--interactive-accent); color: white; }
      .ss-drawer-head.active .ss-drawer-num { color: white; opacity: 0.7; }
      .ss-drawer-num { font-family: monospace; font-size: 0.75em; opacity: 0.5; min-width: 24px; }
      .ss-drawer-name { flex: 1; font-size: 0.9em; font-weight: 500; }
      .ss-drawer-arrow { font-size: 0.75em; opacity: 0.5; transition: transform 0.2s; }
      .ss-drawer-arrow.open { transform: rotate(90deg); }
      .ss-drawer-body { padding: 16px; background: var(--background-primary); display: none; }
      .ss-drawer-body.open { display: block; }
      .ss-mini-preview {
        border: 1px solid var(--background-modifier-border);
        border-radius: 6px;
        padding: 16px 12px;
        margin-bottom: 12px;
        background: var(--background-secondary);
        min-height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .ss-mini-preview > * { width: 100%; }
      .ss-controls { display: flex; flex-direction: column; gap: 10px; }
      .ss-row { display: flex; align-items: center; gap: 10px; }
      .ss-row label { font-size: 0.82em; color: var(--text-muted); min-width: 100px; }
      .ss-row input[type=color] { width: 40px; height: 28px; border: none; border-radius: 4px; cursor: pointer; background: none; padding: 0; }
      .ss-row input[type=range] { flex: 1; }
      .ss-row input[type=text] { flex: 1; border: 1px solid var(--background-modifier-border); border-radius: 4px; padding: 4px 8px; background: var(--background-secondary); color: var(--text-normal); font-size: 0.85em; }
      .ss-val { font-family: monospace; font-size: 0.8em; min-width: 28px; text-align: right; }
      .ss-apply-btn {
        width: 100%;
        margin-top: 6px;
        padding: 8px;
        background: var(--interactive-accent);
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 0.85em;
        font-weight: 600;
        letter-spacing: 0.5px;
        transition: opacity 0.15s;
      }
      .ss-apply-btn:hover { opacity: 0.85; }
      .ss-section-title { font-size: 0.75em; text-transform: uppercase; letter-spacing: 2px; color: var(--text-muted); margin: 20px 0 8px; }
    `;

    // ── heading ──
    containerEl.createEl('div', { cls: 'ss-header', text: '⬛ Separator Studio' });
    containerEl.createEl('div', { cls: 'ss-sub', text: 'Pick a separator. Customize it. Apply.' });

    // ── live preview ──
    containerEl.createEl('div', { cls: 'ss-live-label', text: '▶ Live Preview — Active Separator' });
    const masterPreview = containerEl.createDiv({ cls: 'ss-preview-box' });
    this.masterPreview = masterPreview;
    this._refreshMaster();

    // ── drawers ──
    containerEl.createEl('div', { cls: 'ss-section-title', text: 'All Separators' });

    SEPARATORS.forEach(sep => {
      const drawer = containerEl.createDiv({ cls: 'ss-drawer' });

      // head
      const head = drawer.createDiv({ cls: 'ss-drawer-head' + (this.plugin.settings.selectedId === sep.id ? ' active' : '') });
      head.createEl('span', { cls: 'ss-drawer-num', text: String(sep.id).padStart(2, '0') });
      head.createEl('span', { cls: 'ss-drawer-name', text: sep.name });
      const arrow = head.createEl('span', { cls: 'ss-drawer-arrow' + (this.expandedId === sep.id ? ' open' : ''), text: '▶' });

      // body
      const body = drawer.createDiv({ cls: 'ss-drawer-body' + (this.expandedId === sep.id ? ' open' : '') });

      // local state for this drawer
      let localColor1 = this.plugin.settings.selectedId === sep.id ? this.plugin.settings.color1 : (sep.hasColor ? '#7433ff' : '#7433ff');
      let localColor2 = this.plugin.settings.selectedId === sep.id ? this.plugin.settings.color2 : '#ff0000';
      let localThick  = this.plugin.settings.selectedId === sep.id ? this.plugin.settings.thickness : 2;
      let localText   = this.plugin.settings.selectedId === sep.id ? this.plugin.settings.customText : (sep.textDefault || '');

      // mini preview
      const mini = body.createDiv({ cls: 'ss-mini-preview' });
      const refreshMini = () => {
        mini.innerHTML = generateHTML(sep.id, localColor1, localColor2, localThick, localText);
      };
      refreshMini();

      // controls
      const ctrl = body.createDiv({ cls: 'ss-controls' });

      if (sep.hasColor) {
        const row = ctrl.createDiv({ cls: 'ss-row' });
        row.createEl('label', { text: 'Color' });
        const inp = row.createEl('input', { type: 'color' });
        inp.value = localColor1;
        inp.addEventListener('input', e => { localColor1 = e.target.value; refreshMini(); });
      }

      if (sep.hasGradient) {
        const r1 = ctrl.createDiv({ cls: 'ss-row' });
        r1.createEl('label', { text: 'Color A' });
        const c1 = r1.createEl('input', { type: 'color' });
        c1.value = localColor1;
        c1.addEventListener('input', e => { localColor1 = e.target.value; refreshMini(); });

        const r2 = ctrl.createDiv({ cls: 'ss-row' });
        r2.createEl('label', { text: 'Color B' });
        const c2 = r2.createEl('input', { type: 'color' });
        c2.value = localColor2;
        c2.addEventListener('input', e => { localColor2 = e.target.value; refreshMini(); });
      }

      if (sep.hasThickness) {
        const row = ctrl.createDiv({ cls: 'ss-row' });
        row.createEl('label', { text: 'Thickness' });
        const sl = row.createEl('input', { type: 'range' });
        sl.min = '1'; sl.max = '10'; sl.value = String(localThick);
        const val = row.createEl('span', { cls: 'ss-val', text: localThick + 'px' });
        sl.addEventListener('input', e => {
          localThick = parseInt(e.target.value);
          val.textContent = localThick + 'px';
          refreshMini();
        });
      }

      if (sep.hasText) {
        const row = ctrl.createDiv({ cls: 'ss-row' });
        row.createEl('label', { text: sep.textLabel || 'Text' });
        const inp = row.createEl('input', { type: 'text' });
        inp.value = localText || sep.textDefault || '';
        inp.placeholder = sep.textDefault || '';
        inp.addEventListener('input', e => { localText = e.target.value; refreshMini(); });
      }

      // apply button
      const btn = body.createEl('button', { cls: 'ss-apply-btn', text: '✓ Apply This Separator' });
      btn.addEventListener('click', async () => {
        this.plugin.settings.selectedId = sep.id;
        this.plugin.settings.color1     = localColor1;
        this.plugin.settings.color2     = localColor2;
        this.plugin.settings.thickness  = localThick;
        this.plugin.settings.customText = localText;
        await this.plugin.saveSettings();
        this._refreshMaster();
        // update active state on all heads
        containerEl.querySelectorAll('.ss-drawer-head').forEach(h => h.removeClass('active'));
        head.addClass('active');
      });

      // toggle drawer
      head.addEventListener('click', () => {
        const isOpen = body.hasClass('open');
        // close all
        containerEl.querySelectorAll('.ss-drawer-body').forEach(b => b.removeClass('open'));
        containerEl.querySelectorAll('.ss-drawer-arrow').forEach(a => a.removeClass('open'));
        if (!isOpen) {
          body.addClass('open');
          arrow.addClass('open');
          this.expandedId = sep.id;
        } else {
          this.expandedId = null;
        }
      });
    });
  }

  _refreshMaster() {
    const s = this.plugin.settings;
    this.masterPreview.innerHTML = generateHTML(s.selectedId, s.color1, s.color2, s.thickness, s.customText);
  }
}

module.exports = SeparatorStudioPlugin;

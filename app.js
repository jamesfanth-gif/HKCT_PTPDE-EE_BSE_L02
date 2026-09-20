function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

const typeLabels = {
  trace: '<span class="q-type q-type-trace">📊 Calculation & Trace</span>',
  compare: '<span class="q-type q-type-compare">⚖️ Comparative Analysis</span>',
  scenario: '<span class="q-type q-type-scenario">🎯 Scenario & Application</span>',
  concept: '<span class="q-type q-type-concept">💭 Concept & Fundamentals</span>',
  explain: '<span class="q-type q-type-explain">🔍 Engineering Synthesis</span>'
};

const lessonLabels = {
  L2: 'L2 Boilers & Energy Recovery'
};

// =======================================================
// 12 TOPICS WITH HIGH-FIDELITY SCADA ANIMATED SCHEMATICS
// =======================================================
const notesData = [
  {
    id: 't1', icon: '1', title: 'Boiler Definition & Cast Iron Sectional Assembly',
    titleZh: '鍋爐定義、受壓容器與鑄鐵分片拼裝原理',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(30, 20)">
        <rect x="0" y="25" width="390" height="215" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="195" y="16" text-anchor="middle" font-weight="bold" font-size="12.5" fill="#1abc9c">Cast Iron Sectional Assembly (鑄鐵分片鍋爐)</text>
        <rect x="35" y="50" width="45" height="150" fill="#7f8c8d" stroke="#2c3e50" stroke-width="1.5" rx="3"/>
        <rect x="85" y="50" width="45" height="150" fill="#95a5a6" stroke="#2c3e50" stroke-width="1.5" rx="3"/>
        <rect x="135" y="50" width="45" height="150" fill="#7f8c8d" stroke="#2c3e50" stroke-width="1.5" rx="3"/>
        <rect x="185" y="50" width="45" height="150" fill="#95a5a6" stroke="#2c3e50" stroke-width="1.5" rx="3"/>
        <rect x="235" y="50" width="45" height="150" fill="#7f8c8d" stroke="#2c3e50" stroke-width="1.5" rx="3"/>
        <line x1="20" y1="75" x2="295" y2="75" stroke="#e74c3c" stroke-width="3" stroke-dasharray="6 3"/>
        <line x1="20" y1="180" x2="295" y2="180" stroke="#e74c3c" stroke-width="3" stroke-dasharray="6 3"/>
        <text x="298" y="79" font-size="9.5" fill="#e74c3c" font-weight="bold">Tie Rods (穿心螺栓拉緊)</text>
        <text x="160" y="130" text-anchor="middle" font-size="11" fill="#ecf0f1" font-weight="bold">Modular Sections (分片數量決定出力)</text>
        <rect x="285" y="110" width="60" height="40" fill="#e67e22" rx="4"/>
        <text x="315" y="135" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Burner</text>
        <text x="195" y="226" text-anchor="middle" font-size="10.5" fill="#bdc3c7">The number of sections assembled determines boiler energy rating</text>
      </g>
      <g transform="translate(460, 20)">
        <rect x="0" y="25" width="250" height="100" fill="#1b4f72" stroke="#3498db" stroke-width="2" rx="6"/>
        <text x="125" y="48" text-anchor="middle" font-size="12" font-weight="bold" fill="#5dade2">Low Pressure Boilers (低壓)</text>
        <text x="20" y="73" font-size="11" fill="#ecf0f1">• Steam: ≤ 103 kPa (gauge)</text>
        <text x="20" y="93" font-size="11" fill="#ecf0f1">• Hot Water: ≤ 1100 kPa</text>
        <text x="20" y="112" font-size="11" fill="#ecf0f1">• Hot Water: ≤ 120 °C</text>
        <rect x="0" y="140" width="250" height="100" fill="#641e16" stroke="#e74c3c" stroke-width="2" rx="6"/>
        <text x="125" y="163" text-anchor="middle" font-size="12" font-weight="bold" fill="#f5b7b1">Medium / High Pressure (中高壓)</text>
        <text x="20" y="188" font-size="11" fill="#ecf0f1">• Steam: &gt; 103 kPa</text>
        <text x="20" y="208" font-size="11" fill="#ecf0f1">• Hot Water: &gt; 1100 kPa</text>
        <text x="20" y="227" font-size="11" fill="#ecf0f1">• Hot Water: &gt; 120 °C</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 1: Cast iron sectional boiler assembly (capacity dictated by section count) and standard pressure/temperature classifications',
    sections: [
      {
        title: 'Definition & Terminology / 鍋爐基礎名詞',
        zh: '<p><strong>鍋爐 (Boiler)</strong> 係一種受壓容器 (pressure vessel)，設計用於將燃料燃燒、電能或廢熱回收所產生嘅熱量傳遞畀水（轉化為熱水或蒸汽）[cite: 2]。</p><ul><li><strong>Calorifier / Liquid Heater</strong>：當設備只將水加熱而<strong>不產生相變蒸氣</strong>時，稱為 calorifier[cite: 2]。</li><li><strong>Furnace</strong>：若被加熱嘅介質係<strong>空氣</strong>而非水，該換熱裝置稱為 furnace（暖風爐）[cite: 2]。同時，鍋爐燃燒室 (firebox) 亦稱 furnace[cite: 2]。</li><li><strong>燃燒空氣要求</strong>：鍋爐房必須提供恆定燃燒空氣供應並維持充足靜壓，確保完全燃燒並防止煙氣倒灌[cite: 2]。</li></ul>',
        en: '<p>A <strong>boiler</strong> is a pressure vessel designed to transfer heat to a fluid (normally water or steam)[cite: 2].</p><ul><li><strong>Calorifier / Liquid Heater</strong>: Used when heating a liquid without changing it into vapour[cite: 2].</li><li><strong>Furnace</strong>: The device is called a furnace if heating air[cite: 2]. The combustion firebox of a boiler is also termed a furnace[cite: 2].</li><li><strong>Combustion Air</strong>: Boiler rooms must maintain a constant combustion air supply at adequate static pressure for safe, complete combustion[cite: 2].</li></ul>'
      },
      {
        title: 'Pressure & Construction Classes / 工作壓力與結構材質分類',
        zh: '<ul><li><strong>低壓鍋爐 (Low Pressure)</strong>：蒸汽工作壓力 ≤ 103 kPa；熱水工作壓力 ≤ 1100 kPa 且工作溫度 ≤ 120 °C[cite: 2]。</li><li><strong>中高壓鍋爐 (Medium & High Pressure)</strong>：蒸汽壓力 > 103 kPa，或熱水壓力 > 1100 kPa / 溫度 > 120 °C[cite: 2]。</li><li><strong>鑄鐵鍋爐 (Cast iron sectional)</strong>：由若干鑄鐵片通過穿心螺栓拼裝而成，<strong>鑄鐵片數量直接決定鍋爐出力與容量</strong>[cite: 2]。耐水質腐蝕但承受高壓能力有限[cite: 2]。</li><li><strong>鋼製鍋爐 (Steel boiler)</strong>：由鋼板與鋼管焊接成整體，抗機械應力強，能承受極高工作壓力與大蒸發量[cite: 2]。</li></ul>',
        en: '<ul><li><strong>Low Pressure</strong>: Steam ≤ 103 kPa; Hot water ≤ 1100 kPa and ≤ 120 °C[cite: 2].</li><li><strong>Medium/High Pressure</strong>: Steam &gt; 103 kPa, or Hot water &gt; 1100 kPa / &gt; 120 °C[cite: 2].</li><li><strong>Cast Iron Sectional</strong>: Multiple modular sections assembled together; the section count determines heating capacity[cite: 2]. Highly corrosion resistant.</li><li><strong>Steel Boiler</strong>: Welded steel plates and boiler tubes; handles high mechanical stress and elevated pressures[cite: 2].</li></ul>'
      }
    ]
  },
  {
    id: 't2', icon: '2', title: 'Firing Methods: Fire Tube vs Water Tube',
    titleZh: '燃燒方式：火管鍋爐 vs 水管鍋爐剖面原理',
    diagram: `<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" width="100%">
      <defs>
        <linearGradient id="fireGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#e74c3c"/>
          <stop offset="50%" stop-color="#f39c12"/>
          <stop offset="100%" stop-color="#f1c40f"/>
        </linearGradient>
        <linearGradient id="waterGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#2980b9" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#1b4f72" stop-opacity="0.95"/>
        </linearGradient>
      </defs>
      <g class="scada-unit" transform="translate(15, 20)">
        <rect x="0" y="30" width="345" height="230" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="172" y="20" text-anchor="middle" font-weight="bold" font-size="13" fill="#e74c3c">Fire Tube Boiler (火管式鍋爐)</text>
        <rect x="25" y="55" width="295" height="165" fill="url(#waterGrad)" stroke="#5dade2" stroke-width="1.5" rx="5"/>
        <text x="40" y="75" font-size="11" fill="#ecf0f1" font-weight="bold">Water inside Shell (水在管外筒體內)</text>
        <rect x="25" y="150" width="130" height="55" fill="#1c2833" stroke="#c0392b" stroke-width="2"/>
        <path d="M 35 185 Q 55 155 75 185 T 115 185 T 145 185" fill="url(#fireGrad)"/>
        <text x="85" y="175" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Burner Flame</text>
        <g stroke="#e74c3c" stroke-width="8" stroke-linecap="round">
          <line x1="155" y1="165" x2="310" y2="165" class="flow-hot"/>
          <line x1="310" y1="115" x2="35" y2="115" class="flow-hot"/>
          <line x1="35" y1="90" x2="280" y2="90" class="flow-hot"/>
        </g>
        <text x="172" y="108" text-anchor="middle" font-size="9.5" fill="#f9ebea" font-weight="bold">Hot Combustion Gas Inside Tubes (煙氣在管內)</text>
        <rect x="270" y="35" width="22" height="55" fill="#7f8c8d" stroke="#95a5a6"/>
        <text x="281" y="30" text-anchor="middle" font-size="9" fill="#bdc3c7">Stack</text>
        <line x1="172" y1="55" x2="172" y2="35" stroke="#ecf0f1" stroke-width="5" class="flow-steam"/>
        <text x="172" y="30" text-anchor="middle" font-size="9.5" fill="#ecf0f1" font-weight="bold">Steam Out (≥100°C)</text>
        <text x="172" y="245" text-anchor="middle" font-size="10" fill="#bdc3c7">蓄水量大 · 蒸發熱慣性大 · 適合中低壓工況</text>
      </g>
      <g class="scada-unit" transform="translate(380, 20)">
        <rect x="0" y="30" width="345" height="230" fill="#243342" stroke="#34495e" stroke-width="2" rx="8"/>
        <text x="172" y="20" text-anchor="middle" font-weight="bold" font-size="13" fill="#3498db">Water Tube Boiler (水管式鍋爐)</text>
        <rect x="25" y="55" width="295" height="165" fill="#78281f" opacity="0.45" stroke="#c0392b" stroke-width="1.5" rx="5"/>
        <text x="40" y="75" font-size="11" fill="#f5b7b1" font-weight="bold">Combustion Chamber (高溫氣體充滿爐膛)</text>
        <circle cx="85" cy="100" r="25" fill="#2980b9" stroke="#ecf0f1" stroke-width="2"/>
        <text x="85" y="103" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Steam Drum</text>
        <circle cx="85" cy="185" r="20" fill="#1f618d" stroke="#bdc3c7" stroke-width="2"/>
        <text x="85" y="188" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Mud Drum</text>
        <path d="M 108 95 C 190 85, 260 115, 260 142 C 260 170, 190 195, 104 185" fill="none" stroke="#3498db" stroke-width="4.5" class="flow-cold"/>
        <path d="M 102 105 C 170 95, 230 120, 230 142 C 230 165, 170 185, 100 175" fill="none" stroke="#3498db" stroke-width="4.5" class="flow-cold"/>
        <text x="200" y="146" text-anchor="middle" font-size="10" fill="#ecf0f1" font-weight="bold">Water Inside Tubes (水在管內循環)</text>
        <path d="M 280 205 Q 260 175 250 205 Z" fill="url(#fireGrad)"/>
        <text x="270" y="218" text-anchor="middle" font-size="9" fill="#f39c12" font-weight="bold">Burner</text>
        <line x1="85" y1="75" x2="85" y2="35" stroke="#ecf0f1" stroke-width="5" class="flow-steam"/>
        <text x="85" y="30" text-anchor="middle" font-size="9.5" fill="#ecf0f1" font-weight="bold">HP Steam Out</text>
        <text x="172" y="245" text-anchor="middle" font-size="10" fill="#bdc3c7">水容積細 · 產汽極快 · 能承受極高工作壓力</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 2: Fundamental fluid layout: Fire Tube (gas inside tubes, water outside) vs Water Tube (water inside tubes, combustion gas outside)',
    sections: [
      {
        title: 'Fire Tube vs Water Tube / 火管鍋爐與水管鍋爐',
        zh: '<p>管束佈置與熱介質流動方向是鍋爐的核心分類：</p><ul><li><strong>火管鍋爐 (Fire tube boiler)</strong>：高溫煙氣在管<strong>內部</strong>流動，水環繞在管<strong>外部筒體內</strong>[cite: 2]。筒體盛水量大、產氣熱慣性大、對負荷驟變適應力強，但受筒體厚度限制，工作壓力較低[cite: 2]。</li><li><strong>水管鍋爐 (Water tube boiler)</strong>：管<strong>內部</strong>走水或蒸汽，管<strong>外部</strong>為高溫燃燒室[cite: 2]。水容積小、啟動產氣極快，能耐受極高工作壓力，廣泛應用於大型集中供熱與發電廠[cite: 2]。</li></ul>',
        en: '<p>Two distinct tube heat transfer geometries:</p><ul><li><strong>Fire tube</strong>: Combustion gases pass <em>inside</em> the straight tubes surrounded by water[cite: 2]. Large water content, high thermal inertia, best for low-to-medium pressure steam/hot water.</li><li><strong>Water tube</strong>: Water circulates <em>inside</em> the tubes while heat is applied to the outer surface[cite: 2]. Rapid steaming, handles extreme pressures safely.</li></ul>'
      },
      {
        title: 'Packaged Boilers / 成套組合式鍋爐',
        zh: '<p><strong>成套鍋爐 (Packaged boiler)</strong>：出廠前已將燃燒器、水泵、調壓閥、安全附件及自動控制系統整合成單一撬塊 (skid-mounted)[cite: 2]。運抵現場後只需接駁進出水、燃料管、煙囪及電源，即可快速調試運行，施工工期極短[cite: 2]。</p>',
        en: '<p><strong>Packaged boilers</strong> integrate the pressure vessel, burner, piping, and automated safety controls into a single shop-assembled assembly for rapid on-site commissioning[cite: 2].</p>'
      }
    ]
  },
  {
    id: 't3', icon: '3', title: 'Boiler Operating Controls & Turndown Ratio',
    titleZh: '鍋爐運行控制方式與燃燒器調節比',
    diagram: `<svg viewBox="0 0 740 250" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g transform="translate(30, 25)">
        <rect x="0" y="20" width="320" height="190" fill="#243342" stroke="#34495e" stroke-width="1.5" rx="5"/>
        <text x="160" y="12" text-anchor="middle" font-size="12" font-weight="bold" fill="#1abc9c">Firing Control Modes (燃燒控制方式)</text>
        <line x1="40" y1="180" x2="300" y2="180" stroke="#7f8c8d" stroke-width="1.5"/>
        <line x1="40" y1="180" x2="40" y2="40" stroke="#7f8c8d" stroke-width="1.5"/>
        <text x="35" y="35" font-size="9" fill="#bdc3c7">Output %</text>
        <text x="290" y="195" font-size="9" fill="#bdc3c7">Time</text>
        <path d="M40 180 L80 180 L80 60 L140 60 L140 180 L180 180 L180 60 L240 60" fill="none" stroke="#e74c3c" stroke-width="2.5" stroke-dasharray="4 2"/>
        <text x="145" y="52" font-size="10" fill="#e74c3c" font-weight="bold">On-Off (0% or 100%)</text>
        <path d="M40 160 Q 80 130, 120 70 T 200 90 T 280 80" fill="none" stroke="#1abc9c" stroke-width="3"/>
        <text x="210" y="115" font-size="10" fill="#1abc9c" font-weight="bold">Modulating (Smooth tracking)</text>
      </g>
      <g transform="translate(380, 25)">
        <rect x="0" y="20" width="330" height="190" fill="#7d6608" opacity="0.35" stroke="#f1c40f" stroke-width="1.5" rx="5"/>
        <rect x="0" y="20" width="330" height="190" fill="none" stroke="#f1c40f" stroke-width="1.5" rx="5"/>
        <text x="165" y="42" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#f1c40f">Actuation Source &amp; Turndown Ratio</text>
        <rect x="15" y="55" width="300" height="50" fill="#1a252f" stroke="#d4ac0d" rx="4"/>
        <text x="25" y="75" font-size="11" fill="#ecf0f1">• <strong style="color:#5dade2;">Steam Boilers</strong>: Pressure-actuated control</text>
        <text x="25" y="93" font-size="11" fill="#ecf0f1">• <strong style="color:#e74c3c;">Hot-Water Boilers</strong>: Temperature-actuated control</text>
        <rect x="15" y="115" width="300" height="85" fill="#111" rx="4"/>
        <text x="165" y="138" text-anchor="middle" font-size="12" fill="#f1c40f" font-family="Consolas">Turndown Ratio = Max Input / Min Input</text>
        <text x="25" y="162" font-size="10.5" fill="#ecf0f1">e.g. 4:1 Turndown ratio allows smooth modulation</text>
        <text x="25" y="180" font-size="10.5" fill="#ecf0f1">from 100% down to 25% without on-off cycling.</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 3: Boiler control mechanisms: Pressure/Temperature actuation, On-Off cyclic losses, and Modulating turndown ratio',
    sections: [
      {
        title: 'Control Actuation / 控制傳感方式',
        zh: '<p>鍋爐燃燒控制依據輸出介質特性而定：</p><ul><li><strong>蒸汽鍋爐 (Steam boilers)</strong>：採用<strong>壓力傳感驅動 (pressure-actuated control)</strong>，監測主蒸汽分氣缸 (steam header) 壓力[cite: 2]。</li><li><strong>熱水鍋爐 (Hot-water boilers)</strong>：採用<strong>溫度傳感驅動 (temperature-actuated control)</strong>，依據供水與回水溫度調控燃燒量[cite: 2]。</li></ul>',
        en: '<p>Actuation depends on the working fluid: <strong>Steam boilers</strong> utilize pressure-actuated controls; <strong>Hot-water boilers</strong> utilize temperature-actuated controls[cite: 2].</p>'
      },
      {
        title: 'Modulating Control & Turndown Ratio / 調節比',
        zh: '<p>常見燃燒控制分為 <strong>On-Off (開-關)</strong>、<strong>High-Low-Off (高火-低火-停)</strong> 及 <strong>Modulating (連續比例調節)</strong>[cite: 2]。</p><div class="formula-block">Turndown Ratio = Maximum Fuel Input / Minimum Fuel Input</div><p>連續比例調節控制能在 100% 至設定之最小出力點之間無級平滑調節[cite: 2]。調節比越高，在部分負荷 (part-load) 時越能緊密配合實際需熱量，消除頻繁開停機導致的預吹掃 (pre-purge) 熱損失。</p>',
        en: '<p>Burners vary from On-Off, High-Low-Off, to fully Modulating controls which infinitely vary fuel input between 100% and a designated minimum firing rate[cite: 2].</p><div class="formula-block">Turndown Ratio = Maximum Input Rate / Minimum Input Rate</div><p>Higher turndown ratios prevent cyclic pre-purge losses during light part-load demand.</p>'
      }
    ]
  },
  {
    id: 't4', icon: '4', title: 'Fuel Storage & Handling Systems',
    titleZh: '燃油地上防油堤、地下油罐與日用油箱系統',
    diagram: `<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" width="100%">
      <line x1="20" y1="180" x2="720" y2="180" stroke="#7f8c8d" stroke-width="2" stroke-dasharray="6 3"/>
      <text x="35" y="172" font-size="11" fill="#7f8c8d" font-weight="bold">Ground Level (地面)</text>
      <g class="scada-unit" transform="translate(50, 190)">
        <rect x="0" y="0" width="180" height="95" fill="#34495e" stroke="#7f8c8d" stroke-width="2" rx="6"/>
        <text x="90" y="30" text-anchor="middle" font-size="11" font-weight="bold" fill="#ecf0f1">Underground Tank</text>
        <text x="90" y="48" text-anchor="middle" font-size="10" fill="#f39c12">(&gt; 3500 L storage)</text>
        <text x="90" y="66" text-anchor="middle" font-size="9.5" fill="#bdc3c7">3 weeks full-load fuel</text>
        <rect x="75" y="-12" width="30" height="12" fill="#7f8c8d"/>
        <text x="90" y="-16" text-anchor="middle" font-size="8" fill="#bdc3c7">Manhole</text>
      </g>
      <path d="M90 190 L90 140 L110 140" fill="none" stroke="#bdc3c7" stroke-width="2.5"/>
      <text x="115" y="145" font-size="9" fill="#bdc3c7">Fill Pipe</text>
      <path d="M115 190 L115 120 L135 120 L135 130" fill="none" stroke="#bdc3c7" stroke-width="2.5"/>
      <text x="140" y="125" font-size="9" fill="#bdc3c7">Gooseneck Vent</text>
      <g transform="translate(280, 220)">
        <circle cx="20" cy="20" r="14" fill="#16a085"/>
        <circle cx="55" cy="20" r="14" fill="#16a085"/>
        <text x="37" y="-5" text-anchor="middle" font-size="10" font-weight="bold" fill="#1abc9c">Duplicate Oil Pumps</text>
        <text x="37" y="48" text-anchor="middle" font-size="8.5" fill="#bdc3c7">(一用一備)</text>
      </g>
      <line x1="230" y1="240" x2="280" y2="240" stroke="#f39c12" stroke-width="3" class="flow-fuel"/>
      <path d="M350 240 L450 240 L450 60 L500 60" fill="none" stroke="#f39c12" stroke-width="3" class="flow-fuel"/>
      <text x="400" y="110" font-size="9" fill="#f39c12" font-weight="bold">Oil Feed Riser</text>
      <g class="scada-unit" transform="translate(500, 30)">
        <rect x="0" y="0" width="130" height="75" fill="#78281f" stroke="#e74c3c" stroke-width="2" rx="4"/>
        <text x="65" y="28" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Daily Service Tank</text>
        <text x="65" y="45" text-anchor="middle" font-size="10" fill="#f5b7b1">(日用油箱)</text>
        <path d="M0 50 L-30 50 L-30 220 L-270 220" fill="none" stroke="#3498db" stroke-width="2" stroke-dasharray="5 3"/>
        <text x="-25" y="150" font-size="9" fill="#3498db">Gravity Overflow</text>
      </g>
      <path d="M630 70 L660 70 L660 210 L610 210" fill="none" stroke="#f39c12" stroke-width="3" class="flow-fuel"/>
      <polygon points="635,210 645,203 645,217" fill="#e74c3c"/>
      <text x="645" y="198" font-size="8" fill="#e74c3c">Fire Valve</text>
      <g class="scada-unit" transform="translate(500, 195)">
        <rect x="0" y="0" width="105" height="60" fill="#243342" stroke="#34495e" rx="4"/>
        <text x="52" y="35" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">Boiler Burner</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 4: Complete fuel oil storage & handling schematic: Underground tank (>3500 L), duplicate pumps, oil riser, daily service tank, overflow, and fire valve',
    sections: [
      {
        title: '3-Week Fuel Reserve Standard / 3 星期儲量準則',
        zh: '<p>工程慣例明確規定：鍋爐房嘅燃料儲存設施容量，必須保證全廠鍋爐喺<strong>滿載 (full load) 下連續運行 3 個星期 (3 weeks)</strong>[cite: 2]。</p><ul><li><strong>固體燃料 (Coal)</strong>：可露天堆存，靠機械輸送帶或氣力管道輸送[cite: 2]。</li><li><strong>液體燃料 (Fuel oil)</strong>：由槽車經注油管補給[cite: 2]。油箱設人孔、通氣管、排污閥、液位計，重油必須加裝<strong>加熱器 (heater)</strong> 以降黏[cite: 2]。</li><li><strong>氣體燃料 (LPG)</strong>：以液相儲存在由氣體供應商提供及擁有的高壓容器內[cite: 2]。</li></ul>',
        en: '<p>Fuel storage facilities must enable the boiler plant to run at full load for <strong>3 weeks</strong>[cite: 2].</p><ul><li><strong>Solid Fuel</strong>: Stored in open areas, conveyed mechanically or pneumatically[cite: 2].</li><li><strong>Fuel Oil</strong>: Delivered by road tanker; tanks feature manhole, vent, sludge valve, level indicator, and preheaters for heavy oil[cite: 2].</li><li><strong>LPG</strong>: Stored as liquid in high-pressure vessels belonging to the gas supplier[cite: 2].</li></ul>'
      },
      {
        title: 'Tank Arrangements & Daily Service Tank / 油缸形式與附屬日用油箱',
        zh: '<ol><li><strong>地上油箱 (Above ground)</strong>：四周建有防油堤 (catchpit)，牆身做防油沙漿面層[cite: 2]。</li><li><strong>地下油箱 (Underground)</strong>：適用於儲量<strong>大於 3500 公升</strong>之大容量油庫[cite: 2]。</li><li><strong>附屬儲存系統 (Subsidiary storage)</strong>：主儲油箱置於地面或地底，由<strong>雙聯油泵 (duplicate pumps)</strong> 泵送至高處鍋爐房的<strong>日用油箱 (daily service tank)</strong>，再靠重力自流至燃燒器，並配備重力溢流管 (overflow) 及防火切斷閥 (fire valve)[cite: 2]。</li></ol>',
        en: '<ol><li><strong>Above ground</strong>: Enclosed within oil-proof rendering catchpit walls[cite: 2].</li><li><strong>Underground</strong>: Ideal for large storage (&gt; 3500 litres)[cite: 2].</li><li><strong>Subsidiary storage</strong>: Main tank at ground level with duplicate pumps lifting oil to a small daily service tank near the boiler room, complete with gravity feed, fire valve, and overflow line[cite: 2].</li></ol>'
      }
    ]
  },
  {
    id: 't5', icon: '5', title: 'Centralisation vs De-centralisation',
    titleZh: '集中式管網 vs 分散式模塊鍋爐佈置之工程對比',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="335" height="220" fill="#243342" stroke="#16a085" stroke-width="2" rx="6"/>
        <text x="167" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Centralised Boiler Plant (集中式供熱)</text>
        <rect x="20" y="45" width="100" height="70" fill="#16a085" rx="4"/>
        <text x="70" y="75" text-anchor="middle" font-size="10.5" fill="#fff" font-weight="bold">Central Plant</text>
        <text x="70" y="93" text-anchor="middle" font-size="9" fill="#e8f8f5">(Large Boilers)</text>
        <path d="M120 80 L200 80 L200 55 L240 55" fill="none" stroke="#e74c3c" stroke-width="3" class="flow-hot"/>
        <path d="M200 80 L200 115 L240 115" fill="none" stroke="#e74c3c" stroke-width="3" class="flow-hot"/>
        <path d="M200 80 L200 175 L240 175" fill="none" stroke="#e74c3c" stroke-width="3" class="flow-hot"/>
        <rect x="240" y="45" width="75" height="25" fill="#1a252f" stroke="#3498db"/>
        <text x="277" y="61" text-anchor="middle" font-size="9" fill="#ecf0f1">Block A</text>
        <rect x="240" y="105" width="75" height="25" fill="#1a252f" stroke="#3498db"/>
        <text x="277" y="121" text-anchor="middle" font-size="9" fill="#ecf0f1">Block B</text>
        <rect x="240" y="165" width="75" height="25" fill="#1a252f" stroke="#3498db"/>
        <text x="277" y="181" text-anchor="middle" font-size="9" fill="#ecf0f1">Block C</text>
        <text x="167" y="215" text-anchor="middle" font-size="10" fill="#f5b7b1">Significant piping heat loss · Complex balancing</text>
        <text x="167" y="230" text-anchor="middle" font-size="10" fill="#1abc9c" font-weight="bold">High load diversity → Smaller total capacity</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="335" height="220" fill="#243342" stroke="#f39c12" stroke-width="2" rx="6"/>
        <text x="167" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#f39c12">De-centralised Boilers (分散式供熱)</text>
        <rect x="30" y="45" width="130" height="45" fill="#1a252f" stroke="#d68910" rx="3"/>
        <text x="95" y="64" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ecf0f1">Block A + Dedicated Boiler</text>
        <text x="95" y="78" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Zero long-distance piping loss</text>
        <rect x="30" y="105" width="130" height="45" fill="#1a252f" stroke="#d68910" rx="3"/>
        <text x="95" y="124" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ecf0f1">Block B + Dedicated Boiler</text>
        <text x="95" y="138" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Easy individual metering</text>
        <rect x="30" y="165" width="130" height="45" fill="#1a252f" stroke="#d68910" rx="3"/>
        <text x="95" y="184" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#ecf0f1">Block C + Dedicated Boiler</text>
        <text x="95" y="198" text-anchor="middle" font-size="8.5" fill="#bdc3c7">Independent temperatures</text>
        <text x="167" y="230" text-anchor="middle" font-size="10" fill="#e74c3c">Zero diversity → Larger combined capacity</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 5: Architectural comparison: Centralised plant (shared diversity, long piping losses) vs Decentralised modular plants (zero piping loss, easy metering)',
    sections: [
      {
        title: 'Centralised Boiler Plants / 集中式鍋爐房',
        zh: '<p><strong>優勢</strong>：可利用<strong>負荷多樣性 (Diversity)</strong> 縮減總裝機容量；低負荷時後備容量充裕；運維集中、管理成本低；煙氣治理與消音措施具規模效益；全建築總機房面積較細[cite: 2]。</p><p><strong>劣勢</strong>：長途室外配管引起<strong>嚴重管網熱損失</strong>；末端計費分攤極為困難；全部用戶被迫接受相同溫度與壓力；大型水力平衡調試極端複雜[cite: 2]。</p>',
        en: '<p><strong>Advantages</strong>: High diversity factor lowers total installed capacity; centralised labour and maintenance; economical flue gas and noise control; smaller aggregate plant area[cite: 2].</p><p><strong>Disadvantages</strong>: High distribution piping thermal loss; difficult tenant metering; uniform supply conditions; complex balancing[cite: 2].</p>'
      },
      {
        title: 'De-centralised Boiler Plants / 分散式鍋爐房',
        zh: '<p><strong>優勢</strong>：管道極短、分佈熱損極微；<strong>獨立計費 (metering)</strong> 極為簡單；各區域可單獨供應不同溫度壓力；極度靈活適應<strong>分期完工交付 (phased completion)</strong>[cite: 2]。</p><p><strong>劣勢</strong>：無多樣性可享，各樓宇均需按峰值設計，<strong>總裝機容量龐大</strong>；所有分散機房加總面積更大；某台故障會使該樓宇直接停暖；需採用高質清潔燃料（氣體或電）[cite: 2]。</p>',
        en: '<p><strong>Advantages</strong>: Negligible distribution heat loss; straightforward sub-metering; customized temperature and pressure; ideal for phased expansion[cite: 2].</p><p><strong>Disadvantages</strong>: Less diversity requires larger combined boiler capacity; scattered maintenance; larger total footprint; necessitates premium fuels[cite: 2].</p>'
      }
    ]
  },
  {
    id: 't6', icon: '6', title: 'Improving Boiler Plant Overall Efficiency',
    titleZh: '煙氣廢熱回收（省煤器/空氣預熱器）與系統能效',
    diagram: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="20" y="25" width="700" height="210" fill="#243342" stroke="#34495e" stroke-width="2" rx="6"/>
      <text x="370" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Boiler Energy Optimization Circuit (鍋爐節能與餘熱回收流程)</text>
      <rect x="60" y="60" width="160" height="110" fill="#78281f" stroke="#c0392b" stroke-width="2" rx="4"/>
      <text x="140" y="110" text-anchor="middle" font-size="12" font-weight="bold" fill="#fff">Main Boiler</text>
      <text x="140" y="130" text-anchor="middle" font-size="9.5" fill="#bdc3c7">Tune A/F Ratio</text>
      <rect x="60" y="180" width="100" height="40" fill="#7d6608" stroke="#f39c12" rx="3"/>
      <text x="110" y="205" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#fff">Jockey Boiler (小鍋爐)</text>
      <text x="180" y="205" font-size="8.5" fill="#bdc3c7">For night/summer low loads</text>
      <path d="M220 90 L300 90 L300 50 L480 50 L480 90 L560 90" fill="none" stroke="#7f8c8d" stroke-width="16"/>
      <text x="260" y="85" font-size="9.5" fill="#fff" font-weight="bold">Hot Flue Gas</text>
      <rect x="320" y="35" width="65" height="45" fill="#16a085" rx="3"/>
      <text x="352" y="55" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Economiser</text>
      <text x="352" y="68" text-anchor="middle" font-size="7.5" fill="#fff">(省煤器)</text>
      <path d="M352 140 L352 80 M352 35 L352 20 L180 20 L180 60" fill="none" stroke="#3498db" stroke-width="3" class="flow-cold"/>
      <text x="355" y="125" font-size="9" fill="#3498db" font-weight="bold">Cold Feedwater In</text>
      <text x="240" y="15" font-size="8.5" fill="#5dade2">Preheated Feedwater</text>
      <rect x="410" y="35" width="65" height="45" fill="#e67e22" rx="3"/>
      <text x="442" y="55" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">Air Preheater</text>
      <text x="442" y="68" text-anchor="middle" font-size="7.5" fill="#fff">(空氣預熱器)</text>
      <path d="M442 140 L442 80 M442 35 L442 10 L100 10 L100 60" fill="none" stroke="#e67e22" stroke-width="2.5" stroke-dasharray="4 2"/>
      <text x="445" y="125" font-size="9" fill="#f39c12" font-weight="bold">Combustion Air In</text>
      <path d="M560 90 L640 90 L640 40" fill="none" stroke="#7f8c8d" stroke-width="12"/>
      <text x="640" y="30" text-anchor="middle" font-size="9" fill="#bdc3c7">Cooled Gas Out</text>
    </svg>`,
    diagramCaption: 'Fig 6: Residual heat reclamation: Economiser (feedwater preheating), Air Preheater (combustion air), and Jockey boiler for low loads',
    sections: [
      {
        title: '10 Measures to Improve Efficiency / 10 項能效提升工程手段',
        zh: '<ol><li>更換具有更大換熱表面積之現代高效鍋爐[cite: 2]。</li><li><strong>增設小型領頭鍋爐 (Jockey boiler)</strong>：專門應對夜間或夏季超低負荷，杜絕大鍋爐在低出力時的低能效[cite: 2]。</li><li>操作員專業技術培訓[cite: 2]。</li><li><strong>化學水處理除垢</strong>：徹底消除管內水垢熱阻[cite: 2]。</li><li><strong>調校空燃比 (A/F ratio)</strong>：確保完全燃燒並嚴控過量空氣[cite: 2]。</li><li>燃料預處理與淨化[cite: 2]。</li><li><strong>煙氣廢熱深度回收</strong>：加裝省煤器預熱給水，加裝預熱器加熱燃燒空氣[cite: 2]。</li><li>加強鍋爐外殼及管道保溫層[cite: 2]。</li><li>及時進行蒸氣與水管路檢漏[cite: 2]。</li><li>對水泵、閥門與換熱器定期預防性維保[cite: 2]。</li></ol>',
        en: '<ol><li>Replace old boilers with high surface area units[cite: 2].</li><li>Install a small jockey boiler for part-load operation[cite: 2].</li><li>Ensure trained, competent operators[cite: 2].</li><li>Chemical water treatment to eliminate scale fouling[cite: 2].</li><li>Optimize Air/Fuel ratio to minimize stack heat loss[cite: 2].</li><li>Fuel purification and conditioning[cite: 2].</li><li>Reclaim residual flue gas energy for preheating feedwater and combustion air[cite: 2].</li><li>Inspect and upgrade insulation[cite: 2].</li><li>Detect and repair piping leaks[cite: 2].</li><li>Routine scheduled maintenance[cite: 2].</li></ol>'
      }
    ]
  },
  {
    id: 't7', icon: '7', title: 'Heat Pipe Heat Exchangers: Phase-Change Cycle',
    titleZh: '熱管換熱器：內部毛細相變循環與三段結構',
    diagram: `<svg viewBox="0 0 740 260" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="40" y="30" width="660" height="180" fill="#243342" stroke="#34495e" stroke-width="2.5" rx="30"/>
      <path d="M40 120 A 30 30 0 0 1 180 30 L180 210 A 30 30 0 0 1 40 120 Z" fill="#c0392b" opacity="0.35"/>
      <text x="110" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#e74c3c">EVAPORATOR (蒸發段)</text>
      <text x="110" y="75" text-anchor="middle" font-size="9" fill="#f5b7b1">Heat In (高溫廢氣加熱)</text>
      <circle cx="80" cy="120" r="4" fill="#e74c3c"/>
      <circle cx="100" cy="140" r="6" fill="#e74c3c"/>
      <circle cx="120" cy="110" r="5" fill="#e74c3c"/>
      <rect x="180" y="30" width="380" height="180" fill="#7d6608" opacity="0.15"/>
      <text x="370" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#f1c40f">ADIABATIC SECTION (絕熱傳輸段)</text>
      <path d="M160 105 L560 105" stroke="#e74c3c" stroke-width="4" stroke-dasharray="8 4"/>
      <polygon points="565,105 550,97 550,113" fill="#e74c3c"/>
      <text x="370" y="95" text-anchor="middle" font-size="11" fill="#e74c3c" font-weight="bold">High Pressure Vapour Flow ➔➔</text>
      <path d="M560 30 L560 210 A 30 30 0 0 0 700 120 A 30 30 0 0 0 560 30 Z" fill="#2980b9" opacity="0.35"/>
      <text x="630" y="55" text-anchor="middle" font-size="11" font-weight="bold" fill="#3498db">CONDENSER (冷凝段)</text>
      <text x="630" y="75" text-anchor="middle" font-size="9" fill="#d4e6f1">Heat Out (放熱給冷風)</text>
      <rect x="50" y="32" width="640" height="14" fill="#7f8c8d" opacity="0.4"/>
      <rect x="50" y="194" width="640" height="14" fill="#7f8c8d" opacity="0.4"/>
      <text x="370" y="185" text-anchor="middle" font-size="10" fill="#ecf0f1" font-weight="bold">⮜⮜ Liquid Condensate Return via Capillary Wick Structure (毛細吸力回流)</text>
      <text x="370" y="235" text-anchor="middle" font-size="11" fill="#bdc3c7">Permanently sealed vacuum tube · Zero moving parts · Passive latent phase change</text>
    </svg>`,
    diagramCaption: 'Fig 7: Internal thermal dynamics of a bare heat pipe: Evaporator, adiabatic core, condenser, and capillary wick return loop',
    sections: [
      {
        title: 'Working Principle / 運作原理',
        zh: '<p><strong>熱管 (Heat pipe)</strong> 係一根內部抽成<strong>真空 (evacuated)</strong>、內壁附有<strong>毛細芯 (capillary wick)</strong>、灌注特選工質並<strong>永久密封</strong>之金屬管[cite: 2]。</p><ol><li><strong>蒸發端 (Evaporator)</strong>：吸收外部熱量，管內液態工質汽化產生較高蒸汽壓[cite: 2]。</li><li><strong>蒸氣流動</strong>：蒸汽以極高速度沿中心絕熱腔移向冷卻端[cite: 2]。</li><li><strong>冷凝端 (Condenser)</strong>：蒸氣受冷凝結成液體，釋放出巨大的<strong>汽化潛熱 (latent heat)</strong>[cite: 2]。</li><li><strong>毛細回流</strong>：凝液藉助毛細孔隙吸力（或重力）自動抽回蒸發端，循環周而復始[cite: 2]。<strong>無任何運轉部件，無需外接電源</strong>[cite: 2]。</li></ol>',
        en: '<p>A <strong>heat pipe</strong> is an evacuated, permanently sealed tube containing a working fluid and internal capillary wick structure[cite: 2].</p><ol><li>Heat at the evaporator vapourizes the liquid[cite: 2].</li><li>Higher vapour pressure drives vapour to the condenser[cite: 2].</li><li>Vapour condenses, releasing latent heat of vapourization[cite: 2].</li><li>Capillary wick pumps liquid back to evaporator. Passive, highly reliable closed-loop cycle[cite: 2].</li></ol>'
      }
    ]
  },
  {
    id: 't8', icon: '8', title: 'Heat Pipe Exchanger Array & Tilt Angle',
    titleZh: '熱管換熱器逆流矩陣、密封隔板與重力傾角',
    diagram: `<svg viewBox="0 0 740 280" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="400" height="215" fill="#243342" stroke="#34495e" stroke-width="2" rx="6"/>
        <text x="200" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#1abc9c">Gas-to-Gas Exchanger Array (逆流佈局與密封隔板)</text>
        <rect x="15" y="40" width="370" height="50" fill="#78281f" stroke="#c0392b" stroke-width="1.5"/>
        <text x="200" y="68" text-anchor="middle" font-size="11" fill="#f5b7b1" font-weight="bold">Hot Exhaust Gas Flow ➔➔</text>
        <rect x="195" y="30" width="10" height="195" fill="#1a252f" stroke="#34495e"/>
        <text x="175" y="150" font-size="8.5" fill="#1abc9c" transform="rotate(-90 175 150)" font-weight="bold">Sealed Partition (密封隔板)</text>
        <rect x="15" y="160" width="370" height="50" fill="#1b4f72" stroke="#2980b9" stroke-width="1.5"/>
        <text x="200" y="188" text-anchor="middle" font-size="11" fill="#d4e6f1" font-weight="bold">⮜⮜ Cold Fresh Supply Air (逆向流動)</text>
        <g stroke="#16a085" stroke-width="4">
          <line x1="50" y1="40" x2="50" y2="210"/>
          <line x1="100" y1="40" x2="100" y2="210"/>
          <line x1="150" y1="40" x2="150" y2="210"/>
          <line x1="250" y1="40" x2="250" y2="210"/>
          <line x1="300" y1="40" x2="300" y2="210"/>
          <line x1="350" y1="40" x2="350" y2="210"/>
        </g>
        <text x="200" y="232" text-anchor="middle" font-size="10" fill="#1abc9c" font-weight="bold">100% Zero Cross-Contamination</text>
      </g>
      <g class="scada-unit" transform="translate(445, 20)">
        <rect x="0" y="25" width="275" height="215" fill="#243342" stroke="#f39c12" stroke-width="2" rx="6"/>
        <text x="137" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">Gravity-Assist Tilt (傾斜角度)</text>
        <line x1="30" y1="160" x2="240" y2="90" stroke="#e74c3c" stroke-width="8" stroke-linecap="round"/>
        <text x="40" y="185" font-size="10.5" fill="#e74c3c" font-weight="bold">Hot End (Down)</text>
        <text x="210" y="80" font-size="10.5" fill="#3498db" font-weight="bold">Cold End</text>
        <path d="M220 105 L50 160" stroke="#3498db" stroke-width="2" stroke-dasharray="3 3"/>
        <text x="137" y="145" text-anchor="middle" font-size="9" fill="#ecf0f1">Gravity accelerates condensate return</text>
        <rect x="15" y="195" width="245" height="35" fill="#1a252f" stroke="#d4ac0d" rx="3"/>
        <text x="137" y="217" text-anchor="middle" font-size="10.5" fill="#f1c40f" font-weight="bold">Tilt: 5.7° (10% slope) or 90° (vertical)</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 8: Gas-to-gas heat pipe exchanger array (sealed partition prevents cross-contamination) and gravity-assist inclination angles',
    sections: [
      {
        title: 'Exchanger Array & Fins / 換熱器構造與翅片',
        zh: '<p>熱管換熱器由成百上千根獨立熱管組成，排成<strong>逆流 (counterflow)</strong> 形式[cite: 2]。中間設置<strong>密封隔板 (sealed partition)</strong>，將熱廢氣與冷新風物理隔離，<strong>零交叉污染 (no cross-contamination)</strong>[cite: 2]。管外配有翅片（整體平片、嵌入螺旋片或焊接螺旋片）[cite: 2]。標準直徑為 <strong>15, 25, 32, 40 及 50 mm</strong>[cite: 2]。</p>',
        en: '<p>Assembled from hundreds of independent tubes in counterflow[cite: 2]. A <strong>sealed partition</strong> prevents cross-contamination[cite: 2]. External secondary fins boost heat transfer[cite: 2]. Standard tube sizes: <strong>15, 25, 32, 40, 50 mm</strong>[cite: 2].</p>'
      },
      {
        title: 'Inclination & Limitation / 傾角效應與最大缺點',
        zh: '<p><strong>傾斜安裝</strong>：將熱端向下傾斜（常用 <strong>5.7° / 10% 斜度</strong> 或 <strong>90° 垂直</strong>），可利用重力輔助凝液回流，顯著提高傳熱極限[cite: 2]。</p><div class="key-point"><strong>核心局限：只能傳遞顯熱 (Sensible Heat Only)！</strong> 熱管無法傳遞水蒸氣濕度，對潛熱回收無能為力[cite: 2]。</div>',
        en: '<p>Operating tilted with the evaporator end down (<strong>5.7° or 90°</strong>) utilizes gravity to boost return rate[cite: 2]. <strong>Major Disadvantage</strong>: Transmits <em>sensible heat only</em>—no latent heat/moisture recovery[cite: 2].</p>'
      }
    ]
  },
  {
    id: 't9', icon: '9', title: 'Enthalpy Wheels: Summer & Winter Operation',
    titleZh: '焓輪：全熱回收、夏冬季工況與吹洗區原理',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="700" height="245" fill="#243342" stroke="#34495e" stroke-width="2" rx="6"/>
        <text x="350" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Enthalpy Wheel: Dual Seasonal Operation (全熱轉輪夏冬工況與吹洗結構)</text>
        <circle cx="350" cy="145" r="75" fill="#16a085" opacity="0.3" stroke="#12806d" stroke-width="4"/>
        <circle cx="350" cy="145" r="14" fill="#1a252f"/>
        <text x="350" y="135" text-anchor="middle" font-size="10" font-weight="bold" fill="#1abc9c">Rotating</text>
        <text x="350" y="150" text-anchor="middle" font-size="10" font-weight="bold" fill="#1abc9c">Matrix</text>
        <path d="M420 120 A 75 75 0 0 1 420 170" fill="none" stroke="#f39c12" stroke-width="3"/>
        <text x="440" y="148" font-size="9" fill="#f39c12" font-weight="bold">10-20 RPM</text>
        <path d="M350 145 L385 85 A 75 75 0 0 1 420 115 Z" fill="#f39c12" stroke="#b7950b"/>
        <text x="430" y="90" font-size="9" fill="#f1c40f" font-weight="bold">Purge Sector (吹洗區)</text>
        <rect x="20" y="45" width="290" height="55" fill="#78281f" stroke="#c0392b" stroke-width="1.5"/>
        <text x="165" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#f5b7b1">Summer: Hot &amp; Moist Outdoor Air In ➔</text>
        <rect x="390" y="45" width="290" height="55" fill="#1b4f72" stroke="#2980b9" stroke-width="1.5"/>
        <text x="535" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#d4e6f1">➔ Cooled &amp; Dehumidified Supply Air</text>
        <rect x="20" y="185" width="290" height="55" fill="#145a32" stroke="#27ae60" stroke-width="1.5"/>
        <text x="165" y="210" text-anchor="middle" font-size="10" font-weight="bold" fill="#abebc6">Winter: Cold &amp; Dry Outdoor Air In ➔</text>
        <rect x="390" y="185" width="290" height="55" fill="#7d6608" stroke="#f39c12" stroke-width="1.5"/>
        <text x="535" y="210" text-anchor="middle" font-size="10" font-weight="bold" fill="#fef9e7">➔ Warmed &amp; Humidified Supply Air</text>
        <text x="350" y="255" text-anchor="middle" font-size="10.5" fill="#ecf0f1" font-weight="bold">Recovers 70% – 90% Total Energy (Sensible + Latent Heat) · Face area: 2×2 m to 5×5 m</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 9: Enthalpy wheel operation: Summer cooling/dehumidifying, Winter heating/humidifying, and clean purge section',
    sections: [
      {
        title: 'Full Enthalpy Recovery / 全熱回收與極高效率',
        zh: '<p><strong>焓輪 (Enthalpy wheel)</strong> 由慢速旋轉的蜂窩狀蓄熱吸濕轉輪構成[cite: 2]。輪芯能同時吸收並釋放<strong>顯熱（溫度）與潛熱（水汽）</strong>，回收效率達 <strong>70% – 90%</strong>[cite: 2]。夏季將高溫高濕新風預冷除濕；冬季將寒冷乾燥新風預熱加濕[cite: 2]。</p>',
        en: '<p>An <strong>enthalpy wheel</strong> (heat wheel / regenerator) rotates slowly between exhaust and supply streams, recovering <strong>both sensible and latent heat (70%–90% efficiency)</strong>[cite: 2].</p>'
      },
      {
        title: 'Purge & Engineering Drawbacks / 吹洗區與缺點',
        zh: '<p><strong>吹洗區 (Purge sector)</strong>：利用少量新風將輪孔殘留廢氣反吹回排風側，大幅降低交叉污染[cite: 2]。</p><p><strong>工程缺點</strong>：① <strong>體積龐大 (2×2 m 至 5×5 m)</strong>[cite: 2]；② 風管交叉轉向多、阻力大[cite: 2]；③ 仍有微量交叉污染[cite: 2]；④ 轉輪基材易受煙氣腐蝕[cite: 2]；⑤ 需維護驅動皮帶、軸承及密封件[cite: 2]。</p>',
        en: '<p>A <strong>purge section</strong> uses clean outdoor air to flush wheel cells and minimize cross-contamination[cite: 2].</p><p><strong>Disadvantages</strong>: Bulky (<strong>2×2 m to 5×5 m</strong>); complex bent ductwork; minor cross-contamination risk; corrosion susceptibility; routine maintenance required[cite: 2].</p>'
      }
    ]
  },
  {
    id: 't10', icon: '10', title: 'Run-Around Coil Heat Recovery',
    titleZh: '環形雙盤管跨樓層獨立風管液體循環系統',
    diagram: `<svg viewBox="0 0 740 300" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="30" y="25" width="680" height="255" fill="#243342" stroke="#34495e" stroke-width="2" rx="6"/>
      <text x="370" y="16" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1abc9c">Run-Around Coil System (環形雙盤管遠距離隔離佈局)</text>
      <g class="scada-unit" transform="translate(60, 45)">
        <rect x="0" y="0" width="220" height="65" fill="#78281f" stroke="#c0392b" stroke-width="1.5" rx="3"/>
        <text x="110" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Roof Exhaust Duct (排風道)</text>
        <rect x="80" y="5" width="30" height="55" fill="#1a252f" stroke="#7f8c8d"/>
        <text x="95" y="36" text-anchor="middle" font-size="9" fill="#fff" transform="rotate(-90 95 36)">Exhaust Coil</text>
      </g>
      <g class="scada-unit" transform="translate(460, 195)">
        <rect x="0" y="0" width="220" height="65" fill="#1b4f72" stroke="#2980b9" stroke-width="1.5" rx="3"/>
        <text x="110" y="25" text-anchor="middle" font-size="11" font-weight="bold" fill="#fff">Basement Supply Duct (新風道)</text>
        <rect x="80" y="5" width="30" height="55" fill="#1a252f" stroke="#7f8c8d"/>
        <text x="95" y="36" text-anchor="middle" font-size="9" fill="#fff" transform="rotate(-90 95 36)">Supply Coil</text>
      </g>
      <path d="M170 75 L360 75 L360 225 L540 225" fill="none" stroke="#2ecc71" stroke-width="4" class="flow-glycol"/>
      <path d="M570 225 L650 225 L650 270 L140 270 L140 75 L140 75" fill="none" stroke="#2ecc71" stroke-width="4" class="flow-glycol"/>
      <circle cx="360" cy="150" r="18" fill="#16a085"/>
      <text x="360" y="155" text-anchor="middle" font-size="11" fill="#fff" font-weight="bold">P</text>
      <text x="360" y="130" text-anchor="middle" font-size="10.5" fill="#1abc9c" font-weight="bold">Circulation Pump</text>
      <text x="360" y="180" text-anchor="middle" font-size="10" fill="#ecf0f1">Closed Water / Glycol Loop</text>
      <rect x="400" y="55" width="260" height="55" fill="#1a252f" stroke="#16a085" rx="3"/>
      <text x="530" y="75" text-anchor="middle" font-size="10.5" fill="#1abc9c" font-weight="bold">✔ Coils placed completely far apart</text>
      <text x="530" y="95" text-anchor="middle" font-size="10" fill="#ecf0f1">✔ 100% Zero cross-contamination (Hospital grade)</text>
      <text x="370" y="285" text-anchor="middle" font-size="10.5" fill="#bdc3c7">Sensible Heat Only · Efficiency up to 70%</text>
    </svg>`,
    diagramCaption: 'Fig 10: Run-around twin coil hydronic loop linking widely separated air ducts with zero cross-contamination risk',
    sections: [
      {
        title: 'Operating Principle / 運作原理',
        zh: '<p><strong>環形盤管系統 (Run-around coil)</strong> 由安裝於排風道與新風道的兩組鰭片管換熱盤管組成，中間以封閉管路注滿<strong>水或防凍乙二醇水溶液 (glycol)</strong>，由<strong>循環水泵</strong>驅動液體流動傳熱[cite: 2]。效率最高約 <strong>70%</strong>[cite: 2]。</p>',
        en: '<p>Two finned coils connected by a closed hydronic loop filled with water or glycol solution, driven by an inline pump[cite: 2]. Transfers <strong>sensible heat</strong> with up to <strong>70% efficiency</strong>[cite: 2].</p>'
      },
      {
        title: 'Architectural Advantages / 建築優勢與局限',
        zh: '<p><strong>核心優勢</strong>：兩組盤管可<strong>相距極遠 (far apart)</strong>，無需將龐大風管引至一處（如屋頂排風與地庫新風），改造工程最理想；兩氣流物理隔離，<strong>絕對零交叉污染</strong>[cite: 2]。</p><p><strong>局限</strong>：只能傳遞顯熱；需消耗水泵電能；效率略遜於焓輪[cite: 2]。</p>',
        en: '<p><strong>Key Pro</strong>: The two coils can be located far apart with zero duct rerouting; zero cross-contamination. <strong>Con</strong>: Sensible only; requires pumping power[cite: 2].</p>'
      }
    ]
  },
  {
    id: 't11', icon: '11', title: 'Double-Bundle Heat Reclaim Condenser',
    titleZh: '雙束冷凝器冷水機組與周邊供熱盤管水路',
    diagram: `<svg viewBox="0 0 740 310" xmlns="http://www.w3.org/2000/svg" width="100%">
      <rect x="15" y="15" width="710" height="280" fill="#1a252f" stroke="#34495e" stroke-width="2" rx="8"/>
      <g class="scada-unit" transform="translate(260, 65)">
        <rect x="0" y="0" width="220" height="150" fill="#2c3e50" stroke="#16a085" stroke-width="2.5" rx="8"/>
        <text x="110" y="25" text-anchor="middle" font-size="12" font-weight="bold" fill="#1abc9c">Double-Bundle Chiller Package</text>
        <circle cx="110" cy="55" r="18" fill="#34495e" stroke="#ecf0f1" stroke-width="1.5"/>
        <text x="110" y="59" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Comp</text>
        <rect x="20" y="85" width="85" height="50" fill="#1b4f72" stroke="#3498db" stroke-width="1.5" rx="4"/>
        <text x="62" y="107" text-anchor="middle" font-size="9" fill="#ecf0f1" font-weight="bold">Tower Bundle</text>
        <text x="62" y="122" text-anchor="middle" font-size="8" fill="#bdc3c7">(排熱至大氣)</text>
        <rect x="115" y="85" width="85" height="50" fill="#78281f" stroke="#e74c3c" stroke-width="1.5" rx="4"/>
        <text x="157" y="107" text-anchor="middle" font-size="9" fill="#ecf0f1" font-weight="bold">Heating Bundle</text>
        <text x="157" y="122" text-anchor="middle" font-size="8" fill="#f5b7b1">(回收熱能)</text>
      </g>
      <path d="M 280 135 L 120 135 L 120 95" fill="none" stroke="#3498db" stroke-width="4" class="flow-cold"/>
      <rect x="60" y="45" width="100" height="55" fill="#243342" stroke="#3498db" stroke-width="2" rx="4"/>
      <text x="110" y="70" text-anchor="middle" font-size="10" font-weight="bold" fill="#3498db">Cooling Tower</text>
      <text x="110" y="84" text-anchor="middle" font-size="8.5" fill="#bdc3c7">(冷卻水塔)</text>
      <path d="M 120 45 L 120 30 L 300 30 L 300 85" fill="none" stroke="#3498db" stroke-width="4" class="flow-cold"/>
      <text x="210" y="24" font-size="9" fill="#3498db">Surplus Heat Rejection</text>
      <path d="M 440 135 L 610 135 L 610 175" fill="none" stroke="#e74c3c" stroke-width="4" class="flow-hot"/>
      <rect x="555" y="175" width="110" height="50" fill="#243342" stroke="#e74c3c" stroke-width="2" rx="4"/>
      <text x="610" y="197" text-anchor="middle" font-size="10" font-weight="bold" fill="#e74c3c">Perimeter Coils</text>
      <text x="610" y="212" text-anchor="middle" font-size="8.5" fill="#f5b7b1">(建築周邊供熱盤管)</text>
      <path d="M 555 200 L 460 200 L 460 220" fill="none" stroke="#e74c3c" stroke-width="4" class="flow-hot"/>
      <rect x="400" y="220" width="120" height="35" fill="#7d6608" stroke="#f1c40f" stroke-width="1.5" rx="3"/>
      <text x="460" y="242" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#fff">Auxiliary Top-up Heater</text>
      <path d="M 400 238 L 380 238 L 380 135" fill="none" stroke="#e74c3c" stroke-width="4" class="flow-hot"/>
      <g transform="translate(260, 230)">
        <rect x="0" y="0" width="110" height="40" fill="#145a32" stroke="#2ecc71" stroke-width="1.5" rx="4"/>
        <text x="55" y="18" text-anchor="middle" font-size="9" fill="#fff" font-weight="bold">Evaporator</text>
        <text x="55" y="32" text-anchor="middle" font-size="8" fill="#abebc6">7°C Chilled Water</text>
      </g>
      <text x="370" y="290" text-anchor="middle" font-size="10.5" fill="#1abc9c" font-weight="bold">同步提供 7°C 冷凍水與 45-50°C 熱水 · 無需鍋爐消耗額外燃油</text>
    </svg>`,
    diagramCaption: 'Fig 11: Double-bundle condenser layout: Reclaiming refrigeration heat for space heating coils while shedding surplus heat to cooling tower',
    sections: [
      {
        title: 'Simultaneous Cooling & Heating / 同步供冷與供熱',
        zh: '<p>冷水機運作時冷凝器會釋放大量廢熱[cite: 2]。<strong>雙束冷凝器 (Double-bundle condenser)</strong> 將冷凝器筒體內的水管分為兩組[cite: 2]：</p><ul><li><strong>冷卻塔水束 (Tower bundle)</strong>：連接冷卻塔，用於供暖負荷不足時將多餘熱量排向大氣[cite: 2]。</li><li><strong>供熱水束 (Heating bundle)</strong>：連接建築周邊區域暖氣盤管，回收廢熱供應熱水[cite: 2]。</li><li><strong>輔助加熱器 (Auxiliary heater)</strong>：在水溫未達標時作電熱或蒸汽輔助加熱[cite: 2]。</li></ul>',
        en: '<p>Captures chiller condensing waste heat for <strong>simultaneous space heating and cooling</strong>[cite: 2]. The shell houses two bundles: <strong>Tower bundle</strong> (heat rejection to atmosphere) and <strong>Heating bundle</strong> (perimeter zone heating coils), backed by an auxiliary top-up heater[cite: 2].</p>'
      }
    ]
  },
  {
    id: 't12', icon: '12', title: 'Heat Pumps, 4-Way Reversing Valve & Cascade System',
    titleZh: '熱泵原理、四通換向閥與串級冷暖系統',
    diagram: `<svg viewBox="0 0 740 320" xmlns="http://www.w3.org/2000/svg" width="100%">
      <g class="scada-unit" transform="translate(20, 20)">
        <rect x="0" y="25" width="335" height="260" fill="#243342" stroke="#34495e" stroke-width="2" rx="6"/>
        <text x="167" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#1abc9c">Reversible Heat Pump (四通換向閥原理)</text>
        <circle cx="167" cy="80" r="22" fill="#34495e"/>
        <text x="167" y="85" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">Comp</text>
        <circle cx="167" cy="145" r="20" fill="#e67e22"/>
        <text x="167" y="149" text-anchor="middle" font-size="8.5" fill="#fff" font-weight="bold">4-Way</text>
        <line x1="167" y1="102" x2="167" y2="125" stroke="#e74c3c" stroke-width="4"/>
        <rect x="25" y="125" width="45" height="70" fill="#1b4f72" stroke="#3498db" rx="3"/>
        <text x="47" y="165" text-anchor="middle" font-size="8" transform="rotate(-90 47 165)" font-weight="bold" fill="#ecf0f1">Outdoor Coil</text>
        <rect x="265" y="125" width="45" height="70" fill="#78281f" stroke="#e74c3c" rx="3"/>
        <text x="287" y="165" text-anchor="middle" font-size="8" transform="rotate(-90 287 165)" font-weight="bold" fill="#ecf0f1">Indoor Coil</text>
        <path d="M147 145 L70 145" stroke="#3498db" stroke-width="3"/>
        <path d="M187 145 L265 145" stroke="#e74c3c" stroke-width="3"/>
        <polygon points="160,225 174,225 167,235" fill="#f39c12"/>
        <polygon points="160,245 174,245 167,235" fill="#f39c12"/>
        <path d="M47 195 L47 235 L160 235 M174 235 L287 235 L287 195" fill="none" stroke="#bdc3c7" stroke-width="2.5"/>
        <rect x="20" y="255" width="295" height="25" fill="#1a252f" rx="3"/>
        <text x="167" y="272" text-anchor="middle" font-size="9.5" fill="#1abc9c" font-weight="bold">Summer: AC Mode | Winter: Heating Mode</text>
      </g>
      <g class="scada-unit" transform="translate(385, 20)">
        <rect x="0" y="25" width="335" height="260" fill="#243342" stroke="#f39c12" stroke-width="2" rx="6"/>
        <text x="167" y="16" text-anchor="middle" font-size="12" font-weight="bold" fill="#f39c12">Cascade Chiller-Heat Pump (串級系統)</text>
        <rect x="25" y="55" width="120" height="40" fill="#1b4f72" stroke="#3498db" rx="3"/>
        <text x="85" y="80" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#fff">Chiller Evap (Cooling)</text>
        <rect x="190" y="55" width="120" height="40" fill="#78281f" stroke="#c0392b" rx="3"/>
        <text x="250" y="80" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#fff">Chiller Condenser</text>
        <path d="M250 95 L250 140 L85 140 L85 165" fill="none" stroke="#f39c12" stroke-width="3" class="flow-hot"/>
        <text x="167" y="132" text-anchor="middle" font-size="8.5" fill="#f39c12" font-weight="bold">Chiller Condenser heat = Heat Pump Source</text>
        <rect x="25" y="165" width="120" height="40" fill="#78281f" stroke="#f39c12" rx="3"/>
        <text x="85" y="190" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#fff">Heat Pump Evap</text>
        <rect x="190" y="165" width="120" height="40" fill="#78281f" stroke="#c0392b" rx="3"/>
        <text x="250" y="190" text-anchor="middle" font-size="9.5" font-weight="bold" fill="#fff">HP Condenser</text>
        <path d="M145 185 L190 185" stroke="#e74c3c" stroke-width="3"/>
        <path d="M250 205 L250 235" stroke="#e74c3c" stroke-width="3" class="flow-hot"/>
        <text x="250" y="250" text-anchor="middle" font-size="10" fill="#e74c3c" font-weight="bold">Delivers 48 °C to 82 °C</text>
        <text x="250" y="265" text-anchor="middle" font-size="9" fill="#ecf0f1">Hot Water to Space Heating</text>
      </g>
    </svg>`,
    diagramCaption: 'Fig 12: Reversible heat pump with 4-way valve (left) and Cascade chiller-heat pump system delivering 48 °C to 82 °C hot water (right)',
    sections: [
      {
        title: 'Reversible & Cascade Systems / 可逆轉與串級系統',
        zh: '<ul><li><strong>可逆轉熱泵 (Reversible)</strong>：依賴<strong>四通換向閥 (4-way valve)</strong> 逆轉冷媒循環，夏季作冷水機制冷，冬季轉為熱泵向室內放熱[cite: 2]。</li><li><strong>串級系統 (Cascade chiller-heat pump)</strong>：將常規冷水機與熱泵串聯，<strong>冷水機的冷凝器排熱直接作為熱泵的蒸發器（熱源）</strong>[cite: 2]。熱泵冷凝器可輸出 <strong>48 °C 至 82 °C</strong> 之高溫熱水供應暖氣盤管，多餘熱量由冷卻塔排走[cite: 2]。</li><li><strong>性能系數 COP</strong>：$COP_{hp} = Q_1 / W = Q_1 / (Q_1 - Q_2) \\approx 3.0$（相較電熱棒 COP 永遠嚴格為 1.0）[cite: 2]。</li></ul>',
        en: '<ul><li><strong>Reversible Heat Pump</strong>: Uses a <strong>4-way valve</strong> to switch between summer cooling and winter heating[cite: 2].</li><li><strong>Cascade System</strong>: Chiller condenser acts as the heat source for the heat pump evaporator[cite: 2]. Heat pump delivers hot water at <strong>48 °C to 82 °C</strong> to heating coils while a cooling tower balances excess heat[cite: 2].</li><li><strong>COP</strong>: $COP_{hp} = Q_1 / W \\approx 3.0$ (compared to strictly 1.0 for electric heaters)[cite: 2].</li></ul>'
      }
    ]
  }
];

// ==========================================
// 25 MC QUESTIONS
// ==========================================
const mcData = [
  {
    question: "When a boiler is used to heat up a liquid without converting it from liquid to vapour, it is commonly called a:",
    options: ["Furnace", "Calorifier or liquid heater", "Smokestack", "Sectional radiator"],
    answer: 1,
    explanation: "Slide 2 states that when a boiler heats a liquid without converting it to vapour, it is called a calorifier or liquid heater. A furnace is used when heating air.",
    lesson: "L2"
  },
  {
    question: "Which of the following defines the upper limits for a LOW-PRESSURE hot-water boiler?",
    options: [
      "Pressure up to 103 kPa and temperature up to 100 °C",
      "Pressure up to 1100 kPa and temperature up to 120 °C",
      "Pressure up to 1100 kPa and temperature up to 150 °C",
      "Pressure above 1100 kPa and temperature above 120 °C"
    ],
    answer: 1,
    explanation: "Slide 3: Low-pressure hot water boilers are limited to 1100 kPa working pressure and 120 °C operating temperature (steam is limited to 103 kPa).",
    lesson: "L2"
  },
  {
    question: "Cast iron sectional boilers determine their overall capacity and energy rating primarily by:",
    options: [
      "The diameter of the welded shell plates",
      "The number of cast iron sections assembled together",
      "The static air pressure in the combustion chamber",
      "The length of the smokestack chimney"
    ],
    answer: 1,
    explanation: "Slide 3: Cast iron boilers consist of modular sections; the number of sections assembled determines boiler size and energy rating.",
    lesson: "L2"
  },
  {
    question: "In a WATER TUBE boiler, which fluid flows INSIDE the tubes?",
    options: [
      "Combustion flue gases",
      "Steam or water",
      "Fuel oil",
      "Compressed combustion air"
    ],
    answer: 1,
    explanation: "Slide 5: In water tube boilers, the tubes contain steam or water, while combustion heat is applied to the outside surface.",
    lesson: "L2"
  },
  {
    question: "What is the key practical advantage of a PACKAGED boiler?",
    options: [
      "It requires no electrical power or controls whatsoever",
      "It is completely shop-assembled with burner and controls, allowing rapid on-site commissioning",
      "It can only burn solid fuels like pulverized coal",
      "It eliminates the need for an exhaust flue or smokestack"
    ],
    answer: 1,
    explanation: "Slide 5: Packaged boilers are completely shop-assembled with firing equipment, controls, and auxiliaries, allowing quick on-site startup.",
    lesson: "L2"
  },
  {
    question: "Boiler operating controls are actuated based on the heating medium. Which pairing is correct?",
    options: [
      "Steam boilers: temperature actuated; Hot-water boilers: pressure actuated",
      "Steam boilers: pressure actuated; Hot-water boilers: temperature actuated",
      "Both steam and hot-water boilers: strictly pressure actuated",
      "Both steam and hot-water boilers: strictly time actuated"
    ],
    answer: 1,
    explanation: "Slide 7: Steam boilers use pressure-actuated controls, while hot-water boilers use temperature-actuated controls.",
    lesson: "L2"
  },
  {
    question: "The TURNDOWN RATIO of a modulating boiler burner represents:",
    options: [
      "The ratio of fuel consumed to combustion air supplied",
      "The ratio of maximum fuel input to minimum controllable fuel input",
      "The ratio of operating pressure to bursting test pressure",
      "The ratio of hot water flow rate to steam generation rate"
    ],
    answer: 1,
    explanation: "Slide 7: Modulating controls vary fuel input from 100% down to a minimum point. The ratio of max to min is called the turndown ratio.",
    lesson: "L2"
  },
  {
    question: "Standard engineering practice requires on-site fuel storage facilities to support continuous full-load boiler operation for:",
    options: ["3 days", "1 week", "3 weeks", "3 months"],
    answer: 2,
    explanation: "Slide 8: The standard engineering practice is to provide fuel storage enabling full-load operation for a period of 3 weeks.",
    lesson: "L2"
  },
  {
    question: "Which fitting is specifically required on an oil storage tank when storing HEAVY fuel oil?",
    options: ["Pneumatic blower", "Heater", "4-way reversing valve", "Continuous plate fin"],
    answer: 1,
    explanation: "Slide 8: Typical fittings include manhole, vent pipe, sludge valve, level indicator, and a heater specifically for heavy oil to maintain fluidity.",
    lesson: "L2"
  },
  {
    question: "Underground oil storage tanks are typically recommended for large storage quantities exceeding:",
    options: ["500 litres", "1000 litres", "3500 litres", "10000 litres"],
    answer: 2,
    explanation: "Slide 10: Underground tanks are specified for large quantities, stated as '> 3500 litres'.",
    lesson: "L2"
  },
  {
    question: "In a subsidiary fuel-oil handling arrangement with a daily service tank near the boiler, the transfer pumps are usually:",
    options: [
      "Omitted in favour of compressed air",
      "Provided in duplicate (duty and standby)",
      "Reversible heat pumps",
      "Driven by steam turbines only"
    ],
    answer: 1,
    explanation: "Slide 10 & 13: Pumps lifting fuel to the daily service tank are usually provided in duplicate (one duty, one standby).",
    lesson: "L2"
  },
  {
    question: "Which of the following is an advantage of a CENTRALISED boiler plant over a decentralised plant?",
    options: [
      "Lower distribution piping heat loss",
      "Easier apportionment and metering of individual tenant energy charges",
      "Diversity factor can be applied, reducing total installed boiler capacity",
      "Zero hydronic balancing or water commissioning required"
    ],
    answer: 2,
    explanation: "Slide 14: Centralisation allows diversity to be applied, meaning the total installed capacity is smaller than the sum of individual peaks.",
    lesson: "L2"
  },
  {
    question: "Which is a major DISADVANTAGE of a centralised boiler plant?",
    options: [
      "High distribution heat loss through extensive external pipework",
      "Inability to handle flue gas emissions and noise centrally",
      "Higher labour required for central operation and maintenance",
      "Complete lack of backup capacity during part-load conditions"
    ],
    answer: 0,
    explanation: "Slide 14: Centralised plants require extensive distribution piping, leading to substantial pipework heat loss.",
    lesson: "L2"
  },
  {
    question: "Why does a DE-CENTRALISED boiler arrangement generally require a LARGER total installed boiler capacity?",
    options: [
      "Individual boilers operate at higher steam pressures",
      "Less load diversity can be applied across independent facilities",
      "The fuel must be pre-heated to higher temperatures",
      "Decentralised boilers cannot use modulating burners"
    ],
    answer: 1,
    explanation: "Slide 15: In decentralised plants, less diversity can be applied, so total installed capacity across all units must be bigger.",
    lesson: "L2"
  },
  {
    question: "To improve boiler efficiency during light summer loads or night-time operation, the plant should:",
    options: [
      "Operate large boilers with high excess air",
      "Install a small lead/jockey boiler alongside large capacity boilers",
      "Eliminate feed water chemical treatment",
      "Shut down water circulation pumps completely"
    ],
    answer: 1,
    explanation: "Slide 16: Installing a small boiler alongside large boilers allows efficient operation during low-load conditions.",
    lesson: "L2"
  },
  {
    question: "Why must scale and fouling inside boiler tubes be strictly controlled through water treatment?",
    options: [
      "Scale acts as an insulating layer, severely retarding heat transfer and wasting fuel",
      "Scale increases the turndown ratio beyond safe limits",
      "Scale causes the fuel to turn into vapor before entering the burner",
      "Scale converts hot water into high-pressure steam instantly"
    ],
    answer: 0,
    explanation: "Slide 16: Controlling fouling and scale by water treatment ensures heat transfer surfaces remain clean and efficient.",
    lesson: "L2"
  },
  {
    question: "How does a HEAT PIPE transfer thermal energy between its evaporator and condenser ends?",
    options: [
      "By mechanical liquid pumping through an open loop",
      "By a continuous closed-loop evaporation and condensation phase-change cycle",
      "By electrical thermoelectric Peltier cooling",
      "By high-frequency magnetic induction"
    ],
    answer: 1,
    explanation: "Slide 20: A heat pipe operates on a passive, closed-loop evaporation/condensation cycle using an internal capillary wick.",
    lesson: "L2"
  },
  {
    question: "Why is there NO cross-contamination in a gas-to-gas heat pipe heat exchanger?",
    options: [
      "The exhaust and supply air streams are mixed inside the adiabatic section",
      "A sealed partition physically isolates the two air streams while heat pipes span across both",
      "Both air streams are maintained at identical static pressures",
      "The air is passed through charcoal desiccant filters"
    ],
    answer: 1,
    explanation: "Slide 19: A sealed partition separates the exhaust from the supply air stream, eliminating cross-contamination.",
    lesson: "L2"
  },
  {
    question: "What is considered the MAIN inherent limitation of a heat pipe heat exchanger?",
    options: [
      "It requires a high-power external motor drive",
      "It can only transfer sensible heat and cannot recover latent heat",
      "Failure of one pipe causes the entire exchanger to stop working",
      "It cannot be installed with finned surfaces"
    ],
    answer: 1,
    explanation: "Slide 24: The main limitation is that heat pipes can only transfer sensible heat, not latent heat.",
    lesson: "L2"
  },
  {
    question: "Why are industrial heat pipes often installed tilted with the hot end BELOW the horizontal?",
    options: [
      "To prevent flue gas soot deposition",
      "To enable gravity to assist liquid condensate drainage back to the evaporator",
      "To reduce acoustic vibration from the burner",
      "To allow easy replacement without shutting down fans"
    ],
    answer: 1,
    explanation: "Slide 22: Operating heat pipes sloped with hot ends below horizontal uses gravity to assist condensate return, increasing capacity.",
    lesson: "L2"
  },
  {
    question: "What is the claimed total energy recovery efficiency range of an ENTHALPY WHEEL?",
    options: ["20% – 40%", "40% – 60%", "70% – 90%", "95% – 100%"],
    answer: 2,
    explanation: "Slide 29: Enthalpy wheels are claimed to recover 70% to 90% of the energy from the exhaust stream, including both sensible and latent heat.",
    lesson: "L2"
  },
  {
    question: "What is the primary function of the PURGE SECTION on an enthalpy wheel?",
    options: [
      "To heat the wheel matrix with high-pressure steam",
      "To blow residual contaminants off the wheel matrix and minimize cross-contamination",
      "To lubricate the rotating central bearing",
      "To measure the static pressure drop across the honeycombs"
    ],
    answer: 1,
    explanation: "Slide 29 & 31: The purge section blows contaminants off the rotating wheel material to minimize cross-contamination.",
    lesson: "L2"
  },
  {
    question: "What is the defining architectural advantage of a RUN-AROUND COIL heat recovery system?",
    options: [
      "It recovers both sensible and latent heat with 95% efficiency",
      "The supply and exhaust coils can be situated far apart and linked only by pipes",
      "It does not require any circulation pump or electrical power",
      "It eliminates the need for air filters on dirty exhaust streams"
    ],
    answer: 1,
    explanation: "Slide 32: In a run-around coil system, the two coils are linked by a hydronic pipe loop, so coils can be located far apart.",
    lesson: "L2"
  },
  {
    question: "In a chiller with a DOUBLE-BUNDLE condenser, the two condenser tube bundles are dedicated to:",
    options: [
      "Low pressure steam and high pressure steam",
      "Chilled water cooling and ice storage",
      "Heat rejection to the cooling tower and heat recovery to perimeter heating coils",
      "Primary refrigerant expansion and secondary brine cooling"
    ],
    answer: 2,
    explanation: "Slide 35: The double-bundle condenser features a tower bundle (cooling tower rejection) and a heating bundle (perimeter zone heating).",
    lesson: "L2"
  },
  {
    question: "In a CASCADE chiller-heat pump system, what serves as the HEAT SOURCE for the heat pump?",
    options: [
      "An open gas-fired burner",
      "The condenser of the chiller",
      "The cooling tower water basin",
      "The boiler smokestack"
    ],
    answer: 1,
    explanation: "Slide 43: The condenser of the chiller acts as the heat source for the heat pump evaporator, delivering 48 °C to 82 °C hot water.",
    lesson: "L2"
  }
];

// ==========================================
// 5 SHORT ANSWER QUESTIONS
// ==========================================
const shortData = [
  {
    type: "compare",
    lesson: "L2",
    question: "Compare FIRE TUBE boilers with WATER TUBE boilers regarding (a) internal fluid routing, (b) typical operating pressure/capacity capabilities, (c) water volume/thermal inertia, and (d) susceptibility to explosion risk.",
    modelAnswer: "(a) Internal fluid routing:\n• Fire tube: High-temperature combustion flue gases pass INSIDE the tubes, while boiler water surrounds the outer tube surfaces inside the cylindrical pressure shell[cite: 2].\n• Water tube: Water and steam circulate INSIDE the tubes, while the combustion chamber and hot flue gases pass over the OUTSIDE tube surfaces[cite: 2].\n\n(b) Pressure & Capacity:\n• Fire tube: Generally limited to low-to-medium pressures (typically steam ≤ 1800 kPa) and modest capacities due to the large-diameter shell requiring thick walls to resist hoop stress[cite: 2].\n• Water tube: Capable of handling extremely high operating pressures (well over 10 MPa) and massive steam capacities (e.g. large district heating or power generation plants)[cite: 2].\n\n(c) Water volume & Thermal inertia:\n• Fire tube: Holds a large volume of water; high thermal storage capacity makes it less sensitive to sudden steam load swings, but startup from cold is relatively slow.\n• Water tube: Holds a much smaller water volume per unit output; rapid steaming and fast response to load changes.\n\n(d) Explosion risk:\n• Fire tube: The large shell holds huge stored energy; catastrophic shell rupture represents a devastating blast hazard.\n• Water tube: Relatively safer; tube failure typically results in localized rupture without unzipping the main vessel.",
    tips: "Structure your answer into 4 clear bullet points: fluid routing, pressure/capacity limits, water volume/response, and safety."
  },
  {
    type: "compare",
    lesson: "L2",
    question: "A client is debating between a CENTRALISED boiler plant and a DE-CENTRALISED boiler plant for a large multi-building hospital complex. Compare both strategies on: (i) Diversity factor & total installed capacity, (ii) Energy metering & billing, and (iii) Reliability and maintenance.",
    modelAnswer: "(i) Diversity Factor & Installed Capacity:\n• Centralised: High diversity factor can be applied across different building load profiles (e.g., wards, laundry, clinics peak at different times)[cite: 2]. Total installed boiler capacity is significantly smaller, reducing capital equipment costs[cite: 2].\n• Decentralised: Little to no diversity can be shared. Each building must be sized for its own independent peak load, resulting in a substantially larger aggregate installed capacity[cite: 2].\n\n(ii) Energy Metering & Billing:\n• Centralised: Difficult and costly to accurately apportion and meter thermal energy consumption to individual departments/tenants due to network line losses[cite: 2].\n• Decentralised: Straightforward sub-metering; fuel or electricity is metered directly at each plant room, making accounting transparent[cite: 2].\n\n(iii) Reliability & Maintenance:\n• Centralised: Operations, flue gas abatement, and maintenance are concentrated in one central plant room with dedicated staff[cite: 2]. Standby boilers provide N+1 redundancy for the entire complex[cite: 2]. However, distribution pipe failure cuts heat to all buildings.\n• Decentralised: Maintenance labour is scattered across multiple locations, increasing operating costs[cite: 2]. If a local boiler breaks down, that dedicated facility suffers immediate partial or total loss of heating[cite: 2].",
    tips: "Contrast diversity/capacity sizing, tenant metering ease, and maintenance centralization vs failure impact."
  },
  {
    type: "scenario",
    lesson: "L2",
    question: "An existing commercial boiler room exhibits poor operational efficiency and high fuel bills. As the facility engineer, outline FIVE practical measures from Lecture 2 to upgrade the overall plant efficiency, explaining the engineering mechanism for each.",
    modelAnswer: "1. Install a Small Lead/Jockey Boiler:\n• Mechanism: Large boilers suffer abysmal efficiency and high cyclic pre-purge losses during light summer or overnight loads. Operating a small jockey boiler during low-load periods keeps the boiler firing closer to its optimal design point[cite: 2].\n\n2. Chemical Water Treatment & Tube Descaling:\n• Mechanism: Eliminates scale formation on boiler tube surfaces[cite: 2]. Even 1 mm of scale acts as a severe thermal insulator, drastically retarding heat transfer and forcing excessive fuel consumption.\n\n3. Combustion Air/Fuel (A/F) Ratio Optimization:\n• Mechanism: Tune burners to ensure complete combustion while keeping excess air to the minimum required[cite: 2]. Excessive combustion air absorbs furnace heat and carries it uselessly out the smokestack.\n\n4. Flue Gas Waste Heat Recovery (Economiser / Air Preheater):\n• Mechanism: Install a heat exchanger (such as a heat pipe or economiser coil) in the flue stack to reclaim residual exhaust heat to preheat boiler feed water or incoming combustion air[cite: 2].\n\n5. Distribution Network Insulation & Leak Detection:\n• Mechanism: Re-insulate all uninsulated valves, flanges, and piping headers, and carry out steam trap maintenance to eliminate thermal radiation losses and live steam leakage[cite: 2].",
    tips: "Select 5 distinct points from the 10 listed in the lecture: jockey boiler, water treatment, A/F tuning, flue gas recovery, and insulation/leaks."
  },
  {
    type: "trace",
    lesson: "L2",
    question: "A cascade chiller-heat pump system extracts heat from a building chiller condenser. The heat pump delivers Q₁ = 600 kW of hot water at 65 °C to the heating coils while consuming W = 150 kW of electrical compressor power. (a) Calculate the heat absorbed Q₂ from the chiller condenser. (b) Calculate the COP of the heat pump. (c) If an electric resistance heater were used instead, how much electrical power would be consumed to provide the same 600 kW heat?",
    modelAnswer: "Step 1: First Law Energy Balance for the Heat Pump\nEnergy entering the heat pump = Energy leaving the heat pump\nQ₂ (heat absorbed from low-temperature source) + W (electrical compressor power) = Q₁ (heat delivered to heating load)[cite: 2]\nTherefore:\nQ₂ = Q₁ − W\nQ₂ = 600 kW − 150 kW = 450 kW\n\nStep 2: Calculate Coefficient of Performance (COP_hp)\nCOP_hp = Useful Heat Output (Q₁) / Work Input (W)[cite: 2]\nCOP_hp = 600 kW / 150 kW = 4.0[cite: 2]\n(Alternatively: COP_hp = Q₁ / (Q₁ − Q₂) = 600 / (600 − 450) = 4.0)[cite: 2]\n\nStep 3: Comparison with Electric Resistance Heating\nAn electric resistance heater converts electrical energy into thermal energy on a 1-to-1 basis (effective COP = 1.0)[cite: 2]:\nPower consumed = 600 kW / 1.0 = 600 kW\n\nConclusion:\nThe heat pump consumes only 150 kW of electricity to supply 600 kW of heat (saving 450 kW of electrical power, or a 75% energy reduction compared to electric resistance heating).",
    tips: "Show formula step-by-step: Q₂ = Q₁ − W = 450 kW; COP = Q₁/W = 4.0; electric heater = 600 kW."
  },
  {
    type: "explain",
    lesson: "L2",
    question: "Compare an ENTHALPY WHEEL, a HEAT PIPE, and a RUN-AROUND COIL system in terms of: (a) sensible vs latent heat transfer ability, (b) risk of cross-contamination, and (c) flexibility when supply and exhaust air ducts are separated by a large physical distance.",
    modelAnswer: "(a) Sensible vs Latent Heat Transfer Ability:\n• Enthalpy Wheel: Transfers BOTH sensible and latent heat with high total efficiency (70%–90%) via its rotating moisture-absorbing matrix[cite: 2].\n• Heat Pipe: Transfers SENSIBLE heat ONLY[cite: 2]. It cannot recover latent heat or transfer moisture between streams[cite: 2].\n• Run-around Coil: Transfers SENSIBLE heat ONLY via its closed hydronic loop (efficiency up to 70%)[cite: 2].\n\n(b) Risk of Cross-Contamination:\n• Enthalpy Wheel: Has a slight risk of cross-contamination because the same wheel matrix physically rotates between exhaust and fresh air streams[cite: 2]. A purge sector considerably minimizes, but cannot 100% eliminate, carry-over[cite: 2].\n• Heat Pipe: ZERO cross-contamination[cite: 2]. A permanently sealed partition completely isolates the two airstreams[cite: 2].\n• Run-around Coil: ZERO cross-contamination[cite: 2]. The air streams are completely segregated in separate ducts; only water/glycol circulates between them[cite: 2].\n\n(c) Physical Duct Separation Flexibility:\n• Enthalpy Wheel: Very poor flexibility. Supply and exhaust ducts must be routed adjacent to each other at the exact location of the wheel, creating bulky, bent ductwork[cite: 2].\n• Heat Pipe: Poor flexibility. Requires adjacent counterflow ducts separated by a partition at the heat exchanger[cite: 2].\n• Run-around Coil: EXCELLENT flexibility. The two coils can be located far apart in completely different areas of the building, connected simply by small-diameter circulating pipes[cite: 2].",
    tips: "A 3-part comparison covering Sensible/Latent, Cross-contamination, and Spatial separation flexibility."
  }
];

// ==========================================
// RENDER & DOM BINDINGS
// ==========================================
function renderNotes() {
  const c = document.getElementById('notesContainer');
  c.innerHTML = '';
  notesData.forEach(topic => {
    const card = document.createElement('div');
    card.className = 'topic-card';
    card.id = topic.id;
    let sectionsHTML = '';
    topic.sections.forEach(sec => {
      sectionsHTML += `
        <h3 style="margin-top:18px;margin-bottom:6px;color:#34495e;font-size:16px;border-bottom:1px dashed #dce1e6;padding-bottom:4px;">${escapeHtml(sec.title)}</h3>
        <div class="lang-pair">
          <div class="lang-cell zh">
            <div class="lang-label">中文重點 / Cantonese &amp; Chinese</div>
            ${sec.zh}
          </div>
          <div class="lang-cell en">
            <div class="lang-label">English Notes</div>
            ${sec.en}
          </div>
        </div>`;
    });
    let diagramHTML = '';
    if (topic.diagram) {
      diagramHTML = `
        <div class="diagram-block">
          <div class="diagram-title">⚡ SCADA Interactive Schematic / 工業級動態原理圖</div>
          ${topic.diagram}
          ${topic.diagramCaption ? '<div class="diagram-caption">' + escapeHtml(topic.diagramCaption) + '</div>' : ''}
        </div>`;
    }
    card.innerHTML = `
      <div class="topic-header">
        <div class="topic-icon">${topic.icon}</div>
        <div class="topic-title">
          <h2>${escapeHtml(topic.title)} <span style="color:#7f8c8d;font-weight:normal;font-size:14px;">/ ${escapeHtml(topic.titleZh)}</span></h2>
        </div>
      </div>
      ${sectionsHTML}
      ${diagramHTML}`;
    c.appendChild(card);
  });
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const shuffledAnswers = {};
function renderMC() {
  const container = document.getElementById('mcContainer');
  container.innerHTML = '';
  mcData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card';
    card.id = 'mc-q' + index;
    const indices = q.options.map((_, i) => i);
    shuffleArray(indices);
    const newAnswerIndex = indices.indexOf(q.answer);
    shuffledAnswers[index] = newAnswerIndex;
    let optionsHTML = '';
    indices.forEach((origIdx, displayIdx) => {
      const opt = q.options[origIdx];
      const safeOpt = escapeHtml(opt);
      optionsHTML += `
        <label id="mc-q${index}-opt${displayIdx}">
          <input type="radio" name="mc${index}" value="${displayIdx}" onchange="recordAnswer(${index}, ${displayIdx})">
          ${safeOpt}
        </label>`;
    });
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">Q${index + 1}</span>
        <span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>
      </div>
      <div class="q-text">${escapeHtml(q.question)}</div>
      <div class="options">${optionsHTML}</div>
      <div class="explanation" id="mc-exp${index}">
        <strong>Explanation / 詳細解釋：</strong>${escapeHtml(q.explanation)}
      </div>`;
    container.appendChild(card);
  });
}

function renderShort() {
  const c = document.getElementById('shortContainer');
  c.innerHTML = '';
  shortData.forEach((q, index) => {
    const card = document.createElement('div');
    card.className = 'question-card short-q';
    card.id = 'short-q' + index;
    const typeTag = typeLabels[q.type] || '';
    const lessonTag = `<span class="q-tag">${lessonLabels[q.lesson] || q.lesson}</span>`;
    const safeQuestion = escapeHtml(q.question).replace(/\n/g, '<br>');
    card.innerHTML = `
      <div class="q-header">
        <span class="q-number">S${index + 1}</span>
        ${typeTag}
        ${lessonTag}
      </div>
      <div class="q-text">${safeQuestion}</div>
      <textarea id="short-input${index}" placeholder="Type your answer here for practice / 喺度輸入你的思考答案..."></textarea>
      <div class="answer-tips">💡 Tip / 提示：${escapeHtml(q.tips || 'Key engineering concepts')}</div>
      <div class="model-answer" id="short-ans${index}">
        <strong>📝 Model Answer / 規範參考答案：</strong>
        <pre></pre>
      </div>`;
    card.querySelector('pre').textContent = q.modelAnswer;
    c.appendChild(card);
  });
}

let userAnswers = {};
let timerInterval;
let timeLeft = 90 * 60;

function recordAnswer(qIndex, optIndex) {
  userAnswers[qIndex] = optIndex;
  updateStats();
}

function updateStats() {
  const answered = Object.keys(userAnswers).length;
  const total = mcData.length;
  document.getElementById('answeredCount').textContent = answered + '/' + total;
  const percent = (answered / total) * 100;
  document.getElementById('progressBar').style.width = percent + '%';
}

function showSection(section) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (section === 'notes') {
    document.getElementById('notesSection').classList.add('active');
    document.querySelectorAll('.tab-btn')[0].classList.add('active');
  } else if (section === 'part1') {
    document.getElementById('part1Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[1].classList.add('active');
  } else if (section === 'part2') {
    document.getElementById('part2Section').classList.add('active');
    document.querySelectorAll('.tab-btn')[2].classList.add('active');
  }
  window.scrollTo({ top: 0, behavior: 'auto' });
}

function submitMC() {
  let correct = 0;
  let reviewHTML = '';
  mcData.forEach((q, index) => {
    const userAnswer = userAnswers[index];
    const correctDisplayAnswer = shuffledAnswers[index];
    const isCorrect = userAnswer === correctDisplayAnswer;
    const card = document.getElementById('mc-q' + index);
    const explanation = document.getElementById('mc-exp' + index);
    explanation.style.display = 'block';
    if (isCorrect) {
      correct++;
      card.classList.add('answered');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item correct">Q${index + 1} ✓ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    } else {
      card.classList.add('wrong');
      if (userAnswer !== undefined) document.getElementById('mc-q' + index + '-opt' + userAnswer).classList.add('incorrect');
      document.getElementById('mc-q' + index + '-opt' + correctDisplayAnswer).classList.add('correct');
      reviewHTML += `<div class="review-item wrong">Q${index + 1} ✗ — ${escapeHtml(q.question.substring(0, 45))}…</div>`;
    }
  });
  const percent = Math.round((correct / mcData.length) * 100);
  document.getElementById('finalScore').textContent = percent + '%';
  document.getElementById('scoreCircle').style.setProperty('--percent', percent);
  let msg = '';
  if (percent >= 80) msg = '🎉 卓越！你已經徹底掌握鍋爐與熱能回收系統嘅工程精髓！';
  else if (percent >= 60) msg = '👍 做得好！請仔細閱讀答錯題目的詳細解釋。';
  else if (percent >= 50) msg = '✅ 及格。建議重溫講義中關於控制與熱泵的計算部分。';
  else msg = '📚 繼續努力！點擊 Notes 重新溫習相應主題後再試一次。';
  document.getElementById('resultMsg').textContent = msg;
  document.getElementById('scoreDisplay').textContent = percent + '%';
  document.getElementById('reviewSection').innerHTML = `<h3>MC Result: ${correct}/${mcData.length} (${percent}%)</h3><div>${reviewHTML}</div>`;
  document.getElementById('resultPanel').style.display = 'block';
  document.getElementById('resultPanel').scrollIntoView({ behavior: 'auto' });
  clearInterval(timerInterval);
}

function showAnswers() {
  shortData.forEach((q, index) => {
    document.getElementById('short-ans' + index).style.display = 'block';
  });
}

function startTimer() {
  timerInterval = setInterval(() => {
    timeLeft--;
    const m = Math.floor(timeLeft / 60);
    const s = timeLeft % 60;
    document.getElementById('timer').textContent = String(m).padStart(2,'0') + ':' + String(s).padStart(2,'0');
    if (timeLeft <= 0) { clearInterval(timerInterval); alert('Time is up!'); submitMC(); }
    if (timeLeft <= 300) document.getElementById('timer').style.color = '#e74c3c';
  }, 1000);
}

document.addEventListener('click', function(e) {
  if (e.target.tagName === 'BUTTON') setTimeout(() => e.target.blur(), 100);
});

window.onload = function() {
  renderNotes();
  renderMC();
  renderShort();
  startTimer();
  updateStats();
};

window.addEventListener('scroll', function() {
  const btn = document.getElementById('toTop');
  if (!btn) return;
  if (window.pageYOffset > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});
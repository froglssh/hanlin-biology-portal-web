// 高中生物全系列互動教學網頁總入口 — 交互與搜尋腳本

// 全高中生物核心章節與單元檢索資料庫
const BIOLOGY_DATABASE = [
  // 高一必修生物
  {
    book: "高一必修生物",
    bookCode: "req",
    chapter: "第 1 章 細胞的構造與功能",
    unit: "1-1 細胞發現之旅",
    desc: "顯微鏡發展、虎克發現細胞、細胞學說發展歷程",
    tags: ["細胞", "顯微鏡", "細胞學說", "虎克", "許旺", "許來登"],
    url: "https://froglssh.github.io/hanlin-required-biology-v2-web/"
  },
  {
    book: "高一必修生物",
    bookCode: "req",
    chapter: "第 1 章 細胞的構造與功能",
    unit: "1-2 細胞構造探險站",
    desc: "原核與真核細胞構造、細胞核、粒線體、葉綠體與細胞器分工",
    tags: ["細胞構造", "細胞膜", "粒線體", "葉綠體", "原核細胞", "真核細胞"],
    url: "https://froglssh.github.io/hanlin-required-biology-v2-web/"
  },
  {
    book: "高一必修生物",
    bookCode: "req",
    chapter: "第 1 章 細胞的構造與功能",
    unit: "1-3 能量轉換站",
    desc: "ATP 能量貨幣、光合作用光反應與碳反應、呼吸作用概念",
    tags: ["ATP", "能量轉換", "光合作用", "呼吸作用", "酵素"],
    url: "https://froglssh.github.io/hanlin-required-biology-v2-web/"
  },
  {
    book: "高一必修生物",
    bookCode: "req",
    chapter: "第 1 章 細胞的構造與功能",
    unit: "1-4 染色體排排站",
    desc: "細胞週期、染色質與染色體、有絲分裂與減數分裂比較",
    tags: ["染色體", "細胞分裂", "有絲分裂", "減數分裂", "紡錘絲"],
    url: "https://froglssh.github.io/hanlin-required-biology-v2-web/"
  },
  {
    book: "高一必修生物",
    bookCode: "req",
    chapter: "第 2 章 生殖與遺傳",
    unit: "2-1 遺傳機率站",
    desc: "孟德爾豌豆雜交實驗、分離律、獨立分配律與棋盤方格法",
    tags: ["孟德爾", "遺傳律", "基因型", "表現型", "機率", "棋盤方格"],
    url: "https://froglssh.github.io/hanlin-required-biology-v2-web/"
  },
  {
    book: "高一必修生物",
    bookCode: "req",
    chapter: "第 2 章 生殖與遺傳",
    unit: "2-2 染色體偵探社",
    desc: "性染色體與性聯遺傳、紅綠色盲與血友病遺傳譜系",
    tags: ["性染色體", "性聯遺傳", "紅綠色盲", "血友病", "譜系圖"],
    url: "https://froglssh.github.io/hanlin-required-biology-v2-web/"
  },
  {
    book: "高一必修生物",
    bookCode: "req",
    chapter: "第 2 章 生殖與遺傳",
    unit: "2-3 遺傳物質工作坊",
    desc: "DNA 雙螺旋構造、含氮鹼基配對規則、遺傳密碼中心法則",
    tags: ["DNA", "核酸", "鹼基配對", "華生", "克立克", "中心法則"],
    url: "https://froglssh.github.io/hanlin-required-biology-v2-web/"
  },
  {
    book: "高一必修生物",
    bookCode: "req",
    chapter: "第 2 章 生殖與遺傳",
    unit: "2-4 基因轉殖實驗室",
    desc: "基因重組技術、質體載體、基因轉殖農作物與醫療應用倫理",
    tags: ["基因工程", "基改生物", "質體", "載體", "生物技術", "胰島素"],
    url: "https://froglssh.github.io/hanlin-required-biology-v2-web/"
  },
  {
    book: "高一必修生物",
    bookCode: "req",
    chapter: "第 3 章 演化與多樣性",
    unit: "3-1 演化觀念對決",
    desc: "達爾文天擇說、拉馬克用進廢退說、化石與解剖演化證據",
    tags: ["天擇說", "達爾文", "拉馬克", "演化證據", "同源構造"],
    url: "https://froglssh.github.io/hanlin-required-biology-v2-web/"
  },
  {
    book: "高一必修生物",
    bookCode: "req",
    chapter: "第 3 章 演化與多樣性",
    unit: "3-2 生命樹探險隊",
    desc: "林奈二名法、生物分類階層、五界說與三域系統生命大樹",
    tags: ["生命之樹", "三域系統", "細菌", "古菌", "真核生物", "生物分類"],
    url: "https://froglssh.github.io/hanlin-required-biology-v2-web/"
  },

  // 選修生物（Ⅰ）
  {
    book: "選修生物（Ⅰ）",
    bookCode: "bio1",
    chapter: "第 1 章 細胞的分子組成",
    unit: "1-1 細胞的分子組成",
    desc: "水、無機鹽、醣類、脂質、蛋白質、核酸的分子構型與生化功能",
    tags: ["分子生物", "有機物", "醣類", "蛋白質", "胜肽鍵", "脂質", "核酸"],
    url: "https://froglssh.github.io/hanlin-elective-biology-1-web/選修生物1教材網站/"
  },
  {
    book: "選修生物（Ⅰ）",
    bookCode: "bio1",
    chapter: "第 1 章 細胞的分子組成",
    unit: "1-2 生物膜的構造與功能",
    desc: "流體鑲嵌模型、磷脂雙層、膜蛋白、膽固醇與內膜系統",
    tags: ["細胞膜", "生物膜", "流體鑲嵌模型", "膜蛋白", "磷脂", "內膜系統"],
    url: "https://froglssh.github.io/hanlin-elective-biology-1-web/選修生物1教材網站/"
  },
  {
    book: "選修生物（Ⅰ）",
    bookCode: "bio1",
    chapter: "第 1 章 細胞的分子組成",
    unit: "1-3 細胞膜運輸物質的方式",
    desc: "簡單擴散、便利性擴散、主動運輸、胞吞與胞吐作用",
    tags: ["物質運輸", "滲透作用", "擴散", "主動運輸", "通道蛋白", "鈉鉀幫浦"],
    url: "https://froglssh.github.io/hanlin-elective-biology-1-web/選修生物1教材網站/"
  },
  {
    book: "選修生物（Ⅰ）",
    bookCode: "bio1",
    chapter: "第 2 章 細胞的能量代謝",
    unit: "2-1 新陳代謝與酵素",
    desc: "同化異化反應、活化能降低機制、酵素受質特異性與抑制劑",
    tags: ["酵素", "活化能", "新陳代謝", "競爭性抑制", "輔酶"],
    url: "https://froglssh.github.io/hanlin-elective-biology-1-web/選修生物1教材網站/"
  },
  {
    book: "選修生物（Ⅰ）",
    bookCode: "bio1",
    chapter: "第 2 章 細胞的能量代謝",
    unit: "2-2 呼吸作用",
    desc: "糖解作用、檸檬酸循環(克氏循環)、電子傳遞鏈與化學滲透ATP合成",
    tags: ["呼吸作用", "糖解作用", "檸檬酸循環", "電子傳遞鏈", "ATP合成酶", "粒線體"],
    url: "https://froglssh.github.io/hanlin-elective-biology-1-web/選修生物1教材網站/"
  },
  {
    book: "選修生物（Ⅰ）",
    bookCode: "bio1",
    chapter: "第 3 章 遺傳物質的探索",
    unit: "3-2 確認遺傳物質為DNA歷程",
    desc: "格里夫茲轉型實驗、艾伐瑞分離實驗、赫雪-蔡斯噬菌體實驗",
    tags: ["格里夫茲", "艾伐瑞", "赫雪蔡斯", "噬菌體", "同位素標定", "DNA確認"],
    url: "https://froglssh.github.io/hanlin-elective-biology-1-web/選修生物1教材網站/"
  },
  {
    book: "選修生物（Ⅰ）",
    bookCode: "bio1",
    chapter: "第 4 章 遺傳訊息的表現",
    unit: "4-1 DNA複製與 4-2 轉錄轉譯",
    desc: "半保留複製、岡崎片段、RNA轉錄、mRNA前驅物修剪、密碼子轉譯蛋白質",
    tags: ["DNA複製", "DNA聚合酶", "轉錄", "轉譯", "密碼子", "tRNA", "核糖體"],
    url: "https://froglssh.github.io/hanlin-elective-biology-1-web/選修生物1教材網站/"
  },
  {
    book: "選修生物（Ⅰ）",
    bookCode: "bio1",
    chapter: "第 5 章 生物技術",
    unit: "5-1 PCR 與 5-2 重組DNA技術",
    desc: "聚合酶連鎖反應(變性/黏合/延伸)、限制酶、DNA接合酶與基因選殖",
    tags: ["PCR", "限制酶", "重組DNA", "引子", "質體", "電泳分析"],
    url: "https://froglssh.github.io/hanlin-elective-biology-1-web/選修生物1教材網站/"
  },

  // 選修生物（Ⅱ）
  {
    book: "選修生物（Ⅱ）new",
    bookCode: "bio2",
    chapter: "第 1 章 生物的起源與演化",
    unit: "1-1 生源論戰法庭",
    desc: "自然發生論、雷迪腐肉生蛆對照實驗、尼達姆與巴斯德鵝頸瓶實驗",
    tags: ["生源論", "自然發生論", "巴斯德", "雷迪", "鵝頸瓶實驗", "肉汁加熱"],
    url: "https://froglssh.github.io/hanlin-elective-biology-2-web/選生二網頁＿new/"
  },
  {
    book: "選修生物（Ⅱ）new",
    bookCode: "bio2",
    chapter: "第 1 章 生物的起源與演化",
    unit: "1-2 生命起源與化學演化",
    desc: "米勒-尤里放電模擬實驗、原始大氣、原細胞、RNA世界假說",
    tags: ["化學演化", "米勒尤里", "原始大氣", "胺基酸合成", "RNA世界", "原細胞"],
    url: "https://froglssh.github.io/hanlin-elective-biology-2-web/選生二網頁＿new/"
  },
  {
    book: "選修生物（Ⅱ）new",
    bookCode: "bio2",
    chapter: "第 2 章 植物體的構造與功能",
    unit: "2-1 植物構造與組成層次",
    desc: "植物細胞壁特化、分生組織與永久組織(保護/輸導/基本組織系統)",
    tags: ["植物組織", "厚壁細胞", "厚角細胞", "導管", "篩管", "形成層"],
    url: "https://froglssh.github.io/hanlin-elective-biology-2-web/選生二網頁＿new/"
  },
  {
    book: "選修生物（Ⅱ）new",
    bookCode: "bio2",
    chapter: "第 2 章 植物體的構造與功能",
    unit: "2-2 植物體的營養器官",
    desc: "根莖葉解剖橫切面、根毛與卡氏帶、雙子葉與單子葉微觀對比、年輪",
    tags: ["根", "莖", "葉", "卡氏帶", "內皮", "年輪", "葉肉組織", "氣孔"],
    url: "https://froglssh.github.io/hanlin-elective-biology-2-web/選生二網頁＿new/"
  },
  {
    book: "選修生物（Ⅱ）new",
    bookCode: "bio2",
    chapter: "第 3 章 物質吸收與運輸",
    unit: "3-2 水分運輸與 3-3 光合作用",
    desc: "蒸散作用拉力、根壓、凝聚力張力說、葉綠體光反應與卡爾文循環",
    tags: ["水分運輸", "蒸散作用", "光合作用", "葉綠餅", "類囊體", "卡爾文循環", "氣孔開閉"],
    url: "https://froglssh.github.io/hanlin-elective-biology-2-web/選生二網頁＿new/"
  },
  {
    book: "選修生物（Ⅱ）new",
    bookCode: "bio2",
    chapter: "第 5 章 植物生長與調節",
    unit: "5-1 植物激素與 5-2 環境刺激",
    desc: "生長素(IAA)、吉貝素、細胞分裂素、離層酸、乙烯與光週期開花反應",
    tags: ["植物激素", "生長素", "向光性", "吉貝素", "乙烯", "光週期", "光敏素"],
    url: "https://froglssh.github.io/hanlin-elective-biology-2-web/選生二網頁＿new/"
  },

  // 選修生物（Ⅲ）
  {
    book: "選修生物（Ⅲ）",
    bookCode: "bio3",
    chapter: "第 1 章 動物體的組成與恆定",
    unit: "1-1 動物組織與 1-2 恆定性",
    desc: "上皮、結締、肌肉、神經四大組織；正負回饋調節與生理恆定",
    tags: ["動物組織", "結締組織", "恆定性", "負回饋", "體溫調節"],
    url: "https://froglssh.github.io/hanlin-elective-biology-3-web/選生三新網頁/"
  },
  {
    book: "選修生物（Ⅲ）",
    bookCode: "bio3",
    chapter: "第 2 章 循環與消化",
    unit: "2-1 循環系統與 2-2 消化系統",
    desc: "心臟搏動傳導、心動週期、血壓、微血管物質交換、消化管各部酵素與吸收",
    tags: ["心臟", "血液循環", "節律點", "微血管", "消化液", "小腸絨毛", "肝門靜脈"],
    url: "https://froglssh.github.io/hanlin-elective-biology-3-web/選生三新網頁/"
  },
  {
    book: "選修生物（Ⅲ）",
    bookCode: "bio3",
    chapter: "第 3 章 呼吸與排泄",
    unit: "3-1 呼吸系統與 3-2 排泄系統",
    desc: "肺泡氣體交換、血紅素氧氣解離曲線、腎元過濾/再吸收/分泌機制",
    tags: ["呼吸系統", "肺泡", "血紅素", "腎臟", "腎元", "過濾作用", "再吸收", "抗利尿激素"],
    url: "https://froglssh.github.io/hanlin-elective-biology-3-web/選生三新網頁/"
  },
  {
    book: "選修生物（Ⅲ）",
    bookCode: "bio3",
    chapter: "第 4 章 感應",
    unit: "4-1 神經系統與 4-4 內分泌",
    desc: "神經元動作電位、突觸神經傳導物質、大腦中樞神經、內分泌激素調節",
    tags: ["神經元", "動作電位", "突觸", "自主神經", "內分泌", "下視丘", "腦垂腺"],
    url: "https://froglssh.github.io/hanlin-elective-biology-3-web/選生三新網頁/"
  },
  {
    book: "選修生物（Ⅲ）",
    bookCode: "bio3",
    chapter: "第 5 章 防禦",
    unit: "5-2 先天性與 5-3 後天性免疫",
    desc: "發炎反應、吞噬作用、B細胞體液免疫、T細胞細胞媒介免疫、疫苗與抗體",
    tags: ["免疫系統", "B細胞", "T細胞", "抗原", "抗體", "疫苗", "發炎反應", "過敏"],
    url: "https://froglssh.github.io/hanlin-elective-biology-3-web/選生三新網頁/"
  },

  // 選修生物（Ⅳ）
  {
    book: "選修生物（Ⅳ）",
    bookCode: "bio4",
    chapter: "第 1 章 演化",
    unit: "1-2 族群遺傳學與 1-4 物種形成",
    desc: "哈溫定律(Hardy-Weinberg)、基因漂變、瓶頸效應、地理隔離與生殖隔離",
    tags: ["族群遺傳", "哈溫定律", "基因漂變", "創始者效應", "物種形成", "生殖隔離"],
    url: "https://froglssh.github.io/hanlin-elective-biology-4-web/選生四網頁/"
  },
  {
    book: "選修生物（Ⅳ）",
    bookCode: "bio4",
    chapter: "第 2 章 生物與環境",
    unit: "2-2 族群成長與 2-4 生態系",
    desc: "族群生存曲線、S型成長曲線、群集消長、食物網、能量流轉10%定律、碳氮循環",
    tags: ["族群", "負荷量", "群集消長", "食物鏈", "能量塔", "物質循環", "氮循環"],
    url: "https://froglssh.github.io/hanlin-elective-biology-4-web/選生四網頁/"
  },
  {
    book: "選修生物（Ⅳ）",
    bookCode: "bio4",
    chapter: "第 3 章 生物多樣性",
    unit: "3-1 三個層面與 3-2 臺灣生物多樣性",
    desc: "遺傳/物種/生態系多樣性、臺灣氣候地形垂直分佈、島嶼生物地理學與保育",
    tags: ["生物多樣性", "遺傳多樣性", "臺灣生態", "特有種", "保育生物學", "櫻花鉤吻鮭"],
    url: "https://froglssh.github.io/hanlin-elective-biology-4-web/選生四網頁/"
  }
];

// 初始化與互動邏輯
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initSearch();
  initBookmark();
});

// 主題切換 (Dark / Light)
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const storedTheme = localStorage.getItem("bio_portal_theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  
  applyTheme(storedTheme);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const next = current === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem("bio_portal_theme", next);
    });
  }
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    themeToggle.innerHTML = theme === "dark" ? 
      '<svg class="ic" viewBox="0 0 24 24"><path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/></svg>' : 
      '<svg class="ic" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
  }
}

// 書籤提示功能
function initBookmark() {
  const btn = document.getElementById("bookmarkBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const isMac = navigator.userAgent.toUpperCase().indexOf("MAC") >= 0;
    const key = isMac ? "Cmd + D" : "Ctrl + D";
    alert(`💡 溫馨提醒：\n請按下鍵盤【${key}】\n即可將「高中生物全冊互動教學入口」加入瀏覽器書籤（我的最愛），\n隨時一鍵進入五大冊學習！`);
  });
}

// 全域即時搜尋引擎
function initSearch() {
  const input = document.getElementById("searchInput");
  const clearBtn = document.getElementById("searchClear");
  const resultsContainer = document.getElementById("searchResults");
  const resultsGrid = document.getElementById("resultsGrid");
  const resultsCount = document.getElementById("resultsCount");
  const tagBtns = document.querySelectorAll(".tag-btn");

  if (!input) return;

  input.addEventListener("input", () => {
    const query = input.value.trim().toLowerCase();
    performSearch(query);
  });

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      input.value = "";
      performSearch("");
      input.focus();
    });
  }

  // 標籤點擊快捷填入
  tagBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const tagText = btn.dataset.tag || btn.textContent.replace("#", "").trim();
      input.value = tagText;
      performSearch(tagText.toLowerCase());
      input.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });

  function performSearch(query) {
    if (!query) {
      if (resultsContainer) resultsContainer.style.display = "none";
      if (clearBtn) clearBtn.style.display = "none";
      return;
    }

    if (clearBtn) clearBtn.style.display = "block";

    const filtered = BIOLOGY_DATABASE.filter(item => {
      return item.book.toLowerCase().includes(query) ||
             item.chapter.toLowerCase().includes(query) ||
             item.unit.toLowerCase().includes(query) ||
             item.desc.toLowerCase().includes(query) ||
             item.tags.some(t => t.toLowerCase().includes(query));
    });

    renderResults(filtered, query);
  }

  function renderResults(list, query) {
    if (!resultsContainer || !resultsGrid) return;

    resultsContainer.style.display = "block";
    if (resultsCount) {
      resultsCount.textContent = `找到 ${list.length} 個與「${query}」相符的單元`;
    }

    if (list.length === 0) {
      resultsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 30px; color: var(--text-subtle);">
          <p style="font-size: 16px; margin-bottom: 8px;">🌱 查無符合「<b>${escapeHTML(query)}</b>」的單元內容</p>
          <span style="font-size: 13px;">試試其他關鍵字，例如：光合作用、DNA、神經、天擇、生源論、PCR、細胞膜</span>
        </div>
      `;
      return;
    }

    const bookColors = {
      "req": "var(--c-req)",
      "bio1": "var(--c-b1)",
      "bio2": "var(--c-b2)",
      "bio3": "var(--c-b3)",
      "bio4": "var(--c-b4)"
    };

    resultsGrid.innerHTML = list.map(item => {
      const color = bookColors[item.bookCode] || "var(--primary)";
      return `
        <a class="result-card" href="${item.url}" target="_blank" rel="noopener">
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <span class="result-book-tag" style="background:${color};">${escapeHTML(item.book)}</span>
            <span style="font-size:11px; color:var(--text-subtle);">${escapeHTML(item.chapter.split(' ')[0])}</span>
          </div>
          <div class="result-title">${highlight(item.unit, query)}</div>
          <div class="result-desc">${highlight(item.desc, query)}</div>
          <div style="margin-top:auto; font-size:12px; font-weight:700; color:${color}; display:flex; align-items:center; gap:4px;">
            進入學習網頁 →
          </div>
        </a>
      `;
    }).join("");
  }
}

function highlight(text, query) {
  if (!query) return escapeHTML(text);
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return escapeHTML(text).replace(regex, '<mark style="background:#fef08a; color:#854d0e; padding:0 2px; border-radius:2px;">$1</mark>');
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}

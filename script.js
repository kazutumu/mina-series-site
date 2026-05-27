const coverPath = "";

const mainBooks = [
  { no: 1, slug: "hoshi-pocket", title: "ほしをしまったポケット", theme: "ちいさな勇気の絵本", group: "1-10" },
  { no: 2, slug: "mina-mamorigiri", title: "ミナとまもりぎり", theme: "見えないやさしさの絵本", group: "1-10" },
  { no: 3, slug: "mina-shizuku", title: "ミナとしずくのこえ", theme: "しずかに聴く絵本", group: "1-10" },
  { no: 4, slug: "mina-komorebi", title: "ミナとこもれびのみち", theme: "光の道をたどる絵本", group: "1-10" },
  { no: 5, slug: "mina-kodama", title: "ミナとこだまの森", theme: "返ってくる声の絵本", group: "1-10" },
  { no: 6, slug: "mina-kaze", title: "ミナとかぜのてがみ", theme: "風が届ける絵本", group: "1-10" },
  { no: 7, slug: "mina-akari", title: "ミナとあかりのまど", theme: "窓辺のあかりの絵本", group: "1-10" },
  { no: 8, slug: "mina-niji", title: "ミナとにじのかけら", theme: "色を見つける絵本", group: "1-10" },
  { no: 9, slug: "mina-kumo", title: "ミナとくものまど", theme: "空をながめる絵本", group: "1-10" },
  { no: 10, slug: "mina-hokori", title: "ミナとほこりのひかり", theme: "小さな光を見る絵本", group: "1-10" },
  { no: 11, slug: "mina-namae-kusa", title: "ミナとなまえのない草", theme: "名づけないまなざしの絵本", group: "11-19" },
  { no: 12, slug: "mina-asatsuyu-tegami", title: "ミナとあさつゆのてがみ", theme: "朝のしるしを読む絵本", group: "11-19" },
  { no: 13, slug: "mina-chiisana-tori", title: "ミナとちいさな鳥", theme: "そっと近づく絵本", group: "11-19" },
  { no: 14, slug: "mina-nemuru-cho", title: "ミナとねむるちょう", theme: "眠りのそばにいる絵本", group: "11-19" },
  { no: 15, slug: "mina-tsuki-nioi", title: "ミナと月のにおい", theme: "見えない気配の絵本", group: "11-19" },
  { no: 16, slug: "mina-ishikoro-kioku", title: "ミナと石ころのきおく", theme: "小さな記憶の絵本", group: "11-19" },
  { no: 17, slug: "mina-ari-michi", title: "ミナとありの道", theme: "足元の道をたどる絵本", group: "11-19" },
  { no: 18, slug: "mina-nekko-no-te", title: "ミナとねっこの手", theme: "地面の下にふれる絵本", group: "11-19", searchQuery: "ミナ ねっこ 手" },
  { no: 19, slug: "mina-hiru-no-hoshi", title: "ミナとひるの星", theme: "見えない星を探す絵本", group: "11-19" }
];

const sideBooks = [
  {
    label: "研究ノート 01",
    title: "ミナの絵本研究ノート",
    cover: "note-01.jpg",
    description: "1冊目から10冊目までの流れを、あとから静かに読み返すための研究ノート。"
  },
  {
    label: "森研マガジン 01",
    title: "森研究所マガジン Vol.01",
    cover: "magazine-01.jpg",
    description: "『昼の星を探す場所』を軸にした、森研究所の最初のマガジン。"
  }
];

const groupLabels = {
  "1-10": "1〜10冊目",
  "11-19": "11〜19冊目"
};

function amazonSearchUrl(book) {
  return `https://www.amazon.co.jp/s?k=${encodeURIComponent(book.searchQuery || book.title)}`;
}

function padBookNo(no) {
  return String(no).padStart(2, "0");
}

function mainCoverName(book) {
  return `${padBookNo(book.no)}-${book.slug}.jpg`;
}

function renderMainBooks(filter = "all") {
  const grid = document.querySelector("#book-grid");
  const books = filter === "all" ? mainBooks : mainBooks.filter((book) => book.group === filter);

  grid.innerHTML = books.map((book) => `
    <article class="book-card" data-group="${book.group}">
      <a class="book-cover-link" href="${amazonSearchUrl(book)}" target="_blank" rel="noreferrer" aria-label="${book.title}をAmazonで探す">
        <img src="${coverPath}${mainCoverName(book)}" alt="${book.title} 表紙" loading="lazy">
      </a>
      <div class="book-card-body">
        <p class="book-meta">${padBookNo(book.no)} / ${groupLabels[book.group]}</p>
        <h3>${book.title}</h3>
        <p>${book.theme}</p>
        <a class="text-link" href="${amazonSearchUrl(book)}" target="_blank" rel="noreferrer">Amazonで探す</a>
      </div>
    </article>
  `).join("");
}

function renderSideBooks() {
  const grid = document.querySelector("#side-grid");

  grid.innerHTML = sideBooks.map((book) => `
    <article class="side-card">
      <a class="side-cover-link" href="${amazonSearchUrl(book)}" target="_blank" rel="noreferrer" aria-label="${book.title}をAmazonで探す">
        <img src="${coverPath}${book.cover}" alt="${book.title} 表紙" loading="lazy">
      </a>
      <div>
        <p class="book-meta">${book.label}</p>
        <h3>${book.title}</h3>
        <p>${book.description}</p>
        <a class="text-link" href="${amazonSearchUrl(book)}" target="_blank" rel="noreferrer">Amazonで探す</a>
      </div>
    </article>
  `).join("");
}

function setupFilters() {
  document.querySelectorAll(".filter").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter").forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      renderMainBooks(button.dataset.filter);
    });
  });
}

renderMainBooks();
renderSideBooks();
setupFilters();

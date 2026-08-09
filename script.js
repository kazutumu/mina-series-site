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
  { no: 19, slug: "mina-hiru-no-hoshi", title: "ミナとひるの星", theme: "見えない星を探す絵本", group: "11-19" },
  { no: 20, slug: "mina-hoshi-no-shita-no-kusa", title: "ミナと星の下の草", theme: "遠くと近くを見つめる絵本", group: "20-25" },
  { no: 21, slug: "mina-asa-no-shirushi", title: "ミナと朝のしるし", theme: "見えなくなったものの絵本", group: "20-25" },
  { no: 22, slug: "mina-genkan-no-hana", title: "ミナと玄関の花", theme: "外と中が出会う絵本", group: "20-25" },
  { no: 23, slug: "mina-tadaima-no-oto", title: "ミナとただいまの音", theme: "帰ってきた場所の絵本", group: "20-25" },
  { no: 24, slug: "mina-kabin-no-mizu", title: "ミナと花びんの水", theme: "静かな水の小さな絵本", group: "20-25" },
  { no: 25, slug: "mina-mado-no-shizuku", title: "ミナと窓のしずく", theme: "小さなしずくに映る絵本", group: "20-25" },
  { no: 26, slug: "mina-shizuku-no-ato", title: "ミナとしずくのあと", theme: "消えたあとを見つめる絵本", group: "26-32" },
  { no: 27, slug: "mina-hikari-no-hosoi-sen", title: "ミナと光のほそい線", theme: "次の道が見える絵本", group: "26-32" },
  { no: 28, slug: "mina-curtain-no-kaze", title: "ミナとカーテンの風", theme: "外が少し近づく絵本", group: "26-32" },
  { no: 29, slug: "mina-mado-no-muko-no-mushi-no-koe", title: "ミナと窓のむこうの虫の声", theme: "見えない声に季節を感じる絵本", group: "26-32" },
  { no: 30, slug: "mina-asa-no-soto", title: "ミナと朝の外", theme: "窓のむこうへ出る絵本", group: "26-32" },
  { no: 31, slug: "mina-asa-no-kage", title: "ミナと朝のかげ", theme: "ついてくる影の絵本", group: "26-32" },
  { no: 32, slug: "mina-kusa-no-kusuguri", title: "ミナと草のくすぐり", theme: "そっとふれる外の絵本", group: "26-32" },
  { no: 33, slug: "mina-nureta-kutsu", title: "ミナとぬれたくつ", theme: "外が足もとについてくる絵本", group: "33-40" },
  { no: 34, slug: "mina-chiisana-ashiato", title: "ミナと小さな足あと", theme: "歩いたあとを見つめる絵本", group: "33-40" },
  { no: 35, slug: "mina-ishi-no-hikari", title: "ミナと石のひかり", theme: "足もとの光を見る絵本", group: "33-40" },
  { no: 36, slug: "mina-happa-no-sukima", title: "ミナと葉っぱのすきま", theme: "すきまから空を見る絵本", group: "33-40" },
  { no: 37, slug: "mina-happa-no-kage", title: "ミナと葉っぱのかげ", theme: "光と影がふれてくる絵本", group: "33-40" },
  { no: 38, slug: "mina-kumo-no-hashi", title: "ミナと雲のはし", theme: "動いていく白いところの絵本", group: "33-40" },
  { no: 39, slug: "mina-sora-no-aoi-tokoro", title: "ミナと空の青いところ", theme: "何もないような広さの絵本", group: "33-40" },
  { no: 40, slug: "mina-sora-no-hajimari", title: "ミナと空のはじまり", theme: "ここにも続く空の絵本", group: "33-40" },
  { no: 41, slug: "mina-sora-no-iro", title: "ミナと空の色", theme: "遠くにある色も、近くのものに少しずつ映っている絵本", group: "41-47" },
  { no: 42, slug: "mina-sora-no-yuragi", title: "ミナと空のゆらぎ", theme: "同じ色の小さなゆらぎを見つめる絵本", group: "41-47" },
  { no: 43, slug: "mina-hikari-no-hohoemi", title: "ミナと光のほほえみ", theme: "光が心を少しやわらかくする絵本", group: "41-47" },
  { no: 44, slug: "mina-hikari-no-ato", title: "ミナと光のあと", theme: "消えたあとに残る明るさの絵本", group: "41-47" },
  { no: 45, slug: "mina-asa-no-nioi", title: "ミナと朝のにおい", theme: "見えない朝のしるしを感じる絵本", group: "41-47" },
  { no: 46, slug: "mina-tooku-no-oto", title: "ミナと遠くの音", theme: "見えないところから届く音の絵本", group: "41-47" },
  { no: 47, slug: "mina-kaze-no-katachi", title: "ミナと風のかたち", theme: "見えない風のかたちを見つける絵本", group: "41-47" },
  { no: 48, slug: "mina-kage-no-ondo", title: "ミナと影の温度", theme: "影の涼しさとやわらかさを知る絵本", group: "48-56" },
  { no: 49, slug: "mina-michi-no-kehai", title: "ミナと道の気配", theme: "まだ歩いていない道の気配を感じる絵本", group: "48-56" },
  { no: 50, slug: "mina-sekai-no-iriguchi", title: "ミナと世界の入口", theme: "世界へ入っていく入口を見つける絵本", group: "48-56" },
  { no: 51, slug: "mina-mukou-no-hikari", title: "ミナとむこうの光", theme: "知らない場所にも朝の光を見つける絵本", group: "48-56" },
  { no: 52, slug: "mina-mukou-no-kusa", title: "ミナとむこうの草", theme: "新しい場所の足もとから返事をもらう絵本", group: "48-56" },
  { no: 53, slug: "mina-komichi-no-kinomi", title: "ミナと小道の木の実", theme: "足もとの小道と上の木がつながる絵本", group: "48-56" },
  { no: 54, slug: "mina-hana-no-mawari", title: "ミナと花のまわり", theme: "花のまわりに集まる小さな世界を見る絵本", group: "48-56" },
  { no: 55, slug: "mina-hana-no-kage", title: "ミナと花のかげ", theme: "明るい花のそばの小さな影を見つめる絵本", group: "48-56" },
  { no: 56, slug: "mina-kage-no-saki", title: "ミナと影のさき", theme: "影が光の中へ混ざっていく絵本", group: "48-56" },
  { no: 57, slug: "mina-kusa-no-hikari", title: "ミナと草のひかり", theme: "草と光が出会う一瞬を見る絵本", group: "57-63" },
  { no: 58, slug: "mina-kusa-no-mukou", title: "ミナと草のむこう", theme: "草のすきまのむこうを見る絵本", group: "57-63" },
  { no: 59, slug: "mina-komichi-no-kaze", title: "ミナと小道の風", theme: "同じ風に向きをそろえる絵本", group: "57-63" },
  { no: 60, slug: "mina-mori-no-iriguchi", title: "ミナと森の入口", theme: "入口の手前から始まる森の絵本", group: "57-63" },
  { no: 61, slug: "mina-mori-no-ashimoto", title: "ミナと森の足もと", theme: "足もとの変化から森を知る絵本", group: "57-63" },
  { no: 62, slug: "mina-ki-no-aida-no-hikari", title: "ミナと木の間のひかり", theme: "木の間の細いひかりを見つめる絵本", group: "57-63" },
  { no: 63, slug: "mina-ha-no-yure", title: "ミナと葉のゆれ", theme: "葉のゆれと変わる明るさを見る絵本", group: "57-63" },
  { no: 64, slug: "mina-ki-no-hada", title: "ミナと木の肌", theme: "木の肌を、触れずに見つめる絵本", group: "64-71" },
  { no: 65, slug: "mina-koke-no-hikari", title: "ミナと苔のひかり", theme: "苔の低いひかりを、踏まずに見つめる絵本", group: "64-71" },
  { no: 66, slug: "mina-ochiba-no-kasanari", title: "ミナと落ち葉の重なり", theme: "落ち葉の重なりの下に残るものを見る絵本", group: "64-71" },
  { no: 67, slug: "mina-ochiba-no-shita-no-oto", title: "ミナと落ち葉の下の音", theme: "見えない音を、めくらずに待つ絵本", group: "64-71" },
  { no: 68, slug: "mina-nemoto-no-chiisana-ana", title: "ミナと根もとの小さな穴", theme: "見えない奥を、そっとしておく絵本", group: "64-71" },
  { no: 69, slug: "mina-mori-no-hosoi-ito", title: "ミナと森の細い糸", theme: "壊れやすい細い道を、そのまま残す絵本", group: "64-71" },
  { no: 70, slug: "mina-mori-no-hiraketa-tokoro", title: "ミナと森のひらけたところ", theme: "森の光を残したまま、ひらけた場所へ進む絵本", group: "64-71" },
  { no: 71, slug: "mina-kusa-no-nami", title: "ミナと草の波", theme: "遠くから届く草の波を見送る絵本", group: "64-71" },
  { no: 72, slug: "mina-tooku-no-ame", title: "ミナと遠くの雨", theme: "遠くの雨とここに残る明るさの距離を感じる絵本", group: "72-80" },
  { no: 73, slug: "mina-nureta-kusa-no-sen", title: "ミナとぬれた草の線", theme: "雨のあとに並ぶ二つの時間と境目を見つめる絵本", group: "72-80" },
  { no: 74, slug: "mina-sode-no-tentoumushi", title: "ミナと袖のてんとう虫", theme: "てんとう虫が残した小さな重さを受け取る絵本", group: "72-80" },
  { no: 75, slug: "mina-yubi-ni-fureta-hana", title: "ミナと指にふれた花", theme: "一度だけ触れた花の柔らかさを受け取る絵本", group: "72-80" },
  { no: 76, slug: "mina-sora-wo-wataru-watage", title: "ミナと空を渡る綿毛", theme: "綿毛をつかまえず空へ見送る絵本", group: "72-80" },
  { no: 77, slug: "mina-tooku-no-oka", title: "ミナと遠くの丘", theme: "遠い丘との距離を急がず見つめる絵本", group: "72-80" },
  { no: 78, slug: "mina-sougen-no-mukou-no-egao", title: "ミナと草原のむこうの笑顔", theme: "ひとりの静けさと遠くの笑顔が並ぶ絵本", group: "72-80" },
  { no: 79, slug: "mina-chiisana-ki-no-hashi", title: "ミナと小さな木の橋", theme: "橋に残った誰かの手のぬくもりを感じる絵本", group: "72-80" },
  { no: 80, slug: "mina-michi-no-tsuzuki", title: "ミナと道のつづき", theme: "歩いてきた道とこれからの道を同時に見る絵本", group: "72-80" },
  { no: 81, slug: "mina-kaze-ni-fukuramu-shiroi-nuno", title: "ミナと風にふくらむ白い布", theme: "白い布と草と頬へ届く同じ風を感じる絵本", group: "81-89" },
  { no: 82, slug: "mina-kokage-no-mizu", title: "ミナと木かげの水", theme: "自分で受け取る水の冷たさと助け合いを描く絵本", group: "81-89" },
  { no: 83, slug: "mina-sakamichi-no-ringo", title: "ミナと坂道のりんご", theme: "転がるりんごを見つめ、受け止めて返す絵本", group: "81-89" },
  { no: 84, slug: "mina-futatsu-no-ashioto", title: "ミナと二つの足音", theme: "違う二つの足音が離れ、また並ぶ絵本", group: "81-89" },
  { no: 85, slug: "mina-yugata-no-yobu-koe", title: "ミナと夕方の呼ぶ声", theme: "それぞれを知る声を聞き、別々の道へ帰る絵本", group: "81-89" },
  { no: 86, slug: "mina-yugata-no-pan-no-nioi", title: "ミナと夕方のパンのにおい", theme: "パンのにおいが離れた二人へ同じ夕方を運ぶ絵本", group: "81-89" },
  { no: 87, slug: "mina-yoru-no-temae-no-ao", title: "ミナと夜の手前の青", theme: "夕方から夜へ移る短い青を受け取る絵本", group: "81-89" },
  { no: 88, slug: "mina-yoru-no-kabe-no-nukumori", title: "ミナと夜の壁のぬくもり", theme: "昼の光を残した壁のぬくもりに触れる絵本", group: "81-89" },
  { no: 89, slug: "mina-yozora-no-okuyuki", title: "ミナと夜空の奥行き", theme: "いくつもの遠さが重なる夜空を見上げる絵本", group: "81-89" }
];

const sideBooks = [
  {
    label: "研究ノート 01",
    title: "ミナの絵本研究ノート",
    cover: "note-01.jpg",
    description: "1冊目から10冊目までの流れを、あとから静かに読み返すための研究ノート。"
  },
  {
    label: "研究ノート 02",
    title: "ミナの絵本研究ノート 2",
    cover: "note-02.jpg",
    description: "11冊目から20冊目までをまとめた、森研究所の小さな設定資料本。"
  },
  {
    label: "研究ノート 03",
    title: "ミナの絵本研究ノート 3",
    cover: "note-03.jpg",
    description: "21冊目から30冊目までをまとめた、窓辺から朝の外へ向かう制作記録。"
  },
  {
    label: "研究ノート 04",
    title: "ミナの絵本研究ノート 4",
    cover: "note-04.jpg",
    description: "31冊目から40冊目までをまとめた、足もとから空のはじまりへ向かう制作記録。"
  },
  {
    label: "研究ノート 05",
    title: "ミナの絵本研究ノート 5",
    cover: "note-05.jpg",
    description: "41冊目から50冊目までをまとめた、空の色から世界の入口へ向かう制作記録。"
  },
  {
    label: "研究ノート 06",
    title: "ミナの絵本研究ノート 6",
    cover: "note-06.jpg",
    description: "51冊目から60冊目までをまとめた、世界の入口のむこうから森の入口へ向かう制作記録。"
  },
  {
    label: "研究ノート 07",
    title: "ミナの絵本研究ノート 7",
    cover: "note-07.jpg",
    description: "61冊目から70冊目までをまとめた、森の足もとからひらけた場所へ向かう制作記録。"
  },
  {
    label: "研究ノート 08",
    title: "ミナの絵本研究ノート 8",
    cover: "note-08.jpg",
    description: "71冊目から80冊目までをまとめた、遠くの自然から人の気配と暮らしへ広がる制作記録。"
  },
  {
    label: "森研マガジン 01",
    title: "森研究所マガジン Vol.01",
    cover: "magazine-01.jpg",
    description: "『昼の星を探す場所』を軸にした、森研究所の最初のマガジン。"
  },
  {
    label: "森研マガジン 02",
    title: "森研究所マガジン Vol.02",
    cover: "magazine-02.jpg",
    description: "『ただいまのあとに見つけた水』を特集した、森研究所の制作記録。"
  },
  {
    label: "森研マガジン 03",
    title: "森研究所マガジン Vol.03",
    cover: "magazine-03.jpg",
    description: "外へ出たミナと、森研究所の現実をまとめた不定期マガジン。"
  },
  {
    label: "森研マガジン 04",
    title: "森研究所マガジン Vol.04　身体の時間と、気づきの棚",
    searchQuery: "森研究所マガジン 身体の時間 気づきの棚",
    cover: "magazine-04.jpg",
    description: "身体の時間と、森研究所に積み重なった気づきの棚を静かにたどる記録。"
  },
  {
    label: "外伝 01",
    title: "ミナと庭の木",
    cover: "side-01-mina-niwa-no-ki.jpg",
    description: "庭の木の視点から、窓ごしに家の中のミナも見守る外伝絵本。"
  },
  {
    label: "外伝 02",
    title: "小鳥が見つけたミナ",
    cover: "side-02-kotori-ga-mitsuketa-mina.jpg",
    description: "小鳥の視点から、本編『ミナとちいさな鳥』の出来事を見つめる外伝絵本。"
  },
  {
    label: "外伝 03",
    title: "窓ガラスが見ていたミナ",
    cover: "side-03-madogarasu-ga-miteita-mina.jpg",
    description: "内と外のあいだから、反射や雨粒や光でミナを見ていた外伝絵本。"
  },
  {
    label: "外伝 04",
    title: "水たまりが見ていたミナ",
    cover: "side-04-mizutamari-ga-miteita-mina.jpg",
    description: "雨のあとだけ現れる水たまりの視点から、空とミナを映す外伝絵本。"
  },
  {
    label: "外伝 05",
    title: "音が聞いていたミナ",
    cover: "side-05-oto-ga-kiiteita-mina.jpg",
    description: "足音や息、ページをめくる音から、形のない観測者がミナを聞いていた外伝絵本。"
  },
  {
    label: "外伝 06",
    title: "影がついてきたミナ",
    cover: "side-06-kage-ga-tsuitekita-mina.jpg",
    description: "朝の光で生まれた影が、ミナの足もとについていきながら朝を覚えていた外伝絵本。"
  },
  {
    label: "外伝 07",
    title: "椅子が覚えていたミナ",
    cover: "side-07-isu-ga-oboeteita-mina.jpg",
    description: "椅子の視点から、座った重さやきしみ、立ち去ったあとのぬくもりを同じ場所で覚えていた外伝絵本。"
  },
  {
    label: "外伝 08",
    title: "草の種がついていったミナ",
    cover: "side-08-kusa-no-tane-ga-tsuiteitta-mina.jpg",
    description: "ミナの靴下に運ばれ、まだ知らない土に残った小さな草の種の時間を描く外伝絵本。"
  }
];

const groupLabels = {
  "1-10": "1〜10冊目",
  "11-19": "11〜19冊目",
  "20-25": "20〜25冊目",
  "26-32": "26〜32冊目",
  "33-40": "33〜40冊目",
  "41-47": "41〜47冊目",
  "48-56": "48〜56冊目",
  "57-63": "57〜63冊目",
  "64-71": "64〜71冊目",
  "72-80": "72〜80冊目",
  "81-89": "81〜89冊目"
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

function sideBookType(book) {
  if (book.label.startsWith("研究ノート")) return "note";
  if (book.label.startsWith("森研マガジン")) return "magazine";
  return "side";
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

function renderSideBooks(filter = "all") {
  const grid = document.querySelector("#side-grid");
  const books = filter === "all" ? sideBooks : sideBooks.filter((book) => sideBookType(book) === filter);

  grid.innerHTML = books.map((book) => `
    <article class="side-card" data-side-type="${sideBookType(book)}">
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

function selectSideFilter(filter) {
  document.querySelectorAll(".side-filter").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.sideFilter === filter);
  });
  renderSideBooks(filter);
}

function setupSideFilters() {
  document.querySelectorAll(".side-filter").forEach((button) => {
    button.addEventListener("click", () => selectSideFilter(button.dataset.sideFilter));
  });

  document.querySelectorAll("[data-side-filter-link]").forEach((link) => {
    link.addEventListener("click", () => selectSideFilter(link.dataset.sideFilterLink));
  });
}

renderMainBooks();
renderSideBooks();
setupFilters();
setupSideFilters();

const imageBasePaths = {
    okonomi: "img/menu/okonomi/",
    set: "img/menu/set/",
    other: "img/menu/other/",
    delivery: "img/menu/takeout/"
};

const menuData = {
    okonomi: [
        { name: "サーモン", price: 200, image: "salmon.webp", description: "脂がのった定番の人気ネタ。新鮮なサーモンの旨みをお楽しみください。" },
        { name: "炙りサーモン", price: 300, image: "aburi_salmon.webp", description: "表面を香ばしく炙り、旨みを引き出したサーモンです。" },
        { name: "マグロ赤身", price: 200, image: "akami.webp", description: "さっぱりとした赤身のマグロ。脂控えめであっさり味。" },
        { name: "中トロ", price: 400, image: "chutoro.webp", description: "脂ののりと赤身のバランスが絶妙な部位です。" },
        { name: "大トロ", price: 500, image: "otoro.webp", description: "とろけるような食感で、最高級の脂の旨みを堪能できます。" },
        { name: "ネギトロ", price: 300, image: "negi_toro.webp", description: "ネギとマグロのすり身を合わせた濃厚な味わい。" },
        { name: "イクラ", price: 500, image: "ikura.webp", description: "プチプチはじける新鮮なイクラの醤油漬け。" },
        { name: "トビッコ", price: 300, image: "tobikko.webp", description: "小粒でコリコリとした食感の飛び魚の卵です。" },
        { name: "ウニ", price: 500, image: "uni.webp", description: "濃厚な甘みととろける食感が魅力のウニ。" },
        { name: "エビ", price: 200, image: "ebi.webp", description: "新鮮でプリプリのエビを使用しています。" },
        { name: "甘エビ", price: 400, image: "amaebi.webp", description: "甘みが強く、柔らかい食感のエビ。" },
        { name: "シャコ", price: 400, image: "shako.webp", description: "独特の食感と風味が人気のシャコ。" },
        { name: "ホタテ", price: 400, image: "hotate.webp", description: "甘くて柔らかいホタテの貝柱。" },
        { name: "カニ", price: 500, image: "kani.webp", description: "濃厚なカニの旨みを感じられます。" },
        { name: "えんがわ", price: 400, image: "engawa.webp", description: "ヒラメの縁側で、コリコリとした食感が特徴。" },
        { name: "イカ", price: 200, image: "ika.webp", description: "新鮮なイカの甘みと歯ごたえ。" },
        { name: "鯛", price: 300, image: "tai.webp", description: "上品な味わいの白身魚、鯛。" },
        { name: "タコ", price: 200, image: "tako.webp", description: "弾力のある食感が楽しめるタコ。" },
        { name: "サバ", price: 300, image: "saba.webp", description: "脂ののったサバを使用しています。" },
        { name: "サンマ", price: 300, image: "sanma.webp", description: "秋の味覚、脂ののったサンマ。" },
        { name: "ハマチ", price: 300, image: "hamachi.webp", description: "程よい脂の旨みが人気のハマチ。" },
        { name: "アジ", price: 300, image: "aji.webp", description: "新鮮なアジの爽やかな味わい。" },
        { name: "玉子", price: 200, image: "tamago.webp", description: "甘めのふんわり玉子焼き。" },
        { name: "数の子", price: 400, image: "kazunoko.webp", description: "コリコリとした食感の数の子。" },
        { name: "ホッキ", price: 400, image: "hokkigai.webp", description: "甘みのあるホッキ貝の身。" },
        { name: "つぶ貝", price: 500, image: "tsubugai.webp", description: "コリコリした食感のつぶ貝。" },
        { name: "穴子", price: 500, image: "anago.webp", description: "ふわっと柔らかい穴子の煮穴子。" },
        { name: "かっぱ巻", price: 200, image: "kappamaki.webp", description: "さっぱりした胡瓜の巻き寿司。" },
        { name: "鉄火巻", price: 300, image: "tekka_maki.webp", description: "マグロの赤身を使った巻き寿司。" },
        { name: "いなり", price: 200, image: "inari.webp", description: "甘辛い油揚げで包んだ酢飯のいなり寿司。" }
    ],
    set: [
        { name: "築乃セット", price: 3500, image: "tsukino_set.webp", description: "赤身、大トロ、炙りサーモン、イクラ、ウニ、ホタテ、カニ、アジ、えんがわ、甘エビをバランスよく盛り込んだ豪華セット。" },
        { name: "彩セット", price: 2800, image: "irodori_set.webp", description: "サーモン、マグロ赤身、ハマチ、ホタテ、甘エビ、ネギトロ、イクラ、穴子、イカ、玉子の人気セット。" },
        { name: "極セット", price: 2300, image: "kiwami_set.webp", description: "マグロ赤身、ハマチ、サーモン、ホタテ、イクラ、ウニ、玉子、エビの厳選セット。" },
        { name: "鮪尽くしセット", price: 3000, image: "maguro_zukushi_set.webp", description: "マグロ赤身×4、大トロ、中トロ、ネギトロ、鉄火巻の鮪づくしセット。" }
    ],
    other: [
        { name: "茶碗蒸し", price: 500, image: "chawanmushi.webp", description: "優しい味わいの蒸し卵料理。" },
        { name: "お椀（みそ汁）", price: 300, image: "miso_soup.webp", description: "あたたかい味噌汁でホッと一息。" }
    ],
    delivery: [
        { name: "雅", price: "6500～", image: "miyabi.webp", description: "赤身、鯛、ハマチ、エビ、カニ、ホッキ貝、ホタテ、穴子、サーモン、イクラ、イカ、ウニを含む豪華なセット。<br>価格：２人前 ￥6500　３人前 ￥9500　４人前 ￥12000　５人前 ￥15000" },
        { name: "旬彩", price: "5500～", image: "shunsai.webp", description: "玉子、ネギトロ、イカ、イクラ、赤身、サーモン、アジ、ホタテ、タコ、サバ、ホッキ貝、穴子のセット。<br>価格：２人前 ￥5500　３人前 ￥8200　４人前 ￥10800　５人前 ￥13500" },
    ]
};

const tabDescriptions = {
    okonomi: "旬の素材を使ったお好み握り。お好きなネタを一貫ずつご注文いただけます。",
    set: "職人が厳選した豪華セット。複数のネタがバランスよく楽しめます。(味噌汁付き)",
    other: "茶碗蒸しやお椀など、寿司以外の一品料理やサイドメニュー。",
    delivery: "ご自宅で楽しめる出前セット。人数に合わせてご注文ください。"
};

const container = document.getElementById("menu-container");
const slideContainer = document.getElementById("menu-slide");
const descriptionElem = document.getElementById("menu-description");
const popup = document.getElementById("popup");
const popupImg = document.getElementById("popup-img");
const popupName = document.getElementById("popup-name");
const popupPrice = document.getElementById("popup-price");
const popupDescription = document.getElementById("popup-description");
const closeBtn = document.getElementById("close-popup");
const tabButtons = document.querySelectorAll(".tab-btn");

function isMobile() {
    return window.innerWidth <= 768;
}

function destroySlick() {
    if ($(slideContainer).hasClass("slick-initialized")) {
        $(slideContainer).slick("unslick");
    }
}

function initSlick() {
    $(slideContainer).slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6900,
        infinite: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        cssEase: "linear",
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 426,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    infinite: true
                }
            }
        ]
    });
}

function renderMenu(tabKey) {
    container.innerHTML = "";
    slideContainer.innerHTML = "";
    descriptionElem.textContent = tabDescriptions[tabKey] || "";

    const basePath = imageBasePaths[tabKey] || "";
    const items = menuData[tabKey];

    if (isMobile()) {
        container.style.display = "none";
        slideContainer.style.display = "block";

        items.forEach((item, i) => {
            const liHTML = `
        <li class="menu-card" data-index="${i}">
          <img src="${basePath + item.image}" alt="${item.name}">
          <div class="info">
            <div class="name">${item.name}</div>
            <div class="price">${item.price ? `￥${item.price.toLocaleString()}` : ""}</div>
          </div>
        </li>
      `;
            slideContainer.insertAdjacentHTML("beforeend", liHTML);
        });

        destroySlick();
        initSlick();

        slideContainer.querySelectorAll(".menu-card").forEach(card => {
            card.addEventListener("click", () => {
                const index = parseInt(card.getAttribute("data-index"), 10);
                const item = items[index];
                popupImg.src = basePath + item.image;
                popupImg.alt = item.name;
                popupName.textContent = item.name;
                popupPrice.textContent = item.price ? `￥${item.price.toLocaleString()}` : "";
                popupDescription.innerHTML = item.description || "説明はありません。";
                popup.classList.remove("hidden");
            });
        });
    } else {
        slideContainer.style.display = "none";
        container.style.display = "grid";

        items.forEach((item, i) => {
            const cardHTML = `
        <div class="menu-card" data-index="${i}">
          <img src="${basePath + item.image}" alt="${item.name}">
          <div class="info">
            <div class="name">${item.name}</div>
            <div class="price">${item.price ? `￥${item.price.toLocaleString()}` : ""}</div>
          </div>
        </div>
      `;
            container.insertAdjacentHTML("beforeend", cardHTML);
        });

        destroySlick();

        container.querySelectorAll(".menu-card").forEach(card => {
            card.addEventListener("click", () => {
                const index = parseInt(card.getAttribute("data-index"), 10);
                const item = items[index];
                popupImg.src = basePath + item.image;
                popupImg.alt = item.name;
                popupName.textContent = item.name;
                popupPrice.textContent = item.price ? `￥${item.price.toLocaleString()}` : "";
                popupDescription.innerHTML = item.description || "説明はありません。";
                popup.classList.remove("hidden");
            });
        });
    }
}

// タブ切り替えイベント
tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        container.innerHTML = "";
        slideContainer.innerHTML = "";
        descriptionElem.textContent = "";
        destroySlick();
        const tabKey = btn.getAttribute("data-tab");
        renderMenu(tabKey);
    });
});

// ポップアップ閉じる
closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});

// マウスが外れたら非表示（任意で削除可）
popup.addEventListener("mouseleave", () => {
    popup.classList.add("hidden");
});

// ウィンドウサイズ変更時の再描画
window.addEventListener("resize", () => {
    const activeBtn = document.querySelector(".tab-btn.active");
    if (activeBtn) {
        container.innerHTML = "";
        slideContainer.innerHTML = "";
        descriptionElem.textContent = "";
        destroySlick();
        const tabKey = activeBtn.getAttribute("data-tab");
        renderMenu(tabKey);
    }
});

renderMenu("okonomi");
document.querySelector('.tab-btn[data-tab="okonomi"]').classList.add("active");
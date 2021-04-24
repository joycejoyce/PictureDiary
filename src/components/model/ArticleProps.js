function getById(id) {
    const articles = getAll();
    const [ theArticle ] = articles.filter(article => article.id === id);
    return theArticle;
}

function getByHttpReq() {
    let xmlHttp = new XMLHttpRequest();
    const url = "https://picturediary-backend.herokuapp.com/getAllJson";
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    console.log("sent done!");

    const responseStr = xmlHttp.responseText;
    //console.log("responseStr", responseStr);

    const responseAry = JSON.parse(responseStr);
    //console.log("len", responseAry.length);

    responseAry.forEach((jsonObj, idx) => {
        jsonObj["id"] = idx.toString();
        //console.log("jsonObj", jsonObj);
    });

    console.log("result", JSON.stringify(responseAry));

    return responseAry;
}

function getFakeArticles() {
    const article1 = {
        id: "0001",
        title: "書法之美",
        date: "2021.03.27",
        text: `昨晚深夜，聆聽【殤】這首憂傷的曲子，同時也認真練習書法。

在寧靜的氛圍與專注中，突然感到書法之美。我認真地一筆一畫寫完一個字，就好似認真地以一磚一瓦，建構一座美麗的城堡。

那時我感覺，好似黃昏時分，一陣陣的清風吹散了重重的雲霧，也吹散了我心中的鬱悶。

在晚風裏，我看到了晴朗的天空、遼闊的原野、清澈的溪流！

書法分享如下。`,
        imgUrls: ["https://drive.google.com/uc?export=view&id=1pBaGil2EmOi2SzZ3PX8JC5AkN_R1qye7"]
    };
    const article2 = {
        id: "0002",
        title: "美麗的水里故鄉",
        date: "2021.02.17",
        text: `大年初三，再次回到水里故鄉。

親人共聚一堂，以及在河堤上，偶然遇到多年不見的同窗故友，這一切都是令人驚奇、溫馨、歡喜！

水里，依舊是悠悠的藍天白雲、燦爛的陽光、連綿的山巒、秀麗的溪水、美麗的花樹、沿著水里溪如詩如畫的悠長河堤，以及幽深山谷中，吹來的ㄧ陣陣清涼的微風。

呀！美麗的水里故鄉！

留下幾張像片，和大家分享如下。`,
        imgUrls: ["https://drive.google.com/uc?export=view&id=1eTtoyvaMMlLmsuzMHwGvUyxgFpGfXY8w",
            "https://drive.google.com/uc?export=view&id=1sihLbk_Zn3fqrEmSLr4yLhxZctSr_Fvn",
            "https://drive.google.com/uc?export=view&id=1mFc3SXxAuDJ5iBP72KVdInhisiXu_d55",
            "https://drive.google.com/uc?export=view&id=12jNfs0Lz29oRI1GX7XKMGtEW9A_jfQjG",
            "https://drive.google.com/uc?export=view&id=1pwEAE3N6WGARKH5ty-5rTLPluVRIpyv5",
            "https://drive.google.com/uc?export=view&id=1cTj8Gv7r50J3bsrTEZJ3FhlHb61sqwKV",
            "https://drive.google.com/uc?export=view&id=1aiD587dAAqxWYV2PUhk8wXwX21zwOUhD",
            "https://drive.google.com/uc?export=view&id=1hV-BmYIdn5RML5uSEHaVGO0bZbSndjXk"
        ]
    }
    const article3 = {
        ...article1,
        id: "0003"
    };

    return [article2, article1, article3];
}

function getAll() {
    const articles = getByHttpReq();

    return articles;
}

export { getAll, getById };
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

function getByMocking() {
    const article1 = {
        id: "0001",
        title: "書法之美",
        date: "2021.03.27",
        text: `昨晚深夜，聆聽【殤】這首憂傷的曲子，同時也認真練習書法。`,
        /*text: `昨晚深夜，聆聽【殤】這首憂傷的曲子，同時也認真練習書法。

在寧靜的氛圍與專注中，突然感到書法之美。我認真地一筆一畫寫完一個字，就好似認真地以一磚一瓦，建構一座美麗的城堡。

那時我感覺，好似黃昏時分，一陣陣的清風吹散了重重的雲霧，也吹散了我心中的鬱悶。

在晚風裏，我看到了晴朗的天空、遼闊的原野、清澈的溪流！

書法分享如下。`,*/
        imgUrls: ["https://drive.google.com/uc?export=view&id=1WWmYwcNjsEC-0AzpY6jBvJnueivhLosu"]
    };
    const article2 = {
        id: "0002",
        title: "美麗的水里故鄉",
        date: "2021.02.17",
        /*text: `大年初三，再次回到水里故鄉。`,*/
        text: `大年初三，再次回到水里故鄉。

親人共聚一堂，以及在河堤上，偶然遇到多年不見的同窗故友，這一切都是令人驚奇、溫馨、歡喜！`,
        /*text: `大年初三，再次回到水里故鄉。

親人共聚一堂，以及在河堤上，偶然遇到多年不見的同窗故友，這一切都是令人驚奇、溫馨、歡喜！

水里，依舊是悠悠的藍天白雲、燦爛的陽光、連綿的山巒、秀麗的溪水、美麗的花樹、沿著水里溪如詩如畫的悠長河堤，以及幽深山谷中，吹來的ㄧ陣陣清涼的微風。

呀！美麗的水里故鄉！

留下幾張像片，和大家分享如下。`,*/
        imgUrls: ["https://drive.google.com/uc?export=view&id=1vn3B_0jNAsAHtiGHRgaJBYKA_1tB6OzG",
                    "https://drive.google.com/uc?export=view&id=1ncVtQhbadmTLXn_p4Q9tR_5tFRT-aJIn",
                    "https://drive.google.com/uc?export=view&id=1vUZxTVI6JeRRMpCChandCXjq-ofXWbke",
                    "https://drive.google.com/uc?export=view&id=1am1DfRzXvk4SMOWVpN4Cl9SPlCYo3jV1",
                    "https://drive.google.com/uc?export=view&id=1W0kuI_FuLSBejpfesO4TKeBz7FF7Zgm8",
                    "https://drive.google.com/uc?export=view&id=1azR-L_EtiQNcVI5zZvWzMV7ZOBykMOwE",
                    "https://drive.google.com/uc?export=view&id=14A3h7lOazx65C6JBpYF-OevNBdqVWZ8v"]
    }
    const article3 = {
        id: "0003",
        title: "爸爸攝影輯 - 坪林的翡翠水庫上游",
        date: "2021.03.16",
        text: ``,
        imgUrls: ["https://drive.google.com/uc?export=view&id=1MNXVq7CFO5VKN2xBhBQfqfDuKk_UHJIn"]
    };

    return [article2, article1, article3];
}

function getAll() {
    const articles = getByHttpReq();
    //const articles = getByMocking();

    return articles;
}

export { getAll, getById };
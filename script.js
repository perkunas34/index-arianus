const wordDictionary = {
    "water": { english: "water", italian: "acqua", french: "eau", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", gaelic: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "hello": { english: "hello", italian: "ciao", french: "bonjour", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", gaelic: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "thank you": { english: "thank you", italian: "grazie", french: "merci", german: "danke", spanish: "gracias", portuguese: "obrigado", dutch: "dank je", norwegian: "takk", frisian: "tankewol", gaelic: "tapadh leat", swedish: "tack", danish: "tak", icelandic: "takk", greek: "ευχαριστώ", irish: "go raibh maith agat", russian: "спасибо" },
    "goodbye": { english: "goodbye", italian: "addio", french: "au revoir", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", gaelic: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
    "yes": { english: "yes", italian: "sì", french: "oui", german: "ja", spanish: "sí", portuguese: "sim", dutch: "ja", norwegian: "ja", frisian: "ja", gaelic: "tha", swedish: "ja", danish: "ja", icelandic: "já", greek: "ναι", irish: "tá", russian: "да" },
    "no": { english: "no", italian: "no", french: "non", german: "nein", spanish: "no", portuguese: "não", dutch: "nee", norwegian: "nei", frisian: "nee", gaelic: "chan eil", swedish: "nej", danish: "nej", icelandic: "nei", greek: "όχι", irish: "níl", russian: "нет" },
    "please": { english: "please", italian: "per favore", french: "s'il vous plaît", german: "bitte", spanish: "por favor", portuguese: "por favor", dutch: "alstublieft", norwegian: "vær så snill", frisian: "asjebleaft", gaelic: "le do thoil", swedish: "snälla", danish: "vær så venlig", icelandic: "vinsamlegast", greek: "παρακαλώ", irish: "le do thoil", russian: "пожалуйста" },
    "friend": { english: "friend", italian: "amico", french: "ami", german: "freund", spanish: "amigo", portuguese: "amigo", dutch: "vriend", norwegian: "venn", frisian: "freon", gaelic: "cara", swedish: "vän", danish: "ven", icelandic: "vinur", greek: "φίλος", irish: "cara", russian: "друг" },
    "family": { english: "family", italian: "famiglia", french: "famille", german: "familie", spanish: "familia", portuguese: "família", dutch: "familie", norwegian: "familie", frisian: "famylje", gaelic: "teaghlach", swedish: "familj", danish: "familie", icelandic: "fjölskylda", greek: "οικογένεια", irish: "teaghlach", russian: "семья" },
    "house": { english: "house", italian: "casa", french: "maison", german: "haus", spanish: "casa", portuguese: "casa", dutch: "huis", norwegian: "hus", frisian: "hûs", gaelic: "taigh", swedish: "hus", danish: "hus", icelandic: "hús", greek: "σπίτι", irish: "teach", russian: "дом" },
    "table": { english: "table", italian: "tavolo", french: "table", german: "tisch", spanish: "mesa", portuguese: "mesa", dutch: "tafel", norwegian: "bord", frisian: "tafel", gaelic: "bòrd", swedish: "bord", danish: "bord", icelandic: "borð", greek: "τραπέζι", irish: "bord", russian: "стол" },
    "chair": { english: "chair", italian: "sedia", french: "chaise", german: "stuhl", spanish: "silla", portuguese: "cadeira", dutch: "stoel", norwegian: "stol", frisian: "stoel", gaelic: "cathair", swedish: "stol", danish: "stol", icelandic: "stóll", greek: "καρέκλα", irish: "chathaoir", russian: "стул" },
    "computer": { english: "computer", italian: "computer", french: "ordinateur", german: "computer", spanish: "computadora", portuguese: "computador", dutch: "computer", norwegian: "datamaskin", frisian: "computer", gaelic: "coimpiùtar", swedish: "dator", danish: "computer", icelandic: "tölva", greek: "υπολογιστής", irish: "ríomhaire", russian: "компьютер" },
    "book": { english: "book", italian: "libro", french: "livre", german: "buch", spanish: "libro", portuguese: "livro", dutch: "boek", norwegian: "bok", frisian: "boek", gaelic: "leabhar", swedish: "bok", danish: "bog", icelandic: "bók", greek: "βιβλίο", irish: "leabhar", russian: "книга" },
    "pen": { english: "pen", italian: "penna", french: "stylo", german: "stift", spanish: "bolígrafo", portuguese: "caneta", dutch: "pen", norwegian: "penn", frisian: "pen", gaelic: "peann", swedish: "penna", danish: "pen", icelandic: "penni", greek: "στυλό", irish: "peann", russian: "ручка" },
    "phone": { english: "phone", italian: "telefono", french: "téléphone", german: "telefon", spanish: "teléfono", portuguese: "telefone", dutch: "telefoon", norwegian: "telefon", frisian: "tillefoan", gaelic: "fòn", swedish: "telefon", danish: "telefon", icelandic: "sími", greek: "τηλέφωνο", irish: "guthán", russian: "телефон" },
    "car": { english: "car", italian: "auto", french: "voiture", german: "auto", spanish: "coche", portuguese: "carro", dutch: "auto", norwegian: "bil", frisian: "auto", gaelic: "car", swedish: "bil", danish: "bil", icelandic: "bíll", greek: "αυτοκίνητο", irish: "car", russian: "машина" },
    "bicycle": { english: "bicycle", italian: "bicicletta", french: "vélo", german: "fahrrad", spanish: "bicicleta", portuguese: "bicicleta", dutch: "fiets", norwegian: "sykkel", frisian: "fyts", gaelic: "rothar", swedish: "cykel", danish: "cykel", icelandic: "hjól", greek: "ποδήλατο", irish: "rothar", russian: "велосипед" },
    "train": { english: "train",italian: "treno", french: "train", german: "zug", spanish: "tren", portuguese: "trem", dutch: "trein", norwegian: "tog", frisian: "trein", gaelic: "trèana", swedish: "tåg", danish: "tog", icelandic: "lest", greek: "τρένο", irish: "traein", russian: "поезд" },
    "bus": { english: "bus",italian: "autobus", french: "autobus", german: "bus", spanish: "autobús", portuguese: "autocarro", dutch: "bus", norwegian: "buss", frisian: "bus", gaelic: "bus", swedish: "buss", danish: "bus", icelandic: "strætó", greek: "λεωφορείο", irish: "bus", russian: "автобус" },
    "airplane": { english: "airplane", english: "plane", italian: "aereo", french: "avion", german: "flugzeug", spanish: "avión", portuguese: "avião", dutch: "vliegtuig", norwegian: "fly", frisian: "fleantúch", gaelic: "eabar", swedish: "flygplan", danish: "fly", icelandic: "flugvél", greek: "αεροπλάνο", irish: "eitleán", russian: "самолет" },
    "sun": { english: "sun", italian: "sole", french: "soleil", german: "sonne", spanish: "sol", portuguese: "sol", dutch: "zon", norwegian: "sol", frisian: "sinne", gaelic: "grian", swedish: "sol", danish: "sol", icelandic: "sól", greek: "ήλιος", irish: "grian", russian: "солнце" },
    "moon": { english: "moon", italian: "luna", french: "lune", german: "mond", spanish: "luna", portuguese: "lua", dutch: "maan", norwegian: "måne", frisian: "moanne", gaelic: "gealach", swedish: "måne", danish: "måne", icelandic: "máni", greek: "φεγγάρι", irish: "gealach", russian: "луна" },
};




function updateWord1() {
    updateWord2(); 
}

function updateWord2() {
    const lang1 = document.getElementById("language1").value;
    const lang2 = document.getElementById("language2").value;
    const word1 = document.getElementById("word1").value.trim().toLowerCase();

    let translation = "";

    if (lang1 === "english" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "german" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "spanish" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "french" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "italian" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "portuguese" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "dutch" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "norwegian" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "frisian" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "gaelic" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "swedish" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "danish" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "icelandic" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "greek" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "irish" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    } else if (lang1 === "russian" && word1 in wordDictionary) {
        translation = wordDictionary[word1][lang2] || "";
    }


    document.getElementById("word2").value = translation || "";
}

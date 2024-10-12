const englishDictionary = {
    "water": { italian: "acqua", french: "eau", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "hello": { italian: "ciao", french: "bonjour", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "goodbye": { italian: "addio", french: "au revoir", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
    // Diğer İngilizce kelimeler ve karşılıkları
};

const germanDictionary = {
    "wasser": { italian: "acqua", french: "eau", english: "water", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "hallo": { italian: "ciao", french: "bonjour", english: "hello", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "auf wiedersehen": { italian: "addio", french: "au revoir", english: "goodbye", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
    // Diğer Almanca kelimeler ve karşılıkları
};

const spanishDictionary = {
    "agua": { italian: "acqua", french: "eau", english: "water", german: "wasser", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "hola": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "adiós": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
    // Diğer İspanyolca kelimeler ve karşılıkları
};

const frenchDictionary = {
    "eau": { italian: "acqua", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "bonjour": { italian: "ciao", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "au revoir": { italian: "addio", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
    // Diğer Fransızca kelimeler ve karşılıkları
};

const italianDictionary = {
    "acqua": { french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "ciao": { french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "addio": { french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
    // Diğer İtalyanca kelimeler ve karşılıkları
};

const portugueseDictionary = {
    "água": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "olá": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "adeus": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
};

const dutchDictionary = {
    "water": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "hallo": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "tot ziens": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
        // Diğer Felemenkçe kelimeler ve karşılıkları
};

const norwegianDictionary = {
    "vann": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "hei": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "ha det": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
        // Diğer Norveççe kelimeler ve karşılıkları
};

const frisianDictionary = {
    "wetter": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "hallo": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "oan 'e dei": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
        // Diğer Frizce kelimeler ve karşılıkları
};

const gaelicDictionary = {
    "uisge": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "halò": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "tìoraidh": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
        // Diğer İskoçça kelimeler ve karşılıkları
    };

const swedishDictionary = {
    "vatten": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "hej": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "adjö": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
        // Diğer İsveççe kelimeler ve karşılıkları
};

const danishDictionary = {
    "vand": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", icelandic: "vatn", greek: "νερό", irish: "uisce", russian: "вода" },
    "hej": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "farvel": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", icelandic: "bless", greek: "αντίο", irish: "slán", russian: "до свидания" },
        // Diğer Danca kelimeler ve karşılıkları
};

const icelandicDictionary = {
    "vatn": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", greek: "νερό", irish: "uisce", russian: "вода" },
    "halló": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", greek: "γεια σου", irish: "dia dhuit", russian: "привет" },
    "bless": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", greek: "αντίο", irish: "slán", russian: "до свидания" },
        // Diğer İzlandaca kelimeleri ve karşılıkları
};

const greekDictionary = {
    "νερό": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", irish: "uisce", russian: "вода" },
    "γεια σου": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", irish: "dia dhuit", russian: "привет" },
    "αντίο": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", irish: "slán", russian: "до свидания" },
        // Diğer Yunanca kelimeler ve karşılıkları
};

const irishDictionary = {
    "uisce": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", russian: "вода" },
    "dia dhuit": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", russian: "привет" },
    "slán": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", russian: "до свидания" },
        // Diğer İrlandaca kelimeleri ve karşılıkları
};

const russianDictionary = {
    "вода": { italian: "acqua", french: "eau", english: "water", german: "wasser", spanish: "agua", portuguese: "água", dutch: "water", norwegian: "vann", frisian: "wetter", scottish: "uisge", swedish: "vatten", danish: "vand", icelandic: "vatn", greek: "νερό", irish: "uisce" },
    "привет": { italian: "ciao", french: "bonjour", english: "hello", german: "hallo", spanish: "hola", portuguese: "olá", dutch: "hallo", norwegian: "hei", frisian: "hallo", scottish: "halò", swedish: "hej", danish: "hej", icelandic: "halló", greek: "γεια σου", irish: "dia dhuit" },
    "до свидания": { italian: "addio", french: "au revoir", english: "goodbye", german: "auf wiedersehen", spanish: "adiós", portuguese: "adeus", dutch: "tot ziens", norwegian: "ha det", frisian: "oan 'e dei", scottish: "tìoraidh", swedish: "adjö", danish: "farvel", icelandic: "bless", greek: "αντίο", irish: "slán" },
        // Diğer Rusça kelimeler ve karşılıkları
};



function updateWord1() {
    updateWord2(); // Kelime 2'yi güncelle
}

function updateWord2() {
    const lang1 = document.getElementById("language1").value;
    const lang2 = document.getElementById("language2").value;
    const word1 = document.getElementById("word1").value.trim().toLowerCase();

    let translation = "";

    // İlk dilin sözlüğünden kelimeyi kontrol et
    if (lang1 === "english" && word1 in englishDictionary) {
        translation = englishDictionary[word1][lang2] || "";
    } else if (lang1 === "german" && word1 in germanDictionary) {
        translation = germanDictionary[word1][lang2] || "";
    } else if (lang1 === "spanish" && word1 in spanishDictionary) {
        translation = spanishDictionary[word1][lang2] || "";
    } else if (lang1 === "french" && word1 in frenchDictionary) {
        translation = frenchDictionary[word1][lang2] || "";
    } else if (lang1 === "italian" && word1 in italianDictionary) {
        translation = italianDictionary[word1][lang2] || "";
    } else if (lang1 === "portuguese" && word1 in portugueseDictionary) {
        translation = portugueseDictionary[word1][lang2] || "";
    } else if (lang1 === "dutch" && word1 in dutchDictionary) {
        translation = dutchDictionary[word1][lang2] || "";
    } else if (lang1 === "norwegian" && word1 in norwegianDictionary) {
        translation = norwegianDictionary[word1][lang2] || "";
    } else if (lang1 === "frisian" && word1 in frisianDictionary) {
        translation = frisianDictionary[word1][lang2] || "";
    } else if (lang1 === "gaelic" && word1 in gaelicDictionary) {
        translation = gaelicDictionary[word1][lang2] || "";
    } else if (lang1 === "swedish" && word1 in swedishDictionary) {
        translation = swedishDictionary[word1][lang2] || "";
    } else if (lang1 === "danish" && word1 in danishDictionary) {
        translation = danishDictionary[word1][lang2] || "";
    } else if (lang1 === "icelandic" && word1 in icelandicDictionary) {
        translation = icelandicDictionary[word1][lang2] || "";
    } else if (lang1 === "greek" && word1 in greekDictionary) {
        translation = greekDictionary[word1][lang2] || "";
    } else if (lang1 === "irish" && word1 in irishDictionary) {
        translation = irishDictionary[word1][lang2] || "";
    } else if (lang1 === "russian" && word1 in russianDictionary) {
        translation = russianDictionary[word1][lang2] || "";
    }


    // İkinci dilin karşılığını ayarla
    document.getElementById("word2").value = translation || ""; // Geçersiz kelime için boş bırak
}

/* =========================================================
   WORLD EXPLORER
   Complete JavaScript
========================================================= */


/* =========================================================
   COUNTRY DATA
========================================================= */

const countries = [

    {
        name: "Pakistan",
        official: "Islamic Republic of Pakistan",
        flag: "🇵🇰",
        continent: "Asia",
        capital: "Islamabad",
        population: 241000000,
        populationText: "241 million",
        currency: "Pakistani Rupee (PKR)",
        language: "Urdu",
        area: 881913,
        areaText: "881,913 km²",
        timezone: "UTC+5",
        callingCode: "+92",
        region: "Southern Asia",
        subregion: "South Asia",
        neighbors: ["India", "Afghanistan", "Iran", "China"],
        facts: [
            "Pakistan was established in 1947.",
            "Islamabad is the capital city.",
            "K2, the world's second-highest mountain, is in Pakistan.",
            "The Indus River is one of the country's major rivers."
        ],
        landmarks: [
            ["Faisal Mosque", "Islamabad"],
            ["Badshahi Mosque", "Lahore"],
            ["Minar-e-Pakistan", "Lahore"],
            ["Mohenjo-daro", "Sindh"]
        ]
    },

    {
        name: "Japan",
        official: "Japan",
        flag: "🇯🇵",
        continent: "Asia",
        capital: "Tokyo",
        population: 124000000,
        populationText: "124 million",
        currency: "Japanese Yen (JPY)",
        language: "Japanese",
        area: 377975,
        areaText: "377,975 km²",
        timezone: "UTC+9",
        callingCode: "+81",
        region: "Eastern Asia",
        subregion: "East Asia",
        neighbors: ["No land borders"],
        facts: [
            "Japan is an island country in East Asia.",
            "Tokyo is one of the world's largest metropolitan areas.",
            "Mount Fuji is Japan's highest mountain.",
            "Japan is famous for its advanced technology and high-speed trains."
        ],
        landmarks: [
            ["Mount Fuji", "Honshu"],
            ["Tokyo Tower", "Tokyo"],
            ["Fushimi Inari Shrine", "Kyoto"],
            ["Himeji Castle", "Himeji"]
        ]
    },

    {
        name: "China",
        official: "People's Republic of China",
        flag: "🇨🇳",
        continent: "Asia",
        capital: "Beijing",
        population: 1409000000,
        populationText: "1.4 billion",
        currency: "Chinese Yuan (CNY)",
        language: "Mandarin Chinese",
        area: 9596960,
        areaText: "9.6 million km²",
        timezone: "UTC+8",
        callingCode: "+86",
        region: "Eastern Asia",
        subregion: "East Asia",
        neighbors: [
            "Pakistan",
            "India",
            "Russia",
            "Mongolia",
            "Nepal"
        ],
        facts: [
            "China is one of the world's largest countries by area.",
            "The Great Wall is one of China's most famous landmarks.",
            "Beijing is the capital.",
            "China has one of the world's oldest continuous civilizations."
        ],
        landmarks: [
            ["Great Wall of China", "Northern China"],
            ["Forbidden City", "Beijing"],
            ["Terracotta Army", "Xi'an"],
            ["Potala Palace", "Lhasa"]
        ]
    },

    {
        name: "India",
        official: "Republic of India",
        flag: "🇮🇳",
        continent: "Asia",
        capital: "New Delhi",
        population: 1428000000,
        populationText: "1.4 billion",
        currency: "Indian Rupee (INR)",
        language: "Hindi / English",
        area: 3287263,
        areaText: "3.29 million km²",
        timezone: "UTC+5:30",
        callingCode: "+91",
        region: "Southern Asia",
        subregion: "South Asia",
        neighbors: [
            "Pakistan",
            "China",
            "Nepal",
            "Bhutan",
            "Bangladesh"
        ],
        facts: [
            "India is one of the world's most populous countries.",
            "New Delhi is the capital.",
            "The Himalayas extend along India's northern region.",
            "The Taj Mahal is one of India's best-known landmarks."
        ],
        landmarks: [
            ["Taj Mahal", "Agra"],
            ["Red Fort", "Delhi"],
            ["Gateway of India", "Mumbai"],
            ["Jaipur City Palace", "Jaipur"]
        ]
    },

    {
        name: "United Arab Emirates",
        official: "United Arab Emirates",
        flag: "🇦🇪",
        continent: "Asia",
        capital: "Abu Dhabi",
        population: 9500000,
        populationText: "9.5 million",
        currency: "UAE Dirham (AED)",
        language: "Arabic",
        area: 83600,
        areaText: "83,600 km²",
        timezone: "UTC+4",
        callingCode: "+971",
        region: "Western Asia",
        subregion: "Western Asia",
        neighbors: ["Saudi Arabia", "Oman"],
        facts: [
            "The UAE is a federation of seven emirates.",
            "Abu Dhabi is the capital.",
            "Dubai is known for its modern skyline.",
            "The Burj Khalifa is the world's tallest building."
        ],
        landmarks: [
            ["Burj Khalifa", "Dubai"],
            ["Sheikh Zayed Grand Mosque", "Abu Dhabi"],
            ["Palm Jumeirah", "Dubai"],
            ["Louvre Abu Dhabi", "Abu Dhabi"]
        ]
    },

    {
        name: "Saudi Arabia",
        official: "Kingdom of Saudi Arabia",
        flag: "🇸🇦",
        continent: "Asia",
        capital: "Riyadh",
        population: 36000000,
        populationText: "36 million",
        currency: "Saudi Riyal (SAR)",
        language: "Arabic",
        area: 2149690,
        areaText: "2.15 million km²",
        timezone: "UTC+3",
        callingCode: "+966",
        region: "Western Asia",
        subregion: "Arabian Peninsula",
        neighbors: [
            "Pakistan",
            "Oman",
            "Yemen",
            "Jordan",
            "Iraq",
            "Kuwait",
            "UAE"
        ],
        facts: [
            "Saudi Arabia occupies much of the Arabian Peninsula.",
            "Riyadh is the capital.",
            "Mecca and Medina are major Islamic holy cities.",
            "The Rub' al Khali is one of the world's largest sand deserts."
        ],
        landmarks: [
            ["Masjid al-Haram", "Mecca"],
            ["Al-Masjid an-Nabawi", "Medina"],
            ["Kingdom Centre", "Riyadh"],
            ["Al-Ula", "Al Madinah Region"]
        ]
    },

    {
        name: "United Kingdom",
        official: "United Kingdom of Great Britain and Northern Ireland",
        flag: "🇬🇧",
        continent: "Europe",
        capital: "London",
        population: 68000000,
        populationText: "68 million",
        currency: "Pound Sterling (GBP)",
        language: "English",
        area: 243610,
        areaText: "243,610 km²",
        timezone: "UTC+0",
        callingCode: "+44",
        region: "Northern Europe",
        subregion: "Northern Europe",
        neighbors: ["Ireland"],
        facts: [
            "The United Kingdom is made up of four constituent countries.",
            "London is the capital.",
            "The River Thames runs through London.",
            "The UK has a long history of scientific and cultural achievements."
        ],
        landmarks: [
            ["Big Ben", "London"],
            ["Tower Bridge", "London"],
            ["Stonehenge", "Wiltshire"],
            ["Edinburgh Castle", "Edinburgh"]
        ]
    },

    {
        name: "France",
        official: "French Republic",
        flag: "🇫🇷",
        continent: "Europe",
        capital: "Paris",
        population: 68000000,
        populationText: "68 million",
        currency: "Euro (EUR)",
        language: "French",
        area: 551695,
        areaText: "551,695 km²",
        timezone: "UTC+1",
        callingCode: "+33",
        region: "Western Europe",
        subregion: "Western Europe",
        neighbors: [
            "Spain",
            "Belgium",
            "Germany",
            "Italy",
            "Switzerland",
            "Luxembourg",
            "Andorra"
        ],
        facts: [
            "France is one of Europe's largest countries.",
            "Paris is the capital.",
            "The Eiffel Tower is one of the world's most recognizable landmarks.",
            "France has a major influence on art, fashion and cuisine."
        ],
        landmarks: [
            ["Eiffel Tower", "Paris"],
            ["Louvre Museum", "Paris"],
            ["Palace of Versailles", "Versailles"],
            ["Mont Saint-Michel", "Normandy"]
        ]
    },

    {
        name: "Germany",
        official: "Federal Republic of Germany",
        flag: "🇩🇪",
        continent: "Europe",
        capital: "Berlin",
        population: 84000000,
        populationText: "84 million",
        currency: "Euro (EUR)",
        language: "German",
        area: 357022,
        areaText: "357,022 km²",
        timezone: "UTC+1",
        callingCode: "+49",
        region: "Western Europe",
        subregion: "Western Europe",
        neighbors: [
            "France",
            "Poland",
            "Austria",
            "Czech Republic",
            "Denmark",
            "Belgium",
            "Netherlands"
        ],
        facts: [
            "Germany is located in Central Europe.",
            "Berlin is the capital.",
            "Germany is known for engineering and manufacturing.",
            "The Rhine is one of its major rivers."
        ],
        landmarks: [
            ["Brandenburg Gate", "Berlin"],
            ["Neuschwanstein Castle", "Bavaria"],
            ["Cologne Cathedral", "Cologne"],
            ["Berlin Wall Memorial", "Berlin"]
        ]
    },

    {
        name: "Italy",
        official: "Italian Republic",
        flag: "🇮🇹",
        continent: "Europe",
        capital: "Rome",
        population: 59000000,
        populationText: "59 million",
        currency: "Euro (EUR)",
        language: "Italian",
        area: 301340,
        areaText: "301,340 km²",
        timezone: "UTC+1",
        callingCode: "+39",
        region: "Southern Europe",
        subregion: "Southern Europe",
        neighbors: [
            "France",
            "Switzerland",
            "Austria",
            "Slovenia",
            "Vatican City",
            "San Marino"
        ],
        facts: [
            "Italy is shaped like a boot extending into the Mediterranean Sea.",
            "Rome is the capital.",
            "Italy contains Vatican City.",
            "Italy has many famous ancient Roman sites."
        ],
        landmarks: [
            ["Colosseum", "Rome"],
            ["Leaning Tower of Pisa", "Pisa"],
            ["Venice Canals", "Venice"],
            ["Trevi Fountain", "Rome"]
        ]
    },

    {
        name: "Egypt",
        official: "Arab Republic of Egypt",
        flag: "🇪🇬",
        continent: "Africa",
        capital: "Cairo",
        population: 112000000,
        populationText: "112 million",
        currency: "Egyptian Pound (EGP)",
        language: "Arabic",
        area: 1002450,
        areaText: "1.0 million km²",
        timezone: "UTC+2",
        callingCode: "+20",
        region: "Northern Africa",
        subregion: "Northern Africa",
        neighbors: [
            "Libya",
            "Sudan",
            "Israel"
        ],
        facts: [
            "Egypt is home to one of the world's oldest civilizations.",
            "Cairo is the capital.",
            "The Nile is one of the world's most famous rivers.",
            "The Great Pyramid of Giza is an ancient wonder."
        ],
        landmarks: [
            ["Great Pyramid of Giza", "Giza"],
            ["Sphinx", "Giza"],
            ["Karnak Temple", "Luxor"],
            ["Valley of the Kings", "Luxor"]
        ]
    },

    {
        name: "South Africa",
        official: "Republic of South Africa",
        flag: "🇿🇦",
        continent: "Africa",
        capital: "Pretoria",
        population: 62000000,
        populationText: "62 million",
        currency: "South African Rand (ZAR)",
        language: "Multiple official languages",
        area: 1221037,
        areaText: "1.22 million km²",
        timezone: "UTC+2",
        callingCode: "+27",
        region: "Southern Africa",
        subregion: "Southern Africa",
        neighbors: [
            "Namibia",
            "Botswana",
            "Zimbabwe",
            "Mozambique",
            "Eswatini",
            "Lesotho"
        ],
        facts: [
            "South Africa has three capital cities.",
            "Cape Town is famous for Table Mountain.",
            "Kruger National Park is known for wildlife.",
            "South Africa has coastlines on two oceans."
        ],
        landmarks: [
            ["Table Mountain", "Cape Town"],
            ["Kruger National Park", "Limpopo / Mpumalanga"],
            ["Robben Island", "Cape Town"],
            ["Blyde River Canyon", "Mpumalanga"]
        ]
    },

    {
        name: "Nigeria",
        official: "Federal Republic of Nigeria",
        flag: "🇳🇬",
        continent: "Africa",
        capital: "Abuja",
        population: 223000000,
        populationText: "223 million",
        currency: "Nigerian Naira (NGN)",
        language: "English",
        area: 923768,
        areaText: "923,768 km²",
        timezone: "UTC+1",
        callingCode: "+234",
        region: "Western Africa",
        subregion: "Western Africa",
        neighbors: [
            "Niger",
            "Chad",
            "Cameroon",
            "Benin"
        ],
        facts: [
            "Nigeria is one of Africa's most populous countries.",
            "Abuja is the capital.",
            "Lagos is one of Africa's major cities.",
            "Nigeria has hundreds of ethnic groups and languages."
        ],
        landmarks: [
            ["Zuma Rock", "Niger State"],
            ["Olumo Rock", "Ogun State"],
            ["Lekki Conservation Centre", "Lagos"],
            ["Aso Rock", "Abuja"]
        ]
    },

    {
        name: "United States",
        official: "United States of America",
        flag: "🇺🇸",
        continent: "North America",
        capital: "Washington, D.C.",
        population: 335000000,
        populationText: "335 million",
        currency: "US Dollar (USD)",
        language: "English",
        area: 9833517,
        areaText: "9.83 million km²",
        timezone: "Multiple",
        callingCode: "+1",
        region: "Northern America",
        subregion: "North America",
        neighbors: [
            "Canada",
            "Mexico"
        ],
        facts: [
            "The United States consists of 50 states.",
            "Washington, D.C. is the capital.",
            "The country contains many different climates and landscapes.",
            "The Grand Canyon is one of its most famous natural landmarks."
        ],
        landmarks: [
            ["Statue of Liberty", "New York"],
            ["Grand Canyon", "Arizona"],
            ["Golden Gate Bridge", "California"],
            ["Mount Rushmore", "South Dakota"]
        ]
    },

    {
        name: "Canada",
        official: "Canada",
        flag: "🇨🇦",
        continent: "North America",
        capital: "Ottawa",
        population: 40000000,
        populationText: "40 million",
        currency: "Canadian Dollar (CAD)",
        language: "English / French",
        area: 9984670,
        areaText: "9.98 million km²",
        timezone: "Multiple",
        callingCode: "+1",
        region: "Northern America",
        subregion: "North America",
        neighbors: [
            "United States"
        ],
        facts: [
            "Canada is the second-largest country by total area.",
            "Ottawa is the capital.",
            "Canada has one of the world's longest coastlines.",
            "The country is known for its lakes and forests."
        ],
        landmarks: [
            ["Niagara Falls", "Ontario"],
            ["CN Tower", "Toronto"],
            ["Banff National Park", "Alberta"],
            ["Old Quebec", "Quebec City"]
        ]
    },

    {
        name: "Mexico",
        official: "United Mexican States",
        flag: "🇲🇽",
        continent: "North America",
        capital: "Mexico City",
        population: 129000000,
        populationText: "129 million",
        currency: "Mexican Peso (MXN)",
        language: "Spanish",
        area: 1964375,
        areaText: "1.96 million km²",
        timezone: "Multiple",
        callingCode: "+52",
        region: "Central America",
        subregion: "North America",
        neighbors: [
            "United States",
            "Guatemala",
            "Belize"
        ],
        facts: [
            "Mexico is in the southern part of North America.",
            "Mexico City is the capital.",
            "Ancient Maya and Aztec civilizations developed in the region.",
            "Mexico has coastlines on both the Pacific Ocean and Gulf of Mexico."
        ],
        landmarks: [
            ["Chichen Itza", "Yucatan"],
            ["Palacio de Bellas Artes", "Mexico City"],
            ["Teotihuacan", "State of Mexico"],
            ["Copper Canyon", "Chihuahua"]
        ]
    },

    {
        name: "Brazil",
        official: "Federative Republic of Brazil",
        flag: "🇧🇷",
        continent: "South America",
        capital: "Brasilia",
        population: 216000000,
        populationText: "216 million",
        currency: "Brazilian Real (BRL)",
        language: "Portuguese",
        area: 8515767,
        areaText: "8.52 million km²",
        timezone: "Multiple",
        callingCode: "+55",
        region: "South America",
        subregion: "South America",
        neighbors: [
            "Argentina",
            "Bolivia",
            "Colombia",
            "Peru",
            "Venezuela",
            "Paraguay",
            "Uruguay"
        ],
        facts: [
            "Brazil is the largest country in South America.",
            "Brasilia is the capital.",
            "The Amazon Rainforest covers a large part of northern Brazil.",
            "Portuguese is the official language."
        ],
        landmarks: [
            ["Christ the Redeemer", "Rio de Janeiro"],
            ["Iguazu Falls", "Parana"],
            ["Amazon Rainforest", "Northern Brazil"],
            ["Copacabana Beach", "Rio de Janeiro"]
        ]
    },

    {
        name: "Argentina",
        official: "Argentine Republic",
        flag: "🇦🇷",
        continent: "South America",
        capital: "Buenos Aires",
        population: 46000000,
        populationText: "46 million",
        currency: "Argentine Peso (ARS)",
        language: "Spanish",
        area: 2780400,
        areaText: "2.78 million km²",
        timezone: "UTC-3",
        callingCode: "+54",
        region: "South America",
        subregion: "South America",
        neighbors: [
            "Chile",
            "Bolivia",
            "Paraguay",
            "Brazil",
            "Uruguay"
        ],
        facts: [
            "Argentina is one of the largest countries in South America.",
            "Buenos Aires is the capital.",
            "The Andes form much of the country's western border.",
            "Aconcagua is the highest mountain in the Americas."
        ],
        landmarks: [
            ["Iguazu Falls", "Misiones"],
            ["Perito Moreno Glacier", "Santa Cruz"],
            ["Obelisk of Buenos Aires", "Buenos Aires"],
            ["Aconcagua", "Mendoza"]
        ]
    },

    {
        name: "Australia",
        official: "Commonwealth of Australia",
        flag: "🇦🇺",
        continent: "Oceania",
        capital: "Canberra",
        population: 26000000,
        populationText: "26 million",
        currency: "Australian Dollar (AUD)",
        language: "English",
        area: 7692024,
        areaText: "7.69 million km²",
        timezone: "Multiple",
        callingCode: "+61",
        region: "Australia and New Zealand",
        subregion: "Australia and New Zealand",
        neighbors: ["No land borders"],
        facts: [
            "Australia is both a country and a continent.",
            "Canberra is the capital.",
            "The Great Barrier Reef is off Australia's northeastern coast.",
            "Australia is home to unique animals such as kangaroos and koalas."
        ],
        landmarks: [
            ["Sydney Opera House", "Sydney"],
            ["Great Barrier Reef", "Queensland"],
            ["Uluru", "Northern Territory"],
            ["Great Ocean Road", "Victoria"]
        ]
    },

    {
        name: "New Zealand",
        official: "New Zealand",
        flag: "🇳🇿",
        continent: "Oceania",
        capital: "Wellington",
        population: 5300000,
        populationText: "5.3 million",
        currency: "New Zealand Dollar (NZD)",
        language: "English / Māori",
        area: 268021,
        areaText: "268,021 km²",
        timezone: "UTC+12",
        callingCode: "+64",
        region: "Australia and New Zealand",
        subregion: "Oceania",
        neighbors: ["No land borders"],
        facts: [
            "New Zealand consists mainly of two large islands.",
            "Wellington is the capital.",
            "The country is famous for dramatic mountains and landscapes.",
            "The kiwi is a well-known native bird."
        ],
        landmarks: [
            ["Milford Sound", "South Island"],
            ["Hobbiton", "Matamata"],
            ["Mount Cook", "South Island"],
            ["Sky Tower", "Auckland"]
        ]
    }

];


/* =========================================================
   APP STATE
========================================================= */

let currentContinent = "All";
let currentView = "countries";
let currentCountry = null;

let favorites = JSON.parse(
    localStorage.getItem("worldExplorerFavorites") || "[]"
);

let recentCountries = JSON.parse(
    localStorage.getItem("worldExplorerRecent") || "[]"
);

let darkMode =
    localStorage.getItem("worldExplorerDark") === "true";


/* =========================================================
   DOM ELEMENTS
========================================================= */

const countryGrid = document.getElementById("countryGrid");
const searchInput = document.getElementById("searchInput");
const clearSearch = document.getElementById("clearSearch");
const resultText = document.getElementById("resultText");
const viewTitle = document.getElementById("viewTitle");
const sortSelect = document.getElementById("sortSelect");

const countryModal = document.getElementById("countryModal");
const randomPanel = document.getElementById("randomPanel");

const themeButton = document.getElementById("themeButton");

const countryCount = document.getElementById("countryCount");
const favoriteCount = document.getElementById("favoriteCount");
const recentCount = document.getElementById("recentCount");


/* =========================================================
   HELPERS
========================================================= */

function formatNumber(number) {
    return Number(number).toLocaleString("en-US");
}

function escapeHTML(value) {
    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function saveData() {
    localStorage.setItem(
        "worldExplorerFavorites",
        JSON.stringify(favorites)
    );

    localStorage.setItem(
        "worldExplorerRecent",
        JSON.stringify(recentCountries)
    );
}

function getCountryByName(name) {
    return countries.find(country => country.name === name);
}

function isFavorite(countryName) {
    return favorites.includes(countryName);
}


/* =========================================================
   THEME
========================================================= */

function applyTheme() {
    document.body.classList.toggle("dark", darkMode);

    themeButton.textContent = darkMode ? "☀️" : "🌙";
}

themeButton.addEventListener("click", () => {
    darkMode = !darkMode;

    localStorage.setItem(
        "worldExplorerDark",
        darkMode
    );

    applyTheme();
});


/* =========================================================
   STATS
========================================================= */

function updateStats() {
    countryCount.textContent = countries.length;
    favoriteCount.textContent = favorites.length;
    recentCount.textContent = recentCountries.length;
}


/* =========================================================
   FILTER + SORT
========================================================= */

function getVisibleCountries() {

    const searchTerm =
        searchInput.value.trim().toLowerCase();

    let visible = countries.filter(country => {

        const matchesSearch =
            country.name.toLowerCase().includes(searchTerm) ||
            country.capital.toLowerCase().includes(searchTerm) ||
            country.currency.toLowerCase().includes(searchTerm) ||
            country.language.toLowerCase().includes(searchTerm);

        const matchesContinent =
            currentContinent === "All" ||
            country.continent === currentContinent;

        let matchesView = true;

        if (currentView === "favorites") {
            matchesView = isFavorite(country.name);
        }

        if (currentView === "recent") {
            matchesView = recentCountries.includes(country.name);
        }

        return matchesSearch &&
               matchesContinent &&
               matchesView;
    });

    const sortValue = sortSelect.value;

    if (sortValue === "name") {
        visible.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }

    if (sortValue === "nameDesc") {
        visible.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }

    if (sortValue === "population") {
        visible.sort((a, b) =>
            b.population - a.population
        );
    }

    if (sortValue === "area") {
        visible.sort((a, b) =>
            b.area - a.area
        );
    }

    return visible;
}


/* =========================================================
   COUNTRY CARDS
========================================================= */

function renderCountries() {

    const visible = getVisibleCountries();

    if (currentView === "countries") {
        viewTitle.textContent = "Explore Countries";
    }

    if (currentView === "favorites") {
        viewTitle.textContent = "Favorite Countries";
    }

    if (currentView === "recent") {
        viewTitle.textContent = "Recently Viewed";
    }

    resultText.textContent =
        `Showing ${visible.length} ${
            visible.length === 1 ? "country" : "countries"
        }`;

    if (visible.length === 0) {

        countryGrid.innerHTML = `
            <div class="noResults">
                <div class="noResultsIcon">🌍</div>
                <h3>No countries found</h3>
                <p>Try another search or filter.</p>
            </div>
        `;

        return;
    }

    countryGrid.innerHTML = visible.map(country => {

        const favoriteSymbol =
            isFavorite(country.name) ? "★" : "☆";

        return `
            <article
                class="countryCard"
                data-country="${escapeHTML(country.name)}"
            >

                <div class="cardTop">

                    <div class="flag">
                        ${country.flag}
                    </div>

                    <div>
                        <div class="countryName">
                            ${escapeHTML(country.name)}
                        </div>

                        <div class="countryRegion">
                            ${escapeHTML(country.continent)}
                        </div>
                    </div>

                </div>

                <div class="cardInfo">

                    <div class="miniInfo">
                        <span>🏙️ Capital</span>
                        <strong>
                            ${escapeHTML(country.capital)}
                        </strong>
                    </div>

                    <div class="miniInfo">
                        <span>👥 Population</span>
                        <strong>
                            ${escapeHTML(country.populationText)}
                        </strong>
                    </div>

                    <div class="miniInfo">
                        <span>💰 Currency</span>
                        <strong>
                            ${escapeHTML(country.currency)}
                        </strong>
                    </div>

                    <div class="miniInfo">
                        <span>🗣️ Language</span>
                        <strong>
                            ${escapeHTML(country.language)}
                        </strong>
                    </div>

                </div>

                <div class="cardFooter">

                    <span class="cardExplore">
                        View details →
                    </span>

                    <span class="cardFavorite">
                        ${favoriteSymbol}
                    </span>

                </div>

            </article>
        `;

    }).join("");

    document.querySelectorAll(".countryCard").forEach(card => {

        card.addEventListener("click", () => {

            const name = card.dataset.country;
            const country = getCountryByName(name);

            if (country) {
                openCountry(country);
            }

        });

    });
}


/* =========================================================
   OPEN COUNTRY
========================================================= */

function openCountry(country) {

    currentCountry = country;

    addToRecent(country);

    document.getElementById("modalFlag").textContent =
        country.flag;

    document.getElementById("modalName").textContent =
        country.name;

    document.getElementById("modalOfficialName").textContent =
        country.official;

    document.getElementById("modalCapital").textContent =
        country.capital;

    document.getElementById("modalPopulation").textContent =
        country.populationText;

    document.getElementById("modalCurrency").textContent =
        country.currency;

    document.getElementById("modalLanguage").textContent =
        country.language;

    document.getElementById("modalContinent").textContent =
        country.continent;

    document.getElementById("modalArea").textContent =
        country.areaText;

    document.getElementById("modalTimezone").textContent =
        country.timezone;

    document.getElementById("modalCallingCode").textContent =
        country.callingCode;

    document.getElementById("modalRegion").textContent =
        country.region;

    document.getElementById("modalSubregion").textContent =
        country.subregion;

    document.getElementById("modalNeighbors").textContent =
        country.neighbors.join(", ");

    document.getElementById("mapCountryName").textContent =
        country.name;

    renderFacts(country);
    renderLandmarks(country);
    updateFavoriteButton();

    countryModal.classList.remove("hidden");

    updateStats();
}


/* =========================================================
   FACTS
========================================================= */

function renderFacts(country) {

    const container =
        document.getElementById("modalFacts");

    container.innerHTML =
        country.facts.map(fact => `
            <div class="factItem">
                💡 ${escapeHTML(fact)}
            </div>
        `).join("");
}


/* =========================================================
   LANDMARKS
========================================================= */

function renderLandmarks(country) {

    const container =
        document.getElementById("modalLandmarks");

    container.innerHTML =
        country.landmarks.map(place => `
            <div class="landmarkItem">
                <strong>📍 ${escapeHTML(place[0])}</strong>
                <span>${escapeHTML(place[1])}</span>
            </div>
        `).join("");
}


/* =========================================================
   FAVORITES
========================================================= */

function updateFavoriteButton() {

    if (!currentCountry) return;

    const button =
        document.getElementById("modalFavorite");

    if (isFavorite(currentCountry.name)) {
        button.textContent = "★";
        button.title = "Remove from favorites";
    } else {
        button.textContent = "☆";
        button.title = "Add to favorites";
    }
}

function toggleFavorite() {

    if (!currentCountry) return;

    const name = currentCountry.name;

    if (isFavorite(name)) {

        favorites =
            favorites.filter(item => item !== name);

    } else {

        favorites.push(name);
    }

    saveData();

    updateFavoriteButton();
    updateStats();
    renderCountries();
}

document
    .getElementById("modalFavorite")
    .addEventListener("click", toggleFavorite);


/* =========================================================
   RECENT COUNTRIES
========================================================= */

function addToRecent(country) {

    recentCountries =
        recentCountries.filter(
            name => name !== country.name
        );

    recentCountries.unshift(country.name);

    recentCountries =
        recentCountries.slice(0, 8);

    saveData();
    updateStats();
}


/* =========================================================
   CLOSE COUNTRY MODAL
========================================================= */

function closeCountryModal() {
    countryModal.classList.add("hidden");
}

document
    .getElementById("closeModal")
    .addEventListener("click", closeCountryModal);

document
    .getElementById("modalCloseBottom")
    .addEventListener("click", closeCountryModal);

countryModal.addEventListener("click", event => {

    if (event.target === countryModal) {
        closeCountryModal();
    }

});


/* =========================================================
   RANDOM COUNTRY
========================================================= */

let randomCountry = null;

function chooseRandomCountry() {

    randomCountry =
        countries[
            Math.floor(Math.random() * countries.length)
        ];

    document.getElementById("randomFlag").textContent =
        randomCountry.flag;

    document.getElementById("randomName").textContent =
        randomCountry.name;

    document.getElementById("randomDescription").textContent =
        `${randomCountry.name} is in ${randomCountry.continent}. Its capital is ${randomCountry.capital}.`;

    randomPanel.classList.remove("hidden");
}

document
    .getElementById("randomButton")
    .addEventListener("click", chooseRandomCountry);

document
    .getElementById("modalRandom")
    .addEventListener("click", () => {

        closeCountryModal();
        chooseRandomCountry();

    });

document
    .getElementById("closeRandom")
    .addEventListener("click", () => {
        randomPanel.classList.add("hidden");
    });

randomPanel.addEventListener("click", event => {

    if (event.target === randomPanel) {
        randomPanel.classList.add("hidden");
    }

});

document
    .getElementById("exploreRandom")
    .addEventListener("click", () => {

        if (!randomCountry) return;

        randomPanel.classList.add("hidden");
        openCountry(randomCountry);

    });


/* =========================================================
   SEARCH
========================================================= */

searchInput.addEventListener("input", () => {

    renderCountries();

});

clearSearch.addEventListener("click", () => {

    searchInput.value = "";
    renderCountries();
    searchInput.focus();

});


/* =========================================================
   CONTINENT FILTERS
========================================================= */

document
    .querySelectorAll(".continentButton")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".continentButton")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            currentContinent =
                button.dataset.continent;

            renderCountries();

        });

    });


/* =========================================================
   EXPLORE TABS
========================================================= */

document
    .querySelectorAll(".exploreTab")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".exploreTab")
                .forEach(btn =>
                    btn.classList.remove("active")
                );

            button.classList.add("active");

            currentView =
                button.dataset.view;

            renderCountries();

        });

    });


/* =========================================================
   SORT
========================================================= */

sortSelect.addEventListener(
    "change",
    renderCountries
);


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        countryModal.classList.add("hidden");
        randomPanel.classList.add("hidden");

    }

    if (
        event.key === "/" &&
        document.activeElement !== searchInput
    ) {

        event.preventDefault();
        searchInput.focus();

    }

});


/* =========================================================
   INITIALIZE APP
========================================================= */

applyTheme();
updateStats();
renderCountries();
```

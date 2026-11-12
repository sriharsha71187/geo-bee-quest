/* GeoBee Quest — IAC-style buzzer tossups (National Geography Bee regional format).
 * Each tossup is a short paragraph: hard clues first, giveaway last ("For the point, ...").
 * Written to the 2021-22 IAC elementary regional style, every clue source-checked by the
 * writer and then independently fact-checked; see tools-local in the parent workspace.
 * Fields: id, region, cat, clues[], a (answer), alt[] (accepted), prompt[] (too vague),
 *         t (1 easy … 5 hard), x (fun fact), redset (2026-27 Red Set study-guide item).
 */
window.GEO_TOSSUPS = [
 {
  "id": "europe-bosporus",
  "region": "europe",
  "cat": "water",
  "clues": [
   "Three huge bridges cross this narrow waterway, and a railway tunnel called Marmaray runs underneath it.",
   "This strait connects the Black Sea to the Sea of Marmara, and the city of Istanbul sits on both of its shores.",
   "For the point, name this strait that divides the European and Asian parts of Turkey."
  ],
  "a": "Bosporus",
  "alt": [
   "Bosphorus",
   "Bosporus Strait",
   "Bosphorus Strait",
   "Strait of Istanbul",
   "Istanbul Strait",
   "Istanbul Bogazi"
  ],
  "prompt": [],
  "t": 3,
  "x": "Ancient Greek stories say the hero Jason sailed safely between giant 'clashing rocks' that guarded this strait.",
  "redset": "Bosporus"
 },
 {
  "id": "europe-danube",
  "region": "europe",
  "cat": "river",
  "clues": [
   "This river begins in Germany's Black Forest and flows through or along the borders of ten countries.",
   "Four capital cities sit on its banks: Vienna, Bratislava, Budapest, and Belgrade.",
   "For the point, name this second-longest river in Europe, which ends in a huge delta on the Black Sea."
  ],
  "a": "Danube River",
  "alt": [
   "Danube",
   "Donau",
   "Duna",
   "Dunav",
   "Dunarea"
  ],
  "prompt": [],
  "t": 3,
  "x": "A famous waltz by the composer Johann Strauss II is named after this river.",
  "redset": "Danube + Vienna"
 },
 {
  "id": "europe-vienna",
  "region": "europe",
  "cat": "city",
  "clues": [
   "This city's Schönbrunn Palace grounds hold the oldest zoo in the world that is still open, founded in 1752.",
   "The composer Mozart spent the last ten years of his life here, and this city is famous for its coffeehouses and a chocolate cake called Sachertorte.",
   "For the point, name this capital of Austria on the Danube River."
  ],
  "a": "Vienna",
  "alt": [
   "Wien"
  ],
  "prompt": [],
  "t": 3,
  "x": "Vienna's zoo is home to giant pandas, and several panda cubs have been born there.",
  "redset": "Danube + Vienna"
 },
 {
  "id": "europe-rome",
  "region": "europe",
  "cat": "city",
  "clues": [
   "According to legend, this city was founded by twin brothers who were raised by a wolf, and it was built on seven hills beside the Tiber River.",
   "Visitors toss coins over their shoulders into its Trevi Fountain, and ancient gladiators fought in its giant arena, the Colosseum.",
   "For the point, name this capital of Italy."
  ],
  "a": "Rome",
  "alt": [
   "Roma"
  ],
  "prompt": [],
  "t": 1,
  "x": "About 3,000 euros are tossed into the Trevi Fountain each day, and the money goes to a charity that helps people in need.",
  "redset": "Rome / Trevi Fountain / Colosseum"
 },
 {
  "id": "europe-black-sea",
  "region": "europe",
  "cat": "water",
  "clues": [
   "Deep in this sea, the water has almost no oxygen, so very old shipwrecks have been found almost perfectly preserved on its floor.",
   "The Crimean Peninsula sticks out into this sea from the north, and the narrow Bosporus strait connects it to the Sea of Marmara.",
   "For the point, name this sea bordered by Turkey, Ukraine, Romania, and Bulgaria, whose name is a color."
  ],
  "a": "Black Sea",
  "alt": [
   "Euxine Sea"
  ],
  "prompt": [],
  "t": 3,
  "x": "This sea's water is only partly salty, and bottlenose dolphins swim in it.",
  "redset": "Black Sea + Crimea"
 },
 {
  "id": "europe-sicily",
  "region": "europe",
  "cat": "island",
  "clues": [
   "Ancient Greeks built the temples of the Valley of the Temples near Agrigento on this island.",
   "Mount Etna, one of the most active volcanoes in the world, towers over this island, which is separated from the 'toe' of Italy by the Strait of Messina.",
   "For the point, name this largest island in the Mediterranean Sea, whose capital is Palermo."
  ],
  "a": "Sicily",
  "alt": [
   "Sicilia"
  ],
  "prompt": [],
  "t": 3,
  "x": "A chestnut tree on the slopes of Mount Etna may be 2,000 to 4,000 years old, the oldest known chestnut tree in the world.",
  "redset": "Sicily"
 },
 {
  "id": "europe-iberian-peninsula",
  "region": "europe",
  "cat": "region",
  "clues": [
   "The Pyrenees Mountains separate this peninsula from France, and the British territory of Gibraltar sits near its southern tip.",
   "The Tagus, the longest river on this peninsula, flows west and empties into the Atlantic Ocean at Lisbon.",
   "For the point, name this peninsula in southwestern Europe that is home to Spain and Portugal."
  ],
  "a": "Iberian Peninsula",
  "alt": [
   "Iberia"
  ],
  "prompt": [],
  "t": 3,
  "x": "The endangered Iberian lynx, a wild cat with tufted ears, lives along the Tagus River.",
  "redset": "Iberian Peninsula"
 },
 {
  "id": "europe-oslo",
  "region": "europe",
  "cat": "city",
  "clues": [
   "This city's Holmenkollen ski jump has hosted ski-jumping contests since 1892.",
   "Its harbor is guarded by Akershus Fortress, a castle built around the year 1300, and the Nobel Peace Prize is handed out each December in its City Hall.",
   "For the point, name this capital of Norway."
  ],
  "a": "Oslo",
  "alt": [
   "Christiania",
   "Kristiania"
  ],
  "prompt": [],
  "t": 2,
  "x": "Oslo City Hall is built of big red bricks, and one of its towers holds a set of 49 bells.",
  "redset": "Oslo + Akershus Fortress"
 },
 {
  "id": "europe-schengen-area",
  "region": "europe",
  "cat": "concept",
  "clues": [
   "In 2025, Bulgaria and Romania became full members of this zone, while Ireland has chosen to stay out of it.",
   "Inside this zone, people can usually drive from one country to another, like France to Germany, without stopping to show a passport.",
   "For the point, name this European travel area named after a village in Luxembourg, where its first agreement was signed on a boat in 1985."
  ],
  "a": "Schengen Area",
  "alt": [
   "Schengen",
   "Schengen Zone",
   "Schengen Agreement"
  ],
  "prompt": [],
  "t": 4,
  "x": "More than 450 million people live inside this passport-free zone.",
  "redset": "Schengen Area"
 },
 {
  "id": "europe-stromboli",
  "region": "europe",
  "cat": "mountain",
  "clues": [
   "This volcano has been erupting almost nonstop for at least 2,000 years, usually with small bursts every few minutes to hours.",
   "It forms one of the seven Aeolian Islands north of Sicily, and a gentle, bursting type of eruption is named after it.",
   "For the point, name this Italian island volcano nicknamed the 'Lighthouse of the Mediterranean.'"
  ],
  "a": "Stromboli",
  "alt": [
   "Mount Stromboli",
   "Stromboli Island",
   "Stromboli volcano"
  ],
  "prompt": [],
  "t": 4,
  "x": "A stuffed, rolled-up bread called stromboli is named after this island.",
  "redset": "Stromboli"
 },
 {
  "id": "europe-naples",
  "region": "europe",
  "cat": "city",
  "clues": [
   "In 2017, UNESCO honored the bakers of this city for their special way of spinning dough and baking it in wood-fired ovens.",
   "Mount Vesuvius, the volcano that buried the ancient town of Pompeii, looms over this city's bay.",
   "For the point, name this city in southern Italy, often called the birthplace of pizza."
  ],
  "a": "Naples",
  "alt": [
   "Napoli"
  ],
  "prompt": [],
  "t": 3,
  "x": "About 3,000 pizza makers live and work in this city.",
  "redset": "Naples"
 },
 {
  "id": "europe-belgium",
  "region": "europe",
  "cat": "country",
  "clues": [
   "This country's Atomium is a giant steel model of an iron crystal, built for a World's Fair in 1958.",
   "The Flemish people of its northern region, Flanders, speak Dutch, while most people in its southern region, Wallonia, speak French.",
   "For the point, name this country famous for waffles and chocolate, with its capital at Brussels."
  ],
  "a": "Belgium",
  "alt": [
   "Kingdom of Belgium",
   "Belgie",
   "Belgique",
   "Belgien"
  ],
  "prompt": [],
  "t": 2,
  "x": "The Flemish flag shows a black lion with red claws on a yellow background.",
  "redset": "Flemish (people) / Belgium"
 },
 {
  "id": "europe-france",
  "region": "europe",
  "cat": "country",
  "clues": [
   "This country's Mont-Saint-Michel is an abbey perched on a rocky island surrounded by sandbanks and powerful tides.",
   "Its capital is home to the Eiffel Tower and the Louvre Museum, where the painting Mona Lisa hangs.",
   "For the point, name this European country whose capital is Paris."
  ],
  "a": "France",
  "alt": [
   "French Republic",
   "Republique francaise"
  ],
  "prompt": [],
  "t": 1,
  "x": "About three million people visit Mont-Saint-Michel every year.",
  "redset": ""
 },
 {
  "id": "europe-london",
  "region": "europe",
  "cat": "city",
  "clues": [
   "This city's Greenwich neighborhood is home to the Prime Meridian, the line of 0 degrees longitude.",
   "The famous bell called Big Ben rings in a clock tower at the Houses of Parliament, beside the River Thames.",
   "For the point, name this capital city of the United Kingdom."
  ],
  "a": "London",
  "alt": [
   "Greater London",
   "City of London"
  ],
  "prompt": [],
  "t": 2,
  "x": "London's Underground, nicknamed 'the Tube,' opened in 1863 as the world's first underground railway.",
  "redset": ""
 },
 {
  "id": "europe-germany",
  "region": "europe",
  "cat": "country",
  "clues": [
   "This country's Neuschwanstein Castle helped inspire Sleeping Beauty Castle at Disneyland and became a UNESCO World Heritage Site in 2025.",
   "Its city of Munich hosts the Oktoberfest festival, and its city of Cologne has a giant cathedral beside the Rhine River.",
   "For the point, name this European country whose capital is Berlin."
  ],
  "a": "Germany",
  "alt": [
   "Federal Republic of Germany",
   "Deutschland",
   "Bundesrepublik Deutschland"
  ],
  "prompt": [],
  "t": 3,
  "x": "A meteorite that fell near Neuschwanstein Castle in 2002 was named after the castle.",
  "redset": ""
 },
 {
  "id": "europe-spain",
  "region": "europe",
  "cat": "country",
  "clues": [
   "This country's highest mountain, Mount Teide, is a volcano on the island of Tenerife in its Canary Islands.",
   "In its city of Barcelona, the Sagrada Família church, begun in 1882, became the tallest church in the world in 2025.",
   "For the point, name this country that shares the Iberian Peninsula with Portugal and has its capital at Madrid."
  ],
  "a": "Spain",
  "alt": [
   "Kingdom of Spain",
   "Espana",
   "Reino de Espana"
  ],
  "prompt": [],
  "t": 3,
  "x": "The architect Antoni Gaudí, who worked on the Sagrada Família for most of his life, is buried inside it.",
  "redset": ""
 },
 {
  "id": "europe-athens",
  "region": "europe",
  "cat": "city",
  "clues": [
   "This city's port, Piraeus, is the largest port in its country and one of the busiest passenger ports in Europe.",
   "The first modern Olympic Games were held in this city in 1896.",
   "For the point, name this capital of Greece, where the Parthenon stands on top of the Acropolis."
  ],
  "a": "Athens",
  "alt": [
   "Athina",
   "Athinai"
  ],
  "prompt": [],
  "t": 2,
  "x": "During the 2004 Olympics, cruise ships parked at Piraeus were used as floating hotels.",
  "redset": ""
 },
 {
  "id": "europe-netherlands",
  "region": "europe",
  "cat": "country",
  "clues": [
   "About 26 percent of this country's land lies below sea level, protected by dikes and a huge set of storm barriers called the Delta Works.",
   "It is famous for windmills, wooden shoes, and colorful fields of tulips.",
   "For the point, name this European country, sometimes called Holland, whose capital is Amsterdam."
  ],
  "a": "Netherlands",
  "alt": [
   "The Netherlands",
   "Holland",
   "Kingdom of the Netherlands",
   "Nederland"
  ],
  "prompt": [],
  "t": 3,
  "x": "This country's water boards, which take care of dikes and canals, are among the oldest elected groups in the world; the first one appeared in 1196.",
  "redset": ""
 },
 {
  "id": "europe-iceland",
  "region": "europe",
  "cat": "island",
  "clues": [
   "The English word 'geyser' comes from this country's hot spring Geysir, and its nearby Strokkur geyser shoots water up every few minutes.",
   "Its Reynisfjara is a famous black sand beach, and the country has many glaciers and volcanoes.",
   "For the point, name this island nation in the North Atlantic whose capital is Reykjavík."
  ],
  "a": "Iceland",
  "alt": [
   "Republic of Iceland"
  ],
  "prompt": [],
  "t": 3,
  "x": "Reykjavík is the northernmost capital city of any country in the world.",
  "redset": ""
 },
 {
  "id": "europe-fjords",
  "region": "europe",
  "cat": "water",
  "clues": [
   "Norway's longest one stretches 205 kilometers inland and is more than 1,300 meters deep in places.",
   "These landforms were carved by giant glaciers during the Ice Age and then filled with seawater, leaving steep cliffs and waterfalls on both sides.",
   "For the point, name these long, narrow sea inlets that make Norway's coastline famous."
  ],
  "a": "Fjords",
  "alt": [
   "Fjord",
   "Fiord",
   "Fiords",
   "Norwegian fjords"
  ],
  "prompt": [
   "inlet",
   "sea inlet",
   "bay"
  ],
  "t": 3,
  "x": "The world's first battery-powered car ferry crosses Norway's longest fjord.",
  "redset": ""
 },
 {
  "id": "europe-alps",
  "region": "europe",
  "cat": "mountain",
  "clues": [
   "In 1991, hikers found a 5,300-year-old man nicknamed Ötzi the Iceman melting out of the ice in these mountains.",
   "The pointy Matterhorn, on the border of Switzerland and Italy, is one of the most famous peaks in this range.",
   "For the point, name this mountain range whose highest peak is Mont Blanc."
  ],
  "a": "Alps",
  "alt": [
   "The Alps",
   "Alps Mountains",
   "Alpine Mountains"
  ],
  "prompt": [],
  "t": 2,
  "x": "Ötzi's shoes were waterproof and stuffed with soft grass that worked like socks.",
  "redset": ""
 },
 {
  "id": "europe-volga",
  "region": "europe",
  "cat": "river",
  "clues": [
   "This river starts in the Valdai Hills northwest of Moscow and flows past the city of Kazan.",
   "It does not reach any ocean; instead, it empties into the Caspian Sea through a delta with about 500 channels.",
   "For the point, name this national river of Russia, the longest river in Europe."
  ],
  "a": "Volga River",
  "alt": [
   "Volga",
   "Itil",
   "Atil"
  ],
  "prompt": [],
  "t": 4,
  "x": "Russian songs and stories often call this river 'Mother Volga.'",
  "redset": ""
 },
 {
  "id": "africa-niger-river",
  "region": "africa",
  "cat": "river",
  "clues": [
   "This river begins in the Guinea Highlands only about 240 kilometers from the Atlantic Ocean, but it first flows away from the sea toward the Sahara.",
   "It makes a giant boomerang-shaped bend near the old desert city of Timbuktu, then turns southeast to the Gulf of Guinea.",
   "For the point, name this third-longest river in Africa, which shares its name with the country whose capital is Niamey."
  ],
  "a": "Niger River",
  "alt": [
   "Niger",
   "Joliba"
  ],
  "prompt": [],
  "t": 4,
  "x": "The country of Nigeria is also named after this river.",
  "redset": "Niger River"
 },
 {
  "id": "africa-kilimanjaro",
  "region": "africa",
  "cat": "mountain",
  "clues": [
   "This mountain is the largest free-standing volcanic mass in the world, and it has three main volcanic peaks named Kibo, Mawenzi, and Shira.",
   "Even though it is close to the equator, its top is capped with snow and glaciers, which are slowly shrinking.",
   "For the point, name this tallest mountain in Africa, found in Tanzania."
  ],
  "a": "Mount Kilimanjaro",
  "alt": [
   "Kilimanjaro",
   "Mt. Kilimanjaro",
   "Kili"
  ],
  "prompt": [],
  "t": 2,
  "x": "Some of the most famous views of this mountain are from Amboseli National Park in Kenya.",
  "redset": "Kilimanjaro / Tanzania"
 },
 {
  "id": "africa-sahel",
  "region": "africa",
  "cat": "region",
  "clues": [
   "Africa's Great Green Wall project aims to restore land and plant trees across this region to help stop deserts from spreading.",
   "Its name comes from an Arabic word meaning 'shore' or 'coast,' because it lies along the edge of a giant desert like a shore.",
   "For the point, name this dry belt of grassland that stretches across Africa just south of the Sahara."
  ],
  "a": "Sahel",
  "alt": [
   "The Sahel",
   "Sahel region"
  ],
  "prompt": [
   "savanna",
   "grassland"
  ],
  "t": 4,
  "x": "This region stretches about 5,900 kilometers, from the Atlantic Ocean all the way to the Red Sea.",
  "redset": "Sahel"
 },
 {
  "id": "africa-somalia",
  "region": "africa",
  "cat": "country",
  "clues": [
   "Cape Guardafui, the very tip of the Horn of Africa, is in this country, which has the longest coastline of any country on Africa's mainland.",
   "This country borders Djibouti, Ethiopia, and Kenya, and its coast faces the Gulf of Aden and the Indian Ocean.",
   "For the point, name this East African country whose capital is Mogadishu."
  ],
  "a": "Somalia",
  "alt": [
   "Federal Republic of Somalia",
   "Soomaaliya"
  ],
  "prompt": [],
  "t": 3,
  "x": "Sailors long ago gave Cape Guardafui a name meaning 'look and escape' because the seas there were so dangerous.",
  "redset": "Somalia"
 },
 {
  "id": "africa-lake-turkana",
  "region": "africa",
  "cat": "lake",
  "clues": [
   "Scientists have found fossils of early humans and their relatives around this lake, whose national parks are a UNESCO World Heritage Site.",
   "It is the largest desert lake in the world, and its islands are breeding grounds for Nile crocodiles.",
   "For the point, name this long lake in northern Kenya nicknamed the 'Jade Sea' for its jade-green color."
  ],
  "a": "Lake Turkana",
  "alt": [
   "Turkana",
   "Lake Rudolf",
   "Jade Sea"
  ],
  "prompt": [],
  "t": 4,
  "x": "The lake is about 249 kilometers long but only about 44 kilometers across at its widest point.",
  "redset": "Lake Turkana"
 },
 {
  "id": "africa-congo-rainforest",
  "region": "africa",
  "cat": "region",
  "clues": [
   "Okapis, which look like a mix of a giraffe and a zebra, and apes called bonobos live in this forest.",
   "This forest grows around a giant river that is the only major river to cross the equator twice.",
   "For the point, name this rainforest in central Africa, the second-largest tropical rainforest on Earth after the Amazon."
  ],
  "a": "Congo Rainforest",
  "alt": [
   "Congo Basin rainforest",
   "Congo Basin",
   "Congolian rainforests",
   "Congolian rainforest",
   "Congo jungle",
   "Congo"
  ],
  "prompt": [
   "rainforest",
   "jungle"
  ],
  "t": 3,
  "x": "Forest elephants and lowland gorillas live in this rainforest.",
  "redset": "Congo rainforests"
 },
 {
  "id": "africa-conflict-minerals",
  "region": "africa",
  "cat": "concept",
  "clues": [
   "Tin, tantalum, tungsten, and gold are the four main examples of these resources.",
   "A U.S. law passed in 2010 led to rules making many companies report whether their products use these, especially ones from the Democratic Republic of the Congo or nearby countries.",
   "For the point, name these minerals that are mined in places with fighting, where selling them can help pay for armed groups."
  ],
  "a": "Conflict minerals",
  "alt": [
   "Conflict mineral",
   "3TG",
   "Conflict resources"
  ],
  "prompt": [
   "minerals",
   "metals"
  ],
  "t": 5,
  "x": "Companies can call their products 'DRC conflict free' only after an outside check shows their minerals did not help armed groups.",
  "redset": "conflict minerals"
 },
 {
  "id": "africa-nile",
  "region": "africa",
  "cat": "river",
  "clues": [
   "This river's two main branches, the White and the Blue, meet at Khartoum, the capital of Sudan.",
   "Lake Nasser, one of the world's largest human-made lakes, formed on this river after the Aswan High Dam was built.",
   "For the point, name this river that flows north through Egypt, often called the longest river in the world."
  ],
  "a": "Nile River",
  "alt": [
   "Nile",
   "River Nile",
   "Al-Nil",
   "Bahr al-Nil"
  ],
  "prompt": [],
  "t": 2,
  "x": "Ancient Egyptians called their land 'the black land' after the dark mud this river's floods left behind.",
  "redset": ""
 },
 {
  "id": "africa-sahara",
  "region": "africa",
  "cat": "desert",
  "clues": [
   "This desert's highest point is Emi Koussi, a volcano in the Tibesti Mountains of Chad.",
   "Camels have carried goods across this desert for centuries, and some of its sand dunes rise more than 180 meters high.",
   "For the point, name this largest hot desert in the world, which covers much of North Africa."
  ],
  "a": "Sahara Desert",
  "alt": [
   "Sahara",
   "The Sahara",
   "Great Desert"
  ],
  "prompt": [
   "desert"
  ],
  "t": 1,
  "x": "The name of this desert comes from an Arabic word that simply means 'deserts.'",
  "redset": ""
 },
 {
  "id": "africa-kenya",
  "region": "africa",
  "cat": "country",
  "clues": [
   "This country's Lamu Old Town is the oldest and best-preserved Swahili settlement in East Africa.",
   "Each year, huge herds of wildebeest cross the Mara River into its Maasai Mara reserve during the Great Migration.",
   "For the point, name this East African country whose capital is Nairobi."
  ],
  "a": "Kenya",
  "alt": [
   "Republic of Kenya",
   "Jamhuri ya Kenya"
  ],
  "prompt": [],
  "t": 2,
  "x": "The colorful lilac-breasted roller is often called Kenya's national bird, even though it was never made official.",
  "redset": ""
 },
 {
  "id": "africa-south-africa",
  "region": "africa",
  "cat": "country",
  "clues": [
   "A flat-topped peak in this country, Table Mountain, is often covered by a 'tablecloth' of clouds.",
   "This country has three capital cities: Pretoria, Cape Town, and Bloemfontein.",
   "For the point, name this country at the southern tip of Africa, where Nelson Mandela became president in 1994."
  ],
  "a": "South Africa",
  "alt": [
   "Republic of South Africa",
   "RSA"
  ],
  "prompt": [],
  "t": 3,
  "x": "Table Mountain is the only land feature on Earth with a star constellation named after it, called Mensa.",
  "redset": ""
 },
 {
  "id": "africa-nigeria",
  "region": "africa",
  "cat": "country",
  "clues": [
   "This country's busy film industry, nicknamed Nollywood, makes movies in English and in languages like Yoruba, Igbo, and Hausa.",
   "With more than 230 million people, it has the largest population of any country in Africa, and its biggest city is Lagos.",
   "For the point, name this West African country whose capital is Abuja."
  ],
  "a": "Nigeria",
  "alt": [
   "Federal Republic of Nigeria",
   "Naija"
  ],
  "prompt": [],
  "t": 3,
  "x": "This country is named after the Niger River, which flows through it.",
  "redset": ""
 },
 {
  "id": "africa-morocco",
  "region": "africa",
  "cat": "country",
  "clues": [
   "This country's city of Fez is home to the University of al-Qarawiyyin, which UNESCO and Guinness World Records have called the oldest university in the world.",
   "The Atlas Mountains cross this country, and only about 14 kilometers of water, the Strait of Gibraltar, separate it from Spain.",
   "For the point, name this North African country whose capital is Rabat and whose biggest city is Casablanca."
  ],
  "a": "Morocco",
  "alt": [
   "Kingdom of Morocco",
   "Al-Maghrib",
   "Maroc"
  ],
  "prompt": [],
  "t": 3,
  "x": "The famous school in Fez was started in the 800s by a woman named Fatima al-Fihri.",
  "redset": ""
 },
 {
  "id": "africa-madagascar",
  "region": "africa",
  "cat": "island",
  "clues": [
   "This island's Avenue of the Baobabs is a dirt road lined with giant trees about 30 meters tall.",
   "Lemurs, a group of wide-eyed primates, are found naturally only on this island.",
   "For the point, name this island country off Africa's southeast coast, the fourth-largest island in the world."
  ],
  "a": "Madagascar",
  "alt": [
   "Republic of Madagascar",
   "Madagasikara"
  ],
  "prompt": [],
  "t": 2,
  "x": "Six of the world's eight kinds of baobab trees grow only in Madagascar.",
  "redset": ""
 },
 {
  "id": "latam-honduras",
  "region": "latam",
  "cat": "country",
  "clues": [
   "The ancient Maya city of Copán, famous for a giant stone staircase carved with writing, is in this country near Guatemala.",
   "Divers explore coral reefs around Roatán, the largest of this country's Bay Islands in the Caribbean Sea.",
   "For the point, name this Central American country that borders El Salvador and Nicaragua and has its capital at Tegucigalpa."
  ],
  "a": "Honduras",
  "alt": [
   "Honduras",
   "Republic of Honduras",
   "Republica de Honduras"
  ],
  "prompt": [],
  "t": 3,
  "x": "Honduras has coastlines on both the Caribbean Sea and the Pacific Ocean.",
  "redset": "Honduras borders El Salvador and Nicaragua; capital Tegucigalpa"
 },
 {
  "id": "latam-el-salvador",
  "region": "latam",
  "cat": "country",
  "clues": [
   "This country is so small that it is nicknamed Pulgarcito de América, or the 'Tom Thumb of the Americas.'",
   "It is the smallest country in Central America and the only one with no coastline on the Caribbean Sea.",
   "Pupusas, thick corn tortillas stuffed with cheese or beans, are a famous food from this country.",
   "For the point, name this Pacific coast country between Guatemala and Honduras whose capital is San Salvador."
  ],
  "a": "El Salvador",
  "alt": [
   "El Salvador",
   "Republic of El Salvador",
   "Republica de El Salvador"
  ],
  "prompt": [
   "Salvador"
  ],
  "t": 3,
  "x": "El Salvador uses the U.S. dollar as its everyday money.",
  "redset": "Honduras item (neighbor El Salvador)"
 },
 {
  "id": "latam-nicaragua",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Ometepe Island, made of two volcanoes, rises out of the biggest freshwater lake in Central America, which lies in this country.",
   "That giant lake is one of the very few freshwater lakes in the world where sharks live.",
   "For the point, name this largest country in Central America, whose capital is Managua."
  ],
  "a": "Nicaragua",
  "alt": [
   "Nicaragua",
   "Republic of Nicaragua"
  ],
  "prompt": [],
  "t": 3,
  "x": "Nicaragua's flag has blue and white stripes, much like the flags of its neighbors Honduras and El Salvador.",
  "redset": "Honduras item (neighbor Nicaragua)"
 },
 {
  "id": "latam-perito-moreno-glacier",
  "region": "latam",
  "cat": "landmark",
  "clues": [
   "Many times in the last hundred years, this ice mass has blocked an arm of Lake Argentino until the trapped water burst through it in a spectacular rupture.",
   "Visitors who come from the town of El Calafate stand on walkways to watch huge chunks of ice break off its tall front and splash into the lake.",
   "For the point, name this famous glacier in Argentina's Los Glaciares National Park, named after explorer Francisco Moreno."
  ],
  "a": "Perito Moreno Glacier",
  "alt": [
   "Perito Moreno Glacier",
   "Perito Moreno",
   "Glaciar Perito Moreno",
   "Moreno Glacier"
  ],
  "prompt": [
   "Los Glaciares",
   "Patagonia",
   "glacier"
  ],
  "t": 4,
  "x": "The glacier is fed by the Southern Patagonian Ice Field, one of the biggest stores of fresh water on Earth.",
  "redset": "Perito Moreno Glacier (Argentina)"
 },
 {
  "id": "latam-lake-titicaca",
  "region": "latam",
  "cat": "lake",
  "clues": [
   "The Uros people live on floating islands that they build from totora reeds on this body of water near the Peruvian town of Puno.",
   "This lake sits high in the Andes Mountains on the border between Peru and Bolivia.",
   "For the point, name this largest lake in South America by area."
  ],
  "a": "Lake Titicaca",
  "alt": [
   "Lake Titicaca",
   "Titicaca",
   "Lago Titicaca"
  ],
  "prompt": [],
  "t": 2,
  "x": "On Taquile Island in this lake, the men do the knitting, starting when they are about eight years old.",
  "redset": "Lake Titicaca, largest lake in South America by area"
 },
 {
  "id": "latam-cuba",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Isla de la Juventud, once called the Isle of Pines, is the second-largest island of this country.",
   "Colorful old American cars from the 1950s still drive past the seaside forts of this country's capital city.",
   "For the point, name this largest island in the Caribbean Sea, a country whose capital is Havana."
  ],
  "a": "Cuba",
  "alt": [
   "Cuba",
   "Republic of Cuba",
   "Republica de Cuba"
  ],
  "prompt": [],
  "t": 3,
  "x": "The bee hummingbird, the world's smallest bird, lives only in Cuba.",
  "redset": "Cuba, capital Havana"
 },
 {
  "id": "latam-saint-kitts-and-nevis",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Brimstone Hill Fortress, a UNESCO World Heritage Site built by the British, sits on a volcanic hill in this country.",
   "Alexander Hamilton, the Founding Father on the U.S. ten-dollar bill, was born on the smaller of its two islands.",
   "For the point, name this Caribbean country, the smallest in the Western Hemisphere, whose capital is Basseterre."
  ],
  "a": "Saint Kitts and Nevis",
  "alt": [
   "Saint Kitts and Nevis",
   "St. Kitts and Nevis",
   "St Kitts and Nevis",
   "Saint Christopher and Nevis",
   "Federation of Saint Kitts and Nevis"
  ],
  "prompt": [
   "Saint Kitts",
   "St. Kitts",
   "Nevis"
  ],
  "t": 4,
  "x": "Nevis got its name from a Spanish phrase about snow, because the clouds on its peak reminded someone of snow.",
  "redset": "Saint Kitts and Nevis"
 },
 {
  "id": "latam-mexico-city",
  "region": "latam",
  "cat": "city",
  "clues": [
   "The golden Angel of Independence statue stands on this city's Paseo de la Reforma, a grand avenue lined with monuments.",
   "This city was built on the ruins of Tenochtitlan, the Aztec capital that stood on an island in a lake.",
   "For the point, name this capital and largest city of Mexico."
  ],
  "a": "Mexico City",
  "alt": [
   "Mexico City",
   "Ciudad de Mexico",
   "CDMX",
   "Mexico D.F."
  ],
  "prompt": [
   "Mexico"
  ],
  "t": 3,
  "x": "Mexico City sits more than 7,000 feet above sea level, higher than Denver, Colorado.",
  "redset": "Paseo de la Reforma"
 },
 {
  "id": "latam-mexico",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Millions of monarch butterflies fly south each fall to spend the winter in fir forests in this country's mountains.",
   "The Maya pyramid called El Castillo stands at Chichén Itzá on this country's Yucatán Peninsula.",
   "The Rio Grande forms part of this country's border with Texas.",
   "For the point, name this country just south of the United States, whose capital is Mexico City."
  ],
  "a": "Mexico",
  "alt": [
   "Mexico",
   "United Mexican States",
   "Estados Unidos Mexicanos"
  ],
  "prompt": [],
  "t": 2,
  "x": "More people speak Spanish in Mexico than in any other country, even Spain.",
  "redset": ""
 },
 {
  "id": "latam-brazil",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Most of the Pantanal, the world's largest tropical wetland, lies in this country.",
   "Its city of Manaus sits deep in the Amazon rainforest, far up the Amazon River.",
   "This is the largest country in South America and the only one where Portuguese is the main language.",
   "For the point, name this country, home of Rio de Janeiro and its capital, Brasília."
  ],
  "a": "Brazil",
  "alt": [
   "Brazil",
   "Brasil",
   "Federative Republic of Brazil"
  ],
  "prompt": [],
  "t": 2,
  "x": "Brazil has won the men's soccer World Cup five times, more than any other country.",
  "redset": ""
 },
 {
  "id": "latam-rio-de-janeiro",
  "region": "latam",
  "cat": "city",
  "clues": [
   "In 1808 the Portuguese royal family moved to this city, which stayed its country's capital until 1960.",
   "A cable car carries visitors up Sugarloaf Mountain here, and the Christ the Redeemer statue looks down from Corcovado.",
   "For the point, name this Brazilian city famous for Carnival and Copacabana Beach, which hosted the 2016 Summer Olympics."
  ],
  "a": "Rio de Janeiro",
  "alt": [
   "Rio de Janeiro",
   "Rio"
  ],
  "prompt": [],
  "t": 3,
  "x": "Rio de Janeiro means 'River of January,' because Portuguese sailors arrived in January and thought its bay was a river.",
  "redset": ""
 },
 {
  "id": "latam-amazon-river",
  "region": "latam",
  "cat": "river",
  "clues": [
   "Near Manaus, the dark water of the Rio Negro meets this river's tan water, and the two flow side by side for miles without mixing.",
   "Pink river dolphins live in this river, which carries more water into the ocean than any other river on Earth.",
   "For the point, name this longest river in South America, which flows through the world's largest rainforest."
  ],
  "a": "Amazon River",
  "alt": [
   "Amazon River",
   "Amazon",
   "Rio Amazonas",
   "Amazonas"
  ],
  "prompt": [],
  "t": 2,
  "x": "The Amazon starts as tiny streams high in the Andes Mountains of Peru.",
  "redset": ""
 },
 {
  "id": "latam-andes",
  "region": "latam",
  "cat": "mountain",
  "clues": [
   "Because Earth bulges at the equator, the top of Chimborazo, a volcano in these mountains in Ecuador, is the farthest point from Earth's center.",
   "Llamas, alpacas and condors live in these mountains, where the Inca built roads, terraces and cities.",
   "For the point, name this longest mountain range on any continent, which runs down the western side of South America."
  ],
  "a": "Andes Mountains",
  "alt": [
   "Andes Mountains",
   "Andes",
   "Andean Mountains",
   "Cordillera de los Andes"
  ],
  "prompt": [],
  "t": 2,
  "x": "Aconcagua in Argentina is the tallest mountain in the Andes and in all of the Americas.",
  "redset": ""
 },
 {
  "id": "latam-buenos-aires",
  "region": "latam",
  "cat": "city",
  "clues": [
   "A tall white obelisk stands on this city's Avenida 9 de Julio, the widest avenue in the world.",
   "Brightly painted houses line this city's La Boca neighborhood, and the country's president works here in the Casa Rosada, or Pink House.",
   "For the point, name this capital of Argentina on the Río de la Plata."
  ],
  "a": "Buenos Aires",
  "alt": [
   "Buenos Aires"
  ],
  "prompt": [
   "Argentina"
  ],
  "t": 3,
  "x": "People from Buenos Aires are called porteños, which means 'people of the port.'",
  "redset": ""
 },
 {
  "id": "latam-chile",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Giant telescopes are built in this country's Atacama Desert, one of the driest places on Earth outside the poles.",
   "This country owns Easter Island, home of the giant stone statues called moai.",
   "For the point, name this long, skinny South American country whose capital is Santiago."
  ],
  "a": "Chile",
  "alt": [
   "Chile",
   "Republic of Chile"
  ],
  "prompt": [],
  "t": 2,
  "x": "Chile is more than 2,600 miles long but only about 110 miles wide on average.",
  "redset": ""
 },
 {
  "id": "latam-peru",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Giant drawings of a hummingbird, a monkey and a spider, called the Nazca Lines, are scratched into the desert of this country.",
   "The Inca built the mountaintop city of Machu Picchu in this country, not far from their old capital of Cusco.",
   "For the point, name this South American country whose capital is Lima."
  ],
  "a": "Peru",
  "alt": [
   "Peru",
   "Republic of Peru"
  ],
  "prompt": [],
  "t": 2,
  "x": "Potatoes were first grown as a crop in the Andes of southern Peru and northwestern Bolivia.",
  "redset": ""
 },
 {
  "id": "latam-colombia",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Caño Cristales, nicknamed the 'River of Five Colors,' turns bright red from underwater plants in this country.",
   "It is the only South American country with coastlines on both the Pacific Ocean and the Caribbean Sea.",
   "For the point, name this country famous for its coffee, whose capital is Bogotá."
  ],
  "a": "Colombia",
  "alt": [
   "Colombia",
   "Republic of Colombia"
  ],
  "prompt": [],
  "t": 3,
  "x": "Colombia is named after the explorer Christopher Columbus.",
  "redset": ""
 },
 {
  "id": "latam-panama-canal",
  "region": "latam",
  "cat": "landmark",
  "clues": [
   "Many ships on this waterway pass through the Miraflores and Gatún locks, which lift and lower them like water elevators.",
   "It opened in 1914, and a new, bigger set of locks opened in 2016 so giant cargo ships could fit.",
   "For the point, name this shortcut for world trade that crosses a narrow Central American country to connect the Atlantic and Pacific Oceans."
  ],
  "a": "Panama Canal",
  "alt": [
   "Panama Canal",
   "Canal de Panama"
  ],
  "prompt": [
   "Panama"
  ],
  "t": 3,
  "x": "Ships that use the canal skip a trip of thousands of miles around the southern tip of South America.",
  "redset": ""
 },
 {
  "id": "latam-galapagos-islands",
  "region": "latam",
  "cat": "island",
  "clues": [
   "Lonesome George, the last known Pinta Island tortoise, lived on these islands until he died in 2012.",
   "Charles Darwin studied finches and giant tortoises here in 1835, and marine iguanas that swim in the sea live nowhere else.",
   "For the point, name these Pacific islands that belong to Ecuador."
  ],
  "a": "Galápagos Islands",
  "alt": [
   "Galapagos Islands",
   "Galápagos Islands",
   "Galapagos",
   "Islas Galapagos",
   "Archipielago de Colon"
  ],
  "prompt": [
   "Ecuador"
  ],
  "t": 3,
  "x": "The islands' name comes from an old Spanish word for the giant tortoises that live there.",
  "redset": ""
 },
 {
  "id": "latam-venezuela",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Lake Maracaibo in this country is famous for the Catatumbo lightning, which flashes over the lake on many nights of the year.",
   "Angel Falls, the world's tallest uninterrupted waterfall, pours off a flat-topped mountain called a tepui in this country.",
   "For the point, name this northern South American country whose capital is Caracas."
  ],
  "a": "Venezuela",
  "alt": [
   "Venezuela",
   "Bolivarian Republic of Venezuela"
  ],
  "prompt": [],
  "t": 2,
  "x": "Angel Falls is named after Jimmie Angel, an American pilot who flew over it in 1933.",
  "redset": ""
 },
 {
  "id": "latam-jamaica",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Montego Bay and Ocho Rios are popular beach towns on this island's north side.",
   "A famous kind of coffee is grown in this island's Blue Mountains.",
   "Reggae music and the record-setting sprinter Usain Bolt both come from this island.",
   "For the point, name this Caribbean island country south of Cuba whose capital is Kingston."
  ],
  "a": "Jamaica",
  "alt": [
   "Jamaica"
  ],
  "prompt": [],
  "t": 2,
  "x": "Jamaica's black, green and gold flag is the only national flag with no red, white or blue.",
  "redset": ""
 },
 {
  "id": "latam-hispaniola",
  "region": "latam",
  "cat": "island",
  "clues": [
   "Lake Enriquillo, a salty lake where American crocodiles live, is the lowest point in the Caribbean and lies on this island.",
   "Pico Duarte, the tallest mountain in the Caribbean, also rises on this island.",
   "Christopher Columbus landed here in 1492, and it is the second-largest island in the Caribbean, after Cuba.",
   "For the point, name this island shared by Haiti and the Dominican Republic."
  ],
  "a": "Hispaniola",
  "alt": [
   "Hispaniola",
   "La Española",
   "La Espanola"
  ],
  "prompt": [
   "Dominican Republic",
   "Haiti"
  ],
  "t": 3,
  "x": "Santo Domingo, a city on this island, has the first cathedral ever built in the Americas.",
  "redset": ""
 },
 {
  "id": "world-equator",
  "region": "world",
  "cat": "concept",
  "clues": [
   "A monument called Mitad del Mundo, meaning 'Middle of the World,' was built near Quito to mark this line.",
   "Brazil, Kenya and Indonesia are all crossed by this line, which sits at zero degrees latitude.",
   "For the point, name this imaginary line that divides Earth into the Northern and Southern Hemispheres."
  ],
  "a": "Equator",
  "alt": [
   "Equator",
   "the Equator",
   "0 degrees latitude"
  ],
  "prompt": [
   "latitude"
  ],
  "t": 2,
  "x": "The country of Ecuador is named after the equator, because ecuador is the Spanish word for it.",
  "redset": ""
 },
 {
  "id": "world-international-date-line",
  "region": "world",
  "cat": "concept",
  "clues": [
   "At the end of 1994, the eastern islands of Kiribati skipped a day on the calendar so the whole country would be on the same side of this line.",
   "Samoa jumped across this line in 2011 by skipping December 30 on its calendar.",
   "For the point, name this line in the Pacific Ocean, mostly along 180 degrees longitude, where the date changes by one day."
  ],
  "a": "International Date Line",
  "alt": [
   "International Date Line",
   "Date Line",
   "IDL"
  ],
  "prompt": [
   "180th meridian",
   "antimeridian"
  ],
  "t": 4,
  "x": "Kiribati's Line Islands are among the first places on Earth to start each new day.",
  "redset": ""
 },
 {
  "id": "world-ring-of-fire",
  "region": "world",
  "cat": "concept",
  "clues": [
   "Deep ocean trenches, like the Mariana Trench, form along this belt where one tectonic plate slides beneath another.",
   "Mount Fuji in Japan and Mount St. Helens in Washington State are volcanoes in this zone.",
   "For the point, name this horseshoe-shaped zone of volcanoes and earthquakes around the Pacific Ocean that has a fiery name."
  ],
  "a": "Ring of Fire",
  "alt": [
   "Ring of Fire",
   "Pacific Ring of Fire",
   "Circum-Pacific Belt"
  ],
  "prompt": [],
  "t": 3,
  "x": "Most of the world's earthquakes happen along the Ring of Fire.",
  "redset": ""
 },
 {
  "id": "world-monsoon",
  "region": "world",
  "cat": "concept",
  "clues": [
   "The English name of this weather pattern comes from an Arabic word meaning 'season.'",
   "The village of Mawsynram in northeastern India, one of the rainiest places on Earth, gets most of its rain from it.",
   "In India, it brings heavy summer rains from the ocean that farmers need to grow rice.",
   "For the point, name this seasonal wind that brings a rainy season to South Asia."
  ],
  "a": "Monsoon",
  "alt": [
   "monsoon",
   "monsoons"
  ],
  "prompt": [
   "rainy season"
  ],
  "t": 3,
  "x": "Arizona and New Mexico have a summer monsoon too, which brings afternoon thunderstorms.",
  "redset": ""
 },
 {
  "id": "world-2026-fifa-world-cup",
  "region": "world",
  "cat": "current",
  "clues": [
   "Spain beat Argentina 1–0 in extra time to win this event's final, played at MetLife Stadium in New Jersey on July 19.",
   "For the first time, 48 teams took part, and Mexico City's Estadio Azteca hosted the opening match.",
   "For the point, name this soccer championship held in summer 2026 in the United States, Canada and Mexico."
  ],
  "a": "2026 FIFA World Cup",
  "alt": [
   "2026 FIFA World Cup",
   "World Cup",
   "FIFA World Cup",
   "2026 World Cup"
  ],
  "prompt": [
   "soccer",
   "FIFA"
  ],
  "t": 2,
  "x": "Mexico became the first country to host the men's World Cup three times.",
  "redset": ""
 },
 {
  "id": "world-milan",
  "region": "world",
  "cat": "current",
  "clues": [
   "Ice hockey games at the 2026 Winter Olympics were played in a brand-new arena in this city's Santa Giulia district.",
   "Leonardo da Vinci's painting The Last Supper is in this fashion capital, which has a huge cathedral called the Duomo.",
   "For the point, name this northern Italian city that co-hosted the 2026 Winter Olympics with Cortina d'Ampezzo."
  ],
  "a": "Milan",
  "alt": [
   "Milan",
   "Milano",
   "Milan-Cortina",
   "Milano Cortina"
  ],
  "prompt": [
   "Italy"
  ],
  "t": 3,
  "x": "Milan's cathedral took nearly 600 years to finish.",
  "redset": ""
 },
 {
  "id": "world-los-angeles",
  "region": "world",
  "cat": "current",
  "clues": [
   "Flag football and squash will make their Olympic debuts when this city hosts the Summer Games in 2028.",
   "It also hosted the Summer Olympics in 1932 and 1984, so it will join London and Paris as a three-time host.",
   "For the point, name this largest city in California, home of Hollywood."
  ],
  "a": "Los Angeles",
  "alt": [
   "Los Angeles",
   "LA",
   "L.A."
  ],
  "prompt": [
   "California",
   "Hollywood"
  ],
  "t": 2,
  "x": "Olympic swimming races in 2028 will be held inside SoFi Stadium, a football stadium, making it the biggest Olympic swimming venue ever.",
  "redset": ""
 },
 {
  "id": "world-equatorial-guinea",
  "region": "world",
  "cat": "current",
  "clues": [
   "In January 2026, this country's president signed a decree naming Ciudad de la Paz, a planned city still being built in the rainforest, as its capital.",
   "Its old capital, Malabo, sits on Bioko Island off the coast of Cameroon.",
   "For the point, name this small country on Africa's west coast, the only African country where Spanish is an official language."
  ],
  "a": "Equatorial Guinea",
  "alt": [
   "Equatorial Guinea",
   "Republic of Equatorial Guinea",
   "Guinea Ecuatorial"
  ],
  "prompt": [
   "Guinea"
  ],
  "t": 5,
  "x": "Ciudad de la Paz means 'City of Peace' in Spanish.",
  "redset": ""
 },
 {
  "id": "world-european-union",
  "region": "world",
  "cat": "concept",
  "clues": [
   "On January 1, 2026, Bulgaria became the 21st member of this group to start using its shared money, the euro.",
   "This group's flag shows a circle of twelve gold stars on a blue background.",
   "The United Kingdom left this group in 2020, a move nicknamed Brexit.",
   "For the point, name this group of 27 European countries with its headquarters in Brussels, Belgium."
  ],
  "a": "European Union",
  "alt": [
   "European Union",
   "EU"
  ],
  "prompt": [
   "Europe",
   "eurozone"
  ],
  "t": 3,
  "x": "Euro coins have one side that looks the same everywhere and another side with a design chosen by each country.",
  "redset": ""
 },
 {
  "id": "world-silk-road",
  "region": "world",
  "cat": "concept",
  "clues": [
   "The German geographer Ferdinand von Richthofen gave this route its popular name in 1877.",
   "Cities such as Samarkand in Uzbekistan grew rich as stops along this route, which Marco Polo followed to reach China.",
   "For the point, name this ancient network of trade routes between China and Europe, named after a soft, shiny cloth."
  ],
  "a": "Silk Road",
  "alt": [
   "Silk Road",
   "Silk Roads",
   "Silk Route"
  ],
  "prompt": [],
  "t": 3,
  "x": "Ideas such as papermaking spread from China to the west along this route.",
  "redset": ""
 },
 {
  "id": "world-black-sand-beaches",
  "region": "world",
  "cat": "concept",
  "clues": [
   "Reynisfjara in Iceland, which has tall columns of basalt rock on its shore, is a famous example of these.",
   "Green sea turtles often rest on one of these called Punaluʻu Beach on Hawaii's Big Island.",
   "For the point, name these beaches whose dark grains come from lava that cooled and broke into tiny pieces."
  ],
  "a": "Black sand beaches",
  "alt": [
   "black sand beaches",
   "black sand beach",
   "black sand",
   "volcanic sand beaches"
  ],
  "prompt": [
   "beaches",
   "sand"
  ],
  "t": 3,
  "x": "Black sand gets hotter in the sun than white sand, so it can feel very warm on bare feet.",
  "redset": "black sand beaches"
 },
 {
  "id": "world-estuary",
  "region": "world",
  "cat": "concept",
  "clues": [
   "The Chesapeake Bay is the largest of these in the United States.",
   "In these places, salty ocean water mixes with fresh river water to make 'brackish' water, where many young fish and crabs grow up.",
   "For the point, name this kind of body of water at the mouth of a river, where the river meets the sea."
  ],
  "a": "Estuary",
  "alt": [
   "estuary",
   "estuaries"
  ],
  "prompt": [
   "bay"
  ],
  "t": 4,
  "x": "The Hudson River in New York is an estuary for about 150 miles, so ocean tides push up it all the way to Troy.",
  "redset": "estuary"
 },
 {
  "id": "world-escarpment",
  "region": "world",
  "cat": "concept",
  "clues": [
   "The Dogon people of Mali built villages along the Bandiagara cliffs, a famous example of this landform.",
   "Niagara Falls pours over a long one of these that stretches from New York into Ontario, and part of Hamilton, Ontario, sits on top of it.",
   "For the point, name this kind of long, steep slope, sometimes called a scarp, that separates two areas of land at different heights."
  ],
  "a": "Escarpment",
  "alt": [
   "escarpment",
   "escarpments",
   "scarp"
  ],
  "prompt": [
   "cliff",
   "cliffs"
  ],
  "t": 4,
  "x": "People in Hamilton, Ontario, call the Niagara Escarpment 'the Mountain,' even though it is really a long cliff.",
  "redset": "escarpment"
 },
 {
  "id": "world-geyser",
  "region": "world",
  "cat": "concept",
  "clues": [
   "Steamboat, in Yellowstone National Park's Norris basin, is the tallest active one of these in the world.",
   "Strokkur in Iceland is one of these, and the most famous one in Yellowstone is called Old Faithful.",
   "For the point, name this kind of hot spring that shoots boiling water and steam high into the air."
  ],
  "a": "Geyser",
  "alt": [
   "geyser",
   "geysers"
  ],
  "prompt": [
   "hot spring"
  ],
  "t": 2,
  "x": "The word comes from Geysir, a hot spring in Iceland.",
  "redset": "geyser"
 },
 {
  "id": "us-new-orleans",
  "region": "us",
  "cat": "city",
  "clues": [
   "St. Louis Cathedral faces Jackson Square in this city's French Quarter, and a bend in the Mississippi River around it earned it the nickname 'Crescent City.'",
   "Louis Armstrong was born in this city, which is known as the birthplace of jazz music.",
   "For the point, name this largest city in Louisiana, famous for Creole and Cajun food and its big Mardi Gras parades."
  ],
  "a": "New Orleans",
  "alt": [
   "New Orleans",
   "NOLA",
   "Nouvelle-Orleans",
   "La Nouvelle-Orleans"
  ],
  "prompt": [
   "Louisiana"
  ],
  "t": 3,
  "x": "Much of New Orleans sits below sea level, so walls called levees help hold back the water.",
  "redset": "New Orleans: Louisiana city known for Cajun cuisine and Mardi Gras"
 },
 {
  "id": "us-san-andreas-fault",
  "region": "us",
  "cat": "landmark",
  "clues": [
   "The great 1906 San Francisco earthquake happened along this feature, which runs for hundreds of miles through California.",
   "Along this feature, the Pacific Plate slides past the North American Plate, slowly carrying Los Angeles closer to San Francisco.",
   "For the point, name this famous fault, a giant crack in Earth's crust, whose name starts with the word 'San.'"
  ],
  "a": "San Andreas Fault",
  "alt": [
   "San Andreas Fault",
   "San Andreas"
  ],
  "prompt": [
   "fault",
   "fault line",
   "plate boundary",
   "transform fault"
  ],
  "t": 4,
  "x": "On California's Carrizo Plain, you can see the fault from the air as a long, straight scar across the land.",
  "redset": "Tectonic plates under California slowly closing the distance between Los Angeles and San Francisco"
 },
 {
  "id": "us-lake-superior",
  "region": "us",
  "cat": "lake",
  "clues": [
   "Isle Royale, the largest island in this lake, is a national park, and the port of Duluth, Minnesota, sits at the lake's western tip.",
   "This lake drains into Lake Huron through the St. Marys River, and Thunder Bay, Ontario, lies on its northern shore.",
   "For the point, name this largest of the Great Lakes, the biggest freshwater lake in the world by area."
  ],
  "a": "Lake Superior",
  "alt": [
   "Lake Superior",
   "Superior",
   "Lac Superieur",
   "Gichigami"
  ],
  "prompt": [
   "Great Lakes"
  ],
  "t": 3,
  "x": "Lake Superior holds enough water to cover all of North and South America about one foot deep.",
  "redset": "Great Lakes; Lake Superior, the largest freshwater lake in the world"
 },
 {
  "id": "us-rocky-mountains",
  "region": "us",
  "cat": "mountain",
  "clues": [
   "Mount Elbert in Colorado is the highest peak of this mountain system, which also runs through Canada's Banff and Jasper National Parks.",
   "The Continental Divide follows these mountains, splitting rivers that flow toward the Pacific Ocean from rivers that flow the other way.",
   "For the point, name these mountains that stretch about 3,000 miles from Canada to New Mexico, nicknamed the 'Rockies.'"
  ],
  "a": "Rocky Mountains",
  "alt": [
   "Rocky Mountains",
   "Rockies",
   "the Rockies"
  ],
  "prompt": [],
  "t": 3,
  "x": "Mount Elbert is called the 'gentle giant' because hikers can walk all the way to its top without climbing ropes.",
  "redset": "The Rocky Mountains, the longest mountain system in North America"
 },
 {
  "id": "us-death-valley",
  "region": "us",
  "cat": "landmark",
  "clues": [
   "Rocks seem to slide across a dry lakebed called the Racetrack in this place, where Badwater Basin is the lowest point in North America.",
   "In 1913, Furnace Creek in this place hit 134 degrees Fahrenheit, the hottest air temperature ever recorded on Earth.",
   "For the point, name this very hot, dry national park in California whose name starts with the word 'Death.'"
  ],
  "a": "Death Valley National Park",
  "alt": [
   "Death Valley",
   "Death Valley National Park"
  ],
  "prompt": [
   "Mojave Desert",
   "Mojave"
  ],
  "t": 2,
  "x": "A story says Badwater Basin got its name when a surveyor's mule refused to drink the salty water there.",
  "redset": "Death Valley National Park in California once recorded the world's hottest temperature"
 },
 {
  "id": "us-cape-cod",
  "region": "us",
  "cat": "region",
  "clues": [
   "The Pilgrims on the Mayflower first saw the New World at this place in 1620 and signed the Mayflower Compact in the harbor at its tip.",
   "This hook-shaped peninsula has a National Seashore, and ferries carry visitors from it to the islands of Martha's Vineyard and Nantucket.",
   "For the point, name this cape in Massachusetts named after a kind of fish."
  ],
  "a": "Cape Cod",
  "alt": [
   "Cape Cod"
  ],
  "prompt": [
   "Massachusetts",
   "Provincetown"
  ],
  "t": 3,
  "x": "Since 1914, a canal has cut across the base of Cape Cod, so most of it is separated from the mainland.",
  "redset": "Cape Cod in Massachusetts is located across from Martha's Vineyard"
 },
 {
  "id": "us-charleston",
  "region": "us",
  "cat": "city",
  "clues": [
   "Rainbow Row is a line of brightly painted houses in this city, and a popular 1920s dance was named after it.",
   "This city sits where the Ashley and Cooper Rivers meet at its harbor, and the first shots of the Civil War were fired at nearby Fort Sumter.",
   "For the point, name this harbor city, the largest city in South Carolina."
  ],
  "a": "Charleston",
  "alt": [
   "Charleston",
   "Charleston, South Carolina",
   "Charles Town"
  ],
  "prompt": [],
  "t": 3,
  "x": "Charleston was first named Charles Town, after King Charles II of England.",
  "redset": "Charleston, on a namesake harbor, is the largest city by population in South Carolina"
 },
 {
  "id": "us-bryce-canyon",
  "region": "us",
  "cat": "landmark",
  "clues": [
   "Despite its name, this place is not really one canyon but a row of giant bowl-shaped amphitheaters on the edge of a plateau.",
   "This park in southern Utah has the world's largest collection of hoodoos, which are tall, thin spires of orange and pink rock.",
   "For the point, name this national park named for Ebenezer Bryce, a pioneer who lived nearby."
  ],
  "a": "Bryce Canyon National Park",
  "alt": [
   "Bryce Canyon",
   "Bryce Canyon National Park",
   "Bryce"
  ],
  "prompt": [
   "Utah"
  ],
  "t": 3,
  "x": "Bryce Canyon has some of the darkest night skies in the country, so visitors can see thousands of stars.",
  "redset": "Bryce Canyon National Park"
 },
 {
  "id": "us-arizona",
  "region": "us",
  "cat": "state",
  "clues": [
   "Stones from the old London Bridge were shipped from England and rebuilt into a bridge in this state's Lake Havasu City.",
   "Giant saguaro cactuses grow in this state's Sonoran Desert, and this state meets Utah, Colorado, and New Mexico at the Four Corners.",
   "For the point, name this 'Grand Canyon State,' whose capital is Phoenix."
  ],
  "a": "Arizona",
  "alt": [
   "Arizona",
   "AZ"
  ],
  "prompt": [],
  "t": 3,
  "x": "Most of Arizona does not change its clocks for daylight saving time.",
  "redset": "Arizona"
 },
 {
  "id": "us-hollywood",
  "region": "us",
  "cat": "city",
  "clues": [
   "More than 2,800 stars honoring famous entertainers are set into the sidewalks of this district's Walk of Fame.",
   "A giant white sign with nine tall letters stands on Mount Lee, high above this district.",
   "For the point, name this part of Los Angeles that is famous as the home of the American movie industry."
  ],
  "a": "Hollywood",
  "alt": [
   "Hollywood",
   "Hollywood, Los Angeles",
   "Hollywood, California"
  ],
  "prompt": [
   "Los Angeles",
   "LA"
  ],
  "t": 2,
  "x": "The famous sign first spelled 'HOLLYWOODLAND' to sell houses, and the last four letters were taken down in 1949.",
  "redset": "Hollywood"
 },
 {
  "id": "us-arkansas",
  "region": "us",
  "cat": "state",
  "clues": [
   "Visitors can dig for real diamonds and keep what they find at Crater of Diamonds State Park in this state.",
   "Hot Springs National Park and part of the Ozark Mountains are in this state, which lies across the Mississippi River from Tennessee and Mississippi.",
   "For the point, name this state with its capital at Little Rock, whose name ends in a silent 's.'"
  ],
  "a": "Arkansas",
  "alt": [
   "Arkansas",
   "AR"
  ],
  "prompt": [],
  "t": 3,
  "x": "The biggest diamond ever dug up in the U.S., the 40-carat 'Uncle Sam,' came from Crater of Diamonds.",
  "redset": "Arkansas"
 },
 {
  "id": "us-apostle-islands",
  "region": "us",
  "cat": "island",
  "clues": [
   "An expert once called this place's collection of old lighthouses the largest and finest in the country.",
   "In very cold winters, people have walked across the frozen lake to see icy sea caves near this group of 21 islands.",
   "For the point, name this island group in Lake Superior off northern Wisconsin, whose name is also a word for the twelve followers of Jesus."
  ],
  "a": "Apostle Islands",
  "alt": [
   "Apostle Islands",
   "Apostle Islands National Lakeshore",
   "Apostles"
  ],
  "prompt": [
   "Wisconsin"
  ],
  "t": 4,
  "x": "Campers can pitch tents on 18 of the 21 Apostle Islands.",
  "redset": "Apostle Islands"
 },
 {
  "id": "us-mystic-connecticut",
  "region": "us",
  "cat": "city",
  "clues": [
   "The Charles W. Morgan, a whaling ship built in 1841 and the oldest merchant ship in the country, is kept at this village's seaport museum.",
   "This village lies on both sides of a river with the same name, and its aquarium is famous for beluga whales.",
   "For the point, name this seaside village in Connecticut whose name is a word that can mean 'mysterious.'"
  ],
  "a": "Mystic, Connecticut",
  "alt": [
   "Mystic",
   "Mystic, Connecticut",
   "Mystic CT"
  ],
  "prompt": [
   "Groton",
   "Stonington",
   "Connecticut"
  ],
  "t": 4,
  "x": "Mystic Seaport is the largest museum about ships and the sea in the United States.",
  "redset": "Mystic, Connecticut"
 },
 {
  "id": "us-olympic-peninsula",
  "region": "us",
  "cat": "region",
  "clues": [
   "The Hoh Rain Forest, which gets about 140 inches of rain and snow each year, grows on this piece of land.",
   "This land sits across the Strait of Juan de Fuca from Canada's Vancouver Island, with the Pacific Ocean to its west and Puget Sound to its east.",
   "For the point, name this peninsula in Washington state, home to Olympic National Park and its tallest peak, Mount Olympus."
  ],
  "a": "Olympic Peninsula",
  "alt": [
   "Olympic Peninsula"
  ],
  "prompt": [
   "Olympic National Park",
   "Washington"
  ],
  "t": 4,
  "x": "Banana slugs crawl across the mossy floor of the Hoh Rain Forest.",
  "redset": "Olympic Peninsula"
 },
 {
  "id": "us-yellowstone",
  "region": "us",
  "cat": "landmark",
  "clues": [
   "This park's Grand Prismatic Spring is its largest hot spring, with rings of rainbow colors made by tiny living things.",
   "This park has more geysers than anywhere else on Earth, including Old Faithful, which erupts about 17 times a day.",
   "For the point, name this national park, mostly in Wyoming, that became America's first national park in 1872."
  ],
  "a": "Yellowstone National Park",
  "alt": [
   "Yellowstone",
   "Yellowstone National Park"
  ],
  "prompt": [
   "Wyoming"
  ],
  "t": 2,
  "x": "Steamboat Geyser in Yellowstone is the largest geyser in the world and can shoot water 300 to 400 feet high.",
  "redset": "geyser"
 },
 {
  "id": "us-alaska",
  "region": "us",
  "cat": "state",
  "clues": [
   "The Iditarod sled dog race crosses about 1,000 miles of this state, and the Bering Strait separates it from Russia.",
   "North America's tallest mountain, known as both Denali and Mount McKinley, rises in this state.",
   "For the point, name this largest U.S. state, with its capital at Juneau."
  ],
  "a": "Alaska",
  "alt": [
   "Alaska",
   "AK"
  ],
  "prompt": [],
  "t": 1,
  "x": "Alaska is more than twice as big as Texas.",
  "redset": ""
 },
 {
  "id": "us-hawaii",
  "region": "us",
  "cat": "state",
  "clues": [
   "Measured from its base on the ocean floor, this state's Mauna Kea is taller than Mount Everest.",
   "Kilauea, one of the world's most active volcanoes, erupts on this state's Big Island, and Pearl Harbor is on its island of Oahu.",
   "For the point, name this island state in the Pacific Ocean, with its capital at Honolulu."
  ],
  "a": "Hawaii",
  "alt": [
   "Hawaii",
   "Hawai'i",
   "HI"
  ],
  "prompt": [],
  "t": 2,
  "x": "Hawaii became the 50th and newest U.S. state in 1959.",
  "redset": ""
 },
 {
  "id": "us-texas",
  "region": "us",
  "cat": "state",
  "clues": [
   "Big Bend National Park in this state sits inside a giant curve of the Rio Grande, which forms the state's border with Mexico.",
   "The Alamo, a famous old Spanish mission, stands in this state's city of San Antonio.",
   "For the point, name this 'Lone Star State,' the second-largest state in area and population, home to Houston and its capital, Austin."
  ],
  "a": "Texas",
  "alt": [
   "Texas",
   "TX"
  ],
  "prompt": [],
  "t": 3,
  "x": "Texas was its own country, the Republic of Texas, before it joined the United States in 1845.",
  "redset": ""
 },
 {
  "id": "us-florida",
  "region": "us",
  "cat": "state",
  "clues": [
   "Fort Jefferson, the largest brick-and-stone fort in the Western Hemisphere, stands on an island in this state's Dry Tortugas National Park.",
   "Alligators swim through this state's Everglades, a huge wetland nicknamed the 'River of Grass.'",
   "For the point, name this 'Sunshine State,' a peninsula that is home to Miami and Orlando."
  ],
  "a": "Florida",
  "alt": [
   "Florida",
   "FL"
  ],
  "prompt": [],
  "t": 2,
  "x": "Key West, Florida, is the southernmost city in the lower 48 states.",
  "redset": ""
 },
 {
  "id": "us-california",
  "region": "us",
  "cat": "state",
  "clues": [
   "Mount Whitney, the highest peak in the lower 48 states, rises in this state, and Redwood National Park protects some of the tallest trees on Earth.",
   "The huge granite cliffs Half Dome and El Capitan tower over Yosemite Valley in this state.",
   "For the point, name this most populous U.S. state, whose capital is Sacramento and whose biggest city is Los Angeles."
  ],
  "a": "California",
  "alt": [
   "California",
   "CA"
  ],
  "prompt": [],
  "t": 3,
  "x": "A grizzly bear appears on California's state flag.",
  "redset": ""
 },
 {
  "id": "us-washington-state",
  "region": "us",
  "cat": "state",
  "clues": [
   "Mount Rainier in this state is covered by more glacier ice than any other peak in the lower 48 states, and this state's Mount St. Helens blew its top in a huge eruption in 1980.",
   "The Space Needle towers over this state's largest city, Seattle, and the Columbia River forms much of its border with Oregon.",
   "For the point, name this 'Evergreen State' in the Pacific Northwest, named after the first U.S. president."
  ],
  "a": "Washington",
  "alt": [
   "Washington",
   "Washington state",
   "WA"
  ],
  "prompt": [],
  "t": 2,
  "x": "Washington's capital is Olympia, not its biggest city, Seattle.",
  "redset": ""
 },
 {
  "id": "us-mississippi-river",
  "region": "us",
  "cat": "river",
  "clues": [
   "This river begins at Lake Itasca in Minnesota, where visitors can walk across it on stepping stones.",
   "Mark Twain once worked as a steamboat pilot on this river, and the Gateway Arch in St. Louis rises beside it.",
   "For the point, name this great river that flows south past New Orleans and shares its name with a state."
  ],
  "a": "Mississippi River",
  "alt": [
   "Mississippi River",
   "Mississippi",
   "Old Man River"
  ],
  "prompt": [],
  "t": 3,
  "x": "Rain that falls in parts of 31 states drains into the Mississippi River.",
  "redset": ""
 },
 {
  "id": "us-chicago",
  "region": "us",
  "cat": "city",
  "clues": [
   "This city's Willis Tower, once called the Sears Tower, was the world's tallest building when it was finished.",
   "A shiny sculpture nicknamed 'The Bean' sits in this city's Millennium Park, and every year the city dyes its river green for St. Patrick's Day.",
   "For the point, name this 'Windy City' on Lake Michigan, the largest city in Illinois."
  ],
  "a": "Chicago",
  "alt": [
   "Chicago"
  ],
  "prompt": [
   "Illinois"
  ],
  "t": 3,
  "x": "In 1900, Chicago made its river flow backward, away from Lake Michigan.",
  "redset": ""
 },
 {
  "id": "us-washington-dc",
  "region": "us",
  "cat": "city",
  "clues": [
   "Pierre L'Enfant drew the plan for this city, which sits where the Anacostia River meets the Potomac River.",
   "The Lincoln Memorial and the Smithsonian museums line this city's National Mall, and the president lives here in the White House.",
   "For the point, name this capital of the United States, which is not part of any state."
  ],
  "a": "Washington, D.C.",
  "alt": [
   "Washington, D.C.",
   "Washington DC",
   "District of Columbia",
   "D.C.",
   "DC"
  ],
  "prompt": [
   "Washington"
  ],
  "t": 1,
  "x": "The letters D.C. stand for District of Columbia.",
  "redset": ""
 },
 {
  "id": "us-boston",
  "region": "us",
  "cat": "city",
  "clues": [
   "A red line on the sidewalks of this city marks the 2.5-mile Freedom Trail, which connects 16 historic sites.",
   "Colonists dumped British tea into this city's harbor in 1773, and its Fenway Park is the oldest Major League Baseball stadium still in use.",
   "For the point, name this capital and largest city of Massachusetts."
  ],
  "a": "Boston",
  "alt": [
   "Boston"
  ],
  "prompt": [
   "Massachusetts"
  ],
  "t": 3,
  "x": "Boston Common, started in 1634, is the oldest city park in the United States.",
  "redset": ""
 },
 {
  "id": "us-puerto-rico",
  "region": "us",
  "cat": "island",
  "clues": [
   "El Yunque, the only tropical rainforest in the U.S. National Forest System, is on this island.",
   "Tiny glowing plankton light up Mosquito Bay on this place's island of Vieques, and the old fort of El Morro guards its capital, San Juan.",
   "For the point, name this Spanish-speaking Caribbean island, a U.S. territory that is not a state."
  ],
  "a": "Puerto Rico",
  "alt": [
   "Puerto Rico",
   "Commonwealth of Puerto Rico",
   "Borinquen",
   "Boriken"
  ],
  "prompt": [],
  "t": 3,
  "x": "The coqui, a tiny frog that sings 'ko-KEE' at night, is a symbol of Puerto Rico.",
  "redset": ""
 },
 {
  "id": "canada-baffin-island",
  "region": "canada",
  "cat": "island",
  "clues": [
   "Mount Thor, a peak with a giant sheer cliff, is named for the Norse god of thunder and stands in this island's Auyuittuq National Park.",
   "Iqaluit, the capital of Nunavut, sits on this island's Frobisher Bay, and this is the fifth-largest island in the world.",
   "For the point, name this largest island in Canada, named after the English explorer William Baffin."
  ],
  "a": "Baffin Island",
  "alt": [
   "Baffin Island",
   "Baffin",
   "Qikiqtaaluk"
  ],
  "prompt": [
   "Nunavut"
  ],
  "t": 3,
  "x": "In the Inuktitut language, the island's name Qikiqtaaluk means 'very big island.'",
  "redset": "The largest island of Canada is Baffin Island"
 },
 {
  "id": "canada-newfoundland-and-labrador",
  "region": "canada",
  "cat": "province",
  "clues": [
   "L'Anse aux Meadows, the only known Viking settlement in North America outside Greenland, is in this province.",
   "This province's capital, St. John's, is the easternmost city in Canada, and icebergs often float past its coast in spring.",
   "For the point, name this Atlantic province made of a large island and a mainland region called Labrador."
  ],
  "a": "Newfoundland and Labrador",
  "alt": [
   "Newfoundland and Labrador",
   "Newfoundland",
   "NL",
   "Terre-Neuve-et-Labrador"
  ],
  "prompt": [
   "Labrador"
  ],
  "t": 3,
  "x": "Newfoundland and Labrador was the last province to join Canada, in 1949.",
  "redset": "The island of Newfoundland forms a Canadian province with the region of Labrador"
 },
 {
  "id": "canada-ontario",
  "region": "canada",
  "cat": "province",
  "clues": [
   "Polar bears roam this province's Polar Bear Provincial Park, on the coast where James Bay meets Hudson Bay.",
   "This province borders four of the five Great Lakes, and it contains both Canada's capital, Ottawa, and its largest city, Toronto.",
   "For the point, name this most populous Canadian province, which shares its name with one of the Great Lakes."
  ],
  "a": "Ontario",
  "alt": [
   "Ontario",
   "ON"
  ],
  "prompt": [],
  "t": 2,
  "x": "Almost all of Ontario's border with the United States runs along rivers and lakes.",
  "redset": ""
 },
 {
  "id": "canada-quebec",
  "region": "canada",
  "cat": "province",
  "clues": [
   "Percé Rock, a huge rock in the sea with an arch cut through it, stands off the tip of this province's Gaspé Peninsula.",
   "This is Canada's largest province by area, and its biggest city, Montreal, is on an island in the St. Lawrence River.",
   "For the point, name this mostly French-speaking province whose capital city has the same name."
  ],
  "a": "Quebec",
  "alt": [
   "Quebec",
   "Québec",
   "QC"
  ],
  "prompt": [],
  "t": 2,
  "x": "Quebec is famous for making maple syrup.",
  "redset": ""
 },
 {
  "id": "canada-british-columbia",
  "region": "canada",
  "cat": "province",
  "clues": [
   "Carved cedar poles stand among the ruins of an old Haida village on the island of SGang Gwaay, off this province's coast.",
   "This province's largest city, Vancouver, is a busy Pacific port, but its capital, Victoria, is on Vancouver Island.",
   "For the point, name this westernmost Canadian province, often called 'B.C.'"
  ],
  "a": "British Columbia",
  "alt": [
   "British Columbia",
   "BC",
   "B.C.",
   "Colombie-Britannique"
  ],
  "prompt": [],
  "t": 2,
  "x": "Vancouver hosted the Winter Olympics in 2010.",
  "redset": ""
 },
 {
  "id": "canada-alberta",
  "region": "canada",
  "cat": "province",
  "clues": [
   "More than 150 complete dinosaur skeletons have come from Dinosaur Provincial Park in this province.",
   "Lake Louise and Banff National Park sit in the Rocky Mountains in this province, and its city of Calgary holds a giant rodeo called the Stampede.",
   "For the point, name this province between British Columbia and Saskatchewan, with its capital at Edmonton."
  ],
  "a": "Alberta",
  "alt": [
   "Alberta",
   "AB"
  ],
  "prompt": [],
  "t": 3,
  "x": "The Calgary Stampede calls itself 'The Greatest Outdoor Show on Earth.'",
  "redset": ""
 },
 {
  "id": "canada-nunavut",
  "region": "canada",
  "cat": "region",
  "clues": [
   "This place's flag shows a red inuksuk, a stone landmark shaped like a person, and a blue star for the North Star.",
   "Most people here are Inuit, and its capital, Iqaluit, is on Baffin Island.",
   "For the point, name this largest Canadian territory, created in 1999, whose name means 'our land' in Inuktitut."
  ],
  "a": "Nunavut",
  "alt": [
   "Nunavut",
   "NU"
  ],
  "prompt": [],
  "t": 3,
  "x": "Nunavut was carved out of the Northwest Territories, the first change to Canada's map since 1949.",
  "redset": ""
 },
 {
  "id": "canada-toronto",
  "region": "canada",
  "cat": "city",
  "clues": [
   "This city's Rogers Centre was the first stadium with a roof that fully opens and closes, and its Hockey Hall of Fame displays the Stanley Cup.",
   "The CN Tower, the tallest free-standing structure in the Western Hemisphere, rises over this city on the shore of Lake Ontario.",
   "For the point, name this largest city in Canada, the capital of Ontario."
  ],
  "a": "Toronto",
  "alt": [
   "Toronto"
  ],
  "prompt": [
   "Ontario"
  ],
  "t": 3,
  "x": "The CN Tower was the world's tallest free-standing structure for 32 years.",
  "redset": ""
 },
 {
  "id": "canada-ottawa",
  "region": "canada",
  "cat": "city",
  "clues": [
   "In cold winters, part of the Rideau Canal in this city becomes the world's largest naturally frozen skating rink.",
   "This city's Parliament Hill overlooks a river with the same name, which separates it from the province of Quebec.",
   "For the point, name this city in Ontario, the capital of Canada."
  ],
  "a": "Ottawa",
  "alt": [
   "Ottawa"
  ],
  "prompt": [],
  "t": 2,
  "x": "Skaters on the Rideau Canal can buy a fried-dough treat called a BeaverTail.",
  "redset": ""
 },
 {
  "id": "canada-niagara-falls",
  "region": "canada",
  "cat": "landmark",
  "clues": [
   "On her 63rd birthday in 1901, schoolteacher Annie Edson Taylor became the first person to survive a trip over this place in a barrel.",
   "This place is made of three parts: the Horseshoe Falls, the American Falls, and the Bridal Veil Falls.",
   "For the point, name these famous waterfalls on the border between Ontario and New York."
  ],
  "a": "Niagara Falls",
  "alt": [
   "Niagara Falls",
   "Niagara"
  ],
  "prompt": [
   "Horseshoe Falls",
   "American Falls"
  ],
  "t": 2,
  "x": "Annie Edson Taylor sent a cat over the falls in her barrel two days before her own trip, and the cat survived.",
  "redset": ""
 },
 {
  "id": "asia-philippines",
  "region": "asia",
  "cat": "country",
  "clues": [
   "This country's Chocolate Hills, on the island of Bohol, are covered in grass that turns chocolate-brown in the dry season.",
   "Its Mayon Volcano is famous for its \"perfect cone,\" and the tiny tarsier, one of the world's smallest primates, lives in its forests.",
   "For the point, name this Southeast Asian country made of more than 7,000 islands, with its capital at Manila."
  ],
  "a": "Philippines",
  "alt": [
   "Philippines",
   "The Philippines",
   "Republic of the Philippines",
   "Pilipinas",
   "Filipinas"
  ],
  "prompt": [],
  "t": 3,
  "x": "The Philippines has the fifth-longest coastline of any country in the world.",
  "redset": "Philippines / Manila (many islands, capital Manila)"
 },
 {
  "id": "asia-yangtze",
  "region": "asia",
  "cat": "river",
  "clues": [
   "This river rises in the Tanggula Mountains of the Tibetan Plateau and later flows past the huge city of Chongqing.",
   "The world's largest power plant by capacity, the Three Gorges Dam, blocks this river, and the rare Chinese alligator lives along it.",
   "For the point, name this longest river in China, which empties into the East China Sea at Shanghai."
  ],
  "a": "Yangtze River",
  "alt": [
   "Yangtze",
   "Yangtze River",
   "Yangzi",
   "Yangzi River",
   "Chang Jiang",
   "Changjiang",
   "Chang River"
  ],
  "prompt": [],
  "t": 3,
  "x": "The Yangtze is the third-longest river in the whole world, after the Nile and the Amazon.",
  "redset": "Yangtze (longest river in China)"
 },
 {
  "id": "asia-bangkok",
  "region": "asia",
  "cat": "city",
  "clues": [
   "Guinness World Records lists this city's full ceremonial name, 168 letters long, as the longest place name in the world.",
   "The Temple of Dawn, or Wat Arun, stands on the west bank of the Chao Phraya River in this city, whose Grand Palace holds the Emerald Buddha.",
   "For the point, name this capital of Thailand, once called the \"Venice of the East\" for its many canals."
  ],
  "a": "Bangkok",
  "alt": [
   "Bangkok",
   "Krung Thep",
   "Krung Thep Maha Nakhon"
  ],
  "prompt": [],
  "t": 3,
  "x": "Bangkok was built in the delta of the Chao Phraya River on land that was once swampy.",
  "redset": "Bangkok + Chao Phraya River delta"
 },
 {
  "id": "asia-jerusalem",
  "region": "asia",
  "cat": "city",
  "clues": [
   "In 1535, the Ottoman sultan Suleiman the Magnificent ordered the ruined walls around this city to be rebuilt.",
   "This city's Old City is divided into Muslim, Christian, Armenian, and Jewish quarters and contains the Dome of the Rock and the Church of the Holy Sepulchre.",
   "For the point, name this ancient city, home to the Western Wall, that is holy to Jews, Christians, and Muslims."
  ],
  "a": "Jerusalem",
  "alt": [
   "Jerusalem",
   "Yerushalayim",
   "Al-Quds",
   "Al Quds"
  ],
  "prompt": [],
  "t": 3,
  "x": "UNESCO counts about 220 historic monuments in Jerusalem's Old City.",
  "redset": "Jerusalem (holy to Judaism, Islam, and Christianity)"
 },
 {
  "id": "asia-borneo",
  "region": "asia",
  "cat": "island",
  "clues": [
   "Indonesia's planned future capital, Nusantara, is being built on this island.",
   "This island's highest point, Mount Kinabalu, rises in the Malaysian state of Sabah, and endangered orangutans live in its rainforests.",
   "For the point, name this third-largest island in the world, which is shared by Indonesia, Malaysia, and Brunei."
  ],
  "a": "Borneo",
  "alt": [
   "Borneo",
   "Pulau Borneo"
  ],
  "prompt": [],
  "t": 3,
  "x": "Borneo is bigger than the U.S. state of Texas.",
  "redset": "Borneo (shared by Indonesia, Brunei, Malaysia)"
 },
 {
  "id": "asia-istanbul",
  "region": "asia",
  "cat": "city",
  "clues": [
   "This city's Grand Bazaar is one of the largest and oldest covered markets in the world, with more than 4,000 shops.",
   "The Blue Mosque stands across from the Hagia Sophia, a giant domed building completed in the year 537, in this city.",
   "For the point, name this largest city of Turkey, which sits on both sides of the Bosporus Strait."
  ],
  "a": "Istanbul",
  "alt": [
   "Istanbul",
   "Constantinople"
  ],
  "prompt": [],
  "t": 3,
  "x": "Istanbul was once called Byzantium and later Constantinople.",
  "redset": "Istanbul + Hagia Sophia"
 },
 {
  "id": "asia-riyadh",
  "region": "asia",
  "cat": "city",
  "clues": [
   "The mud-brick ruins of At-Turaif, a UNESCO World Heritage Site, lie in Diriyah on this city's northwestern edge.",
   "This city's Kingdom Centre skyscraper has a sky bridge across its top, and this city was chosen to host the World Expo in 2030.",
   "For the point, name this desert city, the capital and largest city of Saudi Arabia."
  ],
  "a": "Riyadh",
  "alt": [
   "Riyadh",
   "Ar Riyad",
   "Ar-Riyad"
  ],
  "prompt": [],
  "t": 4,
  "x": "Riyadh is the largest city on the whole Arabian Peninsula.",
  "redset": "Riyadh (Terms for Further Study)"
 },
 {
  "id": "asia-red-river",
  "region": "asia",
  "cat": "river",
  "clues": [
   "This river begins in the mountains of China's Yunnan province and flows southeast into the Gulf of Tonkin.",
   "Water puppet shows began in the rice paddies of its delta, and legend says a king saw a dragon rising from it at the site of Hanoi.",
   "For the point, name this river of northern Vietnam, named for the reddish-brown silt it carries."
  ],
  "a": "Red River",
  "alt": [
   "Red River",
   "Hong River",
   "Song Hong",
   "Yuan River",
   "Yuan Jiang"
  ],
  "prompt": [],
  "t": 4,
  "x": "The Red River is about 1,149 kilometers (714 miles) long.",
  "redset": "Red River (Asia) (Terms for Further Study)"
 },
 {
  "id": "asia-osaka",
  "region": "asia",
  "cat": "city",
  "clues": [
   "This city hosted the 2025 World Expo on Yumeshima, a man-made island.",
   "Takoyaki, or octopus balls, were first made popular in this city, whose Dotonbori district glows with a giant billboard of a running man.",
   "For the point, name this city, home to Universal Studios Japan, that is the third-most populous city in Japan."
  ],
  "a": "Osaka",
  "alt": [
   "Osaka",
   "Ōsaka"
  ],
  "prompt": [],
  "t": 3,
  "x": "Osaka also hosted a World Expo in 1970, so it has hosted one twice.",
  "redset": "Osaka (Terms for Further Study)"
 },
 {
  "id": "asia-strait-of-hormuz",
  "region": "asia",
  "cat": "water",
  "clues": [
   "Iran's Qeshm Island, home to one of the world's longest salt caves, lies in this narrow waterway.",
   "This narrow channel separates Iran to the north from Oman's Musandam Peninsula to the south, and it is the only sea passage out of the Persian Gulf.",
   "For the point, name this strait linking the Persian Gulf to the Gulf of Oman, one of the world's most important routes for oil tankers."
  ],
  "a": "Strait of Hormuz",
  "alt": [
   "Strait of Hormuz",
   "Hormuz",
   "Straits of Hormuz",
   "Hormuz Strait"
  ],
  "prompt": [],
  "t": 4,
  "x": "Hormuz Island in this strait has red soil that people use for art and even cooking.",
  "redset": "Strait of Hormuz (Terms for Further Study)"
 },
 {
  "id": "asia-khyber-pass",
  "region": "asia",
  "cat": "landmark",
  "clues": [
   "This route begins near Jamrud Fort, about 11 miles west of Peshawar, and climbs through the Spin Ghar mountains to the town of Landi Kotal.",
   "As part of the ancient Silk Road, it was a vital trade route between Central Asia and the Indian subcontinent.",
   "For the point, name this famous mountain pass along the border between Pakistan and Afghanistan."
  ],
  "a": "Khyber Pass",
  "alt": [
   "Khyber Pass",
   "Khyber",
   "Kyber Pass"
  ],
  "prompt": [],
  "t": 4,
  "x": "The main part of the Khyber Pass is about 40 kilometers (25 miles) long.",
  "redset": "Khyber Pass (listed as 'Kyber Pass' in Terms for Further Study)"
 },
 {
  "id": "asia-hong-kong",
  "region": "asia",
  "cat": "city",
  "clues": [
   "This place's Kowloon Walled City was once one of the most densely populated spots on Earth before it was torn down in 1993 and 1994 and replaced by a park.",
   "Star Ferry boats cross its Victoria Harbour, and a giant bronze Buddha sits on its Lantau Island.",
   "For the point, name this former British colony that was handed over to China in 1997 and is now a special administrative region."
  ],
  "a": "Hong Kong",
  "alt": [
   "Hong Kong",
   "Hong Kong SAR",
   "HKSAR",
   "Hong Kong Special Administrative Region",
   "Xianggang"
  ],
  "prompt": [
   "Kowloon",
   "China"
  ],
  "t": 3,
  "x": "About 33,000 people once lived packed into Kowloon Walled City, an area of only about 6.5 acres.",
  "redset": "Kowloon Walled City (Terms for Further Study)"
 },
 {
  "id": "asia-kangchenjunga",
  "region": "asia",
  "cat": "mountain",
  "clues": [
   "This mountain's name has been explained as meaning \"the five treasures of the high snow.\"",
   "A British team first climbed it in 1955 but stopped just short of the top to keep a promise, and it can be seen clearly from the tea-growing town of Darjeeling.",
   "For the point, name this third-highest mountain in the world, on the border of Nepal and India's state of Sikkim."
  ],
  "a": "Kangchenjunga",
  "alt": [
   "Kangchenjunga",
   "Kanchenjunga",
   "Kanchanjanga",
   "Khangchendzonga",
   "Mount Kangchenjunga"
  ],
  "prompt": [],
  "t": 4,
  "x": "Local people believe the mountain's five treasures include salt, gold, turquoise, holy books, and grain.",
  "redset": "Kangchenjunga (Terms for Further Study)"
 },
 {
  "id": "asia-china",
  "region": "asia",
  "cat": "country",
  "clues": [
   "Farmers digging a well in 1974 near this country's city of Xi'an discovered the Terracotta Army of clay soldiers.",
   "Giant pandas, which eat almost nothing but bamboo, live mainly in this country's Sichuan province.",
   "For the point, name this country, home to the Great Wall, with its capital at Beijing."
  ],
  "a": "China",
  "alt": [
   "China",
   "People's Republic of China",
   "PRC",
   "Zhongguo"
  ],
  "prompt": [],
  "t": 2,
  "x": "More than 1.4 billion people live in China, about 17 out of every 100 people on Earth.",
  "redset": ""
 },
 {
  "id": "asia-india",
  "region": "asia",
  "cat": "country",
  "clues": [
   "The Western Ghats mountains run along this country's west coast, and the Sundarbans mangrove forest it shares with Bangladesh is home to Bengal tigers.",
   "The Taj Mahal, a white marble tomb, stands on the Yamuna River in this country's city of Agra.",
   "For the point, name this most populous country in the world, with its capital at New Delhi."
  ],
  "a": "India",
  "alt": [
   "India",
   "Republic of India",
   "Bharat"
  ],
  "prompt": [],
  "t": 2,
  "x": "India is the seventh-largest country in the world by area.",
  "redset": ""
 },
 {
  "id": "asia-japan",
  "region": "asia",
  "cat": "country",
  "clues": [
   "In 1964, this country opened the world's first high-speed rail line, a bullet-train route on its Shinkansen network.",
   "Snow monkeys bathe in hot springs in this country's mountains, and its main islands include Honshu, Hokkaido, and Kyushu.",
   "For the point, name this island country whose highest mountain is Mount Fuji and whose capital is Tokyo."
  ],
  "a": "Japan",
  "alt": [
   "Japan",
   "Nippon",
   "Nihon"
  ],
  "prompt": [],
  "t": 2,
  "x": "Some of Japan's snow monkeys have been seen rolling snowballs for fun.",
  "redset": ""
 },
 {
  "id": "asia-mumbai",
  "region": "asia",
  "cat": "city",
  "clues": [
   "Ancient Hindu caves carved into rock sit on Elephanta Island in this city's harbor.",
   "The Gateway of India arch overlooks the Arabian Sea in this city, whose Chhatrapati Shivaji Terminus railway station is a UNESCO World Heritage Site.",
   "For the point, name this capital of Maharashtra state, home of the Bollywood film industry, which was once called Bombay."
  ],
  "a": "Mumbai",
  "alt": [
   "Mumbai",
   "Bombay"
  ],
  "prompt": [],
  "t": 3,
  "x": "The Gateway of India was completed in 1924.",
  "redset": ""
 },
 {
  "id": "asia-ganges",
  "region": "asia",
  "cat": "river",
  "clues": [
   "This river begins where the Bhagirathi and Alaknanda rivers meet at the town of Devprayag in the Himalayas.",
   "Rare river dolphins, India's national aquatic animal, swim in it, and together with the Brahmaputra it forms the world's largest river delta.",
   "For the point, name this river worshipped in Hinduism as the goddess Ganga, which flows past the holy city of Varanasi."
  ],
  "a": "Ganges River",
  "alt": [
   "Ganges",
   "Ganges River",
   "Ganga",
   "Ganga River"
  ],
  "prompt": [
   "Padma"
  ],
  "t": 3,
  "x": "In Bangladesh, the Ganges is called the Padma.",
  "redset": ""
 },
 {
  "id": "asia-mount-everest",
  "region": "asia",
  "cat": "mountain",
  "clues": [
   "Climbers on this mountain's southeast route must cross the dangerous Khumbu Icefall just above Base Camp.",
   "Tenzing Norgay and Edmund Hillary made the first confirmed climb to its top in 1953, and its Nepali name is Sagarmatha.",
   "For the point, name this highest mountain on Earth, which sits on the border of Nepal and China."
  ],
  "a": "Mount Everest",
  "alt": [
   "Mount Everest",
   "Everest",
   "Mt. Everest",
   "Sagarmatha",
   "Chomolungma",
   "Qomolangma"
  ],
  "prompt": [],
  "t": 2,
  "x": "A 2020 survey by Nepal and China measured Everest at 8,848.86 meters (about 29,032 feet) tall.",
  "redset": ""
 },
 {
  "id": "asia-gobi",
  "region": "asia",
  "cat": "desert",
  "clues": [
   "In the 1920s, explorer Roy Chapman Andrews named this desert's Flaming Cliffs, where his team found the first fossils that scientists recognized as dinosaur eggs.",
   "Rare wild Bactrian camels, which have two humps, live in this cold desert, where frost and even snow can form on the dunes.",
   "For the point, name this large desert of southern Mongolia and northern China."
  ],
  "a": "Gobi Desert",
  "alt": [
   "Gobi",
   "Gobi Desert"
  ],
  "prompt": [],
  "t": 3,
  "x": "The Gobi is the sixth-largest desert in the world.",
  "redset": ""
 },
 {
  "id": "asia-mekong",
  "region": "asia",
  "cat": "river",
  "clues": [
   "This river, called the Lancang in China, begins on the Tibetan Plateau and later forms the border between Laos and Thailand for hundreds of miles.",
   "Giant catfish nearly 10 feet long swim in it, and rice fields cover much of its huge delta in southern Vietnam.",
   "For the point, name this great river of Southeast Asia that flows past the capital cities of Vientiane and Phnom Penh."
  ],
  "a": "Mekong River",
  "alt": [
   "Mekong",
   "Mekong River",
   "Lancang",
   "Lancang River"
  ],
  "prompt": [],
  "t": 3,
  "x": "The Mekong is the 12th-longest river in the world.",
  "redset": ""
 },
 {
  "id": "asia-indonesia",
  "region": "asia",
  "cat": "country",
  "clues": [
   "This country's Borobudur, on the island of Java, is the largest Buddhist temple in the world.",
   "Komodo dragons, the world's largest lizards, live on a few of its islands, and tourists flock to its island of Bali.",
   "For the point, name this Southeast Asian country made of thousands of islands, whose largest city is Jakarta."
  ],
  "a": "Indonesia",
  "alt": [
   "Indonesia",
   "Republic of Indonesia"
  ],
  "prompt": [],
  "t": 3,
  "x": "Indonesia has more Muslims than any other country in the world.",
  "redset": ""
 },
 {
  "id": "asia-seoul",
  "region": "asia",
  "cat": "city",
  "clues": [
   "This city's Gyeongbokgung Palace was built in 1395 as the first royal palace of the Joseon dynasty.",
   "The Banpo Bridge over this city's Han River holds the record as the world's longest fountain bridge, and this city hosted the 1988 Summer Olympics.",
   "For the point, name this capital and largest city of South Korea."
  ],
  "a": "Seoul",
  "alt": [
   "Seoul",
   "Seoul Special City"
  ],
  "prompt": [],
  "t": 3,
  "x": "Seoul's Lotte World Tower is South Korea's tallest building and the first in the country with more than 100 floors.",
  "redset": ""
 },
 {
  "id": "asia-dead-sea",
  "region": "asia",
  "cat": "lake",
  "clues": [
   "Ancient Jewish scrolls were found between 1946 and 1956 in the Qumran Caves near this lake's northern shore.",
   "Fed mainly by the Jordan River, this lake's shores are the lowest land on Earth, more than 1,400 feet below sea level.",
   "For the point, name this extremely salty lake bordering Jordan, Israel, and the West Bank, where swimmers float easily."
  ],
  "a": "Dead Sea",
  "alt": [
   "Dead Sea",
   "Salt Sea",
   "Yam HaMelah",
   "Al-Bahr al-Mayyit"
  ],
  "prompt": [],
  "t": 3,
  "x": "The Dead Sea is about 9.6 times as salty as the ocean.",
  "redset": ""
 },
 {
  "id": "asia-sri-lanka",
  "region": "asia",
  "cat": "country",
  "clues": [
   "An ancient king built a palace on top of this country's Sigiriya, or Lion Rock, which was entered through a gateway shaped like a giant lion.",
   "Pilgrims climb its Adam's Peak to see a footprint-shaped rock near the summit, and its hills are famous for growing tea.",
   "For the point, name this island country just south of India, formerly called Ceylon."
  ],
  "a": "Sri Lanka",
  "alt": [
   "Sri Lanka",
   "Ceylon",
   "Democratic Socialist Republic of Sri Lanka"
  ],
  "prompt": [],
  "t": 3,
  "x": "Sri Lanka's largest city is Colombo.",
  "redset": ""
 },
 {
  "id": "asia-singapore",
  "region": "asia",
  "cat": "country",
  "clues": [
   "This country's Changi Airport contains the Rain Vortex, the world's tallest indoor waterfall.",
   "Giant tree-like towers called Supertrees rise in its Gardens by the Bay, and its mascot, the Merlion, has a lion's head and a fish's body.",
   "For the point, name this tiny island city-state off the southern tip of the Malay Peninsula."
  ],
  "a": "Singapore",
  "alt": [
   "Singapore",
   "Republic of Singapore",
   "Singapura"
  ],
  "prompt": [],
  "t": 2,
  "x": "The name Singapore comes from old Sanskrit words meaning \"lion city.\"",
  "redset": ""
 },
 {
  "id": "oceania-great-barrier-reef",
  "region": "oceania",
  "cat": "landmark",
  "clues": [
   "This natural wonder in the Coral Sea is made up of more than 2,900 separate reefs and about 900 islands.",
   "It stretches more than 1,400 miles along the coast of Queensland, and clownfish, sea turtles, and dugongs live among its corals.",
   "For the point, name this largest coral reef system on Earth, the biggest structure made by living things, found off Australia."
  ],
  "a": "Great Barrier Reef",
  "alt": [
   "Great Barrier Reef",
   "The Great Barrier Reef"
  ],
  "prompt": [
   "Coral reef"
  ],
  "t": 2,
  "x": "The Great Barrier Reef can be seen from outer space.",
  "redset": "Great Barrier Reef (world's largest construct made by a living entity)"
 },
 {
  "id": "oceania-antarctica",
  "region": "oceania",
  "cat": "region",
  "clues": [
   "Lake Vostok lies hidden more than two miles beneath the ice of this place.",
   "Emperor penguins, the only penguins that breed in winter, raise their chicks here, and more than half of all the fresh water on Earth is frozen here.",
   "For the point, name this coldest and southernmost continent, home to the South Pole."
  ],
  "a": "Antarctica",
  "alt": [
   "Antarctica"
  ],
  "prompt": [
   "South Pole"
  ],
  "t": 1,
  "x": "Antarctica is also the driest and windiest continent.",
  "redset": "Antarctica (Earth's southernmost continent)"
 },
 {
  "id": "oceania-new-zealand",
  "region": "oceania",
  "cat": "country",
  "clues": [
   "This country's Milford Sound is a fjord in Fiordland National Park, and its city of Rotorua is famous for geysers and bubbling mud pools.",
   "The kiwi, a flightless bird, is the best-known national symbol of this country, whose first settlers were Polynesians who became the Maori.",
   "For the point, name this country made up mainly of the North Island and the South Island, with its capital at Wellington."
  ],
  "a": "New Zealand",
  "alt": [
   "New Zealand",
   "NZ",
   "Aotearoa"
  ],
  "prompt": [],
  "t": 2,
  "x": "New Zealand's Maori name is Aotearoa.",
  "redset": "New Zealand (southernmost country of Oceania)"
 },
 {
  "id": "oceania-micronesia",
  "region": "oceania",
  "cat": "country",
  "clues": [
   "This country's Nan Madol is a ruined ancient city built on about 100 small artificial islands linked by canals off the island of Pohnpei.",
   "On its island of Yap, huge stone disks with holes in the center, called rai stones, are known as stone money.",
   "For the point, name this Pacific country of four states, Yap, Chuuk, Pohnpei, and Kosrae, with its capital at Palikir."
  ],
  "a": "Federated States of Micronesia",
  "alt": [
   "Federated States of Micronesia",
   "Micronesia",
   "FSM"
  ],
  "prompt": [],
  "t": 4,
  "x": "The Federated States of Micronesia stretches almost 1,700 miles across the western Pacific Ocean.",
  "redset": "Micronesia (Terms for Further Study)"
 },
 {
  "id": "oceania-oahu",
  "region": "oceania",
  "cat": "island",
  "clues": [
   "Big-wave surfers come to this island's North Shore in winter to ride famous spots like the Banzai Pipeline.",
   "Diamond Head, an old volcanic cone, rises behind its Waikiki Beach, and visitors honor history at the USS Arizona Memorial in Pearl Harbor.",
   "For the point, name this most populated Hawaiian island, home to the state capital, Honolulu."
  ],
  "a": "Oahu",
  "alt": [
   "Oahu",
   "O'ahu",
   "Oʻahu"
  ],
  "prompt": [
   "Hawaii"
  ],
  "t": 3,
  "x": "Oahu is often nicknamed \"The Gathering Place.\"",
  "redset": "Oahu (Terms for Further Study)"
 },
 {
  "id": "oceania-mcmurdo-station",
  "region": "oceania",
  "cat": "landmark",
  "clues": [
   "Robert Falcon Scott's Discovery Hut, built in 1902, stands just 300 meters from this place on Ross Island.",
   "Mount Erebus, the southernmost active volcano on Earth, rises on the same island as this place, which can house up to 1,200 people.",
   "For the point, name this American research station, the largest community in Antarctica."
  ],
  "a": "McMurdo Station",
  "alt": [
   "McMurdo Station",
   "McMurdo",
   "McMurdo Base"
  ],
  "prompt": [
   "Antarctica"
  ],
  "t": 5,
  "x": "During the dark Antarctic winter, fewer than 200 people stay at McMurdo Station.",
  "redset": "McMurdo Station (Terms for Further Study)"
 },
 {
  "id": "oceania-treaty-of-waitangi",
  "region": "oceania",
  "cat": "concept",
  "clues": [
   "This agreement was first signed on the grounds of James Busby's house, now called the Treaty House, in the Bay of Islands.",
   "Captain William Hobson signed it for the British Crown along with Maori chiefs, and copies were later carried around the country for other chiefs to sign.",
   "For the point, name this 1840 treaty, a founding document of New Zealand, whose first signing is celebrated every February 6."
  ],
  "a": "Treaty of Waitangi",
  "alt": [
   "Treaty of Waitangi",
   "Waitangi",
   "Te Tiriti o Waitangi",
   "Waitangi Treaty"
  ],
  "prompt": [],
  "t": 5,
  "x": "Waitangi Day became a national public holiday in New Zealand in 1974.",
  "redset": "Waitangi (Terms for Further Study)"
 },
 {
  "id": "oceania-australia",
  "region": "oceania",
  "cat": "country",
  "clues": [
   "Limestone towers called the Twelve Apostles rise off this country's Great Ocean Road, though only seven of the original nine still stand.",
   "Uluru, a giant red sandstone rock sacred to the Anangu people, sits near the center of this country, and egg-laying platypuses swim in rivers along its eastern side.",
   "For the point, name this home of kangaroos and koalas, a country with its capital at Canberra."
  ],
  "a": "Australia",
  "alt": [
   "Australia",
   "Commonwealth of Australia"
  ],
  "prompt": [],
  "t": 1,
  "x": "Australia is the flattest and driest continent where people live.",
  "redset": ""
 },
 {
  "id": "oceania-sydney",
  "region": "oceania",
  "cat": "city",
  "clues": [
   "Surfers and lifeguards crowd this city's Bondi Beach, where the first surf bathing sheds were built in 1903.",
   "This city's Harbour Bridge is nicknamed \"the Coathanger,\" and nearby stands its Opera House, whose roofs look like giant white shells.",
   "For the point, name this Australian city, the capital of the state of New South Wales."
  ],
  "a": "Sydney",
  "alt": [
   "Sydney"
  ],
  "prompt": [],
  "t": 2,
  "x": "The roofs of the Sydney Opera House are covered with more than one million tiles.",
  "redset": ""
 },
 {
  "id": "oceania-papua-new-guinea",
  "region": "oceania",
  "cat": "country",
  "clues": [
   "About 840 languages are spoken in this country, making it the most linguistically diverse country on Earth.",
   "A Raggiana bird-of-paradise appears on its flag next to the stars of the Southern Cross.",
   "For the point, name this country that covers the eastern half of the island of New Guinea, with its capital at Port Moresby."
  ],
  "a": "Papua New Guinea",
  "alt": [
   "Papua New Guinea",
   "PNG"
  ],
  "prompt": [
   "New Guinea"
  ],
  "t": 2,
  "x": "The bird-of-paradise also appears on Papua New Guinea's coat of arms.",
  "redset": ""
 },
 {
  "id": "africa-lake-kivu",
  "region": "africa",
  "cat": "lake",
  "clues": [
   "Deep under this lake's surface lies a huge amount of dissolved methane gas, and a power plant pipes some of it up to make electricity.",
   "The Rwandan town of Gisenyi and the Congolese city of Goma sit on its northern shore, near the Nyiragongo volcano.",
   "For the point, name this African Great Lake on the border of Rwanda and the Democratic Republic of the Congo."
  ],
  "a": "Lake Kivu",
  "alt": [
   "Kivu"
  ],
  "prompt": [],
  "t": 4,
  "x": "Lake Kivu is one of only three known 'exploding lakes' that hold enough gas to burst out of the water.",
  "redset": ""
 },
 {
  "id": "africa-limpopo",
  "region": "africa",
  "cat": "river",
  "clues": [
   "In a Rudyard Kipling story, a curious baby elephant gets his long trunk on the banks of this 'great grey-green, greasy' river.",
   "This river forms South Africa's northern border with Botswana and Zimbabwe before it crosses Mozambique.",
   "For the point, name this river that flows into the Indian Ocean, second in size only to the Zambezi among African rivers that reach that ocean."
  ],
  "a": "Limpopo River",
  "alt": [
   "Limpopo"
  ],
  "prompt": [],
  "t": 4,
  "x": "South Africa's northernmost province is named Limpopo after the river.",
  "redset": ""
 },
 {
  "id": "asia-zagros",
  "region": "asia",
  "cat": "mountain",
  "clues": [
   "Some of the world's first farmers tamed wild goats in the foothills of these mountains more than 10,000 years ago.",
   "These mountains stretch nearly 1,000 miles from the borders of Turkey and Iraq to the Strait of Hormuz, with rich oil fields along their edge.",
   "For the point, name this longest mountain range in Iran."
  ],
  "a": "Zagros Mountains",
  "alt": [
   "Zagros"
  ],
  "prompt": [],
  "t": 4,
  "x": "The Zagros formed when the Arabian Plate pushed into the Eurasian Plate — and it is still pushing today.",
  "redset": ""
 },
 {
  "id": "europe-isle-of-man",
  "region": "europe",
  "cat": "island",
  "clues": [
   "This island's flag shows three armored legs joined together, and its native cats are famous for having no tails.",
   "Every year it closes its roads for the TT, one of the world's oldest and most dangerous motorcycle races.",
   "For the point, name this island in the Irish Sea, a British Crown Dependency whose people are called Manx."
  ],
  "a": "Isle of Man",
  "alt": [
   "Man",
   "Mann",
   "Ellan Vannin"
  ],
  "prompt": [],
  "t": 4,
  "x": "The Isle of Man's parliament, Tynwald, claims to be the oldest parliament in the world that has never stopped meeting.",
  "redset": ""
 },
 {
  "id": "asia-macau",
  "region": "asia",
  "cat": "region",
  "clues": [
   "This place's Ruins of St. Paul's are the stone front wall of a church that burned down in 1835.",
   "Portugal ruled this small territory for over 400 years before handing it back to China in 1999, two years after Britain returned Hong Kong.",
   "For the point, name this special administrative region of China on the Pearl River Delta, famous for its huge casinos."
  ],
  "a": "Macau",
  "alt": [
   "Macao",
   "Aomen"
  ],
  "prompt": [],
  "t": 4,
  "x": "A 34-mile bridge-and-tunnel link, opened in 2018, joins Macau to Hong Kong and mainland China.",
  "redset": ""
 },
 {
  "id": "oceania-tasmania",
  "region": "oceania",
  "cat": "island",
  "clues": [
   "A meat-eating marsupial that screeches loudly at night is named after this island, its only wild home today.",
   "Bass Strait separates this island from the mainland, and ships leave its capital, Hobart, for Antarctica.",
   "For the point, name this island that is the smallest state of Australia."
  ],
  "a": "Tasmania",
  "alt": [],
  "prompt": [],
  "t": 3,
  "x": "Nearly half of Tasmania is protected as national parks and reserves.",
  "redset": ""
 },
 {
  "id": "europe-sardinia",
  "region": "europe",
  "cat": "island",
  "clues": [
   "This island is dotted with thousands of ancient round stone towers called nuraghi.",
   "The Strait of Bonifacio separates it from the French island of Corsica, just to its north.",
   "For the point, name this second-largest island in the Mediterranean Sea, which belongs to Italy."
  ],
  "a": "Sardinia",
  "alt": [
   "Sardegna"
  ],
  "prompt": [],
  "t": 4,
  "x": "Sardinia has one of the world's highest shares of people who live to 100.",
  "redset": ""
 },
 {
  "id": "us-kodiak",
  "region": "us",
  "cat": "island",
  "clues": [
   "Brown bears found only on this island and its neighbors are among the largest bears on Earth.",
   "This island in the Gulf of Alaska is home to the largest base of the U.S. Coast Guard.",
   "For the point, name this largest island of Alaska, which shares its name with its giant bears."
  ],
  "a": "Kodiak Island",
  "alt": [
   "Kodiak"
  ],
  "prompt": [],
  "t": 4,
  "x": "Only Hawaii's Big Island is larger than Kodiak among U.S. islands.",
  "redset": ""
 },
 {
  "id": "latam-cayman-islands",
  "region": "latam",
  "cat": "island",
  "clues": [
   "At Stingray City, a shallow sandbar off these islands, visitors stand in the water and feed wild stingrays.",
   "This British territory lies south of Cuba, is famous as a banking center, and has its capital at George Town.",
   "For the point, name these three Caribbean islands whose largest is Grand Cayman."
  ],
  "a": "Cayman Islands",
  "alt": [
   "Caymans",
   "Cayman"
  ],
  "prompt": [],
  "t": 4,
  "x": "Blue iguanas, found only on Grand Cayman, were saved from near extinction.",
  "redset": ""
 },
 {
  "id": "canada-new-brunswick",
  "region": "canada",
  "cat": "province",
  "clues": [
   "At the Reversing Falls in this province's city of Saint John, the river flows backward when the huge tides come in.",
   "It is Canada's only officially bilingual province, where English and French are both official languages.",
   "For the point, name this Maritime province on the Bay of Fundy, whose capital is Fredericton."
  ],
  "a": "New Brunswick",
  "alt": [
   "Nouveau-Brunswick"
  ],
  "prompt": [],
  "t": 4,
  "x": "The Bay of Fundy has the highest tides in the world — up to 50 feet.",
  "redset": ""
 },
 {
  "id": "canada-yukon",
  "region": "canada",
  "cat": "province",
  "clues": [
   "In 1896, gold was found at Bonanza Creek here, starting the Klondike Gold Rush.",
   "Mount Logan, the highest mountain in Canada, rises in its southwest corner near Alaska.",
   "For the point, name this Canadian territory whose capital is Whitehorse."
  ],
  "a": "Yukon",
  "alt": [
   "Yukon Territory",
   "The Yukon"
  ],
  "prompt": [],
  "t": 4,
  "x": "Dawson City, the gold-rush boomtown, once had about 30,000 people; today it has under 2,000.",
  "redset": ""
 },
 {
  "id": "canada-great-bear-lake",
  "region": "canada",
  "cat": "lake",
  "clues": [
   "The Arctic Circle runs right through this lake, which stays frozen for most of the year.",
   "It is the largest lake that lies entirely inside Canada, in the Northwest Territories.",
   "For the point, name this lake named after a large animal, bigger than its neighbor Great Slave Lake."
  ],
  "a": "Great Bear Lake",
  "alt": [
   "Great Bear"
  ],
  "prompt": [],
  "t": 5,
  "x": "Great Bear Lake is bigger than the whole state of New Jersey.",
  "redset": ""
 },
 {
  "id": "asia-irrawaddy",
  "region": "asia",
  "cat": "river",
  "clues": [
   "A rare dolphin with a rounded head and no beak is named for this river, where some fishermen and dolphins team up to catch fish.",
   "This river flows the length of Myanmar past Mandalay and ends in a wide delta west of Yangon.",
   "For the point, name this longest river in Myanmar, also spelled Ayeyarwady."
  ],
  "a": "Irrawaddy River",
  "alt": [
   "Irrawaddy",
   "Ayeyarwady",
   "Ayeyarwady River"
  ],
  "prompt": [],
  "t": 4,
  "x": "Much of Myanmar's rice is grown on the river's flat, rich delta.",
  "redset": ""
 },
 {
  "id": "us-bonneville-salt-flats",
  "region": "us",
  "cat": "desert",
  "clues": [
   "Racers have set many land-speed records on the hard, flat crust of this place, once going over 600 miles per hour.",
   "This shining white plain in western Utah is the dried-up floor of a huge Ice Age lake.",
   "For the point, name these salt flats beside Interstate 80, near the Nevada border."
  ],
  "a": "Bonneville Salt Flats",
  "alt": [
   "Bonneville"
  ],
  "prompt": [],
  "t": 4,
  "x": "The crust is so flat that on a clear day you can see the curve of the Earth.",
  "redset": ""
 },
 {
  "id": "us-lake-champlain",
  "region": "us",
  "cat": "lake",
  "clues": [
   "Legends say a sea-serpent nicknamed 'Champ' swims in this lake.",
   "This lake forms much of the border between New York and Vermont, and its north end reaches into Quebec.",
   "For the point, name this lake named after the French explorer who founded Quebec City."
  ],
  "a": "Lake Champlain",
  "alt": [
   "Champlain"
  ],
  "prompt": [],
  "t": 4,
  "x": "Burlington, Vermont's largest city, sits on its eastern shore.",
  "redset": ""
 },
 {
  "id": "europe-edinburgh",
  "region": "europe",
  "cat": "city",
  "clues": [
   "Every August this city hosts the Fringe, the largest arts festival in the world.",
   "A castle stands on an old volcanic rock in its center, and a hill called Arthur's Seat rises nearby.",
   "For the point, name this capital city of Scotland."
  ],
  "a": "Edinburgh",
  "alt": [],
  "prompt": [],
  "t": 3,
  "x": "J.K. Rowling wrote much of the first Harry Potter book in Edinburgh cafés.",
  "redset": ""
 },
 {
  "id": "asia-mecca",
  "region": "asia",
  "cat": "city",
  "clues": [
   "Every year millions of Muslims travel to this city for the Hajj pilgrimage.",
   "The Kaaba, a cube-shaped building covered in black cloth, stands in the center of its Great Mosque.",
   "For the point, name this holiest city of Islam, in western Saudi Arabia."
  ],
  "a": "Mecca",
  "alt": [
   "Makkah"
  ],
  "prompt": [],
  "t": 3,
  "x": "Muslims around the world face toward Mecca when they pray.",
  "redset": ""
 },
 {
  "id": "latam-tierra-del-fuego",
  "region": "latam",
  "cat": "island",
  "clues": [
   "Magellan's crew named this place 'Land of Fire' after seeing the campfires of the native people on its shore.",
   "Its main island is split between Argentina and Chile, and the city of Ushuaia lies on its southern coast.",
   "For the point, name this archipelago at the tip of South America, cut off from the mainland by the Strait of Magellan."
  ],
  "a": "Tierra del Fuego",
  "alt": [
   "Land of Fire"
  ],
  "prompt": [],
  "t": 4,
  "x": "Ushuaia calls itself the southernmost city in the world.",
  "redset": ""
 },
 {
  "id": "europe-faroe-islands",
  "region": "europe",
  "cat": "island",
  "clues": [
   "These 18 rocky islands lie in the North Atlantic, between Iceland and Norway.",
   "They govern themselves but are part of the Kingdom of Denmark, and their capital is Tórshavn.",
   "For the point, name these islands whose name is often said to mean 'sheep islands.'"
  ],
  "a": "Faroe Islands",
  "alt": [
   "Faroes",
   "Faeroe Islands",
   "Faeroes",
   "Foroyar"
  ],
  "prompt": [],
  "t": 5,
  "x": "There are more sheep than people on these islands.",
  "redset": ""
 },
 {
  "id": "world-kurds",
  "region": "world",
  "cat": "concept",
  "clues": [
   "These people welcome the spring new year, Newroz, by lighting big bonfires.",
   "Numbering around 30 million, they are often called the largest ethnic group in the world without a country of their own.",
   "For the point, name this people of the mountains where Turkey, Iraq, Iran, and Syria meet."
  ],
  "a": "Kurds",
  "alt": [
   "Kurdish people",
   "Kurdish",
   "Kurd"
  ],
  "prompt": [],
  "t": 5,
  "x": "Erbil, the capital of Iraq's Kurdistan Region, has one of the oldest towns on Earth that people have never stopped living in.",
  "redset": ""
 },
 {
  "id": "asia-sakhalin",
  "region": "asia",
  "cat": "island",
  "clues": [
   "For 40 years Japan ruled the southern half of this island, which it called Karafuto.",
   "This long island lies just north of Japan's Hokkaido and is Russia's largest island.",
   "For the point, name this island in the Sea of Okhotsk, separated from the Russian mainland by the Strait of Tartary."
  ],
  "a": "Sakhalin",
  "alt": [
   "Sakhalin Island"
  ],
  "prompt": [],
  "t": 5,
  "x": "Big oil and gas fields lie off Sakhalin's northeast coast.",
  "redset": ""
 },
 {
  "id": "asia-altai",
  "region": "asia",
  "cat": "mountain",
  "clues": [
   "Snow leopards roam these mountains, and some families there hunt with trained golden eagles.",
   "Russia, China, Mongolia, and Kazakhstan all reach into these mountains.",
   "For the point, name this Central Asian mountain range whose name is often said to mean 'golden mountains.'"
  ],
  "a": "Altai Mountains",
  "alt": [
   "Altai",
   "Altay",
   "Altay Mountains"
  ],
  "prompt": [],
  "t": 5,
  "x": "Scientists think the first people of the Americas may have had ancestors from near the Altai.",
  "redset": ""
 },
 {
  "id": "africa-brazzaville",
  "region": "africa",
  "cat": "city",
  "clues": [
   "This city and Kinshasa face each other across the Congo River, closer than any other two national capitals except Rome and Vatican City.",
   "During World War II it served for a time as the capital of Free France.",
   "For the point, name this capital of the Republic of the Congo, named after the explorer Pierre de Brazza."
  ],
  "a": "Brazzaville",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Ferries carry people back and forth across the river between Brazzaville and Kinshasa every day.",
  "redset": ""
 },
 {
  "id": "asia-bishkek",
  "region": "asia",
  "cat": "city",
  "clues": [
   "In Soviet times this city was named Frunze, after a Red Army general born there.",
   "It sits at the foot of the snowy Ala-Too mountains, part of the Tian Shan.",
   "For the point, name this capital of Kyrgyzstan."
  ],
  "a": "Bishkek",
  "alt": [],
  "prompt": [],
  "t": 5,
  "x": "Kyrgyzstan is mostly mountains, and Bishkek lies in a low valley in its north.",
  "redset": ""
 },
 {
  "id": "asia-yalu",
  "region": "asia",
  "cat": "river",
  "clues": [
   "In 1950 Chinese armies crossed this river into North Korea to join the Korean War.",
   "It rises near Paektu Mountain and flows southwest into the Yellow Sea.",
   "For the point, name this river that forms much of the border between North Korea and China."
  ],
  "a": "Yalu River",
  "alt": [
   "Yalu",
   "Amnok",
   "Amnok River"
  ],
  "prompt": [],
  "t": 5,
  "x": "Koreans call the river the Amnok.",
  "redset": ""
 },
 {
  "id": "latam-minas-gerais",
  "region": "latam",
  "cat": "province",
  "clues": [
   "Its old mining town of Ouro Preto, whose name means 'black gold,' is a UNESCO World Heritage Site.",
   "This inland state is named 'General Mines' for the gold and diamonds found there in the 1700s.",
   "For the point, name this Brazilian state, the country's top coffee grower, whose capital is Belo Horizonte."
  ],
  "a": "Minas Gerais",
  "alt": [
   "Minas"
  ],
  "prompt": [],
  "t": 5,
  "x": "Gold from this state paid for many of Portugal's grand churches and palaces.",
  "redset": ""
 },
 {
  "id": "africa-mozambique-channel",
  "region": "africa",
  "cat": "water",
  "clues": [
   "The Comoros Islands lie near the northern end of this stretch of water.",
   "This arm of the Indian Ocean separates the giant island of Madagascar from the African mainland.",
   "For the point, name this body of water named after the country on its western shore."
  ],
  "a": "Mozambique Channel",
  "alt": [],
  "prompt": [
   "Mozambique"
  ],
  "t": 4,
  "x": "Humpback whales travel through it each year to raise their calves.",
  "redset": ""
 },
 {
  "id": "asia-taiwan",
  "region": "asia",
  "cat": "country",
  "clues": [
   "Portuguese sailors called this island Formosa, meaning 'beautiful island,' and Sun Moon Lake sits in its mountains.",
   "Its tallest skyscraper was the tallest building in the world from 2004 to 2010.",
   "For the point, name this island off southeastern China whose capital is Taipei."
  ],
  "a": "Taiwan",
  "alt": [
   "Formosa"
  ],
  "prompt": [],
  "t": 3,
  "x": "Taiwan makes most of the world's most advanced computer chips.",
  "redset": ""
 },
 {
  "id": "asia-kuwait",
  "region": "asia",
  "cat": "country",
  "clues": [
   "In 1990 this country was invaded by Iraq, an attack that led to the Gulf War.",
   "Its capital's three Towers, two topped with blue-green spheres, are its best-known landmark.",
   "For the point, name this small oil-rich country at the top of the Persian Gulf, between Iraq and Saudi Arabia."
  ],
  "a": "Kuwait",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Kuwait has almost no natural fresh water — it turns seawater into drinking water.",
  "redset": ""
 },
 {
  "id": "latam-belize",
  "region": "latam",
  "cat": "country",
  "clues": [
   "The Great Blue Hole, a giant round sinkhole in the sea, lies off the coast of this country.",
   "It is the only country in Central America whose official language is English, and its capital is Belmopan.",
   "For the point, name this country south of Mexico's Yucatán Peninsula and east of Guatemala."
  ],
  "a": "Belize",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Belize was called British Honduras until 1973.",
  "redset": ""
 },
 {
  "id": "africa-liberia",
  "region": "africa",
  "cat": "country",
  "clues": [
   "This country was started in the 1800s as a home for freed African American slaves.",
   "Its capital, Monrovia, is named after U.S. President James Monroe, and its flag looks like the U.S. flag with just one star.",
   "For the point, name this West African country, often called Africa's oldest republic."
  ],
  "a": "Liberia",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Liberia's name comes from the word 'liberty.'",
  "redset": ""
 },
 {
  "id": "europe-mykonos",
  "region": "europe",
  "cat": "island",
  "clues": [
   "A row of white windmills stands above this island's harbor, and a pelican named Petros is its mascot.",
   "This island in the Cyclades lies next to Delos, a tiny island sacred to the ancient Greeks.",
   "For the point, name this Greek island in the Aegean Sea, famous for its whitewashed houses."
  ],
  "a": "Mykonos",
  "alt": [],
  "prompt": [],
  "t": 5,
  "x": "A pelican has been the island's mascot ever since a storm blew the first Petros there in the 1950s.",
  "redset": ""
 },
 {
  "id": "asia-uzbekistan",
  "region": "asia",
  "cat": "country",
  "clues": [
   "This country is one of only two in the world that are doubly landlocked, along with Liechtenstein.",
   "Much of the shrinking Aral Sea, drained to water cotton fields, lies in its west.",
   "The Silk Road cities of Samarkand and Bukhara, famous for their blue-tiled domes, are here.",
   "For the point, name this Central Asian country whose capital is Tashkent."
  ],
  "a": "Uzbekistan",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Doubly landlocked means every country around it is landlocked too — you must cross two borders to reach the sea.",
  "redset": ""
 },
 {
  "id": "europe-caucasus",
  "region": "europe",
  "cat": "mountain",
  "clues": [
   "In a Greek myth, Prometheus was chained to a rock in these mountains for giving fire to humans.",
   "Mount Elbrus, often called the highest mountain in Europe, rises in this range.",
   "These mountains stretch from the Black Sea to the Caspian Sea.",
   "For the point, name this mountain range running across Georgia, Armenia, Azerbaijan, and southern Russia."
  ],
  "a": "Caucasus Mountains",
  "alt": [
   "Caucasus",
   "Caucasus Range"
  ],
  "prompt": [],
  "t": 4,
  "x": "Many geographers draw the line between Europe and Asia along the Caucasus.",
  "redset": ""
 },
 {
  "id": "asia-tigris",
  "region": "asia",
  "cat": "river",
  "clues": [
   "The ancient Assyrian capital of Nineveh stood on this river, across from the modern city of Mosul.",
   "It begins in the mountains of eastern Turkey and flows southeast through Iraq.",
   "Baghdad sits on this river, which joins its twin river to form the Shatt al-Arab.",
   "For the point, name this river that, with the Euphrates, framed ancient Mesopotamia."
  ],
  "a": "Tigris River",
  "alt": [
   "Tigris"
  ],
  "prompt": [],
  "t": 4,
  "x": "Mesopotamia means 'land between the rivers' — the Tigris and the Euphrates.",
  "redset": ""
 },
 {
  "id": "asia-mongolia",
  "region": "asia",
  "cat": "country",
  "clues": [
   "Many families in this country live in round felt tents called gers.",
   "Its capital, Ulaanbaatar, is often called the coldest national capital in the world.",
   "Genghis Khan built a huge empire from this land in the 1200s.",
   "For the point, name this landlocked country between Russia and China, home to much of the Gobi Desert."
  ],
  "a": "Mongolia",
  "alt": [
   "Outer Mongolia"
  ],
  "prompt": [],
  "t": 3,
  "x": "Mongolia has more horses than people.",
  "redset": ""
 },
 {
  "id": "asia-honshu",
  "region": "asia",
  "cat": "island",
  "clues": [
   "The world's first high-speed 'bullet train' line opened on this island in 1964.",
   "Mount Fuji, the tallest mountain in its country, rises on this island.",
   "The cities of Tokyo, Osaka, Kyoto, and Hiroshima are all on it.",
   "For the point, name this largest island of Japan."
  ],
  "a": "Honshu",
  "alt": [
   "Honshū"
  ],
  "prompt": [],
  "t": 4,
  "x": "Japan's four main islands, north to south, are Hokkaido, Honshu, Shikoku, and Kyushu.",
  "redset": ""
 },
 {
  "id": "latam-paraguay",
  "region": "latam",
  "cat": "country",
  "clues": [
   "The giant Itaipú Dam, one of the world's biggest makers of hydroelectric power, sits on this country's border with Brazil.",
   "Most people here speak both Spanish and the native language Guaraní.",
   "The dry Gran Chaco covers its west, and its capital, Asunción, stands on a river with the same name as the country.",
   "For the point, name this landlocked South American country between Argentina, Brazil, and Bolivia."
  ],
  "a": "Paraguay",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Paraguay and Bolivia are the only landlocked countries in South America.",
  "redset": ""
 },
 {
  "id": "us-north-carolina",
  "region": "us",
  "cat": "state",
  "clues": [
   "Mount Mitchell, the highest peak east of the Mississippi River, is in this state.",
   "The Outer Banks line its coast, where wrecks earned the sea the nickname 'Graveyard of the Atlantic.'",
   "The Wright brothers made the first powered airplane flights near Kitty Hawk in this state in 1903.",
   "For the point, name this southern state whose capital is Raleigh."
  ],
  "a": "North Carolina",
  "alt": [],
  "prompt": [],
  "t": 3,
  "x": "The state's license plates say 'First in Flight' because of the Wright brothers.",
  "redset": ""
 },
 {
  "id": "us-aleutian-islands",
  "region": "us",
  "cat": "island",
  "clues": [
   "In World War II, Japan captured two of these islands, Attu and Kiska.",
   "This chain of volcanic islands separates the Bering Sea from the rest of the Pacific Ocean.",
   "It stretches more than 1,000 miles west from the Alaska Peninsula toward Russia.",
   "For the point, name this Alaskan island chain, home to the fishing port of Dutch Harbor."
  ],
  "a": "Aleutian Islands",
  "alt": [
   "Aleutians",
   "Aleutian"
  ],
  "prompt": [],
  "t": 5,
  "x": "The Aleutians reach so far west that they cross the 180° line of longitude.",
  "redset": ""
 },
 {
  "id": "africa-lake-malawi",
  "region": "africa",
  "cat": "lake",
  "clues": [
   "Hundreds of kinds of brightly colored fish called cichlids live in this lake and nowhere else.",
   "In Tanzania and Mozambique it is known as Lake Nyasa.",
   "It is the southernmost of the big lakes in Africa's Great Rift Valley.",
   "For the point, name this lake that covers about a fifth of the country that shares its name."
  ],
  "a": "Lake Malawi",
  "alt": [
   "Malawi",
   "Lake Nyasa",
   "Nyasa"
  ],
  "prompt": [],
  "t": 4,
  "x": "Lake Malawi has more kinds of fish than any other lake on Earth.",
  "redset": ""
 },
 {
  "id": "asia-lebanon",
  "region": "asia",
  "cat": "country",
  "clues": [
   "The ruins of Baalbek in this country hold some of the largest stone blocks ever carved.",
   "Ancient Phoenician sailors set out from its port cities of Tyre, Sidon, and Byblos.",
   "A green cedar tree sits in the middle of its red-and-white flag.",
   "For the point, name this small Mediterranean country north of Israel whose capital is Beirut."
  ],
  "a": "Lebanon",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Byblos is one of the oldest cities in the world where people have lived without stopping.",
  "redset": ""
 },
 {
  "id": "asia-java",
  "region": "asia",
  "cat": "island",
  "clues": [
   "The huge Buddhist temple of Borobudur, built about 1,200 years ago, stands on this island.",
   "A kind of coffee and a computer language are both named after it.",
   "More than half of its country's people live here, making it the most crowded island on Earth.",
   "For the point, name this Indonesian island, home to the city of Jakarta."
  ],
  "a": "Java",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Java has more than 150 million people — about half as many as the whole United States.",
  "redset": ""
 },
 {
  "id": "canada-montreal",
  "region": "canada",
  "cat": "city",
  "clues": [
   "This city hosted the 1976 Summer Olympics and the 1967 World's Fair, Expo 67.",
   "It sits on an island in the St. Lawrence River, beneath a hill called Mount Royal.",
   "It is one of the largest French-speaking cities in the world.",
   "For the point, name this largest city in the province of Quebec."
  ],
  "a": "Montreal",
  "alt": [
   "Montréal"
  ],
  "prompt": [],
  "t": 3,
  "x": "The city's name comes from Mount Royal, 'Mont Réal' in old French.",
  "redset": ""
 },
 {
  "id": "us-lake-michigan",
  "region": "us",
  "cat": "lake",
  "clues": [
   "Sand dunes hundreds of feet tall, like Sleeping Bear Dunes, line this lake's eastern shore.",
   "Milwaukee and Green Bay, Wisconsin, sit on its western shore.",
   "Chicago lies at its southwestern corner.",
   "For the point, name the only Great Lake that lies entirely inside the United States."
  ],
  "a": "Lake Michigan",
  "alt": [
   "Michigan"
  ],
  "prompt": [],
  "t": 3,
  "x": "Lake Michigan and Lake Huron are joined so widely that scientists treat them as one lake.",
  "redset": ""
 },
 {
  "id": "europe-baltic-sea",
  "region": "europe",
  "cat": "water",
  "clues": [
   "Amber, fossilized tree sap, often washes up on the beaches of this sea.",
   "Its water is much less salty than the ocean's because so many rivers pour into it.",
   "Stockholm, Helsinki, Tallinn, and Riga all sit on its shores.",
   "For the point, name this sea of northern Europe that gives the Baltic states — Estonia, Latvia, and Lithuania — their group name."
  ],
  "a": "Baltic Sea",
  "alt": [
   "Baltic"
  ],
  "prompt": [],
  "t": 4,
  "x": "In very cold winters, parts of the Baltic freeze solid.",
  "redset": ""
 },
 {
  "id": "europe-seine",
  "region": "europe",
  "cat": "river",
  "clues": [
   "Claude Monet painted his famous water lilies at his garden in Giverny, near this river.",
   "It empties into the English Channel at the port of Le Havre.",
   "Notre-Dame Cathedral stands on an island in the middle of this river.",
   "For the point, name this river that flows through Paris."
  ],
  "a": "Seine River",
  "alt": [
   "Seine"
  ],
  "prompt": [],
  "t": 3,
  "x": "More than 35 bridges cross the Seine inside Paris.",
  "redset": ""
 },
 {
  "id": "africa-south-sudan",
  "region": "africa",
  "cat": "country",
  "clues": [
   "The Sudd, one of the largest wetlands in the world, covers part of this country.",
   "The White Nile flows north through it, past its capital, Juba.",
   "It became independent in 2011, which makes it the world's newest country.",
   "For the point, name this country that split from its northern neighbor, Sudan."
  ],
  "a": "South Sudan",
  "alt": [],
  "prompt": [
   "Sudan"
  ],
  "t": 4,
  "x": "Each year one of the biggest animal migrations on Earth, of antelope, crosses South Sudan.",
  "redset": ""
 },
 {
  "id": "africa-cairo",
  "region": "africa",
  "cat": "city",
  "clues": [
   "Its Khan el-Khalili bazaar has been a busy market for over 600 years.",
   "It is the largest city in the Arab world.",
   "The Great Pyramids of Giza rise at the edge of its huge urban area.",
   "For the point, name this capital of Egypt, on the Nile River."
  ],
  "a": "Cairo",
  "alt": [
   "Al-Qahira"
  ],
  "prompt": [],
  "t": 3,
  "x": "Cairo's name means 'the victorious' in Arabic.",
  "redset": ""
 },
 {
  "id": "asia-tibet",
  "region": "asia",
  "cat": "region",
  "clues": [
   "The Potala Palace, once the winter home of the Dalai Lama, towers over this region's capital, Lhasa.",
   "It is called 'the Roof of the World' because its plateau averages more than 14,000 feet high.",
   "The Yangtze, Mekong, and Indus rivers all begin here.",
   "For the point, name this autonomous region of western China, north of the Himalayas."
  ],
  "a": "Tibet",
  "alt": [
   "Tibet Autonomous Region",
   "Xizang",
   "Tibetan Plateau"
  ],
  "prompt": [],
  "t": 4,
  "x": "Mount Everest sits on the border between Tibet and Nepal.",
  "redset": ""
 },
 {
  "id": "africa-djibouti",
  "region": "africa",
  "cat": "country",
  "clues": [
   "Lake Assal, the lowest point in Africa, lies in this country.",
   "The United States, France, China, and Japan all keep military bases here.",
   "It sits on the Bab-el-Mandeb strait, at the mouth of the Red Sea, across from Yemen.",
   "For the point, name this small Horn of Africa country whose capital has the same name as the country."
  ],
  "a": "Djibouti",
  "alt": [],
  "prompt": [],
  "t": 5,
  "x": "Lake Assal is about ten times saltier than the ocean.",
  "redset": ""
 },
 {
  "id": "africa-orange-river",
  "region": "africa",
  "cat": "river",
  "clues": [
   "The Augrabies Falls thunder through a granite gorge on this river.",
   "It begins in the mountains of Lesotho and is the longest river in South Africa.",
   "Its lower course forms the border between South Africa and Namibia.",
   "For the point, name this river named after the Dutch royal House of Orange, not the fruit."
  ],
  "a": "Orange River",
  "alt": [
   "Orange",
   "Gariep",
   "Gariep River"
  ],
  "prompt": [],
  "t": 4,
  "x": "Diamonds washed down the Orange River for millions of years, so some are found near its mouth.",
  "redset": ""
 },
 {
  "id": "canada-prince-edward-island",
  "region": "canada",
  "cat": "province",
  "clues": [
   "The eight-mile Confederation Bridge links this island to New Brunswick.",
   "Its red soil is famous for growing potatoes.",
   "The book Anne of Green Gables is set on this island.",
   "For the point, name Canada's smallest province, whose capital is Charlottetown."
  ],
  "a": "Prince Edward Island",
  "alt": [
   "PEI",
   "P.E.I."
  ],
  "prompt": [],
  "t": 4,
  "x": "Leaders met in Charlottetown in 1864 to plan the country of Canada.",
  "redset": ""
 },
 {
  "id": "asia-sinai",
  "region": "asia",
  "cat": "region",
  "clues": [
   "Saint Catherine's Monastery, one of the oldest working monasteries in the world, sits at the foot of a mountain here.",
   "Many believe Moses received the Ten Commandments on a mountain on this land.",
   "This triangle of land lies between the Gulf of Suez and the Gulf of Aqaba.",
   "For the point, name this peninsula, the part of Egypt that is in Asia."
  ],
  "a": "Sinai Peninsula",
  "alt": [
   "Sinai"
  ],
  "prompt": [],
  "t": 4,
  "x": "The Suez Canal runs along the Sinai's western edge.",
  "redset": ""
 },
 {
  "id": "asia-south-china-sea",
  "region": "asia",
  "cat": "water",
  "clues": [
   "Several countries claim the tiny Spratly and Paracel Islands in this sea.",
   "Hong Kong and Manila both face this sea.",
   "It stretches from Taiwan down toward Singapore, between Vietnam and the Philippines.",
   "For the point, name this arm of the Pacific Ocean named after the large country on its northern shore."
  ],
  "a": "South China Sea",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "About a third of all the world's shipping passes through it.",
  "redset": ""
 },
 {
  "id": "europe-gibraltar",
  "region": "europe",
  "cat": "water",
  "clues": [
   "Ancient Greeks called the two great rocks on either side of this waterway the Pillars of Hercules.",
   "At its narrowest it is only about 9 miles wide.",
   "It separates Spain from Morocco.",
   "For the point, name this strait that links the Atlantic Ocean to the Mediterranean Sea."
  ],
  "a": "Strait of Gibraltar",
  "alt": [
   "Gibraltar"
  ],
  "prompt": [],
  "t": 3,
  "x": "On a clear day you can see Africa from Europe across the strait.",
  "redset": ""
 },
 {
  "id": "asia-lake-baikal",
  "region": "asia",
  "cat": "lake",
  "clues": [
   "Nerpa seals, among the only seals that live only in fresh water, swim in this lake.",
   "It holds about a fifth of the world's unfrozen fresh water.",
   "It is the deepest lake on Earth, more than a mile deep.",
   "For the point, name this lake in Siberia, Russia."
  ],
  "a": "Lake Baikal",
  "alt": [
   "Baikal"
  ],
  "prompt": [],
  "t": 3,
  "x": "Baikal is also the oldest lake in the world — about 25 million years old.",
  "redset": ""
 },
 {
  "id": "us-philadelphia",
  "region": "us",
  "cat": "city",
  "clues": [
   "The Liberty Bell, with its famous crack, is on display in this city.",
   "Its name means 'city of brotherly love.'",
   "The Declaration of Independence was signed in its Independence Hall in 1776.",
   "For the point, name this largest city in Pennsylvania."
  ],
  "a": "Philadelphia",
  "alt": [
   "Philly"
  ],
  "prompt": [],
  "t": 3,
  "x": "Philadelphia was the U.S. capital in the 1790s, before Washington, D.C.",
  "redset": ""
 },
 {
  "id": "europe-crimea",
  "region": "europe",
  "cat": "region",
  "clues": [
   "Yalta, a resort here, hosted a famous 1945 meeting of Roosevelt, Churchill, and Stalin.",
   "A long bridge over the Kerch Strait links it to Russia.",
   "It juts into the Black Sea from southern Ukraine.",
   "For the point, name this peninsula that Russia seized from Ukraine in 2014."
  ],
  "a": "Crimea",
  "alt": [
   "Crimean Peninsula"
  ],
  "prompt": [],
  "t": 4,
  "x": "Most countries still count Crimea as part of Ukraine.",
  "redset": ""
 },
 {
  "id": "world-greenland",
  "region": "world",
  "cat": "island",
  "clues": [
   "Its capital is Nuuk, and most of its people are Inuit.",
   "An ice sheet up to about two miles thick covers about four-fifths of it.",
   "It governs itself but is part of the Kingdom of Denmark.",
   "For the point, name this largest island in the world, which Erik the Red named to attract settlers."
  ],
  "a": "Greenland",
  "alt": [
   "Kalaallit Nunaat"
  ],
  "prompt": [],
  "t": 3,
  "x": "If all of Greenland's ice melted, the oceans would rise about 24 feet.",
  "redset": ""
 },
 {
  "id": "asia-dubai",
  "region": "asia",
  "cat": "city",
  "clues": [
   "Palm Jumeirah, a man-made island shaped like a palm tree, lies off this city's coast.",
   "It has an indoor ski slope inside a shopping mall, even though its summers are scorching.",
   "The Burj Khalifa, the tallest building in the world, rises here.",
   "For the point, name this largest city of the United Arab Emirates."
  ],
  "a": "Dubai",
  "alt": [],
  "prompt": [],
  "t": 3,
  "x": "The Burj Khalifa is more than half a mile tall.",
  "redset": ""
 },
 {
  "id": "africa-kalahari",
  "region": "africa",
  "cat": "desert",
  "clues": [
   "Meerkats, small mongooses that stand on their back legs to keep watch, live in this sandy region.",
   "The San people have hunted and gathered here for thousands of years.",
   "It covers most of Botswana and reaches into Namibia and South Africa.",
   "For the point, name this large semi-desert of southern Africa."
  ],
  "a": "Kalahari Desert",
  "alt": [
   "Kalahari"
  ],
  "prompt": [],
  "t": 4,
  "x": "The Kalahari gets more rain than a true desert, so grass and trees grow there.",
  "redset": ""
 },
 {
  "id": "asia-bali",
  "region": "asia",
  "cat": "island",
  "clues": [
   "Farmers on this island grow rice on stair-step terraces watered by an ancient system called subak.",
   "Unlike most of its country, most people here are Hindu.",
   "It lies just east of Java.",
   "For the point, name this Indonesian island nicknamed the 'Island of the Gods.'"
  ],
  "a": "Bali",
  "alt": [],
  "prompt": [],
  "t": 3,
  "x": "Bali has thousands of Hindu temples.",
  "redset": ""
 },
 {
  "id": "asia-sumatra",
  "region": "asia",
  "cat": "island",
  "clues": [
   "Lake Toba, the largest volcanic lake in the world, fills an ancient supervolcano on this island.",
   "The equator crosses it, and the Strait of Malacca separates it from Malaysia.",
   "Tigers and orangutans that live only here share its name.",
   "For the point, name this large island in western Indonesia, the sixth-largest island in the world."
  ],
  "a": "Sumatra",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Sumatra is the only place where tigers, rhinos, elephants, and orangutans all live in the same forests.",
  "redset": ""
 },
 {
  "id": "europe-canary-islands",
  "region": "europe",
  "cat": "island",
  "clues": [
   "Mount Teide, on the island of Tenerife, is the highest peak in Spain.",
   "These islands lie in the Atlantic off the coast of Morocco and Western Sahara.",
   "They belong to Spain, even though they are much closer to Africa.",
   "For the point, name these islands that share their name with a small yellow songbird, though they were probably named after dogs."
  ],
  "a": "Canary Islands",
  "alt": [
   "Canaries",
   "Canary"
  ],
  "prompt": [],
  "t": 4,
  "x": "The name likely comes from the Latin word for dog, canis.",
  "redset": ""
 },
 {
  "id": "europe-adriatic",
  "region": "europe",
  "cat": "water",
  "clues": [
   "Venice was built on more than a hundred small islands in a lagoon at the top of this sea.",
   "Croatia's coast along this sea is dotted with over a thousand islands.",
   "The walled city of Dubrovnik sits on its eastern shore.",
   "For the point, name this arm of the Mediterranean Sea between Italy and the Balkan Peninsula."
  ],
  "a": "Adriatic Sea",
  "alt": [
   "Adriatic"
  ],
  "prompt": [],
  "t": 4,
  "x": "The sea is named after the ancient port town of Adria, in Italy.",
  "redset": ""
 },
 {
  "id": "africa-cape-town",
  "region": "africa",
  "cat": "city",
  "clues": [
   "Robben Island, where Nelson Mandela was imprisoned for 18 years, lies offshore from this city.",
   "African penguins waddle on Boulders Beach in its suburbs.",
   "Flat-topped Table Mountain rises behind it.",
   "For the point, name this South African city near the Cape of Good Hope, where the country's parliament meets."
  ],
  "a": "Cape Town",
  "alt": [
   "Kaapstad"
  ],
  "prompt": [],
  "t": 3,
  "x": "South Africa has three capitals: Pretoria, Cape Town, and Bloemfontein.",
  "redset": ""
 },
 {
  "id": "asia-krakatoa",
  "region": "asia",
  "cat": "mountain",
  "clues": [
   "Its 1883 eruption was so loud that people heard it nearly 3,000 miles away.",
   "Ash from that eruption turned sunsets around the world bright red for months.",
   "A new volcano called its 'Child' has grown out of the sea where it stood.",
   "For the point, name this volcano in the strait between Java and Sumatra."
  ],
  "a": "Krakatoa",
  "alt": [
   "Krakatau"
  ],
  "prompt": [],
  "t": 5,
  "x": "The 1883 blast may be the loudest sound in recorded history.",
  "redset": ""
 },
 {
  "id": "europe-mont-blanc",
  "region": "europe",
  "cat": "mountain",
  "clues": [
   "A 7-mile tunnel under this mountain links Chamonix to Courmayeur.",
   "The first Winter Olympics, in 1924, were held at Chamonix, at its foot.",
   "It is the highest mountain in the Alps.",
   "For the point, name this snowy peak on the border of France and Italy, whose name means 'white mountain.'"
  ],
  "a": "Mont Blanc",
  "alt": [
   "Monte Bianco",
   "Mount Blanc"
  ],
  "prompt": [],
  "t": 4,
  "x": "Its height changes a little every year as the snow on top grows and shrinks.",
  "redset": ""
 },
 {
  "id": "asia-godavari",
  "region": "asia",
  "cat": "river",
  "clues": [
   "Every twelve years, the giant Kumbh Mela festival is held on its banks at Nashik.",
   "It rises in the Western Ghats and flows east across the Deccan Plateau.",
   "It is often called the 'Dakshina Ganga,' or Ganges of the South.",
   "For the point, name this second-longest river in India, which empties into the Bay of Bengal."
  ],
  "a": "Godavari River",
  "alt": [
   "Godavari"
  ],
  "prompt": [],
  "t": 5,
  "x": "The Godavari flows through Maharashtra, Telangana, and Andhra Pradesh.",
  "redset": ""
 },
 {
  "id": "us-susquehanna",
  "region": "us",
  "cat": "river",
  "clues": [
   "The Three Mile Island nuclear plant sits on an island in this river.",
   "Harrisburg, the capital of Pennsylvania, stands on its banks.",
   "It is the longest river on the East Coast of the United States.",
   "For the point, name this river that flows into the top of Chesapeake Bay."
  ],
  "a": "Susquehanna River",
  "alt": [
   "Susquehanna"
  ],
  "prompt": [],
  "t": 5,
  "x": "It is one of the oldest rivers in the world — older than the mountains it cuts through.",
  "redset": ""
 },
 {
  "id": "canada-banff",
  "region": "canada",
  "cat": "landmark",
  "clues": [
   "Turquoise Lake Louise and Moraine Lake get their color from 'rock flour' ground up by glaciers.",
   "It was Canada's first national park, created in 1885.",
   "It lies in the Rocky Mountains of Alberta, west of Calgary.",
   "For the point, name this national park whose resort town shares its name."
  ],
  "a": "Banff National Park",
  "alt": [
   "Banff"
  ],
  "prompt": [],
  "t": 4,
  "x": "Banff began with a hot spring found by railway workers.",
  "redset": ""
 },
 {
  "id": "us-savannah",
  "region": "us",
  "cat": "city",
  "clues": [
   "This city was laid out in 1733 around a grid of shady public squares.",
   "Girl Scouts founder Juliette Gordon Low was born here.",
   "It is the oldest city in Georgia, near the mouth of a river with the same name.",
   "For the point, name this Georgia port city whose name is also a word for a tropical grassland."
  ],
  "a": "Savannah",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Savannah's port is one of the busiest container ports in the United States.",
  "redset": ""
 },
 {
  "id": "asia-andaman-sea",
  "region": "asia",
  "cat": "water",
  "clues": [
   "Phuket and the limestone islands of Phang Nga Bay rise from this sea.",
   "The Irrawaddy River empties into it.",
   "It washes the coasts of Myanmar and Thailand, west of the Malay Peninsula.",
   "For the point, name this arm of the Indian Ocean named after the island chain on its western edge."
  ],
  "a": "Andaman Sea",
  "alt": [
   "Burma Sea"
  ],
  "prompt": [],
  "t": 5,
  "x": "The Andaman Sea is famous for its coral reefs and clear water.",
  "redset": ""
 },
 {
  "id": "us-mauna-kea",
  "region": "us",
  "cat": "mountain",
  "clues": [
   "Some of the world's biggest telescopes sit on its summit, above most of the clouds.",
   "Measured from its base on the ocean floor, it is taller than Mount Everest.",
   "Snow often caps it in winter, even though it is in the tropics.",
   "For the point, name this dormant volcano on Hawaii's Big Island, the highest point in Hawaii."
  ],
  "a": "Mauna Kea",
  "alt": [],
  "prompt": [],
  "t": 4,
  "x": "Its name means 'white mountain' in Hawaiian, after its snow.",
  "redset": ""
 },
 {
  "id": "africa-namib",
  "region": "africa",
  "cat": "desert",
  "clues": [
   "Some of the tallest sand dunes on Earth rise at Sossusvlei in this desert.",
   "Fog rolling in from the cold ocean gives beetles here the water they need.",
   "It is often called the oldest desert in the world.",
   "For the point, name this coastal desert that gives Namibia its name."
  ],
  "a": "Namib Desert",
  "alt": [
   "Namib"
  ],
  "prompt": [],
  "t": 4,
  "x": "Some Namib beetles stand on their heads in the fog so drops roll down into their mouths.",
  "redset": ""
 },
 {
  "id": "us-chesapeake",
  "region": "us",
  "cat": "water",
  "clues": [
   "Blue crabs from this bay are a famous Maryland food.",
   "Annapolis, home of the U.S. Naval Academy, sits near its shore.",
   "It is the largest estuary in the United States, where fresh river water mixes with salty ocean water.",
   "For the point, name this bay split between Maryland and Virginia."
  ],
  "a": "Chesapeake Bay",
  "alt": [
   "Chesapeake"
  ],
  "prompt": [],
  "t": 4,
  "x": "More than 150 rivers and streams flow into the Chesapeake.",
  "redset": ""
 },
 {
  "id": "us-great-salt-lake",
  "region": "us",
  "cat": "lake",
  "clues": [
   "Its water is so salty that brine shrimp and brine flies are almost the only animals that live in it.",
   "It is left over from Lake Bonneville, a huge Ice Age lake.",
   "Utah's capital sits just southeast of it.",
   "For the point, name this largest saltwater lake in the Western Hemisphere, in Utah."
  ],
  "a": "Great Salt Lake",
  "alt": [],
  "prompt": [],
  "t": 3,
  "x": "People float easily in it because the salty water is so dense.",
  "redset": ""
 },
 {
  "id": "oceania-fiji",
  "region": "oceania",
  "cat": "country",
  "clues": [
   "This country is made of more than 300 islands, but most of its people live on the biggest one, Viti Levu.",
   "Its rugby sevens team won the country's very first Olympic medal, a gold, at the 2016 Games in Rio.",
   "For the point, name this South Pacific island country in Melanesia whose capital is Suva."
  ],
  "a": "Fiji",
  "alt": [
   "Fiji",
   "Republic of Fiji",
   "Fiji Islands"
  ],
  "prompt": [],
  "t": 3,
  "x": "Only about 110 of its islands have people living on them all year.",
  "redset": ""
 },
 {
  "id": "oceania-uluru",
  "region": "oceania",
  "cat": "landmark",
  "clues": [
   "Since 2019, visitors are no longer allowed to climb this landmark, because the Anangu people hold it sacred.",
   "This giant block of sandstone rises about 1,100 feet over flat desert in the Northern Territory and glows fiery red at sunset.",
   "For the point, name this huge red rock near the middle of Australia, once called Ayers Rock."
  ],
  "a": "Uluru",
  "alt": [
   "Uluru",
   "Ayers Rock",
   "Uluru Ayers Rock"
  ],
  "prompt": [],
  "t": 2,
  "x": "At about 1,142 feet tall, it is taller than the Eiffel Tower.",
  "redset": ""
 },
 {
  "id": "africa-lake-victoria",
  "region": "africa",
  "cat": "lake",
  "clues": [
   "Its water is shared by three countries: Tanzania has the biggest part, then Uganda, then Kenya.",
   "The Nile River begins its long trip north where water spills out of this lake near the town of Jinja in Uganda.",
   "For the point, name this largest lake in Africa, named for a British queen."
  ],
  "a": "Lake Victoria",
  "alt": [
   "Lake Victoria",
   "Victoria",
   "Victoria Nyanza",
   "Nyanza"
  ],
  "prompt": [],
  "t": 3,
  "x": "The British explorer John Hanning Speke named it after Queen Victoria in 1858.",
  "redset": ""
 },
 {
  "id": "europe-rhine",
  "region": "europe",
  "cat": "river",
  "clues": [
   "An old legend says a maiden named Lorelei sat on a tall cliff above this river, singing so sweetly that sailors crashed their boats.",
   "This river starts in the Swiss Alps, flows through Lake Constance, and forms part of the border between Switzerland and Germany.",
   "For the point, name this river that flows past Cologne in Germany and reaches the North Sea in the Netherlands."
  ],
  "a": "Rhine River",
  "alt": [
   "Rhine",
   "Rhine River",
   "the Rhine",
   "Rhein",
   "Rijn"
  ],
  "prompt": [],
  "t": 3,
  "x": "Big barges carry so much cargo on it that it is one of the busiest rivers in the world.",
  "redset": ""
 },
 {
  "id": "canada-hudson-bay",
  "region": "canada",
  "cat": "water",
  "clues": [
   "Each fall, hundreds of polar bears gather near the town of Churchill, Manitoba, waiting for this huge body of water to freeze so they can hunt seals on the ice.",
   "This giant inland sea of northern Canada touches the provinces of Manitoba, Ontario, and Quebec, and every island in it belongs to Nunavut.",
   "For the point, name this huge bay named after the English explorer Henry Hudson."
  ],
  "a": "Hudson Bay",
  "alt": [
   "Hudson's Bay",
   "Hudsons Bay"
  ],
  "prompt": [],
  "t": 3,
  "x": "The Hudson's Bay Company, started in 1670 to trade furs around this bay, is one of the oldest companies in North America.",
  "redset": ""
 },
 {
  "id": "canada-st-lawrence-river",
  "region": "canada",
  "cat": "river",
  "clues": [
   "The world's southernmost group of beluga whales lives where this river widens into a salty estuary.",
   "French explorer Jacques Cartier sailed up this river in 1535, and today Quebec City and Montreal sit on its banks.",
   "For the point, name this river that flows out of Lake Ontario toward the Atlantic Ocean, carrying the water of the Great Lakes to the sea."
  ],
  "a": "St. Lawrence River",
  "alt": [
   "Saint Lawrence River",
   "St Lawrence River",
   "St. Lawrence",
   "St Lawrence",
   "Saint Lawrence",
   "Saint-Laurent",
   "Fleuve Saint-Laurent"
  ],
  "prompt": [],
  "t": 3,
  "x": "Locks on the St. Lawrence Seaway lift big ships step by step, so they can sail from the Atlantic all the way to the Great Lakes.",
  "redset": ""
 },
 {
  "id": "oceania-tahiti",
  "region": "oceania",
  "cat": "island",
  "clues": [
   "The French painter Paul Gauguin lived on this island in the 1890s and filled his paintings with its bright colors and people.",
   "Many of its beaches have black sand, made from the dark volcanic rock that the whole island is built from.",
   "For the point, name this largest island of French Polynesia, home to the capital city, Papeete."
  ],
  "a": "Tahiti",
  "alt": [
   "Tahiti Island",
   "Tahiti Nui"
  ],
  "prompt": [
   "French Polynesia",
   "Society Islands"
  ],
  "t": 3,
  "x": "The island is really two old volcanoes joined by a thin neck of land: big Tahiti Nui and little Tahiti Iti.",
  "redset": ""
 },
 {
  "id": "oceania-canberra",
  "region": "oceania",
  "cat": "city",
  "clues": [
   "In 1912, the American architects Walter Burley Griffin and Marion Mahony Griffin won a contest to design this planned city, and its big lake is named after Walter.",
   "It was built almost from scratch, inland and partway between the two biggest cities of its country, Sydney and Melbourne.",
   "For the point, name this capital city of Australia, which many people wrongly think is Sydney."
  ],
  "a": "Canberra",
  "alt": [],
  "prompt": [],
  "t": 2,
  "x": "Canberra's name is often said to come from an Aboriginal word meaning 'meeting place.'",
  "redset": ""
 },
 {
  "id": "europe-paris",
  "region": "europe",
  "cat": "city",
  "clues": [
   "This city hosted the Summer Olympics in 2024, exactly one hundred years after the last time it hosted them.",
   "Its Notre-Dame Cathedral reopened in 2024 after a fire, and the Seine flows past the Louvre, the museum that holds the Mona Lisa.",
   "For the point, name this capital of France, home of the Eiffel Tower."
  ],
  "a": "Paris",
  "alt": [
   "Paris"
  ],
  "prompt": [],
  "t": 1,
  "x": "The Eiffel Tower was meant to stand for only 20 years, but it became too famous to take down.",
  "redset": ""
 },
 {
  "id": "europe-moscow",
  "region": "europe",
  "cat": "city",
  "clues": [
   "This city's subway stations are so grand, with chandeliers and mosaics, that people call them underground palaces.",
   "Red Square, the onion domes of St. Basil's Cathedral, and the old walled fortress called the Kremlin are all in this city.",
   "For the point, name this capital of Russia."
  ],
  "a": "Moscow",
  "alt": [
   "Moscow",
   "Moskva"
  ],
  "prompt": [],
  "t": 2,
  "x": "Some of its metro stations are so deep they were used as shelters during World War II.",
  "redset": ""
 },
 {
  "id": "europe-scotland",
  "region": "europe",
  "cat": "country",
  "clues": [
   "Bagpipes, kilts in patterns called tartan, and the legend of a lake monster named Nessie all come from this land, whose national animal is the unicorn.",
   "Its Ben Nevis is the tallest mountain in the United Kingdom, and its capital, Edinburgh, has a castle on an old volcanic rock.",
   "For the point, name this country that covers the northern part of Great Britain."
  ],
  "a": "Scotland",
  "alt": [
   "Scotland",
   "Alba"
  ],
  "prompt": [],
  "t": 2,
  "x": "Scotland has about 790 islands, though only about 100 of them have people living on them.",
  "redset": ""
 },
 {
  "id": "europe-norway",
  "region": "europe",
  "cat": "country",
  "clues": [
   "Every December this country gives London a giant Christmas tree to say thank you for Britain's help in World War II.",
   "The Nobel Peace Prize is handed out in its capital, and long, narrow sea inlets called fjords cut deep into its coast.",
   "For the point, name this Scandinavian country whose capital is Oslo."
  ],
  "a": "Norway",
  "alt": [
   "Norway",
   "Kingdom of Norway",
   "Norge"
  ],
  "prompt": [],
  "t": 2,
  "x": "In its far north, the sun does not set at all for weeks in summer.",
  "redset": ""
 },
 {
  "id": "asia-kashmir",
  "region": "asia",
  "cat": "region",
  "clues": [
   "Families live on wooden houseboats on Dal Lake in this region's city of Srinagar.",
   "India, Pakistan, and China each control part of this mountain region high in the Himalaya and Karakoram ranges.",
   "For the point, name this disputed region whose goats gave their name to a soft, fine wool called cashmere."
  ],
  "a": "Kashmir",
  "alt": [
   "Kashmir",
   "Jammu and Kashmir",
   "Kashmir Valley"
  ],
  "prompt": [],
  "t": 3,
  "x": "Kashmir is also famous for saffron, the expensive spice grown from crocus flowers.",
  "redset": ""
 },
 {
  "id": "asia-siberia",
  "region": "asia",
  "cat": "region",
  "clues": [
   "Lake Baikal, the deepest lake on Earth, lies in this huge region, and its village of Oymyakon is one of the coldest places where people live.",
   "Great rivers like the Ob, the Yenisei, and the Lena flow north across its forests and frozen ground to the Arctic Ocean.",
   "For the point, name this vast, cold region that makes up most of Russia east of the Ural Mountains."
  ],
  "a": "Siberia",
  "alt": [
   "Siberia",
   "Sibir"
  ],
  "prompt": [],
  "t": 2,
  "x": "Siberia alone is bigger than the whole United States.",
  "redset": ""
 },
 {
  "id": "latam-patagonia",
  "region": "latam",
  "cat": "region",
  "clues": [
   "Penguins nest along this region's coasts, and hikers come from around the world to see the granite towers of Torres del Paine.",
   "Strong winds sweep across its dry grasslands and glaciers, and its southern edge looks across the water to Tierra del Fuego.",
   "For the point, name this region at the southern tip of South America, shared by Argentina and Chile."
  ],
  "a": "Patagonia",
  "alt": [
   "Patagonia"
  ],
  "prompt": [],
  "t": 2,
  "x": "An old story says explorers named it for giants they thought lived there.",
  "redset": ""
 },
 {
  "id": "asia-euphrates",
  "region": "asia",
  "cat": "river",
  "clues": [
   "This river rises in the mountains of eastern Turkey, and the ruins of the ancient city of Babylon stand near its banks.",
   "It flows across Syria and Iraq, then joins its twin river to form the Shatt al-Arab before reaching the Persian Gulf.",
   "For the point, name this river that, together with the Tigris, framed the ancient land of Mesopotamia."
  ],
  "a": "Euphrates",
  "alt": [
   "Euphrates",
   "Euphrates River"
  ],
  "prompt": [],
  "t": 3,
  "x": "Mesopotamia means 'the land between the rivers.'",
  "redset": ""
 },
 {
  "id": "latam-sao-paulo",
  "region": "latam",
  "cat": "city",
  "clues": [
   "This city has one of the largest Japanese communities anywhere outside Japan, and more people live in its metro area than in any other city south of the equator.",
   "It shares its name with the richest state in its country, and its giant Avenida Paulista is the center of business.",
   "For the point, name this largest city in Brazil."
  ],
  "a": "Sao Paulo",
  "alt": [
   "Sao Paulo",
   "São Paulo",
   "Saint Paul Brazil"
  ],
  "prompt": [],
  "t": 2,
  "x": "It is named after Saint Paul, because Jesuit priests founded it on his feast day in 1554.",
  "redset": ""
 },
 {
  "id": "asia-qatar",
  "region": "asia",
  "cat": "country",
  "clues": [
   "This country hosted the 2022 men's soccer World Cup, the first one ever held in the Middle East.",
   "It covers a small peninsula sticking out into the Persian Gulf, and its only land border is with Saudi Arabia.",
   "For the point, name this rich country, a giant producer of natural gas, whose capital is Doha."
  ],
  "a": "Qatar",
  "alt": [
   "Qatar",
   "State of Qatar"
  ],
  "prompt": [],
  "t": 3,
  "x": "Qatar is one of the richest countries in the world for each person who lives there.",
  "redset": ""
 },
 {
  "id": "africa-senegal",
  "region": "africa",
  "cat": "country",
  "clues": [
   "This country's Lake Retba, called Lac Rose, turns pink because of tiny algae that love salty water.",
   "Its capital, Dakar, sits at the westernmost point of mainland Africa, and it almost completely wraps around the small country of The Gambia.",
   "For the point, name this West African country named for the river on its northern border."
  ],
  "a": "Senegal",
  "alt": [
   "Senegal",
   "Republic of Senegal"
  ],
  "prompt": [],
  "t": 3,
  "x": "For years, the famous Dakar Rally car race ended in its capital.",
  "redset": ""
 },
 {
  "id": "us-indiana",
  "region": "us",
  "cat": "state",
  "clues": [
   "Abraham Lincoln spent much of his boyhood in this state, and its steel city of Gary sits at the southern tip of Lake Michigan.",
   "Every May, hundreds of thousands of fans fill a racetrack in its capital to watch the Indy 500 car race.",
   "For the point, name this Midwestern 'Hoosier State' whose capital is Indianapolis."
  ],
  "a": "Indiana",
  "alt": [
   "Indiana"
  ],
  "prompt": [],
  "t": 2,
  "x": "The Indianapolis Motor Speedway is so big that the Rose Bowl, Yankee Stadium, and the Roman Colosseum could all fit inside its oval.",
  "redset": ""
 },
 {
  "id": "us-louisiana",
  "region": "us",
  "cat": "state",
  "clues": [
   "This state is divided into parishes instead of counties, and Cajun music and spicy gumbo come from its swampy bayous.",
   "Its capital, Baton Rouge, means 'red stick' in French, and its largest city throws the famous Mardi Gras parades.",
   "For the point, name this state where the Mississippi River reaches the Gulf, named after the French king Louis the Fourteenth."
  ],
  "a": "Louisiana",
  "alt": [
   "Louisiana"
  ],
  "prompt": [],
  "t": 2,
  "x": "The Louisiana Purchase of 1803 doubled the size of the young United States.",
  "redset": ""
 },
 {
  "id": "us-minnesota",
  "region": "us",
  "cat": "state",
  "clues": [
   "The Mississippi River begins in this state at Lake Itasca, and its Mall of America is one of the biggest shopping malls in the country.",
   "Nicknamed the 'Land of 10,000 Lakes,' it really has more than 11,000, and its Northwest Angle is the northernmost point of the lower 48 states.",
   "For the point, name this state whose Twin Cities are Minneapolis and Saint Paul."
  ],
  "a": "Minnesota",
  "alt": [
   "Minnesota"
  ],
  "prompt": [],
  "t": 2,
  "x": "Its name comes from a Dakota word meaning 'sky-tinted water.'",
  "redset": ""
 },
 {
  "id": "us-atlantic-city",
  "region": "us",
  "cat": "city",
  "clues": [
   "The streets on a Monopoly board, like Boardwalk and Park Place, are named after streets in this city.",
   "In 1870 this New Jersey seaside city built the first boardwalk in America, so sand would stay out of its hotels.",
   "For the point, name this resort city on Absecon Island whose name includes the ocean it faces."
  ],
  "a": "Atlantic City",
  "alt": [
   "Atlantic City"
  ],
  "prompt": [],
  "t": 3,
  "x": "Saltwater taffy candy became famous on its boardwalk.",
  "redset": ""
 },
 {
  "id": "us-lake-tahoe",
  "region": "us",
  "cat": "lake",
  "clues": [
   "This lake is so deep that it does not freeze over in winter, and its water is so clear that it glows bright blue.",
   "It sits high in the Sierra Nevada mountains, and the state line between California and Nevada runs right through it.",
   "For the point, name this large mountain lake, the biggest alpine lake in North America."
  ],
  "a": "Lake Tahoe",
  "alt": [
   "Lake Tahoe",
   "Tahoe"
  ],
  "prompt": [],
  "t": 3,
  "x": "If you poured out all its water, it would cover the whole state of California about 14 inches deep.",
  "redset": ""
 },
 {
  "id": "us-connecticut-river",
  "region": "us",
  "cat": "river",
  "clues": [
   "This river begins in a chain of lakes near the Canadian border and is the longest river in New England.",
   "It forms the border between Vermont and New Hampshire, then flows south through Massachusetts past the city of Springfield.",
   "For the point, name this river that shares its name with the state where it reaches Long Island Sound."
  ],
  "a": "Connecticut River",
  "alt": [
   "Connecticut River",
   "Connecticut"
  ],
  "prompt": [],
  "t": 3,
  "x": "Its name comes from a Native American word meaning 'long tidal river.'",
  "redset": ""
 },
 {
  "id": "europe-ural-mountains",
  "region": "europe",
  "cat": "mountain",
  "clues": [
   "These old, worn-down mountains are rich in iron, copper, and gemstones, and the big city of Yekaterinburg sits on their eastern side.",
   "They stretch about 1,500 miles from the Arctic Ocean south toward Kazakhstan, all inside Russia.",
   "For the point, name this mountain range that marks the usual dividing line between Europe and Asia."
  ],
  "a": "Ural Mountains",
  "alt": [
   "Ural Mountains",
   "Urals",
   "Ural"
  ],
  "prompt": [],
  "t": 2,
  "x": "Travelers can stand at a marker with one foot in Europe and the other in Asia.",
  "redset": ""
 },
 {
  "id": "africa-atlas-mountains",
  "region": "africa",
  "cat": "mountain",
  "clues": [
   "Berber villages cling to the slopes of these mountains, and their highest peak, Toubkal, rises above the city of Marrakesh.",
   "They stretch across Morocco, Algeria, and Tunisia and block rain clouds from reaching the Sahara.",
   "For the point, name this North African mountain range that shares its name with a book of maps."
  ],
  "a": "Atlas Mountains",
  "alt": [
   "Atlas Mountains",
   "Atlas"
  ],
  "prompt": [],
  "t": 3,
  "x": "In Greek myths, a giant named Atlas held up the sky, and people said he was turned into these mountains.",
  "redset": ""
 },
 {
  "id": "europe-thames",
  "region": "europe",
  "cat": "river",
  "clues": [
   "This river begins in the Cotswold Hills and flows past the university city of Oxford and the royal castle at Windsor.",
   "Tower Bridge, which lifts open to let tall ships pass, and the Houses of Parliament both stand beside it.",
   "For the point, name this river that flows through London to the North Sea."
  ],
  "a": "Thames",
  "alt": [
   "Thames",
   "Thames River",
   "River Thames"
  ],
  "prompt": [],
  "t": 2,
  "x": "Every year, Oxford and Cambridge universities race rowing boats on it.",
  "redset": ""
 },
 {
  "id": "europe-berlin",
  "region": "europe",
  "cat": "city",
  "clues": [
   "A wall split this city in two from 1961 until 1989, and pieces of it are still on display today.",
   "The Brandenburg Gate, topped by a chariot pulled by four horses, stands in this city on the Spree River.",
   "For the point, name this capital and largest city of Germany."
  ],
  "a": "Berlin",
  "alt": [
   "Berlin"
  ],
  "prompt": [],
  "t": 2,
  "x": "Berlin has more bridges than Venice.",
  "redset": ""
 },
 {
  "id": "europe-brussels",
  "region": "europe",
  "cat": "city",
  "clues": [
   "A tiny bronze statue of a little boy called Manneken Pis is one of this city's best-known sights, and the Atomium looks like a giant metal molecule.",
   "The headquarters of the European Union and of NATO are both in this city, famous for waffles and chocolate.",
   "For the point, name this capital of Belgium."
  ],
  "a": "Brussels",
  "alt": [
   "Brussels",
   "Bruxelles",
   "Brussel"
  ],
  "prompt": [],
  "t": 3,
  "x": "The little statue owns hundreds of costumes that people dress it in for special days.",
  "redset": ""
 },
 {
  "id": "us-denver",
  "region": "us",
  "cat": "city",
  "clues": [
   "One of the steps of this city's State Capitol is marked as exactly one mile above sea level.",
   "Its baseball team plays at Coors Field, and the Rocky Mountains rise just to its west.",
   "For the point, name this 'Mile High City,' the capital of Colorado."
  ],
  "a": "Denver",
  "alt": [
   "Denver"
  ],
  "prompt": [],
  "t": 2,
  "x": "Baseballs fly farther in its thin mountain air.",
  "redset": ""
 },
 {
  "id": "asia-colombo",
  "region": "asia",
  "cat": "city",
  "clues": [
   "Families fly kites on Galle Face Green, a seaside park in this port city that has traded across the Indian Ocean for centuries.",
   "It is the largest city of an island country south of India, though the official capital, Sri Jayawardenepura Kotte, lies right next door.",
   "For the point, name this largest city of Sri Lanka."
  ],
  "a": "Colombo",
  "alt": [
   "Colombo"
  ],
  "prompt": [],
  "t": 3,
  "x": "Sri Lanka was called Ceylon until 1972, and it is famous for its tea.",
  "redset": ""
 },
 {
  "id": "europe-portugal",
  "region": "europe",
  "cat": "country",
  "clues": [
   "Explorers like Vasco da Gama sailed from this country to find a sea route to India, and its southern Algarve coast is famous for golden cliffs.",
   "Sweet port wine comes from its northern city of Porto, and its people sing sad songs called fado.",
   "For the point, name this country on the Iberian Peninsula whose capital is Lisbon."
  ],
  "a": "Portugal",
  "alt": [
   "Portugal",
   "Portuguese Republic"
  ],
  "prompt": [],
  "t": 2,
  "x": "The city of Porto gave the whole country its name.",
  "redset": ""
 },
 {
  "id": "asia-cambodia",
  "region": "asia",
  "cat": "country",
  "clues": [
   "Every rainy season the Mekong floods this country so much that the river draining its great lake, Tonle Sap, flows backward.",
   "The temple of Angkor Wat, the largest religious monument in the world, is so loved here that it appears on the national flag.",
   "For the point, name this Southeast Asian country whose capital is Phnom Penh."
  ],
  "a": "Cambodia",
  "alt": [
   "Cambodia",
   "Kingdom of Cambodia",
   "Kampuchea"
  ],
  "prompt": [],
  "t": 3,
  "x": "Angkor Wat was built about 900 years ago as a Hindu temple and later became Buddhist.",
  "redset": ""
 },
 {
  "id": "asia-thailand",
  "region": "asia",
  "cat": "country",
  "clues": [
   "This is the only country in Southeast Asia that was never ruled by a European power, and it was once called Siam.",
   "Visitors shop at its floating markets and swim off its island of Phuket, and the elephant is its national animal.",
   "For the point, name this country whose capital is Bangkok."
  ],
  "a": "Thailand",
  "alt": [
   "Thailand",
   "Kingdom of Thailand",
   "Siam"
  ],
  "prompt": [],
  "t": 2,
  "x": "Its name means 'land of the free.'",
  "redset": ""
 },
 {
  "id": "latam-bahamas",
  "region": "latam",
  "cat": "country",
  "clues": [
   "Pigs swim out to visiting boats at one of this country's beaches, and its Harbour Island is famous for pink sand.",
   "Christopher Columbus first landed in the Americas on one of its islands in 1492, and its nearest islands lie only about 50 miles off Florida.",
   "For the point, name this Atlantic island country whose capital is Nassau."
  ],
  "a": "The Bahamas",
  "alt": [
   "The Bahamas",
   "Bahamas",
   "Commonwealth of the Bahamas"
  ],
  "prompt": [],
  "t": 3,
  "x": "Its name may come from the Spanish 'baja mar,' meaning 'shallow sea.'",
  "redset": ""
 },
 {
  "id": "africa-ethiopia",
  "region": "africa",
  "cat": "country",
  "clues": [
   "A legend says coffee was discovered here when a goat herder noticed his goats dancing after eating red berries.",
   "Its runners win many Olympic medals, and its capital, Addis Ababa, is the home of the African Union.",
   "For the point, name this country in the Horn of Africa, the most populous country in the world without a coastline."
  ],
  "a": "Ethiopia",
  "alt": [
   "Ethiopia"
  ],
  "prompt": [],
  "t": 3,
  "x": "Ethiopia uses its own calendar, which has 13 months.",
  "redset": ""
 },
 {
  "id": "asia-kazakhstan",
  "region": "asia",
  "cat": "country",
  "clues": [
   "Rockets carrying astronauts blast off from the Baikonur Cosmodrome in this country, which Russia rents.",
   "It is the largest country in the world without a coastline, and its modern capital is Astana.",
   "For the point, name this Central Asian country, ending in '-stan,' that stretches between Russia and China."
  ],
  "a": "Kazakhstan",
  "alt": [
   "Kazakhstan",
   "Republic of Kazakhstan"
  ],
  "prompt": [],
  "t": 3,
  "x": "Apples are thought to have first grown wild in its mountains.",
  "redset": ""
 },
 {
  "id": "latam-haiti",
  "region": "latam",
  "cat": "country",
  "clues": [
   "After winning freedom from France in 1804, this country built a giant mountaintop fortress called the Citadelle Laferriere.",
   "It was the first country created by a successful revolt of enslaved people, and it shares the island of Hispaniola with the Dominican Republic.",
   "For the point, name this Caribbean country whose capital is Port-au-Prince."
  ],
  "a": "Haiti",
  "alt": [
   "Haiti",
   "Republic of Haiti",
   "Ayiti"
  ],
  "prompt": [],
  "t": 3,
  "x": "Its name comes from a Taino word meaning 'land of high mountains.'",
  "redset": ""
 },
 {
  "id": "europe-ireland",
  "region": "europe",
  "cat": "country",
  "clues": [
   "Its Cliffs of Moher rise about 700 feet straight out of the Atlantic, and its people honor Saint Patrick as their patron saint.",
   "Nicknamed the Emerald Isle for its green fields, it shares its island with a part of the United Kingdom.",
   "For the point, name this country whose capital is Dublin."
  ],
  "a": "Ireland",
  "alt": [
   "Ireland",
   "Republic of Ireland",
   "Eire"
  ],
  "prompt": [],
  "t": 2,
  "x": "There are no wild snakes in Ireland.",
  "redset": ""
 },
 {
  "id": "europe-ukraine",
  "region": "europe",
  "cat": "country",
  "clues": [
   "Its Chernobyl power plant had the world's worst nuclear accident in 1986, and its blue-and-yellow flag is said to show a blue sky over wheat fields.",
   "The Dnieper River flows through its capital, Kyiv, and its people have defended their land since Russia invaded in 2022.",
   "For the point, name this largest country lying entirely in Europe."
  ],
  "a": "Ukraine",
  "alt": [
   "Ukraine"
  ],
  "prompt": [],
  "t": 3,
  "x": "Ukraine grows so much wheat and sunflowers that it is called a breadbasket of Europe.",
  "redset": ""
 },
 {
  "id": "africa-ghana",
  "region": "africa",
  "cat": "country",
  "clues": [
   "The Volta River was dammed here to make Lake Volta, one of the largest human-made lakes in the world.",
   "Once called the Gold Coast, this country won its independence in 1957, one of the first in Africa to break free of colonial rule.",
   "For the point, name this West African country whose capital is Accra."
  ],
  "a": "Ghana",
  "alt": [
   "Ghana",
   "Republic of Ghana"
  ],
  "prompt": [],
  "t": 3,
  "x": "Ghana grows some of the world's cocoa, the beans that make chocolate.",
  "redset": ""
 },
 {
  "id": "africa-lake-tanganyika",
  "region": "africa",
  "cat": "lake",
  "clues": [
   "This lake is the second deepest in the world after Lake Baikal, and it is the longest freshwater lake on Earth.",
   "Tanzania, the Democratic Republic of the Congo, Burundi, and Zambia all touch its shores, and hundreds of kinds of colorful cichlid fish live in it.",
   "For the point, name this African Great Lake whose name is also the old name of mainland Tanzania."
  ],
  "a": "Lake Tanganyika",
  "alt": [
   "Lake Tanganyika",
   "Tanganyika"
  ],
  "prompt": [],
  "t": 4,
  "x": "Most of the fish in it live nowhere else on Earth.",
  "redset": ""
 },
 {
  "id": "europe-stonehenge",
  "region": "europe",
  "cat": "landmark",
  "clues": [
   "Some of this monument's smaller 'bluestones' were dragged about 150 miles from the hills of Wales.",
   "On the longest day of summer, the sun rises in line with its stones, and crowds gather to watch.",
   "For the point, name this ancient circle of giant standing stones on Salisbury Plain in England."
  ],
  "a": "Stonehenge",
  "alt": [
   "Stonehenge"
  ],
  "prompt": [],
  "t": 2,
  "x": "Its first circle was dug about 5,000 years ago, before the pyramids of Egypt.",
  "redset": ""
 },
 {
  "id": "oceania-new-guinea",
  "region": "oceania",
  "cat": "island",
  "clues": [
   "Birds of paradise with dazzling feathers live in this island's rainforests, and its peak Puncak Jaya is the tallest mountain on any island.",
   "The island is split almost in half: Indonesia governs the western part, and an independent country rules the east.",
   "For the point, name this island north of Australia, the second-largest island in the world."
  ],
  "a": "New Guinea",
  "alt": [
   "New Guinea"
  ],
  "prompt": [],
  "t": 3,
  "x": "Only Greenland is a bigger island.",
  "redset": ""
 },
 {
  "id": "oceania-new-south-wales",
  "region": "oceania",
  "cat": "province",
  "clues": [
   "The first British settlement in Australia was founded here in 1788, and its Blue Mountains get their color from a haze given off by eucalyptus trees.",
   "The small territory around the national capital, Canberra, was carved out of this state.",
   "For the point, name this Australian state whose capital is Sydney."
  ],
  "a": "New South Wales",
  "alt": [
   "New South Wales",
   "NSW"
  ],
  "prompt": [],
  "t": 3,
  "x": "It is the state where the most Australians live.",
  "redset": ""
 },
 {
  "id": "oceania-christmas-island",
  "region": "oceania",
  "cat": "island",
  "clues": [
   "Every year tens of millions of red crabs march from this island's forests down to the sea to lay their eggs, and roads close to let them pass.",
   "This small island in the Indian Ocean, south of Java, belongs to Australia.",
   "For the point, name this island named for the holiday on which an English sea captain spotted it in 1643."
  ],
  "a": "Christmas Island",
  "alt": [
   "Christmas Island"
  ],
  "prompt": [],
  "t": 4,
  "x": "Another Christmas Island, now called Kiritimati, is in the Pacific nation of Kiribati.",
  "redset": ""
 },
 {
  "id": "world-delta",
  "region": "world",
  "cat": "concept",
  "clues": [
   "The Nile and the Mississippi both end in this kind of landform, where a river slows down and drops its mud.",
   "The Ganges and Brahmaputra rivers build the biggest one in the world, in Bangladesh and India.",
   "For the point, name this fan- or triangle-shaped landform at a river's mouth, named after a Greek letter."
  ],
  "a": "delta",
  "alt": [
   "delta",
   "river delta",
   "deltas"
  ],
  "prompt": [],
  "t": 2,
  "x": "The Greek letter delta looks like a triangle: Δ.",
  "redset": ""
 },
 {
  "id": "world-meander",
  "region": "world",
  "cat": "concept",
  "clues": [
   "When one of these gets cut off from its river, it can leave behind a curved lake called an oxbow lake.",
   "Slow rivers on flat land make many of these, wearing away the outside bank and dropping sand on the inside bank.",
   "For the point, name this word for a loop or bend in a river, taken from the name of a winding river in Turkey."
  ],
  "a": "meander",
  "alt": [
   "meander",
   "meanders",
   "river meander"
  ],
  "prompt": [],
  "t": 3,
  "x": "From high above, a meandering river looks like a snake.",
  "redset": ""
 },
 {
  "id": "world-shield-volcano",
  "region": "world",
  "cat": "concept",
  "clues": [
   "Mauna Loa in Hawaii, the largest active volcano on Earth, is one of these.",
   "Runny, hot lava flows a long way before it hardens, building this broad, gently sloping kind of mountain instead of a steep cone.",
   "For the point, name this type of volcano shaped like a warrior's round shield lying on the ground."
  ],
  "a": "shield volcano",
  "alt": [
   "shield volcano",
   "shield volcanoes",
   "shield"
  ],
  "prompt": [],
  "t": 3,
  "x": "Iceland and Hawaii both have many of them.",
  "redset": ""
 },
 {
  "id": "world-sand-dunes",
  "region": "world",
  "cat": "concept",
  "clues": [
   "Some of the tallest ones on Earth rise more than 1,000 feet in Namibia and in China's Badain Jaran Desert.",
   "Wind piles up loose grains to build these hills, and they slowly creep across the land in the direction the wind blows.",
   "For the point, name these hills of sand, like the ones in Colorado's Great Sand Dunes National Park."
  ],
  "a": "sand dunes",
  "alt": [
   "sand dunes",
   "sand dune",
   "dunes",
   "dune"
  ],
  "prompt": [],
  "t": 2,
  "x": "Some of them 'sing,' making a low humming sound when sand slides down them.",
  "redset": ""
 },
 {
  "id": "world-saffron",
  "region": "world",
  "cat": "concept",
  "clues": [
   "It takes tens of thousands of flowers to make a single pound of this spice, so it is one of the most expensive foods in the world.",
   "Iran grows most of the world's supply, picking the three red threads from the middle of each purple crocus flower by hand.",
   "For the point, name this golden-yellow spice used in Spanish paella and Indian biryani."
  ],
  "a": "saffron",
  "alt": [
   "saffron"
  ],
  "prompt": [],
  "t": 3,
  "x": "Saffron turns rice a bright yellow-orange.",
  "redset": ""
 },
 {
  "id": "world-union-jack",
  "region": "world",
  "cat": "concept",
  "clues": [
   "This flag combines the crosses of three patron saints: Saint George, Saint Andrew, and Saint Patrick.",
   "It appears in the corner of the flags of Australia, New Zealand, Fiji, and Tuvalu.",
   "For the point, name this red, white, and blue flag of the United Kingdom, nicknamed with a sailor's word for a flag."
  ],
  "a": "Union Jack",
  "alt": [
   "Union Jack",
   "Union Flag"
  ],
  "prompt": [],
  "t": 3,
  "x": "Wales is part of the United Kingdom but is not shown on the flag.",
  "redset": ""
 },
 {
  "id": "us-lake-of-the-woods",
  "region": "us",
  "cat": "lake",
  "clues": [
   "Because of a mistake on an old map, a piece of Minnesota called the Northwest Angle is cut off by this lake and can only be reached by land through Canada.",
   "This lake has more than 14,000 islands and is shared by Minnesota and the Canadian provinces of Ontario and Manitoba.",
   "For the point, name this lake whose name sounds like a forest."
  ],
  "a": "Lake of the Woods",
  "alt": [
   "Lake of the Woods"
  ],
  "prompt": [],
  "t": 4,
  "x": "Kids from the Northwest Angle once rode a boat or snowmobile to school.",
  "redset": ""
 },
 {
  "id": "us-brazos",
  "region": "us",
  "cat": "river",
  "clues": [
   "The Texas Declaration of Independence was signed in 1836 at a small town on this river named Washington.",
   "Spanish explorers gave this river a name meaning 'the arms of God,' and it flows past the city of Waco.",
   "For the point, name this river of central Texas that empties into the Gulf near Freeport."
  ],
  "a": "Brazos River",
  "alt": [
   "Brazos River",
   "Brazos",
   "Rio Brazos",
   "Brazos de Dios"
  ],
  "prompt": [],
  "t": 4,
  "x": "The town is still called Washington-on-the-Brazos.",
  "redset": ""
 },
 {
  "id": "us-mobile-bay",
  "region": "us",
  "cat": "water",
  "clues": [
   "In an 1864 Civil War battle here, Admiral David Farragut led Union ships past underwater mines.",
   "On some summer nights, crabs and fish crowd into its shallow water in an event locals call a 'jubilee,' and the battleship USS Alabama is parked on it as a museum.",
   "For the point, name this Alabama bay named for the port city at its northern end."
  ],
  "a": "Mobile Bay",
  "alt": [
   "Mobile Bay"
  ],
  "prompt": [],
  "t": 4,
  "x": "Mobile held the first Mardi Gras celebrations in what is now the United States.",
  "redset": ""
 },
 {
  "id": "oceania-new-caledonia",
  "region": "oceania",
  "cat": "island",
  "clues": [
   "This island territory is rich in nickel, a metal used in batteries, and one of the largest lagoons on Earth surrounds it.",
   "France governs it, and its capital, Noumea, lies in the Pacific east of Australia.",
   "For the point, name this Melanesian island group whose name means 'New Scotland.'"
  ],
  "a": "New Caledonia",
  "alt": [
   "New Caledonia",
   "Nouvelle-Caledonie",
   "Kanaky"
  ],
  "prompt": [],
  "t": 4,
  "x": "Captain James Cook named it because its hills reminded him of Scotland.",
  "redset": ""
 },
 {
  "id": "europe-dnieper",
  "region": "europe",
  "cat": "river",
  "clues": [
   "This river rises in the Valdai Hills of Russia, flows through Belarus, and was once a trade route for Viking merchants sailing to Constantinople.",
   "Ukraine's capital, Kyiv, stands on its banks, and it ends in the Black Sea near the city of Kherson.",
   "For the point, name this longest river of Ukraine."
  ],
  "a": "Dnieper",
  "alt": [
   "Dnieper",
   "Dnieper River",
   "Dnipro",
   "Dnepr"
  ],
  "prompt": [],
  "t": 4,
  "x": "Ukrainians call it the Dnipro.",
  "redset": ""
 },
 {
  "id": "africa-gulf-of-aden",
  "region": "africa",
  "cat": "water",
  "clues": [
   "Ships crossing this body of water have had to watch for pirates from Somalia, so navies from many countries patrol it.",
   "The narrow Bab-el-Mandeb strait links it to the Red Sea, and the country of Djibouti sits at its western end.",
   "For the point, name this gulf between Yemen and Somalia, named for a Yemeni port city."
  ],
  "a": "Gulf of Aden",
  "alt": [
   "Gulf of Aden",
   "Aden"
  ],
  "prompt": [],
  "t": 4,
  "x": "Ships going between Europe and Asia through the Suez Canal pass through it.",
  "redset": ""
 },
 {
  "id": "oceania-darwin",
  "region": "oceania",
  "cat": "city",
  "clues": [
   "This city was bombed by Japanese planes in 1942 and was nearly flattened again by Cyclone Tracy on Christmas Day in 1974.",
   "It is the capital of Australia's Northern Territory and the Australian capital city closest to Asia.",
   "For the point, name this city named after the famous scientist who sailed on HMS Beagle."
  ],
  "a": "Darwin",
  "alt": [
   "Darwin"
  ],
  "prompt": [],
  "t": 4,
  "x": "Saltwater crocodiles live in the rivers around it.",
  "redset": ""
 },
 {
  "id": "latam-gran-chaco",
  "region": "latam",
  "cat": "region",
  "clues": [
   "Bolivia and Paraguay fought a long war over this region in the 1930s, partly because they hoped it held oil.",
   "Hot, dry forests and thorny scrub cover this lowland, which spreads across Paraguay, Bolivia, Argentina, and a little of Brazil.",
   "For the point, name this great South American plain whose name may come from a native word for 'hunting land.'"
  ],
  "a": "Gran Chaco",
  "alt": [
   "Gran Chaco",
   "Chaco",
   "El Chaco"
  ],
  "prompt": [],
  "t": 5,
  "x": "Giant armadillos and jaguars live in it.",
  "redset": ""
 },
 {
  "id": "africa-bioko",
  "region": "africa",
  "cat": "island",
  "clues": [
   "This volcanic island, once called Fernando Po after a Portuguese explorer, lies in the Gulf of Guinea off the coast of Cameroon.",
   "The city of Malabo stands on its north coast and was its country's capital until the government moved to the mainland.",
   "For the point, name this largest island of Equatorial Guinea."
  ],
  "a": "Bioko",
  "alt": [
   "Bioko",
   "Bioko Island"
  ],
  "prompt": [],
  "t": 4,
  "x": "Rare monkeys called drills live in its rainforests.",
  "redset": ""
 },
 {
  "id": "europe-lake-ladoga",
  "region": "europe",
  "cat": "lake",
  "clues": [
   "During World War II, trucks drove across this lake's frozen ice on the 'Road of Life' to bring food to the trapped city of Leningrad.",
   "It lies in northwest Russia near Finland, and the Neva River carries its water to Saint Petersburg.",
   "For the point, name this largest lake that lies entirely in Europe."
  ],
  "a": "Lake Ladoga",
  "alt": [
   "Lake Ladoga",
   "Ladoga"
  ],
  "prompt": [],
  "t": 4,
  "x": "Rare ringed seals live in its fresh water.",
  "redset": ""
 },
 {
  "id": "europe-madeira",
  "region": "europe",
  "cat": "island",
  "clues": [
   "Soccer star Cristiano Ronaldo was born on this island, and its main airport is named after him.",
   "In its capital, Funchal, visitors ride wicker sleds down steep streets, and the island gives its name to a sweet wine.",
   "For the point, name this Portuguese island in the Atlantic Ocean off the coast of Morocco."
  ],
  "a": "Madeira",
  "alt": [
   "Madeira",
   "Madeira Island",
   "Madeira Islands"
  ],
  "prompt": [],
  "t": 4,
  "x": "Its name means 'wood' in Portuguese, because it was covered in forest.",
  "redset": ""
 },
 {
  "id": "europe-lombardy",
  "region": "europe",
  "cat": "province",
  "clues": [
   "Lake Como, where movie stars keep vacation homes, lies in this region in the foothills of the Alps.",
   "It is the region of its country where the most people live, and its capital is the fashion and business city of Milan.",
   "For the point, name this northern Italian region named after a Germanic people called the Lombards."
  ],
  "a": "Lombardy",
  "alt": [
   "Lombardy",
   "Lombardia"
  ],
  "prompt": [],
  "t": 4,
  "x": "Lake Como is shaped like an upside-down letter Y.",
  "redset": ""
 },
 {
  "id": "oceania-western-australia",
  "region": "oceania",
  "cat": "province",
  "clues": [
   "Smiling little animals called quokkas live on Rottnest Island off this state's coast, and whale sharks visit its Ningaloo Reef.",
   "Its capital, Perth, is one of the most isolated big cities in the world.",
   "For the point, name this largest state of Australia, covering the whole western third of the continent."
  ],
  "a": "Western Australia",
  "alt": [
   "Western Australia"
  ],
  "prompt": [],
  "t": 3,
  "x": "It is about four times the size of Texas.",
  "redset": ""
 },
 {
  "id": "europe-zermatt",
  "region": "europe",
  "cat": "city",
  "clues": [
   "Gasoline cars are not allowed in this mountain village, so visitors arrive by train and ride small electric taxis.",
   "It sits in the canton of Valais at the foot of the pointed Matterhorn, which inspired a famous Disneyland ride.",
   "For the point, name this car-free Swiss ski village."
  ],
  "a": "Zermatt",
  "alt": [
   "Zermatt"
  ],
  "prompt": [],
  "t": 4,
  "x": "Skiers can ski from it across the border into Italy.",
  "redset": ""
 },
 {
  "id": "africa-victoria-falls",
  "region": "africa",
  "cat": "landmark",
  "clues": [
   "Local people call this place Mosi-oa-Tunya, which means 'the smoke that thunders,' because its spray rises like smoke and can be seen from miles away.",
   "In 1855, the Scottish explorer David Livingstone became the first European to see it, and he named it after the queen of his country.",
   "For the point, name this giant waterfall on the Zambezi River, between Zambia and Zimbabwe, the largest sheet of falling water on Earth."
  ],
  "a": "Victoria Falls",
  "alt": [
   "Mosi-oa-Tunya",
   "Mosi oa Tunya"
  ],
  "prompt": [
   "Victoria",
   "Zambezi",
   "Zambezi River"
  ],
  "t": 2,
  "x": "It is about a mile wide and roughly twice as tall as Niagara Falls.",
  "redset": ""
 },
 {
  "id": "canada-bay-of-fundy",
  "region": "canada",
  "cat": "water",
  "clues": [
   "At Hopewell Rocks on its shore, tall rock towers shaped like flowerpots stand in deep water at high tide, and people walk around their bases on the sea floor at low tide.",
   "This inlet of the Atlantic Ocean lies between the Canadian provinces of New Brunswick and Nova Scotia.",
   "For the point, name this bay with the highest tides in the world, where the water can rise and fall more than 50 feet."
  ],
  "a": "Bay of Fundy",
  "alt": [
   "Fundy"
  ],
  "prompt": [],
  "t": 3,
  "x": "The highest tides ever measured on Earth were recorded at Burntcoat Head, on its Nova Scotia side.",
  "redset": ""
 },
 {
  "id": "oceania-murray-river",
  "region": "oceania",
  "cat": "river",
  "clues": [
   "Paddle steamers once carried wool and wheat along this waterway, and its biggest branch is the Darling.",
   "It begins in the Australian Alps and forms much of the border between the states of New South Wales and Victoria.",
   "For the point, name this longest river in Australia, which reaches the ocean in the state of South Australia."
  ],
  "a": "Murray River",
  "alt": [
   "Murray",
   "River Murray"
  ],
  "prompt": [],
  "t": 3,
  "x": "A giant fish called the Murray cod lives in it and can grow longer than a grown-up is tall.",
  "redset": ""
 },
 {
  "id": "oceania-wellington",
  "region": "oceania",
  "cat": "city",
  "clues": [
   "The prime minister of this country works in a round building in this city nicknamed the Beehive.",
   "Ferries leave this windy harbor city to cross Cook Strait to the South Island.",
   "It took over as capital from Auckland in 1865 and sits at the southern tip of the North Island.",
   "For the point, name this capital of New Zealand, the southernmost national capital in the world."
  ],
  "a": "Wellington",
  "alt": [],
  "prompt": [],
  "t": 3,
  "x": "People call it 'Windy Wellington' because strong winds funnel through Cook Strait.",
  "redset": ""
 }
];

/* GeoBee Quest — Geography Championships written exam (USGC style).
 *
 * The IAC US Geography Championships written exam (4th Grade and Under) is
 * a 40-question multiple-choice paper in 35 minutes (+2 right, −1 wrong,
 * 0 blank) plus a free-response paper worth 75% of the score. The multiple
 * choice comes in themed sets of five: geography-concept sets (biomes,
 * glacial and coastal landforms, migration, population, political
 * geography...) and sets that refer to a numbered map or a diagram.
 * Format from IAC's posted 2025 and 2026 exams (iacompetitions.com,
 * "US Geography Championships past questions"). Every question here is
 * original; none is copied from an IAC paper.
 *
 * Item: q = question, a = answer, d = 3 wrong choices, x = why (shown after).
 * Progress is keyed by set id + position: only APPEND items to a set.
 */
window.GEO_USGC = (function () {
  const SETS = [
    { id: "biomes", name: "Biomes", emoji: "🌳", qs: [
      { q: "Which biome has long, cold winters and forests of cone-bearing evergreen trees like spruce and fir?", a: "taiga", d: ["savanna", "tropical rainforest", "chaparral"], x: "The taiga (boreal forest) stretches across Canada, Scandinavia and Russia." },
      { q: "A grassland with scattered trees, a long dry season, and animals like zebras and giraffes is called what?", a: "savanna", d: ["tundra", "taiga", "temperate rainforest"], x: "Savannas cover much of East Africa, such as the Serengeti." },
      { q: "Which biome has permafrost, a frozen layer of ground that never thaws?", a: "tundra", d: ["savanna", "temperate deciduous forest", "hot desert"], x: "Tundra is found in the far north and on high mountains. Only mosses, lichens and small shrubs grow." },
      { q: "Which biome has the greatest number of different plant and animal species?", a: "tropical rainforest", d: ["tundra", "hot desert", "taiga"], x: "Warm temperatures plus lots of rain all year make rainforests the most biodiverse biome." },
      { q: "Trees that drop their leaves every autumn are the main feature of which biome?", a: "temperate deciduous forest", d: ["taiga", "tropical rainforest", "tundra"], x: "Deciduous means 'falling off'. Much of the eastern United States is this biome." },
      { q: "The prairies of the central United States and the steppes of Central Asia are examples of which biome?", a: "temperate grassland", d: ["savanna", "tundra", "chaparral"], x: "Temperate grasslands have rich soil, so many are now farmland for wheat and corn." },
      { q: "Which biome has hot, dry summers, mild rainy winters and shrubby plants, as around the Mediterranean Sea and in southern California?", a: "chaparral (Mediterranean)", d: ["taiga", "tundra", "tropical rainforest"], x: "This 'Mediterranean climate' is also found in parts of Chile, South Africa and Australia." },
    ] },
    { id: "glacial", name: "Glacial landforms", emoji: "🧊", qs: [
      { q: "What is the name for the pile of rocks and soil pushed along and left behind at the farthest point a glacier reached?", a: "terminal moraine", d: ["drumlin", "cirque", "fjord"], x: "Long Island in New York is partly a terminal moraine." },
      { q: "A bowl-shaped hollow carved high on a mountain where a glacier begins is called what?", a: "cirque", d: ["esker", "delta", "mesa"], x: "When the ice melts, a cirque often holds a small lake called a tarn." },
      { q: "What shape of valley does a glacier usually carve?", a: "U-shaped", d: ["V-shaped", "star-shaped", "S-shaped"], x: "Rivers cut V-shaped valleys. Glaciers scrape wide U-shaped ones, like Yosemite Valley." },
      { q: "A long, narrow sea inlet between steep cliffs, carved by a glacier and flooded by the sea, is called what?", a: "fjord", d: ["lagoon", "atoll", "oxbow lake"], x: "Norway, New Zealand, Chile and Alaska are famous for fjords." },
      { q: "A small lake that forms when a buried block of glacier ice melts and leaves a hollow is called what?", a: "kettle lake", d: ["oxbow lake", "crater lake", "salt lake"], x: "Minnesota and Wisconsin have thousands of kettle lakes." },
      { q: "A long, winding ridge of sand and gravel left by a river that flowed under a glacier is called what?", a: "esker", d: ["arête", "butte", "spit"], x: "Eskers look like railway embankments snaking across the land." },
      { q: "A sharp, knife-edged ridge between two cirques is called what?", a: "arête", d: ["moraine", "drumlin", "plateau"], x: "When three or more cirques meet, they can carve a pointed 'horn' like the Matterhorn." },
    ] },
    { id: "coastal", name: "Coastal landforms", emoji: "🏖️", qs: [
      { q: "A pillar of rock standing in the sea, left behind when waves erode the cliff around it, is called what?", a: "sea stack", d: ["sandbar", "tombolo", "delta"], x: "Waves carve a cave, then an arch, and when the arch collapses a stack is left." },
      { q: "The movement of sand along a beach by waves that hit the shore at an angle is called what?", a: "longshore drift", d: ["subduction", "weathering", "upwelling"], x: "It moves sand in a zigzag along the coast and builds spits." },
      { q: "A narrow finger of sand that sticks out from the coast into the sea is called what?", a: "spit", d: ["fjord", "cirque", "mesa"], x: "Cape Cod's tip in Massachusetts is a hooked spit." },
      { q: "A sandbar that connects an island to the mainland is called what?", a: "tombolo", d: ["esker", "atoll", "isthmus"], x: "St Michael's Mount in England is joined to land by a tombolo at low tide." },
      { q: "Where a river's fresh water meets and mixes with salty tidal sea water is called what?", a: "estuary", d: ["oasis", "aquifer", "watershed"], x: "Chesapeake Bay is the largest estuary in the United States." },
      { q: "A ring-shaped coral reef or island around a lagoon is called what?", a: "atoll", d: ["fjord", "butte", "delta"], x: "Atolls form on top of sunken volcanoes. The Maldives are made of atolls." },
      { q: "A long, narrow island of sand that runs along a coast, like the Outer Banks of North Carolina, is called what?", a: "barrier island", d: ["volcanic island", "continental island", "atoll"], x: "Barrier islands shield the mainland from storm waves." },
    ] },
    { id: "rivers", name: "Rivers & river landforms", emoji: "🏞️", qs: [
      { q: "A U-shaped lake left behind when a river's curving loop gets cut off is called what?", a: "oxbow lake", d: ["kettle lake", "crater lake", "tarn"], x: "Rivers bend into loops called meanders, and floods can cut a loop off." },
      { q: "What is the name for all the land drained by one river and its tributaries?", a: "drainage basin (watershed)", d: ["floodplain", "delta", "estuary"], x: "The Mississippi drainage basin covers about 40% of the lower 48 states." },
      { q: "A smaller river that flows into a bigger river is called what?", a: "tributary", d: ["distributary", "mouth", "source"], x: "The Missouri and Ohio Rivers are tributaries of the Mississippi." },
      { q: "Flat land next to a river that is covered with water when the river floods is called what?", a: "floodplain", d: ["plateau", "mesa", "moraine"], x: "Floods leave behind silt, so floodplains have rich farmland." },
      { q: "The place where a river begins is called its what?", a: "source", d: ["mouth", "delta", "channel"], x: "The end of a river, where it empties into a sea or lake, is its mouth." },
      { q: "A fan-shaped area of land built from mud and sand where a river enters the sea is called what?", a: "delta", d: ["canyon", "spit", "cirque"], x: "The Nile, Ganges and Mississippi all have large deltas." },
      { q: "An imaginary line along mountain ridges that decides whether rivers flow toward one ocean or another is called what?", a: "continental divide", d: ["prime meridian", "fall line", "tree line"], x: "In North America the Great Divide runs along the Rocky Mountains." },
    ] },
    { id: "desert", name: "Deserts & dry lands", emoji: "🏜️", qs: [
      { q: "A flat-topped hill with steep sides that is wider than it is tall is called what?", a: "mesa", d: ["butte", "cirque", "drumlin"], x: "Mesa is Spanish for table. A smaller, narrower one is a butte." },
      { q: "A crescent-shaped sand dune with its horns pointing downwind is called what?", a: "barchan", d: ["esker", "moraine", "tombolo"], x: "Barchans move slowly across the desert as the wind blows sand over them." },
      { q: "A place in a desert where underground water reaches the surface so plants can grow is called what?", a: "oasis", d: ["wadi", "playa", "mesa"], x: "Oases have been stopping points for desert travelers for thousands of years." },
      { q: "A dry riverbed in a desert that fills with water only after rare rainstorms is called what?", a: "wadi (arroyo)", d: ["fjord", "estuary", "oxbow"], x: "Wadi is the Arabic word. In the American Southwest it is called an arroyo." },
      { q: "A dry area on the side of a mountain range away from the wind, because the mountains block the rain, is called what?", a: "rain shadow", d: ["monsoon", "tree line", "floodplain"], x: "Death Valley lies in the rain shadow of the Sierra Nevada." },
      { q: "When farmland at the edge of a desert dries out and becomes desert, that process is called what?", a: "desertification", d: ["urbanization", "deforestation", "irrigation"], x: "The Sahel, just south of the Sahara, is threatened by desertification." },
      { q: "What is the largest hot desert in the world?", a: "Sahara", d: ["Gobi", "Mojave", "Kalahari"], x: "Antarctica is the largest desert of all (deserts are defined by low rain), but the Sahara is the largest hot desert." },
    ] },
    { id: "plates", name: "Plates, volcanoes & earthquakes", emoji: "🌋", qs: [
      { q: "The ring of volcanoes and earthquakes around the edge of the Pacific Ocean is called what?", a: "Ring of Fire", d: ["Pacific Crest", "Great Rift", "Mid-Atlantic Ridge"], x: "About three-quarters of the world's active volcanoes are on the Ring of Fire." },
      { q: "The point on Earth's surface directly above where an earthquake starts is called what?", a: "epicenter", d: ["fault line", "magma chamber", "crater"], x: "The point underground where it starts is the focus (hypocenter)." },
      { q: "When one tectonic plate slides down underneath another plate, the process is called what?", a: "subduction", d: ["erosion", "deposition", "longshore drift"], x: "Subduction zones create deep ocean trenches and chains of volcanoes, like the Andes." },
      { q: "A giant ocean wave caused by an undersea earthquake is called what?", a: "tsunami", d: ["monsoon", "typhoon", "tornado"], x: "Tsunami is a Japanese word meaning 'harbor wave'." },
      { q: "The Himalayas formed when the Indian Plate crashed into which other plate?", a: "Eurasian Plate", d: ["Pacific Plate", "African Plate", "Nazca Plate"], x: "The plates are still pushing, so Mount Everest grows a few millimeters each year." },
      { q: "Iceland sits on top of which underwater mountain chain where two plates pull apart?", a: "Mid-Atlantic Ridge", d: ["Ring of Fire", "Great Dividing Range", "Mariana Trench"], x: "At the ridge, new crust forms as the North American and Eurasian plates spread apart." },
      { q: "A wide, gently sloping volcano built from runny lava flows, like those in Hawaii, is called what?", a: "shield volcano", d: ["cinder cone", "caldera", "stratovolcano"], x: "Mauna Loa in Hawaii is the largest shield volcano on Earth." },
      { q: "What instrument measures the shaking of an earthquake?", a: "seismograph", d: ["barometer", "anemometer", "thermometer"], x: "Earthquake strength is reported as a magnitude number." },
    ] },
    { id: "rocks", name: "Rocks & the rock cycle", emoji: "🪨", qs: [
      { q: "Rock that forms when melted magma or lava cools and hardens is called what?", a: "igneous", d: ["sedimentary", "metamorphic", "fossil"], x: "Granite and basalt are igneous rocks." },
      { q: "Rock made from layers of sand, mud or shells pressed together over time is called what?", a: "sedimentary", d: ["igneous", "metamorphic", "volcanic"], x: "Sandstone and limestone are sedimentary. Fossils are usually found in them." },
      { q: "Rock that has been changed by great heat and pressure deep underground is called what?", a: "metamorphic", d: ["sedimentary", "igneous", "pumice"], x: "Limestone can change into marble, and shale into slate." },
      { q: "The breaking down of rock into smaller pieces by water, ice, wind or plants is called what?", a: "weathering", d: ["subduction", "lithification", "melting"], x: "Weathering breaks rock in place. Erosion carries the pieces away." },
      { q: "Igneous rock that cools quickly on Earth's surface after a volcanic eruption is called what?", a: "extrusive igneous rock", d: ["intrusive igneous rock", "sedimentary rock", "metamorphic rock"], x: "Basalt and obsidian are extrusive. Rock that cools slowly underground, like granite, is intrusive." },
      { q: "The process that moves weathered bits of rock from one place to another is called what?", a: "erosion", d: ["evaporation", "deposition", "compaction"], x: "When the moving material is dropped somewhere new, that is deposition." },
    ] },
    { id: "climate", name: "Weather & climate", emoji: "⛅", qs: [
      { q: "A seasonal wind that brings heavy summer rains to South Asia is called what?", a: "monsoon", d: ["tornado", "jet stream", "trade wind"], x: "Farmers in India depend on monsoon rains for their crops." },
      { q: "Imaginary lines that measure how far north or south of the Equator a place is are called what?", a: "lines of latitude", d: ["lines of longitude", "time zones", "contour lines"], x: "Lines of longitude (meridians) measure east and west of the Prime Meridian." },
      { q: "What is the difference between weather and climate?", a: "weather is day to day; climate is the average over many years", d: ["weather is only about rain; climate is only about wind", "they mean exactly the same thing", "climate changes every hour; weather never changes"], x: "Climate is usually measured as an average over 30 years." },
      { q: "A hurricane that forms in the western Pacific Ocean near Asia is called what?", a: "typhoon", d: ["tornado", "monsoon", "blizzard"], x: "The same kind of storm is a hurricane in the Atlantic and a cyclone in the Indian Ocean." },
      { q: "Why are places near the Equator usually hot all year?", a: "the sun's rays hit them most directly", d: ["they are closer to the moon", "they have the most mountains", "the ocean is always frozen there"], x: "Near the poles, sunlight hits at a low angle and is spread out, so it is colder." },
      { q: "Cities are often warmer than the countryside around them because pavement and buildings hold heat. This is called what?", a: "urban heat island", d: ["greenhouse gas", "rain shadow", "El Niño"], x: "Planting trees and green roofs help cool cities down." },
      { q: "Which line of latitude marks the farthest point north where the sun can be directly overhead?", a: "Tropic of Cancer", d: ["Tropic of Capricorn", "Arctic Circle", "Prime Meridian"], x: "The Tropic of Capricorn is the matching line in the Southern Hemisphere." },
    ] },
    { id: "population", name: "Population geography", emoji: "👨‍👩‍👧", qs: [
      { q: "The number of people living in each square mile or square kilometer of land is called what?", a: "population density", d: ["birth rate", "life expectancy", "migration rate"], x: "Bangladesh and Singapore have some of the highest population densities in the world." },
      { q: "The average number of years a person can expect to live is called what?", a: "life expectancy", d: ["death rate", "dependency ratio", "literacy rate"], x: "Better health care, clean water and food raise life expectancy." },
      { q: "A model with stages that shows how birth and death rates change as a country develops is called what?", a: "demographic transition model", d: ["concentric zone model", "von Thünen model", "gravity model"], x: "In stage 2, death rates drop fast while birth rates stay high, so population grows quickly." },
      { q: "A country with many older people and few children is said to have what kind of population?", a: "aging population", d: ["booming population", "nomadic population", "urban population"], x: "Japan and Italy have aging populations, which puts pressure on pensions and health care." },
      { q: "A chart with bars for each age group, males on one side and females on the other, is called what?", a: "population pyramid", d: ["climate graph", "pie chart", "line of best fit"], x: "A wide base means many young children. A narrow base means few births." },
      { q: "Which two countries each have more than one billion people?", a: "India and China", d: ["China and Russia", "India and the United States", "Brazil and Indonesia"], x: "India passed China as the most populous country in 2023." },
      { q: "The number of babies born each year for every 1,000 people is called what?", a: "birth rate", d: ["death rate", "life expectancy", "population density"], x: "Population grows when the birth rate is higher than the death rate (not counting migration)." },
    ] },
    { id: "migration", name: "Migration", emoji: "🧳", qs: [
      { q: "Things that make people want to leave their home, like war or no jobs, are called what?", a: "push factors", d: ["pull factors", "trade barriers", "exports"], x: "Pull factors attract people to a new place, like jobs and safety." },
      { q: "People who flee to another country to escape war or persecution are called what?", a: "refugees", d: ["tourists", "commuters", "nomads"], x: "People forced from their homes who stay inside their own country are internally displaced persons." },
      { q: "The movement of people from the countryside into cities is called what?", a: "urbanization", d: ["suburbanization", "deforestation", "colonization"], x: "More than half of the world's people now live in cities." },
      { q: "A person who moves INTO a new country to live there is called what?", a: "immigrant", d: ["emigrant", "refugee camp", "citizen of birth"], x: "The same person is an emigrant from the country they left." },
      { q: "When many highly educated people such as doctors and engineers leave a country for better jobs elsewhere, it is called what?", a: "brain drain", d: ["chain migration", "baby boom", "gentrification"], x: "Brain drain can make it harder for the home country to develop." },
      { q: "A community of people living far from their ancestral homeland, like Indians living around the world, is called what?", a: "diaspora", d: ["enclave state", "metropolis", "commonwealth"], x: "The Indian, Chinese, Irish and Armenian diasporas are among the largest." },
      { q: "Herders who move with their animals between summer and winter pastures practice what?", a: "transhumance", d: ["urbanization", "irrigation", "subduction"], x: "It is still practiced in mountains such as the Alps and the Himalayas." },
    ] },
    { id: "political", name: "Political geography", emoji: "🏛️", qs: [
      { q: "A country with no coastline is called what?", a: "landlocked", d: ["peninsular", "archipelagic", "fragmented"], x: "Switzerland, Bolivia, Mongolia and Nepal are landlocked." },
      { q: "A country made of many separate pieces of land, like Indonesia or the Philippines, is called what?", a: "fragmented state", d: ["compact state", "landlocked state", "enclave"], x: "Indonesia is made of more than 17,000 islands." },
      { q: "A country or territory completely surrounded by one other country is called what?", a: "enclave", d: ["exclave", "peninsula", "isthmus"], x: "Lesotho is surrounded by South Africa. Vatican City and San Marino are surrounded by Italy." },
      { q: "A part of a country separated from the rest of it by other countries' land, like Alaska or Kaliningrad, is called what?", a: "exclave", d: ["enclave", "capital district", "colony"], x: "Kaliningrad is a piece of Russia between Poland and Lithuania." },
      { q: "A group of people with a shared culture but no country of their own, like the Kurds, is called what?", a: "stateless nation", d: ["city-state", "superpower", "landlocked state"], x: "Kurdish lands are split among Turkey, Iraq, Iran and Syria." },
      { q: "A country that is just one city, like Singapore or Monaco, is called what?", a: "city-state", d: ["province", "commonwealth", "territory"], x: "Vatican City is the smallest city-state in the world." },
      { q: "A country where power is shared between a national government and state governments, like the US, has what system?", a: "federal", d: ["unitary", "monarchy", "colonial"], x: "In a unitary state, like France, the national government holds most of the power." },
    ] },
    { id: "urban", name: "Cities & urban geography", emoji: "🏙️", qs: [
      { q: "A city with more than 10 million people is called what?", a: "megacity", d: ["suburb", "village", "exurb"], x: "Tokyo, Delhi, Shanghai and São Paulo are megacities." },
      { q: "Neighborhoods built around the edge of a big city, where many people live and drive into the city to work, are called what?", a: "suburbs", d: ["slums", "downtowns", "rural villages"], x: "Suburbs grew fast in the US after cars and highways spread." },
      { q: "The uncontrolled spreading of a city outward into the countryside is called what?", a: "urban sprawl", d: ["urban renewal", "gentrification", "terracing"], x: "Sprawl uses up farmland and makes people depend on cars." },
      { q: "A city that is much larger and more important than any other city in its country, like Paris in France, is called what?", a: "primate city", d: ["satellite city", "port city", "ghost town"], x: "London, Bangkok and Mexico City are also primate cities." },
      { q: "The main business area in the middle of a city is called what?", a: "central business district", d: ["suburb", "industrial park", "greenbelt"], x: "Downtown skyscrapers are usually in the central business district." },
      { q: "Crowded neighborhoods of homemade shelters, often on the edge of big cities in developing countries, are called what?", a: "informal settlements (slums)", d: ["gated communities", "suburbs", "plantations"], x: "In Brazil they are called favelas." },
    ] },
    { id: "economy", name: "Resources, farming & economy", emoji: "🌾", qs: [
      { q: "Resources that can be used up and do not come back, like oil and coal, are called what?", a: "nonrenewable resources", d: ["renewable resources", "human resources", "cash crops"], x: "Sun, wind and water power are renewable." },
      { q: "Cutting step-like flat fields into the side of a hill for farming is called what?", a: "terracing", d: ["irrigation", "crop rotation", "slash and burn"], x: "Rice terraces in the Philippines and Bali are famous." },
      { q: "Bringing water to dry farmland through canals, pipes or sprinklers is called what?", a: "irrigation", d: ["fertilization", "deforestation", "desertification"], x: "Egypt's farms depend on irrigation from the Nile." },
      { q: "A crop grown mainly to sell for money, like coffee or cotton, is called what?", a: "cash crop", d: ["subsistence crop", "cover crop", "wild crop"], x: "Subsistence farmers grow food mainly to feed their own families." },
      { q: "Goods a country sells to other countries are called what?", a: "exports", d: ["imports", "tariffs", "subsidies"], x: "Goods a country buys from other countries are imports." },
      { q: "Clearing a forest by cutting and burning it to make room for farms and ranches is called what?", a: "deforestation", d: ["reforestation", "urbanization", "terracing"], x: "Cattle ranching and soybean farming are big causes of deforestation in the Amazon." },
      { q: "Mining, fishing, farming and logging belong to which sector of the economy?", a: "primary sector", d: ["secondary sector", "tertiary sector", "quaternary sector"], x: "Factories are the secondary sector, and services like teaching are the tertiary sector." },
    ] },
    { id: "culture", name: "Cultural geography", emoji: "🎎", qs: [
      { q: "A common language used by people who speak different native languages, like Swahili in East Africa, is called what?", a: "lingua franca", d: ["dialect", "pidgin", "mother tongue"], x: "English is a lingua franca around much of the world today." },
      { q: "The spreading of ideas, inventions or customs from one place to another is called what?", a: "cultural diffusion", d: ["subduction", "desertification", "erosion"], x: "Pizza spreading from Italy around the world is an example." },
      { q: "Which religion has the most followers in the world?", a: "Christianity", d: ["Buddhism", "Sikhism", "Shinto"], x: "Islam is the second largest. Hinduism is third." },
      { q: "Most people in India follow which religion?", a: "Hinduism", d: ["Buddhism", "Islam", "Christianity"], x: "India also has one of the largest Muslim populations in the world." },
      { q: "A different form of the same language spoken in one region, like British and American English, is called what?", a: "dialect", d: ["alphabet", "lingua franca", "diaspora"], x: "Dialects can differ in words, spelling and accent." },
      { q: "Which language has the most native speakers in the world?", a: "Mandarin Chinese", d: ["English", "Spanish", "Hindi"], x: "Spanish is second for native speakers. English has the most total speakers when learners are counted." },
    ] },
    { id: "maps", name: "Map skills", emoji: "🧭", qs: [
      { q: "The part of a map that explains what its symbols and colors mean is called what?", a: "legend (key)", d: ["scale", "compass rose", "grid"], x: "Always read the legend first on a thematic map." },
      { q: "A map that shows the height of the land with lines connecting points of equal elevation is called what?", a: "topographic map", d: ["political map", "road map", "climate map"], x: "The lines are contour lines. Lines close together mean a steep slope." },
      { q: "A map that shows one topic, like rainfall or population, is called what?", a: "thematic map", d: ["physical map", "political map", "globe"], x: "A map that shades areas by a number, like population per state, is a choropleth map." },
      { q: "The 0° line of longitude that runs through Greenwich, England is called what?", a: "Prime Meridian", d: ["Equator", "International Date Line", "Tropic of Cancer"], x: "The Equator is 0° latitude." },
      { q: "If a map's scale says 1 inch = 50 miles, how far apart are two cities that are 3 inches apart on the map?", a: "150 miles", d: ["53 miles", "50 miles", "300 miles"], x: "Multiply: 3 × 50 = 150 miles." },
      { q: "Why do flat world maps always distort something, such as the size of Greenland?", a: "a round Earth cannot be flattened without stretching it", d: ["mapmakers do not know Greenland's size", "Greenland moves every year", "maps are drawn from photos taken at night"], x: "On the Mercator map, Greenland looks as big as Africa, but Africa is about 14 times larger." },
      { q: "On most maps, which direction is at the top?", a: "north", d: ["south", "east", "west"], x: "The compass rose shows the directions on a map." },
    ] },
    { id: "environment", name: "Environment & hazards", emoji: "🌎", qs: [
      { q: "Gases like carbon dioxide that trap heat in Earth's atmosphere are called what?", a: "greenhouse gases", d: ["noble gases", "trade winds", "ozone holes"], x: "Burning coal, oil and gas adds carbon dioxide to the air." },
      { q: "Why does cutting down rainforests add to climate change?", a: "trees store carbon, and burning or cutting them releases carbon dioxide", d: ["trees make the sun hotter", "forests cause earthquakes", "trees block all rain"], x: "Fewer trees also means less carbon dioxide gets soaked up." },
      { q: "A country with a huge number of different plants and animals, like Brazil or Madagascar, is called what?", a: "megadiverse country", d: ["landlocked country", "fragmented state", "city-state"], x: "Most of Madagascar's animals, like lemurs, live nowhere else on Earth." },
      { q: "Which kind of storm is a spinning column of air that touches the ground and is most common in the central United States?", a: "tornado", d: ["typhoon", "monsoon", "tsunami"], x: "The area from Texas to South Dakota is nicknamed Tornado Alley." },
      { q: "Rain that is polluted by chemicals from burning fuels and can harm lakes and forests is called what?", a: "acid rain", d: ["monsoon rain", "orographic rain", "freezing rain"], x: "Acid rain comes mostly from sulfur and nitrogen gases." },
      { q: "Which of these is a result of melting glaciers and ice sheets?", a: "rising sea levels", d: ["more volcanoes", "longer days", "bigger deserts in Antarctica"], x: "Low islands like the Maldives and Tuvalu are at risk from rising seas." },
    ] },
    { id: "ushistory", name: "Historical geography of the US", emoji: "📜", qs: [
      { q: "The United States doubled in size in 1803 by buying land from France in what deal?", a: "Louisiana Purchase", d: ["Gadsden Purchase", "Alaska Purchase", "Oregon Treaty"], x: "President Thomas Jefferson then sent Lewis and Clark to explore it." },
      { q: "Which country sold Alaska to the United States in 1867?", a: "Russia", d: ["Canada", "Britain", "Spain"], x: "Many people called it 'Seward's Folly', but gold and oil were later found there." },
      { q: "Pioneers traveled west in covered wagons from Missouri toward the Pacific Northwest along which trail?", a: "Oregon Trail", d: ["Appalachian Trail", "Silk Road", "Pony Express Trail"], x: "The trip took about 4 to 6 months." },
      { q: "How many British colonies joined together to form the original United States?", a: "13", d: ["10", "15", "50"], x: "They were along the Atlantic coast, from New Hampshire to Georgia." },
      { q: "Which canal, opened in 1825, connected the Great Lakes to the Hudson River and New York City?", a: "Erie Canal", d: ["Panama Canal", "Suez Canal", "Welland Canal"], x: "It helped New York City grow into the biggest US port." },
      { q: "The discovery of gold in 1848 brought thousands of people rushing to which future state?", a: "California", d: ["Texas", "Florida", "Ohio"], x: "The miners who arrived in 1849 were called 'forty-niners'." },
    ] },
  ];

  // Free-response practice: the written half of the exam (75% of the USGC
  // score). Parent-marked: show the prompt, the child answers aloud or on
  // paper, then the parent ticks the model points he covered.
  const FR = [
    { topic: "Hazards", pts: 4, q: "Explain TWO reasons why more people die in earthquakes in poorer countries than in richer countries.", model: ["Buildings are not built to resist shaking (weaker materials, fewer building rules).", "Fewer emergency services, hospitals and rescue teams.", "Less money for warning systems and earthquake drills.", "More people live crowded together in unsafe housing."] },
    { topic: "Hazards", pts: 4, q: "Millions of people live close to Mount Vesuvius in Italy, an active volcano. Give TWO reasons why people choose to live near volcanoes.", model: ["Volcanic soil is very fertile, so farming is good (grapes, olives, vegetables).", "Tourism brings jobs and money.", "Families have lived there for generations; eruptions are rare in one lifetime.", "Geothermal energy and minerals."] },
    { topic: "Landforms", pts: 4, q: "Explain how a large plateau can slowly turn into mesas, then buttes, then a lone spire. Which force does the work?", model: ["Erosion by water (and wind) wears away the softer rock.", "The plateau is cut apart into smaller flat-topped mesas.", "Mesas wear down into narrower buttes.", "Buttes erode into thin spires or pinnacles; a hard cap rock protects the tops."] },
    { topic: "Landforms", pts: 4, q: "Explain how a sea stack forms. Use the words cave, arch and stack.", model: ["Waves attack a weak spot in a cliff (often on a headland) and erode a cave.", "The cave gets worn through the headland to make an arch.", "The top of the arch collapses, leaving a pillar of rock: the stack."] },
    { topic: "Landforms", pts: 4, q: "Draw a river meander (a big bend). Label the outside of the bend and the inside of the bend, and say where the river erodes and where it deposits sand.", model: ["Drawing shows a curved river channel.", "Outside bend: water is fastest and deepest, so it erodes (a river cliff).", "Inside bend: water is slowest, so it deposits sand and gravel (a point bar or beach).", "Arrow showing the direction the water flows."] },
    { topic: "Population", pts: 6, q: "Give THREE reasons why a country's birth rate usually goes down as the country develops.", model: ["More girls and women go to school and work, so families start later.", "Fewer babies die, so parents don't need to have as many children.", "Children cost more in cities (school, housing) and work less on farms.", "Family planning and medicine are easier to get.", "Pensions mean parents don't depend on many children in old age."] },
    { topic: "Population", pts: 4, q: "Japan has an aging population. Explain TWO problems this can cause for the country.", model: ["Fewer working-age people to do jobs and pay taxes.", "More money needed for pensions and health care for older people.", "Schools and towns in the countryside may empty out.", "Slower economic growth."] },
    { topic: "Resources", pts: 4, q: "Chile has some of the biggest copper mines in the world. Explain ONE way the mines help Chile and ONE way they can cause problems.", model: ["Help: selling copper earns money for the country, and mines create jobs.", "Problem: mining pollutes land and water and uses huge amounts of water in a dry desert.", "Problem: if the world price of copper drops, the economy suffers because it depends on one product."] },
    { topic: "Environment", pts: 4, q: "What is an endemic species? Give TWO reasons why islands like the Galápagos have so many of them.", model: ["An endemic species lives naturally in only one place on Earth.", "Islands are cut off by ocean, so animals cannot mix with others.", "Over a long time the animals change to fit the island (they evolve on their own).", "Each island can have different habitats, so species become different from island to island."] },
    { topic: "Environment", pts: 4, q: "Give TWO causes and TWO effects of deforestation in the Amazon rainforest.", model: ["Causes: cattle ranching, soybean farming, logging, mining, roads.", "Effects: animals lose their habitat, soil erosion, more carbon dioxide (climate change), less rain, indigenous people lose their land."] },
    { topic: "Maps", pts: 4, q: "Give TWO differences between a political map and a physical map.", model: ["A political map shows borders, countries, states and cities.", "A physical map shows landforms: mountains, rivers, deserts, elevation (often with colors or shading).", "Political maps use different colors for each country; physical maps use colors for height (green low, brown high)."] },
    { topic: "Maps", pts: 3, q: "On a map with the scale 1 cm = 25 km, two cities are 6 cm apart. How far apart are they really? Show your work.", model: ["6 × 25 = 150", "150 km", "(Full marks need the work shown.)"] },
    { topic: "Climate", pts: 4, q: "Explain why the western side of the Sierra Nevada gets lots of rain but Death Valley on the eastern side is very dry.", model: ["Moist air from the Pacific blows east and is pushed up the mountains.", "As it rises it cools and the water falls as rain or snow on the western (windward) side.", "The air that comes down the eastern (leeward) side is dry, making a rain shadow."] },
    { topic: "Migration", pts: 4, q: "Give TWO push factors and TWO pull factors that might make a family move from a village to a big city.", model: ["Push: few jobs, poor schools or hospitals, drought or crop failure, conflict.", "Pull: more jobs and higher wages, better schools and hospitals, family already in the city, entertainment and services."] },
  ];

  // ---------- numbered-map sets ----------
  // Picks countries of one region, numbers them on a zoomed world map, and
  // asks the "which number / what is at number N" questions.
  const REGIONS = [
    { id: "europe", name: "Europe", k: ["Europe"], skip: ["Russia"] },
    { id: "southasia", name: "South & Central Asia", only: ["India", "Pakistan", "Afghanistan", "Nepal", "Bhutan", "Bangladesh", "Sri Lanka", "Iran", "Kazakhstan", "Uzbekistan", "Turkmenistan", "Kyrgyzstan", "Tajikistan", "Myanmar", "China"] },
    { id: "seasia", name: "East & Southeast Asia", only: ["China", "Mongolia", "North Korea", "South Korea", "Japan", "Vietnam", "Laos", "Cambodia", "Thailand", "Myanmar", "Malaysia", "Indonesia", "Philippines", "Taiwan", "Papua New Guinea"] },
    { id: "mideast", name: "Middle East", only: ["Turkey", "Syria", "Iraq", "Iran", "Saudi Arabia", "Yemen", "Oman", "United Arab Emirates", "Qatar", "Kuwait", "Jordan", "Israel", "Lebanon", "Egypt", "Cyprus", "Georgia", "Armenia", "Azerbaijan"] },
    { id: "africa", name: "Africa", k: ["Africa"] },
    { id: "southamerica", name: "South America", k: ["South America"] },
    { id: "namerica", name: "North & Central America", k: ["North America"], skip: ["United States", "Canada"] },
  ];
  function bboxOf(d) {
    const nums = d.match(/-?\d+(\.\d+)?/g);
    if (!nums) return null;
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (let i = 0; i + 1 < nums.length; i += 2) {
      const x = +nums[i], y = +nums[i + 1];
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
    return { x0, y0, x1, y1 };
  }
  // the largest piece of a country's outline (mainland, not far islands)
  function mainPart(d) {
    let best = null, area = -1;
    for (const part of d.split(/(?=M)/)) {
      const b = bboxOf(part);
      if (!b) continue;
      const a = (b.x1 - b.x0) * (b.y1 - b.y0);
      if (a > area) { area = a; best = { d: part, b }; }
    }
    return best;
  }
  // label point: a spot inside the mainland, as far from its border as a
  // 14x14 grid search finds (a box centre can fall outside thin countries)
  function labelPoint(d) {
    const m = mainPart(d);
    if (!m) return null;
    const nums = m.d.match(/-?\d+(\.\d+)?/g).map(Number), pts = [];
    for (let i = 0; i + 1 < nums.length; i += 2) pts.push([nums[i], nums[i + 1]]);
    const inside = (x, y) => {
      let c = false;
      for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) {
        const [xi, yi] = pts[i], [xj, yj] = pts[j];
        if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) c = !c;
      }
      return c;
    };
    const { x0, y0, x1, y1 } = m.b;
    let best = { x: (x0 + x1) / 2, y: (y0 + y1) / 2 }, bestD = -1;
    for (let gx = 0.5; gx < 14; gx++) for (let gy = 0.5; gy < 14; gy++) {
      const x = x0 + ((x1 - x0) * gx) / 14, y = y0 + ((y1 - y0) * gy) / 14;
      if (!inside(x, y)) continue;
      let dmin = Infinity;
      for (const [px, py] of pts) { const dd = (px - x) ** 2 + (py - y) ** 2; if (dd < dmin) dmin = dd; }
      if (dmin > bestD) { bestD = dmin; best = { x, y }; }
    }
    return best;
  }
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const tierOf = (c) => c.t || 3;

  // Build one numbered map + 5 questions. countries = GEO_DATA.COUNTRIES.
  function mapSet(countries, maps, regionId, maxTier) {
    const R = REGIONS.find((r) => r.id === regionId) || REGIONS[Math.floor(Math.random() * REGIONS.length)];
    const world = maps.world.countries;
    const inRegion = countries.filter((c) => world[c.n] && (R.only ? R.only.includes(c.n) : R.k.includes(c.k) && !(R.skip || []).includes(c.n)));
    const pool = shuffle(inRegion.filter((c) => tierOf(c) <= (maxTier || 4)));
    if (pool.length < 6) return null;
    const marked = pool.slice(0, Math.min(10, pool.length));
    let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
    for (const c of marked) {
      const b = mainPart(world[c.n].d).b;
      x0 = Math.min(x0, b.x0); y0 = Math.min(y0, b.y0); x1 = Math.max(x1, b.x1); y1 = Math.max(y1, b.y1);
    }
    const pad = Math.max(x1 - x0, y1 - y0) * 0.08;
    const view = [x0 - pad, y0 - pad, x1 - x0 + 2 * pad, y1 - y0 + 2 * pad];
    const nums = shuffle(marked.map((_, i) => i + 1));
    const pins = marked.map((c, i) => ({ n: nums[i], name: c.n, at: labelPoint(world[c.n].d) }));
    const numOpts = (right) => shuffle([right, ...shuffle(pins.filter((p) => p.n !== right.n)).slice(0, 3)]).map((p) => String(p.n));
    const nameOpts = (right, field) => {
      const same = shuffle(inRegion.filter((c) => c.n !== right.n && c[field]));
      return shuffle([right[field], ...same.slice(0, 3).map((c) => c[field])]);
    };
    const qs = [];
    const order = shuffle(pins);
    const kinds = shuffle(["name", "name", "num", "cap", "num"]);
    kinds.forEach((kind, i) => {
      const p = order[i % order.length];
      const c = countries.find((x) => x.n === p.name);
      if (kind === "name") qs.push({ q: `Which country is shown at number ${p.n} on the map?`, a: c.n, opts: nameOpts(c, "n"), x: c.x || `${c.n} is in ${c.k}.`, country: c.n });
      else if (kind === "cap") qs.push({ q: `What is the capital of the country at number ${p.n} on the map?`, a: c.c, opts: nameOpts(c, "c"), x: `The country at ${p.n} is ${c.n}; its capital is ${c.c}.`, country: c.n });
      else qs.push({ q: `Which number on the map shows ${c.n}?`, a: String(p.n), opts: numOpts(p), x: `${c.n} is at number ${p.n}.`, country: c.n });
    });
    return { kind: "map", region: R.name, view, pins, qs };
  }

  // An exam: concept sets and numbered-map sets, 5 questions each, in the
  // real paper's order (concept sets, then image sets, then more concepts).
  function buildExam(countries, maps, nSets, seen) {
    seen = seen || {};
    const now = Date.now();
    // prefer themes he has met least and missed most
    const setScore = (s) => {
      let miss = 0, fresh = 0;
      s.qs.forEach((q, i) => { const r = seen[qid(s.id, i)]; if (!r) fresh++; else if (r.w > r.c) miss++; });
      return fresh * 1.5 + miss * 2 + Math.random() * 3;
    };
    const sets = SETS.slice().sort((a, b) => setScore(b) - setScore(a));
    const nMaps = nSets >= 8 ? 2 : 1, nConcept = nSets - nMaps;
    const concept = sets.slice(0, nConcept);
    const regions = shuffle(REGIONS.map((r) => r.id)).slice(0, nMaps);
    const blocks = [];
    // within a set: never-seen first, then missed, then oldest
    const pickQs = (s) => {
      const key = (i) => { const r = seen[qid(s.id, i)]; return (r ? (r.last || 0) / 1e12 + (r.c > r.w ? 1 : 0) : -1) + Math.random() * 0.5; };
      const idx = s.qs.map((_, i) => i).sort((i, j) => key(i) - key(j)).slice(0, 5);
      return idx.map((i) => {
        const it = s.qs[i];
        return { id: qid(s.id, i), q: it.q, a: it.a, opts: shuffle([it.a, ...it.d]), x: it.x };
      });
    };
    const firstConcept = Math.min(3, concept.length);
    concept.slice(0, firstConcept).forEach((s) => blocks.push({ kind: "concept", name: s.name, emoji: s.emoji, setId: s.id, qs: pickQs(s) }));
    regions.forEach((r) => { const m = mapSet(countries, maps, r); if (m) { m.qs.forEach((q, i) => (q.id = `map:${r}:${now}:${i}`)); blocks.push(m); } });
    concept.slice(firstConcept).forEach((s) => blocks.push({ kind: "concept", name: s.name, emoji: s.emoji, setId: s.id, qs: pickQs(s) }));
    return blocks;
  }
  const qid = (setId, i) => `u:${setId}:${i}`;

  return { SETS, FR, REGIONS, mapSet, buildExam, qid, bboxOf, labelPoint, mainPart };
})();

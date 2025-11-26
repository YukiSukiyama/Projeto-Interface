// --- 1. DADOS DOS VIDEOGAMES (COMPLETO COM LINKS DE COMPRA) ---
const museuData = [
    {
        id: 1,
        nome: "Magnavox Odyssey",
        fabricante: "Magnavox",
        geracao: 1,
        vencedor: true,
        ano: 1972,
        linkCompra: "https://lista.mercadolivre.com.br/console-magnavox-odyssey", // eBay é melhor para itens de 1972
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Magnavox-Odyssey-Console-Set.png/1200px-Magnavox-Odyssey-Console-Set.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Magnavox-Odyssey-2-Console-Set.png/1200px-Magnavox-Odyssey-2-Console-Set.png"
        ],
        specs: "Sem CPU, sem som, lógica DTL.",
        historia: "O pai de todos. Criado por Ralph Baer, não tinha som e seus gráficos eram apenas quadrados de luz. Os jogadores precisavam colar plásticos na tela da TV.",
        curiosidades: "• O console não tinha som nenhum!<br>• Ele vinha com dados e cartas, pois era um híbrido de jogo de tabuleiro.<br>• Vendeu cerca de 350.000 unidades.",
        topJogos: ["Table Tennis", "Simon Says", "Haunted House", "Analogic"]
    },
    {
        id: 2,
        nome: "Atari 2600",
        fabricante: "Atari",
        geracao: 2,
        vencedor: true,
        ano: 1977,
        linkCompra: "https://www.amazon.com.br/s?k=atari+flashback", // Versões modernas/retrô
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/0/02/Atari-2600-Wood-4Sw-Set.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Atari-2600-Jr-FL.png/1280px-Atari-2600-Jr-FL.png"
        ],
        specs: "CPU: MOS 6507, 128 bytes RAM.",
        historia: "O console que transformou videogames em um fenômeno mundial. Popularizou o uso de cartuchos trocáveis.",
        curiosidades: "• O jogo 'E.T.' foi enterrado no deserto por ser ruim.<br>• Custava $199 no lançamento.<br>• Originalmente chamava-se VCS.",
        topJogos: ["Pac-Man", "River Raid", "Space Invaders", "Pitfall!", "Enduro"]
    },
    {
        id: 3,
        nome: "Nintendo (NES)",
        fabricante: "Nintendo",
        geracao: 3,
        vencedor: true,
        ano: 1983,
        linkCompra: "https://www.amazon.com.br/s?k=nintendo+nes+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/b/b2/NES-Console-Set.png",
            "https://upload.wikimedia.org/wikipedia/commons/4/4c/Nintendo-Famicom-Console-Set-FL.png"
        ],
        specs: "CPU: 8-bit Ricoh, 2KB RAM.",
        historia: "Salvou a indústria americana de games após a crise de 83. Estabeleceu o padrão de qualidade Nintendo.",
        curiosidades: "• No Japão chama-se Famicom.<br>• O robô R.O.B. foi usado para vender o console como brinquedo.<br>• Super Mario Bros 3 é um dos jogos mais vendidos da história.",
        topJogos: ["Super Mario Bros. 3", "The Legend of Zelda", "Metroid", "Mega Man 2", "Castlevania"]
    },
    {
        id: 4,
        nome: "Master System",
        fabricante: "Sega",
        geracao: 3,
        vencedor: false,
        ano: 1985,
        linkCompra: "https://www.amazon.com.br/s?k=master+system+tectoy", // Tectoy ainda vende!
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sega-Master-System-Set.png/1200px-Sega-Master-System-Set.png",
            "https://www.loja.tectoy.com.br/wp-content/uploads/2024/09/product1.png"
        ],
        specs: "CPU: 8-bit Zilog Z80.",
        historia: "Sucesso estrondoso no Brasil e Europa. Tinha gráficos melhores que o NES.",
        curiosidades: "• Ainda é fabricado no Brasil pela Tectoy.<br>• Foi o primeiro a ter óculos 3D caseiros.<br>• Alex Kidd era o mascote antes do Sonic.",
        topJogos: ["Alex Kidd in Miracle World", "Sonic the Hedgehog (8-bit)", "Phantasy Star", "Wonder Boy III"]
    },
    {
        id: 5,
        nome: "Mega Drive",
        fabricante: "Sega",
        geracao: 4,
        vencedor: false,
        ano: 1988,
        linkCompra: "https://www.amazon.com.br/s?k=mega+drive+console",
        imagens: [
            "https://www.copetti.org/images/consoles/megadrive/european.44e7b9d4ba5a6a495d95ef24699cd0e8bad7bce445ebdc7653f36cac788e5a0c.png",
            "https://upload.wikimedia.org/wikipedia/commons/b/be/Sega-Mega-Drive-JP-Mk1-Console-Set.png"
        ],
        specs: "CPU: 16-bit Motorola 68000.",
        historia: "Conhecido como Genesis nos EUA. Atitude 'cool' e radical.",
        curiosidades: "• O processador de som é o mesmo de sintetizadores Yamaha.<br>• Michael Jackson trabalhou na trilha de Sonic 3.<br>• Teve muitos acessórios loucos como Sega CD e 32X.",
        topJogos: ["Sonic the Hedgehog 2", "Streets of Rage 2", "Mortal Kombat II", "Gunstar Heroes", "Shinobi III"]
    },
    {
        id: 6,
        nome: "Super Nintendo",
        fabricante: "Nintendo",
        geracao: 4,
        vencedor: true,
        ano: 1990,
        linkCompra: "https://www.amazon.com.br/s?k=super+nintendo+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SNES-Mod1-Console-Set.png/1200px-SNES-Mod1-Console-Set.png",
            "https://www.copetti.org/images/consoles/snes/international.c1c3e550ebb7eceeb5713c069ab271bec1241cf33f788ff0fdf697be2a1ee8e2.png"
        ],
        specs: "Chip Sony SPC700, Gráficos Mode 7.",
        historia: "A perfeição da era 16-bits. Biblioteca de RPGs lendária.",
        curiosidades: "• O design introduziu os botões L e R.<br>• O plástico de consoles antigos fica amarelo com o tempo.<br>• A parceria falhada com a Sony para um CD criou o PlayStation.",
        topJogos: ["Super Mario World", "Chrono Trigger", "Donkey Kong Country 2", "Zelda: A Link to the Past"]
    },
    {
        id: 7,
        nome: "Atari Jaguar",
        fabricante: "Atari",
        geracao: 5,
        vencedor: false,
        ano: 1993,
        linkCompra: "https://www.ebay.com/sch/i.html?_nkw=atari+jaguar+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/9/90/Atari-Jaguar-Console-Set.png",
            "https://dutchgamedesign.wordpress.com/wp-content/uploads/2012/10/atarijaguarcd_t.gif"
        ],
        specs: "64-bit (Chips 'Tom' e 'Jerry').",
        historia: "O último suspiro da Atari. Prometeu 64 bits antes de todos, mas fracassou.",
        curiosidades: "• O controle parecia um telefone.<br>• As carcaças foram vendidas para dentistas fazerem câmeras.<br>• Vendeu menos de 250 mil unidades.",
        topJogos: ["Alien vs Predator", "Tempest 2000", "Rayman", "Doom", "Iron Soldier"]
    },
    {
        id: 8,
        nome: "Sega Saturn",
        fabricante: "Sega",
        geracao: 5,
        vencedor: false,
        ano: 1994,
        linkCompra: "https://www.amazon.com.br/s?k=sega+saturn+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Sega-Saturn-Console-Set-Mk1.png",
            "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,format=auto,onerror=redirect,quality=80/uploads/asset/file/84a4bbb1-399b-476f-8375-bc6abc7d2e0d/1920px-Sega-Saturn-JP-Mk2-Console-Set.png?t=1746183547"
        ],
        specs: "Dual CPU Hitachi SH-2.",
        historia: "Poderoso em 2D, mas difícil de programar para 3D.",
        curiosidades: "• Lançado de surpresa nos EUA para tentar ganhar do PS1.<br>• Muito popular no Japão.<br>• Mestre em jogos de luta.",
        topJogos: ["Nights into Dreams", "Panzer Dragoon Saga", "Virtua Fighter 2", "Sega Rally"]
    },
    {
        id: 9,
        nome: "PlayStation 1",
        fabricante: "Sony",
        geracao: 5,
        vencedor: true,
        ano: 1994,
        linkCompra: "https://www.amazon.com.br/s?k=playstation+1+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/9/95/PSX-Console-wController.png",
            "https://applebygames.co.nz/wp-content/uploads/2022/06/IMG_0736-Photoroom-Medium.png"
        ],
        specs: "32-bit, CD-ROM.",
        historia: "A Sony dominou o mundo usando CDs.",
        curiosidades: "• Deveria ser um acessório do SNES.<br>• Vendeu mais de 100 milhões de unidades.<br>• Popularizou o DualShock (vibração).",
        topJogos: ["Final Fantasy VII", "Metal Gear Solid", "Castlevania: SOTN", "Resident Evil 2", "Gran Turismo"]
    },
    {
        id: 10,
        nome: "Nintendo 64",
        fabricante: "Nintendo",
        geracao: 5,
        vencedor: false,
        ano: 1996,
        linkCompra: "https://www.amazon.com.br/s?k=nintendo+64+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/N64-Console-Set.png/1200px-N64-Console-Set.png",
            "https://s2-techtudo.glbimg.com/Uj2-IahIUrUVZrhCdt5PhcceAx8=/0x0:695x554/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/q/z/VP97ExRc2qOj6yAm7bEQ/2015-11-26-64dd.png"
        ],
        specs: "64-bit, Cartucho.",
        historia: "Definiu como jogos 3D deveriam ser controlados.",
        curiosidades: "• Mario 64 ensinou o mundo a andar no espaço 3D.<br>• Usava cartuchos, o que era caro e afastou empresas.<br>• O controle 'tridente' é icônico.",
        topJogos: ["Super Mario 64", "Zelda: Ocarina of Time", "GoldenEye 007", "Star Fox 64", "Super Smash Bros."]
    },
    {
        id: 11,
        nome: "Dreamcast",
        fabricante: "Sega",
        geracao: 6,
        vencedor: false,
        ano: 1998,
        linkCompra: "https://www.amazon.com.br/s?k=sega+dreamcast+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Sega-dreamcast-set.png/1200px-Sega-dreamcast-set.png",
            "https://cdn.consolevariations.com/6192/sega-dreamcast-european-console-front-1572642419-37-transparent.webp"
        ],
        specs: "Hitachi SH-4, Modem Online.",
        historia: "Pioneiro na internet e gráficos incríveis.",
        curiosidades: "• O Memory Card tinha uma tela LCD (VMU).<br>• O último console da Sega.<br>• Rodava Windows CE.",
        topJogos: ["Sonic Adventure 2", "Shenmue", "SoulCalibur", "Crazy Taxi", "Jet Set Radio"]
    },
    {
        id: 12,
        nome: "PlayStation 2",
        fabricante: "Sony",
        geracao: 6,
        vencedor: true,
        ano: 2000,
        linkCompra: "https://www.amazon.com.br/s?k=playstation+2+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/3/39/PS2-Versions.png",
            "https://images.tcdn.com.br/img/img_prod/1211726/playstation_2_slim_seminovo_277_1_cdad97bf064ac254c387a1da08a1ac61.png"
        ],
        specs: "128-bit Emotion Engine, DVD.",
        historia: "O videogame mais vendido da história.",
        curiosidades: "• Era o DVD Player mais barato do mercado.<br>• Teve suporte a Linux.<br>• Vendeu mais de 155 milhões de unidades.",
        topJogos: ["GTA: San Andreas", "God of War II", "Shadow of the Colossus", "Metal Gear Solid 3", "Kingdom Hearts II"]
    },
    {
        id: 13,
        nome: "Nintendo GameCube",
        fabricante: "Nintendo",
        geracao: 6,
        vencedor: false,
        ano: 2001,
        linkCompra: "https://www.amazon.com.br/s?k=gamecube+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/GameCube-Console-Set.png",
            "https://imagedelivery.net/-LSpQIg39J0gXmiDBooAYw/f7e009c4-f806-454c-469e-afc92904e800/public"
        ],
        specs: "Processador IBM Gekko, MiniDVD.",
        historia: "Compacto e poderoso. Trouxe clássicos cult.",
        curiosidades: "• Tinha uma alça para carregar.<br>• Usava discos pequenos de 1.5GB.<br>• O controle é considerado um dos melhores.",
        topJogos: ["Super Smash Bros. Melee", "Metroid Prime", "Resident Evil 4", "Luigi's Mansion"]
    },
    {
        id: 14,
        nome: "Xbox Original",
        fabricante: "Microsoft",
        geracao: 6,
        vencedor: false,
        ano: 2001,
        linkCompra: "https://www.amazon.com.br/s?k=xbox+classic+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/c/c2/Xbox-Console-Set.png",
            "https://i0.wp.com/retrogamingbuilder.com/wp-content/uploads/2023/11/IMG_8551.png?fit=4032%2C2268&ssl=1"
        ],
        specs: "Intel Pentium III, HD interno.",
        historia: "Introduziu Halo e a Xbox Live.",
        curiosidades: "• O controle original 'Duke' era gigante.<br>• Foi o primeiro com HD interno.<br>• A Microsoft perdeu bilhões para entrar no mercado.",
        topJogos: ["Halo: Combat Evolved", "Halo 2", "Fable", "Forza Motorsport", "Star Wars: KOTOR"]
    },
    {
        id: 15,
        nome: "Xbox 360",
        fabricante: "Microsoft",
        geracao: 7,
        vencedor: false,
        ano: 2005,
        linkCompra: "https://www.amazon.com.br/s?k=xbox+360+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/0/03/Xbox-360-Consoles-Infobox.png",
            "https://upload.wikimedia.org/wikipedia/commons/a/a8/Xbox-360-Pro-wController.png"
        ],
        specs: "HD Graphics, Online.",
        historia: "Definiu a era HD e o multiplayer online.",
        curiosidades: "• O problema das '3 Luzes Vermelhas' custou 1 bilhão à Microsoft.<br>• Popularizou as conquistas (GamerScore).<br>• O Kinect foi um sucesso estrondoso.",
        topJogos: ["Halo 3", "Gears of War 3", "Mass Effect 2", "Skyrim", "BioShock"]
    },
    {
        id: 16,
        nome: "PlayStation 3",
        fabricante: "Sony",
        geracao: 7,
        vencedor: false,
        ano: 2006,
        linkCompra: "https://www.amazon.com.br/s?k=playstation+3+console",
        imagens: [
            "https://www.copetti.org/images/consoles/ps3/original.ef1da38ba374252ffbad5d6c30133170973f1acb33b542ff36f2f525a8d4ef3d.png",
            "https://static.wikia.nocookie.net/dbzpro2matrix/images/4/40/PS3-slim-console.png/revision/latest/scale-to-width-down/3500?cb=20110108175521&path-prefix=pt"
        ],
        specs: "Cell Processor, Blu-ray.",
        historia: "Virou o jogo com exclusivos de peso. Introduziu o Blu-ray.",
        curiosidades: "• O processador Cell era usado em supercomputadores.<br>• O lançamento foi caro ($599).<br>• The Last of Us mostrou o poder final do console.",
        topJogos: ["The Last of Us", "Uncharted 2", "God of War III", "Metal Gear Solid 4", "LittleBigPlanet"]
    },
    {
        id: 17,
        nome: "Nintendo Wii",
        fabricante: "Nintendo",
        geracao: 7,
        vencedor: true,
        ano: 2006,
        linkCompra: "https://www.amazon.com.br/s?k=nintendo+wii+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Wii-Console.png/1200px-Wii-Console.png",
            "https://cdn.awsli.com.br/600x450/138/138431/produto/272415509/nintendowii-673841urco.jpeg"
        ],
        specs: "Motion Control.",
        historia: "Trouxe o público casual para os games.",
        curiosidades: "• Vendeu mais de 100 milhões.<br>• Wii Sports vinha junto e virou febre.<br>• O nome 'Wii' soa como 'Nós' (We) em inglês.",
        topJogos: ["Wii Sports", "Mario Kart Wii", "Super Mario Galaxy", "Zelda: Twilight Princess", "Super Smash Bros. Brawl"]
    },
    {
        id: 18,
        nome: "PlayStation 4",
        fabricante: "Sony",
        geracao: 8,
        vencedor: true,
        ano: 2013,
        linkCompra: "https://www.amazon.com.br/s?k=playstation+4+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/PS4-Console-wDS4.png/1280px-PS4-Console-wDS4.png",
            "https://gmedia.playstation.com/is/image/SIEPDC/PS4_SLIM_Laying-down?$facebook$"
        ],
        specs: "AMD Jaguar 8-core.",
        historia: "Venceu a geração com exclusivos incríveis.",
        curiosidades: "• Botão Share mudou a cultura de streaming.<br>• No Brasil custou R$ 4.000 no lançamento.<br>• Focou 100% em jogos, sem firulas de TV.",
        topJogos: ["God of War (2018)", "Spider-Man", "Bloodborne", "The Last of Us Part II", "Horizon Zero Dawn"]
    },
    {
        id: 19,
        nome: "Xbox One",
        fabricante: "Microsoft",
        geracao: 8,
        vencedor: false,
        ano: 2013,
        linkCompra: "https://www.amazon.com.br/s?k=xbox+one+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/2/2b/Microsoft-Xbox-One-Console-wKinect.png",
            "https://images.tcdn.com.br/img/img_prod/1211726/xbox_one_s_500_gb_seminovo_1339_1_6b8c5dcd45e03745ebecca642d8f1458.png"
        ],
        specs: "AMD Jaguar, Multimídia.",
        historia: "Criador do Game Pass. Começou mal, terminou bem.",
        curiosidades: "• O Kinect era obrigatório no início.<br>• Criou o serviço Game Pass.<br>• Retrocompatibilidade salvou a reputação.",
        topJogos: ["Forza Horizon 4", "Halo 5: Guardians", "Gears 5", "Sea of Thieves", "Cuphead"]
    },
    {
        id: 20,
        nome: "Nintendo Switch",
        fabricante: "Nintendo",
        geracao: 8,
        vencedor: false,
        ano: 2017,
        linkCompra: "https://www.amazon.com.br/s?k=nintendo+switch+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nintendo_Switch_Portable.png/330px-Nintendo_Switch_Portable.png",
            "https://upload.wikimedia.org/wikipedia/commons/b/b0/Nintendo_Switch_Lite_representation.png"
        ],
        specs: "Híbrido (Portátil/Mesa).",
        historia: "Sucesso absoluto unificando o mercado.",
        curiosidades: "• Os cartuchos têm gosto ruim para crianças não engolirem.<br>• Joy-Cons destacáveis.<br>• Já vendeu mais de 130 milhões.",
        topJogos: ["Zelda: Breath of the Wild", "Mario Kart 8 Deluxe", "Super Mario Odyssey", "Animal Crossing: NH", "Super Smash Bros. Ultimate"]
    },
    {
        id: 21,
        nome: "PlayStation 5",
        fabricante: "Sony",
        geracao: 9,
        vencedor: true,
        ano: 2020,
        linkCompra: "https://www.amazon.com.br/s?k=playstation+5+console",
        imagens: [
            "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/PlayStation_5_and_DualSense_with_transparent_background.png/640px-PlayStation_5_and_DualSense_with_transparent_background.png",
            "https://gmedia.playstation.com/is/image/SIEPDC/ps5-pro-dualsense-image-block-01-en-16aug24?$facebook$"
        ],
        specs: "SSD NVMe, 4K Ray Tracing.",
        historia: "Geração atual. Fim dos loadings.",
        curiosidades: "• O maior console da história em tamanho.<br>• Controle DualSense tem feedback tátil incrível.<br>• Placas laterais customizáveis.",
        topJogos: ["Spider-Man 2", "God of War Ragnarok", "Demon's Souls", "Ratchet & Clank: Rift Apart", "Final Fantasy XVI"]
    },
    {
        id: 22,
        nome: "Xbox Series X/S",
        fabricante: "Microsoft",
        geracao: 9,
        vencedor: false,
        ano: 2020,
        linkCompra: "https://www.amazon.com.br/s?k=xbox+series+x+console",
        imagens: [
            "https://cms-assets.xboxservices.com/assets/bc/40/bc40fdf3-85a6-4c36-af92-dca2d36fc7e5.png?n=642227_Hero-Gallery-0_A1_857x676.png",
            "https://cms-assets.xboxservices.com/assets/bf/b0/bfb06f23-4c87-4c58-b4d9-ed25d3a739b9.png?n=389964_Hero-Gallery-0_A1_857x676.png"
        ],
        specs: "12 TFLOPS, SSD NVMe.",
        historia: "O console mais poderoso da Microsoft.",
        curiosidades: "• Quick Resume permite trocar de jogo em segundos.<br>• Series S é uma versão digital mais barata.<br>• Design de 'geladeira' virou meme (e depois produto real).",
        topJogos: ["Starfield", "Forza Motorsport", "Halo Infinite", "Hi-Fi Rush", "Senua's Saga: Hellblade II"]
    },
    {
        id: 23,
        nome: "Nintendo Switch 2",
        fabricante: "Nintendo",
        geracao: 10,
        vencedor: false,
        ano: 2025,
        linkCompra: "https://www.google.com/search?q=nintendo+switch+2+news", // Link de notícias
        imagens: [
            "https://static.wikia.nocookie.net/nintendo/images/b/b2/Nintendo_Switch_2.png/revision/latest?cb=20250404152739&path-prefix=en",
            "https://images.tcdn.com.br/img/img_prod/1211726/nintendo_switch_2_edicao_padrao_1842_1_e62c35067446a22b6e077cabbae5f912.png"
        ],
        specs: "Híbrido, DLSS 4K.",
        historia: "O futuro da Nintendo (Rumores).",
        curiosidades: "• Deve ter tela de 8 polegadas.<br>• Controles magnéticos.<br>• Retrocompatibilidade esperada.",
        topJogos: ["Metroid Prime 4", "Mario Kart 9 (Rumor)", "Novo Mario 3D", "Pokémon Gen 10", "Zelda Remake"]
    }
];

// --- 2. VARIÁVEIS E ESTADO ---
let imagensAtuais = [];
let indiceAtual = 0;
let modalBootstrap = null;
let favoritos = [];
let currentUser = null; 

try {
    favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
    currentUser = JSON.parse(localStorage.getItem('gamerUser')) || null; 
} catch (e) {
    favoritos = [];
}

// --- 3. LÓGICA PRINCIPAL ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Seletores
    const container = document.getElementById('timeline-container');
    const searchInput = document.getElementById('search-input');
    const noResults = document.getElementById('no-results');
    const modalElement = document.getElementById('gameModal');
    const btnBuy = document.getElementById('btn-buy');
    const modalImg = document.getElementById('modal-img');
    const counter = document.getElementById('img-counter');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const gamesList = document.getElementById('games-list'); 
    const modalCuriosities = document.getElementById('modal-curiosities'); // SELETOR CURIOSIDADES
    
    const btnWinners = document.getElementById('btn-winners');
    const btnGeneration = document.getElementById('btn-generation');

    const btnLoginTrigger = document.getElementById('btn-login-trigger');
    const btnLogout = document.getElementById('btn-logout');
    const loginModalElement = document.getElementById('loginModal');
    const loginForm = document.getElementById('login-form');
    const userNameDisplay = document.getElementById('user-name-display');

    const audioHover = document.getElementById('sound-hover');
    const audioClick = document.getElementById('sound-click');
    const audioSecret = document.getElementById('sound-secret');

    if (!container) return;

    const playSound = (audio) => {
        if(audio) {
            audio.currentTime = 0;
            audio.volume = 0.2;
            audio.play().catch(() => {});
        }
    };

    // --- LOGIN ---
    const updateLoginUI = () => {
        if (currentUser) {
            userNameDisplay.innerText = `Olá, ${currentUser.name}`;
            btnLogout.classList.remove('d-none');
            btnLoginTrigger.classList.remove('btn-outline-light');
            btnLoginTrigger.classList.add('btn-success');
            btnLoginTrigger.setAttribute('disabled', 'true');
        } else {
            userNameDisplay.innerText = "Entrar / Cadastro";
            btnLogout.classList.add('d-none');
            btnLoginTrigger.classList.add('btn-outline-light');
            btnLoginTrigger.classList.remove('btn-success');
            btnLoginTrigger.removeAttribute('disabled');
        }
    };
    updateLoginUI();

    btnLoginTrigger.addEventListener('click', () => {
        if (!currentUser) {
            new bootstrap.Modal(loginModalElement).show();
        }
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('username').value;
        const email = document.getElementById('useremail').value;
        currentUser = { name: name, email: email };
        localStorage.setItem('gamerUser', JSON.stringify(currentUser));
        updateLoginUI();
        playSound(audioSecret);
        bootstrap.Modal.getInstance(loginModalElement).hide();
    });

    btnLogout.addEventListener('click', () => {
        if(confirm("Deseja realmente sair?")) {
            currentUser = null;
            localStorage.removeItem('gamerUser');
            updateLoginUI();
        }
    });

    // --- FAVORITOS ---
    const toggleFavorito = (id) => {
        if (favoritos.includes(id)) {
            favoritos = favoritos.filter(favId => favId !== id);
        } else {
            favoritos.push(id);
            playSound(audioClick);
        }
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
        
        const btn = document.querySelector(`.fav-btn[data-id="${id}"]`);
        if(btn) atualizarBotaoFavorito(btn, id);
    };

    const atualizarBotaoFavorito = (btn, id) => {
        const isFav = favoritos.includes(id);
        const icon = btn.querySelector('i');
        if (isFav) {
            btn.classList.add('active');
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            btn.classList.remove('active');
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }
    };

    const resetButtons = () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btnWinners.classList.remove('active');
        btnGeneration.classList.remove('active');
    };

    // --- MODAL E ABAS ---
    const abrirModal = (item) => {
        if (!modalBootstrap) modalBootstrap = new bootstrap.Modal(modalElement);

        document.getElementById('modal-title').innerText = item.nome;
        document.getElementById('modal-date').innerText = item.ano;
        document.getElementById('modal-specs').innerText = item.specs;
        document.getElementById('modal-history').innerText = item.historia;
        
        // CURIOSIDADES (SEGURO)
        if(modalCuriosities) {
            modalCuriosities.innerHTML = item.curiosidades || "Sem curiosidades cadastradas.";
        }

        // JOGOS (SEGURO)
        if(gamesList) {
            gamesList.innerHTML = ''; 
            if (item.topJogos && item.topJogos.length > 0) {
                item.topJogos.forEach(jogo => {
                    const li = document.createElement('li');
                    li.className = 'game-item';
                    li.innerHTML = `<i class="fa-solid fa-trophy game-icon"></i> ${jogo}`;
                    gamesList.appendChild(li);
                });
            } else {
                gamesList.innerHTML = '<p class="text-muted">Lista indisponível.</p>';
            }
        }

        // BOTÃO DE COMPRA (COM LINK ESPECÍFICO)
        if(btnBuy) {
            if (item.linkCompra) {
                btnBuy.href = item.linkCompra;
            } else {
                btnBuy.href = `https://www.amazon.com.br/s?k=${encodeURIComponent(item.nome + " console")}`;
            }
        }

        imagensAtuais = item.imagens || [];
        indiceAtual = 0;
        atualizarImagem();
        
        // Reseta aba
        const firstTab = document.querySelector('#info-tab');
        if(firstTab) new bootstrap.Tab(firstTab).show();

        modalBootstrap.show();
    };

    const atualizarImagem = () => {
        if(imagensAtuais.length > 0 && modalImg) {
            modalImg.src = imagensAtuais[indiceAtual];
            if(counter) counter.innerText = `${indiceAtual + 1} / ${imagensAtuais.length}`;
        }
    };

    // --- RENDERIZAÇÃO ---
    const criarCard = (item) => {
        const col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-4 animate-card';
        
        const imgUrl = item.imagens && item.imagens.length > 0 ? item.imagens[0] : 'https://via.placeholder.com/300';
        const isFav = favoritos.includes(item.id);
        
        const isWinnerMode = btnWinners.classList.contains('active') || btnGeneration.classList.contains('active');
        const winnerClass = (isWinnerMode && item.vencedor) ? 'winner-card' : '';
        const winnerBadge = (isWinnerMode && item.vencedor) ? '<div class="winner-badge">🏆 CAMPEÃO</div>' : '';

        col.innerHTML = `
            <div class="card h-100 border-secondary ${winnerClass}">
                ${winnerBadge}
                <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${item.id}">
                    <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                </button>
                <img src="${imgUrl}" class="card-img-top" alt="${item.nome}" loading="lazy">
                <div class="card-body d-flex flex-column text-center text-light">
                    <h4 class="card-title fw-bold text-danger">${item.nome}</h4>
                    <span class="badge bg-secondary mb-3 align-self-center">${item.ano}</span>
                    <button class="btn btn-outline-danger mt-auto w-100 btn-details">Ver Detalhes</button>
                </div>
            </div>
        `;

        col.querySelector('.card').addEventListener('mouseenter', () => playSound(audioHover));
        col.querySelector('.btn-details').addEventListener('click', () => {
            playSound(audioClick);
            abrirModal(item);
        });
        col.querySelector('.fav-btn').addEventListener('click', (e) => {
            e.stopPropagation(); 
            toggleFavorito(item.id);
        });

        container.appendChild(col);
    };

    const renderizarGaleria = (lista) => {
        container.innerHTML = '';
        if (lista.length === 0) {
            if(noResults) noResults.classList.remove('d-none');
        } else {
            if(noResults) noResults.classList.add('d-none');
        }
        lista.forEach(item => criarCard(item));
    };

    const renderizarPorGeracao = () => {
        container.innerHTML = '';
        if(noResults) noResults.classList.add('d-none');

        for (let i = 1; i <= 10; i++) {
            const consolesDaGeracao = museuData.filter(g => g.geracao === i);
            if (consolesDaGeracao.length > 0) {
                const titleDiv = document.createElement('div');
                titleDiv.className = 'col-12';
                titleDiv.innerHTML = `<h3 class="gen-title">${i}ª Geração</h3>`;
                container.appendChild(titleDiv);
                consolesDaGeracao.forEach(item => criarCard(item));
            }
        }
    };

    // --- EVENTOS ---
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            resetButtons();
            const termo = e.target.value.toLowerCase();
            const filtrados = museuData.filter(i => i.nome.toLowerCase().includes(termo));
            renderizarGaleria(filtrados);
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            playSound(audioClick);
            const isActive = btn.classList.contains('active');
            resetButtons();
            
            if (isActive) {
                renderizarGaleria(museuData);
            } else {
                btn.classList.add('active');
                const filterValue = btn.getAttribute('data-filter');
                if (filterValue === 'all') {
                    renderizarGaleria(museuData);
                } else {
                    const filtrados = museuData.filter(item => item.fabricante && item.fabricante.includes(filterValue));
                    renderizarGaleria(filtrados);
                }
            }
        });
    });

    if (btnWinners) {
        btnWinners.addEventListener('click', () => {
            playSound(audioClick);
            const isActive = btnWinners.classList.contains('active');
            resetButtons();
            if (isActive) {
                renderizarGaleria(museuData);
            } else {
                btnWinners.classList.add('active');
                const vencedores = museuData.filter(i => i.vencedor === true);
                renderizarGaleria(vencedores);
            }
        });
    }

    if (btnGeneration) {
        btnGeneration.addEventListener('click', () => {
            playSound(audioClick);
            const isActive = btnGeneration.classList.contains('active');
            resetButtons();
            if (isActive) {
                renderizarGaleria(museuData);
            } else {
                btnGeneration.classList.add('active');
                renderizarPorGeracao();
            }
        });
    }

    const btnNext = document.getElementById('next-btn');
    const btnPrev = document.getElementById('prev-btn');
    if(btnNext) btnNext.addEventListener('click', () => {
        if(imagensAtuais.length === 0) return;
        indiceAtual++;
        if (indiceAtual >= imagensAtuais.length) indiceAtual = 0;
        atualizarImagem();
    });
    if(btnPrev) btnPrev.addEventListener('click', () => {
        if(imagensAtuais.length === 0) return;
        indiceAtual--;
        if (indiceAtual < 0) indiceAtual = imagensAtuais.length - 1;
        atualizarImagem();
    });

    const konamiCode = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
    let konamiIndex = 0;
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                playSound(audioSecret);
                document.documentElement.classList.toggle('konami-mode');
                alert("🔐 MODO HACKER ATIVADO!");
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    document.querySelector('[data-filter="all"]').classList.add('active');
    renderizarGaleria(museuData);
});
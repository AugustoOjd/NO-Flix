import { createSlice } from "@reduxjs/toolkit";

const movies = [
    {
        id: 1,
        title: 'Arcane',
        description: 'Con las dispares ciudades de Piltover y Zaun como telón de fondo, dos hermanas luchan en bandos opuestos de una guerra entre tecnologías mágicas y creencias enfrentadas.',
        img: 'https://i.blogs.es/79f36c/portada-analisis-trailer-arcane-league-of-legends/1366_2000.jpeg',
        rating: 4,
        reviewCount: 1,
        category: 'animadas',
        age: 2021,
        banner: 'https://www.xtrafondos.com/wallpapers/arcane-league-of-legends-9216.jpg',
        platform: 'Netflix',
        type: 'Serie',
        trailer: 'https://www.youtube.com/watch?v=4Ps6nV4wiCE&ab_channel=LeagueofLegends',
        votos: [2,5]
    },
  
    {
        id: 2,
        title: 'LightYear',
        description: 'La historia del origen de Buzz Lightyear y sus aventuras hasta el infinito y más allá.',
        img: 'https://www.prensario.net/Multimedios/imgs/50253_750.jpg',
        rating: 3.6,
        reviewCount: 2,
        category: 'animadas',
        age: 2022,
        banner: 'https://b-static.besthdwallpaper.com/pelicula-de-animacion-lightyear-2022-buzz-lightyear-papel-pintado-2560x1600-91658_7.jpg',
        platform: '...',
        type: 'Pelicula',
        trailer: 'https://www.youtube.com/watch?v=lKLqrpYNfnA&ab_channel=FilmSelectEspa%C3%B1ol',
        votos: [1,2]
    },
    
    {
        id: 3,
        title: 'Guardianes de la galaxia',
        description: 'El temerario aventurero Peter Quill, tras robar una misteriosa esfera codiciada por Ronan, un poderoso villano cuyas ambiciones amenazan a todo el universo, se convierte en la presa más codiciada por todos los cazarrecompensas de la galaxia.',
        img: 'https://es.web.img3.acsta.net/newsv7/22/01/29/15/21/4874804.jpg',
        rating: 2,
        reviewCount: 3,
        category: 'accion',
        age: 2014,
        banner: 'https://www.xtrafondos.com/wallpapers/juego-de-guardianes-de-la-galaxia-8279.jpg',
        platform: 'Disney+',
        type: 'Pelicula',
        trailer: 'https://www.youtube.com/watch?v=qdIuXCfUKM8&ab_channel=MarvelLatinoam%C3%A9ricaOficial',
        votos: [1,3,2]
    },
    {
        id: 4,
        title: 'One punch-Man',
        description: 'One Punch-Man es un webcómic de acción y comedia japonés, creado por el artista One e iniciado en 2009. El webcómic rápidamente ganó popularidad, llegando a alcanzar las 8 millones de visitas.',
        img: 'https://www.animenewsnetwork.com/images/encyc/A16840-4113667313.1443583619.jpg',
        rating: 3,
        reviewCount: 2,
        category: 'animada',
        age: 2009,
        banner: 'https://images6.alphacoders.com/672/672060.jpg',
        platform: 'Netflix, Crunchyroll',
        type: 'Serie',
        trailer: 'https://www.youtube.com/watch?v=V1l0MRT0fS8&ab_channel=MacblinkSkylight',
        votos: [2,1,3]
    },
    {
        id: 5,
        title: 'Naruto',
        description: 'Naruto, romanizada como NARUTO, es una serie de manga escrita e ilustrada por Masashi Kishimoto. La obra narra la historia de un ninja huérfano adolescente llamado Naruto Uzumaki, cuyos padres murieron ... ',
        img: 'https://pictures.abebooks.com/isbn/9791090870000-es.jpg',
        rating: 2,
        reviewCount: 4,
        category: 'animadas',
        age: 2002,
        banner: 'https://live.staticflickr.com/17/22114713_0e9ee675fc_b.jpg',
        platform: 'Netflix, Crunchyroll',
        type: 'Serie',
        trailer:'https://www.youtube.com/watch?v=-G9BqkgZXRA&ab_channel=vizmedia',
        votos: [4,2]
    },
    {
        id: 6,
        title: 'IT',
        description: 'Varios niños de una pequeña ciudad del estado de Maine se alían para combatir a una entidad diabólica que adopta la forma de un payaso y desde hace mucho tiempo emerge cada 27 años para saciarse de sangre infantil.',
        img: 'https://sm.ign.com/ign_es/movie/i/it-capitul/it-capitulo-2_4xsj.jpg',
        rating: 1,
        reviewCount: 1,
        category: 'terror',
        age: 2017,
        banner: 'https://images.hdqwalls.com/wallpapers/it-chapter-two-2019-poster-bi.jpg',
        platform: 'HBO',
        type: 'Pelicula',
        tailer: 'https://www.youtube.com/watch?v=_oBZ_zTz0Nw&ab_channel=WarnerBros.PicturesEspa%C3%B1a',
        votos: [3]
  
    },    
    {
        id: 7,
        title: 'Viernes 13',
        description: 'El campamento de verano del lago Cristal reabre sus puertas tras permanecer varios años cerrado a raíz de un accidente. A partir de ese momento, comienza a aparecer gente muerta en extrañas circunstancias.',
        img: 'https://www.prensalibre.com/wp-content/uploads/2019/09/viernes-13.jpeg?quality=52',
        rating: 4,
        reviewCount: 3,
        category: 'terror',
        age: 1980,
        banner: 'https://larepublica.pe/resizer/64sbC9uqKmU6WhCmAVkNESYITzw=/1200x660/top/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/FDKAXQQ7BZAU7J7ZSWPLELWMIM.jpg',
        platform: 'Netflix',
        type: 'Pelicula',
        trailer: 'https://www.youtube.com/watch?v=Xqqej9T2gqI&ab_channel=MovieclipsClassicTrailers',
        votos: [2,1,4]
  
    },
    {
        id: 8,
        title: 'Un lugar en silencio',
        description: 'En un mundo invadido y arrasado por unos letales extraterrestres que se guían por el sonido, Evelyn y Lee Abbott sobreviven con sus hijos en una granja aislada en el bosque, sumidos en el más profundo silencio. Mientras no hagan ruido, estarán a salvo.',
        img: 'https://www.tematika.com/media/catalog/Ilhsa/Imagenes/654342.jpg',
        rating: 3,
        reviewCount: 3,
        category: 'terror',
        age: 2018,
        banner: 'https://www.xtrafondos.com/descargar.php?id=5131&resolucion=2560x1440',
        platform: 'Netflix, Amazon',
        type: 'Pelicula',
        trailer: 'https://www.youtube.com/watch?v=0aJIudUnXik&ab_channel=TrailersInSpanish',
        votos: [3,1,3]
    },
    {
        id: 9,
        title: 'John Wick',
        description: 'John Wick, un exasesino a sueldo, se enfrenta al mafioso Viggo Tarazov, quien ofrece una recompensa a aquel que logre acabar con la vida de Wick.',
        img:'https://www.steelbookbluray.com/wp-content/uploads/2015/04/wick_de_1.jpg',
        rating: 3.2,
        reviewCount: 3,
        category: 'accion',
        age: 2014,
        banner: 'https://fondosmil.com/fondo/64726.jpg',
        platform: 'Netflix, Amazon',
        type: 'Pelicula',
        trailer: 'https://www.youtube.com/watch?v=C0BMx-qxsP4&t=16s&ab_channel=MovieclipsTrailers',
        votos: [4,5,1]
    },
    {
        id: 10,
        title: 'Game of Throne',
        description: 'Es la descripción de dos familias poderosas, reyes y reinas, caballeros y renegados, hombres falsos y honestos, haciendo parte de un juego mortal por el control de los Siete Reinados de Westeros y por sentarse en el trono más alto. Martin es el co productor ejecutivo y uno de los escritores de la serie que fue filmada en el Norte de Irlanda y Malta.',
        img: 'https://cdn.culturagenial.com/es/imagenes/game-of-thrones-serie-og.jpg',
        rating: 4.2,
        reviewCount: 3,
        category: 'accion',
        age: 2011,
        banner: 'https://wallpapercave.com/wp/wp3978142.jpg',
        platform: 'HBO',
        type: 'Serie',
        trailer: 'https://www.youtube.com/watch?v=g1IICkElV0M&ab_channel=Action-Movies',
        votos: [1,3,4]
  
    },
    {
        id: 11,
        title: 'Breaking bad',
        description: 'El profesor calmado de química de una secundaria, Walter White cree que su vida no puede ser peor. Su salario apenas le alcanza para sostener a su familia, una situación que no mejora cuando su esposa da a luz y su hijo adolescente sufre de parálisis cerebral, pero Walter queda anonadado cuando se entera que tiene un cáncer terminal.',
        img: 'https://www.seriemaniac.com/wp-content/uploads/2013/10/que-significa-Breaking-Bad.jpg',
        rating: 5,
        reviewCount: 2,
        category: 'accion',
        age: 2008,
        banner: 'https://fondosmil.com/fondo/42176.jpg',
        platform: 'Netflix',
        type: 'Serie',
        trailer:'https://www.youtube.com/watch?v=HhesaQXLuRY&ab_channel=TrailerBlend',
        votos: [3, 2]
    },
    {
        id: 12,
        title: 'Dragon ball super',
        description: 'Dragon Ball Super: Super Hero es una próxima película japonesa anime en 3D producida por Toei Animation y escrita por el autor original de la serie Akira Toriyama.',
        img: 'https://i.pinimg.com/originals/d8/40/d5/d840d57c779678adcea19de5339caacb.png',
        rating: 3,
        reviewCount: 3,
        category: 'animadas',
        age: 2015,
        banner: 'https://www.teahub.io/photos/full/10-105439_dragon-ball-super-wallpaper-hd-tema-para-windows.png',
        platform: 'Netflix, Crunchyroll',
        type: 'Serie',
        trailer: 'https://www.youtube.com/watch?v=t5CIs0jDqC8&ab_channel=CrunchyrollCollection',
        votos: [5,2,1]
    },
    {
        id: 13,
        title: 'The walking dead',
        description: 'Basado en la historieta escrita por Robert Kirkman, este drama crudo describe las vidas de un grupo de sobrevivientes que está siempre en movimiento en busca de un hogar seguro durante las semanas y meses de un apocalipsis zombi.',
        img: 'https://m.media-amazon.com/images/I/81EZihP-ZTL._SL1500_.jpg',
        rating: 2,
        reviewCount: 2,
        category: 'terror',
        age: 2010,
        banner: 'https://i0.wp.com/www.alertaqronoticias.com/wp-content/uploads/2020/09/WalkingDead.jpg?fit=1200%2C630&ssl=1',
        platform: 'Neflix',
        type: 'Serie',
        trailer: 'https://www.youtube.com/watch?v=R1v0uFms68U&ab_channel=MahaloVideoGames',
        votos: [2,4]
    },
    {
        id: 14,
        title: 'Strange things',
        description: 'Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en una serie de eventos misteriosos al tratar de encontrarlo. Su ausencia coincide con el avistamiento de una criatura terrorífica y la aparición de una extraña niña.',
        img: 'https://i.blogs.es/4e7fc0/cartel-stranger-things/1366_2000.jpg',
        rating: 3,
        reviewCount: 3,
        category: 'accion',
        age: 2016,
        banner: 'https://1.bp.blogspot.com/-rYq53C9MY78/XVFCydQTGcI/AAAAAAAAKnU/h3VOUnoO_nEgAENohHPRwtvAqAytYBZGQCLcBGAs/s1600/portada-stranger-things.jpg',
        platform: 'Netflix',
        type: 'Serie',
        trailer: 'https://www.youtube.com/watch?v=x7Yq9MJUqjY&ab_channel=NetflixEspa%C3%B1a',
        votos: [2,1,5]
    },
    {
        id: 15,
        title: 'Alien',
        description: 'Tras acudir a una llamada de ayuda, la tripulación (Tom Skerritt, Sigourney Weaver, John Hurt) encuentra una voraz y horrible criatura abordo de una nave espacial.',
        img: 'https://images-na.ssl-images-amazon.com/images/I/71S7+AVaVXL.jpg',
        rating: 5,
        reviewCount: 4,
        category: 'terror',
        age: 1979,
        banner: 'https://fondosmil.com/fondo/14129.jpg',
        platform: 'Amazon',
        type: 'Pelicula',
        trailer: 'https://www.youtube.com/watch?v=Eu9ZFTXXEiw&ab_channel=TrailersyEstrenos',
        votos: [3,5,1,3]
  
    }
  
  
  ]


const mapp = movies.map(e=> (
    {   
        age: e.age,
        description: e.description,
        trailer: e.tailer,
        img: e.img,
        title: e.title,
        id: e.id,
        reviewCount: e.votos.length,
        votos: e.votos,
        rating: parseFloat(((e.votos.reduce((acc, current)=> acc + current, 0))/e.votos.length).toFixed(1)),
        type: e.type,
        key: e.id
    }
    ))


const rank = mapp.sort((a,b) => b.rating - a.rating)



export const voteSlice = createSlice({
    name: 'vote',
    initialState: {value : rank},
    reducers:{
        votar: (state, action)=>{
        let find = state.value.filter(e=> e.id === action.payload.id)
        find.map(e=> e.reviewCount = action.payload.reviewCount + 1)
        find.map(e=> e.rating = action.payload.rating)
        find.map(e=> e.votos = action.payload.votos)
        },
        changesR: (state)=>{
            state.value.sort( (a,b) => b.rating - a.rating )
        },
        changesR2: (state)=>{
            state.value.sort( (a,b) => a.rating - b.rating )
        },
        changesV: (state)=>{    
            state.value.sort( (a,b) => b.reviewCount - a.reviewCount)
        },
        changesV2: (state)=>{
            state.value.sort( (a,b) => a.reviewCount - b.reviewCount )
        }
}
})


export const {votar, changesR, changesR2, changesV, changesV2} = voteSlice.actions
export default voteSlice.reducer;
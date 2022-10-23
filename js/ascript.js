let animes = [
    {
        num: 1,
        name: "Great Teacher Onizuka : Episode 01",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia802507.us.archive.org/3/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-01-vf-01-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2001%20VF%20-%2001%20-%20Voiranime.mp4",
    },
    {
        num: 2,
        name: "Great Teacher Onizuka : Episode 02",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia601506.us.archive.org/17/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-02-vf-02-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2002%20VF%20-%2002%20-%20Voiranime.mp4",
    },
    {
        num: 3,
        name: "Great Teacher Onizuka : Episode 03",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801408.us.archive.org/29/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-03-vf-03-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2003%20VF%20-%2003%20-%20Voiranime.mp4",
    },
    {
        num: 4,
        name: "Great Teacher Onizuka : Episode 04",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia601509.us.archive.org/34/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-04-vf-04-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2004%20VF%20-%2004%20-%20Voiranime.mp4",
    },
    {
        num: 5,
        name: "Great Teacher Onizuka : Episode 05",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801507.us.archive.org/11/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-05-vf-05-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2005%20VF%20-%2005%20-%20Voiranime.mp4",
    },
    {
        num: 6,
        name: "Great Teacher Onizuka : Episode 06",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801409.us.archive.org/5/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-06-vf-06-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2006%20VF%20-%2006%20-%20Voiranime.mp4",
    },
    {
        num: 7,
        name: "Great Teacher Onizuka : Episode 07",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801403.us.archive.org/10/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-07-vf-07-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2007%20VF%20-%2007%20-%20Voiranime.mp4",
    },
    {
        num: 8,
        name: "Great Teacher Onizuka : Episode 08",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801402.us.archive.org/29/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-08-vf-08-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2008%20VF%20-%2008%20-%20Voiranime.mp4",
    },
    {
        num: 9,
        name: "Great Teacher Onizuka : Episode 09",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801503.us.archive.org/23/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-09-vf-09-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2009%20VF%20-%2009%20-%20Voiranime.mp4",
    },
    {
        num: 10,
        name: "Great Teacher Onizuka : Episode 10",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia601407.us.archive.org/16/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-10-vf-10-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2010%20VF%20-%2010%20-%20Voiranime.mp4",
    },
    {
        num: 11,
        name: "Great Teacher Onizuka : Episode 11",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia802504.us.archive.org/20/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-11-vf-11-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2011%20VF%20-%2011%20-%20Voiranime.mp4",
    },
    {
        num: 12,
        name: "Great Teacher Onizuka : Episode 12",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801407.us.archive.org/19/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-12-vf-12-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2012%20VF%20-%2012%20-%20Voiranime.mp4",
    },
    {
        num: 13,
        name: "Great Teacher Onizuka : Episode 13",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801407.us.archive.org/19/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-13-vf-13-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2013%20VF%20-%2013%20-%20Voiranime.mp4",
    },
    {
        num: 14,
        name: "Great Teacher Onizuka : Episode 14",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia802507.us.archive.org/19/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-14-vf-14-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2014%20VF%20-%2014%20-%20Voiranime.mp4",
    },
    {
        num: 15,
        name: "Great Teacher Onizuka : Episode 15",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia802505.us.archive.org/35/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-15-vf-15-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2015%20VF%20-%2015%20-%20Voiranime.mp4",
    },
    {
        num: 16,
        name: "Great Teacher Onizuka : Episode 16",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia601509.us.archive.org/28/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-16-vf-16-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2016%20VF%20-%2016%20-%20Voiranime.mp4",
    },
    {
        num: 17,
        name: "Great Teacher Onizuka : Episode 17",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801503.us.archive.org/26/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-17-vf-17-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2017%20VF%20-%2017%20-%20Voiranime.mp4",
    },
    {
        num: 18,
        name: "Great Teacher Onizuka : Episode 18",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia601409.us.archive.org/5/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-18-vf-18-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2018%20VF%20-%2018%20-%20Voiranime.mp4",
    },    
    {
        num: 19,
        name: "Great Teacher Onizuka : Episode 19",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia601403.us.archive.org/10/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-19-vf-19-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2019%20VF%20-%2019%20-%20Voiranime.mp4",
    },
    {
        num: 20,
        name: "Great Teacher Onizuka : Episode 20",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801400.us.archive.org/35/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-20-vf-20-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2020%20VF%20-%2020%20-%20Voiranime.mp4",
    },
    {
        num: 21,
        name: "Great Teacher Onizuka : Episode 21",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801405.us.archive.org/14/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-21-vf-21-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2021%20VF%20-%2021%20-%20Voiranime.mp4",
    },
    {
        num: 22,
        name: "Great Teacher Onizuka : Episode 22",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia601500.us.archive.org/6/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-22-vf-22-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2022%20VF%20-%2022%20-%20Voiranime.mp4",
    },
    {
        num: 23,
        name: "Great Teacher Onizuka : Episode 23",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801500.us.archive.org/12/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-23-vf-23-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2023%20VF%20-%2023%20-%20Voiranime.mp4",
    },
    {
        num: 24,
        name: "Great Teacher Onizuka : Episode 24",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801401.us.archive.org/21/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-24-vf-24-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2024%20VF%20-%2024%20-%20Voiranime.mp4",
    },
    {
        num: 25,
        name: "Great Teacher Onizuka : Episode 25",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia802502.us.archive.org/27/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-25-vf-25-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2025%20VF%20-%2025%20-%20Voiranime.mp4",
    },
    {
        num: 26,
        name: "Great Teacher Onizuka : Episode 26",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia802504.us.archive.org/31/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-26-vf-26-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2026%20VF%20-%2026%20-%20Voiranime.mp4",
    },
    {
        num: 27,
        name: "Great Teacher Onizuka : Episode 27",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801507.us.archive.org/12/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-27-vf-27-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2027%20VF%20-%2027%20-%20Voiranime.mp4",
    },
    {
        num: 28,
        name: "Great Teacher Onizuka : Episode 28",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia902501.us.archive.org/1/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-28-vf-28-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2028%20VF%20-%2028%20-%20Voiranime.mp4",
    },
    {
        num: 29,
        name: "Great Teacher Onizuka : Episode 29",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia601407.us.archive.org/20/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-29-vf-29-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2029%20VF%20-%2029%20-%20Voiranime.mp4",
    },
    {
        num: 30,
        name: "Great Teacher Onizuka : Episode 30",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801403.us.archive.org/20/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-30-vf-30-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2030%20VF%20-%2030%20-%20Voiranime.mp4",
    },
    {
        num: 31,
        name: "Great Teacher Onizuka : Episode 31",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia902507.us.archive.org/23/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-31-vf-31-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2031%20VF%20-%2031%20-%20Voiranime.mp4",
    },
    {
        num: 32,
        name: "Great Teacher Onizuka : Episode 32",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia601408.us.archive.org/14/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-32-vf-32-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2032%20VF%20-%2032%20-%20Voiranime.mp4",
    },
    {
        num: 33,
        name: "Great Teacher Onizuka : Episode 33",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia802506.us.archive.org/6/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-33-vf-33-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2033%20VF%20-%2033%20-%20Voiranime.mp4",
    },
    {
        num: 34,
        name: "Great Teacher Onizuka : Episode 34",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia802507.us.archive.org/4/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-34-vf-34-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2034%20VF%20-%2034%20-%20Voiranime.mp4",
    },
    {
        num: 35,
        name: "Great Teacher Onizuka : Episode 35",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801401.us.archive.org/4/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-35-vf-35-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2035%20VF%20-%2035%20-%20Voiranime.mp4",
    },
    {
        num: 36,
        name: "Great Teacher Onizuka : Episode 36",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia802505.us.archive.org/33/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-36-vf-36-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2036%20VF%20-%2036%20-%20Voiranime.mp4",
    },
    {
        num: 37,
        name: "Great Teacher Onizuka : Episode 37",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801508.us.archive.org/27/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-37-vf-37-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2037%20VF%20-%2037%20-%20Voiranime.mp4",
    },
    {
        num: 38,
        name: "Great Teacher Onizuka : Episode 38",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801507.us.archive.org/17/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-38-vf-38-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2038%20VF%20-%2038%20-%20Voiranime.mp4",
    },
    {
        num: 39,
        name: "Great Teacher Onizuka : Episode 39",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia902502.us.archive.org/9/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-39-vf-39-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2039%20VF%20-%2039%20-%20Voiranime.mp4",
    },
    {
        num: 40,
        name: "Great Teacher Onizuka : Episode 40",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia902509.us.archive.org/5/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-40-vf-40-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2040%20VF%20-%2040%20-%20Voiranime.mp4",
    },
    {
        num: 41,
        name: "Great Teacher Onizuka : Episode 41",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia801400.us.archive.org/8/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-41-vf-41-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2041%20VF%20-%2041%20-%20Voiranime.mp4",
    },
    {
        num: 42,
        name: "Great Teacher Onizuka : Episode 42",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia601503.us.archive.org/34/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-42-vf-42-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2042%20VF%20-%2042%20-%20Voiranime.mp4",
    },
    {
        num: 43,
        name: "Great Teacher Onizuka : Episode 43",
        type: "Anime",
        category: "Comédie",
        thumbnail: "https://ia801509.us.archive.org/0/items/great_teacher_onizuka_80/__ia_thumb.jpg",
        source: "https://ia902507.us.archive.org/18/items/great-teacher-onizuka-vf-great-teacher-onizuka-gto-43-vf-43-voiranime/Great%20Teacher%20Onizuka%20%28VF%29%20-%20Great%20Teacher%20Onizuka%20%28GTO%29%20-%2043%20VF%20-%2043%20-%20Voiranime.mp4",
    },
    {
        num: 44,
        name: "City Hunter, Nicky Larson : Episode 01",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia601508.us.archive.org/8/items/w9M8n5DKacvX7kxufZDvSbQ5IXg/__ia_thumb.jpg",
        source: "https://ia601400.us.archive.org/11/items/city-hunter-vf-city-hunter-nicky-larson-001-vf-001-voiranime/City%20Hunter%20%28VF%29%20-%20City%20Hunter%20%28Nicky%20Larson%29%20-%20001%20VF%20-%20001%20-%20Voiranime.mp4",
    },
    {
        num: 45,
        name: "City Hunter, Nicky Larson : Episode 02",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia601508.us.archive.org/8/items/w9M8n5DKacvX7kxufZDvSbQ5IXg/__ia_thumb.jpg",
        source: "https://ia802508.us.archive.org/2/items/city-hunter-vf-city-hunter-nicky-larson-002-vf-002-voiranime/City%20Hunter%20%28VF%29%20-%20City%20Hunter%20%28Nicky%20Larson%29%20-%20002%20VF%20-%20002%20-%20Voiranime.mp4",
    },
    {
        num: 46,
        name: "City Hunter, Nicky Larson : Episode 03",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia601508.us.archive.org/8/items/w9M8n5DKacvX7kxufZDvSbQ5IXg/__ia_thumb.jpg",
        source: "https://ia801405.us.archive.org/21/items/city-hunter-vf-city-hunter-nicky-larson-003-vf-003-voiranime/City%20Hunter%20%28VF%29%20-%20City%20Hunter%20%28Nicky%20Larson%29%20-%20003%20VF%20-%20003%20-%20Voiranime.mp4",
    },
    {
        num: 47,
        name: "City Hunter, Nicky Larson : Episode 04",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia601508.us.archive.org/8/items/w9M8n5DKacvX7kxufZDvSbQ5IXg/__ia_thumb.jpg",
        source: "https://ia601406.us.archive.org/5/items/city-hunter-vf-city-hunter-nicky-larson-004-vf-004-voiranime/City%20Hunter%20%28VF%29%20-%20City%20Hunter%20%28Nicky%20Larson%29%20-%20004%20VF%20-%20004%20-%20Voiranime.mp4",
    },
    {
        num: 48,
        name: "City Hunter, Nicky Larson : Episode 05",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia601508.us.archive.org/8/items/w9M8n5DKacvX7kxufZDvSbQ5IXg/__ia_thumb.jpg",
        source: "https://ia601402.us.archive.org/13/items/city-hunter-vf-city-hunter-nicky-larson-005-vf-005-voiranime/City%20Hunter%20%28VF%29%20-%20City%20Hunter%20%28Nicky%20Larson%29%20-%20005%20VF%20-%20005%20-%20Voiranime.mp4",
    },
    {
        num: 55,
        name: "Yuu Yuu Hakusho : Episode 01",
        type: "Anime",
        category: "Aventure",
        thumbnail: "https://ia902502.us.archive.org/33/items/yu-yu-hakusho-characters-3/__ia_thumb.jpg",
        source: "https://ia802507.us.archive.org/8/items/yuu-yuu-hakusho-vf-yu-yu-hakusho-001-vf-001-voiranime/Yuu%E2%98%86Yuu%E2%98%86Hakusho%20%28VF%29%20-%20Yu%20Yu%20Hakusho%20-%20001%20VF%20-%20001%20-%20Voiranime.mp4",
    },
    {
        num: 56,
        name: "Yuu Yuu Hakusho : Episode 02",
        type: "Anime",
        category: "Aventure",
        thumbnail: "https://ia902502.us.archive.org/33/items/yu-yu-hakusho-characters-3/__ia_thumb.jpg",
        source: "https://ia802505.us.archive.org/14/items/yuu-yuu-hakusho-vf-yu-yu-hakusho-002-vf-002-voiranime/Yuu%E2%98%86Yuu%E2%98%86Hakusho%20%28VF%29%20-%20Yu%20Yu%20Hakusho%20-%20002%20VF%20-%20002%20-%20Voiranime.mp4",
    },
    {
        num: 57,
        name: "Yuu Yuu Hakusho : Episode 03",
        type: "Anime",
        category: "Aventure",
        thumbnail: "https://ia902502.us.archive.org/33/items/yu-yu-hakusho-characters-3/__ia_thumb.jpg",
        source: "https://ia601509.us.archive.org/29/items/yuu-yuu-hakusho-vf-yu-yu-hakusho-003-vf-003-voiranime/Yuu%E2%98%86Yuu%E2%98%86Hakusho%20%28VF%29%20-%20Yu%20Yu%20Hakusho%20-%20003%20VF%20-%20003%20-%20Voiranime.mp4",
    },
    {
        num: 58,
        name: "Dragon Ball : Episode 01",
        type: "Anime",
        category: "Aventure",
        thumbnail: "https://ia601501.us.archive.org/10/items/tZ0jXOeYBWPZ0OWzUhTlYvMF7YR/__ia_thumb.jpg",
        source: "https://ia801501.us.archive.org/21/items/drgba/drgba.mp4",
    },
    {
        num: 59,
        name: "Dragon Ball : Episode 02",
        type: "Anime",
        category: "Aventure",
        thumbnail: "https://ia601501.us.archive.org/10/items/tZ0jXOeYBWPZ0OWzUhTlYvMF7YR/__ia_thumb.jpg",
        source: "https://ia601508.us.archive.org/17/items/drgbb/drgbb.mp4",
    },
    {
        num: 60,
        name: "Dragon Ball : Episode 03",
        type: "Anime",
        category: "Aventure",
        thumbnail: "https://ia601501.us.archive.org/10/items/tZ0jXOeYBWPZ0OWzUhTlYvMF7YR/__ia_thumb.jpg",
        source: "https://ia601506.us.archive.org/6/items/drgbc/drgbc.mp4",
    },
    {
        num: 61,
        name: "Dragon Ball : Episode 04",
        type: "Anime",
        category: "Aventure",
        thumbnail: "https://ia601501.us.archive.org/10/items/tZ0jXOeYBWPZ0OWzUhTlYvMF7YR/__ia_thumb.jpg",
        source: "https://ia601502.us.archive.org/27/items/drgbd/drgbd.mp4",
    },
    {
        num: 64,
        name: "Yuu Yuu Hakusho : Episode 04",
        type: "Anime",
        category: "Aventure",
        thumbnail: "https://ia902502.us.archive.org/33/items/yu-yu-hakusho-characters-3/__ia_thumb.jpg",
        source: "https://ia801502.us.archive.org/25/items/yuu-yuu-hakusho-vf-yu-yu-hakusho-004-vf-004-voiranime/Yuu%E2%98%86Yuu%E2%98%86Hakusho%20%28VF%29%20-%20Yu%20Yu%20Hakusho%20-%20004%20VF%20-%20004%20-%20Voiranime.mp4",
    },
    {
        num: 65,
        name: "Yuu Yuu Hakusho : Episode 05",
        type: "Anime",
        category: "Aventure",
        thumbnail: "https://ia902502.us.archive.org/33/items/yu-yu-hakusho-characters-3/__ia_thumb.jpg",
        source: "https://ia801401.us.archive.org/27/items/yuu-yuu-hakusho-vf-yu-yu-hakusho-005-vf-005-voiranime/Yuu%E2%98%86Yuu%E2%98%86Hakusho%20%28VF%29%20-%20Yu%20Yu%20Hakusho%20-%20005%20VF%20-%20005%20-%20Voiranime.mp4",
    },
    {
        num: 66,
        name: "Desert Punk : Episode 01",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia802502.us.archive.org/23/items/desert-punk-episode-01-vf-suite-en-description/desert%20punk%20-%20%C3%A9pisode%2001%20-%20VF%20-%20%28suite%20en%20description%29.mp4",
    },
    {
        num: 67,
        name: "Desert Punk : Episode 02",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601401.us.archive.org/23/items/desert-punk-episode-02-vf/desert%20punk%20-%20%C3%A9pisode%2002%20-%20VF.mp4",
    },
    {
        num: 68,
        name: "Desert Punk : Episode 03",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601503.us.archive.org/34/items/desert-punk-episode-03-vf/desert%20punk%20-%20%C3%A9pisode%2003%20-%20VF.mp4",
    },
    {
        num: 69,
        name: "Desert Punk : Episode 04",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia801400.us.archive.org/10/items/desert-punk-episode-04-vf/desert%20punk%20-%20%C3%A9pisode%2004%20-%20VF.mp4",
    },
    {
        num: 70,
        name: "Desert Punk : Episode 05",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601507.us.archive.org/23/items/desert-punk-episode-05-vf/desert%20punk%20-%20%C3%A9pisode%2005%20-%20VF.mp4",
    },
    {
        num: 71,
        name: "Desert Punk : Episode 06",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601505.us.archive.org/10/items/desert-punk-episode-06-vf/desert%20punk%20-%20%C3%A9pisode%2006%20-%20VF.mp4",
    },
    {
        num: 72,
        name: "Desert Punk : Episode 07",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601409.us.archive.org/29/items/desert-punk-episode-07-vf/desert%20punk%20-%20%C3%A9pisode%2007%20-%20VF.mp4",
    },
    {
        num: 73,
        name: "Desert Punk : Episode 08",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601403.us.archive.org/7/items/desert-punk-episode-08-vf/desert%20punk%20-%20%C3%A9pisode%2008%20-%20VF.mp4",
    },
    {
        num: 74,
        name: "Desert Punk : Episode 09",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601506.us.archive.org/30/items/desert-punk-episode-09-vf/desert%20punk%20-%20%C3%A9pisode%2009%20-%20VF.mp4",
    },
    {
        num: 75,
        name: "Desert Punk : Episode 10",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601507.us.archive.org/29/items/desert-punk-episode-10-vf/desert%20punk%20-%20%C3%A9pisode%2010%20-%20VF.mp4",
    },
    {
        num: 76,
        name: "Desert Punk : Episode 11",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601401.us.archive.org/11/items/desert-punk-episode-11-vf/desert%20punk%20-%20%C3%A9pisode%2011%20-%20VF.mp4",
    },
    {
        num: 77,
        name: "Desert Punk : Episode 12",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601500.us.archive.org/14/items/desert-punk-episode-12-vf/desert%20punk%20-%20%C3%A9pisode%2012%20-%20VF.mp4",
    },
    {
        num: 78,
        name: "Desert Punk : Episode 13",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601400.us.archive.org/23/items/desert-punk-episode-13-vf/desert%20punk%20-%20%C3%A9pisode%2013%20-%20VF.mp4",
    },
    {
        num: 79,
        name: "Desert Punk : Episode 14",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601407.us.archive.org/4/items/desert-punk-episode-14-vf/desert%20punk%20-%20%C3%A9pisode%2014%20-%20VF.mp4",
    },
    {
        num: 80,
        name: "Desert Punk : Episode 15",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601400.us.archive.org/14/items/desert-punk-episode-15-vf/desert%20punk%20-%20%C3%A9pisode%2015%20-%20VF.mp4",
    },
    {
        num: 81,
        name: "Desert Punk : Episode 16",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia801402.us.archive.org/33/items/desert-punk-episode-16-vf/desert%20punk%20-%20%C3%A9pisode%2016%20-%20VF.mp4",
    },
    {
        num: 82,
        name: "Desert Punk : Episode 17",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia902505.us.archive.org/23/items/desert-punk-episode-17-vf/desert%20punk%20-%20%C3%A9pisode%2017%20-%20VF.mp4",
    },
    {
        num: 83,
        name: "Desert Punk : Episode 18",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601506.us.archive.org/11/items/desert-punk-episode-18-vf/desert%20punk%20-%20%C3%A9pisode%2018%20-%20VF.mp4",
    },
    {
        num: 84,
        name: "Desert Punk : Episode 19",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601509.us.archive.org/22/items/desert-punk-episode-19-vf/desert%20punk%20-%20%C3%A9pisode%2019%20-%20VF.mp4",
    },
    {
        num: 85,
        name: "Desert Punk : Episode 20",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601400.us.archive.org/4/items/desert-punk-episode-20-vf/desert%20punk%20-%20%C3%A9pisode%2020%20-%20VF.mp4",
    },
    {
        num: 86,
        name: "Desert Punk : Episode 21",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601504.us.archive.org/26/items/desert-punk-episode-21-vf/desert%20punk%20-%20%C3%A9pisode%2021%20-%20VF.mp4",
    },
    {
        num: 87,
        name: "Desert Punk : Episode 22",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia902505.us.archive.org/35/items/desert-punk-episode-22-vf/desert%20punk%20-%20%C3%A9pisode%2022%20-%20VF.mp4",
    },
    {
        num: 88,
        name: "Desert Punk : Episode 23",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601507.us.archive.org/7/items/desert-punk-episode-23-vf/desert%20punk%20-%20%C3%A9pisode%2023%20-%20VF.mp4",
    },
    {
        num: 89,
        name: "Desert Punk : Episode 24",
        type: "Anime",
        category: "Action",
        thumbnail: "https://ia802507.us.archive.org/12/items/71z-zqfc-qnw-l.-ac-sy-445/__ia_thumb.jpg",
        source: "https://ia601509.us.archive.org/7/items/desert-punk-episode-24-fin-vf/desert%20punk%20-%20%C3%A9pisode%2024%20-%20FIN%20-%20VF.mp4",
    },
];

let ordered_animes = animes.sort(function(a,b){
    if(a.name < b.name){
        return -1;
    }
    if(a.name > b.name){
        return 1;
    }
    return 0;
});

let categories = ["Action","Aventure","Comédie","Horreur","Sport"];

for(let i=0;i<categories.length;i++) {
    let filter = document.getElementById("filter");
    let filter_opt = document.createElement("option");

    filter_opt.setAttribute("id", "select-value");

    filter_opt.setAttribute("value", categories[i].toLowerCase());

    filter.setAttribute("onchange", "filterContent()");

    filter_opt.innerHTML = categories[i];

    filter.appendChild(filter_opt);

}

function filterContent() {
    let elements = document.querySelectorAll("#anime-box");
    let value = document.getElementById("filter").value;
    
    elements.forEach((element) => {
        if(value == 'all') {
            element.classList.remove("invisible");
        }
        else {
            if(element.classList.contains(value)) {
                element.classList.remove("invisible");
            }
            else {
              element.classList.add("invisible");
          }
        }
    });
}

const searchContent = () => {
    const searchbox = document.getElementById("search-input").value.toUpperCase();
    const listcontents = document.getElementById("animes");
    const content = document.querySelectorAll("#anime-box");
    const aname = listcontents.getElementsByClassName("anime-title");

    for(var i=0;i<aname.length;i++) {
        let match = content[i].getElementsByClassName("anime-title")[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML;

            if(textvalue.toUpperCase().indexOf(searchbox) > -1){
                content[i].style.display = "";
            }else{
                content[i].style.display = "none";
            }
        }
    }

}

window.onload = () => {
    filterContent('all');
    }

for(let i=0;i<ordered_animes.length;i++) {
document.querySelector('#animes').innerHTML += `
<div id="anime-box" class="anime-box ${animes[i].category.toLowerCase()} invisible">
   <img src="${animes[i].thumbnail}" alt="" class="anime-box-img">
   <div class="anime-box-overlay">                 
   </div>
   <div class="anime-box-text">
     <div id="btns-group" class="btns-group">
        <button id="btns-group-play${animes[i].num}" class="btns-group-play"><i class="fa fa-play"></i></button>             
     </div>  
     <h2 class="anime-title">${animes[i].name}</h2>
     <span class="anime-category">${animes[i].category}</span>
   </div>
</div>`
}

let video = document.querySelector(".video-container");

for(let i=0;i<animes.length;i++) {

    abox = "aname" + i;
    window[abox] = document.querySelector("#btns-group-play"+`${animes[i].num}`);

window[abox].addEventListener('click', () => {
   document.querySelector(".video-box").innerHTML = `
   <video id="player" controls controlsList="nodownload">
       <source src="${animes[i].source}" />
   </video>
   <button id="close"><i class="fa fa-times"></i></button>`
   let player = document.querySelector("#player");
   let closebtn = document.querySelector("#close");
   
   video.classList.add('show');
   player.play();
   
   closebtn.addEventListener('click', () => {
       video.classList.remove('show');
       player.pause();
 });
})
};
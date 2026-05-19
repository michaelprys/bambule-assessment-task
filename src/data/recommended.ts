export type RecommendedLink = {
    label: string;
    url: string;
};

export type Recommended = {
    id: number;
    title: string;
    slug: string;
    links: RecommendedLink[];
    alt: string;
};

export const recommended: Recommended[] = [
    {
        id: 1,
        title: 'Módní kabelky',
        slug: 'rec-purse-pets',
        links: [
            { label: 'Micro', url: '#' },
            { label: 'Interaktivní', url: '#' },
            { label: 'Ostatní', url: '#' },
        ],
        alt: 'Módní kabelky',
    },
    {
        id: 2,
        title: 'Nejširší nabídka Lego®',
        slug: 'rec-lego-lion',
        links: [
            { label: 'Jurský svět', url: '#' },
            { label: 'Adults', url: '#' },
            { label: 'MARVEL', url: '#' },
        ],
        alt: 'Nejširší nabídka Lego®',
    },
    {
        id: 3,
        title: 'Znáte z TV',
        slug: 'rec-paw-patrol',
        links: [
            { label: 'Tlapková patrola', url: '#' },
            { label: 'Medvídek', url: '#' },
            { label: 'Bany', url: '#' },
        ],
        alt: 'Znáte z TV',
    },
];

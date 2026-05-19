export type Category = {
    name: string;
    slug: string;
    color: string;
    alt: string;
    rotate: number;
    scaleX: number;
};

export const categories: Category[] = [
    {
        name: 'Cool Games',
        slug: 'cool-games',
        color: 'var(--background-image-bubble-blue)',
        alt: 'Cool Games toys',
        rotate: 0,
        scaleX: 1,
    },
    {
        name: 'Tlapková patrola',
        slug: 'paw-patrol',
        color: 'var(--background-image-bubble-yellow)',
        alt: 'Paw Patrol toys',
        rotate: 90,
        scaleX: -1,
    },
    {
        name: 'My Fairy Garden',
        slug: 'my-fairy-garden',
        color: 'var(--background-image-bubble-pink)',
        alt: 'My Fairy Garden toys',
        rotate: 180,
        scaleX: 1,
    },
    {
        name: 'Spy X',
        slug: 'spy-x',
        color: 'var(--background-image-bubble-peach)',
        alt: 'Spy X toys',
        rotate: 90,
        scaleX: 1,
    },
    {
        name: 'Odrážedla',
        slug: 'balance-car',
        color: 'var(--background-image-bubble-lilac)',
        alt: 'Odrážedla toys',
        rotate: -90,
        scaleX: 1,
    },
    {
        name: 'Cool Games',
        slug: 'cool-games',
        color: 'var(--background-image-bubble-lime)',
        alt: 'Cool Games toys',
        rotate: 0,
        scaleX: 1,
    },
];

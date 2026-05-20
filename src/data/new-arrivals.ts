export type NewArrival = {
    id: number;
    slug: string;
    title: string;

    rating: number;
    reviews: number;

    availability: string;
    stores: number;

    oldPrice?: number;
    price: number;
    clubPrice?: number;

    badges?: {
        label: string;
        variant: 'discount' | 'delivery' | 'tv';
    }[];
};

export const newArrivals: NewArrival[] = [
    {
        id: 1,
        slug: 'luna-unicorn',
        title: 'Luna pohádkový jednorožec',
        rating: 4,
        reviews: 19,
        availability: 'Skladem',
        stores: 26,
        oldPrice: 2690,
        price: 1990,
        clubPrice: 1899,
        badges: [
            { label: '-22 %', variant: 'discount' },
            { label: 'Znáte z TV', variant: 'tv' },
        ],
    },
    {
        id: 2,
        slug: 'despicable',
        title: 'Luna pohádkový jednorožec',
        rating: 4,
        reviews: 19,
        availability: 'Skladem',
        stores: 26,
        price: 2690,
        badges: [{ label: 'Doprava zdarma', variant: 'delivery' }],
    },
    {
        id: 3,
        slug: 'hatchimals',
        title: 'Hatchimals líhnoucí se interaktivní zvířátko',
        rating: 4,
        reviews: 19,
        availability: 'Skladem',
        stores: 26,
        oldPrice: 2690,
        price: 1990,
        clubPrice: 1899,
        badges: [{ label: '-18 %', variant: 'discount' }],
    },
    {
        id: 4,
        slug: 'luna-unicorn',
        title: 'Luna pohádkový jednorožec',
        rating: 4,
        reviews: 19,
        availability: 'Skladem',
        stores: 26,
        price: 2690,
        badges: [{ label: 'Doprava zdarma', variant: 'delivery' }],
    },
    {
        id: 5,
        slug: 'luna-unicorn',
        title: 'Luna pohádkový jednorožec',
        rating: 4,
        reviews: 19,
        availability: 'Skladem',
        stores: 26,
        price: 2690,
        badges: [{ label: 'Doprava zdarma', variant: 'delivery' }],
    },
    {
        id: 6,
        slug: 'luna-unicorn',
        title: 'Luna pohádkový jednorožec',
        rating: 4,
        reviews: 19,
        availability: 'Skladem',
        stores: 26,
        price: 2690,
        badges: [{ label: 'Doprava zdarma', variant: 'delivery' }],
    },
];

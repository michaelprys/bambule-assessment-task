export type Article = {
    id: number;
    badge: string;
    badgeColor: 'purple' | 'darkblue' | 'green';
    title: string;
    text: string;
    alt: string;
};

export const articlesData: Article[] = [
    {
        id: 1,
        badge: 'Odborný článek',
        badgeColor: 'purple',
        title: 'Odměňování za vysvědčení?',
        text: 'O tom, jak zvládnout stres jsme psali minule. Dnes se podíváme na téma odměн за „vysvědčení“. Záměrně jej dávám do uvozovek, protože...',
        alt: 'Odměňování за vysvědčení',
    },
    {
        id: 2,
        badge: 'Akce',
        badgeColor: 'darkblue',
        title: 'O Kapku lepší Bambule se vrací již pošesté',
        text: 'Nadační fond Kapka naděje a hračkářství Bambule společně opět pomáhají! Přispějte s námi na dobrou věc a pošlete Medvídky naděje...',
        alt: 'O Kapku lepší Bambule',
    },
    {
        id: 3,
        badge: 'Odborný článek',
        badgeColor: 'purple',
        title: 'Interaktivní hračky',
        text: 'Rodiče mohou v dnešní době vybírat ze skutečně pestré nabídky různých podnětů pro děti prakticky od narození. Hračky obvykle stimulují sluch...',
        alt: 'Interaktivní hračky',
    },
];

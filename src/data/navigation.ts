export type NavItem = {
    label: string;
    isMenu?: boolean;
    to?: string;
    children?: { label: string; to: string }[];
};

export const navItems: NavItem[] = [
    {
        label: 'Kategorie',
        isMenu: true,
        children: [
            { label: 'Hračky pro miminka', to: '/' },
            { label: 'Stavebnice', to: '/' },
            { label: 'Auta a modely', to: '/' },
        ],
    },
    { label: 'Akční ceny %' },
    {
        label: 'Lego®',
        isMenu: true,
        children: [
            { label: 'Lego Technic', to: '/' },
            { label: 'Lego City', to: '/' },
            { label: 'Lego Star Wars', to: '/' },
        ],
    },
    { label: 'Venkovní hračky', isMenu: true },
    { label: 'Znáte z TV', to: '/' },
    { label: 'Vánoce', to: '/' },
    { label: 'Novinky', to: '/' },
    { label: 'Pro kluky', isMenu: true },
    { label: 'Pro holky', isMenu: true },
];

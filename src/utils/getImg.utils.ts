const images = import.meta.glob('/src/assets/images/**/*.{avif,webp,svg}', {
    eager: true,
    import: 'default',
}) as Record<string, string>;

export const getImg = (path: string, ext: string) => {
    return images[`/src/assets/images/${path}.${ext}`] ?? '';
};

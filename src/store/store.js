import { readable } from 'svelte/store';

export const currentUser = readable({
    image: './assets/user-images/image-zena.jpg',
    name: 'Zena Kelley',
    username: 'velvetround',
});
export const categories = readable([
    'UI',
    'UX',
    'Enhancement',
    'Bug',
    'Feature',
]);

export const statuses = readable([
    {
        name: 'Planned',
        description: 'Ideas prioritized for research',
        color: '#F49F85',
    },
    {
        name: 'In-Progress',
        description: 'Currently being developed',
        color: '#AD1FEA',
    },
    {
        name: 'Live',
        description: 'Released features',
        color: '#62BCFA',
    },
]);

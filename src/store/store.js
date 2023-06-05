import { writable } from 'svelte/store';
export const categories = writable([
    'UI',
    'UX',
    'Enhancement',
    'Bug',
    'Feature'
])

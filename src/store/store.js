import {readable, writable} from 'svelte/store';

export const currentUser = readable({
    image: '/user-images/image-zena.jpg',
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
        name: 'Suggestion',
        description: '',
        color: '',
        visible: false,
    },
    {
        name: 'Planned',
        description: 'Ideas prioritized for research',
        color: '#F49F85',
        visible: true,
    },
    {
        name: 'In-Progress',
        description: 'Currently being developed',
        color: '#AD1FEA',
        visible: true,
    },
    {
        name: 'Live',
        description: 'Released features',
        color: '#62BCFA',
        visible: true,
    },
]);

export const feedbacks = writable([
    {
        id: 1,
        title: 'Add tags for solutions',
        category: 'Enhancement',
        upvotes: 112,
        status: 'Suggestion',
        description: 'Easier to search for solutions based on a specific stack.',
        comments: [],
    },
    {
        id: 2,
        title: 'Add a dark theme option',
        category: 'Feature',
        upvotes: 99,
        status: 'Suggestion',
        description: 'It would help people with light sensitivities and who prefer dark mode.',
        comments: [],
    },
    {
        id: 3,
        title: 'Q&A within the challenge hubs',
        category: 'Feature',
        upvotes: 65,
        status: 'Suggestion',
        description: 'Challenge-specific Q&A would make for easy reference.',
        comments: [],
    },
    {
        id: 4,
        title: 'Add image/video upload to feedback',
        category: 'Enhancement',
        upvotes: 51,
        voted: true,
        status: 'Suggestion',
        description: 'Images and screencasts can enhance comments on solutions.',
        comments: [],
    },
    {
        id: 5,
        title: 'Ability to follow others',
        category: 'Feature',
        upvotes: 42,
        status: 'Suggestion',
        description: 'Stay updated on comments and solutions other people post.',
        comments: [],
    },
    {
        id: 6,
        title: 'Preview images not loading',
        category: 'Bug',
        upvotes: 3,
        status: 'Suggestion',
        description: 'Challenge preview images are missing when you apply a filter.',
    },
    {
        id: 7,
        title: 'More comprehensive reports',
        category: 'Feature',
        upvotes: 123,
        status: 'Planned',
        description: 'It would be great to see a more detailed breakdown of solutions.',
        comments: [],
    },
    {
        id: 8,
        title: 'Learning paths',
        category: 'Feature',
        upvotes: 28,
        status: 'Planned',
        description: 'Sequenced projects for different goals to help people improve.',
        comments: [],
    },
    {
        id: 9,
        title: 'One-click portfolio generation',
        category: 'Feature',
        upvotes: 62,
        status: 'In-Progress',
        description: 'Add ability to create professional looking portfolio from profile.',
        comments: [],
    },
    {
        id: 10,
        title: 'Bookmark challenges',
        category: 'Feature',
        upvotes: 31,
        status: 'In-Progress',
        description: 'Be able to bookmark challenges to take later on.',
        comments: [],
    },
    {
        id: 11,
        title: 'Animated solution screenshots',
        category: 'Bug',
        upvotes: 9,
        status: 'In-Progress',
        description: 'Screenshots of solutions with animations don’t display correctly.',
    },
    {
        id: 12,
        title: 'Add micro-interactions',
        category: 'Enhancement',
        upvotes: 71,
        status: 'Live',
        description: 'Small animations at specific points can add delight.',
        comments: [],
    },
]);
export const comments = writable([
    {
        id: 1,
        feedbackId: 1,
        content: 'Awesome idea! Trying to find framework-specific projects within the hubs can be tedious',
        user: {
            image: '/user-images/image-suzanne.jpg',
            name: 'Suzanne Chang',
            username: 'upbeat1811',
        },
    },
    {
        id: 2,
        feedbackId: 1,
        content: 'Please use fun, color-coded labels to easily identify them at a glance',
        user: {
            image: '/user-images/image-thomas.jpg',
            name: 'Thomas Hood',
            username: 'brawnybrave',
        },
    },
    {
        id: 3,
        feedbackId: 2,
        content: 'Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.',
        user: {
            image: '/user-images/image-elijah.jpg',
            name: 'Elijah Moss',
            username: 'hexagon.bestagon',
        },
    },
    {
        id: 4,
        feedbackId: 2,
        content: 'Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.',
        user: {
            image: '/user-images/image-james.jpg',
            name: 'James Skinner',
            username: 'hummingbird1',
        },
        replies: [],
    },
    {
        id: 5,
        feedbackId: 3,
        content: 'Much easier to get answers from devs who can relate, since they\'ve either finished the challenge themselves or are in the middle of it.',
        user: {
            image: '/user-images/image-george.jpg',
            name: 'George Partridge',
            username: 'soccerviewer8',
        },
    },
    {
        id: 6,
        feedbackId: 4,
        content: 'Right now, there is no ability to add images while giving feedback which isn\'t ideal because I have to use another app to show what I mean',
        user: {
            image: '/user-images/image-javier.jpg',
            name: 'Javier Pollard',
            username: 'warlikeduke',
        },
    },
    {
        id: 7,
        feedbackId: 4,
        content: 'Yes I\'d like to see this as well. Sometimes I want to add a short video or gif to explain the site\'s behavior..',
        user: {
            image: '/user-images/image-roxanne.jpg',
            name: 'Roxanne Travis',
            username: 'peppersprime32',
        },
    },
    {
        id: 8,
        feedbackId: 5,
        content: 'I also want to be notified when devs I follow submit projects on FEM. Is in-app notification also in the pipeline?',
        user: {
            image: '/user-images/image-victoria.jpg',
            name: 'Victoria Mejia',
            username: 'arlen_the_marlin',
        },
        replies: [],
    },
    {
        id: 9,
        feedbackId: 5,
        content: 'I\'ve been saving the profile URLs of a few people and I check what they’ve been doing from time to time. Being able to follow them solves that',
        user: {
            image: '/user-images/image-jackson.jpg',
            name: 'Jackson Barker',
            username: 'countryspirit',
        },
    },
    {
        id: 10,
        feedbackId: 7,
        content: 'This would be awesome! It would be so helpful to see an overview of my code in a way that makes it easy to spot where things could be improved.',
        user: {
            image: '/user-images/image-victoria.jpg',
            name: 'Victoria Mejia',
            username: 'arlen_the_marlin',
        },
    },
    {
        id: 11,
        feedbackId: 7,
        content: 'Yeah, this would be really good. I\'d love to see deeper insights into my code!',
        user: {
            image: '/user-images/image-jackson.jpg',
            name: 'Jackson Barker',
            username: 'countryspirit',
        },
    },
    {
        id: 12,
        feedbackId: 8,
        content: 'Having a path through the challenges that I could follow would be brilliant! Sometimes I\'m not sure which challenge would be the best next step to take. So this would help me navigate through them!',
        user: {
            image: '/user-images/image-george.jpg',
            name: 'George Partridge',
            username: 'soccerviewer8',
        },
    },
    {
        id: 13,
        feedbackId: 9,
        content: 'I haven\'t built a portfolio site yet, so this would be really helpful. Might it also be possible to choose layout and colour themes?!',
        user: {
            image: '/user-images/image-ryan.jpg',
            name: 'Ryan Welles',
            username: 'voyager.344',
        },
    },
    {
        id: 14,
        feedbackId: 10,
        content: 'This would be great! At the moment, I\'m just starting challenges in order to save them. But this means the My Challenges section is overflowing with projects and is hard to manage. Being able to bookmark challenges would be really helpful.',
        user: {
            image: '/user-images/image-suzanne.jpg',
            name: 'Suzanne Chang',
            username: 'upbeat1811',
        },
    },
    {
        id: 15,
        feedbackId: 12,
        content: 'I\'d love to see this! It always makes me so happy to see little details like these on websites.',
        user: {
            image: '/user-images/image-victoria.jpg',
            name: 'Victoria Mejia',
            username: 'arlen_the_marlin',
        },
        replies: [],
    },
]);

export const replies = writable([
    {
        id: 1,
        commentId: 4,
        content: 'While waiting for dark mode, there are browser extensions that will also do the job. Search for \'dark theme\' followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.',
        replyingTo: 'hummingbird1',
        user: {
            image: '/user-images/image-anne.jpg',
            name: 'Anne Valentine',
            username: 'annev1990',
        },
    },
    {
        id: 2,
        commentId: 4,
        content: 'Good point! Using any kind of style extension is great and can be highly customizable, like the ability to change contrast and brightness. I\'d prefer not to use one of such extensions, however, for security and privacy reasons.',
        replyingTo: 'annev1990',
        user: {
            image: '/user-images/image-ryan.jpg',
            name: 'Ryan Welles',
            username: 'voyager.344',
        },
    },
    {
        id: 3,
        commentId: 8,
        content: 'Bumping this. It would be good to have a tab with a feed of people I follow so it\'s easy to see what challenges they’ve done lately. I learn a lot by reading good developers\' code.',
        replyingTo: 'arlen_the_marlin',
        user: {
            image: '/user-images/image-zena.jpg',
            name: 'Zena Kelley',
            username: 'velvetround',
        },
    },
    {
        id: 4,
        commentId: 15,
        content: 'Me too! I\'d also love to see celebrations at specific points as well. It would help people take a moment to celebrate their achievements!',
        replyingTo: 'arlen_the_marlin',
        user: {
            image: '/user-images/image-suzanne.jpg',
            name: 'Suzanne Chang',
            username: 'upbeat1811',
        },
    },
]);

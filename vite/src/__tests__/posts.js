import { describe, expect, test, beforeEach } from '@jest/globals';
import { createPost, listAllPosts, listPostsByAuthor, listPostsByTag } from '../services/posts.js';

const samplePost = [
    {
        title: 'Sample Post',
        author: 'KC',
        tags: ['redux', 'post'],
        contents: 'This is a sample post content.',
    },
    {
        title: 'Another Post',
        author: 'Kevin',
        tags: ['javascript', 'testing'],
        contents: 'This is another post content.',
    },
    {
        title: 'Guide to typescript',
        author: 'KC',
        tags: ['typescript', 'guide'],
        contents: 'A guide to typescript.',
    }
];

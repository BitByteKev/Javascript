import { post } from '';

export async function createPost({ title, author, contents, tags }) {
    const newPost = new post({
        title,
        author,
        contents,
        tags
    });

    return await newPost.save();
}

async function listPosts(
    query = {},
    { sortBy = 'createdAt', sortOrder = 'descending' } = {},
) {

    return await post.find(query).sort({ [sortBy]: sortOrder });
}
    export async function listAllPosts() {
        return await listPosts({ }, options);
    }
    export async function listPostsByAuthor(author, options) {
        return await listPosts({ author }, options);
    }

    export async function listPostsByTag( tags, options) {
        return await listPosts({ tags }, options);
    }
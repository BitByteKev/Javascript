import { initDatabase } from "./db/init.js";
import { Post } from "./db/models/post.js";

await initDatabase();

const post = new Post({
    title: "My First Post",
    author: "Kevin",
    contents: "This post is stored in a MongoDB database using mongoose.",
    tags: ["introduction", "first post", "mongoose"]
});

const createdPost = await post.save();

const posts = await Post.find({});
console.log(posts);

await Post.findByIdAndUpdate(createdPost._id, { 
    $set: { title: 'Updated Post Title' }, 
});



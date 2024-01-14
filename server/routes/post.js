import express from 'express';
import { getposts } from '../controllers/post.js';
import { createPost } from '../controllers/post.js';
const router = express.Router();


//http://localhost:5000/posts

router.get('/',getposts);
router.post('/',createPost);

export default router;
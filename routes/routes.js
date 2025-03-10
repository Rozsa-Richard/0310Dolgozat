import * as Controller from '../controllers/controllers.js';
import express from 'express';

const router = express.Router();

router.get('/', Controller.getAllMovies);

router.get('/:id', Controller.getMovieById);

router.post('/', Controller.createMovie);

router.put('/:id', Controller.updateMovie);

router.delete('/:id', Controller.deleteMovies);

export default router;
import express from 'express';

import { getUsers, createUser, getUser, deleteUser, updateUser } from '../controllers/usuarios.js';

const gerenciadorRotas = express.Router();

gerenciadorRotas.get('/', getUsers);

gerenciadorRotas.post('/', createUser);

gerenciadorRotas.get('/:id', getUser);

gerenciadorRotas.delete('/:id', deleteUser);

gerenciadorRotas.patch('/:id', updateUser);

export default gerenciadorRotas;
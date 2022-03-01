const { response } = require('express');

const usuariosGet = function(req, res = response) {

    const { q, nombre = 'No name', apikey } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPost = function(req, res = response) {

    const { nombre, edad } = req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
}

const usuariosPut = function(req, res = response) {

    const { id } = req.params;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPatch = function(req, res) {
    res.json({
        msg: 'patch API - controlador'
    });
}

const usuariosDelete = function(req, res) {
    res.json({
        msg: 'delete API - controlador'
    });
}


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPatch,
    usuariosPost,
    usuariosDelete
}
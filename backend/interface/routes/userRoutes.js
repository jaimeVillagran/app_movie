const express = require("express");
const { User } = require("../../domain/models");
const authenticateJWT = require("../middlewares/authMiddleware");

const router = express.Router();

// Ruta protegida para obtener el perfil del usuario
router.get('/profile', authenticateJWT, async (req, res) => {
    try {
        const userId = req.user.userId;
        const user = await User.findByPk(userId, {
            attributes: ['email', 'name'] // Solo devolvemos email y nombre
        });

        if (user) {
            res.json(user);
        } else {
            res.status(404).send("Usuario no encontrado");
        }
    } catch (error) {
        res.status(500).send("Error al obtener el perfil del usuario.");
    }
});

module.exports = router;

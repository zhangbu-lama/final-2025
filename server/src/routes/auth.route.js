import express from "express";
<<<<<<< HEAD
import {
    signup,
    userLogin,
    verifyUserToken,
    verifyAdminToken,
    logout,
} from "../controllers/index.js";
import { adminLogin } from "../controllers/admin/login.controller.js";
import { authenticate } from "../middlewares/index.js";
=======
import { signup } from "../controllers/index.js";
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

export const authRouter = express.Router();

authRouter.post("/signup", signup);
<<<<<<< HEAD
authRouter.post("/login", userLogin);
authRouter.post("/admin/login", adminLogin);
authRouter.get("/verify-user-token", authenticate, verifyUserToken);
authRouter.get("/admin/verify-admin-token", authenticate, verifyAdminToken);
authRouter.get("/logout", logout);
=======
>>>>>>> a9a2883aa685ca9314235678934306724487af7f

import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { toggleSubscription } from "../controllers/subscription.controller.js";


const router = Router();

router.use(verifyJWT)

router.route("/toggle/:channelId").patch(toggleSubscription)

export default router
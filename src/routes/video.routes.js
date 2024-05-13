import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { deleteVideo, getVideoById, publishAVideo, togglePublishStatus} from "../controllers/video.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router()

router.use(verifyJWT)

router.route("/publish").post(
    upload.fields([
        {
            name: "videoFile",
            maxCount: 1
        },

        {
            name: "thumbnail",
            maxCount: 1
        }
    ]),
    publishAVideo
)

router.route("/:videoId").get(getVideoById)
router.route("/toggle/publish/:videoId").patch(togglePublishStatus);
router.route("/delete/:videoId").delete(deleteVideo)

export default router
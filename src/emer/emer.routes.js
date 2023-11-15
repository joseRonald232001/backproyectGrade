const router = require("express").Router();
const emersServies = require("./emer.services");

router.route("/emer/:id")
.get(emersServies.findEmerById)
.put(emersServies.patchEmer);

router.route("/newemer").post(emersServies.postNewEmer);

module.exports = router;

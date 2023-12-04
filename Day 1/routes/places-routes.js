const express = require("express");

const router = express.Router();

const dummyPlace = [
    {
    id: "p1",
    title: "India",
    description:"Great country!!",
    location:{
        lat: 19.6811174,
        lng: 60.9490294
    },
    address: "Noida , UP",
    creator: "user1"
}]

// This router handles all the request with start with url like - http://localhost:4000/api/places/p1

router.get("/:pid", (req, res, next) => {
    const placeId = req.params.pid;
    const place = dummyPlace.find(p => {
        return p.id === placeId;
    });

    //Error handling in routers
//     if(!place){
//         return res.status(404)
//         .json({message: "Could not find the place for the provided place id..."})
//     }
//     console.log("GET Request in places...");
//     res.json({place});
// });

//remove the duplicate code for error 

if(!place){
    const error = new Error("Could not find the place for the provided place id...")
    error.code = 404;
    throw error;
}
res.json({ place })

});

// This router handles all the request with start with url like - http://localhost:4000/api/places/user/user1
router.get("/user/:uid", (req, res, next) => {
    const userId = req.params.uid;
    const place = dummyPlace.find(u => {
        return u.creator === userId;
    });

    if(!place){
        const error  = new Error("Could not find the place for the provided user id...");
        error.code = 404;
        return next(error)   
    }
    res.json({ place })

});

module.exports = router;
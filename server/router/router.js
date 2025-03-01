import axios from "axios";
import express from "express";

const menusRouter = express.Router();

menusRouter.get("/info", async (req,res) => {
    try {
        const result = await axios.get(`${process.env.BUSAN_FOOD_API_URL}/menu/korean`, {
            params: {
                serviceKey: process.env.BUSAN_FOOD_API_KEY,
                pageNo: 1
            }
        });
        console.log(result);
        res.status(200).send(result.data);
    } catch (err) {
        res.send(err);
    }
});

menusRouter.get("/img", async (req,res) => {
    try {
        const result = await axios.get(`${process.env.BUSAN_FOOD_API_URL}/food/img`, {
            params: {
                serviceKey: process.env.BUSAN_FOOD_API_KEY,
                pageNo: 1
            }
        });

        console.log(result.data);
        res.status(200).send(result.data);

    } catch (err) {
        res.send(err);
    }
})
export default menusRouter;
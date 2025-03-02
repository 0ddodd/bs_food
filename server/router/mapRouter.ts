import axios from 'axios';
import express, {Request, Response} from 'express';

const mapRouter = express.Router();

mapRouter.get('/:id', async (req:Request, res:Response) => {
    try {
        // const result = await axios.get()
        // console.log(result);
        res.status(200).send(req.params.id);
    } catch (err) {
        res.send(err);
    }
})

export default mapRouter;
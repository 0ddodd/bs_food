import express, {Request, Response} from 'express';

const mapRouter = express.Router();

mapRouter.get('/:id', async (req:Request, res:Response) => {
    try {
        console.log(req.params.id);
        res.status(200).send(req.params.id);
    } catch (err) {
        res.send(err);
    }
})

export default mapRouter;
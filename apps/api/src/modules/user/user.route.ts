import { Hono } from 'hono';

const userRouter = new Hono();
userRouter.get('/', (c) => c.json({ message: 'User route' }));
export default userRouter;

// server/src/index.ts (updated for Socket.io)
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import http from 'http';
import { Server, Socket } from 'socket.io';
import jwt from 'jsonwebtoken';
import userRoutes from './routes/userRoutes';
import adminRoutes from './routes/adminRoutes';
import { connectDB } from './db';
import Message from './models/Message';

dotenv.config();

const app: Express = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Vite client
    methods: ['GET', 'POST'],
  },
});

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server awakens, ready to serve.');
});

app.use('/api', userRoutes);
app.use('/api/admin', adminRoutes);

// Socket.io authentication and events
io.use((socket: Socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) return next(new Error('Authentication error'));
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret') as { userId: string; role: string };
    socket.data.user = decoded;
    next();
  } catch (err) {
    next(new Error('Invalid token'));
  }
});

io.on('connection', (socket: Socket) => {
  console.log(`User connected: ${socket.data.user.userId}`);

  // Join personal room for notifications
  socket.join(socket.data.user.userId);

  // Handle joining a chat room (1:1 with mentor/student)
  socket.on('joinChat', ({ otherUserId }: { otherUserId: string }) => {
    const roomId = [socket.data.user.userId, otherUserId].sort().join('-');
    socket.join(roomId);
    console.log(`User ${socket.data.user.userId} joined room ${roomId}`);
  });

  // Send message
  socket.on('sendMessage', async ({ receiverId, content, attachment }: { receiverId: string; content: string; attachment?: any }) => {
    const roomId = [socket.data.user.userId, receiverId].sort().join('-');
    try {
      const message = new Message({
        sender: socket.data.user.userId,
        receiver: receiverId,
        content,
        attachment, // Expand if uploading files
      });
      await message.save();

      // Emit to room
      io.to(roomId).emit('newMessage', message);

      // Optional: Notify receiver if offline
      io.to(receiverId).emit('notification', { type: 'newMessage', from: socket.data.user.userId });
    } catch (err) {
      console.error('Message save error:', err);
    }
  });

  // Mark as read
  socket.on('markRead', async ({ messageId }: { messageId: string }) => {
    await Message.findByIdAndUpdate(messageId, { read: true });
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.data.user.userId}`);
  });
});

connectDB().then(() => {
  server.listen(process.env.PORT || 5000, () => {
    console.log(`Server hums on port ${process.env.PORT || 5000}`);
  });
}).catch((err) => {
  console.error('Failed to connect to database:', err);
  process.exit(1);
});
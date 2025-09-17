"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// server/src/index.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const db_1 = require("./db");
const adminRoutes_1 = __importDefault(require("./routes/adminRoutes"));
dotenv_1.default.config();
console.log('hello');
const app = (0, express_1.default)();
const port = process.env.PORT || 5000;
app.use((0, cors_1.default)({ origin: 'http://localhost:5173' })); // Allow Vite client
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Server awakens, ready to serve.');
});
app.use('/api', userRoutes_1.default);
console.log("mounted api routes");
app.use('/api/admin', adminRoutes_1.default);
(0, db_1.connectDB)().then(() => {
    app.listen(port, () => {
        console.log(`Server hums on port ${port}`);
    });
});

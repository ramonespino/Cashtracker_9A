"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const colors_1 = __importDefault(require("colors"));
const morgan_1 = __importDefault(require("morgan"));
async function connectDB() {
    try {
        await db.authenticate();
        db.sync();
        console.log(colors_1.default.green.bold('Base de datos conectada'));
    }
    catch (error) {
        console.error('No se pudo conectar a la base de datos:', error);
    }
    const app = (0, express_1.default)();
    app.use((0, morgan_1.default)('dev'));
    app.use(express_1.default.json());
    export default app;
}
//# sourceMappingURL=server.js.map
import app from './app';
import { startConnection } from './db'

const PORT = process.env.PORT || 3000;
startConnection();
app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`);
});
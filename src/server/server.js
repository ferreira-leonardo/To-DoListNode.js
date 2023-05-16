const app = require('../../app');
require('dotenv').config()

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Servidor iniciado http://localhost:${PORT}`);
})
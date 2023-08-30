import express from "express";
import FileUpload from "express-fileupload";
import cors from "cors";
import cookieParser from "cookie-parser";
import pengumumanRoute from "./src/routes/pengumumanRoute.js";
import beritaRoute from "./src/routes/beritaRoute.js";
import galeriRoute from "./src/routes/galeriRoute.js";
import dokumenRoute from "./src/routes/dokumenRoute.js";
import bakorwilRoute from "./src/routes/bakorwilRoute.js";
import videoRoute from "./src/routes/videoRoute.js";
import ppidRoute from "./src/routes/ppidRoute.js";
import programRoute from "./src/routes/programRoute.js";
import sakibRoute from "./src/routes/sakibRoute.js";
import carrouselRoute from "./src/routes/carrouselRoute.js";
import fotoRoute from "./src/routes/fotoRoute.js";
import usersRoute from "./src/routes/usersRoute.js";
import pejabatRoute from "./src/routes/pejabatRoute.js";
import daftarInformasiRoute from "./src/routes/daftarInformasiRoute.js";

import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:5174", "http://localhost:5173"],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(FileUpload());
app.use(express.static("public"));

// PENGUMUMAN
app.use(pengumumanRoute);
// BERITA
app.use(beritaRoute);
// GALERI
app.use(galeriRoute);
// DOKUMEN
app.use(dokumenRoute);
// WILAYAH KERJA
// BAKORWIL
app.use(bakorwilRoute);
// VIDEO
app.use(videoRoute);
// PPID
app.use(ppidRoute);
// PROGRAM
app.use(programRoute);
// SAKIB
app.use(sakibRoute);
// CARROUSEL
app.use(carrouselRoute);
// FOTO
app.use(fotoRoute);
// PEJABAT
app.use(pejabatRoute);
// USERS
app.use(usersRoute);
// DAFTAR INFROMASI
app.use(daftarInformasiRoute);

app.listen(PORT, () =>
  console.log(`the server is running on port ${PORT}....`)
);

import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { Apartment } from "./entity/Apartment";
import cors from 'cors';

const app = express();
const port = 5000;
app.use(cors());

app.use(express.json());

createConnection().then(async connection => {
    console.log("Connected to MySQL");

    const apartmentRepository = connection.getRepository(Apartment);

    app.get("/apartments", async (req, res) => {
        const apartments = await apartmentRepository.find();
        res.json(apartments);
    });

    app.get("/apartments/:id", async (req, res) => {
        const apartment = await apartmentRepository.findOne(req.params.id);
        if (apartment) {
            res.json(apartment);
        } else {
            res.status(404).json({ message: "Apartment not found" });
        }
    });

    app.post("/apartments", async (req, res) => {
        const { name, location, price } = req.body;
        console.log("Request Body",req.body);
    
        if (!name || !location || !price) {
            return res.status(400).json({ message: "All fields are required" });
        }
    
        const newApartment = apartmentRepository.create({ name, location, price });
        const result = await apartmentRepository.save(newApartment);
    
        res.status(201).json(result);
    });

    app.listen(port, () => {
        console.log(`Backend server running on port ${port}`);
    });
}).catch(error => console.log(error));

import Task from "../models/Task";
import { Request, Response } from 'express'

export const getTasks = async (req: Request, res: Response) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    }
    catch(error) {
        return res.status(500).json({message: 'Server error'});
    }
}

export const createTask = async (req: Request, res: Response) => {
    try {
        const { title, description } = req.body;
        const newTask = new Task({ title, description });
        const savedTask = await newTask.save();
        res.json(savedTask);
    }
    catch(error) {
        return res.status(500).json({message: 'Server error'});
    }
}

export const getTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const task = await Task.findById(id);
        if(!task){
            return res.status(404).json({ message: `Tarea con el id ${id} no existe`})
        }
        res.json(task);
    }
    catch(error) {
        res.status(500).json({ message: 'Error al obtener la tarea'});
    }
}

export const updateTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndUpdate(id, req.body);
        res.json({
            message: 'Tarea actualizada'
        });
    }
    catch(error) {
        res.status(500).json({ message: 'Error al actualizatr tarea'});
    }
    
}

export const deleteTask = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.json({
            message: 'Tarea borrada correctamente'
        });
    }
    catch(error) {
        res.status(500).json({ message: 'Error al borrar la tarea'});
    }
}
import mongoose from 'mongoose';

import { IEstudiante } from '../interfaces/index';

const { Schema, Model } = mongoose;

// Esquema de Mongoose para el contratista
const EstudianteSchema: mongoose.Schema = new Schema<IEstudiante>(
    {
        usuario: {
            type: Schema.Types.ObjectId,
            require: true
        },
		correo: {
			type: String,
			require: true
		},
		estado: {
			type: Boolean,
			default: true
		}
    },
    { 
        versionKey: false
    }
)

// Exportar el modelo
const Estudiantes = mongoose.model<IEstudiante>('Estudiates', EstudianteSchema);

export { Estudiantes }
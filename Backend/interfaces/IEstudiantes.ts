import Schema from 'mongoose';

export interface IEstudiantes {
    usuario: Schema.Types.ObjectId,
    correo: String,
    estado: Boolean
}
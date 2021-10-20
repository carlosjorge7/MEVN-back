import { connect } from 'mongoose';

export const startConnection = async () => {
    try {
        const db = await connect('mongodb://localhost/mevn-stack');
        console.log(`Data base is connected to ${db.connection.name}`)
    }
    catch(err) {
        console.error(err)
    }
}
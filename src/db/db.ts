import mongoose from "mongoose";
const connection = async () => {
    try {
        await mongoose.connect("")
        console.log('mongodb is connected', mongoose.connection.host)
    } catch (error) {
        console.log(error)

    }
}

export default connection   
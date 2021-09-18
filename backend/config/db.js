import mongoose from 'mongoose'
import colors from 'colors'

colors.setTheme({
    connectedColor: ['gray', 'bgCyan'],
    errorColor: ['underline', 'red']
})

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected : ${conn.connection.host}`.connectedColor)
    } 
    catch(error) {
        console.log(`Error : ${error.message}`.errorColor)
        process.exit(1)
    }
}

export default connectDB
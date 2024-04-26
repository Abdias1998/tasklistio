import mongoose, { ConnectOptions } from 'mongoose';

let isConnected: boolean = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected');
        return;
    }

    try {
        await mongoose
            .connect(
                "mongodb+srv://lagraceparle98:jesustaime@cluster0.qiti5aj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
                    dbName: "tasks",
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                }  as ConnectOptions
            )

        isConnected = true;

        console.log('MongoDB connected')
    } catch (error) {
        console.log(error);
    }
}
const mongoose = require('mongoose');

const mongoURL = 'mongodb://nihar:nihar9654@ac-8lastqb-shard-00-00.biu0eid.mongodb.net:27017,ac-8lastqb-shard-00-01.biu0eid.mongodb.net:27017,ac-8lastqb-shard-00-02.biu0eid.mongodb.net:27017/?ssl=true&replicaSet=atlas-y4w6gm-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0';

const MongoDB = async () => {
    try {
        await mongoose.connect(mongoURL);
        console.log('Connected to MongoDB successfully');
        const fetched_data = await mongoose.connection.db.collection("food_items");
        //console.log("Data might fetched")
        fetched_data.find({}).toArray(function(err,data){
            //console.log("Init")
            if(err) console.log(err);
            else{
                console.log(data);
                console.log("EOF....");
            } 
        })
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = MongoDB;

const mongoose = require('mongoose');
const schema = mongoose.Schema;

// Define the Pet Schema
const PetSchema = new schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    justification: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    filename: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create the Pet model
const Pet = mongoose.model('Pet', PetSchema);

// Function to generate and save 20 pet records
const createPetRecords = async () => {
    try {
        const pets = [];
        for (let i = 1; i <= 10; i++) {
            pets.push({
                name: `Pet ${i}`,
                age: `${i} years`,
                area: `Area ${i}`,
                justification: `Justification for Pet ${i}`,
                email: `owner${i}@example.com`,
                phone: `123-456-78${i}`,
                type: i % 2 === 0 ? 'Dog' : 'Cat', // Alternate between Dog and Cat
                filename: `pet${i}.jpg`,
                status: 'Available'
            });
        }

        // Save all pet records to the database
        await Pet.insertMany(pets);
        console.log('20 pet records created successfully!');
    } catch (error) {
        console.error('Error creating pet records:', error);
    }
};

// Connect to MongoDB and create records
const run = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/pet', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
        await createPetRecords();
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        mongoose.connection.close();
    }
};

run();

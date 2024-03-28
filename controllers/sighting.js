// Import the sighting model
const sightingModel = require('../models/sighting');

// Helper Methods

// Create new sightings
exports.create = function (data) {

    let sighting = new sightingModel({

        date: data.date,
        location: data.location,
        address: data.address,
        altitude: data.altitude,
        status: data.status,

        plant: {
            name: data.plant.name,
            commonName: data.plant.commonName,
            scientificName: data.plant.scientificName,
            family: data.plant.family,
            genus: data.plant.genus,
            species: data.plant.species,
            description: data.plant.description,
            size: {
                length: data.plant.size.length,
                height: data.plant.size.height,
                width: data.plant.size.width
            },
            characteristics: {
                flowering: data.plant.characteristics.flowering,
                hasLeaves: data.plant.characteristics.hasLeaves,
                fruitBearing: data.plant.characteristics.fruitBearing,
                sunExposure: data.plant.characteristics.sunExposure,
                flowerColor: data.plant.characteristics.flowerColor
            },
            identificationLink: data.plant.identificationLink,
            photos: data.plant.photos
        },

        user: {
            id: data.user.id,
            name: data.user.name,
            contactDetails: {
                email: data.user.contactDetails.email,
                phoneNumber: data.user.contactDetails.phoneNumber
            }
        }
    });

    // Save the sighting to the database
    // Return success or failure
    return sighting.save().then(sighting => {
        console.log(sighting);

        // Return the sighting data as string
        JSON.stringify(sighting);
    }).catch(error => {
        console.log(error);

        return null;
    });
};

// Fetch all sightings
exports.getAll = function () {
    return sightingModel.find({}).then(sightings => {

        return JSON.stringify(sightings);
    }).catch(error => {
        console.log(error);

        return null;
    });
};
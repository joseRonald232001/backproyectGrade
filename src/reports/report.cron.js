const cron = require('node-cron');
const DailyReport = require('../models/reports.model');
const Actuator = require('../models/actuator.model');

// Programa una tarea para ejecutarse todos los días a la medianoche
cron.schedule('0 0 * * *', async () => {
    try {
        // Verifica si ya existe un informe para el día de hoy
        const today = new Date();
        const todayStart = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const todayEnd = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);

        const existingReport = await DailyReport.findOne({
            where: {
                createdAt: {
                    $gte: todayStart,
                    $lt: todayEnd
                }
            }
        });

        // Si no existe un informe para hoy, crea uno
        if (!existingReport) {
            const actuators = await Actuator.findAll();

            // Obtén los datos necesarios para el informe
            const reportData = {
                // Aquí deberías calcular los valores para el informe, por ejemplo:
                maxTemperature: calculateMaxTemperature(actuators),
                minTemperature: calculateMinTemperature(actuators),
                // ...
                userId: userId // Asigna el ID del usuario al que pertenece el informe
            };

            // Crea el informe diario
            const newReport = await DailyReport.create(reportData);
            console.log('Nuevo informe diario creado:', newReport);
        } else {
            console.log('Ya existe un informe para hoy:', existingReport);
        }
    } catch (error) {
        console.error('Error al crear el informe diario:', error);
    }
});

// Función para calcular la temperatura máxima de los actuadores
function calculateMaxTemperature(actuators) {
    // Implementa tu lógica para calcular la temperatura máxima aquí
}

// Función para calcular la temperatura mínima de los actuadores
function calculateMinTemperature(actuators) {
    // Implementa tu lógica para calcular la temperatura mínima aquí
}

// Agrega otras funciones para calcular los datos necesarios para el informe diario según sea necesario

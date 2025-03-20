const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// Use reduce() to sum up all the batteries
const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch, 0);

// Export totalBatteries for testing
module.exports = { totalBatteries };

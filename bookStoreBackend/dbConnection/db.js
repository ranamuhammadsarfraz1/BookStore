const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://dbMernAssignment:BRh4UjujHIyrmKjr@cluster0.k0gpk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        tlsAllowInvalidCertificates: true,
        tlsAllowInvalidHostnames: true,
      }
    );
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;

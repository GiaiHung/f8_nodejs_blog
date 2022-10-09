module.exports = {
  mongooseArrayToObject: function (mongooses) {
    return mongooses.map((mongoose) => mongoose.toObject())
  },
  mongooseObject: function (mongoose) {
    return mongose ? mongoose.toObject() : mongoose
  },
}

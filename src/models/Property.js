// src/models/Property.js
import mongoose from 'mongoose';

const PropertySchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: Number,
  address: String,
  beds: Number,
  baths: Number,
  size: String,
  image: String,
  isPopular: Boolean
});

export default mongoose.models.Property || mongoose.model('Property', PropertySchema);

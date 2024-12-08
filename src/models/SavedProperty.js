// src/models/SavedProperty.js
import mongoose from 'mongoose';

const SavedPropertySchema = new mongoose.Schema({
  userId: { 
    type: String,
    required: true,
    index: true
  },
  propertyId: { 
    type: Number,
    required: true,
    index: true
  },
  savedAt: { 
    type: Date, 
    default: Date.now 
  }
});

// Create a compound index for userId and propertyId
SavedPropertySchema.index({ userId: 1, propertyId: 1 }, { unique: true });

export default mongoose.models.SavedProperty || mongoose.model('SavedProperty', SavedPropertySchema);

const mongoose = require("mongoose");



const ProjectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    industry: { type: String, required: true },
    duration: { type: String, required: true },
    client: { type: String, required: true },
    year: { type: String, required: true },
    solution: { type: String, required: true },
    results: [{ type: String, required: true }],
    
    testimonial: {
      content: { type: String },
      author: { type: String },
      position: { type: String }
    },
    
  }, { timestamps: true });

const ProjectModel = mongoose.models.casestudies || mongoose.model("casestudies", ProjectSchema);
export default ProjectModel;
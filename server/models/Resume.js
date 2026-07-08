import mongoose from 'mongoose';

const resumeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    default: 'Untitled Resume'
  },
  personal_info: {
    type: Object,
    default: {
      firstName: '',
      lastName: '',
      rollNo: '',
      program: '',
      course: '',
      email: '',
      phone: '',
      github: '',
      linkedin: '',
      image: null
    }
  },
  professional_summary: { type: String, default: "" },
  education: { type: Array, default: [] },
  experience: { type: Array, default: [] },
  project: { type: Array, default: [] },
  skills: {
    type: Object,
    default: {
      languages: '',
      developer_tools: '',
      frameworks: '',
      cloud_databases: '',
      soft_skills: '',
      coursework: '',
      areas_of_interest: ''
    }
  },
  positions: [{
    id: String,
    position: String,
    club: String,
    tenure: String
  }],
  achievements: [{
    id: String,
    description: String,
    date: String
  }],
  template: {
    type: String,
    default: 'classic'
  },
  accent_color: {
    type: String,
    default: '#3B82F6'
  },
  public: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

export default mongoose.model('Resume', resumeSchema);

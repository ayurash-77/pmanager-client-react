import axios from 'axios';

export const fetchJobs = async () => axios.get('/api/jobs');

export const fetchRoles = async () => axios.get('/api/roles');

export const fetchProjectList = async () => axios.get('/api/projects');
export const fetchProjectDetails = async id => axios.get(`/api/projects/${id}`);
export const createProject = async project => axios.post('/api/projects', project);
export const deleteProject = async id => axios.delete(`/api/projects/${id}`);

import { TeamService } from './team.service.js';

let tbody = document.querySelector('#listTeam');
const Team = new TeamService();
Team.getAll(tbody);
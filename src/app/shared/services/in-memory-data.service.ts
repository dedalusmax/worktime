import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const workDays = [
      {id: 1, userId: 1, date: new Date('01-22-2018'), startTime: "08:00", endTime: "16:00", projectId: 1},
      {id: 2, userId: 1, date: new Date('01-23-2018'), startTime: "08:00", endTime: "11:00", projectId: 1},
      {id: 3, userId: 1, date: new Date('01-23-2018'), startTime: "11:00", endTime: "16:00", projectId: 2},
      {id: 4, userId: 1, date: new Date('01-24-2018'), startTime: "08:00", endTime: "16:00", projectId: 1},
      {id: 5, userId: 1, date: new Date('01-25-2018'), startTime: "08:00", endTime: "16:00", projectId: 2},
      {id: 6, userId: 1, date: new Date('01-26-2018'), startTime: "08:00", endTime: "16:00", projectId: 3},
      {id: 7, userId: 1, date: new Date('01-27-2018'), startTime: "07:00", endTime: "10:00", projectId: 3},
      {id: 8, userId: 1, date: new Date('01-27-2018'), startTime: "10:00", endTime: "15:00", projectId: 3},
    ];
    const projects = [
      {id: 1, name: "Projekt1"},
      {id: 2, name: "Projekt2"},
      {id: 3, name: "Projekt3"}
    ];
    return { projects , workDays};
  }
}
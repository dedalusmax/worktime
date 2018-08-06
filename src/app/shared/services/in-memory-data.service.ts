import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const workDays = [
      {id: 1, userId: 1, date: new Date(2018, 1, 22), startTime: "08:00", endTime: "16:00", projectId: 1},
      {id: 2, userId: 1, date: new Date(2018, 1, 23), startTime: "08:00", endTime: "11:00", projectId: 1},
      {id: 3, userId: 1, date: new Date(2018, 1, 23), startTime: "11:00", endTime: "16:00", projectId: 2},
      {id: 4, userId: 1, date: new Date(2018, 1, 24), startTime: "08:00", endTime: "16:00", projectId: 1},
      {id: 5, userId: 1, date: new Date(2018, 1, 25), startTime: "08:00", endTime: "16:00", projectId: 2},
      {id: 6, userId: 1, date: new Date(2018, 1, 26), startTime: "08:00", endTime: "16:00", projectId: 3},
      {id: 7, userId: 1, date: new Date(2018, 1, 27), startTime: "07:00", endTime: "10:00", projectId: 3},
      {id: 8, userId: 1, date: new Date(2018, 1, 27), startTime: "10:00", endTime: "15:00", projectId: 3}
    ];

    const workRecords = [
      {recordId: 1, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", projectId: 1, workDate: new Date(2018, 1, 22), hours: 8, comment: "", fieldWork: false, businessTrip: false},
      {recordId: 2, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", projectId: 1, workDate: new Date(2018, 1, 23), hours: 3, comment: "", fieldWork: false, businessTrip: false},
      {recordId: 3, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", projectId: 2, workDate: new Date(2018, 1, 23), hours: 5, comment: "", fieldWork: false, businessTrip: false},
      {recordId: 4, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", projectId: 1, workDate: new Date(2018, 1, 24), hours: 8, comment: "", fieldWork: false, businessTrip: false},
      {recordId: 5, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", projectId: 2, workDate: new Date(2018, 1, 25), hours: 8, comment: "", fieldWork: false, businessTrip: false},
      {recordId: 6, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", projectId: 3, workDate: new Date(2018, 1, 26), hours: 8, comment: "", fieldWork: false, businessTrip: false},
      {recordId: 7, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", projectId: 3, workDate: new Date(2018, 1, 27), hours: 3, comment: "", fieldWork: false, businessTrip: false},
      {recordId: 8, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", projectId: 3, workDate: new Date(2018, 1, 27), hours: 5, comment: "", fieldWork: false, businessTrip: false}
    ];
    
    const workTimes = [
      {id: 1, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", workDate: new Date(2018, 1, 22), startTime: new Date(2018, 1, 22, 8), endTime: new Date(2018, 1, 22, 16)},
      {id: 2, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", workDate: new Date(2018, 1, 23), startTime: new Date(2018, 1, 22, 8), endTime: new Date(2018, 1, 22, 16)},
      {id: 3, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", workDate: new Date(2018, 1, 24), startTime: new Date(2018, 1, 22, 8), endTime: new Date(2018, 1, 22, 16)},
      {id: 4, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", workDate: new Date(2018, 1, 25), startTime: new Date(2018, 1, 22, 8), endTime: new Date(2018, 1, 22, 16)},
      {id: 5, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", workDate: new Date(2018, 1, 26), startTime: new Date(2018, 1, 22, 8), endTime: new Date(2018, 1, 22, 16)},
      {id: 6, userId: "7d63e0fb-e979-496b-b0c5-4c0035dcdfdb", workDate: new Date(2018, 1, 27), startTime: new Date(2018, 1, 22, 7), endTime: new Date(2018, 1, 22, 15)}
    ]
    return { workDays, workRecords, workTimes};
  }
}
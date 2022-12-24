import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let studentsDetails = [
      {
        id: 1,
        firstName: 'Salman',
        lastName: 'Ahmed',
        email: 'salman763277@gmail.com',
        dateOfBirth: '1992-05-01',
      },
      {
        id: 2,
        firstName: 'Aslam',
        lastName: 'Cheema',
        email: 'aslam763277@gmail.com',
        dateOfBirth: '1992-05-01',
      },
      {
        id: 3,
        firstName: 'Nazir',
        lastName: 'Alaa',
        email: 'nazir763277@gmail.com',
        dateOfBirth: '1992-05-01',
      },
      {
        id: 4,
        firstName: 'Fawad',
        lastName: 'Alam',
        email: 'fawad763277@gmail.com',
        dateOfBirth: '1992-05-01',
      },
      {
        id: 5,
        firstName: 'Alexa',
        lastName: 'Shif',
        email: 'alexa763277@gmail.com',
        dateOfBirth: '1992-05-01',
      },
      {
        id: 6,
        firstName: 'Tom',
        lastName: 'Cruise',
        email: 'tom763277@gmail.com',
        dateOfBirth: '1992-05-01',
      },
    ];
    return { studentsData: studentsDetails };
  }
}

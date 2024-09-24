import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { InjectionToken } from '@angular/core';
import { baseUrl } from '../app.module';
import { Todo } from './todo.interface';
import { HttpErrorResponse } from '@angular/common/http';

// const baseUrl = new InjectionToken<string>('');
const errorEvent = new ErrorEvent('API error');
const serverresponse: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: 'delectus aut autem',
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: 'fugiat veniam minus',
    completed: false,
  },
];

describe('TodoService', () => {
  let service: TodoService;
  let httpMock: HttpTestingController;
  let url: string;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: baseUrl,
          useValue: 'https://jsonplaceholder.typicode.com',
        },
      ],
    });
    service = TestBed.inject(TodoService);
    httpMock = TestBed.inject(HttpTestingController);
    url = [TestBed.inject(baseUrl), service['todoPath']].join('/');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getTodos', () => {
    it('should send a get request', () => {
      let result: any;

      service.getTodos().subscribe((data) => {
        result = data;
      });
      const req = httpMock.expectOne(url);
      req.flush(serverresponse);

      expect(req.request.method).toEqual('GET');
      expect(result).toEqual(serverresponse);
    });

    it('should catch error', () => {
      const status = 500;
      const statusText = 'Server error';

      let actualError: HttpErrorResponse | undefined;

      service.getTodos().subscribe(
        fail,
        (error: HttpErrorResponse) => {
          actualError = error;
        },
        fail
      );

      const request = httpMock.expectOne({ method: 'GET', url: url });
      request.error(errorEvent, { status, statusText });
      httpMock.verify();

      if (!actualError) {
        throw new Error('actualError not defined');
      }
      expect(actualError.error).toEqual(errorEvent);
      expect(actualError.status).toBe(status);
      expect(actualError.statusText).toBe(statusText);
    });
  });
});

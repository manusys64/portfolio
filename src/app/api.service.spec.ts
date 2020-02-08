import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from '../environments/environment';
import { About, Skill, Work } from './models/index';

const url = environment.apiUrl;

describe('ApiService', () => {
  let service: ApiService;
	let httpMock: HttpTestingController;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [ApiService]
		});
		service = TestBed.get(ApiService);
		httpMock = TestBed.get(HttpTestingController);
	});

	afterEach(() => {
  	httpMock.verify();
	});

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

	it('should return about data', () => {
		let dummyAbout: About = {selection: 'about', content: 'loremipsum'};
		service.aboutData().subscribe(data => {
			expect(data.length).toBe(1);
			expect(data).toEqual(dummyAbout);
		});
		const req = httpMock.expectOne(url + 'infos/about');
		expect(req.request.method).toBe('GET');
		req.flush(dummyAbout);
	});

  it('should not return about data', () => {
    let dummyAbout: About = {selection: 'skill', content: 'loremipsum'};
		service.aboutData().subscribe(data => {
			expect(data.length).toBe(0);
			expect(data).not.toEqual(dummyAbout);
		});
		const req = httpMock.expectOne(url + 'infos/about');
		expect(req.request.method).toBe('GET');
		req.flush(dummyAbout);
  });

  it('should return skills Icon', () => {
		let dummySkill: Skill[] = [
      {name: "ubuntu", section: "backend", url: "example.com"},
      {name: "html", section: "frontend", url: "html.com",}
    ];
		service.skillsIcons().subscribe(data => {
			expect(data.length).toBe(2);
			expect(data).toEqual(dummySkill);
		});
		const req = httpMock.expectOne(url + 'infos/skills');
		expect(req.request.method).toBe('GET');
		req.flush(dummySkill);
	});

  it('should return work list data', () => {
    let dummyWork: Work[] = [
      {selection: "work", title: "Cool Web", img: "image.jpg",
       url: "example.com", description: "Loremipsum ipsum",
       keywords: ["Django", "Angular"]},
      {selection: "project", title: "Dapp Web", img: "dapp.jpg",
       url: "example.com", description: "Loremipsum ipsum",
       keywords: ["Solidity", "Truffle.js"]},
    ];
		service.workList().subscribe(data => {
			expect(data.length).toBe(2);
			expect(data).toEqual(dummyWork);
		});
		const req = httpMock.expectOne(url + 'infos/work');
		expect(req.request.method).toBe('GET');
		req.flush(dummyWork);
	});
});

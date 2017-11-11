import { Injectable } from '@angular/core';

@Injectable()
export class ApplicationService {

  constructor() { }

  private applications: Application[] = [
    new Application
    ('Med', 'Medtrics', '56820f90-6c05-11e7-92a6-dbf9284aaa70', '1psBIN3wB51gnopCPkfQE8ebWna5tAOsaMpQzUK', 'Chromosome API', '2017-10-16'),
    new Application
    ('Denoise', 'Medtrics', '3121gs4-6c05-11e7-92a6-dbf9284aaa70', 'asd2jk1dB51gnopCPkfQE8ebWna5tAOsaMpQzUK', 'Denoise API', '2017-11-05')
  ];

  getApplications(): Application[] {
    return this.applications;
  }

  getApplication(appId: string): Application {
    return this.applications.find(applicaiton => applicaiton.appId === appId);
  }

}

export class Application {
  constructor(
    public appName: string,
    public companyName: string,
    public appId: string,
    public appSecret: string,
    public desc: string,
    public createDate: string
  ) {

  }
}

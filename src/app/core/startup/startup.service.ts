import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class StartupService {
  constructor() {
  }

  load(): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('项目启动前初始化工作');
      return resolve();
    });
  }
}
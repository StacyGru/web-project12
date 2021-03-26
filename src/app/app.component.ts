import { Component } from '@angular/core';
import { MyWorker, MyWorkerDataBase, MyWorkerType } from './shared/worker.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Список сотрудников';
  workers: MyWorker[] = MyWorkerDataBase;
  MyWorkerType = MyWorkerType;

  getByType(type: number)
  {
    return this.workers.filter(worker => worker.type === type)
  }

  onDeleteWorker(id: number)
  {
    let index = this.workers.findIndex(worker => worker.id === id);
    if(index !== -1)
    {
      this.workers.splice(index, 1);
    }
  }
}

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
  edit = false;
  workerData =
  {
    id: this.workers[0].id,
    name: this.workers[0].name,
    surname: this.workers[0].surname,
    type: this.workers[0].type
  };

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

  onAddWorker(worker: MyWorker)
  {
    let id = this.workers.length > 0
      ? this.workers[this.workers.length - 1].id + 1
      : 1;
    worker.id = id;
    if (worker.name != undefined && worker.surname != undefined)
    {
      this.workers.push(worker);
    }
    else
    {
      alert('Поля "Имя" и "Фамилия" не должны быть пусты!');
    }
  }

  onEditById(id: number)  // привязано к таблицам
  {
    let index = this.workers.findIndex((worker) => worker.id === id);
    this.workerData = 
    { // посылает данные в форму редактирования
      id: this.workers[index].id,
      name: this.workers[index].name,
      surname: this.workers[index].surname,
      type: this.workers[index].type
    }
    this.edit = true;
    
  }

  onEditWorker(worker: MyWorker) {
    this.edit = false;
    let index = this.workers.findIndex((w) => w.id === worker.id);
    
    if (worker.name != undefined && worker.surname != undefined)
    {
      this.workers.splice(index, 1);
      this.workers.push(worker);
    }
    else
    {
      alert('Поля "Имя" и "Фамилия" не должны быть пусты!');
    }
  }

  onCancelEdit()
  {
    this.edit = false;
  }
}
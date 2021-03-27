import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-addform-worker',
  templateUrl: './addform-worker.component.html',
  styleUrls: ['./addform-worker.component.css']
})
export class AddformWorkerComponent implements OnInit {

  id: number;
  name: string;
  surname: string;
  type = 0;
  MyWorkerType = MyWorkerType;

  @Output() addWorker = new EventEmitter<MyWorker>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddWorker()
  {
    if (this.name !== '' && this.surname !== '')
    {
      this.addWorker.emit({
        name: this.name,
        surname: this.surname,
        type: this.type,
      });
    }
    else
    {
      alert('Поля "Имя" и "Фамилия" не должны быть пусты!');
    }
  }
}

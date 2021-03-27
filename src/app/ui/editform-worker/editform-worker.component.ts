import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyWorker, MyWorkerType } from 'src/app/shared/worker.model';

@Component({
  selector: 'app-editform-worker',
  templateUrl: './editform-worker.component.html',
  styleUrls: ['./editform-worker.component.css']
})
export class EditformWorkerComponent implements OnInit {

  id: number;
  name: string;
  surname: string;
  type = 0;
  MyWorkerType = MyWorkerType;

  @Output() editWorker = new EventEmitter<MyWorker>();
  @Output() cancelEdit = new EventEmitter();
  @Input() workerData: object;

  constructor() { }

  ngOnInit(): void
  {
    this.id = this.workerData["id"];
    this.name = this.workerData["name"];
    this.surname = this.workerData["surname"];
    this.type = this.workerData["type"];
  }

  onEditWorker() // привязано к форме редактирования
  {
    if (this.name !== '' && this.surname !== '')
    {
      this.editWorker.emit({
        id: this.id,
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

  closeEdit()
  {
    this.cancelEdit.emit();
  }
}

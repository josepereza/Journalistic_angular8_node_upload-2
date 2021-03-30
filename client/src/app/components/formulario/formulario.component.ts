import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TasksService } from 'src/app/tasks/tasks.service';
import { Task } from '../../tasks/task'


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  tasks: Task[]
  editTask: Task
  imageFile: File
  imageForm = new FormGroup({
    name: new FormControl(''),
    descripcion: new FormControl(''),
  });
  constructor(private taskService:TasksService) { }

  ngOnInit() {
  }

  onFileSelect(event) {
    console.log(event.target.files.length)
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageFile = file
    }
  }

  add()  {
    // const formData = new FormData();
    // formData.append('file', this.uploadForm.get('profile').value);
   
    console.log(this.imageFile.name)
    console.log(this.imageForm.value)

     let formData = new FormData();
     formData.append('taskName', this.imageForm.get('name').value);
     formData.append('taskDesc', this.imageForm.get('descripcion').value);
     formData.append('image',this.imageFile);

    // let inputEl: HTMLInputElement = this.el.nativeElement.querySelector('#image');
    // image = inputEl.files.item(0)
    
    this.taskService.addTask(formData).subscribe(task => {
      // this.tasks.push(task)
      console.log(task)
    })
  }
}
  

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/models/task/task.model';

@Component({
  selector: 'app-todos-detail-page',
  templateUrl: './todos-detail-page.component.html',
  styleUrls: ['./todos-detail-page.component.scss'],
})
export class TodosDetailPageComponent implements OnInit {
  detailsForm: FormGroup = new FormGroup({});

  task: any = {};

  constructor(private router: Router, private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.task = history.state.data;
    // this.activatedRoute.params.subscribe((params) => {
    //   if (params.id) {
    //     this.idContact = params.id;
    //   } else {
    //     alert('No Contact found');
    //     this.returnBack();
    //   }
    // });

    this.detailsForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      responsable: ['', Validators.required],
      initialDate: ['', Validators.required],
      finalDate: ['', Validators.required],
    });
  }
  submitDetailsForm() {
    // console.log(this.task);
    this.router.navigate([`/todos`], {
      state: {
        data: this.task,
      },
    });
  }

  returnBack() {
    this.router.navigate(['/todos']);
  }
}

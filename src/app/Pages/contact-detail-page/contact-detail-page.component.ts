import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss'],
})
export class ContactDetailPageComponent implements OnInit {
  idContact: string = '';
  contact: any = {};
  displayedImage: string | null = '';

  detailsForm: FormGroup = new FormGroup({});

  fileName = '';
  selectedFiles!: FileList;
  stringFile: any = '';
  imagenPrevisualizacion: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.contact = history.state.data;
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.idContact = params.id;
        console.log(this.contact);
        this.displayedImage = this.contact.avatar;
      } else {
        alert('No Contact found');
        this.returnBack();
      }
    });

    this.detailsForm = this.formBuilder.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      avatar: ['', Validators.required],
    });
  }

  selectFiles(event: any) {
    event.preventDefault();
    event.target.files.length == 1
      ? (this.fileName = event.target.files[0].name)
      : (this.fileName = event.target.files.length + ' archivos');
    this.selectedFiles = event.target.files;
    this.stringFile = this.selectedFiles[0];
    console.log(this.stringFile);

    const objectURL = URL.createObjectURL(this.stringFile);
    this.imagenPrevisualizacion = document.querySelector(
      '#imagenPrevisualizacion'
    );
    this.imagenPrevisualizacion.src = objectURL;
    this.displayedImage = null;
  }

  submitDetailsForm() {
    this.contactService.updateContact(this.contact).subscribe((response) => {
      console.log(response);

      this.router.navigate(['/contacts']);
    });
  }

  returnBack() {
    this.router.navigate(['/contacts']);
  }
}

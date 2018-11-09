import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { EquipmentService } from '../services/equipment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-frm-add-mobil-equipment',
  templateUrl: './frm-add-mobil-equipment.component.html',
  styleUrls: ['./frm-add-mobil-equipment.component.scss'],
})
export class FrmAddMobilEquipmentComponent implements OnInit {
  isNewEquipment = true;
  mobilForm = this.fb.group({
    Code: [null, Validators.required],
    Email: [null, Validators.required],
    Name: [null, Validators.required],
    LastName: [null, Validators.required],
    Address: [null],
    IMEI: [null, Validators.required],
    Model: [null, Validators.required],
    Brand: [null, Validators.required],
    NumberPhone: [null, Validators.required],
    Network: [null, Validators.required],
    Chip: [null, Validators.required],
    Cost: [null, Validators.required],
    id: new FormControl(),
  });

  line = [{company: 'Telcel'}, {company: 'Telcel'}, {company: 'Telcel'}] ;

  constructor(private fb: FormBuilder, private equipmentService: EquipmentService, private router: Router) {}
  ngOnInit(): void {
    const equipmentToUpdate = JSON.parse(localStorage.getItem('equipment'));
    console.log(equipmentToUpdate);
    if (equipmentToUpdate !== null) {
      this.isNewEquipment = false;
      this.mobilForm.setValue(equipmentToUpdate);
      localStorage.clear();
    }
  }

  onSubmit() {
    console.log(this.mobilForm.value);
    if (this.isNewEquipment) {
      this.equipmentService
        .addEquipment(this.mobilForm.value)
        .subscribe(
          response => {
            console.log('OK: ', response);
            this.mobilForm.reset();
            alert('Se dio de alta a tu nuevo amigo');
            this.router.navigate(['/equiposAsignados']);
          },
          error => {
            console.log('ERROR: ', error);
          }
        );
    } else {
      this.equipmentService
        .updateEquipment(this.mobilForm.value)
        .subscribe(
          response => {
            console.log('OK: ', response);
            this.mobilForm.reset();
            this.router.navigate(['/equiposAsignados']);
          },
          error => {
            console.log('ERROR: ', error);
          }
        );
    }
  }

}

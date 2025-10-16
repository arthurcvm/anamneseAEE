import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import { saveAs } from 'file-saver';
import { MatButton } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { FloatLabelType, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDivider } from '@angular/material/divider';

function loadFile(url: string, callback: any) {
  PizZipUtils.getBinaryContent(url, callback);
}

@Component({
  selector: 'app-docxgenerator',
  imports: [MatButton, 
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDatepickerModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatDivider],
    providers: [provideNativeDateAdapter()],
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './docxgenerator.html',
  styleUrl: './docxgenerator.scss'
})
export class Docxgenerator implements OnInit {

  anamneseForm!: FormGroup;

  escolas = ['CEI JOSÉ CARNEIRO DO NASCIMENTO'];
  profsAee = ['MONIZIA ELÉN DA SILVA OLIVEIRA'];
  periodos = ['2025', '2026'];
  necessidades = ['Auditiva', 'Comunicação', 'Visual', 'Locomoção', 'Cognitivo'];

  constructor(
    private fb : FormBuilder,
  ){}

  ngOnInit(): void {
    this.montarFormulario();
  }

  montarFormulario(){
    this.anamneseForm = this.fb.group({
      escola: ['', Validators.required],
      nmAluno: ['', Validators.required],
      dtNascimento: ['', Validators.required],
      nmProfessorSala: ['', Validators.required],
      nmProfessorAee: ['', Validators.required],
      periodo: ['', Validators.required],
      endereco: ['', Validators.required],
      bairro: ['', Validators.required],
      telefone: ['', Validators.required],
      nmPai: ['', Validators.required],
      nmMae: ['', Validators.required],
      temIrmaos: [false],
      necessitamAtenEsp: [false],
      pessoasQueMoram: ['', Validators.required],
      temDiagClinic: [false, Validators.required],
      temRelatoPedag: [false, Validators.required],
      diagnostico: ['', Validators.required],
      atendClinExt: ['', Validators.required],
      temConvul: [false, Validators.required],
      fazUsoMed: [false, Validators.required],
      medicacao: ['', Validators.required],
      temConvMed: [false, Validators.required],
      convenioMed: ['', Validators.required],
      temCartTransp: [false, Validators.required],
      vaiRegMedico: [false, Validators.required],
      vacinaEmDias: [false, Validators.required],
      cartaoSus: ['', Validators.required],
      teveDoenContagi: [false, Validators.required],
      doencaContagi: ['', Validators.required],
      temNecessidades: ['', Validators.required],
      servicosQueFreque: ['', Validators.required],
      profissReferen: ['', Validators.required],

    })
  }


  onSubmit() {
    console.log(this.anamneseForm.value);
    // loadFile(
    //   'https://docxtemplater.com/tag-example.docx',
    //   function (error: Error | null, content: string) {
    //     if (error) {
    //       throw error;
    //     }
    //     const zip = new PizZip(content);
    //     const doc = new Docxtemplater(zip, {
    //       paragraphLoop: true,
    //       linebreaks: true,
    //     });
    //     doc.render({
    //       first_name: 'John',
    //       last_name: 'Doe',
    //       phone: '0652455478',
    //       description: 'New Website',
    //     });
    //     const out = doc.getZip().generate({
    //       type: 'blob',
    //       mimeType:
    //         'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    //     });
    //     // Output the document using Data-URI
    //     saveAs(out, 'output.docx');
    //   }
    // );
  }
}

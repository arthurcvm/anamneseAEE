import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import Docxtemplater from 'docxtemplater';
import PizZip from 'pizzip';
import PizZipUtils from 'pizzip/utils/index.js';
import expressionParser from 'docxtemplater/expressions.js';
import { saveAs } from 'file-saver';
import { MatButton } from '@angular/material/button';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
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
  tiposParto = ['Normal', 'Cesariana'];
  gruposBrincadeira = ['Mesmo sexo', 'Sexo oposto', 'Criança da mesma idade', 'Criança mais nova', 'Criança mais velha'];
  distracoes = ['Televisão', 'Música', 'Leitura', 'Coleção', 'Computador', 'Outros'];
  atitudesSociais = ['Obediente', 'Independente', 'Comunicativo', 'Agressivo', 'Cooperador'];
  atitudesEmocionais = ['Tranquilo', 'Seguro', 'Ansioso', 'Alegre', 'Emotivo', 'Queixoso'];
  tiposSono = ['Insônia', 'Pesadelos', 'Hipersonia (sonolência excessiva ou moleza)', 'Dorme sozinho', 'Dorme no quarto do Pais', 'Divide o quarto com alguém']

  constructor(
    private fb : FormBuilder,
  ){}

  ngOnInit(): void {
    this.montarFormulario();
  }

  montarFormulario(){
    this.anamneseForm = this.fb.group({
      escola: ['', Validators.required],
      ra: ['', Validators.required],
      anoNivel: ['', Validators.required],
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


      localNascimento: ['', Validators.required],
      maternidade: ['', Validators.required],
      tipoParto: ['', Validators.required],
      duracaoGest: ['', Validators.required],
      motvPremat: ['', Validators.required],
      fezPrenatal: [false, Validators.required],
      tempoPrenatal: ['', Validators.required],
      examesGravide: ['', Validators.required],
      teveDoencaMedicamGesta: [false, Validators.required],
      doencaMedicamGesta: ['', Validators.required],

      chorou: [false, Validators.required],
      ficouRoxo: [false, Validators.required],
      preciOxig: [false, Validators.required],
      preciIncu: [false, Validators.required],
      apresIctericia: [false, Validators.required],

      foiAmamentado: [false, Validators.required],
      tempoAmamentado: ['', Validators.required],
      usouMamadeira: [false, Validators.required],
      tempoMamadeira: ['', Validators.required],

      engatinhou: [false, Validators.required],
      quandoEngatinhou: ['', Validators.required],
      sentou: [false, Validators.required],
      quandoSentou: ['', Validators.required],

      andou: [false, Validators.required],
      quandoAndou: ['', Validators.required],
      precisouFisio: [false, Validators.required],
      motivoPrecisouFisio: ['', Validators.required],

      possuiControlEsfinct: [false, Validators.required],
      quandoAdquiriuControlEsfinct: ['', Validators.required],

      quandoFalouPrimei: ['', Validators.required],
      qualTpComunic: ['', Validators.required],


      temDisturbComunic: [false, Validators.required],
      qualDisturbComunic: ['', Validators.required],

      eContente: [false, Validators.required],
      fazAmizFacil: [false, Validators.required],
      choraFacil: [false, Validators.required],
      reclamaMuito: [false, Validators.required],

      resolveSozinhoProb: [false, Validators.required],
      obsResolveSozinhoProb: ['', Validators.required],

      eAgressivo: [false, Validators.required],
      obsEAgressivo: ['', Validators.required],
      eCooperador: [false, Validators.required],

      eIndependente: [false, Validators.required],
      obsEIndependente: ['', Validators.required],

      ajustaFacilNovSit: [false, Validators.required],
      obsAjustaFacilNovSit: ['', Validators.required],


      temConcentNecess: [false, Validators.required],
      eInquieto: [false, Validators.required],
      partcipNormalGrupo: [false, Validators.required],
      sabeEsperarVez: [false, Validators.required],
      obedeceOrdensPrimeira: [false, Validators.required],
      obsObedeceOrdensPrimeira: ['', Validators.required],


      eOrganizado: [false, Validators.required],
      conversaSobreSi: [false, Validators.required],
      apresentaTensaoAnsiedade: [false, Validators.required],
      temMania: [false, Validators.required],
      qualMania: ['', Validators.required],

      amarraCadarcoSo: [false, Validators.required],
      necessVariasBanheiro: [false, Validators.required],
      reconheDificulda: [false, Validators.required],
      usaBanheiroSo: [false, Validators.required],
      alimentaSo: [false, Validators.required],

      freqEscola: [false, Validators.required],
      qualEscola: ['', Validators.required],

      fazAmigosFac: [false, Validators.required],
      adaptaFacMeio: [false, Validators.required],
      companheBrinca: ['', Validators.required],

      grupsBrinca: ['', Validators.required],
      distPref: ['', Validators.required],
      outrDistPref: [''],
      
      atitudSociPred: ['', Validators.required],
      atitudEmociPred: ['', Validators.required],
      sono: ['', Validators.required],
      medidDiscipl: ['', Validators.required],
      reacaoContrariado: ['', Validators.required],
      observacoesRelevantes: ['']
    })
  }


  onSubmit() {
    console.log(this.anamneseForm.value);
    
    const parser = expressionParser.configure({});
    const formValues = this.anamneseForm.value;


    loadFile(
      'moldeanamnese.docx',
      function (error: Error | null, content: string) {
        if (error) {
          throw error;
        }
        const zip = new PizZip(content);
        const doc = new Docxtemplater(zip, {
          parser,
          paragraphLoop: true,
          linebreaks: true,
        });

        const formatedDate = formValues['dtNascimento'].toLocaleDateString('pt-BR');
        
        doc.render({
          ...formValues,
          dtNascimento: formatedDate
        });
        const out = doc.getZip().generate({
          type: 'blob',
          mimeType:
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        });
        // Output the document using Data-URI
        const titulo: String = formValues['nmAluno'].replace(/\s/g, "").toLowerCase();
        saveAs(out, 'anamnese_'+titulo+'.docx');
      }
    );
  }
}

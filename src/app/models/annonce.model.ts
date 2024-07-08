import {Departement} from "./departement.model";

export class Annonce{
  idAnnonce?:any;
  dateAnnonce?:Date;
  motif?:string;
  titre?:string;
  image?:string;
  qrCode?:string;
  departement?:Departement;
}

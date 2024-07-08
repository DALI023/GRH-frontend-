import {User} from "./user.model";

export class Conge{
  idConge?:any;
  dateDebut?:Date;
  dateFin?:Date;
  raison?:String;
  status?:string;
  user?:User;
  showStatusOptions?: boolean;

}

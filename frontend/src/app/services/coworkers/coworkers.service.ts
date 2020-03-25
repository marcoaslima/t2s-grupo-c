import { Injectable } from '@angular/core';
import { LogService } from '../log/log.service';

@Injectable()
export class CoworkersService
{
  constructor(logService: LogService)
  {

  }

  getCoworkers(){
      return[
        {'IdFuncionario': 1, 'NomeCompleto': 'José da Silva Pereira', 'Foto': '', 'Apelido' : 'Zé', 'CorFavorita': 'Azul', 'DataNascimento': '10/12/1993', 'Status': true}
      ];
  }
}

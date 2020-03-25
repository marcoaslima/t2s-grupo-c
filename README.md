# Endpoints
### Funcionário

- Cadastro: POST /cadastro-funcionario/
- Atualização: PUT /cadastro-funcionario/
- Deleção: DELETE /cadastro-funcionario/10
- Recuperar: GET /cadastro-funcionario/10
- Listar: GET /cadastro-funcionario

Representação de um objeto Funcionário:

    {
    "IdFuncionario":  10 //somente em atualizar,
	"NomeCompleto": "string",
	"Foto": bytearray,
	"Apelido": "string",
	"CorFavorita": "string",
	"DataNascimento": "date", //padrão internacional (YYYY-MM-DD) ?
	"Status": true
    }

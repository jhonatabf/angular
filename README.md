# Backoffice 2
## _Alterações e configurações_

É necessário configurar qual serão as rotas e qual os hospitais que deve ser utilizado na build, estas rotas podem ser facilmente altreradas dentro:
- **src/assets/config/api.config.ts**
- **src/assets/config/hospital.config.json**
---
#### api.config.ts
Responsável por indicar qual a baseUrl será utilizada em cada chamada **rest** independente do tipo de verbo utilizado. Deve ser alterado para o endereço definitivo pois atualmente está configurado para *http://localhost:3000/users* que se refere a um serviço MOCK.
#### Estrutura do api.config.ts
```
rotasApi{
  getUser: string = 'http://localhost:3000/users';
  getHospital: string = './assets/config/hospital.config.json';
}
```

#### Como alterar
1. Abrar o arquivo **api.config.ts** em *src/assets/config/*
2. Altere os valores das variaveis que desejar com os endereços corretos. **Não recomenda-se alterar a variavel getHospital.**
---
#### hospital.config.json
Responsável por listar os hospitais que serão apresentados na caixa de seleção da instituição que irá comunicar, em sua estrutura possui o ID que é atribuido para o Back saber a qual conexão deve apontar e um NAME para o usuário saber a qual instituição está utilizado.
#### Estrutura do hospital.config.json
```
{
  "hospitals":[
    {
      "id": "1",
      "name": "Hospital Central A"
    }
  ]
}
```

#### Como alterar
1. Abrar o arquivo **hospital.config.json** em *src/assets/config/*
2. Altere os campos que desejar sem alterar a estrutura e salve.

## Serviços
#### Versão atual
Somente foi criado a chamada a API de busca de utilizadores, essa chamada utiliza a variavel **getUser** do arquivo de configuração **api.config.ts**.
#### Payload
```
[
      {
        "ID": number,
        "NAME": string,
        "PASSWORD": string,
        "EMAIL": string,
        "MOBILE_PHONE": string,
        "IP": string,
        "PORT": string,
        "ID_PROFILE": number,
        "ATTEMPTS_ERRORS": number,
        "LAST_LOGIN": string,
        "STATUS_LOCK": string,
        "DATE_INSERT": string,
        "DATE_UPDATE": string,
        "ID_USER": number,
        "ATIVE": string
      }
]
```
#### Atributos
- **hospital**: string que deve receber o código do hospital que realizará a comunicação.
- **users**: array com a lista de utilizadores retonardos na busca.
- **id**: string com código do utilizador.
- **name**: string com o nome do utilizador.
- **email**: string com o email do utilizador.
- **ative**: string com a situação do utilizador, na base retorna '*N*' para bloqueado e '*S*' para ativo.

#### Verbo e parâmetros:
A rota é do tipo **`GET`** e possui dois parâmetros do tipo *query*
- **name**: Nome digitado na caixa de busca pelo utilizador.
- **hospital**: código do hospital selecionado pelo utilizador.

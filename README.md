# BitzenPet

Projeto construído para vaga de estágio na Bitzen.

## Requisitos do projeto

#### Requisitos mínimos

- [x] O aplicativo deve ser desenvolvido em React Native
- [x] O aplicativo deve seguir o protótipo proposto
- Pets
  - [x] Create
  - [x] List pets
  - [x] View pet
    - [x] Delete pet
- User
  - [x] Exibir perfil
- [x] O aplicativo deve ser desenvolvido com TypeScript
- [x] Tratamento de erros
- [x] Boas práticas
- [x] Princípios do SOLID e DRY

### Requisitos extras

- [x] Fluxo de senha

## APK

O aplicativo foi buildado com credenciais de desenvolvimento, e está disponível para download durante 60 dias a partir do dia de hoje (03/12/2023).

**[Clique aqui para baixar](https://expo.dev/artifacts/eas/2CrnemttWnyh2HpQDSq9w7.apk)**

## Desenvolvimento

#### Instalação

1. Clone o repositório

```bash
git clone git@github.com:henriq4/bitzen-pet.git
```

2. Instale as dependências

```bash
npm install
```

- **Após instalar as dependências, atualizar o patch, como mencionado [aqui](#nativebase-ssrprovider-issue)**

3. Inicie a aplicação

```bash
npm start
```

## Considerações

#### NativeBase SSRProvider issue

A lib de components NativeBase tem uma issue no código (ainda não solucionada) sobre um provider forçado. Para solucionar, foi necessário alterar o arquivo `node_modules/native-base/src/core/NativeBaseProvider.tsx`, removendo o provider <SSRProvider />.

Para facilitar o teste para o código, foi criado um patch de atualização da biblioteca através do Git. Confira o patch [aqui](./patches/native-base+3.4.28.patch).

[Atualizações sobre a issue](https://github.com/GeekyAnts/NativeBase/issues/5778)

#### User image_url

Não foi integrado a image_url do usuário, como visto em páginas como `src/app/(tabs)/account.tsxsrc/app/(tabs)/account.tsx` e `/src/app/(user)/user-data.tsx/home/henriq4/code/bitzen-pet/src/app/(user)/user-data.tsx`, pois a API atualmente está retornando uma url de uma página web que contém a imagem, e não a imagem em si.

Pelas demais imagens estarem sendo retornadas corretamente, acredito que seja um possível erro na API. Portanto, coloquei uma imagem padrão para os usuários.

##### Comparativo entre as responses:

- [Pet response](./docs/image_url_pet.png)

- [User response](./docs/image_url_user.png)

# BitzenPet

Projeto construído para vaga de estágio na Bitzen.

## Considerações

#### NativeBase SSRProvider issue

A lib de components NativeBase tem uma issue no código (ainda não solucionada) sobre um provider forçado. Para solucionar, foi necessário alterar o arquivo `node_modules/native-base/src/core/NativeBaseProvider.tsx`, removendo o provider <SSRProvider />.

Para facilitar o teste para o código, foi criado um patch de atualização da biblioteca através do Git. Confira o patch [aqui](./patches/native-base+3.4.28.patch).

[Atualizações sobre a issue](https://github.com/GeekyAnts/NativeBase/issues/5778)

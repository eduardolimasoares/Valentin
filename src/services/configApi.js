const configApi = (cpf) => {
      method: 'get',
      url: 'http://srv01.vetorsolucoes.com.br:8183/api/clientes/' + cpf,
      headers: {
        Authorization:
          'SXBkOU5GSX1OwoFReUlKQn9OVj4+Tl94eUlwWsKBTWxJOVBLZzZiSkp+TVZnfU9xRXw='
      },
export default configApi
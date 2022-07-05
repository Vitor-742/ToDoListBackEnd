const { expect } = require('chai');
const {describe, it} = require('mocha');
const listService = require('../src/service/listService');
const statusService = require('../src/service/statusService');

describe('Retorna os itens da lista', async () => {
    it('os objetos retornados estão dentro de um array', async () => {
        await listService.createItem({item: 'passear com cachorro'});
        const response = await listService.getAll();
        expect(response.json).to.be.a('array');
    });

    it('os objetos retornados tem as propriedades corretas', async () => {
        const response = await listService.getAll();
        expect(response.json[0]).to.have.property('id');
        expect(response.json[0]).to.have.property('item');
        expect(response.json[0]).to.have.property('status');
    });
});

describe('Cria item na lista', async () => {
    const newItem = {
        item: 'passear com cachorro'
      };
    it('retorna um objeto', async () => {
        const response = await listService.createItem(newItem);
        expect(response.json).to.be.a('object');
    });

    it('o objeto tem as propriedades corretas', async () => {
        const response = await listService.createItem(newItem);
        expect(response.json).to.have.property('id');
        expect(response.json).to.have.property('item');
        expect(response.json).to.have.property('status');
    });

    it('caso o objeto enviado não contenha o item', async () => {
        const response = await listService.createItem({ a: 1 });
        expect(response.status).to.equals(400);
        expect(response.json).to.equals('item é obrigatório');
    });
});

describe('deletar um item da lista', async() => {
    it('caso a função não receba id', async () => {
        const response = await listService.deleteItem({ a: 1 });
        expect(response.json).to.equals('id é obrigatório');
    });
});

describe('atualizar um item', async () => {

    const itemUpdate = {
        item: 'ler jornal',
        id: 2
    };

    it('o objeto retornado tem as propriedades corretas', async () => {
        const response = await listService.updateItem(itemUpdate);
        expect(response.json).to.have.property('id');
        expect(response.json).to.have.property('item');
    });

    it('caso não seja passado item', async () => {
        const response = await listService.updateItem({id: 2});
        expect(response.json).to.equals('item é obrigatório');
    });

    it('caso nao seja passado id', async () => {
        const response = await listService.updateItem({item: 'escrever'});
        expect(response.json).to.equals('id é obrigatório');
    });
});

describe('atualizar um status', () => {
    it('caso nao seja passado status', async () => {
        const response = await statusService.updateStatus({id: 2});
        expect(response.json).to.equals('status é obrigatório');
        expect(response.status).to.equals(400);
    });

    it('caso nao seja passado id', async () => {
        const response = await statusService.updateStatus({status: 'pendente'});
        expect(response.json).to.equals('id é obrigatório');
        expect(response.status).to.equals(400);
    });

    it('caso seja passado status fora do padrão', async () => {
        const response = await statusService.updateStatus({status: 'vou fazer', id: 2});
        expect(response.json).to.equals('status fora do padrão');
        expect(response.status).to.equals(400);
    });
});
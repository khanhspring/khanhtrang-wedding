import api from '../client';

const messageApi = {
  addMessage: (tableId: string, params: AddMessageReq[]) =>
    api.post(`/v1/rows/${tableId}`, params, { baseURL: 'https://api.tablebackend.com' }),
};

export default messageApi;

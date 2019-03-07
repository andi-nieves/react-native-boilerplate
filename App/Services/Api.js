import api from './ApiConfig';
import transformers from './ApiTransform';

export default {
  getGitUsers: async () => {
    const headers = await transformers.getHeaders({ endpoint: 'users' });
    return api.get('users', null, { headers });
  },
};

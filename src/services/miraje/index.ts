import { createServer, Factory, Model } from 'miragejs'
import faker from 'faker';

type User = {
	name: string;
	email: string;
	created_at: string;
}

export const makeServer = () => {
	const server = createServer({
		models: {
			user: Model.extend<Partial<User>>({} as User),
		},
		factories: {
			user: Factory.extend({
				name() {
					return faker.internet.userName();
				},
				email() {
					return faker.internet.email().toLowerCase();
				},
				createdAt() {
					return faker.date.recent();
				},
			})
		},
		seeds(server) {
			server.createList('user', 200);
		},

		routes() {
			this.namespace = 'api';
			this.timing = 750; // delay para as chamadas retornarem
			this.get('/users');
			this.post('/users');

			// Reset para não conflitar com o api routes do next
			this.namespace = '';
			this.passthrough(); // Como se fosse o next() de um middleware em node, executa o que vem depois
		}
	})

	return server;
}
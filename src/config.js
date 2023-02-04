const dev = {
	baseURL: "http://localhost:3080/api/",
	landingPageUrl: "http://localhost:3080",
	stripe: {
		free: "price_1MX7qPK0vBwAJTX5YXX2Yjio",
		entry: "price_1MX7n2K0vBwAJTX5oUvhXp0g",
		pro: "price_1MX7jRK0vBwAJTX5UykbKWxF"
	},
};

const prod = {
	baseURL: '/api/',
	landingPageUrl: "http://snazzy-caramel-592ced.netlify.app",
	stripe: {
		free: "price_1MX7qPK0vBwAJTX5YXX2Yjio",
		entry: "price_1MX7n2K0vBwAJTX5oUvhXp0g",
		pro: "price_1MX7jRK0vBwAJTX5UykbKWxF"
	},
};

const config = process.env.NODE_ENV === 'development'
	? dev
	: prod;

export default config;
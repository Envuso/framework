module.exports = {
	"roots": [
		"<rootDir>/src"
	],
	"testMatch": [
		"**/tests/**/*.test.ts",
	],
	"transform": {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	"moduleNameMapper": {
		"^@Providers/(.*)": "<rootDir>/src/Core/Providers/$1",
		"^@App/(.*)": "<rootDir>/src/App/$1",
		"^@AppControllers/(.*)": "<rootDir>/src/App/Http/Controller/$1",
		"^@AppMiddlewares/(.*)": "<rootDir>/src/App/Http/Middleware/$1",
	}
}

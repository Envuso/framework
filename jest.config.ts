module.exports = {
	"roots": [
		"<rootDir>/src"
	],
	"testMatch": [
		"**/__tests__/**/*.test.ts",
//		"**/?(*.)+(spec|test).+(ts|tsx|js)"
	],
	"transform": {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
	"moduleNameMapper": {
		"^@Core/(.*)": "<rootDir>/src/Core/$1",
		"^@Providers/(.*)": "<rootDir>/src/Core/Providers/$1",
		"^@Decorators": "<rootDir>/src/Core/Decorators/index.ts",
		"^@App/(.*)": "<rootDir>/src/App/$1",
		"^@AppControllers/(.*)": "<rootDir>/src/App/Http/Controller/$1",
		"^@AppMiddlewares/(.*)": "<rootDir>/src/App/Http/Middleware/$1",
		"^@Config": "<rootDir>/src/Config/index.ts",
		"^Components/(.*)": "<rootDir>/src/components/$1"
	}
}

<p align="center">
	<a href="https://envuso.com" target="_blank"><img src="https://envuso.com/assets/mid.png" width="300"></a>
</p>

<p align="center">
	<img alt="npm (scoped)" src="https://img.shields.io/npm/v/@envuso/framework?logoColor=blueviolet">	
	<img alt="GitHub" src="https://img.shields.io/github/license/Envuso/framework">
	<img alt="Wakatime" src="https://wakatime.com/badge/github/Envuso/framework.svg">
</p>

## Envuso framework

Envuso is a backend framework focusing building apis using [Fastify](https://www.fastify.io/) and [MongoDB](https://www.mongodb.com/) support.

You can also build monolith applications using inertiajs/edge.js views.

I'd like to think it's almost a full batteries included framework, but there's still a couple of bits missing.

## Credits:

- [Inversify Express Utils](https://github.com/inversify/inversify-express-utils)
We used inversify express utils in a setup without fastify, which was very barebones but enjoyable. We used this as a small starting point,
converting it to fastify and re-writing a lot of it, to fix any pain points we had.
- [MongoDB Typescript](https://github.com/aljazerzen/mongodb-typescript) 
We used mongodb-typescript as it was a nice starting point for mongo implementation with class transformer

### Twitch chat messages read out via text-to-speech

We did a stream sponsored by Azure today, as part of that, I wrote this twitch bot in NodeJS using TypeScript.

References:
- https://docs.microsoft.com/en-gb/azure/cognitive-services/speech-service/text-to-speech
- https://docs.microsoft.com/en-us/azure/cognitive-services/content-moderator/overview

#### Playing the audio files automatically relies on a Mac CLI command called "afplay"

To run the project:

Install dependencies:
```
npm install
```

Start the typescript watcher:
```
npm run watch
```

Start the node bot using nodemon:
```
npm run serve
```

### Make sure to rename the example.env to .env and fill out your credentials.

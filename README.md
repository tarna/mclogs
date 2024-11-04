# mclogs
TypeScript library for the [mclo.gs](https://mclo.gs) HTTP [API](https://api.mclo.gs)

## Installation
Install mclogs with [NPM](https://npmjs.com)

```bash
  npm install mclogs
```

## Basic Usage
```ts
import mclogs from 'mclogs';

async function main() {
    const data = await mclogs.create('Hello, world!');
    console.log(data);

    const raw = await mclogs.getRaw('qLHAQBz');
    console.log(raw);

    const insights = await mclogs.getInsights('bs47Bij');
    console.log(insights.analysis);

    const limits = await mclogs.getStorageLimits();
    console.log(limits);
}

main();
```

For more examples, visit [example.ts](https://github.com/tarna/mclogs/blob/master/src/example.ts).

## Contributing
Contributions are always welcome!

See [contributing.md](CONTRIBUTING.md) for ways to get started.

## License
[MIT](https://choosealicense.com/licenses/mit)

## Contributors
- [@tarna](https://www.github.com/tarna)
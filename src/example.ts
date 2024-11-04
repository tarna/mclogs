import mclogs from '.';

(async function () {
    const data = await mclogs.create('Hello, world!');
    console.log(data);

    const raw = await mclogs.getRaw('qLHAQBz');
    console.log(raw);

    const insights = await mclogs.getInsights('bs47Bij');
    console.log(insights.analysis);

    const limits = await mclogs.getStorageLimits();
    console.log(limits);
})();
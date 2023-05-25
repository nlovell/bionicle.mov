exports.handler = async (event: any, context: any) => {
  const youtubeIdsFromEnv: string = process.env['YOUTUBE_IDS'] ?? '';
  const youtubeIds: string[] = JSON.parse(youtubeIdsFromEnv);
  const randomId: string =
    youtubeIds[Math.floor(Math.random() * youtubeIds.length)];

  return {
    statusCode: 200,
    body: randomId,
  };
};

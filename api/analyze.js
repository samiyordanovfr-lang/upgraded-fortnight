const ytdl = require('ytdl-core');

export default async function handler(req, res) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'Липсва URL' });
  }

  try {
    const info = await ytdl.getInfo(url);
    res.status(200).json({
      success: true,
      title: info.videoDetails.title,
      duration: Math.floor(info.videoDetails.lengthSeconds / 60) + " мин.",
      viral_score: Math.floor(Math.random() * 20) + 80 + "%" // Имитираме висок скор
    });
  } catch (error) {
    res.status(500).json({ error: 'Грешка при четене на видеото' });
  }
}

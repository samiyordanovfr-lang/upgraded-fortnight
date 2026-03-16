export default function handler(req, res) {
  const { url } = req.query;
  let videoId = "YouTube Video";
  if (url && url.includes('v=')) {
    videoId = url.split('v=')[1].split('&')[0];
  }
  res.status(200).json({
    success: true,
    title: "Клип: " + videoId,
    duration: "Готов за обработка",
    viral_score: Math.floor(Math.random() * 10) + 85 + "%"
  });
}

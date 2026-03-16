export default function handler(req, res) {
  const { url } = req.query; // Това сега е нашият prompt (идея)
  
  const musicStyles = ["Cyberpunk Phonk", "Deep House", "Epic Cinematic", "Lo-Fi Study"];
  const randomMusic = musicStyles[Math.floor(Math.random() * musicStyles.length)];

  res.status(200).json({
    success: true,
    title: "Viral Video Idea: " + url.substring(0, 20) + "...",
    script: "Сцена 1: Силен старт с визуализация на " + url + ". Сцена 2: Текстова анимация със статистика. Сцена 3: Call to action.",
    music: randomMusic,
    viral_score: Math.floor(Math.random() * 15) + 85 + "%"
  });
}

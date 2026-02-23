const happySongs = {
  "Happy by Pharrell Williams": "https://youtu.be/ZbZSe6N_BXs?si=39SKge-ui3EI9-SS",
  "Don't Stop Me Now by Queen": "https://youtu.be/HgzGwKwLmgM?si=JuadxriRXWlkbrh_",
  "Can't Stop This Feeling by Justin Timberlake": "https://youtu.be/ru0K8uYEZWw?si=KquGhU63y3emr4Px",
  "Don't Worry Be Happy by Bobby McFerrin": "https://youtu.be/d-diB65scQU?si=0-b4w_0hPeSy-BXu",
  "I'm Walking on Sunshine by Katrina and the Waves": "https://youtu.be/iPUmE-tne5U?si=oVtfB_RvdE8pwhRc"
};

const sadSongs = {
  "Happier Than Ever by Billie Eilish": "hhttps://youtu.be/5GJWxDKyk3A?si=bmtP7efPq7wtm_nq",
  "Someone You Loved by Lewis Capaldi": "https://youtu.be/zABLecsR5UE?si=4LLRCo8OUBE8kByi",
  "Someone Like You by Adele": "https://youtu.be/hLQl3WQQoQ0?si=RnrES77d1NA8Ywbo",
  "Fix You by Coldplay": "https://youtu.be/k4V3Mo61fJM?si=m4czJX52fMMw5YHk",
  "Hurt by Johnny Cash": "https://youtu.be/8AHCfZTRGiI?si=y55OadM0rMTlsW_Z"
};

const moodSelect = document.getElementById("moodSelect");
const songLinks = document.getElementById("songLinks");
const videoWrap = document.getElementById("videoWrap");
const videoFrame = document.getElementById("videoFrame");

const clearSongs = () => {
  songLinks.innerHTML = "";
};

const hideVideo = () => {
  videoWrap.classList.add("hidden");
  videoFrame.src = "";
};

const showVideo = (embedUrl) => {
  videoFrame.src = embedUrl;
  videoWrap.classList.remove("hidden");
};

const makeSongLink = (title, embedUrl) => {
  const a = document.createElement("a");
  a.href = "#";
  a.textContent = title;

  a.addEventListener("click", (e) => {
    e.preventDefault();
    showVideo(embedUrl);
  });

  return a;
};

const loadSongsForMood = (mood) => {
  clearSongs();
  hideVideo();

  let songs = null;

  if (mood === "happy") {
    songs = happySongs;
  } else if (mood === "sad") {
    songs = sadSongs;
  } else {
    return;
  }

  for (const title in songs) {
    const link = makeSongLink(title, songs[title]);
    songLinks.appendChild(link);
  }
};

moodSelect.addEventListener("change", () => {
  loadSongsForMood(moodSelect.value);
});

hideVideo();
import { gsap } from 'gsap';

document.getElementById('audioFile').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = URL.createObjectURL(file);
    audioPlayer.classList.remove('hidden');

    // GSAP Animations
    gsap.fromTo(audioPlayer, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
  }
});

import { gsap } from 'gsap';

document.getElementById('audioFile').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const audioPlayer = document.getElementById('audioPlayer');
    const analysisSection = document.getElementById('analysisSection');
    const analysisMessage = document.getElementById('analysisMessage');
    const fingerprintButton = document.getElementById('fingerprintButton');

    audioPlayer.src = URL.createObjectURL(file);
    audioPlayer.classList.remove('hidden');

    // GSAP Animations for audio player appearance
    gsap.fromTo(audioPlayer, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });

    // Simulate analysis after audio is loaded
    audioPlayer.addEventListener('loadeddata', () => {
      gsap.fromTo(analysisSection, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1 });
      analysisSection.classList.remove('hidden');

      // Simulate a delay for the analysis process
      setTimeout(() => {
        const fingerprintDetected = Math.random() > 0.5; // Randomly simulate detection

        if (fingerprintDetected) {
          analysisMessage.textContent = "Fingerprint Detected!";
          fingerprintButton.textContent = "Fingerprint Detected";
          fingerprintButton.classList.remove('bg-red-500');
          fingerprintButton.classList.add('bg-green-500');

          // GSAP Animations for glowing button
          gsap.to(fingerprintButton, {
            boxShadow: '0 0 20px rgba(0, 255, 0, 0.8)',
            duration: 1,
            repeat: -1,
            yoyo: true
          });
        } else {
          analysisMessage.textContent = "No Fingerprint Detected.";
          fingerprintButton.textContent = "Fingerprint Not Detected";
          fingerprintButton.classList.remove('bg-green-500');
          fingerprintButton.classList.add('bg-red-500');
        }
      }, 3000); // Simulated analysis time
    });
  }
});

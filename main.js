const messages = {
      1: "haiii ekeeee, kauuu tauuu gaaa? suaraaaa muuuu bisaaa bikinnnn suasanaaa hatiii kuuuu tenangg, kayakkk langittt soreee yangg selaluuuu kuuuu liattt.",
      2: "akuuu bersyukurrr bisaaa kenal kauuuu eakkk, padahal bumiii iniii luasss, tapiii akuuu ketemuuu nyaaa kauuu (yaaa iyaaa laaaa orangg satuuu sekolaaa), tapiii yaaa emangg senengg siii hehee bedaaa soal nyaaa.",
      3: "akuuu harap dihariii ulangg tahunnn muuuu yangg ke-17 iniii kauuu selaluuu senyum dan ketawaaa, akuuu bakal berusahaaa jadiii alasannn kauuu selaluuu senyum dan ketawaaa 😁✨"
    };

    document.getElementById('start-btn').addEventListener('click', () => {
      document.getElementById('intro').classList.add('hidden');
      document.getElementById('langit').classList.remove('hidden');
      const music = document.getElementById('bg-music');
      music.play().catch(() => {});
    });

    document.querySelectorAll('.cloud').forEach(cloud => {
      cloud.addEventListener('click', () => {
        const messageId = cloud.getAttribute('data-message');
        document.getElementById('message-text').textContent = messages[messageId];
        document.getElementById('popup').classList.remove('hidden');
      });
    });

    document.querySelector('.close-btn').addEventListener('click', () => {
      document.getElementById('popup').classList.add('hidden');
    });

    // Agar musik bisa autoplay setelah interaksi
    document.addEventListener('click', () => {
      const music = document.getElementById('bg-music');
      if (music.paused) music.play().catch(() => {});
    }, { once: true });

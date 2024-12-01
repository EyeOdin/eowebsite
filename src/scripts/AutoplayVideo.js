class AutoplayVideo {
  constructor(videoEl) {
    this.video = videoEl;
  }

  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(
        (entry) => {
          if (entry.isIntersecting) {
            this.video?.play();
          } else {
            this.video?.pause();
          }
        },
        { threshold: 1 },
      );
    });

    observer.observe(this.video);
  }
}

export function init(selector = "[data-autoplay-video]") {
  const videos = document.querySelectorAll(selector);

  videos.forEach((video) => {
    new AutoplayVideo(video).init();
  });
}

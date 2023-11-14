export async function playSectionSound(src: string, playBack?: string) {
  if (typeof window !== "undefined") {
    try {
      let audio = new window.Audio(`/sounds/${src}`);
      audio.load();
      await audio.play();
    } catch (error) {}
  }
}
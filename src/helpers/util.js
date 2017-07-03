
export function speak(text, voice) {
    if (window.speechSynthesis) {
        // Create a new instance of SpeechSynthesisUtterance.
        const msg = new SpeechSynthesisUtterance();
        // Set the text.
        msg.text = text;
        // If a voice has been selected, find the voice and set the utterance instance's voice attribute.
        // console.info('speechSynthesis.getVoices()', speechSynthesis.getVoices());
        // msg.voice = 'en-US';
        window.speechSynthesis.speak(msg);
    } else {
      console.warn('The current browser does not support the speechSynthesis API.')
    }
}

export function stopSpeaking() {
  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
  }
}
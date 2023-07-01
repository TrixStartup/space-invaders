Howler.volume(0.5)
const audio = {
  backgroundMusic: new Howl({
    src: './audio/backgroundMusic.wav',
    loop: true
  }),
  bomb: new Howl({
    src: './audio/audio_bomb.mp3'
  }),
  bonus: new Howl({
    src: './audio/audio_bonus.mp3',
    volume: 0.8
  }),
  enemyShoot: new Howl({
    src: './audio/audio_enemyShoot.wav'
  }),
  explode: new Howl({
    src: './audio/audio_explode.wav'
  }),
  gameOver: new Howl({
    src: './audio/audio_gameOver.mp3'
  }),
  select: new Howl({
    src: './audio/audio_select.mp3'
  }),
  shoot: new Howl({
    src: './audio/audio_shoot.wav'
  }),
  start: new Howl({
    src: './audio/audio_start.mp3'
  })
}
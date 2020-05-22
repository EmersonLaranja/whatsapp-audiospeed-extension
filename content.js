// const interval = setInterval(() => {
//   //intervalo que roda de 1 em 1 segundo buscando o header
//   //
//   const header = document.querySelector('._3auIg'); //pegando a classe referente ao header do WhatsApp
//   if (header) {
//     console.log(header);
//     clearInterval(interval); //encontrando o header a busca pode parar

//     const button = document.createElement('button');
//     button.innerHTML = '2x';
//     button.classList.add('twoTimesButton');
//     header.appendChild(button);

//     button.addEventListener('click', () => {
//       const audios = document.querySelectorAll('audio');
//       audios.forEach((audio) => {
//         audio.playbackRate = 2;
//       });
//     });
//   }
// }, 1000);

const interval = setInterval(() => {
  const header = document.querySelector('._3auIg');
  if (header) {
    clearInterval(interval);

    const button = document.createElement('button');
    button.innerHTML = '2x';

    button.classList.add('two-times-button');

    button.addEventListener('click', () => {
      button.classList.toggle('active-button');

      const audios = document.querySelectorAll('audio');

      if (button.classList.contains('active-button')) {
        audios.forEach((audio) => {
          audio.playbackRate = 2;
        });
      } else {
        audios.forEach((audio) => {
          audio.playbackRate = 1;
        });
      }
    });

    header.appendChild(button);
  }
}, 1000);

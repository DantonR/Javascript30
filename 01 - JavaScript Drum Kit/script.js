const d = document;
const kbdAll = d.querySelectorAll("kbd");
const audioAll = d.querySelectorAll("audio");

d.addEventListener("keydown", (e) => {
  let keyPressed = e.key;
  for (let i = 0; i < kbdAll.length; i++) {
    let kbdIndividual = kbdAll[i];
    let kbdIndividualParent = kbdIndividual.parentElement;
    let kbdIndividualParentKey = kbdIndividualParent.dataset.key;
    let kbdIndividualLetter = kbdIndividual.innerHTML.toLowerCase();

    if (keyPressed === kbdIndividualLetter) {
      for (let x = 0; x < audioAll.length; x++) {
        let audioKey = audioAll[x].dataset.key;
        if (kbdIndividualParentKey === audioAll[x].dataset.key) {
          console.dir(audioAll[x].src);
          audioAll[x].play();
        }
      }
    }
  }
});

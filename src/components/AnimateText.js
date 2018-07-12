const FadeText = (function() {
  return { applyAnimation };

  function applyAnimation(elementId) {
    const element = document.getElementById(elementId);

    element.innerHTML = divideLettersToSpans(element);

    fade();
  }

  function divideLettersToSpans(element) {
    const textNode = element.childNodes[0];

    return textNode.nodeValue
      .split('')
      .map((l, i) => {
        if (l === ' ') l = '&nbsp;';
        return `<span class="anim-${i}">${l}</span>`;
      })
      .join('');
  }

  function fade() {
    const spans = document.querySelectorAll('span[class^=anim]');

    const helperArr = shuffle([...Array(spans.length).keys()]);

    let time = 0;

    while (helperArr.length > 0) {
      const index = helperArr[0];
      spans[index].style.transition = 'all .5s';
      time += 250;
      setTimeout(() => {
        spans[index].style.opacity = 0;
      }, time);
      helperArr.shift();
    }
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
})();

export default FadeText;

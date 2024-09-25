// infiniteScroller.ts

const scrollers: NodeListOf<Element> = document.querySelectorAll(".scroller");

function addAnimation(): void {
  scrollers.forEach((scroller: Element) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", "true");

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children);

      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item: ChildNode) => {
        const duplicatedItem = item.cloneNode(true) as ChildNode;
        if (duplicatedItem instanceof Element) {
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        }
      });
    }
  });
}

// If a user hasn't opted in for reduced motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

export { addAnimation };

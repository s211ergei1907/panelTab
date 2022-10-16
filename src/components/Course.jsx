import React from "react";
import App from "../App";

export const Course = (activePanel) => {
  
  return (
    
    <div className={'Course' + ' ' + activePanel === 0 ? 'active-tabs' : 'tabs'}>
      <p>
        Classic literature, paperbacks, newspapers, websites, emails, your
        social media feed, cereal boxes: if it’s in English, read it. Why? Well,
        this content will be full of juicy new vocabulary, as well as a fair
        amount you already know. This helps you improve quickly, as re-exposure
        to learned vocabulary gives you new examples in context, therefore
        reinforcing those words in your mind. On the other hand, learning new
        words and expressions is essential to building your vocabulary arsenal,
        particularly in a language like English with so many words! However,
        don’t just read and move on – next, you’ve got to…
      </p>
      <p>
        This tip is a classic one for good reason: it works! When learning, we
        often enjoy a new word of phrase so much that forgetting it seems
        impossible. But trust us, not everything sticks the first time. To fight
        this, get into the habit of carrying around a funky notebook or using a
        tool like Evernote. Whenever you hear or read a new word or expression,
        write it down in context: that is, in a sentence and with its meaning
        noted. This saves you time as you won’t return to that word and ask
        yourself: “What did that word/expression mean again?”
      </p>
    </div>
  );
};

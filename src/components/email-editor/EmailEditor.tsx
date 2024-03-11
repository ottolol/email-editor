import { Bold, Italic, Eraser, Underline } from "lucide-react";
import styles from "./EmailEditor.module.css";
import { useRef, useState } from "react";

export default function EmailEditor() {
  const [text, setText] =
    useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima ex
  eaque blanditiis odio tenetur, voluptas velit exercitationem quas
  labore, repellat assumenda provident suscipit quis. Quos, cupiditate?
  Laborum, reprehenderit accusantium.`);

  const textRef = useRef<HTMLTextAreaElement | null>(null);

  const getSelectedText = () => {
    if (!textRef.current) return;

    const cursorStart = textRef.current?.selectionStart;
    const cursorEnd = textRef.current?.selectionEnd;
    const selectedText = text.substring(cursorStart, cursorEnd);

    if (!selectedText) return;
  };

  return (
    <div className={styles.emailEditor}>
      <div className={styles.emailEditor__title}>
        <h2>Email-Editor</h2>
      </div>
      <textarea
        className={styles.emailEditor__text}
        ref={textRef}
        spellCheck="false"
        onClick={getSelectedText}
        value={text}
        onChange={(e) => setText(e.target.value)}
      >
        {text}
      </textarea>
      <div className={styles.footer}>
        <div className={styles.footer__icons}>
          <button onClick={() => setText("")}>
            <Eraser />
          </button>
          <button>
            <Bold />
          </button>
          <button>
            <Italic />
          </button>
          <button>
            <Underline />
          </button>
        </div>
        <div className={styles.footer__button}>
          <button>Send Now!</button>
        </div>
      </div>
    </div>
  );
}

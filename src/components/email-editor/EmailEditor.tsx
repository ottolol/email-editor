import { Bold, Italic, Pencil, Underline } from "lucide-react";
import styles from "./EmailEditor.module.css";

export default function EmailEditor() {
  return (
    <div className={styles.emailEditor}>
      <div className={styles.emailEditor__title}>
        <h2>Email-Editor</h2>
      </div>
      <div className={styles.emailEditor__text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt minima ex
        eaque blanditiis odio tenetur, voluptas velit exercitationem quas
        labore, repellat assumenda provident suscipit quis. Quos, cupiditate?
        Laborum, reprehenderit accusantium.
      </div>
      <div className={styles.footer}>
        <div className={styles.footer__icons}>
          <Pencil />
          <Bold />
          <Italic />
          <Underline />
        </div>
        <div className={styles.footer__button}>
          <button>Send Now!</button>
        </div>
      </div>
    </div>
  );
}

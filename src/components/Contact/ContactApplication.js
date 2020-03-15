import React from "react"
import Title from "../Title"
import styles from "../../css/contact.module.css"
const ContactApplication = () => {
  return (
    <section className={styles.contact}>
      <Title title="Prijavite se za" subtitle="akciju" />
      <div className={styles.center}>
        <form
          action="https://formspree.io/xknzjnjo"
          method="POST"
          className={styles.form}
        >
          <div>
            <input
              type="text"
              name="ime i prezime"
              id="name"
              className={styles.formControl}
              placeholder="Ime i Prezime"
            />
          </div>
          <div>
            <input
              type="text"
              name="naziv radne akcije"
              id="name"
              className={styles.formControl}
              placeholder="Naziv Radne Akcije"
            />
          </div>
          <div>
            <input
              type="text"
              name="kontakt telefon "
              id="name"
              className={styles.formControl}
              placeholder="Kontakt Telefon"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              name="poruka"
              id="message"
              rows="10"
              className={styles.formControl}
              placeholder="Pisite nam"
            />
          </div>
          <div>
            <input type="submit" value="posalji" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactApplication

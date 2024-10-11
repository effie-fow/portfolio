import "./Interests.scss";

export const Interests = () => {
  return (
    <article className="interests">
      <div className="interests__intro-container">
        <h1 className="interests__heading">Interests</h1>
        <p className="interests__intro">
          As well as quenching my creative thirst with coding and development
          projects, I find a lot of passion in my personal interests and
          hobbies.
        </p>
      </div>
      <div className="interests__details-container">
        <article className="interests__details-card">
          <h2 className="interests__subheading">Art</h2>
          <p className="interests__details">
            I love the human ability and urge to create, express and communicate
            by any means. I think art can be deeply powerful, and have found
            that many of the most striking moments in my life have been in
            response to art. Most recently, I have found myself particularly
            captured by graphic novels, but do truly enjoy engaging in art in
            all its forms. One of my greatest realisations whilst learning to
            code went something along the lines of, “oh wow,{" "}
            <span className="interests__details--emphasis">this</span> is
            artistic too. Like,{" "}
            <span className="interests__details--emphasis">really</span>{" "}
            artistic!”
          </p>
          <p className="interests__details">
            In being a life-long hobbyist and through experimenting with various
            mediums, I have picked up some technical skills along my way,
            including Adobe Photoshop, Substance Designer & Painter, and
            Blender.
          </p>
          <p className="interests__details">
            The styling of this portfolio is heavily inspired by the album cover
            of an all time favourite of mine (
            <span className="interests__details--emphasis">
              Midnight Organ Fight
            </span>{" "}
            by Frightened Rabbit), and the prints of{" "}
            <a
              href="https://www.concepcionstudios.com/"
              target="blank"
              className="interests__details--link"
            >
              Concepción Studios
            </a>
            . Having collected a handful of their prints over the years, it felt
            natural to lean into this style for my portfolio as it is a style
            that has increasingly felt like home.
          </p>
        </article>
        <article className="interests__details-card">
          <h2 className="interests__subheading">Basketball</h2>
          <p className="interests__details">
            I have found the relationships and skills forged around playing a
            competitive team sport to be absolutely invaluable.
          </p>
          <p className="interests__details">
            Through the organised leagues I have played and coached in, I have
            learnt an immeasurable number of lessons in teamwork, communication
            and leadership. I have a positive attitude towards healthy
            competition and endlessly encourage my teammates.
          </p>
          <p className="interests__details">
            I believe that team sport doesn’t just help us understand our own
            strengths and weaknesses, but encourages us to identify those of our
            peers as well. In turn, we can share, support each other and work
            hard together to accomplish something whilst having fun.
          </p>
          <p className="interests__details">
            These skills extend to coding and learning alike. I enjoy and trust
            the process of building confidence through practice and repetition,
            and relish the opportunities to do so with other people, learning
            from each other and sharing our experiences whilst we strive to
            achieve a shared goal.
          </p>
        </article>
      </div>
    </article>
  );
};

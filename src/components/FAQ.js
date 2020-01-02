import React, { useState } from "react";

const Faq = () => {
  const [faqInputValue, setFaqInputValue] = useState("");
  const handleInputChange = e => {
    setFaqInputValue(e.target.value);
  };

  const doesContainPhrase = (phrase, object) => {
    const keys = Object.keys(object);

    return keys.find(key =>
      object[key].toLowerCase().includes(phrase.toLowerCase())
    );
  };

  return (
    <div className="container">
      <br />
      <h1>O co chcesz mnie zapytać?</h1>
      <br />
      <div className="columns">
        <div className="column is-one-third">
          <input
            name="faq"
            className="input is-half"
            type="text"
            value={faqInputValue}
            onChange={handleInputChange}
            placeholder="np. Dlaczego chcesz u nas pracować?"
          />
        </div>
      </div>
      {dummyData
        .filter(item => doesContainPhrase(faqInputValue, item))
        .map(item => (
          <div key={item.title}>
            <p>{item.title}</p>
            <p>{item.content}</p>
            <hr />
          </div>
        ))}
    </div>
  );
};

export default Faq;

const dummyData = [
  {
    title: "Czy pracuje Pan obecnie w Scrumie?",
    content:
      "Od kilku miesięcy w firmie został wprowadzony scrum. Codziennie standupy o 10.00. Raz w tygodniu meeting z product Ownerem od klienta."
  },
  {
    title: "Jakie technologie Pan zna?",
    content:
      "Moim stackiem technologicznym jest: React, Javascript, Sass, Gatsby, Webpack, CSS3, HTML5, TypeScript, Redux/MobX. Trudno zapamiętać wszystkie technologie. "
  },
  {
    title: "Na jaki etat Pan może pracować?",
    content: "Pełen etat."
  },
  {
    title: "Dlaczego chcesz u nas pracować?",
    content: "Aplikuję do firm które w których widzę potencjał do rozwoju."
  },
  {
    title: "Jaką wartość wniesiesz do firmy?",
    content: "Robię więcej niż ode mnie wymagają. :)"
  },
  {
    title: "Czy interesuje się Pan czymś poza Front-endem?",
    content: "Rozwijam się w kierunku Fullstack Javascript developer."
  }
];

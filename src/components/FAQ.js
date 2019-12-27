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
    title: "Jakie technologie Pan zna?",
    content:
      "Moim stackiem technologicznym jest: React, Javascript, Sass, Gatsby, Webpack, CSS3, HTML5, TypeScript, Redux/MobX. Trudno zapamiętać wszystkie technologie. "
  },
  {
    title: "Na jakim etacie Pan pracuje obecnie?",
    content:
      "Obecnie pracuje na etacie 7/8. Zacząłem w lutym jak jeszcze byłem na studiach stacjonarnych. Na drugi stopień wybieram się na niestacjonarne - mogę pracować na pełen etat"
  },
  {
    title: "Dlaczego chcesz u nas pracować?",
    content:
      "Aplikuję jedynie do firm które w jakiś sposób są interesujące. Najważniejszą rzeczą dla mnie jest możliwość rozwoju. Jeśli otrzymaliście moje CV, musiałem zobaczyć możliwość podniesienia swoich umiejętności."
  },
  {
    title: "Jaką wartość wniesiesz do firmy?",
    content: "Robię więcej niż ode mnie wymagają. :)"
  },
  {
    title: "Czy interesuje się Pan czymś poza Front-endem?",
    content:
      "Próbuję coś uczyć się z back-endu. Próbowałem przerobić tutorial z Ruby on Rails jednak w ogóle nie czuję tego języka, może tutorial do mnie nie trafił. Nie przekreślam tego języka. O wiele więcej do mnie przemawia Node.js."
  }
];

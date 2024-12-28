import { startGame } from "./startGame.js";
export const hyperText = () => {
    let gameContent = document.createElement("div");
    gameContent.classList.add("game-content");
    let header = document.createElement("header");
    header.classList.add("header");
    let container = document.createElement("div");
    container.classList.add("container");
    let title = document.createElement("h1");
    title.classList.add("header__title");
    title.textContent = "Угадай карту";
    let main = document.createElement("main");
    main.classList.add("main");
    let section = document.createElement("section");
    section.classList.add("game-section");
    let gameSectionContainer = document.createElement("div");
    gameSectionContainer.classList.add("game-section__container", "container");
  
    let confetti = document.createElement("div");
    confetti.classList.add("confetti");
  
    document.body.append(gameContent);
    gameContent.append(header);
    header.append(container);
    container.append(title);
    gameContent.append(main);
    main.append(section);
    section.append(gameSectionContainer);
    document.body.append(confetti);
  
    return {
      gameContent,
      header,
      container,
      title,
      main,
      section,
      gameSectionContainer,
      confetti,
    };
  };
  
  export const createGameMenu = () => {
    const title = document.createElement("h2");
    const section = document.querySelector(".game-section__container");
  
    section.innerHTML = '';
    title.textContent = `Выберите сложность`;
    title.classList.add("game-menu__title");
    document.querySelector(".confetti").innerHTML = "";
  
    section.append(title);
  
    const difficulties = [10, 16, 20, 30, 40];
    difficulties.forEach(difficult => {
      const button = createDifficultButton(difficult);
      section.append(button);
    });
  
    function createDifficultButton(difficult) {
      const button = document.createElement("button");
      button.classList.add("game-menu__difficult-btn");
      button.textContent = `${difficult} карт`;
  
      button.addEventListener("click", () => {
        startGame(difficult); 
      });
  
      return button;
    }
  };
  
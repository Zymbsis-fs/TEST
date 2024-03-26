import { localizeElements } from "./localization";
import translations from "../assets/translations";
const header = document.querySelector("#HEADER_JS");

/* ======= menu button ======= */

const menuButton = document.querySelector("#HEADER_MENU_JS");

if (menuButton) {
  menuButton.onclick = () => {
    header.classList.toggle("ih-header-menu-open");
  };
}

const menuNav = document.querySelector("#MENU_NAV_JS");

if (menuNav) {
  menuNav.onclick = (event) => {
    if (event.target.tagName === "A") {
      header.classList.remove("ih-header-menu-open");
    }
  };
}

/* ======= menu navigation  ======= */
const menuNavigation = document.querySelector("#MENU_NAV_JS");

const createNavigationMarkup = () => {
  return ` <li class="ih-menu-item" data-section="about-me" data-lang="header.menu.about_me" type="button">
            ПРО МЕНЕ
          </li>
          <li class="ih-menu-item" data-section="quote" data-lang="header.menu.quote" type="button">
            ВАРТІСТЬ
          </li>
          <li class="ih-menu-item" data-section="reviews"
          data-lang="header.menu.reviews" type="button">
            ВІДГУКИ
          </li>
          <li class="ih-menu-item" data-section="contacts" data-lang="header.menu.contacts" type="button">
            КОНТАКТИ
          </li>`;
};

if (menuNavigation) {
  menuNavigation.onclick = (event) => {
    if (event.target.dataset.section) {
      const sectionId = event.target.dataset.section;
      const element = document.getElementById(sectionId);
      console.log(event.target.dataset.section);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "end",
          inline: "nearest",
        });
      }
    }
  };
}

const renderNavigationMarkup = () => {
  if (menuNavigation) {
    menuNavigation.innerHTML = createNavigationMarkup();
  }
};

renderNavigationMarkup();

/* ======= select ======= */

const selectEl = document.querySelector("#CUSTOM_SELECT_JS");
const selectSmallEl = document.querySelector("#CUSTOM_SELECT_SMALL_JS");
const ITEMS = Object.keys(translations);
const state = { current: ITEMS[0] };

const createCustomSelectOption = (code, order) => {
  return `
    <div data-value="${code}" class="ih-custom-select-option" style="
    ${state.current === code ? "background:transparent; " : ""}order:${
    state.current === code ? 0 : order
  }">${code}</div>
`;
};

const createCustomSelect = () => {
  return `
   <svg class="ih-custom-select-icon">
            <use href="/images/ih-icons-sprite.svg#icon-switch-arrow"></use>
          </svg>
    ${ITEMS.map((code, index) => {
      return createCustomSelectOption(code, index + 1);
    }).join("")}

`;
};

const createCustomSelectSmall = () => {
  return `
        ${ITEMS.map((code) => {
          return `<div data-value="${code}" class="ih-select-lang-btn${
            state.current === code ? " select-lang-btn-active" : ""
          }">${code}</div>`;
        }).join(`<svg class="ih-vertical-line">
           <use href="/images/ih-icons-sprite.svg#icon-vertical-line"></use>
         </svg>`)}
`;
};

const renderCustomSelect = () => {
  if (selectEl) {
    selectEl.innerHTML = createCustomSelect();
    selectEl.onclick = (e) => {
      selectEl.classList.toggle("ih-custom-select-open");
      const newCurrentLang = e.target.dataset.value;
      if (newCurrentLang && newCurrentLang !== state.current) {
        state.current = newCurrentLang;
        localizeElements(newCurrentLang);
        selectEl.innerHTML = createCustomSelect();
      }
    };
  }
};

const renderCustomSelectSmall = () => {
  if (selectSmallEl) {
    selectSmallEl.innerHTML = createCustomSelectSmall();
    selectSmallEl.onclick = (e) => {
      const newCurrentLang = e.target.dataset.value;
      if (newCurrentLang && newCurrentLang !== state.current) {
        state.current = newCurrentLang;
        localizeElements(newCurrentLang);
        selectSmallEl.innerHTML = createCustomSelectSmall();
      }
    };
  }
};

renderCustomSelectSmall();
renderCustomSelect();

/* ======= menu social ======= */

const menuSocial = document.querySelector("#MENU_SOCIAL_JS");

const createMenuSocialMarkup = () => {
  return `  <a
         class="ih-menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://t.me/@alyona_alyona"
       >
         TELEGRAM
       </a>
       <a
         class="ih-menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://www.instagram.com/lolaserenity?igsh=MWxpdGRwM2R2M3Rxcg=="
       >
         INSTAGRAM
       </a>
       <a
         class="ih-menu-social-item"
         target="_blank"
         rel="noopener"
         href="https://www.facebook.com/alyona.stulina"
       >
         FACEBOOK
       </a>`;
};

const renderMenuSocialMarkup = () => {
  if (menuSocial) {
    menuSocial.insertAdjacentHTML("beforeend", createMenuSocialMarkup());
  }
};

renderMenuSocialMarkup();
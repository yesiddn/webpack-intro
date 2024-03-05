const $links = document.getElementById('links');
const $name = document.querySelector('h1');

const data =
{
  name: "Duvan Yesid",
  nickname: "yesiddn",
  description: "Desarrollador Front-end. Inicié en el mundo del desarrollo de software a los 16 años, cuando creé un MVP de biblioteca virtual para mi colegio. Desde entonces he tenido un camino lleno de aprendizaje, donde he tenido el privilegio de conocer a muchas personas extraordinarias.",
  avatar: "https://yesiddn.me/assets/img/profile.jpg",
  social:
    [
      {
        name: "platzi",
        url: "https://platzi.com/p/",
        username: "yesiddn",
      },
      {
        name: "github",
        url: "https://github.com/",
        username: "yesiddn",
      },
      {
        name: "twitter",
        url: "https://twitter.com/",
        username: "yesiddn",
      },
      {
        name: "instagram",
        url: "https://instagram.com/",
        username: "yesiddn",
      },
      {
        name: "linkedin",
        url: "https://www.linkedin.com/in/",
        username: "yesiddn",
      },
    ],

  links:
    [
      {
        name: "portfolio",
        url: "https://yesiddn.me/",
        color: "red",
        emoji: "📔",
      },
    ],
  footer: "Made with Love on Colombia",
};

const main = () => {
  let name = document.createTextNode(data?.name);
  let links = data?.links?.map((link) => {
    return `
      <div class="bg-${link.color}-200 px-4 py-5 w-full flex justify-between">
        <a class="text-sm font-bold text-${link.color}-600 text-center hover:text-${link.color}-800 cursor-pointer"
          href="${link.url}" target="_blank">
          ${link.name}
        </a>
        <span>${link.emoji}</span>
      </div>
    `
  }).join('');

  let newItem = document.createElement('section');
  newItem.innerHTML = links;
  $links.appendChild(newItem);
  $name.appendChild(name);
}

main();

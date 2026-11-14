const app = document.querySelector("#app");

if (app === null) {
  throw new Error("#appが見つからない");
}

const appElement = app;

function renderPage() {
  const page = location.hash;

  if (page === "#detail") {
    appElement.innerHTML = `
      <h1>画面生成方式の詳細</h1>
      <p>それぞれの方式の特徴を説明する。</p>
    `;
  } else {
    appElement.innerHTML = `
      <h1>画面生成方式の比較</h1>
      <p>MPA・SPA・CSR・SSRの違いを比較する。</p>
    `;
  }
}

renderPage();

window.addEventListener("hashchange", renderPage);